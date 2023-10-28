---
title: How to verify battery health
linktitle: Verify battery health
description: With simple math, it is possible to verify your battery's overall status. This guide explains how.
weight: 1
---
<!-- markdownlint-disable MD033 -->

<div class="alert alert-warning" role="alert">
  This procedure is <b>only</b> possible to use on EVs that
  <ul>
  <li>Show a complete trip consumption and not only the consumption for the last distance. Example: many chinese EVs only show consumption last 50km</li>
  <li>Does not have hidden usable buffer, like Toyota bZ4X where it hides a lot of capacity between 0-1%</li>
  <li>Does not adjust buffer when degraded (most does not)</li>
  </ul>
</div>

When the battery degrades, the available battery capacity reduces. This reduction lowers the driving range of the EV.

If you know how much net capacity your car should have when it is new, you can calculate the current health.

This procedure is how you check your battery

1. Charge to 100%
2. Take a drive and at least spend 90% of the battery. Try to keep the consumption low.
3. Take note of your consumption and driving distance
4. Take note of the end SOC (state of charge) (percent left on battery)
5. Calculate actual capacity

For the following examples, we assume you have an e-tron 55 with 86.5kWh net capacity from the factory.

## Calculation in miles

### Miles example 1

You drive 169 miles with a consumption of 2.6 miles/kWh. You started the trip with 100% battery and ended up with 21%.

First, you calculate the total energy used: 169/2.6 = <b>65kWh</b>.<br>
If you had 21% left, you have used <b>79%.</b> (100%-21%)<br>
The current capacity is 79% = 65kWh.<br>
You can calculate the full capacity (100%):<br>
(65/79)*100 = <b>82.27kWh</b><br>
82.27 is the actual usable capacity of your battery.
82.27/86.5 = <b>95.1%</b>
Meaning a reduction of almost 5% from the original usable capacity.

## Calculation in kilometers

### Km example 1

If you drive 240 kilometers with a consumption of 25kWh/100km<br>
You started with 100% and ended up with 16%.<br>

First, you calculate the total energy used<br>
(280 * 25)/100 = <b>70kWh</b> in total on the trip.<br>
If you have 16% left you have used <b>84%</b> on the trip (100-16)<br>

84% = 70kWh battery.<br>

The full capacity (100%) can then be calculated:<br>

(70/84)*100 = <b>83.333 kWh</b>
83.333 is the actual capacity of your battery.<br>
83.33/86.5 = <b>96.34%</b>. Meaning a reduction of almost <b>4%</b> from the original capacity.

## What affects capacity

Just one deviation from capacity does not necessarily mean that your battery has degraded.

If you have high consumption there will be some loss because of internal resistance. 

If your battery was unbalanced it will also affect the battery capacity.

For the people that love to keep track of this, we recommend  tracking this from the beginning of ownership. In this way you will know your car more.

The following example show the stats from an e-tron 55 2020v1 with 83.6kWh capacity from it was new.

{{< sitefiguresized thumb="guides/checkingbatteryhealth/graph1_st.jpg" width="2463" height="1366" title="Tracking of actual battery capacity compared with total consumption" >}}

{{< sitefiguresized thumb="guides/checkingbatteryhealth/graph2_st.jpg" width="2019" height="1364" title="Tracking of actual battery capacity compared with consumption kWh/100 km" >}}