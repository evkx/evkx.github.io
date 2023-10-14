---
title: Buffer
linktitle: Buffer
description: To protect the battery the manufacturers implement buffers on batteries.
weight: 10
---
<!-- markdownlint-disable MD033 -->

A battery buffer is a feature of some EVs that causes them to have a difference between the gross and net battery capacity. The gross capacity is the total energy the battery pack can store. In contrast, the net capacity is the usable energy the battery pack can provide to the vehicle. The difference between the gross and net capacity is called the buffer.

The battery management system (BMS) controls the buffer.

The buffer has two main functions: to protect the battery pack from damage and to optimize its performance. The buffer protects the battery pack from damage by preventing it from overcharging or over-discharging, which can cause irreversible degradation or even thermal runaway. The buffer optimizes the battery pack's performance by allowing it to operate within its optimal range of SOC, where it can deliver higher power and efficiency.

## How does a battery buffer work?

A battery buffer limits the maximum and minimum SOC levels the battery pack can reach. The maximum SOC level is called the top buffer, while the minimum SOC level is called the bottom buffer. The bottom buffer is also sometimes called a brick buffer because it prevents the battery pack from reaching 0% SOC, which can damage or brick the cells.

The diagram below shows how a brick and top buffer will prevent the battery from being discharged below the brick buffer limit and charged above the top buffer.

<a href="chargecurve.drawio.svg">
    <img src="chargecurve.drawio.svg" class="img-fluid">
</a>

The buffer size can depend on the type and chemistry of the cells used in the battery pack. For example, some cells may have a higher tolerance for overcharging or over-discharging than others, thus requiring smaller buffers. Some cells may also have different optimal SOC ranges than others and thus require larger buffers.

The BMS regulates the charging and discharging of the battery pack accordingly to keep it inside the approved limits.

Sometimes, the manufacturer chooses to change the buffer's size with software updates. This change typically happens when the manufacturer knows more about how a new battery performs regarding degradation.

## Hidden usable buffer

Some manufacturers hide some available battery capacity in a hidden usable buffer. What does that mean?

It typically means that the SOC scale is not linear. Meaning 0-1% is larger than all other percent. In many cases, the percentage from 0-1% could be the size of 5-10x the other percent. The additional energy is often called <b>Zero Buffer</b>.

The diagram shows how 0-1% is much larger for the displayed SOC than the other percentages.

<a href="hiddenbuffer.drawio.svg">
    <img src="hiddenbuffer.drawio.svg" class="img-fluid">
</a>

This strategy makes it less likely that the EV would run out of battery. The problem with this approach is that you typically charge the car when there is 5-10% left to ensure you don’t run out, but when there is hidden capacity, the driver ends up charging already when there is 15-20% battery left. This approach causes the owner to experience a lower electric range than in reality.

EVKX.net believes this is a bad practice from the manufacturers.

<b>Bjørn Nyland</b>has tested several EVs to see how much additional energy the manufacturer has hidden between 0 and 1%. More is worse since it tricks the owner.

<img src="https://media.evkx.net/multimedia/technology/battery/tbzeromile_1_st.jpg" class="img-fluid">

 Some tests with results:

<table class="table table-striped">
<thead>
    <tr>
        <td>
        Model
        </td>
        <td>
        Zero Buffer
        </td>
    </tr>
</thead>
<tbody>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=2rSuFCrf-C0" target="_blank">Audi e-tron 55</a></td>
        <td>0kWh</td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=OR5JRd0g_Q8" target="_blank">Nissan Aryia 87kWh FWD</a></td>
        <td>5.1kWh</td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=dAM1CIlJ1xQ" target="_blank">Toyota bZ4X</a></td>
        <td>5.1kWh</td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=y675YCgSnlc" target="_blank">Tesla Model Y Performance</a></td>
        <td>4.1kWh</td>
    </tr>
</tbody>
</table>

See Bjørns test results for <a href="https://docs.google.com/spreadsheets/d/1V6ucyFGKWuSQzvI8lMzvvWJHrBS82echMVJH37kwgjE/edit#gid=52159941" target="_blank">more data</a> or all his <a href="https://www.youtube.com/playlist?list=PLqKx2qnB8Xv6ddxPVkiqQZMNyLtYjqQkq" target="_blank">Zero Miles Tests</a>

Continue to [manufacturers](../manufactors/) or go back to the [article overview](../).