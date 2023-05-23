// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.29.0
// 	protoc        v3.21.12
// source: flights/flights.proto

package flights

import (
	lib "github.com/krakendio/playground-enterprise/images/grpc/genlib/lib"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Class int32

const (
	Class_NO_CLASS Class = 0
	Class_ECONOMY  Class = 1
	Class_BUSINESS Class = 2
)

// Enum value maps for Class.
var (
	Class_name = map[int32]string{
		0: "NO_CLASS",
		1: "ECONOMY",
		2: "BUSINESS",
	}
	Class_value = map[string]int32{
		"NO_CLASS": 0,
		"ECONOMY":  1,
		"BUSINESS": 2,
	}
)

func (x Class) Enum() *Class {
	p := new(Class)
	*p = x
	return p
}

func (x Class) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Class) Descriptor() protoreflect.EnumDescriptor {
	return file_flights_flights_proto_enumTypes[0].Descriptor()
}

func (Class) Type() protoreflect.EnumType {
	return &file_flights_flights_proto_enumTypes[0]
}

func (x Class) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Class.Descriptor instead.
func (Class) EnumDescriptor() ([]byte, []int) {
	return file_flights_flights_proto_rawDescGZIP(), []int{0}
}

type FindFlightRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Page        *lib.Page      `protobuf:"bytes,1,opt,name=page,proto3" json:"page,omitempty"`
	Origin      *lib.Location  `protobuf:"bytes,2,opt,name=origin,proto3" json:"origin,omitempty"`
	Destination *lib.Location  `protobuf:"bytes,3,opt,name=destination,proto3" json:"destination,omitempty"`
	Departure   *lib.TimeRange `protobuf:"bytes,4,opt,name=departure,proto3" json:"departure,omitempty"`
	Arrival     *lib.TimeRange `protobuf:"bytes,5,opt,name=arrival,proto3" json:"arrival,omitempty"`
	Classes     []Class        `protobuf:"varint,6,rep,packed,name=classes,proto3,enum=flight_finder.Class" json:"classes,omitempty"`
	// Types that are assignable to Discount:
	//
	//	*FindFlightRequest_MinPercentageDiscount
	//	*FindFlightRequest_MinAmountDiscount
	Discount isFindFlightRequest_Discount `protobuf_oneof:"discount"`
}

func (x *FindFlightRequest) Reset() {
	*x = FindFlightRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_flights_flights_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FindFlightRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FindFlightRequest) ProtoMessage() {}

func (x *FindFlightRequest) ProtoReflect() protoreflect.Message {
	mi := &file_flights_flights_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FindFlightRequest.ProtoReflect.Descriptor instead.
func (*FindFlightRequest) Descriptor() ([]byte, []int) {
	return file_flights_flights_proto_rawDescGZIP(), []int{0}
}

func (x *FindFlightRequest) GetPage() *lib.Page {
	if x != nil {
		return x.Page
	}
	return nil
}

func (x *FindFlightRequest) GetOrigin() *lib.Location {
	if x != nil {
		return x.Origin
	}
	return nil
}

func (x *FindFlightRequest) GetDestination() *lib.Location {
	if x != nil {
		return x.Destination
	}
	return nil
}

func (x *FindFlightRequest) GetDeparture() *lib.TimeRange {
	if x != nil {
		return x.Departure
	}
	return nil
}

func (x *FindFlightRequest) GetArrival() *lib.TimeRange {
	if x != nil {
		return x.Arrival
	}
	return nil
}

func (x *FindFlightRequest) GetClasses() []Class {
	if x != nil {
		return x.Classes
	}
	return nil
}

func (m *FindFlightRequest) GetDiscount() isFindFlightRequest_Discount {
	if m != nil {
		return m.Discount
	}
	return nil
}

func (x *FindFlightRequest) GetMinPercentageDiscount() int32 {
	if x, ok := x.GetDiscount().(*FindFlightRequest_MinPercentageDiscount); ok {
		return x.MinPercentageDiscount
	}
	return 0
}

func (x *FindFlightRequest) GetMinAmountDiscount() int32 {
	if x, ok := x.GetDiscount().(*FindFlightRequest_MinAmountDiscount); ok {
		return x.MinAmountDiscount
	}
	return 0
}

type isFindFlightRequest_Discount interface {
	isFindFlightRequest_Discount()
}

type FindFlightRequest_MinPercentageDiscount struct {
	MinPercentageDiscount int32 `protobuf:"varint,7,opt,name=min_percentage_discount,json=minPercentageDiscount,proto3,oneof"`
}

type FindFlightRequest_MinAmountDiscount struct {
	MinAmountDiscount int32 `protobuf:"varint,8,opt,name=min_amount_discount,json=minAmountDiscount,proto3,oneof"`
}

func (*FindFlightRequest_MinPercentageDiscount) isFindFlightRequest_Discount() {}

func (*FindFlightRequest_MinAmountDiscount) isFindFlightRequest_Discount() {}

type Discount struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Expires string `protobuf:"bytes,1,opt,name=expires,proto3" json:"expires,omitempty"`
	// Types that are assignable to DiscountType:
	//
	//	*Discount_Percent
	//	*Discount_Absolute
	DiscountType isDiscount_DiscountType `protobuf_oneof:"discount_type"`
}

func (x *Discount) Reset() {
	*x = Discount{}
	if protoimpl.UnsafeEnabled {
		mi := &file_flights_flights_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Discount) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Discount) ProtoMessage() {}

func (x *Discount) ProtoReflect() protoreflect.Message {
	mi := &file_flights_flights_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Discount.ProtoReflect.Descriptor instead.
func (*Discount) Descriptor() ([]byte, []int) {
	return file_flights_flights_proto_rawDescGZIP(), []int{1}
}

func (x *Discount) GetExpires() string {
	if x != nil {
		return x.Expires
	}
	return ""
}

func (m *Discount) GetDiscountType() isDiscount_DiscountType {
	if m != nil {
		return m.DiscountType
	}
	return nil
}

func (x *Discount) GetPercent() int32 {
	if x, ok := x.GetDiscountType().(*Discount_Percent); ok {
		return x.Percent
	}
	return 0
}

func (x *Discount) GetAbsolute() int32 {
	if x, ok := x.GetDiscountType().(*Discount_Absolute); ok {
		return x.Absolute
	}
	return 0
}

type isDiscount_DiscountType interface {
	isDiscount_DiscountType()
}

type Discount_Percent struct {
	Percent int32 `protobuf:"varint,2,opt,name=percent,proto3,oneof"`
}

type Discount_Absolute struct {
	Absolute int32 `protobuf:"varint,3,opt,name=absolute,proto3,oneof"`
}

func (*Discount_Percent) isDiscount_DiscountType() {}

func (*Discount_Absolute) isDiscount_DiscountType() {}

type FlightInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Origin      *lib.Location          `protobuf:"bytes,1,opt,name=origin,proto3" json:"origin,omitempty"`
	Destination *lib.Location          `protobuf:"bytes,2,opt,name=destination,proto3" json:"destination,omitempty"`
	Departure   *timestamppb.Timestamp `protobuf:"bytes,3,opt,name=departure,proto3" json:"departure,omitempty"`
	Arrival     *timestamppb.Timestamp `protobuf:"bytes,4,opt,name=arrival,proto3" json:"arrival,omitempty"`
	Discounts   map[string]*Discount   `protobuf:"bytes,5,rep,name=discounts,proto3" json:"discounts,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	FlightId    string                 `protobuf:"bytes,6,opt,name=flight_id,json=flightId,proto3" json:"flight_id,omitempty"`
}

func (x *FlightInfo) Reset() {
	*x = FlightInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_flights_flights_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FlightInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FlightInfo) ProtoMessage() {}

func (x *FlightInfo) ProtoReflect() protoreflect.Message {
	mi := &file_flights_flights_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FlightInfo.ProtoReflect.Descriptor instead.
func (*FlightInfo) Descriptor() ([]byte, []int) {
	return file_flights_flights_proto_rawDescGZIP(), []int{2}
}

func (x *FlightInfo) GetOrigin() *lib.Location {
	if x != nil {
		return x.Origin
	}
	return nil
}

func (x *FlightInfo) GetDestination() *lib.Location {
	if x != nil {
		return x.Destination
	}
	return nil
}

func (x *FlightInfo) GetDeparture() *timestamppb.Timestamp {
	if x != nil {
		return x.Departure
	}
	return nil
}

func (x *FlightInfo) GetArrival() *timestamppb.Timestamp {
	if x != nil {
		return x.Arrival
	}
	return nil
}

func (x *FlightInfo) GetDiscounts() map[string]*Discount {
	if x != nil {
		return x.Discounts
	}
	return nil
}

func (x *FlightInfo) GetFlightId() string {
	if x != nil {
		return x.FlightId
	}
	return ""
}

type FindFlightResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Page    *lib.Page     `protobuf:"bytes,1,opt,name=page,proto3" json:"page,omitempty"`
	Flights []*FlightInfo `protobuf:"bytes,2,rep,name=flights,proto3" json:"flights,omitempty"`
}

func (x *FindFlightResponse) Reset() {
	*x = FindFlightResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_flights_flights_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FindFlightResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FindFlightResponse) ProtoMessage() {}

func (x *FindFlightResponse) ProtoReflect() protoreflect.Message {
	mi := &file_flights_flights_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FindFlightResponse.ProtoReflect.Descriptor instead.
func (*FindFlightResponse) Descriptor() ([]byte, []int) {
	return file_flights_flights_proto_rawDescGZIP(), []int{3}
}

func (x *FindFlightResponse) GetPage() *lib.Page {
	if x != nil {
		return x.Page
	}
	return nil
}

func (x *FindFlightResponse) GetFlights() []*FlightInfo {
	if x != nil {
		return x.Flights
	}
	return nil
}

type Passenger struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	FullName  string               `protobuf:"bytes,1,opt,name=full_name,json=fullName,proto3" json:"full_name,omitempty"`
	Discounts map[string]*Discount `protobuf:"bytes,2,rep,name=discounts,proto3" json:"discounts,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *Passenger) Reset() {
	*x = Passenger{}
	if protoimpl.UnsafeEnabled {
		mi := &file_flights_flights_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Passenger) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Passenger) ProtoMessage() {}

func (x *Passenger) ProtoReflect() protoreflect.Message {
	mi := &file_flights_flights_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Passenger.ProtoReflect.Descriptor instead.
func (*Passenger) Descriptor() ([]byte, []int) {
	return file_flights_flights_proto_rawDescGZIP(), []int{4}
}

func (x *Passenger) GetFullName() string {
	if x != nil {
		return x.FullName
	}
	return ""
}

func (x *Passenger) GetDiscounts() map[string]*Discount {
	if x != nil {
		return x.Discounts
	}
	return nil
}

type BookFlightRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	FlightId   string       `protobuf:"bytes,1,opt,name=flight_id,json=flightId,proto3" json:"flight_id,omitempty"`
	Passengers []*Passenger `protobuf:"bytes,2,rep,name=passengers,proto3" json:"passengers,omitempty"`
}

func (x *BookFlightRequest) Reset() {
	*x = BookFlightRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_flights_flights_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BookFlightRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BookFlightRequest) ProtoMessage() {}

func (x *BookFlightRequest) ProtoReflect() protoreflect.Message {
	mi := &file_flights_flights_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BookFlightRequest.ProtoReflect.Descriptor instead.
func (*BookFlightRequest) Descriptor() ([]byte, []int) {
	return file_flights_flights_proto_rawDescGZIP(), []int{5}
}

func (x *BookFlightRequest) GetFlightId() string {
	if x != nil {
		return x.FlightId
	}
	return ""
}

func (x *BookFlightRequest) GetPassengers() []*Passenger {
	if x != nil {
		return x.Passengers
	}
	return nil
}

type BookFlightResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ConfirmationId string `protobuf:"bytes,1,opt,name=confirmation_id,json=confirmationId,proto3" json:"confirmation_id,omitempty"`
}

func (x *BookFlightResponse) Reset() {
	*x = BookFlightResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_flights_flights_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BookFlightResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BookFlightResponse) ProtoMessage() {}

func (x *BookFlightResponse) ProtoReflect() protoreflect.Message {
	mi := &file_flights_flights_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BookFlightResponse.ProtoReflect.Descriptor instead.
func (*BookFlightResponse) Descriptor() ([]byte, []int) {
	return file_flights_flights_proto_rawDescGZIP(), []int{6}
}

func (x *BookFlightResponse) GetConfirmationId() string {
	if x != nil {
		return x.ConfirmationId
	}
	return ""
}

var File_flights_flights_proto protoreflect.FileDescriptor

var file_flights_flights_proto_rawDesc = []byte{
	0x0a, 0x15, 0x66, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x73, 0x2f, 0x66, 0x6c, 0x69, 0x67, 0x68, 0x74,
	0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x66, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x5f,
	0x66, 0x69, 0x6e, 0x64, 0x65, 0x72, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d,
	0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x14, 0x6c, 0x69, 0x62, 0x2f, 0x70, 0x61, 0x67,
	0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x12, 0x6c,
	0x69, 0x62, 0x2f, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x1a, 0x14, 0x6c, 0x69, 0x62, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x5f, 0x72, 0x61, 0x6e, 0x67,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xcd, 0x03, 0x0a, 0x11, 0x46, 0x69, 0x6e, 0x64,
	0x46, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x24, 0x0a,
	0x04, 0x70, 0x61, 0x67, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x70, 0x61,
	0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x50, 0x61, 0x67, 0x65, 0x52, 0x04, 0x70,
	0x61, 0x67, 0x65, 0x12, 0x34, 0x0a, 0x06, 0x6f, 0x72, 0x69, 0x67, 0x69, 0x6e, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x6b, 0x72, 0x61, 0x6b, 0x65, 0x6e, 0x64, 0x5f, 0x70, 0x6c,
	0x61, 0x79, 0x67, 0x72, 0x6f, 0x75, 0x6e, 0x64, 0x2e, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x52, 0x06, 0x6f, 0x72, 0x69, 0x67, 0x69, 0x6e, 0x12, 0x3e, 0x0a, 0x0b, 0x64, 0x65, 0x73,
	0x74, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c,
	0x2e, 0x6b, 0x72, 0x61, 0x6b, 0x65, 0x6e, 0x64, 0x5f, 0x70, 0x6c, 0x61, 0x79, 0x67, 0x72, 0x6f,
	0x75, 0x6e, 0x64, 0x2e, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0b, 0x64, 0x65,
	0x73, 0x74, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x3b, 0x0a, 0x09, 0x64, 0x65, 0x70,
	0x61, 0x72, 0x74, 0x75, 0x72, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x6b,
	0x72, 0x61, 0x6b, 0x65, 0x6e, 0x64, 0x5f, 0x70, 0x6c, 0x61, 0x79, 0x67, 0x72, 0x6f, 0x75, 0x6e,
	0x64, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x52, 0x61, 0x6e, 0x67, 0x65, 0x52, 0x09, 0x64, 0x65, 0x70,
	0x61, 0x72, 0x74, 0x75, 0x72, 0x65, 0x12, 0x37, 0x0a, 0x07, 0x61, 0x72, 0x72, 0x69, 0x76, 0x61,
	0x6c, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x6b, 0x72, 0x61, 0x6b, 0x65, 0x6e,
	0x64, 0x5f, 0x70, 0x6c, 0x61, 0x79, 0x67, 0x72, 0x6f, 0x75, 0x6e, 0x64, 0x2e, 0x54, 0x69, 0x6d,
	0x65, 0x52, 0x61, 0x6e, 0x67, 0x65, 0x52, 0x07, 0x61, 0x72, 0x72, 0x69, 0x76, 0x61, 0x6c, 0x12,
	0x2e, 0x0a, 0x07, 0x63, 0x6c, 0x61, 0x73, 0x73, 0x65, 0x73, 0x18, 0x06, 0x20, 0x03, 0x28, 0x0e,
	0x32, 0x14, 0x2e, 0x66, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x5f, 0x66, 0x69, 0x6e, 0x64, 0x65, 0x72,
	0x2e, 0x43, 0x6c, 0x61, 0x73, 0x73, 0x52, 0x07, 0x63, 0x6c, 0x61, 0x73, 0x73, 0x65, 0x73, 0x12,
	0x38, 0x0a, 0x17, 0x6d, 0x69, 0x6e, 0x5f, 0x70, 0x65, 0x72, 0x63, 0x65, 0x6e, 0x74, 0x61, 0x67,
	0x65, 0x5f, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x07, 0x20, 0x01, 0x28, 0x05,
	0x48, 0x00, 0x52, 0x15, 0x6d, 0x69, 0x6e, 0x50, 0x65, 0x72, 0x63, 0x65, 0x6e, 0x74, 0x61, 0x67,
	0x65, 0x44, 0x69, 0x73, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x30, 0x0a, 0x13, 0x6d, 0x69, 0x6e,
	0x5f, 0x61, 0x6d, 0x6f, 0x75, 0x6e, 0x74, 0x5f, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x75, 0x6e, 0x74,
	0x18, 0x08, 0x20, 0x01, 0x28, 0x05, 0x48, 0x00, 0x52, 0x11, 0x6d, 0x69, 0x6e, 0x41, 0x6d, 0x6f,
	0x75, 0x6e, 0x74, 0x44, 0x69, 0x73, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x42, 0x0a, 0x0a, 0x08, 0x64,
	0x69, 0x73, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x22, 0x6f, 0x0a, 0x08, 0x44, 0x69, 0x73, 0x63, 0x6f,
	0x75, 0x6e, 0x74, 0x12, 0x18, 0x0a, 0x07, 0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x73, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x73, 0x12, 0x1a, 0x0a,
	0x07, 0x70, 0x65, 0x72, 0x63, 0x65, 0x6e, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x48, 0x00,
	0x52, 0x07, 0x70, 0x65, 0x72, 0x63, 0x65, 0x6e, 0x74, 0x12, 0x1c, 0x0a, 0x08, 0x61, 0x62, 0x73,
	0x6f, 0x6c, 0x75, 0x74, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x48, 0x00, 0x52, 0x08, 0x61,
	0x62, 0x73, 0x6f, 0x6c, 0x75, 0x74, 0x65, 0x42, 0x0f, 0x0a, 0x0d, 0x64, 0x69, 0x73, 0x63, 0x6f,
	0x75, 0x6e, 0x74, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x22, 0xae, 0x03, 0x0a, 0x0a, 0x46, 0x6c, 0x69,
	0x67, 0x68, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x34, 0x0a, 0x06, 0x6f, 0x72, 0x69, 0x67, 0x69,
	0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x6b, 0x72, 0x61, 0x6b, 0x65, 0x6e,
	0x64, 0x5f, 0x70, 0x6c, 0x61, 0x79, 0x67, 0x72, 0x6f, 0x75, 0x6e, 0x64, 0x2e, 0x4c, 0x6f, 0x63,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x06, 0x6f, 0x72, 0x69, 0x67, 0x69, 0x6e, 0x12, 0x3e, 0x0a,
	0x0b, 0x64, 0x65, 0x73, 0x74, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x6b, 0x72, 0x61, 0x6b, 0x65, 0x6e, 0x64, 0x5f, 0x70, 0x6c, 0x61,
	0x79, 0x67, 0x72, 0x6f, 0x75, 0x6e, 0x64, 0x2e, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x52, 0x0b, 0x64, 0x65, 0x73, 0x74, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x38, 0x0a,
	0x09, 0x64, 0x65, 0x70, 0x61, 0x72, 0x74, 0x75, 0x72, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x64, 0x65,
	0x70, 0x61, 0x72, 0x74, 0x75, 0x72, 0x65, 0x12, 0x34, 0x0a, 0x07, 0x61, 0x72, 0x72, 0x69, 0x76,
	0x61, 0x6c, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73,
	0x74, 0x61, 0x6d, 0x70, 0x52, 0x07, 0x61, 0x72, 0x72, 0x69, 0x76, 0x61, 0x6c, 0x12, 0x46, 0x0a,
	0x09, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x28, 0x2e, 0x66, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x5f, 0x66, 0x69, 0x6e, 0x64, 0x65, 0x72,
	0x2e, 0x46, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x2e, 0x44, 0x69, 0x73, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x09, 0x64, 0x69, 0x73, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x73, 0x12, 0x1b, 0x0a, 0x09, 0x66, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x5f,
	0x69, 0x64, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x66, 0x6c, 0x69, 0x67, 0x68, 0x74,
	0x49, 0x64, 0x1a, 0x55, 0x0a, 0x0e, 0x44, 0x69, 0x73, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x45,
	0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x2d, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x66, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x5f, 0x66,
	0x69, 0x6e, 0x64, 0x65, 0x72, 0x2e, 0x44, 0x69, 0x73, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x52, 0x05,
	0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x22, 0x6f, 0x0a, 0x12, 0x46, 0x69, 0x6e,
	0x64, 0x46, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x24, 0x0a, 0x04, 0x70, 0x61, 0x67, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e,
	0x70, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x50, 0x61, 0x67, 0x65, 0x52,
	0x04, 0x70, 0x61, 0x67, 0x65, 0x12, 0x33, 0x0a, 0x07, 0x66, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x73,
	0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x66, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x5f,
	0x66, 0x69, 0x6e, 0x64, 0x65, 0x72, 0x2e, 0x46, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x49, 0x6e, 0x66,
	0x6f, 0x52, 0x07, 0x66, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x73, 0x22, 0xc6, 0x01, 0x0a, 0x09, 0x50,
	0x61, 0x73, 0x73, 0x65, 0x6e, 0x67, 0x65, 0x72, 0x12, 0x1b, 0x0a, 0x09, 0x66, 0x75, 0x6c, 0x6c,
	0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x66, 0x75, 0x6c,
	0x6c, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x45, 0x0a, 0x09, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x27, 0x2e, 0x66, 0x6c, 0x69, 0x67, 0x68,
	0x74, 0x5f, 0x66, 0x69, 0x6e, 0x64, 0x65, 0x72, 0x2e, 0x50, 0x61, 0x73, 0x73, 0x65, 0x6e, 0x67,
	0x65, 0x72, 0x2e, 0x44, 0x69, 0x73, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x45, 0x6e, 0x74, 0x72,
	0x79, 0x52, 0x09, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x1a, 0x55, 0x0a, 0x0e,
	0x44, 0x69, 0x73, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10,
	0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79,
	0x12, 0x2d, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x17, 0x2e, 0x66, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x5f, 0x66, 0x69, 0x6e, 0x64, 0x65, 0x72, 0x2e,
	0x44, 0x69, 0x73, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a,
	0x02, 0x38, 0x01, 0x22, 0x6a, 0x0a, 0x11, 0x42, 0x6f, 0x6f, 0x6b, 0x46, 0x6c, 0x69, 0x67, 0x68,
	0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a, 0x09, 0x66, 0x6c, 0x69, 0x67,
	0x68, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x66, 0x6c, 0x69,
	0x67, 0x68, 0x74, 0x49, 0x64, 0x12, 0x38, 0x0a, 0x0a, 0x70, 0x61, 0x73, 0x73, 0x65, 0x6e, 0x67,
	0x65, 0x72, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x66, 0x6c, 0x69, 0x67,
	0x68, 0x74, 0x5f, 0x66, 0x69, 0x6e, 0x64, 0x65, 0x72, 0x2e, 0x50, 0x61, 0x73, 0x73, 0x65, 0x6e,
	0x67, 0x65, 0x72, 0x52, 0x0a, 0x70, 0x61, 0x73, 0x73, 0x65, 0x6e, 0x67, 0x65, 0x72, 0x73, 0x22,
	0x3d, 0x0a, 0x12, 0x42, 0x6f, 0x6f, 0x6b, 0x46, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x27, 0x0a, 0x0f, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x72, 0x6d,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0e,
	0x63, 0x6f, 0x6e, 0x66, 0x69, 0x72, 0x6d, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x2a, 0x30,
	0x0a, 0x05, 0x43, 0x6c, 0x61, 0x73, 0x73, 0x12, 0x0c, 0x0a, 0x08, 0x4e, 0x4f, 0x5f, 0x43, 0x4c,
	0x41, 0x53, 0x53, 0x10, 0x00, 0x12, 0x0b, 0x0a, 0x07, 0x45, 0x43, 0x4f, 0x4e, 0x4f, 0x4d, 0x59,
	0x10, 0x01, 0x12, 0x0c, 0x0a, 0x08, 0x42, 0x55, 0x53, 0x49, 0x4e, 0x45, 0x53, 0x53, 0x10, 0x02,
	0x32, 0xb3, 0x01, 0x0a, 0x07, 0x46, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x73, 0x12, 0x53, 0x0a, 0x0a,
	0x46, 0x69, 0x6e, 0x64, 0x46, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x12, 0x20, 0x2e, 0x66, 0x6c, 0x69,
	0x67, 0x68, 0x74, 0x5f, 0x66, 0x69, 0x6e, 0x64, 0x65, 0x72, 0x2e, 0x46, 0x69, 0x6e, 0x64, 0x46,
	0x6c, 0x69, 0x67, 0x68, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x21, 0x2e, 0x66,
	0x6c, 0x69, 0x67, 0x68, 0x74, 0x5f, 0x66, 0x69, 0x6e, 0x64, 0x65, 0x72, 0x2e, 0x46, 0x69, 0x6e,
	0x64, 0x46, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x00, 0x12, 0x53, 0x0a, 0x0a, 0x42, 0x6f, 0x6f, 0x6b, 0x46, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x12,
	0x20, 0x2e, 0x66, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x5f, 0x66, 0x69, 0x6e, 0x64, 0x65, 0x72, 0x2e,
	0x42, 0x6f, 0x6f, 0x6b, 0x46, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x21, 0x2e, 0x66, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x5f, 0x66, 0x69, 0x6e, 0x64, 0x65,
	0x72, 0x2e, 0x42, 0x6f, 0x6f, 0x6b, 0x46, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x47, 0x5a, 0x45, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6b, 0x72, 0x61, 0x6b, 0x65, 0x6e, 0x64, 0x69, 0x6f, 0x2f, 0x70,
	0x6c, 0x61, 0x79, 0x67, 0x72, 0x6f, 0x75, 0x6e, 0x64, 0x2d, 0x65, 0x6e, 0x74, 0x65, 0x72, 0x70,
	0x72, 0x69, 0x73, 0x65, 0x2f, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x73, 0x2f, 0x67, 0x72, 0x70, 0x63,
	0x2f, 0x67, 0x65, 0x6e, 0x6c, 0x69, 0x62, 0x2f, 0x66, 0x6c, 0x69, 0x67, 0x68, 0x74, 0x73, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_flights_flights_proto_rawDescOnce sync.Once
	file_flights_flights_proto_rawDescData = file_flights_flights_proto_rawDesc
)

func file_flights_flights_proto_rawDescGZIP() []byte {
	file_flights_flights_proto_rawDescOnce.Do(func() {
		file_flights_flights_proto_rawDescData = protoimpl.X.CompressGZIP(file_flights_flights_proto_rawDescData)
	})
	return file_flights_flights_proto_rawDescData
}

var file_flights_flights_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_flights_flights_proto_msgTypes = make([]protoimpl.MessageInfo, 9)
var file_flights_flights_proto_goTypes = []interface{}{
	(Class)(0),                    // 0: flight_finder.Class
	(*FindFlightRequest)(nil),     // 1: flight_finder.FindFlightRequest
	(*Discount)(nil),              // 2: flight_finder.Discount
	(*FlightInfo)(nil),            // 3: flight_finder.FlightInfo
	(*FindFlightResponse)(nil),    // 4: flight_finder.FindFlightResponse
	(*Passenger)(nil),             // 5: flight_finder.Passenger
	(*BookFlightRequest)(nil),     // 6: flight_finder.BookFlightRequest
	(*BookFlightResponse)(nil),    // 7: flight_finder.BookFlightResponse
	nil,                           // 8: flight_finder.FlightInfo.DiscountsEntry
	nil,                           // 9: flight_finder.Passenger.DiscountsEntry
	(*lib.Page)(nil),              // 10: pagination.Page
	(*lib.Location)(nil),          // 11: krakend_playground.Location
	(*lib.TimeRange)(nil),         // 12: krakend_playground.TimeRange
	(*timestamppb.Timestamp)(nil), // 13: google.protobuf.Timestamp
}
var file_flights_flights_proto_depIdxs = []int32{
	10, // 0: flight_finder.FindFlightRequest.page:type_name -> pagination.Page
	11, // 1: flight_finder.FindFlightRequest.origin:type_name -> krakend_playground.Location
	11, // 2: flight_finder.FindFlightRequest.destination:type_name -> krakend_playground.Location
	12, // 3: flight_finder.FindFlightRequest.departure:type_name -> krakend_playground.TimeRange
	12, // 4: flight_finder.FindFlightRequest.arrival:type_name -> krakend_playground.TimeRange
	0,  // 5: flight_finder.FindFlightRequest.classes:type_name -> flight_finder.Class
	11, // 6: flight_finder.FlightInfo.origin:type_name -> krakend_playground.Location
	11, // 7: flight_finder.FlightInfo.destination:type_name -> krakend_playground.Location
	13, // 8: flight_finder.FlightInfo.departure:type_name -> google.protobuf.Timestamp
	13, // 9: flight_finder.FlightInfo.arrival:type_name -> google.protobuf.Timestamp
	8,  // 10: flight_finder.FlightInfo.discounts:type_name -> flight_finder.FlightInfo.DiscountsEntry
	10, // 11: flight_finder.FindFlightResponse.page:type_name -> pagination.Page
	3,  // 12: flight_finder.FindFlightResponse.flights:type_name -> flight_finder.FlightInfo
	9,  // 13: flight_finder.Passenger.discounts:type_name -> flight_finder.Passenger.DiscountsEntry
	5,  // 14: flight_finder.BookFlightRequest.passengers:type_name -> flight_finder.Passenger
	2,  // 15: flight_finder.FlightInfo.DiscountsEntry.value:type_name -> flight_finder.Discount
	2,  // 16: flight_finder.Passenger.DiscountsEntry.value:type_name -> flight_finder.Discount
	1,  // 17: flight_finder.Flights.FindFlight:input_type -> flight_finder.FindFlightRequest
	6,  // 18: flight_finder.Flights.BookFlight:input_type -> flight_finder.BookFlightRequest
	4,  // 19: flight_finder.Flights.FindFlight:output_type -> flight_finder.FindFlightResponse
	7,  // 20: flight_finder.Flights.BookFlight:output_type -> flight_finder.BookFlightResponse
	19, // [19:21] is the sub-list for method output_type
	17, // [17:19] is the sub-list for method input_type
	17, // [17:17] is the sub-list for extension type_name
	17, // [17:17] is the sub-list for extension extendee
	0,  // [0:17] is the sub-list for field type_name
}

func init() { file_flights_flights_proto_init() }
func file_flights_flights_proto_init() {
	if File_flights_flights_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_flights_flights_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FindFlightRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_flights_flights_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Discount); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_flights_flights_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FlightInfo); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_flights_flights_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FindFlightResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_flights_flights_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Passenger); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_flights_flights_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BookFlightRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_flights_flights_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BookFlightResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_flights_flights_proto_msgTypes[0].OneofWrappers = []interface{}{
		(*FindFlightRequest_MinPercentageDiscount)(nil),
		(*FindFlightRequest_MinAmountDiscount)(nil),
	}
	file_flights_flights_proto_msgTypes[1].OneofWrappers = []interface{}{
		(*Discount_Percent)(nil),
		(*Discount_Absolute)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_flights_flights_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   9,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_flights_flights_proto_goTypes,
		DependencyIndexes: file_flights_flights_proto_depIdxs,
		EnumInfos:         file_flights_flights_proto_enumTypes,
		MessageInfos:      file_flights_flights_proto_msgTypes,
	}.Build()
	File_flights_flights_proto = out.File
	file_flights_flights_proto_rawDesc = nil
	file_flights_flights_proto_goTypes = nil
	file_flights_flights_proto_depIdxs = nil
}
