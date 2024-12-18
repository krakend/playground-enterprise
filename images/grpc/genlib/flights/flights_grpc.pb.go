// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v5.28.3
// source: flights/flights.proto

package flights

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	Flights_FindFlight_FullMethodName = "/flight_finder.Flights/FindFlight"
	Flights_BookFlight_FullMethodName = "/flight_finder.Flights/BookFlight"
)

// FlightsClient is the client API for Flights service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type FlightsClient interface {
	FindFlight(ctx context.Context, in *FindFlightRequest, opts ...grpc.CallOption) (*FindFlightResponse, error)
	BookFlight(ctx context.Context, in *BookFlightRequest, opts ...grpc.CallOption) (*BookFlightResponse, error)
}

type flightsClient struct {
	cc grpc.ClientConnInterface
}

func NewFlightsClient(cc grpc.ClientConnInterface) FlightsClient {
	return &flightsClient{cc}
}

func (c *flightsClient) FindFlight(ctx context.Context, in *FindFlightRequest, opts ...grpc.CallOption) (*FindFlightResponse, error) {
	out := new(FindFlightResponse)
	err := c.cc.Invoke(ctx, Flights_FindFlight_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *flightsClient) BookFlight(ctx context.Context, in *BookFlightRequest, opts ...grpc.CallOption) (*BookFlightResponse, error) {
	out := new(BookFlightResponse)
	err := c.cc.Invoke(ctx, Flights_BookFlight_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// FlightsServer is the server API for Flights service.
// All implementations must embed UnimplementedFlightsServer
// for forward compatibility
type FlightsServer interface {
	FindFlight(context.Context, *FindFlightRequest) (*FindFlightResponse, error)
	BookFlight(context.Context, *BookFlightRequest) (*BookFlightResponse, error)
	mustEmbedUnimplementedFlightsServer()
}

// UnimplementedFlightsServer must be embedded to have forward compatible implementations.
type UnimplementedFlightsServer struct {
}

func (UnimplementedFlightsServer) FindFlight(context.Context, *FindFlightRequest) (*FindFlightResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FindFlight not implemented")
}
func (UnimplementedFlightsServer) BookFlight(context.Context, *BookFlightRequest) (*BookFlightResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method BookFlight not implemented")
}
func (UnimplementedFlightsServer) mustEmbedUnimplementedFlightsServer() {}

// UnsafeFlightsServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to FlightsServer will
// result in compilation errors.
type UnsafeFlightsServer interface {
	mustEmbedUnimplementedFlightsServer()
}

func RegisterFlightsServer(s grpc.ServiceRegistrar, srv FlightsServer) {
	s.RegisterService(&Flights_ServiceDesc, srv)
}

func _Flights_FindFlight_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FindFlightRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FlightsServer).FindFlight(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Flights_FindFlight_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FlightsServer).FindFlight(ctx, req.(*FindFlightRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Flights_BookFlight_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BookFlightRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FlightsServer).BookFlight(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Flights_BookFlight_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FlightsServer).BookFlight(ctx, req.(*BookFlightRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Flights_ServiceDesc is the grpc.ServiceDesc for Flights service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Flights_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "flight_finder.Flights",
	HandlerType: (*FlightsServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "FindFlight",
			Handler:    _Flights_FindFlight_Handler,
		},
		{
			MethodName: "BookFlight",
			Handler:    _Flights_BookFlight_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "flights/flights.proto",
}
