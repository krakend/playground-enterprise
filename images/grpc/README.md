# GRPC Example

In this directory you can find the source code used to build
gRPC backend services that can be used to test KrakenD features. 

The services are designed to model some trip finding services,
so we can put an example of an endpoint to search travel options
for a trip.

So we have:

- the `flights` service (built upon a `proto3` gRPC service definition).
- the `trains` service (built upon a `proto2` gRPC service definition).

### Folder structure:

- `contracts`: here is were we place all the `.proto` files definitions,
    for our two services, as well as the `.proto` files for the 
    dependencies our definitions use.
    
- `genlib`: here is where the generated **client** and **server** 
    `protoc` generated code, to implement the services
    
- `flights`: the actual implementation of the flights service
    (that makes use of the generated lib under `genlib/flights`).

- `trains`: the actual implementation of the trains service
    (that makes use of the genrated lib under `genlib/trains`).

- `defs`: here we have the binary definitions of the `.proto`
    files.

## Flights

The `flights` service is based on a `proto3` gRPC service
definition.

## Trains

The `trains` service is based on a `proto2` gRPC service
definition.

The server uses a **self signed** certificate, to
showcase how a `gRPC` service can use `TLS`.

The main `Train` gRPC call has a couple of fields
declared as `required` (a `proto2` "feature" that
is no longer supported in `proto3`)


## Makefile

The `Makefile` contains the different steps used to build
the services. 

When a service is created or modified usually the steps to
follow are:

1. Modify the `contracts`, to update the interface the services
    will use.
2. Recreate the `grpc` librarie to be used by the services implementation.
3. Modify the services, and create the new binaries.
4. Dockerize the new service
5. Create the binary proto definitions to be used in KrakenD


Following these steps we document the `Makefile` targets to use:

### `getknowntypes`

Before start writting our own contracts, we want to fetch
the "well known types" proto definitions, like the `Timestamp`
or the `Duration` types. 

Those types are "included" in the `protoc` tools, so when
generating your own contracts, you do not need to 
reference them explicitly, but if you want to generate
the binary definitions, you will need to have the `.proto` sources.

Run:

```
make get_known_types
```

to fetch them.

Once you have those types, you can write and modify your own ones.

### `generate_grpc_flights_lib` and `generate_grpc_trains_lib`

Those two targets will use the `protoc` tool to generate the `Go`
code for the `client` and `server` parts of the fake services,
ane will place them under the `genlib` directory.


## The flighs service: `flights_server`

This target will just build the gRPC service for flights.

```
make flights_server
```

## The trains service: `trains_server` and `generate_trains_cert`

The trains services is coded to make use of a certificate, so
there is an extra targeto to regenerate a self signed certificate
that will be placed under `trains/certs`.

```
make trains_server
make generate_trains_cert
```

### `bin_proto_multiple_files` and `bin_proto_single_file`

These are the steps to generate the binary `.pb` definitions
from the `.proto` source files. Those binary definitions
can be used for the KrakenD gRPC catalog.

You should **use only one of these two targets**: as it
is explained in the [Generating Binary Protocol Buffer Files](https://www.krakend.io/docs/enterprise/backends/grpc/#generating-binary-protocol-buffer-files-pb)
official KrakenD documentation, binary files can be each one
in its own file (`bin_proto_multiple_files`) or all definitions
can be collected in a single file (`bin_proto_single_file`).

The multiplle files ones makes use of a script found in the
`contracts` directory called `compile.sh`.
