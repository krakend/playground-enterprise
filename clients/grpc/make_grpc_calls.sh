#!/bin/bash

grpcurl -d @ -plaintext -protoset ../../images/grpc/fullcatalog.pb localhost:8080 flight_finder.Flights/FindFlight  < flight_payload.json

# since not all the fields are required, you can cereate a loop with some basic payload to call the exposed gRPC service
# 
# for i in {1..4} 
# do
#     grpcurl -d '{ "page": { "cursor": "2"} }' -plaintext -protoset ../../images/grpc/fullcatalog.pb localhost:8080 flight_finder.Flights/FindFlight
# done

# In case you setup a server with mTLS using a certificate, this command might be useful:
#
# grpcurl -d '{ "page": { "cursor": "2"} }' -cacert /home/dhontecillas/work/krakend/opensource/lura/transport/http/server/ca.pem -allow-unknown-fields -protoset ../../images/grpc/fullcatalog.pb localhost:8080 flight_finder.Flights/FindFlight
