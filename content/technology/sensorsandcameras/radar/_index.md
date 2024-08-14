---
title: Radar Sensors
linktitle: Radar
description: ADAS systems use car radar sensors for various applications, including collision avoidance, adaptive cruise control, and blind spot detection.
weight: 2
---
<!-- markdownlint-disable MD033 -->

Radar, short for "Radio Detection and Ranging," is a sensing technology that uses radio waves to detect the presence and location of objects.

{{< sitefiguresized thumb="technology/sensorsandcameras/radar/radar_3_st.jpg" width="3000" height="1714" title="Radar sensor" >}}

## How Radar Sensors Work

Manufacturers typically place radar sensors on the vehicle's front, rear, and sides. These sensors emit radio waves that bounce off nearby objects and return to the sensor. By measuring the time it takes for the radio waves to travel to and from an object, radar sensors can determine the object's distance and speed.

Radar sensors can be standard or optional, depending on the EV model. Typically, the front sensor is standard on all EVs with radar.

{{< sitefiguresized thumb="technology/sensorsandcameras/radar/radar_1_st.jpg" width="1290" height="826" title="Radar sensor location rear Audi e-tron GT" >}}

{{< sitefiguresized thumb="technology/sensorsandcameras/radar/radar_2_st.jpg" width="1113" height="852" title="Radar sensor" >}}

## Applications in ADAS

Radar sensors are beneficial for various ADAS applications, including:

- **Collision Avoidance:** Detects when a car is getting too close to an object, such as another car, and alerts the driver or automatically applies the brakes to avoid a collision.
- **Adaptive Cruise Control (ACC):** Detects the speed and distance of the car in front and adjusts the speed of your car accordingly to maintain a safe distance.

## Types of Radar Sensors

The table below shows the types and typical locations of different radar sensors.

<table class="table table-striped border">
<thead>
    <tr>
        <th>Type</th>
        <th>Range</th>
        <th>Location</th>
        <th>ADAS Usage</th>
    </tr>
</thead>
<tbody>
<tr>
    <td>Long range 77/79Ghz</td>
    <td>10-300 meters</td>
    <td>Front and rear</td>
    <td>
        <a href="../../driverassistance/adaptivecruisecontrol/">ACC</a>,
        <a href="../../driverassistance/automaticemergencybraking/">AEB</a>,
        <a href="../../driverassistance/collisionavoidancesystems/">CAS</a>,
        <a href="../../driverassistance/forwardcollisionwarning/">FCW</a>
    </td>
</tr>
<tr>
    <td>Medium range 77/79Ghz</td>
    <td>1-60 meters</td>
    <td>Front/rear</td>
    <td>
        <a href="../../driverassistance/adaptivecruisecontrol/">ACC</a>,
        <a href="../../driverassistance/automaticemergencybraking/">AEB</a>,
        <a href="../../driverassistance/collisionavoidancesystems/">CAS</a>,
        <a href="../../driverassistance/forwardcollisionwarning/">FCW</a>,
        <a href="../../driverassistance/automatedlanechange/">ALC</a>,
        <a href="../../driverassistance/frontcrosstrafficassist/">FCTA</a>
    </td>
</tr>
<tr>
    <td>Short range (24/77Ghz)</td>
    <td>0.5-20 meters</td>
    <td>Front and rear corner</td>
    <td>
        <a href="../../driverassistance/rearcrosstrafficalert/">RCTA</a>,
        RCW,
        <a href="../../driverassistance/blindspotmonitoring/">BSM</a>
    </td>
</tr>
</tbody>
</table>

{{< sitefiguresized thumb="technology/sensorsandcameras/radar/radarrange_1_st.jpg" width="3000" height="1686" title="Radar sensor range" >}}

## Pros and Cons of Radar Sensors

### Pros

- **Effective Detection:** Radar sensors can detect moving vehicles, pedestrians, and objects better than cameras or LiDAR. They can see far-away objects and move quickly, which is helpful in many ADAS.
- **All-Weather Performance:** Radar sensors work well in all weather conditions, including rain, snow, and fog. They are not affected by the brightness or darkness of the environment, unlike cameras or LiDAR.
- **Cost-Effective:** Radar sensors are relatively cheap and easy to install and maintain. They have low power consumption and long service life.

### Cons

- **Lower Resolution:** Radar sensors have lower resolution and accuracy than cameras or LiDAR. They cannot distinguish objects' shape, color, or texture, limiting their ability to recognize traffic signs, lane markings, or other visual cues.
- **Interference:** Radar sensors may suffer from interference or false alarms caused by other radar sources, such as vehicles, police radars, or radio towers.
- **Limited Field of View:** Radar sensors have a limited field of view and cannot cover the vehicle’s surroundings. They must be combined with other sensors, such as cameras or LiDAR, to provide a comprehensive and reliable perception of the environment.

## Manufacturers

Here are some manufacturers of radar sensors:

- [Valeo](https://www.valeo.com/en/)
- [Bosch](https://www.bosch-mobility.com/en/solutions/sensors/front-radar-sensor/)
- [HELLA](https://www.hella.com/partnerworld/us/Product-range/ADAS-Transforming-the-automotive-industry-47101/)
- [Continental](https://www.continental-automotive.com/en/components/radars.html)
- [Denso Corporation](https://www.denso.com/global/en/driven-base/feature/mobility/)
- [Infineon Technologies](https://www.infineon.com/cms/en/product/sensor/radar-sensors/)
- [NXP Semiconductors N.V](https://www.nxp.com/applications/automotive/adas-and-safe-driving/automotive-radar-systems:RADAR-SYSTEMS)
- [Texas Instruments Incorporated](https://www.ti.com/sensors/mmwave-radar/overview.html)

{{< pagenavigation b_url="../cameras/" b_title="Cameras" f_url="../lidar/" f_title="LiDAR sensors" >}}