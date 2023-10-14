---
title: DC Fast Charging
linktitle: DC Fast Charging
description: DC Fast Charging is the fastest and most convenient way of charging an EV on the road.
weight: 3
---
<!-- markdownlint-disable MD033 -->

It uses a high-power DC (Direct Current) to deliver up to 1000 volts and 250 amps. High-speed charging can add up to 200 miles of range in just 20 to 30 minutes, so it can quickly replenish an EV battery for long-distance driving.

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/charging_1_st.jpg" width="3000" height="2001" title="BMW i4 M50 DC Fast charging" >}}

## DC Fast Charging availability

DC fast charging can be easy, available, complex, and challenging, depending on where you live and which car you drive. Some areas have very few chargers and require planning to create a route with charging, while others have many chargers where you can stop and charge when needed.

This availability can vary very much between the brands. While Tesla has superchargers in many areas finding a charging station with Chademo plug for your Nissan Leaf is almost impossible.

Below you see all charger locations for [Electrify America](https://www.electrifyamerica.com/locate-charger/), some very dense areas, whereas, in other areas, there are many miles/km between the chargers.

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/chargermap_st.jpg" width="2392" height="1160" title="Electrify America charging location map June 10. 2023" >}}

## DC Fast Charging performance

The charging speed can also vary wildly between EV models, charging stations, and even between charging sessions.

There are two typical reasons the charging speed varies between two charging sessions for the same EV on the same charger.

### The battery temperature

The battery temperature is the most critical factor in battery charging speed. The optimum battery temperature is typically 25-35 degrees. If the temperature is too low, the BMS Will lower the charging speed to protect the battery. It could give you down to only 25% of the optimal rate.

Many EVs have now added battery heating that can be activated when navigating to a charger through the navigation system or manually triggering it.

### The charging curve

The charging curve describes how fast an EV can charge for a given state of charge percent. Typically this charge curve is not flat, meaning at a 10% state of charge, the charging speed is different than at 80%.

How the charge curve looks varies vastly between models. Some can have a flat curve up to 80%, while others have a deep dive in step from a low state of charge. The max speed varies from below 100KW to above 300KW between the models.

Below you see the charging curve for Lucid Air Dream Edition Performance. The charging curve has a deep dive from early on. Charging 30% from 50-80% takes 20 minutes, while charging 30% from 5%-35% takes only 9 minutes.

<img src="../../../models/lucid/air/air_dream_edition_performance/chargingcurve.svg" class="img-fluid">


If you need to keep the charging stops as short as possible, identify the optimal charging area for your EV. EVKX.net helps you with that. We have detailed charging performance information for every model in our [EV database](/evsearch/), with charging curves and calculating optimum charging stops for the different models.

## Route planning with charging

Most EVs offer route planning functionality, including DC Fast charging stops to reach the destination. This route planning is part of the  [Navigation system](../../infotainment/navigation/).

Typical you would see the expected arrival charge level for charging stations and how much you need to charge to reach the next charging station

## Plug&Charge

One of the main challenges that EV drivers face is the convenience and security of charging their vehicles. Currently, most EV drivers need an RFID card, an app, or a contactless payment method to initiate a charging session at a public charging station. This can be cumbersome and time-consuming, especially if multiple charging networks have different payment systems and authentication methods.

However, a new technology promises to make EV charging much more accessible and safer: plug and charge. Plug and charge is a feature of the international standard ISO 15118, which defines the communication protocol between EVs and charging stations. With plug and charge, EV drivers can plug their vehicles into a compatible charging station, and the charging session will start automatically without any additional steps or devices.

### How does plug and charge work?

Plug and charge uses cryptographic certificates to identify and authenticate the EV and charging stations. These certificates are issued by trusted authorities and stored in secure hardware modules inside the EV and the charging station. When an EV is plugged into a charging station that supports plug and charge, they exchange their certificates and establish a secure communication link. The charging station then verifies the EV’s identity and authorizes the charging session based on the EV’s contract with its mobility service provider (MSP). The MSP is the entity that provides the EV driver with access to charging services and handles the billing and payment.

The plug and charge process ensures confidentiality, data integrity, and authenticity of the communication between the EV and the charging station. It also enables dynamic tariffing, load balancing, smart grid integration, and remote firmware updates. Plug and charge can be used for both AC and DC charging and wireless charging.

[Hubject](https://www.hubject.com/) is the company that manages certificats based on the protoll.

## Most common charging networks by location

### USA

There are several charging networks in the US for EVs. According to the US Department of Energy, Tesla has over **1,600 Supercharger stations** in the US, with over **17,000 fast-charging ports**. Electrify America is next in line, with about **800 stations**.

Here are some of the largest EV charging networks in the US:

- [Electrify America](https://www.electrifyamerica.com/): The largest DC fast charging network for the majority of EV models. They're open to all EVs with a CCS charging connection (the industry standard) and, for the time being, the few vehicles that still use CHAdeMO like the Nissan Leaf.

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/teslasupercharger_1_st.jpg" width="3000" height="1948" title="Tesla Supercharger location" >}}

- [Tesla Superchargers](https://www.tesla.com/findus/list/superchargers/United+States): Tesla's Supercharger network is the largest in the country, with less distance between stations compared to Electrify America. Most Superchargers requires NACS Port on the EV, but they are building out chargers with Magic Dock that supports CCS1 EVs. See chargers [here](https://www.tesla.com/findus?v=2&bounds=60.61822541172234%2C-37.567384000000004%2C18.24809425121173%2C-150.067384&zoom=5&filters=party)

- [EVgo](https://www.evgo.com/): DC fast charging isn't limited to road trips. EVgo has over **800 fast charging locations** across 34 states and more than 65 metropolitan areas.

- [ChargePoint](https://driver.chargepoint.com/mapCenter/37.26709110057841/-121.95591497824141/18): ChargePoint has over **115,000 charging spots** across North America and Europe¹.


### Europe

There are several charging networks in Europe for EVs. Here are some of the largest EV charging networks in Europe:

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/ionity_1_st.jpg" width="3000" height="2000" title="Ionity charging location" >}}

- Ionity: A high-power charging station network for EVs that enables long-distance travel across Europe. It was founded as a joint venture by the BMW Group, Mercedes-Benz Group, Ford Motor Company, and Volkswagen Group².

- Plugsurfing: A European-wide network you could use for charging an EV in Europe. With its unique key or card – which costs €9.95 – and its free smartphone app, you can use upwards of 200,000 chargers, including those from different networks such as Allego, EnBW, Eon, Innogy, IONITY and Vattenfall.

- Maingau: Through its EinfachStromLaden smartphone app, charging chip or card, you can charge an EV in Germany, Austria or Switzerland at 50,000 charging points with Maingau.
