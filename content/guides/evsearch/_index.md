---
title: EV Search
linktitle: EV Search
description: EVKX offers the most comprehensive search for EVs available online. This guide helps you get the most out of this feature.
weight: 3
---
<!-- markdownlint-disable MD033 -->

The EV search feature allows you to sort and filter electric vehicles based on various technical and functional aspects. Below are the available sort orders and filters.

## Sorting

### Brand & Model

This is the default sort order, based on the manufacturer's and model's names.

[See search result](/evsearch/)

### WLTP Range (Base Trim)

Sorts models by the specific WLTP range for the base trim, with the longest range listed first. Note that not all models have a WLTP rating.

[See search result](/evsearch/?sortOrder=RangeMinimumWltp)

### WLTP Consumption (Base Trim)

Sorts models based on consumption for the WLTP cycle.

[See search result](/evsearch/?sortOrder=WltpBasicConsumption)

### Usable Battery

Sorts models by usable (net) battery size. Available in two orders:

- [Small to large](/evsearch/?sortOrder=NetBattery)
- [Large to small](/evsearch/?sortOrder=NetBattery)

### Power

Sorts models by maximum power, from large to small.

[See search result](/evsearch/?sortOrder=PowerDesc)

### Top Speed

Sorts models by rated top speed (V-MAX), from large to small.

[See search result](/evsearch/?sortOrder=TopSpeedDesc)

### Max DC Charging

Sorts models by rated maximum DC charging speed.

[See search result](/evsearch/?sortOrder=MaxDCCharging)

### Average Charging Speed

Defines how long a charging session lasts. You can sort by three different averages:

- [0-100%](/evsearch/?sortOrder=AverageChargingSpeedDesc)
- [10-100%](/evsearch/?sortOrder=AverageChargingSpeed10100Desc)
- [10-80%](/evsearch/?sortOrder=AverageChargingSpeed1080Desc)

### Acceleration

Sorts models by acceleration time from 0 to 100 km/h (0-60 mph).

[See search result](/evsearch/?sortOrder=ZeroTo100)

### Calculated 1000 km Challenge

Based on Bjørn Nyland's 1000 km driving tests, this sort order calculates the theoretical time to drive 1000 km at 120 km/h (75 mph), including charging sessions.

- [Sorted by 1000 km time](/evsearch/?sortOrder=DrivingTime1000kmChallenge)
- [Sorted by average speed](/evsearch/?sortOrder=AverageSpeed1000kmChallengeDesc)

### Travel Speed

Considers how fast a model can drive, including optimal charging speed and consumption. Available for two scenarios:

- [WLTP Cycle (46.5 km/h)](/evsearch/?sortOrder=TravelSpeedWltpDesc)
- [120 km/h](/evsearch/?sortOrder=TravelSpeed120kmhDesc)

### Nominal Voltage

Sorts models by nominal voltage.

[See models sorted by battery nominal voltage (High to Low)](/evsearch/?sortOrder=NominalVoltage)

### Loading Capacity

Sorts models based on various loading specifications:

- [Trunk space](/evsearch/?sortOrder=TrunkSizeDesc)
- [Trunk space with seats down](/evsearch/?sortOrder=MaxTrunkSizeDesc)
- [Max loading weight, including driver](/evsearch/?sortOrder=MaxLoadDesc)
- [Max trailer capacity](/evsearch/?sortOrder=MaxTrailerSizeDesc)

### Ground Clearance

Sorts models by ground clearance:

- [Max ground clearance](/evsearch/?sortOrder=MaxGroundClearanceDesc)
- [Min ground clearance](/evsearch/?sortOrder=MaxGroundClearanceDesc)
- [Suspension height adjustment](/evsearch/?sortOrder=SuspensionHeightAdjustment)

### Size & Weight

Sorts models by various size and weight specifications:

- [Length (large to small)](/evsearch/?sortOrder=Length)
- [Wheelbase (large to small)](/evsearch/?sortOrder=Wheelbase)
- [Curb weight (large to small)](/evsearch/?sortOrder=WeightUnladenDINKg)

### 10% Challenge

Inspired by Kyle Connor's 10% challenge, this sort order evaluates how far an EV can drive after charging from 10% for a specified time.

#### Driving Distance Added in Charging Session

- [120 km/h after 10 minutes](/evsearch/?sortOrder=DrivingDistance120kmhCharged10Percent10Min)
- [120 km/h after 15 minutes](/evsearch/?sortOrder=DrivingDistance120kmhCharged10Percent15Min)
- [120 km/h after 20 minutes](/evsearch/?sortOrder=DrivingDistance120kmhCharged10Percent20Min)
- [120 km/h after 25 minutes](/evsearch/?sortOrder=DrivingDistance120kmhCharged10Percent25Min)
- [120 km/h after 30 minutes](/evsearch/?sortOrder=DrivingDistance120kmhCharged10Percent30Min)
- [WLTP after 10 minutes](/evsearch/?sortOrder=DrivingDistanceWltpCharged10Percent10Min)
- [WLTP after 15 minutes](/evsearch/?sortOrder=DrivingDistanceWltpCharged10Percent15Min)
- [WLTP after 20 minutes](/evsearch/?sortOrder=DrivingDistanceWltpCharged10Percent20Min)
- [WLTP after 25 minutes](/evsearch/?sortOrder=DrivingDistanceWltpCharged10Percent25Min)
- [WLTP after 30 minutes](/evsearch/?sortOrder=DrivingDistanceWltpCharged10Percent30Min)

#### Energy Charged

- [After 10 minutes](/evsearch/?sortOrder=EnergyCharged10Percent10Min)
- [After 15 minutes](/evsearch/?sortOrder=EnergyCharged10Percent15Min)
- [After 20 minutes](/evsearch/?sortOrder=EnergyCharged10Percent20Min)
- [After 25 minutes](/evsearch/?sortOrder=EnergyCharged10Percent25Min)
- [After 30 minutes](/evsearch/?sortOrder=EnergyCharged10Percent30Min)

## Filters

The EV database offers various filters to help you find the perfect car based on your requirements.

### Brand

Select one or multiple brands.

- [Example: Audi, BMW, and Mercedes](/evsearch/?evType=&brands=Audi%2CBMW%2CMercedes)

### Paint Color

Filter models based on available paint colors.

### Seat Configuration

Filter models based on seat configuration.

- [Example: 7-seat configuration](/evsearch/?seatConfiguration=7)

### EV Type

Filter by EV type.

- [Example: Station Wagons](/evsearch/?evType=StationWagon)
- [Example: SUVs](/evsearch/?evType=SUV)

### Drivetrain Filters

Filter by drivetrain features, either in combination or separately.

- [All-wheel drive](/evsearch/?allWheelDrive=true)
- [Rear-wheel drive (RWD)](/evsearch/?rWD=true)
- [Front-wheel drive (FWD)](/evsearch/?fWD=true)
- [Adaptive damping suspension](/evsearch/?adaptiveSuspension=true)
- [Air suspension](/evsearch/?airSuspension=true)
- [Rear axle steering](/evsearch/?rearAxleSteering=true)

### ADAS Filters

Filter by Advanced Driver Assist Systems (ADAS).

- [Night Vision](/evsearch/?nightVision=true)
- [Adaptive Cruise Control](/evsearch/?nightVision=true)
- [Autosteer](/evsearch/?autoSteer=true)