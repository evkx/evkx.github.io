---
title: How to Verify Battery Health
linktitle: Verify Battery Health
description: With simple math, you can verify your battery's overall status. This guide explains how.
weight: 1
---
<!-- markdownlint-disable MD033 -->

<div class="alert alert-warning" role="alert">
  This procedure is <b>only</b> applicable to EVs that:
  <ul>
    <li>Show complete trip consumption, not just the consumption for the last distance. For example, many Chinese EVs only show consumption for the last 50 km.</li>
    <li>Do not have a hidden usable buffer, like the Toyota bZ4X, which hides a lot of capacity between 0-1%.</li>
    <li>Do not adjust the buffer when degraded (most do not).</li>
  </ul>
</div>

When the battery degrades, the available battery capacity reduces, lowering the driving range of the EV.

If you know the net capacity your car should have when new, you can calculate its current health.

Here’s how to check your battery:

1. Charge to 100%.
2. Drive and use at least 90% of the battery. Try to keep consumption low.
3. Note your consumption and driving distance.
4. Note the end SOC (state of charge) percentage left on the battery.
5. Calculate the actual capacity.

For the following examples, we assume you have an e-tron 55 with an 86.5 kWh net capacity from the factory.

## Calculation in Miles

### Example 1

You drive 169 miles with a consumption of 2.6 miles/kWh. You started the trip with a 100% battery and ended with 21%.

First, calculate the total energy used: 169 / 2.6 = <b>65 kWh</b>.<br>
If you had 21% left, you used <b>79%</b> (100% - 21%).<br>
The current capacity is 79% = 65 kWh.<br>
You can calculate the full capacity (100%):<br>
(65 / 79) * 100 = <b>82.27 kWh</b>.<br>
82.27 is the actual usable capacity of your battery.<br>
82.27 / 86.5 = <b>95.1%</b>.<br>
This indicates a reduction of almost 5% from the original usable capacity.

## Calculation in Kilometers

### Example 1

You drive 308 kilometers with a consumption of 25 kWh/100 km.<br>
You started with 100% and ended with 5%.<br>

First, calculate the total energy used:<br>
(308 * 25) / 100 = <b>77 kWh</b> in total.<br>
If you have 5% left, you used <b>95%</b> (100% - 5%).<br>

95% = 77 kWh battery.<br>

The full capacity (100%) can then be calculated:<br>
(77 / 95) * 100 = <b>81.05 kWh</b>.<br>
81.05 is the actual capacity of your battery.<br>
81.05 / 86.5 = <b>93.7%</b>.<br>
This indicates a reduction of almost <b>6.5%</b> from the original capacity.

## What Affects Capacity

A single deviation from capacity does not necessarily mean your battery has degraded.

High consumption can cause some loss due to internal resistance.

An unbalanced battery will also affect capacity.

For those who love to keep track, we recommend monitoring this from the beginning of ownership. This way, you will know your car better.

The following example shows the stats from an e-tron 55 2020v1 with an 83.6 kWh capacity from new.

{{< sitefiguresized thumb="guides/checkingbatteryhealth/graph1_st.jpg" width="2463" height="1366" title="Tracking of actual battery capacity compared with total consumption" >}}

{{< sitefiguresized thumb="guides/checkingbatteryhealth/graph2_st.jpg" width="2019" height="1364" title="Tracking of actual battery capacity compared with consumption kWh/100 km" >}}