---
title: Zellenausgleich
linktitle: Zellenausgleich
description: Zellenausgleich ist wichtig, um das Beste aus der Batterie herauszuholen.
weight: 8
---
<!-- markdownlint-disable MD033 -->

Zellenausgleich ist notwendig, wenn einige Zellen in einem Batteriepack einen höheren oder niedrigeren Ladezustand (SOC) als andere haben.

<img src="cellbalancing.drawio.svg" class="img-fluid">

In diesem Beispiel ist die obere Gruppe von Zellen zu 100% geladen, und der Ladevorgang ist abgeschlossen. Der gesamte Ladezustand der Hochvoltbatterie beträgt jedoch nur 96%. Der Ausgleich erfolgt durch das Entladen der vollständig geladenen Zellen über einen Widerstand, wodurch der Ladevorgang fortgesetzt werden kann, bis alle Zellen den gleichen Ladezustand erreichen. Dies stellt sicher, dass die Hochvoltbatterie ihre maximale Kapazität erreicht.

{{< evkxdisplayaddarticle />}}

Die Batterieregelungseinheit vergleicht die Spannungen der Zellgruppen. Wenn einige Zellgruppen eine höhere Spannung haben, erhält die zuständige Batteriemodul-Steuereinheit die Ausgleichsinformationen. Der Ausgleich wird durchgeführt, wenn während des Ladevorgangs Spannungsunterschiede von mehr als etwa 1% auftreten. Nachdem die Zündung ausgeschaltet wurde, überprüft die Batterieregelungseinheit, ob ein Ausgleich erforderlich ist, und löst diesen bei Bedarf aus. Typischerweise wird der Ausgleich bei Ladezuständen von mehr als 30% durchgeführt.

{{< pagenavigation b_url="../thermalmanagement/" b_title="Thermomanagement" f_url="../charging/" f_title="Laden" >}}