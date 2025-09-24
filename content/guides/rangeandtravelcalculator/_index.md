---
title: EV Travel Calculator (beta)
linktitle: EV Travel Calculator (beta)
description: Plan and compare EV trips with realistic, physics-based estimates. Pick a mode (Range, Distance, or Time), set speed and weather, and see how different cars stack up—total time, charging stops, and energy use—in one view.
weight: 3
xsthumb: guides/evsearch/search_1_xst.jpg
---
<!-- markdownlint-disable MD033 -->

## What it does

* **Range mode:** How far a car can go on one charge window (e.g., 100→0%, 100→10%, 80→10%) at your chosen speed and conditions.
* **Distance mode:** Time, energy, and **charging stops** needed to cover a set route length.
* **Time mode:** How far you can get within a time budget (driving + charging).
* **Units:** Switch between metric and imperial.
* **Options:** Battery SoH (state of health), heat-loss factor, trim level (wheel/tyre effects), and **towing a trailer** (presets).

## How it works (high level)

We blend simple vehicle physics with real-world calibration:

* **Aerodynamic drag** (Cd × frontal area): grows with speed² and **air density** (temperature).
* **Rolling resistance** (tyres + mass): scaled by road **condition** (dry → wet/snow) and vehicle mass.
* **Accessory & climate loads:** a background load plus your **HVAC** setting.
* **Calibration:** Fitted to WLTP and highway anchors (e.g., 90/120 km/h), so results are at **battery level** (drivetrain/inverter losses implicitly included).
* **Battery & trim:** **SoH** (battery health), **heat-loss** (extra losses in cold), and **trim** (wheels/tyres).
* **Towing:** Adds trailer mass and a partial **aero** penalty based on trailer frontal area and how much is exposed outside the vehicle’s wake.

### Charging overhead & losses (assumptions)

* **Per-stop overhead: +5 minutes.**  
  We add a fixed 5-minute buffer on top of pure charging time to cover exiting the road, locating a stall, plugging in, session start, and rejoining traffic/getting back up to speed.
* **Charging loss: 5%.**  
  We assume ~5% energy loss in the charging process. The **“added energy”** shown in results is what reaches your **battery**; the charger screen (and what you pay for) will typically be about **5% higher**.  
  *Example:* If the table shows **40 kWh** added, expect roughly **42 kWh** billed at the charger.

The calculator then estimates charging needs and timing to meet your target (Distance/Time modes) and lists each stop with SoC (state of charge) in→out and added kWh.

## What you’ll see

* Vehicle
* **Range / Distance / Total energy** (depends on mode)
* **Consumption** (Wh/km or mi/kWh)
* **Total time**
* **Charging stops** (count, durations, SoC in→out, added kWh)
* Expand rows for per-stop details

## Important notes & limitations

This is an **estimate**, not a guarantee. Real-world results vary due to:

* **Route specifics:** elevation/grades, traffic, limits, roadworks
* **Weather:** wind (head/cross), precipitation, road temperature/ice
* **Vehicle specifics:** tyre type/pressure, payload, roof boxes/bike racks, driving style, pre-conditioning
* **Charging realities:** availability, queues, shared power, station health, payment/apps
* **Data variance:** manufacturer specs vs. your car’s curve, battery conditioning

Plan conservatively and confirm with a dedicated route planner before long trips. **No warranty is provided; use at your own risk.**

## Tips for better estimates

* Set a **realistic cruising speed** for your route and laws.
* Match **temperature** and **road condition** to the forecast.
* Enter your **SoH** if the battery is degraded; use **heat-loss** in very cold weather.
* Choose the **trim** you actually drive.
* If towing, pick the closest **trailer type**.

---

*Model version:* v1.0 · *Last updated:* 2025-09-20
