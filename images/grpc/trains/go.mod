module github.com/playground-enterprise/images/grpc/trains

go 1.20

replace github.com/krakendio/playground-enterprise/images/grpc/genlib/trains => ../genlib/trains

require (
	github.com/krakendio/playground-enterprise/images/grpc/genlib v0.0.0-20230919101031-fce6544db29e
	google.golang.org/grpc v1.54.0
	google.golang.org/protobuf v1.30.0
)

require (
	github.com/golang/protobuf v1.5.2 // indirect
	golang.org/x/net v0.8.0 // indirect
	golang.org/x/sys v0.6.0 // indirect
	golang.org/x/text v0.8.0 // indirect
	google.golang.org/genproto v0.0.0-20230110181048-76db0878b65f // indirect
)
