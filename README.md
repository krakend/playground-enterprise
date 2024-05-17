![KrakenD Enterprise Playground logo](logo.png)

# KrakenD Enterprise Playground

| _Note:_ **This playground requires a valid KrakenD Enterprise license file copied under `./config/krakend/LICENSE` to work.** |
| --- |

· _[Request a KrakenD EE demo or a trial license »](https://www.krakend.io/enterprise/#contact-sales)_ \
· _See the [open-source version of a similar environment »](https://github.com/krakend/playground-community)_

The KrakenD Enterprise Playground is a demonstration environment that combines the necessary pieces to get you started with our API Gateway, using example use cases.

As KrakenD is an API gateway, we have added surrounding services:

- Internal and third-party services that feed the gateway
- Authentication/authorization examples, including JWT token-based authentication with Auth0 integration, a JWT token revoker, API-Key-based authentication, and basic authentication.
- Static assets to test them by KrakenD Static Server based on disk content
- Integrations with Grafana+Influx (metrics), ELK (log storing and visualization), Jaeger (tracing), and RabbitMQ (for async agents).

![KrakenD Docker compose](assets/composer-env.png)

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

### Fake API backend (Upstream)
On port `8000`, you have a simple fake API that provides raw data to the gateway. You can add or remove data by adding XML, JSON, or RSS files in the `data` folder.

It runs in [http://localhost:8000](http://localhost:8000)

### Metrics, logs & tracing
KrakenD can export telemetry to several services; this demonstration has a few examples. After starting the service and calling some endpoints, you will see the activity in Jaeger, Grafana, and Kibana.

| Metrics | Logging | Tracing |
| --- | --- | --- |
| **Grafana** shows the metrics stored by KrakenD on InfluxDB| **Kibana** shows the logs registered by Logstash and persisted in Elasticsearch | **Jaeger** shows the traces of the activity between the client and your end services, including times of hops.|
| URL: [http://localhost:4000](http://localhost:4000) User: `krakend/krakend` | URL: [http://localhost:5601](http://localhost:5601) Run `make elastic` | URL: [http://localhost:16686](http://localhost:16686) |
|![grafana screenshot](assets/grafana-screenshot.png)|![Kibana screenshot](assets/kibana-screenshot.png)|![jaeger screenshot](assets/jaeger-screenshot.png)|

**NOTE**: To import a Kibana dashboard with some valuable metrics, run in the console the following command once all has started:

    make elastic

### Web client
This consumer of the API gateway is a simple Express JS application that interacts with KrakenD to fetch the data. All code is under `images/spa-auth-web/`.

The client is a Single Page Application using [Auth0](https://auth0.com) to generate JWT tokens.

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

## Start the service

### Only if you want to try the Auth0 integration...
Create a new SPA application in [Auth0](https://manage.auth0.com/) and fill the autogenerated values they give you under `images/spa-auth-web/auth0-variables.js`

    var AUTH0_CLIENT_ID='AUTH0_CLIENT_ID';
    var AUTH0_DOMAIN='AUTH0_DOMAIN';
    var AUTH0_AUDIENCE = 'AUTH0_AUDIENCE';

**You must do this before starting the docker-compose.** If you have started docker-compose before setting these variables, you must build the image again with `docker compose build web`.

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

- Demo static website: [http://localhost:8080/demo/](http://localhost:8080/demo/)
- Fake API: [http://localhost:8000](http://localhost:8000)
- KrakenD API Gateway: [http://localhost:8080](http://localhost:8080)
- Jaeger (tracing): [http://localhost:16686](http://localhost:16686)
- Kibana (logs): [http://localhost:5601](http://localhost:5601)
- Grafana (metrics): [http://localhost:4000](http://localhost:4000)
- Sample SPA for auth: [http://localhost:3000](http://localhost:3000)
- JWT revoker: [http://localhost:9000](http://localhost:9000)

When you change the `krakend.json`, the changes are applied automatically.

| 💡 Flexible configuration |
| --- |
| The `krakend.json` file was automatically generated using the [extended flexible configuration](https://www.krakend.io/docs/enterprise/configuration/flexible-config/), and you will find the source code under `extended/krakend.tmpl`. <br><br> When working with the flexible configuration, you can optionally ask KrakenD to save the "compiled" output to a file. We've added a command `make compile-flexible-config` so you can see quickly and easily how KrakenD builds the final configuration file based on the existing templates.<br><br>Internally KrakenD's flexible configuration uses [Golang templating syntax](https://pkg.go.dev/text/template#hdr-Examples). |

## Editing the API Gateway endpoints
To add or remove endpoints, edit the file `krakend/krakend.json`. The easiest way to do it is by **dragging this file to the [KrakenD Designer](https://designer.krakend.io/)** and downloading the edited file. If you move the downloaded file to `krakend/krakend.json` the server will apply the changes automatically. If y ou use Chrome, you can edit it directly in the website.

To change the data in the static server (simulating your backend API), edit, add or delete files in the **`data/`** folder.

The following endpoints are worth noticing:

| Feature                                                 | Endpoint                                                                        | Description                                                                                                                                                                                                                                                                                                                          |
|---------------------------------------------------------|---------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Simple request                                          | [`/public`](http://localhost:8080/public)                                       | A simple request calling an internal service and returning a JSON response                                                                                                                                                                                                                                                           |
| Data aggregation and manipulation                       | [`/git/{user}`](http://localhost:8080/git/krakendio)                            | Aggregating multiple calls concurrently and manipulating some data from GitHub API                                                                                                                                                                                                                                                   |
| Advanced data manipulation with JMESPATH Query Language | [`/crypto/{currency}`](http://localhost:8080/crypto/eur)                        | Get first 5 crypto by market capitalization, then reverse sort them by name, finally filter and rename some fields                                                                                                                                                                                                                   |
| GraphQL to REST transformation                          | [`/starwars_films/{movie_id}`](http://localhost:8080/starwars_films/1)          | Transforming a GraphQL query into a regular REST API endpoint                                                                                                                                                                                                                                                                        |
| Request to gRPC backends                                | [`/travel`](http://localhost:8080/travel?lat=1.2&lon=3.4)                       | Aggregates flights and trains data from two differen gRPC services.                                                                                                                                                                                                                                                                  |
| Connection to WebSockets                                | [`/chat/ws/{room}`](ws://localhost:8080/chat/room/foo)                          | Example WebSockets implementation to illustrate WS connectivity. The WS service will broadcast received messages to all connected users in the chat. Use the [Chat UI](http://localhost:8080/chat) to test how it works.                                                                                                             |
| Caching backend responses                               | [`/market/cached`](http://localhost:8080/market/cached)                         | Caching a backend response (based on cache headers provided by the backend)                                                                                                                                                                                                                                                          |
| Concurrent requests                                     | [`/market/concurrent`](http://localhost:8080/market/concurrent)                 | Using [concurrent requests](https://www.krakend.io/docs/endpoints/concurrent-requests/) to gather data from Coingecko API                                                                                                                                                                                                            |
| Sequential calls                                        | [`/sequential`](http://localhost:8080/sequential)                               | Using [sequential proxy](https://www.krakend.io/docs/endpoints/sequential-proxy/) to build a pipe of sequential calls, using values from 1st call response into 2nd call request                                                                                                                                                     |
| An aggregated requests with a failing backend           | [`/fail`](http://localhost:8080/fail)                                           | An example of how the `X-KrakenD-complete` header works when a backend fails on an aggregated response                                                                                                                                                                                                                               |
| Convert a legacy SOAP XML into REST JSON                | [`/countries-list`](http://localhost:8080/countries-list)                       | Convert the XML returned by a SOAP service that requires a POST of an XML body and answers with a complex XML into a GET REST endpoint answering with a simple JSON                                                                                                                                                                  |
| Wildcards                                               | [`/fake-api/{*}`](http://localhost:8080/fake-api/user/1.json)                   | Expose information from internal service at fake API using wildcard                                                                                                                                                                                                                                                                  |
| Basic authentication                                    | [`/fake-api-auth/{*}`](http://localhost:8080/fake-api-auth/user/1.json)         | Expose information from internal service at fake API using wildcard and adding Basic Authentication                                                                                                                                                                                                                                  |
| Geolocation / Geofencing                                | [`/fake-api-geofence/{*}`](http://localhost:8080/fake-api-geofence/user/1.json) | Expose information from internal service at fake API using wildcard and applying geofencing (only accessible ) <br>_Note: to use geofencing, you should download a [Maxmind GeoIP City database](https://dev.maxmind.com/geoip/geolite2-free-geolocation-data?lang=en) (commercial or free) and store it on `config/krakend/geoip/`_ |
| JWT-based Authentication                                | [`/private/auth0`](http://localhost:8080/private/auth0)                         | Protects and endpoint validating JWT tokens issued by Auth0                                                                                                                                                                                                                                                                          |
| API Keys based Authentication                           | [`/api-key`](http://localhost:8080/api-key)                                     | Protects and endpoint using an API-Key                                                                                                                                                                                                                                                                                               |

You will find more examples with comments in `config/krakend/krakend.json`

## Integration tests
You can run the integration tests defined under the folder `config/krakend/specs/` by executing the following once the server is ready:

    $ docker-compose run krakend e2e

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
