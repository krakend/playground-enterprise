package main

import (
	"fmt"
	"net"
	"os"

	"google.golang.org/grpc"
	// timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	flightspb "github.com/krakendio/playground-enterprise/images/grpc/genlib/flights"
)

const (
	ENV_PORT string = "FLIGHTSSERVER_PORT"
)

func main() {
	fes := NewFlightsEchoServer()

	s := grpc.NewServer()
	flightspb.RegisterFlightsServer(s, fes)

	port := os.Getenv(ENV_PORT)
	if port == "" {
		port = "4242"
	}
	bindAddr := fmt.Sprintf(":%s", port)

	fmt.Printf("binding to %s\n", bindAddr)
	ls, err := net.Listen("tcp", bindAddr)
	if err != nil {
		fmt.Printf("cannot bind to %s: %s\n", bindAddr, err.Error())
		return
	}

	fmt.Printf("running echo server ...\n")
	if err := s.Serve(ls); err != nil {
		fmt.Printf("failed to start server", err.Error())
	}
}
