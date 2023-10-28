---
title: WLTP Range testing
linktitle: WLTP
description: The Worldwide harmonized Light vehicles Test Procedure (WLTP) is a global standard for determining the range of electric vehicles.
weight: 2
---
<!-- markdownlint-disable MD033 -->

For cars sold in Europa after September 2017, it is a requirement to use this standard. This standard replaced the NEDC.

## How is it tested?

The test procedure is [described in detail](https://unece.org/transport/documents/2021/02/standards/un-regulation-no-154-worldwide-harmonized-light-vehicles-test) by the UN.

In short, the new WLTP procedure relies on the new driving cycles (WLTC – Worldwide harmonized Light-duty vehicles Test Cycles) to measure the range.

The WLTP cycle has four sub-parts, each with a different maximum speed. The total test cycle time is 30 minutes (1800 seconds).

<table class="table">
    <thead>
        <tr>
         <th>#
         </th>
         <th>City
         </th>
         <th>Suburban
         </th>
         <th>Rural
         </th>
         <th>Highway
         </th>
         <th>Total
         </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Duration, Seconds 
            </td>
            <td>589
            </td>
            <td>483
            </td>
            <td>455
            </td>
            <td>323
            </td>
            <td>1800
            </td>
        </tr>
        <tr>
            <td>Stop, seconds
            </td>
            <td>150
            </td>
            <td>49
            </td>
            <td>31
            </td>
            <td>8
            </td>
            <td>235
            </td>
        </tr>
        <tr>
            <td>Distance in meter
            </td>
            <td>3095
            </td>
            <td>4756
            </td>
            <td>7162
            </td>
            <td>8254
            </td>
            <td>23266
            </td>
        </tr>
             <tr>
            <td>Percent stop
            </td>
            <td>26.5% 
            </td>
            <td>11.1%
            </td>
            <td>6.8%
            </td>
            <td>2.2%
            </td>
            <td>13.5% 
            </td>
        </tr>
             <tr>
            <td>Max speed
            </td>
            <td>56.5
            </td>
            <td>76.6
            </td>
            <td> 97.4
            </td>
            <td>131.3
            </td>
            <td>
            </td>
        </tr>
             <tr>
            <td>Average speed w/o stop
            </td>
            <td>25.3
            </td>
            <td>44.5
            </td>
            <td>60.7
            </td>
            <td>94
            </td>
            <td>53.5
            </td>
        </tr>
             <tr>
            <td>Avg speed w stop
            </td>
            <td>18.9
            </td>
            <td>39.4
            </td>
            <td>56.5
            </td>
            <td>91.7
            </td>
            <td>46.5
            </td>
        </tr>
        <tr>
            <td>Min acceleration  m/s^2
            </td>
            <td>-1.5 
            </td>
            <td>-1.5
            </td>
            <td>-1.5
            </td>
            <td>- 1.44
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>Max acceleration  m/s^2
            </td>
            <td>1.611
            </td>
            <td>1.611
            </td>
            <td>1.666
            </td>
            <td>1.055
            </td>
            <td>
            </td>
        </tr>
    </tbody>
</table>

The below graph shows the speed for the different cycles.

{{< sitefiguresized thumb="guides/understandingrange/wltp/wltpcycle3_st.png" width="2914" height="1914" title="WLTP cycle 3B" >}}


The test is done on a dynamometer to get the same conditions. The 

- 23-degree Celcius
- A/C turned off
- Lights turned of

In addition to the dynamometer test, the manufacturer must test the car in a wind tunnel. The test will result in a drag coefficient, and a front area size used to calculate the WLTP range. 

{{< sitefiguresized thumb="guides\understandingrange\wltp\windtunnel_st.jpg" width="3000" height="1539" title="Audi e-tron in a wind tunnel" >}}

## The result depends on the equipment level

For many models, some options will affect the range. These options could be bigger wheels, sunroofs, virtual mirrors, and other factors that change weight or aerodynamics.

For models with these options, the manufacturer needs to take two tests. One test with maximum options and one with minimum options.

The manufacturer can calculate the range for different options setups from these numbers.

## How correct is it?

Running a test without AC, heating, and lights at 23 degrees Celcius will not give correct consumption in many real-world scenarios.

In the worst-case scenario, driving on a highway in heavy rain in cold weather would probably give only 50-60% percent of the stated WLTP range.  

In the EVKX.net model database, we include both max and minimum WLTP range together with the expected real-world range. 
