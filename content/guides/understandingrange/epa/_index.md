---
title: EPA Range testing
linktitle: EPA
description: The EPA range testing is the test used in United States. 
weight: 3
---
<!-- markdownlint-disable MD033 -->

The tests is defined by United States Environmental Protection Agency.

## How is it tested

The EPA test cycles are [defined](https://www.fueleconomy.gov/feg/fe_test_schedules.shtml) by EPA and [test procedure](https://www.sae.org/standards/content/j1634_202104/) by SAE

There are two estimates in this cycle, the urban estimate represented by the UDDS (Urban Dynamometer Driving Schedule) and the highway estimate represented by the HWFET (Highway Fuel Economy Test).

|  | UDDP | HWFET |
|----|----|----|
| Duration, Seconds | 1874 | 765 |
| Stop, seconds | 358 | 0 |
| Distance in meter | 17767 | 16142 |
| Distance in miles | 11.04 | 10.03 |
| Percent stop | 18% | 0% |
| Max speed kmh | 90.93 | 96.6 |
| Max speed mph | 56.5 | 60 |
| Avg speed km/h | 34.2 | 77.7 |
| Avg speed mph | 21.2 | 48.3 |

<figure>
    <a href="https://media.evkx.net/multimedia/guides/understandingrange/epa/epacycles.png">
        <img src="https://media.evkx.net/multimedia/guides/understandingrange/epa/epacycles_st.png" alt="EPA Cycles" title="EPA Cycles">
    </a>
    <figcaption><h4>EPA Cycles</h4></figcaption>
</figure>

Before the testing procedure begins, the car is fully charged and left on its own for the night. The battery is depleted with continuous running UDDS and HWFET cycles with a mix of 55% HWFET and 45% UDDS.

After the testing is completed, the battery is then recharged from a normal AC source using the manufacturer’s charger for that vehicle.

The energy consumption of the city and highway cycles (in kW-hr/mile or kW-hr/100 miles) are then determined mathematically from the recharging energy, the DC discharge data and distance for each cycle.

The recharge energy includes any losses due to inefficiencies of the manufacturer’s charger.

The result is adjusted with an adjusment factor (standardf 0.7) to adjust for real world comsumption.  The adjustment factor can be adjusted if manufactor does [additional tests](https://www.caranddriver.com/features/a33824052/adjustment-factor-tesla-uses-for-big-epa-range-numbers/). 

## How correct is it?

The EPA tests is considered to give more close to real world numbers 

In EVKX.net modeldatabase we have listed the EPA result for the models.  EPA also have it own [search](https://www.fueleconomy.gov/feg/powerSearch.jsp)


https://www.fueleconomy.gov/feg/pdfs/EPA%20test%20procedure%20for%20EVs-PHEVs-11-14-2017.pdf