![KrakenD Enterprise Playground logo](logo.png)

# KrakenD Enterprise Playground

| _Note:_ **This playground requires a valid KrakenD Enterprise license file copied under `./config/krakend/LICENSE` to work.** |
| --- |

· _[Request a KrakenD EE demo or a trial license »](https://www.krakend.io/enterprise/#contact-sales)_ \
· _See the [open-source version of a similar environment »](https://github.com/krakend/playground-community)_

The KrakenD Enterprise Playground is a demonstration environment that combines the necessary pieces to get you started with our API Gateway, using example use cases.

As KrakenD is an API gateway, we have added surrounding services:

- Internal and third-party services that feed the gateway
- Authentication/authorization examples, including JWT token-based authentication with Keycloak integration, a JWT token revoker, API-Key-based authentication, and basic authentication.
- Static assets to test them by KrakenD Static Server based on disk content
- Integrations with Grafana+Prometheus (metrics), ELK (log storing and visualization), Jaeger (tracing), and RabbitMQ (for async agents).

![KrakenD Docker compose](config/krakend/demo/demo/images/diagram/hero-playground-diagram-new.png)

## Installation
Clone this repository:

    git clone git@github.com:krakendio/playground-enterprise.git

## Demo video
Click to play on Youtube (with subtitles)
<a href="https://youtu.be/VtXXZRO84t8"><img src="https://i.ytimg.com/vi/VtXXZRO84t8/maxresdefault.jpg" width="600" heigth="600"></a>

## Services
The docker-compose.yml includes the following services:

### The API Gateway!
On port `8080`, you have an instance of KrakenD Enterprise Edition with several endpoints. Its configuration is available at `config/krakend/krakend.json`, including descriptive `@comments` for each endpoint.

Visit [http://localhost:8080/demo/](http://localhost:8080/demo/) where you'll find a [static website served by KrakenD](https://www.krakend.io/docs/enterprise/endpoints/serve-static-content/) itself.

### Fake API (Upstream)
Some endpoints connect to a Fake API that you can customize. Everything under the folder `data` is accessible through the built-in web server using the starting path `http://localhost:8080/static/`. You can add or remove data to the web server by adding XML, JSON, or RSS files to the `data` folder. If you want to use an external API, just replace the `host` entry in the configuration.

For instance, the file `data/articles.json` is available at [http://localhost:8080/static/articles.json](http://localhost:8080/static/articles.json)

### Metrics, logs & tracing
KrakenD can export telemetry to several services; this demonstration has a few examples. After starting the service and calling some endpoints, you will see the activity in Jaeger, Grafana, and Kibana.

| Metrics                                                                                                                                                    | Logging | Tracing |
|------------------------------------------------------------------------------------------------------------------------------------------------------------| --- | --- |
| **Grafana** shows the metrics scrapped by Prometheus from KrakenD every 15 seconds [from here](http://localhost:9090/targets) | **Kibana** shows the logs registered by Logstash and persisted in Elasticsearch | **Jaeger** shows the traces of the activity between the client and your end services, including times of hops.|
| URL: [http://localhost:4000](http://localhost:4000)                                                                                 User: `krakend/krakend`| URL: [http://localhost:5601](http://localhost:5601)  Run `make elastic`| URL: [http://localhost:16686](http://localhost:16686) |
| ![grafana screenshot](assets/grafana-screenshot.png)                                                                                                       |![Kibana screenshot](assets/kibana-screenshot.png)|![jaeger screenshot](assets/jaeger-screenshot.png)|

**NOTE**: To import a Kibana dashboard with some valuable metrics, run in the console the following command once all has started:

    make elastic

### Web client
This consumer of the API gateway is a simple Express JS application that interacts with KrakenD to fetch the data. All code is under `images/demo-app/`.

The client is a Single Page Application using the builtin [Keycloak](https://www.keycloak.org/) instance to generate JWT tokens.

**You don't need to install any npm locally**; the docker image will download and install the dependencies in the container.

Visit [http://localhost:3000](http://localhost:3000)

### The async agent
A RabbitMQ instance is ready to accept AMQP messages to be delivered to the gateway.

You can insert messages in the `krakend` queue at [http://localhost:15672/#/queues/%2F/krakend](http://localhost:15672/#/queues/%2F/krakend) (credentials: `guest`/`guest`) and see how the async agent picks them and delivers them in the logs.

### The Revoke Server
The [Revoke Server](https://www.krakend.io/docs/enterprise/authentication/revoke-server/) is a standalone server that coordinates JWT token revocation in a KrakenD Cluster. It is administered using an API ([See contract](https://www.krakend.io/docs/enterprise/authentication/revoke-server/#revoke-server-api-endpoints))

It runs on [http://localhost:8081](http://localhost:8081). Examples of calls:

```
# Revoke a valid token for subject claim with value "jimmy"
curl -iH'Authorization: bearer 639ee23f-f4c5-40c4-855c-912bf01fae87' -XPOST http://localhost:8081/tokens/sub/jimmy

# Check if jimmy's token is revoked
curl -iH'Authorization: bearer 639ee23f-f4c5-40c4-855c-912bf01fae87'  http://localhost:8081/tokens/sub/jimmy
```

### WebSockets
A WebSocket server runs on [ws://localhost:8888](ws://localhost:8888), but you can access it through KrakenD on the page [http://localhost:8080/chat](http://localhost:8080/chat)

### gRPC services
Two microservices with gRPC are available for testing too:

 - A Flights service on gRPC port `4242`
 - A Trains service on gRPC port `4243`

Their contracts are under `images/grpc/contracts`.

You can either:
- Convert gRPC to HTTP under [http://localhost:8080/travel](http://localhost:8080/travel)
- Or consume gRPC directly from KrakenD:

```
cd clients/grpc
./make_grpc_calls.sh
# Requires having grpcurl locally
# go install github.com/fullstorydev/grpcurl/cmd/grpcurl@latest
```

### The IdP
The playground includes a pre-configured Keycloak container with everything ready to go. This container acts as an Identity Provider (IdP) to demonstrate Krakend ability to properly validate JWT tokens issued by it.

There are two pre-generated users with different roles:
* `moderator / moderator`
* `reader / reader`

If you need to create new roles, users or configurations in the Keycloak instance, feel free to do so by browsing to the `krakend` realm administration panel: [http://localhost:8085](http://localhost:8085/admin/master/console/#/krakend/users) (credentials: `admin`/ `admin`)

:warning: All the realm configuration changes done using the administration dashboard **won't be persisted** on container restart. For more information, check [here](./config/keycloak/README.md)

## Start the service
### Running the playground

To start the stack included in docker-compose
```shell
    $ make start
```

To follow the KrakenD logs after the complete stack is up & running (You also have Kibana)
```shell
    $ make logs
```

To shut down the complete stack, removing all the volumes
```shell
    $ make stop
```

## Play!
Fire up your browser, curl, postman, httpie, or anything else you like to interact with any published services.

- KrakenD API Gateway: [http://localhost:8080](http://localhost:8080)
- Demo static website: [http://localhost:8080/demo/](http://localhost:8080/demo/)
- Jaeger (tracing): [http://localhost:16686](http://localhost:16686)
- Kibana (logs): [http://localhost:5601](http://localhost:5601)
- Grafana (metrics): [http://localhost:4000](http://localhost:4000) (krakend/krakend)
- Sample SPA for auth: [http://localhost:8080/auth/](http://localhost:8080/auth/)
- JWT revoker: [http://localhost:9000](http://localhost:9000)
- Keycloak (IdP): [http://localhost:8085](http://localhost:8085)

When you change the `krakend.json`, the changes are applied automatically.

| 💡 Flexible configuration |
| --- |
| The `krakend.json` file was automatically generated using the [extended flexible configuration](https://www.krakend.io/docs/enterprise/configuration/flexible-config/), and you will find the source code under `extended/krakend.tmpl`. <br><br> When working with the flexible configuration, you can optionally ask KrakenD to save the "compiled" output to a file. We've added a command `make compile-flexible-config` so you can see quickly and easily how KrakenD builds the final configuration file based on the existing templates.<br><br>Internally KrakenD's flexible configuration uses [Golang templating syntax](https://pkg.go.dev/text/template#hdr-Examples). |

## Editing the API Gateway endpoints
To add or remove endpoints, edit the file `krakend/krakend.json`. The easiest way to do it is by **dragging this file to the [KrakenD Designer](https://designer.krakend.io/)** and downloading the edited file. If you move the downloaded file to `krakend/krakend.json` the server will apply the changes automatically. If y ou use Chrome, you can edit it directly in the website.

To change the data in the static server (simulating your backend API), edit, add or delete files in the **`data/`** folder.

The following endpoints are worth noticing:

| Feature                                                 | Endpoint                                                                      | Description                                                                                                                                                                                                                                                                                                                          |
|---------------------------------------------------------|-------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Simple request                                          | [`/public`](http://localhost:8080/public)                                     | A simple request calling an internal service and returning a JSON response                                                                                                                                                                                                                                                           |
| Data aggregation and manipulation                       | [`/git/{user}`](http://localhost:8080/git/krakend)                            | Aggregating multiple calls concurrently and manipulating some data from GitHub API                                                                                                                                                                                                                                                   |
| Advanced data manipulation with JMESPATH Query Language | [`/cryptos/{currency}`](http://localhost:8080/cryptos/eur)                    | Get first 5 crypto by market capitalization, then reverse sort them by name, finally filter and rename some fields                                                                                                                                                                                                                   |
| Data masking                                            | [`/user/creditcard`](http://localhost:8080/user/creditcard)                   | Apply data masking to some sensible data. We'll obfuscate credit card information in this case.                                                                                                                                                                                                                                      |
| Dynamic routing based on Headers                        | [`/dynamic/header`](http://localhost:8080/dynamic/header)                     | Use information coming in the headers to dynamically route your request to internal service. You can use `curl -iG -H 'X-Route: hello' 'http://localhost:8080/dynamic/header'` to test it.                                                                                                                                           |
| GraphQL to REST transformation                          | [`/starwars_films/{movie_id}`](http://localhost:8080/starwars_films/1)        | Transforming a GraphQL query into a regular REST API endpoint                                                                                                                                                                                                                                                                        |
| Applying Security Policies                              | [`/track-user`](http://localhost:8080/track-user)                             | Enforce security policies at your discretion for any request. You can use `curl -iG -H'Cookie: GDPR=yes' 'http://localhost:8080/track-user'` to test it.                                                                                                                                                                             |
| Request to gRPC backends                                | [`/travel`](http://localhost:8080/travel?lat=1.2&lon=3.4)                     | Aggregates flights and trains data from two different gRPC services.                                                                                                                                                                                                                                                                 |
| Connection to WebSockets                                | [`/chat/ws/{room}`](ws://localhost:8080/chat/ws/foo)                          | Example WebSockets implementation to illustrate WS connectivity. The WS service will broadcast received messages to all connected users in the chat. Use the [Chat UI](http://localhost:8080/chat) to test how it works.                                                                                                             |
| Caching backend responses                               | [`/market/cached`](http://localhost:8080/market/cached)                       | Caching a backend response (based on cache headers provided by the backend)                                                                                                                                                                                                                                                          |
| Concurrent requests                                     | [`/market/concurrent`](http://localhost:8080/market/concurrent)               | Using [concurrent requests](https://www.krakend.io/docs/endpoints/concurrent-requests/) to gather data from Coingecko API                                                                                                                                                                                                            |
| Sequential calls                                        | [`/sequential`](http://localhost:8080/sequential)                             | Using [sequential proxy](https://www.krakend.io/docs/endpoints/sequential-proxy/) to build a pipe of sequential calls, using values from 1st call response into 2nd call request                                                                                                                                                     |
| Convert a legacy SOAP XML into REST JSON                | [`/capital-of/{country-code}`](http://localhost:8080/capital-of/US)           | Convert the XML returned by a SOAP service that requires a POST of an XML body and answers with a complex XML into a GET REST endpoint answering with a simple JSON                                                                                                                                                                  |
| Wildcards                                               | [`/fake-api/*`](http://localhost:8080/fake-api/user/1.json)                   | Expose all sub-paths under a common location using a single endpoint definition                                                                                                                                                                                                                                                      |
| Basic authentication                                    | [`/fake-api-auth/*`](http://localhost:8080/fake-api-auth/user/1.json)         | Expose information from internal service at fake API using wildcard and adding Basic Authentication                                                                                                                                                                                                                                  |
| Geolocation / Geofencing                                | [`/fake-api-geofence/*`](http://localhost:8080/fake-api-geofence/user/1.json) | Expose information from internal service at fake API using wildcard and applying geofencing (only accessible ) <br>_Note: to use geofencing, you should download a [Maxmind GeoIP City database](https://dev.maxmind.com/geoip/geolite2-free-geolocation-data?lang=en) (commercial or free) and store it on `config/krakend/geoip/`_ |
| JWT-based Authentication                                | [`/private/moderate`](http://localhost:8080/private/moderate)                       | Protects an endpoint validating JWT tokens issued by built-in Keycloak instance. You can access http://localhost:3000/ to test it.                                                                                                                                                                                                                       |
| API Keys based Authentication                           | [`/api-key`](http://localhost:8080/api-key)                                   | Protects and endpoint using an API-Key. You can use `curl -iG -H 'Authorization: Bearer 58427514-be32-0b52-b7c6-d01fada30497' 'http://localhost:8080/api-key'` to test it.                                                                                                                                                           |

You will find more examples with comments in `config/krakend/krakend.json`

## Integration tests
You can run the integration tests defined under the folder `config/krakend/specs/` by executing the following once the server is ready:

    $ docker compose run krakend e2e

To add more tests, add more files in the folder following the syntax of the existing files.

## Checking the configuration
KrakenD will fail to start when the configuration is broken, but here there are a few useful commands you can try before going to production:

**Check that the configuration file is valid:**

```
make check
```

**Audit the configuration:**

```
make audit
```
The example configuration has several flaws and the output will show the associated errors with the different severity levels.

---

## Contribute!
Everyone can get started with KrakenD at this repository.

Try it out! If it doesn't help you, or you think you can add additional endpoints or middleware integrations, please open a pull request! (We may be too used to KrakenD and don't recognize what a starter demo should include.)

Thanks!

---

If you have any questions or doubts, you can find our support resources at [https://www.krakend.io/support/](https://www.krakend.io/support/)

**Interested in a demo or a trial license of KrakenD Enterprise?** [Write us »](https://www.krakend.io/enterprise/#contact-sales)

---

_Note: if you're looking for the KrakenD Community Edition Playground, you'll find it here: https://github.com/krakendio/krakend-playground_
