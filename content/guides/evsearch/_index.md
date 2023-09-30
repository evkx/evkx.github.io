---
title: EV Search
linktitle: EV Search
description: EVKX offers the most comprehensive search for EVs available online. This guide guides you on how to get the most out of this feature.
weight: 3
---
<!-- markdownlint-disable MD033 -->

The search lets you order the EVs in various technical and functional aspects. In addition, you can filter the result based on your criteria.

Below, you see the sort orders and filters available.

## Sorting

Below you see details about the different sort orders EVKX EV database offers.

### Brand & Model

This sort order is the default sort order. We base the result on the manufacturer's and model's names.

[See search result](/evsearch/)

### WLTP Range base trim

This sort order sorts the models based on the specific WLTP range for the base trim for the model. Models with the longest range are listed first. Not all models have a WLTP rating.

[See search result](/evsearch/?sortOrder=RangeMinimumWltp)

### WLTP Consumption base trim

This sort order sorts models based on the consumption for the WLTP cycle

[See search result](/evsearch/?sortOrder=WltpBasicConsumption)

### Usable battery

This sorts models based on the usable (net) battery size. To versions with two sorting

- [See search result small -> large](/evsearch/?sortOrder=NetBattery)
- [See search result large -> small](/evsearch/?sortOrder=NetBattery)

### Power

This sort order sort models based on the max power. From large to small.

[See search result](/evsearch/?sortOrder=PowerDesc)

### Top speed

This sort order sorts the EV models based on rated top speed (V-MAX) From large to small.

[See search result](/evsearch/?sortOrder=TopSpeedDesc)

### Max DC Charging

This sorts models based on the rated MAX DC Charging speed.

[See search result](/evsearch/?sortOrder=MaxDCCharging)

### The Average charging speed

The average charging speed defines how long a charging session lasts. You can sort on three different averages.

- [Average Charging speed 0-100%](/evsearch/?sortOrder=AverageChargingSpeedDesc)
- [Average Charging speed 10-100%](/evsearch/?sortOrder=AverageChargingSpeed10100Desc)
- [Average Charging speed 10-80%](/evsearch/?sortOrder=AverageChargingSpeed1080Desc)

### Acceleration

This sort order sorts models based on acceleration time 0 - 100km/h (0-60 mph)

[See search result](/evsearch/?sortOrder=ZeroTo100)

### Calculated 1000 km challenge

Made famous by [Bjørn Nyland](../evreviewers)  and his 1000km driving tests, where he starts with a full battery and times how long it takes to drive 1000km in 120km/h (75mph). Typical, this includes several charging sessions, and the result depends on the model's charging speed and energy consumption since the driving speed is the same.

EVKX offers a theoretical result for all models based on charging curve and consumption.
While the theoretical result comes close to the real-world result for most models, the real-world tests often show how inconsistent charging performance caused by overheating or other limitations can negatively affect the outcome.

If there is a model that can do 1000km without charging, it could drive this distance in 500 minutes. So any time over 500 minutes in the result is time lost for charging.

- [See search result sorted on 1000km time.](/evsearch/?sortOrder=DrivingTime1000kmChallenge)
- [See search result sorted on 1000km average speed.](/evsearch/?sortOrder=AverageSpeed1000kmChallengeDesc)


### Travel speed

Sorting on travel speed is considering how fast a model can drive if you include optimal charging speed and consumption.

Higher consumption requires more charging. Faster charging means shorter charging stops. All affect the average driving speed.

We offer sorting for two scenarios: Driving the WLTP cycle (46.5 km/h) and driving 120km/h.

- [Travel speed WLTP Cyclus](/evsearch/?sortOrder=TravelSpeedWltpDesc)
- [Travel speed 120km/h](/evsearch/?sortOrder=TravelSpeed120kmhDesc)

### Nominal voltage

This sort order sorts the models based on the models nominal voltage

 [See models sorted on battery nomal voltage High > low](/evsearch/?sortOrder=NominalVoltage)

### Loading capacity

The loading capacity varies a lot between the models. EVKX sorts the models based on some essential specifications.

- [Models sorted on trunk space](/evsearch/?sortOrder=TrunkSizeDesc)
- [Models sorted on trunk space when seats are down](/evsearch/?sortOrder=MaxTrunkSizeDesc)
- [Max loading weight, including driver](/evsearch/?sortOrder=MaxLoadDesc)
- [Max Trailer capacity](/evsearch/?sortOrder=MaxTrailerSizeDesc)


### Ground clearance

This sort orders focus on the ground clearance

- [Max ground clearance](/evsearch/?sortOrder=MaxGroundClearanceDesc)
- [Min ground clearance](/evsearch/?sortOrder=MaxGroundClearanceDesc)
- [Suspension height adjustment](/evsearch/?sortOrder=SuspensionHeightAdjustment)


### Size & Weight

The database lets you sort on different size and weight specifications.

- [Models sorted on length large > smaller](/evsearch/?sortOrder=Length)
- [Models sorted on wheelbase large > smaller](/evsearch/?sortOrder=Wheelbase)
- [Models sorted on curb weight large > smaller](/evsearch/?sortOrder=WeightUnladenDINKg)

### 10% challenge

Made famous by the 10% challenge from [Kyle Connor and his Out of Spec channel](../evreviewers/) on YouTube,  EVKX offers two sorts of models around the scenario that on road trips, drivers will charge their EV when the state of charge reaches around 10% and will want to charge a given time after he had time to stretch his legs, visiting a bathroom and maybe get something to eat.

<figure>
    <a href="https://media.evkx.net/multimedia/guides/evsearch/10percentchallenge.jpg">
        <img src="https://media.evkx.net/multimedia/guides/evsearch/10percentchallenge_st.jpg" alt="Out of spec first 10% challenge was Tesla Model Y" title="Out of spec first 10% challenge was Tesla Model Y" class="img-fluid">
    </a>
     <figcaption>
        <p class="lead text-center fw-semibold">
           Out of spec first 10% challenge was Tesla Model Y
        </p>
    </figcaption>
</figure>

Depending on charging speed and consumption, you can drive the car a distance before the next charging session. Higher charging speed and lower consumption reduced the number of charging sessions for a road trip. 

Since people are different, we offer various lengths of charging sessions. While others prefer a quick stop of 10 minutes, others would rather have a longer stop to reduce the number of charging sessions.

#### Driving distance added in charging session

- [120km/h driving distance charged after 10 minutes from 10%](/evsearch/?sortOrder=DrivingDistance120kmhCharged10Percent10Min)
- [120km/h driving distance charged after 15 minutes from 10%](/evsearch/?sortOrder=DrivingDistance120kmhCharged10Percent15Min)
- [120km/h driving distance charged after 20 minutes from 10%](/evsearch/?sortOrder=DrivingDistance120kmhCharged10Percent20Min)
- [120km/h driving distance charged after 25 minutes from 10%](/evsearch/?sortOrder=DrivingDistance120kmhCharged10Percent25Min)
- [120km/h driving distance charged after 30 minutes from 10%](/evsearch/?sortOrder=DrivingDistance120kmhCharged10Percent30Min)
- [WLTP driving distance charged after 10 minutes from 10%](/evsearch/?sortOrder=DrivingDistanceWltpCharged10Percent10Min)
- [WLTP driving distance charged after 15 minutes from 10%](/evsearch/?sortOrder=DrivingDistanceWltpCharged10Percent15Min)
- [WLTP driving distance charged after 20 minutes from 10%](/evsearch/?sortOrder=DrivingDistanceWltpCharged10Percent20Min)
- [WLTP driving distance charged after 25 minutes from 10%](/evsearch/?sortOrder=DrivingDistanceWltpCharged10Percent25Min)
- [WLTP driving distance charged after 30 minutes from 10%](/evsearch/?sortOrder=DrivingDistanceWltpCharged10Percent30Min)

#### Energy charged

- [Energy charged after 10 minutes from 10%](/evsearch/?sortOrder=EnergyCharged10Percent10Min)
- [Energy charged after 15 minutes from 10%](/evsearch/?sortOrder=EnergyCharged10Percent15Min)
- [Energy charged after 20 minutes from 10%](/evsearch/?sortOrder=EnergyCharged10Percent20Min)
- [Energy charged after 25 minutes from 10%](/evsearch/?sortOrder=EnergyCharged10Percent25Min)
- [Energy charged after 30 minutes from 10%](/evsearch/?sortOrder=EnergyCharged10Percent30Min)

## Filters

The EV database offer various filters that can let you set requiremenst a car need to fullfill to be listed.

The most common filters are on top while you find a lot of others under advanced filters.

### Brand

You can select on or many brands

- [Example: List models from Audi, BMW and Mercedes](/evsearch/?evType=&brands=Audi%2CBMW%2CMercedes)

### Paint Color

You can select which colors the model needs to be offered. On or many colors could be set

### Seat configuration

You can filter the models based on the seat configuration. 

- [Example: List models available with 7 seats configuration](/evsearch/?seatConfiguration=7)

### Ev Type

You can filter on EV types.

- [Example: List station wagons](/evsearch/?evType=StationWagon)
- [Example: List SUVs](/evsearch/?evType=SUV)


### Drivetrain filters

You can filter on different drive train features. Both in combination and seperate. 
Examples:

- [Models with all wheel drive](/evsearch/?allWheelDrive=true)
- [Models with rear wheel drive (RWD)](/evsearch/?rWD=true)
- [Models with front wheel drive (FWD)](/evsearch/?fWD=true)
- [Models with adaptive damping suspension](/evsearch/?adaptiveSuspension=true)
- [Models with air suspension](/evsearch/?airSuspension=true)
- [Models with rear axle steering](/evsearch/?rearAxleSteering=true)

### Adas filters

EVS get more and more Advanced Driver Assist systems (ADAS). In our EVKX database you can filter on the ADAS systems you require

- [Models with NighVision](/evsearch/?nightVision=true)
- [Models with Adaptive Cruise Control](/evsearch/?nightVision=true)
- [Models with Autosteer](/evsearch/?autoSteer=true)