
�
trains/trains.prototrain_findergoogle/protobuf/timestamp.protogoogle/protobuf/empty.protolib/pagination.protolib/location.proto"B
Date
year (Ryear
month (Rmonth
day (Rday"�
FindTrainRequest$
page (2.pagination.PageRpage4
origin (2.krakend_playground.LocationRorigin>
destination (2.krakend_playground.LocationRdestination0
	departure (2.train_finder.DateR	departure,
arrival (2.train_finder.DateRarrival-
classes (2.train_finder.ClassRclasses"�
	TrainInfo4
origin (2.krakend_playground.LocationRorigin>
destination (2.krakend_playground.LocationRdestination8
	departure (2.google.protobuf.TimestampR	departure4
arrival (2.google.protobuf.TimestampRarrival
	stopovers (R	stopovers8
class (2.train_finder.Class:INTERNATIONALRclass
wagons (:3Rwagons"�
TrainClasses-
classes (2.train_finder.ClassRclasses6
perks (
2 .train_finder.TrainClasses.PerksRperksY
Perks#
meal_included (RmealIncluded+
preferent_onboard (RpreferentOnboard"j
FindTrainResponse$
page (2.pagination.PageRpage/
trains (2.train_finder.TrainInfoRtrains*?
Class
ANY 
REGIONAL
NATIONAL
INTERNATIONAL2�
TrainsO

FindTrains.train_finder.FindTrainRequest.train_finder.FindTrainResponse" G
GetTrainClasses.google.protobuf.Empty.train_finder.TrainClasses" BFZDgithub.com/krakendio/playground-enterprise/images/grpc/genlib/trains