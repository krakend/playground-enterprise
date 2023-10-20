package main

import (
	"context"
	"encoding/json"
	"fmt"
	"os"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/metadata"

	flightspb "github.com/krakendio/playground-enterprise/images/grpc/genlib/flights"
	libpb "github.com/krakendio/playground-enterprise/images/grpc/genlib/lib"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
)

const (
	ENV_HOST string = "FLIGHTSCLIENT_HOST"
)

func main() {
	fmt.Printf("this is a client...\n")

	host := os.Getenv(ENV_HOST)
	if host == "" {
		host = "localhost:4242"
		fmt.Printf("env var %s not set, using HOST:  %s", ENV_HOST, host)
	}
	c := NewFlightsClient(host)
	c.FindFlight()
	// c.BookFlight()
}

type FlightsClient struct {
	conn flightspb.FlightsClient
}

func NewFlightsClient(addr string) *FlightsClient {
	conn, err := grpc.Dial(addr, grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		fmt.Printf("CANNOT Dial : %s\n", err.Error())
		return nil
	}
	return &FlightsClient{
		conn: flightspb.NewFlightsClient(conn),
	}
}

func (c *FlightsClient) FindFlight() {
	ctx := metadata.AppendToOutgoingContext(context.Background(),
		"X-My-Custom-Header", "ThisIsMyCustomValue")
	resp, err := c.conn.FindFlight(ctx, &flightspb.FindFlightRequest{
		Page: &libpb.Page{
			Size:   20,
			Cursor: "foo",
		},
		Departure: &libpb.TimeRange{
			Start: timestamppb.Now(),
		},
	})

	if err != nil {
		fmt.Printf("\ncannot get flights %s\n", err.Error())
		return
	}
	prettyPrint("Flights", resp)
}

func (c *FlightsClient) BookFlight() {
	ctx := metadata.AppendToOutgoingContext(context.Background(),
		"X-My-Custom-Header", "ThisIsMyCustomValue")
	resp, err := c.conn.BookFlight(ctx, &flightspb.BookFlightRequest{
		FlightId: "foobar",
		Passengers: []*flightspb.Passenger{
			&flightspb.Passenger{
				FullName: "Foo",
			},
		},
	})

	if err != nil {
		fmt.Printf("\ncannot book flight %s\n", err.Error())
		return
	}
	prettyPrint("Flights", resp)

}

func prettyPrint(title string, i interface{}) {
	bytesOut, err := json.MarshalIndent(i, "", "  ")
	if err != nil {
		fmt.Printf("cannot display %s\n", err.Error())
		return
	}
	fmt.Printf("\n**[ %s ]**\n%s\n__[%s]__\n", title, string(bytesOut), title)
}
