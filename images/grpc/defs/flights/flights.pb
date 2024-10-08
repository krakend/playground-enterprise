
�
flights/flights.protoflight_findergoogle/protobuf/timestamp.protolib/pagination.protolib/location.protolib/time_range.proto"�
FindFlightRequest$
page (2.pagination.PageRpage4
origin (2.krakend_playground.LocationRorigin>
destination (2.krakend_playground.LocationRdestination;
	departure (2.krakend_playground.TimeRangeR	departure7
arrival (2.krakend_playground.TimeRangeRarrival.
classes (2.flight_finder.ClassRclasses8
min_percentage_discount (H RminPercentageDiscount0
min_amount_discount (H RminAmountDiscountB

discount"o
Discount
expires (	Rexpires
percent (H Rpercent
absolute (H RabsoluteB
discount_type"�

FlightInfo4
origin (2.krakend_playground.LocationRorigin>
destination (2.krakend_playground.LocationRdestination8
	departure (2.google.protobuf.TimestampR	departure4
arrival (2.google.protobuf.TimestampRarrivalF
	discounts (2(.flight_finder.FlightInfo.DiscountsEntryR	discounts
	flight_id (	RflightIdU
DiscountsEntry
key (	Rkey-
value (2.flight_finder.DiscountRvalue:8"o
FindFlightResponse$
page (2.pagination.PageRpage3
flights (2.flight_finder.FlightInfoRflights"�
	Passenger
	full_name (	RfullNameE
	discounts (2'.flight_finder.Passenger.DiscountsEntryR	discountsU
DiscountsEntry
key (	Rkey-
value (2.flight_finder.DiscountRvalue:8"�
BookFlightRequest
	flight_id (	RflightId8

passengers (2.flight_finder.PassengerR
passengers?
main_passenger (2.flight_finder.PassengerRmainPassenger"=
BookFlightResponse'
confirmation_id (	RconfirmationId*0
Class
NO_CLASS 
ECONOMY
BUSINESS2�
FlightsS

FindFlight .flight_finder.FindFlightRequest!.flight_finder.FindFlightResponse" S

BookFlight .flight_finder.BookFlightRequest!.flight_finder.BookFlightResponse" BGZEgithub.com/krakendio/playground-enterprise/images/grpc/genlib/flightsbproto3