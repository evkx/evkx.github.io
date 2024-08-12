---
title: Buffer
linktitle: Buffer
description: To protect the battery, manufacturers implement buffers on batteries.
weight: 10
---
<!-- markdownlint-disable MD033 -->

A battery buffer is a feature in some EVs that creates a difference between the gross and net battery capacity. The gross capacity is the total energy the battery pack can store, while the net capacity is the usable energy the battery pack can provide to the vehicle. The difference between the gross and net capacity is called the buffer.

The battery management system (BMS) controls the buffer.

The buffer has two main functions: protecting the battery pack from damage and optimizing its performance. It prevents overcharging or over-discharging, which can cause irreversible degradation or even thermal runaway. Additionally, it allows the battery pack to operate within its optimal range of State of Charge (SOC), where it can deliver higher power and efficiency.

## How Does a Battery Buffer Work?

A battery buffer limits the maximum and minimum SOC levels the battery pack can reach. The maximum SOC level is called the top buffer, while the minimum SOC level is called the bottom buffer. The bottom buffer is also sometimes called a brick buffer because it prevents the battery pack from reaching 0% SOC, which can damage or "brick" the cells.

The diagram below shows how a brick and top buffer prevent the battery from being discharged below the brick buffer limit and charged above the top buffer.

<a href="chargecurve.drawio.svg">
    <img src="chargecurve.drawio.svg" class="img-fluid">
</a>

The buffer size can depend on the type and chemistry of the cells used in the battery pack. For example, some cells may have a higher tolerance for overcharging or over-discharging than others, thus requiring smaller buffers. Some cells may also have different optimal SOC ranges and thus require larger buffers.

The BMS regulates the charging and discharging of the battery pack to keep it within the approved limits.

Sometimes, manufacturers choose to change the buffer's size with software updates. This typically happens when they learn more about how a new battery performs regarding degradation.

### Do Manufacturers Use Buffers to Hide Degradation?

A common misconception is that the buffer in EV batteries is used to hide the degradation of the usable battery capacity. However, this is not a practice that manufacturers employ. Adjusting the buffer to mask degradation would actually accelerate the degradation process, as it would require changing the maximum and/or minimum voltage limits of the cells. To our knowledge, no manufacturers employ this strategy.

An indication that a buffer adjustment is being used to hide degradation would be noticeable changes in the voltage/SOC levels. For instance, if a battery at 98% SOC measures 4.16 volts when new but later measures 4.19 volts at the same SOC, it could suggest that the buffer size has been altered.

## Hidden Usable Buffer

Some manufacturers hide some available battery capacity in a hidden usable buffer. What does that mean?

It typically means that the SOC scale is not linear. For example, 0-1% SOC might represent a larger capacity than other percentages. In many cases, the percentage from 0-1% could be 5-10 times larger than other percentages. This additional energy is often called the **Zero Buffer**.

The diagram shows how 0-1% is much larger for the displayed SOC than the other percentages.

<a href="hiddenbuffer.drawio.svg">
    <img src="hiddenbuffer.drawio.svg" class="img-fluid">
</a>

This strategy makes it less likely that the EV would run out of battery. The problem with this approach is that drivers typically charge the car when there is 5-10% left to ensure they don’t run out. However, with hidden capacity, the driver ends up charging when there is actually 15-20% battery left, causing them to experience a lower electric range than in reality.

EVKX.net believes this is a bad practice by manufacturers.

**Bjørn Nyland** has tested several EVs to see how much additional energy the manufacturer has hidden between 0 and 1%. More hidden energy is worse since it tricks the owner.

<img src="https://media.evkx.net/multimedia/technology/battery/tbzeromile_1_st.jpg" class="img-fluid">

Some test results:

<table class="table table-striped">
<thead>
    <tr>
        <th>Model</th>
        <th>Zero Buffer</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=2rSuFCrf-C0" target="_blank">Audi e-tron 55</a></td>
        <td>0 kWh</td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=OR5JRd0g_Q8" target="_blank">Nissan Aryia 87kWh FWD</a></td>
        <td>5.1 kWh</td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=dAM1CIlJ1xQ" target="_blank">Toyota bZ4X</a></td>
        <td>5.1 kWh</td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=y675YCgSnlc" target="_blank">Tesla Model Y Performance</a></td>
        <td>4.1 kWh</td>
    </tr>
</tbody>
</table>

See Bjørn's test results for <a href="https://docs.google.com/spreadsheets/d/1V6ucyFGKWuSQzvI8lMzvvWJHrBS82echMVJH37kwgjE/edit#gid=52159941" target="_blank">more data</a> or all his <a href="https://www.youtube.com/playlist?list=PLqKx2qnB8Xv6ddxPVkiqQZMNyLtYjqQkq" target="_blank">Zero Miles Tests</a>.

{{< pagenavigation b_url="../charging/" b_title="Battery Degradation" f_url="../manufactors/" f_title="Manufacturers" >}}