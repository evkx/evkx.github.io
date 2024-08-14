---
title: CLTC Range Testing
linktitle: CLTC
description: The CLTC is a driving cycle that simulates typical driving conditions and patterns of Chinese drivers.
weight: 3
shownavtabs: true
---
<!-- markdownlint-disable MD033 -->

The China Automotive Technology & Research Center ([CATARC](https://www.catarc.ac.cn/)) developed the CLTC cycle in 2020. It replaced the previous China Automotive Test Cycle (CATC), which was based on the outdated New European Driving Cycle (NEDC).

The CLTC cycle was created by following more than 5000 cars in China over three years. CATARC used this driving data to create cycles that replicate how people drive cars in China.

The CLTC-P consists of 11 short trips (seven in the low-speed phase, three in the medium-speed phase, and one in the high-speed phase) and 12 idle segments, totaling 1800 seconds.

<table class="table table-striped border">
    <thead>
        <tr>
            <th>#</th>
            <th>Phase 1</th>
            <th>Phase 2</th>
            <th>Phase 3</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Duration (seconds)</td>
            <td>674</td>
            <td>693</td>
            <td>433</td>
            <td>1800</td>
        </tr>
        <tr>
            <td>Stop (seconds)</td>
            <td></td>
            <td></td>
            <td></td>
            <td>398</td>
        </tr>
        <tr>
            <td>Distance (meters)</td>
            <td>2450</td>
            <td>5910</td>
            <td>6120</td>
            <td>14480</td>
        </tr>
        <tr>
            <td>Percent Stop</td>
            <td></td>
            <td></td>
            <td></td>
            <td>22.11%</td>
        </tr>
        <tr>
            <td>Max Speed (km/h)</td>
            <td>48.1</td>
            <td>71.2</td>
            <td>114</td>
            <td>114</td>
        </tr>
        <tr>
            <td>Average Speed w/o Stop (km/h)</td>
            <td>20.19</td>
            <td>38.24</td>
            <td>53.89</td>
            <td>37.18</td>
        </tr>
        <tr>
            <td>Average Speed w/ Stop (km/h)</td>
            <td>13.08</td>
            <td>30.67</td>
            <td>50.9</td>
            <td>28.96</td>
        </tr>
        <tr>
            <td>Max Deceleration (m/s²)</td>
            <td>-1.42</td>
            <td>-1.47</td>
            <td>-1.46</td>
            <td>-1.47</td>
        </tr>
        <tr>
            <td>Max Acceleration (m/s²)</td>
            <td>1.47</td>
            <td>1.44</td>
            <td>1.06</td>
            <td>1.47</td>
        </tr>
    </tbody>
</table>

## How is the CLTC Performed?

The CLTC is performed on a dynamometer, a device that simulates driving conditions by placing the vehicle on rollers and measuring its performance. The vehicle is tested in a laboratory under controlled temperature, humidity, and pressure conditions.

The testing procedure starts with fully charging the vehicle's battery and leaving it parked overnight. The next day, the vehicle is driven on the dynamometer following the CLTC speed profile until the battery is completely depleted or the vehicle cannot maintain a minimum speed of 40 km/h (25 mph). The total distance traveled during the test is recorded as the preliminary range estimate.

This estimate is then adjusted by a correction factor to account for variations in driving conditions, such as temperature, terrain, and driver behavior. The correction factor is based on data collected from real-world driving by EV owners in different regions of China. The final range estimate is the product of the preliminary range and the correction factor.

## How Does the CLTC Compare to Other Test Cycles?

CLTC estimates are generally higher than both WLTP and EPA range figures.

However, some experts argue that the CLTC is not necessarily unrealistic or inaccurate but reflects the specific characteristics of Chinese roads and drivers.

Therefore, they suggest that the CLTC is more suitable for evaluating EV range in China than other test cycles based on foreign driving patterns and environments. They also recommend that consumers compare EV range estimates based on the same test cycle to avoid confusion and misunderstanding.

See the table below for examples.

<table class="table table-striped border">
    <thead>
        <tr>
            <th>#</th>
            <th>EPA</th>
            <th>WLTP</th>
            <th>CLTC</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Tesla Model 3 Long Range</td>
            <td></td>
            <td>678 km / 421 miles</td>
            <td>713 km / 443 miles</td>
        </tr>
        <tr>
            <td>Nio EL7 100kWh</td>
            <td></td>
            <td>513 km / 319 miles</td>
            <td>620 km / 385 miles</td>
        </tr>
        <tr>
            <td>Volvo EX30 Performance</td>
            <td>/ 265 miles</td>
            <td>460 km / 285 miles</td>
            <td>540 km / 335 miles</td>
        </tr>
        <tr>
            <td>Lotus Eletre S</td>
            <td>? km / ? miles</td>
            <td>535 km / 332 miles</td>
            <td>650 km / 404 miles</td>
        </tr>
    </tbody>
</table>