---
title: EPA Range Testing
linktitle: EPA
description: The EPA range testing is the test used in the United States. The United States Environmental Protection Agency defines the tests.
weight: 1
shownavtabs: true
---
<!-- markdownlint-disable MD033 -->

## How is it tested?

The EPA defines the [test cycles](https://www.fueleconomy.gov/feg/fe_test_schedules.shtml), and the SAE defines the [test procedure](https://www.fueleconomy.gov/feg/pdfs/EPA%20test%20procedure%20for%20EVs-PHEVs-11-14-2017.pdf).

Manufacturers perform the EPA tests on a dynamometer, a device that simulates driving conditions by placing the vehicle on rollers and measuring its performance.

{{< sitefiguresized thumb="guides/understandingrange/epa/bmwi7dynamometer_1_st.jpg" width="3000" height="2000" title="BMW i7 on a dynamometer" >}}

Manufacturers can choose between a two-cycle or five-cycle test.

### Two-Cycle Tests

The EPA defines two driving cycles to represent typical city and highway scenarios: the Urban Dynamometer Driving Schedule (UDDS) and the Highway Fuel Economy Driving Schedule (HWFET).

- **UDDS Cycle**: Involves frequent stops and starts.
- **HWFET Cycle**: Involves steady speeds and minimal braking.

<table class="table">
    <thead>
        <tr>
            <th></th>
            <th>UDDS</th>
            <th>HWFET</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Duration (seconds)</td>
            <td>1874</td>
            <td>765</td>
        </tr>
        <tr>
            <td>Stop (seconds)</td>
            <td>358</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Distance (meters)</td>
            <td>17767</td>
            <td>16142</td>
        </tr>
        <tr>
            <td>Distance (miles)</td>
            <td>11.04</td>
            <td>10.03</td>
        </tr>
        <tr>
            <td>Percent Stop</td>
            <td>18%</td>
            <td>0%</td>
        </tr>
        <tr>
            <td>Max Speed (km/h)</td>
            <td>90.93</td>
            <td>96.6</td>
        </tr>
        <tr>
            <td>Max Speed (mph)</td>
            <td>56.5</td>
            <td>60</td>
        </tr>
        <tr>
            <td>Avg Speed (km/h)</td>
            <td>34.2</td>
            <td>77.7</td>
        </tr>
        <tr>
            <td>Avg Speed (mph)</td>
            <td>21.2</td>
            <td>48.3</td>
        </tr>
    </tbody>
</table>

{{< sitefiguresized thumb="guides/understandingrange/epa/epacycles_st.png" width="2732" height="1505" title="EPA Cycles" >}}

Manufacturers test EVs by fully charging them, leaving them parked overnight, and running them through multiple UDDS and HWFET cycles until the battery is completely depleted. The tests are performed with a 55% HWFET and 45% UDDS mix.

The total distance traveled during the test is recorded as the preliminary range estimate. This estimate is then adjusted by a correction factor to account for variations in driving conditions, such as temperature, terrain, and driver behavior. The correction factor is based on real-world driving data and is 0.7 for the two-cycle tests.

For example, if an EV travels 300 miles during the test with a correction factor of 0.7, its final EPA range estimate would be 300 x 0.7 = 210 miles. This means the EV can go 210 miles on a full charge under typical driving conditions.

After testing, the battery is recharged from a normal AC source using the manufacturer’s charger for that vehicle. The energy consumption of the city and highway cycles (in kW-hr/mile or kW-hr/100 miles) is then determined mathematically from the recharging energy, the DC discharge data, and the distance for each cycle. The recharge energy includes any losses due to inefficiencies of the manufacturer’s charger.

### Five-Cycle Test

In addition to the UDDS and HWFET cycles, the EPA has defined three extra cycles:

- **US06**: A high acceleration aggressive driving cycle simulating driving on freeways and rural roads with higher speeds and more frequent stops. Also known as the Supplemental FTP cycle.
- **SC03**: A driving cycle simulating driving with air conditioning in hot weather. Also known as the Air Conditioning Supplemental FTP cycle.
- **Cold Temperature Test**: A driving cycle simulating cold weather conditions, performed at 20°F (-7°C) instead of the normal 75°F (24°C). Also known as the Cold CO2 Test.

These three extra cycles are used to calculate the adjusted fuel economy ratings displayed on new vehicle window stickers. The adjusted ratings are more representative of real-world driving than the unadjusted ratings based on the standard city and highway cycles alone.

EV manufacturers can choose whether to use the two-cycle or five-cycle tests. Typically, they will choose the one that provides the longest range.

[Tesla uses the five-cycle test to get a longer rated EPA range](https://www.caranddriver.com/features/a33824052/adjustment-factor-tesla-uses-for-big-epa-range-numbers/).

## How Accurate is it?

Many consider the EPA tests to be closer to real-world numbers than WLTP tests.

In the [EVKX.net model database](/evsearch), we have listed the EPA results for various models. The EPA also has its own [search tool](https://www.fueleconomy.gov/feg/PowerSearch.do?action=PowerSearch&year1=2021&year2=2023&minmsrpsel=0&maxmsrpsel=0&city=0&highway=0&combined=0&cbftelectricity=Electricity&YearSel=2021-2023&MakeSel=&MarClassSel=&FuelTypeSel=Electricity&VehTypeSel=&TranySel=&DriveTypeSel=&CylindersSel=&MpgSel=000&sortBy=Comb&Units=&url=SearchServlet&opt=new&minmsrp=0&maxmsrp=0&minmpg=0&maxmpg=0&sCharge=&tCharge=&startstop=&cylDeact=&rowLimit=200).