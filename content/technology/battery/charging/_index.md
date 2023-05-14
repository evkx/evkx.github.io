---
title: Charging
linktitle: Charging
description: Charging the battery is the process to add new energy to the battery.
weight: 8
---
<!-- markdownlint-disable MD033 -->
 Charging an EV battery involves the movement of electric charge carriers, such as electrons and ions, between the electrodes of the battery. The battery consists of two electrodes, a cathode and an anode, which are separated by an electrolyte.

During the charging process, electrons flow from the charging source (e.g., charging station) to the cathode, where they are stored in the cathode material. At the same time, positive ions in the electrolyte flow from the cathode to the anode through the separator.

When the battery is fully charged, the cathode material is at its maximum capacity to store electrons, and the anode is fully depleted of positive ions. The battery is in a stable state with a high potential difference between the cathode and the anode, which is what provides the electric energy stored in the battery.

![Battery charging](batteryconceptcharging.drawio.svg "Charging process")

The charging process is reversible, and during discharge, the electrons flow back from the cathode to the anode through an external circuit, creating a flow of electric current that can power an electric motor.

### Charging performance

The charging performance varies a lot between EVs. There is serveral aspects that affects the charging speed

**The pack configuration** The pack configuration can affect the charging speed. A configuration that give low voltage can cause that you hit external limits on charging current. Example a 50KW DC CCS charger has maximum 125A power. To get 50KW from 125A you need minimum 400 Volt. A car with 300 volt nominal voltage would be limited to 37.5KW

It is the same with CCS HPC Chargers. This is limited to 500 Amper.  400 volt on 500 Amper is max 200KW. A 300 volt car would be limited to 150KW.

**Temprateure** The battery temprature can affect the charging speed greatly. In cold weather the charging speed can be reduced with more than 50%. 

This is way some evs offer automatic heating of the battery when navigating to a 

#### Charging speed examples

EVKX show the charge performance for each EV on our site. 

The following is some examples on EV with different types of charging performance.

[Lucid Air Dream Edition Performance](/models/lucid/air/air_dream_edition_performance/) is the first example. It has an extreme top charging speed of over 300kW but falls quickly

![Image](/models/lucid/air/air_dream_edition_performance/chargingcurve.svg)


[Kia EV6 GT](/models/kia/ev6/ev6_gt/) is the next example. This is one of the fastest charging EVs with high speed and much flatter curve

![Image](/models/kia/ev6/ev6_gt/chargingcurve.svg)




Continue to [degredation](../degredation/) or go back to the [article overview](../).
