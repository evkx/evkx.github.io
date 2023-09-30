---
title: Charging
linktitle: Charging
description: Charging the battery is the process of adding new energy to the battery.
weight: 8
---
<!-- markdownlint-disable MD033 -->
Charging an EV battery involves the movement of electric charge carriers, such as electrons and ions, between the battery's electrodes. The battery consists of two electrodes, a cathode, and an anode, separated by an electrolyte.

During the charging process, electrons flow from the charging source (e.g., charging station) to the cathode, where they are stored in the cathode material. At the same time, positive ions in the electrolyte flow from the cathode to the anode through the separator.

When the battery is fully charged, the cathode material is at its maximum capacity to store electrons, and the anode is fully depleted of positive ions. The battery is in a stable state with a high potential difference between the cathode and the anode, which is what provides the electric energy stored in the battery.

<img src="batteryconceptcharging.drawio.svg" class="img-fluid">


The charging process is reversible, and during discharge, the electrons flow back from the cathode to the anode through an external circuit, creating a flow of electric current that can power an electric motor.

{{<evkxdisplayaddarticle />}}

### Charging performance

The charging performance varies a lot between EVs. Several aspects affect the charging speed of EVs they are.

{{< sitefigure thumb="technology/battery/charging/charging_1_st.jpg" title="Kia EV6 GT charging at Ionity" >}}

#### The pack configuration

The pack configuration can affect the charging speed. A configuration that gives low voltage can cause you to hit external limits on charging current. For example, a 50KW DC CCS charger has a maximum current of 125A. To get 50KW from 125A, you need a minimum of 400 Volt. The maximum current limit would limit a 300-volt package to 37.5KW charging speed. (300*125)

It is the same with CCS HPC Chargers since they are limited to 500 Ampere. 400 volts on 500 Amper is a max of 200KW. The charging speed on a 300 Volt battery pack would be limited to 150KW.

Volvo and Polestar claim their upcoming EVS with 400  VOlt packs would get 250KW charging. However, it is unclear how they would manage that with the current CCS standard limits.

#### Temperature

The battery temperature can affect the charging speed significantly. For example, the BMS can reduce the charging speed by more than 50% in cold weather.

This speed reduction is why some evs offer automatic heating of the battery when navigating to a charger or the possibility of manually triggering the heating of the battery pack.

High temperatures can also reduce performance. For example, the BMS can reduce the charging speed in hot weather or after high-speed charging. BMS reduces the charging speed to let the battery cool down to protect it.

{{<evkxdisplayaddarticle />}}

#### BMS software

The manufacturer decides the curve based on various inputs. The input could be the battery pack’s chemistry or other physical aspects, like cooling. Still, the manufacturer often decides to balance the charging speed with the battery’s longevity. High-speed charging affects the degradation, and lowering the speed would reduce the degradation.

Some manufacturers also limit the number of High-speed charging sessions during a period. Toytota BZ4X is one model that Toyota launched with a limitation of only two high-speed sessions during 24 hours. More charging would be at a low speed.

{{< sitefigure thumb="technology/battery/charging/taycancharging_1_st.jpg" title="Porsche Taycan charging" >}}

Porsche Taycan is a model where the owner can set a ‘battery-friendly’ charging speed as max to decrease degradation. A Taycan can initially charge with up to 270KW speed. With this setting enabled, it is limited to 200KW.

#### Charging speed examples

EVKX shows the charge performance for each EV on our site with graphs and calculations based on the performance.

The following are some examples of EVs with different types of charging performance.

[Lucid Air Dream Edition Performance](/models/lucid/air/air_dream_edition_performance/chargingcurve/) is the first example. It has an extreme top charging speed of over 300kW but falls quickly.

<img src="/models/lucid/air/air_dream_edition_performance/chargingcurve.svg" class="img-fluid">

[Kia EV6 GT](/models/kia/ev6/ev6_gt/chargingcurve7/) is the next example.  This model is one of the fastest-charging EVs with high speed and a much flatter curve than the Lucid Air.

<img src="/models/kia/ev6/ev6_gt/chargingcurve.svg" class="img-fluid">

{{<evkxdisplayaddarticle />}}

[Nissan Aryia](/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve/) This model does not have a very high top peak, but the curve is relatively flat.

<img src="/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve.svg" class="img-fluid">

On longer trips, the charging curve may affect the optimum charging stop. For example, a flatter curve would benefit those who prefer longer stops, while a curve with high peaks benefits short stops, and you charge around the peak area.

For all models, EVKX calculates this for you on the model info page.

Continue to [degredation](../degredation/) or go back to the [article overview](../).