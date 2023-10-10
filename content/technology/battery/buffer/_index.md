---
title: Buffer
linktitle: Buffer
description: To protect the battery the manufactors implement buffers on batteries.
weight: 10
---
<!-- markdownlint-disable MD033 -->

A battery buffer is a feature of some EVs that causes them to have a difference between the gross and net battery capacity. The gross capacity is the total amount of energy that the battery pack can store, while the net capacity is the usable amount of energy that the battery pack can provide to the vehicle. The difference between the gross and net capacity is called the buffer.

The buffer is controlled by the battery management system (BMS).

The buffer has two main functions: to protect the battery pack from damage and to optimize its performance. The buffer protects the battery pack from damage by preventing it from overcharging or overdischarging, which can cause irreversible degradation or even thermal runaway. The buffer optimizes the performance of the battery pack by allowing it to operate within its optimal range of SOC, where it can deliver higher power and efficiency.

## How does a battery buffer work?

A battery buffer works by limiting the maximum and minimum SOC levels that the battery pack can reach. The maximum SOC level is called the top buffer, while the minimum SOC level is called the bottom buffer. The bottom buffer are also sometimes referred to as brick buffer, because they prevent the battery pack from reaching 0% SOC, which can damage or brick the cells.

The below diagram shows how a brick and top buffer will prevent the battery to be discharged below brick buffer limit and charged above top buffer.

<a href="chargecurve.drawio.svg">
    <img src="chargecurve.drawio.svg" class="img-fluid">
</a>

The size of the buffer can depend on the type and chemistry of the cells used in the battery pack. For example, some cells may have higher tolerance for overcharging or overdischarging than others, and thus may require smaller buffers. Some cells may also have different optimal SOC ranges than others, and thus may require larger buffers.

The BMS regulate the charging and discharging of the battery pack accordingly to keep it inside the approve limits. 

Sometimes the manufacturer choose to change the size of the buffer with software updates. This typical happens when the manufacturer knows more about how a new battery performance when it comes to degradation.

## Hidden usable buffer

Some manufacturers hide some available battery capacity in a hidden usable buffer. What does that mean?

It typically means that the SOC scale is not linear. Meaning 0-1% is larger than all other percent. In many cases, the percentage from 0-1% could be the size of 5-10x the other percent.

This strategy makes it less likely that the EV would run out of battery. The problem with this approach is that you typically charge the car when there is 5-10% left to ensure you don't run out, but when there is hidden capacity, the driver ends up charging already when there is 15-20% battery left. This approach causes the owner to experience the electric range being lower than reality. 

EVKX.net believes this is a bad practice from the manufacturers.

Some examples on EVs with hidden usable buffer

- [Toyota bZ4X](/models/toyota/bz4x/bz4x_awd/)
- Lexus RZ450e
- 



Continue to [manufactors](../manufactors/) or go back to the [article overview](../).