---
title: Battery Degradation
linktitle: Degradation
description: Battery degradation in EVs refers to the gradual loss of a battery's capacity or performance over time, which can affect the driving range of the vehicle. Like other types of batteries, it is caused by a combination of factors.
weight: 9
---
<!-- markdownlint-disable MD033 -->

One of the primary causes of battery degradation in EVs is the chemical reactions that occur during charging and discharging cycles. Over time, these reactions can cause physical changes to the battery's electrodes and electrolyte, leading to a reduction in the battery's capacity or performance.

Exposure to high temperatures can also accelerate battery degradation in EVs, as can charging or discharging the battery to extreme levels. Additionally, frequent use of fast charging can cause increased wear on the battery, which can also contribute to degradation over time.

While it may not be possible to completely prevent battery degradation in EVs, there are steps that can be taken to slow its progression and extend the lifespan of the battery. For example, avoiding exposure to high temperatures, limiting the depth of discharge, and reducing the frequency of charging and discharging cycles can all help to minimize the impact of degradation. Additionally, using a battery management system (BMS) that actively monitors and regulates the battery's performance can help to optimize its lifespan and performance.

## Calendar Aging

Calendar aging is a type of battery degradation that occurs in EV batteries over time, even when they are not in use. Unlike cycle aging, which occurs as a result of repeated charging and discharging cycles, calendar aging is caused by a combination of factors such as temperature, humidity, and time.

During calendar aging, the battery's chemistry can change, which can cause a gradual loss of capacity and an increase in internal resistance. This can result in a reduced driving range for the EV, as well as a shorter overall lifespan for the battery.

High temperatures can accelerate the rate of calendar aging, which is why it is important to store EV batteries in a cool, dry place when not in use. Additionally, charging the battery to a high state of charge and leaving it in a fully charged state for extended periods can also contribute to calendar aging.

To prevent or minimize the impact of calendar aging on EV batteries, it is recommended to follow manufacturer guidelines for battery storage and charging.

{{< sitefigure thumb="guides/degradation/evstoragestress_st.png" title="Storage stress" >}}

## Cycle aging

Cycle aging is a type of battery degradation that occurs in EV batteries as a result of repeated charging and discharging cycles. Each cycle can cause some wear and tear on the battery, which can lead to a gradual loss of capacity and performance over time.

{{<evkxdisplayaddarticle />}}

During cycle aging, the active materials in the electrodes can degrade and lose their ability to store and release energy. This can cause an increase in the battery's internal resistance, which can reduce the battery's capacity and overall performance. Additionally, cycle aging can cause physical changes to the battery, such as the formation of solid-electrolyte interface (SEI) layers or the growth of dendrites, which can further reduce the battery's capacity and performance.

### Cycle aging based on SOC area

The below diagram shows how the SOC area used when charging/discharging affect the degradation

{{< sitefigure thumb="guides/degradation/dstcycles_st.png" title="Cycle stress" >}}

### Charging speed effect on cycle aging

The most important factor for cycle charging is the charging speed. High-speed DC charging increases  the effect called lithium plating that converts the lithium ions to lithium metal.

When this happens the available ions in the battery are reduced. Higher speed charging increases the number of lithium ions that are not able to reach the anode. This is again caused by limitations on the chemistry process. If you want to learn more about lithium plating you can read [this presentation](https://www.nasa.gov/sites/default/files/atoms/files/1-lithium_plating_azimmerman.pdf) from Nasa.

## How to preserve battery

- Don't park the car with High SOC over a long time
- Don't park the car in extreme heat
- Limit high-speed charging.

Continue to [buffer](../buffer/) or go back to the [article overview](../).
