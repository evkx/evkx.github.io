---
title: EV Charging Explained: Technology, Performance, and Real-World Factors
linktitle: Charging
description: Charging the battery is the process of adding new energy to the battery.
weight: 8
navicon: bi-battery-charging
---

<!-- markdownlint-disable MD033 -->

Charging an EV battery involves moving electricity into the battery, where it's stored as chemical energy. This occurs through the movement of electrons and ions between the battery's two electrodes: the cathode and anode, separated by an electrolyte.

During charging, electrons flow from the power source (e.g., a charging station) to the cathode. Simultaneously, positive ions move from the cathode to the anode through the electrolyte. Once fully charged, the battery stores energy via a high potential difference between its terminals, ready to power the vehicle.

<figure>
<img src="https://media.evkx.net/multimedia/technology/battery/charging/batteryconceptcharging.drawio.svg" class="img-fluid mx-auto d-block">
<figcaption>
    <p class="lead text-center fw-semibold">
        Battery charging
    </p>
</figcaption>
</figure>

The process is reversible. During discharge, electrons flow from the anode to the cathode through an external circuit, generating current to drive the electric motor.

{{<evkxdisplayaddarticle />}}

## Charging Performance

Charging performance varies significantly between EV models and is influenced by several key factors:

{{< sitefiguresized thumb="technology/battery/charging/charging_1_st.jpg" width="1920" height="1080" title="Kia EV6 GT charging at Ionity" >}}

### Pack Configuration

The battery pack's voltage affects maximum charging speed. For example, a 50kW DC CCS charger delivering 125A requires at least 400V to achieve full output. A 300V pack would be limited to 37.5kW (300V x 125A).

Similarly, most CCS HPC chargers are limited to 500A. This means a 400V pack can support up to 200kW, while a 300V pack is capped at 150kW.

Models like the Volvo EX90, Polestar 3, and Nio EL8 claim to support 250kW charging on 400V architectures, but this depends on chargers not capped at 500 Amps.

#### 800-Volt EVs on 400-Volt Chargers

800V EVs can be limited by older 400–500V chargers. Tesla Superchargers, for instance, are capped at 500V, reducing charging speeds for 800V vehicles.

Some EVs, like the Mercedes CLA is not provided with the capability to charge at 400 Volt chargers,

##### Inverter Technique

Some EVs use onboard inverters to convert voltage and adapt to different charger types. This is especially useful when 800V vehicles connect to older 400V DC chargers. The inverter steps up the voltage internally, allowing the vehicle to charge even if the charger doesn't natively support 800V output.

However, this voltage conversion has efficiency limits, resulting in reduced peak charging speeds. The exact performance depends on the vehicle’s inverter architecture and cooling capabilities.

**Example max speeds using inverter voltage conversion:**

<div class="overflow-x-auto mt-4">
  <table class="min-w-full border border-gray-300 text-sm text-left text-gray-800">
    <thead class="bg-gray-100">
      <tr>
        <th class="px-4 py-2 border-b">Model</th>
        <th class="px-4 py-2 border-b">Platform</th>
        <th class="px-4 py-2 border-b">800V Pack</th>
        <th class="px-4 py-2 border-b">Max Power on 400V DC Charger</th>
        <th class="px-4 py-2 border-b">Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-white">
        <td class="px-4 py-2 border-b">Hyundai Ioniq 5</td>
        <td class="px-4 py-2 border-b">E-GMP</td>
        <td class="px-4 py-2 border-b">Yes</td>
        <td class="px-4 py-2 border-b">~100kW</td>
        <td class="px-4 py-2 border-b">Dual inverter system</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-2 border-b">Porsche Taycan</td>
        <td class="px-4 py-2 border-b">J1</td>
        <td class="px-4 py-2 border-b">Yes</td>
        <td class="px-4 py-2 border-b">~50kW</td>
        <td class="px-4 py-2 border-b">Uses standard onboard inverter, faster avialbe</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-2 border-b">Lucid Gravity</td>
        <td class="px-4 py-2 border-b">LEAP</td>
        <td class="px-4 py-2 border-b">Yes</td>
        <td class="px-4 py-2 border-b">~225kW</td>
        <td class="px-4 py-2 border-b">Using drive unit inverter</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-2 border-b">Smart #5</td>
        <td class="px-4 py-2 border-b">EPA</td>
        <td class="px-4 py-2 border-b">Yes</td>
        <td class="px-4 py-2 border-b">~80kW</td>
        <td class="px-4 py-2 border-b"></td>
      </tr>
    </tbody>
  </table>
</div>


The **Lucid Gravity incorporates** a sophisticated inverter‑boost system that enables high‑voltage (926 V) charging from lower-voltage sources like Tesla V3 (≈500 V) Superchargers. It achieves this by embedding a boost converter within the rear motor drive unit—using the motor stator and SiC transistors to step up voltage—without significantly increasing weight (just ~5 kg overhead) or compromising cooling


##### Bank Charging

This method splits the battery into two 400V sections. Models like the Audi Q6 e-tron and Porsche Macan support up to 135kW on 400V and up to 270kW on 800V. The Tesla Cybertruck can reach 230kW at 500V Superchargers.

{{< sitefiguresized thumb="technology/battery/charging/bankcharging_1_st.jpg" width="3000" height="1852" title="Audi Q6 e-tron bank charging" >}}

### Temperature

Battery temperature critically affects charging speed. In cold weather, charging can slow by over 50% due to Battery Management System (BMS) limitations. Many EVs preheat the battery when navigating to a charger.

In hot weather, the BMS may also throttle charging to prevent overheating. Optimal charging temperatures range from 25–35°C (77–95°F). Above 50–60°C, charging may be reduced to protect battery health.

{{< sitefiguresized thumb="technology/battery/charging/charging_2_st.jpg" width="1920" height="1080" title="Audi e-tron GT charging in winter" >}}

EVs with fast charging must have effective thermal management systems to maintain ideal battery temperature during sessions.

EVKX charge curves reflect **optimal conditions**:

* Battery temperature is high enough for maximum speed.
* The battery remains within safe limits during a 0–100% session.

{{<evkxdisplayaddarticle />}}

### BMS Software

BMS software also shapes charging curves. Manufacturers balance charging speed with battery longevity. Since high-speed charging accelerates degradation, some EVs limit charging speed or the number of high-power sessions.

For example:

* Toyota BZ4X permits only two high-speed sessions per 24 hours.
* Porsche Taycan allows users to cap charging speed (e.g., from 270kW to 200kW) to reduce wear.

{{< sitefiguresized thumb="technology/battery/charging/taycancharging_1_st.jpg" width="3000" height="2669" title="Porsche Taycan charging" >}}

### Charging Speed Examples

EVKX provides real-world charging performance data and graphs for each EV model:

* [Zeekr 7x Long Range AWD](/models/zeekr/7x/7x_long_range_awd/chargingcurve/): Over 430kW peak.

  This model requires more than 650A to achieve full speed. On 400V chargers, it's limited to 80kW. The charge curve diagram displays all three scenarios.

  <img src="https://evkx.net/models/zeekr/7x/7x_long_range_awd/chargingcurve/chart/?battery=0" class="img-fluid">

* [Kia EV6 GT](/models/kia/ev6/ev6_gt/chargingcurve/): High peak speed with a flat curve, ideal for long-distance travel.

  <img src="https://evkx.net/models/kia/ev6/ev6_gt/chargingcurve/chart/?battery=0" class="img-fluid">

* [Nissan Ariya](/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve/): Moderate peak speed but consistent curve.

  <img src="/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve/chart/?battery=0" class="img-fluid">

### Final Thoughts

On long trips, the shape of the charge curve matters. Flat curves support longer, consistent stops, while peak-heavy curves benefit quick top-ups. EVKX helps you compare and understand each model's real-world performance.
