---
title: EPA Range testing
linktitle: EPA
description: The EPA range testing is the test used in the United States. The United States Environmental Protection Agency defines the tests.
weight: 1
---
<!-- markdownlint-disable MD033 -->

## How is it tested?

EPA defines the [test cycles](https://www.fueleconomy.gov/feg/fe_test_schedules.shtml), and SAE the [test procedure](https://www.fueleconomy.gov/feg/pdfs/EPA%20test%20procedure%20for%20EVs-PHEVs-11-14-2017.pdf).

The manufacturers perform the EPA tests on a dynamometer, a device that simulates driving conditions by placing the vehicle on rollers and measuring its performance.

{{< sitefigure thumb="guides/understandingrange/epa/bmwi7dynamometer_1_st.jpg" title="BMW i7 on a dynamometer" >}}

The manufacturer can choose between a two- or five-cycle test.

### Two Cycle tests

The EPA defines two driving cycles to represent typical city and highway scenarios: the Urban Dynamometer Driving Schedule (UDDS) and the Highway Fuel Economy Driving Schedule (HWFET). 

The UDDS cycle involves frequent stops and starts, while the HWFET cycle involves steady speeds and minimal braking.


<table class="table">
    <thead>
    <tr>
    <th>
    </th>
    <th>
        UDDP
    </th>
    <th>
        HWFET
    </th>
    </thead>
    <tbody>
        <tr>
            <td>Duration, Seconds</td>
            <td>1874</td>
            <td>765</td>
        </tr>
        <tr>
            <td>Stop, seconds</td>
            <td>358</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Distance in meters</td>
            <td>17767</td>
            <td>16142</td>
        </tr>
        <tr>
            <td>Distance in miles</td>
            <td>11.04</td>
            <td>10.03</td>
        </tr>
        <tr>
            <td>Percent stop</td>
            <td>18%</td>
            <td>0%</td>
        </tr>
        <tr>
            <td>Max speed km/h</td>
            <td>90.93</td>
            <td>96.6</td>
        </tr>
        <tr>
            <td>Max speed mph</td>
            <td>56.5</td>
            <td>60</td>
        </tr>
        <tr>
            <td>Avg speed km/h</td>
            <td>34.2</td>
            <td>77.7</td>
        </tr>
        <tr>
            <td>Avg speed mph</td>
            <td>21.2</td>
            <td>48.3</td>
        </tr>
    </tbody>
</table>

{{< sitefigure thumb="guides/understandingrange/epa/epacycles_st.png" title="EPA Cycles" >}}

The manufacturers test EVs by fully charging them, leaving them parked overnight, and running them through multiple UDDS and HWFET cycles until the test has completely depleted the battery. The manufacturers perform the tests with a 55% HWFET and 45% UDDS mix. 

The manufacturer records the total distance traveled by the EV during the test as the preliminary range estimate. However, the manufacturer adjusts this estimate by a correction factor to account for variations in driving conditions, such as temperature, terrain, and driver behavior. 

EPA has based the correction factor on data collected from real-world driving. The final range estimate is the product of the preliminary and correction factors. The correction factor is 0.7 for the two-cycle tests.

For example, if an EV travels 300 miles during the test with a correction factor of 0.7, its final EPA range estimate would be 300 x 0.7 = 210 miles. 

This result means the EV can go 210 miles on a full charge under typical driving conditions.

After the testing, the battery is recharged from a normal AC source using the manufacturer’s charger for that vehicle.

The energy consumption of the city and highway cycles (in kW-hr/mile or kW-hr/100 miles) is then determined mathematically from the recharging energy, the DC discharge data, and the distance for each cycle.

The recharge energy includes any losses due to inefficiencies of the manufacturer’s charger.

### Five Cycle test

In addition to Urban Dynamometer Driving Schedule (UDDS) and the Highway Fuel Economy Driving Schedule (HWFET), EPA has defined three extra cycles.

The three extra cycles in the five-cycle tests for EPA are the US06, the SC03, and the Cold Temperature Test. 

EPA uses these cycles to measure vehicles' fuel economy and emissions under different driving conditions that the standard city and highway cycles do not cover.

The US06 is a high acceleration aggressive driving cycle that simulates driving on freeways and rural roads with higher speeds and more frequent stops. It is also known as the Supplemental FTP cycle.

The SC03 is a driving cycle that simulates driving with air conditioning in hot weather. It is also known as the Air Conditioning Supplemental FTP cycle.

The Cold Temperature Test is a driving cycle simulating cold weather conditions. It is performed at 20°F (-7°C) instead of the normal 75°F (24°C). It is also known as the Cold CO2 Test.

These three extra cycles are used to calculate the adjusted fuel economy ratings displayed on new vehicle window stickers. The adjusted ratings are more representative of real-world driving than the unadjusted ratings based on the standard city and highway cycles alone.

The EV manufacturer can choose whether to use the 2-cycle or five-cycle tests. Typically, they will choose the one that goes the farthest.

[Tesla uses five-cycle test to get a longer rated EPA range](https://www.caranddriver.com/features/a33824052/adjustment-factor-tesla-uses-for-big-epa-range-numbers/). 

## How correct is it?

Many consider the EPA tests to be closer to real-world numbers than WLTP tests.

In the [EVKX.net model database](/evsearch), we have listed the EPA result for the models.  EPA also have it own [search](https://www.fueleconomy.gov/feg/PowerSearch.do?action=PowerSearch&year1=2021&year2=2023&minmsrpsel=0&maxmsrpsel=0&city=0&highway=0&combined=0&cbftelectricity=Electricity&YearSel=2021-2023&MakeSel=&MarClassSel=&FuelTypeSel=Electricity&VehTypeSel=&TranySel=&DriveTypeSel=&CylindersSel=&MpgSel=000&sortBy=Comb&Units=&url=SearchServlet&opt=new&minmsrp=0&maxmsrp=0&minmpg=0&maxmpg=0&sCharge=&tCharge=&startstop=&cylDeact=&rowLimit=200)
