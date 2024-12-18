package main

import (
	"fmt"
	"net"

	"google.golang.org/grpc"
	// timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	flightspb "github.com/krakendio/playground-enterprise/images/grpc/genlib/flights"
)

func main() {
	fes := NewFlightsEchoServer()

	s := grpc.NewServer()
	flightspb.RegisterFlightsServer(s, fes)

	// TODO: select the listen port
	fmt.Printf("binding to :4242\n")
	ls, err := net.Listen("tcp", ":4242")
	if err != nil {
		fmt.Printf("cannot bind to port: %s\n", err.Error())
		return
	}

	fmt.Printf("running echo server ...\n")
	if err := s.Serve(ls); err != nil {
		fmt.Printf("failed to start server", err.Error())
	}
}
