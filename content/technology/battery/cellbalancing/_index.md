---
title: Cell balancing
linktitle: Cell balancing 
description: Cell balancing is important to get the most of the battery. 
weight: 8
---
<!-- markdownlint-disable MD033 -->
Cell balancing is needed when a group of cells has higher or lower SOC than other groups of cells.

<img src="cellbalancing.drawio.svg" class="img-fluid">

In this example, the top group of cells is 100% charged and the charging procedure is complete.
However, the high-voltage battery charge level is only 96 %. Balancing means that this cell is now discharged via a resistor and can thereby continue to be charged until all cells have reached the same charge level. This allows the high-voltage battery to achieve its maximum capacitance.

{{<evkxdisplayaddarticle />}}

To do this, the battery regulation control unit compares the voltages of the cell groups. If cell groups have a high cell voltage, the battery modules control unit responsible receives the balancing information. Balancing is performed when voltage differences of greater than approx. 1% occurs when the high-voltage battery is being charged. After the ignition has been switched off, the battery regulation control unit checks whether balancing is necessary and triggers it if necessary. Typical balancing is performed at charge levels greater than 30%.

<div class="mt-3 mb-3">
    <a href="../thermalmanagement/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i> Thermal management</strong></a>
    <a href="../charging/" class="text-decoration-none text-black float-end"><strong>Charging <i class="bi-arrow-right"></i></strong></a>
</div>
