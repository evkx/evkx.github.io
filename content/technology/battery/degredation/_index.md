---
title: Battery Degradation
linktitle: Degradation
description: Battery degradation in EVs refers to the gradual loss of a battery's capacity or performance over time, which can affect the driving range of the vehicle. Like other types of batteries, it is caused by a combination of factors.
weight: 9
---
<!-- markdownlint-disable MD033 -->

Battery degradation in EVs is primarily caused by chemical reactions during charging and discharging cycles. Over time, these reactions can lead to physical changes in the battery's electrodes and electrolyte, reducing its capacity and performance.

High temperatures, extreme levels of charging or discharging, and frequent use of fast charging can accelerate battery degradation. However, there are steps to slow its progression and extend the battery's lifespan. These include avoiding high temperatures, limiting the depth of discharge, and reducing the frequency of charging and discharging cycles. Additionally, using a battery management system (BMS) that actively monitors and regulates the battery's performance can help optimize its lifespan and performance.

## Calendar Aging

Calendar aging refers to battery degradation that occurs over time, even when the battery is not in use. Unlike cycle aging, which results from repeated charging and discharging cycles, calendar aging is influenced by factors such as temperature, humidity, and time.

During calendar aging, the battery's chemistry can change, leading to a gradual loss of capacity and an increase in internal resistance. This can reduce the EV's driving range and shorten the battery's overall lifespan.

High temperatures can accelerate calendar aging, so it is important to store EV batteries in a cool, dry place when not in use. Additionally, charging the battery to a high state of charge and leaving it fully charged for extended periods can contribute to calendar aging.

To minimize the impact of calendar aging, follow the manufacturer's guidelines for battery storage and charging.

{{< sitefiguresized thumb="guides/degradation/evstoragestress_st.png" width="623" height="473" title="Storage stress" >}}

## Cycle Aging

Cycle aging occurs as a result of repeated charging and discharging cycles. Each cycle can cause wear and tear on the battery, leading to a gradual loss of capacity and performance over time.

{{< evkxdisplayaddarticle />}}

During cycle aging, the active materials in the electrodes can degrade, losing their ability to store and release energy. This can increase the battery's internal resistance, reducing its capacity and overall performance. Additionally, cycle aging can cause physical changes to the battery, such as the formation of solid-electrolyte interface (SEI) layers or the growth of dendrites, further reducing the battery's capacity and performance.

### Cycle Aging Based on SOC Area

The diagram below shows how the state of charge (SOC) area used during charging and discharging affects degradation.

{{< sitefiguresized thumb="guides/degradation/dstcycles_st.png" width="570" height="456" title="Cycle stress" >}}

### Charging Speed Effect on Cycle Aging

The most important factor for cycle aging is the charging speed. High-speed DC charging increases the effect called lithium plating, which converts lithium ions to lithium metal.

When lithium plating occurs, the available ions in the battery are reduced. Higher-speed charging increases the number of lithium ions that cannot reach the anode due to limitations in the chemical process. For more information on lithium plating, you can read [this presentation](https://www.nasa.gov/sites/default/files/atoms/files/1-lithium_plating_azimmerman.pdf) from NASA.

### Real-World Degradation Statistics

Tesla's [2022 Tesla Impact Report](https://www.tesla.com/ns_videos/2022-tesla-impact-report-highlights.pdf) provides updated data on the Model S and Model X.

{{< sitefiguresized thumb="technology/battery/degradation/teslastats_1_st.png" width="991" height="550" title="After 200,000 miles, the Tesla batteries degrade just 12%" >}}

## How to Preserve Battery

Read our [guide](../../../guides/protectingbattery/) on how to preserve your battery.

{{< pagenavigation b_url="../charging/" b_title="Charging" f_url="../buffer/" f_title="Buffer" >}}