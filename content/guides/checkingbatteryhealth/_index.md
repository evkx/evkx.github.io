---
title: How to verify battery health
linktitle: Verify battery health
description: It is possible with simple math to verify the overall status of your battery. This guide explains how.
weight: 1
---

When the battery degrades the available battery capacity reduces. This causes a shorter range.

If you know how much net capacity your car should have, you can easily check it.

This is how you check your battery

1. Charge to 100%
2. Take a drive and at least spend 70% of the battery. Try to keep the consumption low.
3. Take a note of your consumption and driving distance
4. Take a note of end SOC (state of charge) (percent left on battery)
5. Calculate actual capacity

For the following examples, we assume you have an e-tron 55 with 86.5kWh net capacity from the factory.

## Calculation in miles

### Miles example 1

You drive 169 miles with consumption of 2.6 miles/kWh. You started the trip with 100%
battery and ended up with 21%.

First, you calculate the total energy used:
169/2.6 = 65kWh in total.

If you had 21% left, you have used 79%. (100%-21%)

The current capacity is that 79% = 65kWh.

The full capacity (100%) can then be calculated:

(65/79)*100 = 82.27kWh.

82.27 is the actual capacity of your battery.

82.27/86.5 = 95.1%. Meaning a reduction of almost 5% from the original capacity.

## Calculation in kilometers

### Km example 1

If you drive 240 kilometers with a consumption of 25kWh/100
You started with 100% and ended up with 16%.

First, you calculate the total energy used

(280 * 25)/100 = 70kWh in total on the trip.

If you have 16% left you have used 84% on the trip (100-16)

84% = 70kWh battery.

The full capacity (100%) can then be calculated:

(70/84)*100 = 83.333 kWh

 83.333 is the actual capacity of your battery.

83.33/86.5 = 96.34%. Meaning a reduction of almost 4% from the original capacity.

## What affects capacity

Just one deviation from capacity does not necessarily mean that your battery has degraded.

If you have high consumption there will be some loss because of internal resistance. 

If your battery was unbalanced it will also affect the battery capacity.

For the people that love to keep track of this, we recommend  tracking this from the beginning of ownership. In this way you will know your car more.

The following example show the stats from an e-tron 55 2020v1 with 83.6kWh capacity from it was new.

![Graph](https://media.electrichasgoneaudi.net/multimedia/guides/checkingbatteryhealth/graph1.jpg "Tracking of actual battery capacity compared with total consumption")

![Graph](https://media.electrichasgoneaudi.net/multimedia/guides/checkingbatteryhealth/graph2.jpg "Tracking of actual battery capacity compared with consumption kWh/100 km")

{{% children description="true" depth="1" %}}
