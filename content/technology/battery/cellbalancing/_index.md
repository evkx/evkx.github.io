---
title: Cell Balancing
linktitle: Cell Balancing
description: Cell balancing is important to get the most out of the battery.
weight: 8
---
<!-- markdownlint-disable MD033 -->

Cell balancing is necessary when some cells in a battery pack have a higher or lower State of Charge (SOC) than others.

<img src="cellbalancing.drawio.svg" class="img-fluid">

In this example, the top group of cells is 100% charged, and the charging procedure is complete. However, the overall high-voltage battery charge level is only 96%. Balancing involves discharging the fully charged cells via a resistor, allowing the charging process to continue until all cells reach the same charge level. This ensures the high-voltage battery achieves its maximum capacity.

{{< evkxdisplayaddarticle />}}

The battery regulation control unit compares the voltages of the cell groups. If some cell groups have a higher voltage, the responsible battery module control unit receives the balancing information. Balancing is performed when voltage differences greater than approximately 1% occur during charging. After the ignition is switched off, the battery regulation control unit checks if balancing is necessary and triggers it if needed. Typically, balancing is performed at charge levels greater than 30%.

{{< pagenavigation b_url="../thermalmanagement/" b_title="Thermal Management" f_url="../charging/" f_title="Charging" >}}