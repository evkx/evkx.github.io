---
title: Charging
linktitle: Charging
description: Charging the battery is the process of adding new energy to the battery.
weight: 8
navicon: bi-battery-charging
---
<!-- markdownlint-disable MD033 -->
Charging an EV battery involves the movement of electric charge carriers, such as electrons and ions, between the battery's electrodes. The battery has two electrodes, a cathode and an anode, separated by an electrolyte.

During the charging process, electrons flow from the charging source (e.g., charging station) to the cathode, where they are stored in the cathode material. At the same time, positive ions in the electrolyte flow from the cathode to the anode through the separator.

When the battery is fully charged, the cathode material is at its maximum capacity to store electrons, and the anode is fully depleted of positive ions. The battery is in a stable state with a high potential difference between the cathode and the anode, which provides the electric energy stored in the battery.

<figure>
<img src="https://media.evkx.net/multimedia/technology/battery/charging/batteryconceptcharging.drawio.svg" class="img-fluid mx-auto d-block">
<figcaption>
    <p class="lead text-center fw-semibold">
        Battery charging
    </p>
</figcaption>
</figure>

The charging process is reversible, and during discharge, the electrons flow back from the cathode to the anode through an external circuit, creating a flow of electric current that can power an electric motor.

{{<evkxdisplayaddarticle />}}

## Charging Performance

The charging performance varies significantly between EVs. Several factors affect the charging speed of EVs:

{{< sitefiguresized thumb="technology/battery/charging/charging_1_st.jpg" width="1920" height="1080" title="Kia EV6 GT charging at Ionity" >}}

### Pack Configuration

The pack configuration can affect the charging speed. A configuration that gives low voltage can cause you to hit external limits on charging current. For example, a 50KW DC CCS charger has a maximum current of 125A. To get 50KW from 125A, you need a minimum of 400 volts. The maximum current limit would restrict a 300-volt pack to 37.5KW charging speed (300*125).

It is the same with CCS HPC Chargers since most are limited to 500 amperes. 400 volts on 500 amperes is a max of 200KW. The charging speed on a 300-volt battery pack would be limited to 150KW.

Volvo EX90, Polestar 3 and Nio EL8 is all models claimed to be charging at 250kW with 400 Volt architecture. Do do this, they need to use chargers that is not limited to 500 Volts

#### 800-Volt EVs on 400-Volt Chargers

With newer cars using 800-volt battery packs, there is an additional problem with many high-speed chargers being limited to 400-500-volt charging. If you have an 800-volt EV that needs to convert the voltage from the charger to the battery pack voltage, this will limit the maximum charging speed. Tesla Superchargers, the world's largest charging network, are limited to 500 volts, and all 800-volt cars using this network are limited in charging speed.

There are different techniques used for this:

##### Inverter

The most common technique is using an inverter. Here, the EV has an inverter that can convert the voltage to match the battery voltage. This inverter typically has a limitation much lower than the maximum charging speed of 800 volts. An example is the Hyundai E-GMP platform, which limits the speed to 100KW using the inverter while charging at 250KW at 800 volts. Another example is the Porsche Taycan, which is limited to around 50KW at Superchargers with the standard inverter.

##### Bank Charging

This technique splits the battery pack into two 400-volt packs while charging at 800-volt chargers. The new Porsche Macan and Audi Q6 e-tron use this technique and can charge up to 135KW on 400 volts (270KW on 800 volts). Another example is the Tesla Cybertruck, which can charge up to 230KW at 500-volt Superchargers.

{{< sitefiguresized thumb="technology/battery/charging/bankcharging_1_st.jpg" width="3000" height="1852" title="Audi Q6 e-tron bank charging" >}}

### Temperature

The battery temperature can significantly affect the charging speed. For example, the BMS can reduce the charging speed by more than 50% in cold weather.

This speed reduction is why some EVs offer automatic heating of the battery when navigating to a charger or the possibility of manually triggering the heating of the battery pack.

High temperatures can also reduce performance. For example, the BMS can reduce the charging speed in hot weather or after high-speed charging. The BMS reduces the charging speed to let the battery cool down to protect it.

The optimal temperature in a battery for charging is typically around 25-35 degrees Celsius (77-95 Fahrenheit). In summer temperatures, the battery would typically be in this range when arriving at the charging station, allowing for full charging speed.

{{< sitefiguresized thumb="technology/battery/charging/charging_2_st.jpg" width="1920" height="1080" title="Audi e-tron GT charging in winter" >}}

On some models with fast charging, a warm summer day with high-speed charging may cause the battery to reach temperatures that will cause the BMS to reduce charge speed to protect the battery. This speed reduction typically happens if the battery temperature reaches 50-60 degrees Celsius during charging. That's why it is essential to have good thermal management that can dissipate the heat during charging.

The charge curve for models on the EVKX site is for **optimal conditions**:

- The temperature in the battery is high enough, so charge speed is not derated because of low temperature.
- The temperature in the battery does not get so high that the BMS reduces speed for protection during the charging session from 0-100%.

{{<evkxdisplayaddarticle />}}

### BMS Software

The manufacturer decides the curve based on various inputs. The input could be the battery pack’s chemistry or other physical aspects, like cooling. Still, the manufacturer often decides to balance the charging speed with the battery’s longevity. High-speed charging affects degradation, and lowering the speed would reduce degradation.

Some manufacturers also limit the number of high-speed charging sessions during a period. Toyota BZ4X is one model that Toyota launched with a limitation of only two high-speed sessions during 24 hours. More charging would be at a low speed.

{{< sitefiguresized thumb="technology/battery/charging/taycancharging_1_st.jpg" width="3000" height="2669" title="Porsche Taycan charging" >}}

Porsche Taycan is a model where the owner can set a ‘battery-friendly’ charging speed as max to decrease degradation. A Taycan can initially charge with up to 270KW speed. With this setting enabled, it is limited to 200KW.

### Charging Speed Examples

EVKX shows the charge performance for each EV on our site with graphs and calculations based on the performance.

The following are some examples of EVs with different types of charging performance:

[Zeekr 7x Long Range AWD](/models/zeekr/7x/7x_long_range_awd/chargingcurve/) is the first example. It has an extreme top charging speed of over 300KW but falls quickly.

<img src="https://evkx.net/models/zeekr/7x/7x_long_range_awd/chargingcurve/chart/?battery=0" class="img-fluid">

[Kia EV6 GT](/models/kia/ev6/ev6_gt/chargingcurve/) is the next example. This model is one of the fastest-charging EVs with high speed and a much flatter curve than the Lucid Air.

<img src="https://evkx.net/models/kia/ev6/ev6_gt/chargingcurve/chart/?battery=0" class="img-fluid">

[Nissan Aryia](/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve/) does not have a very high top peak, but the curve is relatively flat.

<img src="/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve/chart/?battery=0" class="img-fluid">

On longer trips, the charging curve may affect the optimum charging stop. For example, a flatter curve would benefit those who prefer longer stops, while a curve with high peaks benefits short stops, and you charge around the peak area.

For all models, EVKX calculates this for you on the model info page.

