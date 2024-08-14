---
title: Puffer
linktitle: Puffer
description: Um die Batterie zu schützen, implementieren Hersteller Puffer in Batterien.
weight: 10
---
<!-- markdownlint-disable MD033 -->

Ein Batteriepuffer ist eine Funktion in einigen Elektrofahrzeugen (EVs), die einen Unterschied zwischen der Brutto- und Nettobatteriekapazität schafft. Die Bruttokapazität ist die gesamte Energie, die das Batteriepaket speichern kann, während die Nettokapazität die nutzbare Energie ist, die das Batteriepaket dem Fahrzeug zur Verfügung stellen kann. Der Unterschied zwischen der Brutto- und Nettokapazität wird als Puffer bezeichnet.

Das Batteriemanagementsystem (BMS) steuert den Puffer.

Der Puffer hat zwei Hauptfunktionen: den Schutz des Batteriepakets vor Schäden und die Optimierung seiner Leistung. Er verhindert Überladung oder Tiefentladung, die zu irreversibler Degradation oder sogar zu thermischem Durchgehen führen können. Zusätzlich ermöglicht er dem Batteriepaket, innerhalb seines optimalen Ladezustands (SOC) zu arbeiten, wo es höhere Leistung und Effizienz liefern kann.

## Wie funktioniert ein Batteriepuffer?

Ein Batteriepuffer begrenzt die maximalen und minimalen SOC-Werte, die das Batteriepaket erreichen kann. Der maximale SOC-Wert wird als oberer Puffer bezeichnet, während der minimale SOC-Wert als unterer Puffer bezeichnet wird. Der untere Puffer wird manchmal auch als "Brick Buffer" bezeichnet, da er verhindert, dass das Batteriepaket 0% SOC erreicht, was die Zellen beschädigen oder "bricken" kann.

Das folgende Diagramm zeigt, wie ein Brick- und oberer Puffer verhindern, dass die Batterie unter das Brick-Puffer-Limit entladen und über den oberen Puffer hinaus geladen wird.

<a href="chargecurve.drawio.svg">
    <img src="chargecurve.drawio.svg" class="img-fluid">
</a>

Die Puffergröße kann von der Art und Chemie der in dem Batteriepaket verwendeten Zellen abhängen. Zum Beispiel können einige Zellen eine höhere Toleranz gegenüber Überladung oder Tiefentladung haben als andere und erfordern daher kleinere Puffer. Einige Zellen können auch unterschiedliche optimale SOC-Bereiche haben und daher größere Puffer benötigen.

Das BMS reguliert das Laden und Entladen des Batteriepakets, um es innerhalb der genehmigten Grenzen zu halten.

Manchmal entscheiden sich Hersteller, die Größe des Puffers mit Software-Updates zu ändern. Dies geschieht typischerweise, wenn sie mehr darüber erfahren, wie eine neue Batterie in Bezug auf Degradation performt.

### Verwenden Hersteller Puffer, um Degradation zu verbergen?

Ein weit verbreitetes Missverständnis ist, dass der Puffer in EV-Batterien verwendet wird, um die Degradation der nutzbaren Batteriekapazität zu verbergen. Dies ist jedoch keine Praxis, die Hersteller anwenden. Die Anpassung des Puffers zur Verschleierung der Degradation würde den Degradationsprozess tatsächlich beschleunigen, da dies eine Änderung der maximalen und/oder minimalen Spannungsgrenzen der Zellen erfordern würde. Nach unserem Wissen wendet kein Hersteller diese Strategie an.

Ein Hinweis darauf, dass eine Pufferanpassung verwendet wird, um Degradation zu verbergen, wären spürbare Änderungen in den Spannungs-/SOC-Werten. Wenn beispielsweise eine Batterie bei 98% SOC 4,16 Volt misst, wenn sie neu ist, aber später bei demselben SOC 4,19 Volt misst, könnte dies darauf hindeuten, dass die Puffergröße geändert wurde.

## Versteckter nutzbarer Puffer

Einige Hersteller verstecken einen Teil der verfügbaren Batteriekapazität in einem versteckten nutzbaren Puffer. Was bedeutet das?

Es bedeutet typischerweise, dass die SOC-Skala nicht linear ist. Zum Beispiel könnten 0-1% SOC eine größere Kapazität darstellen als andere Prozentsätze. In vielen Fällen könnte der Prozentsatz von 0-1% 5-10 Mal größer sein als andere Prozentsätze. Diese zusätzliche Energie wird oft als **Zero Buffer** bezeichnet.

Das Diagramm zeigt, wie 0-1% für den angezeigten SOC viel größer ist als die anderen Prozentsätze.

<a href="hiddenbuffer.drawio.svg">
    <img src="hiddenbuffer.drawio.svg" class="img-fluid">
</a>

Diese Strategie macht es weniger wahrscheinlich, dass das EV ohne Batterie auskommt. Das Problem bei diesem Ansatz ist, dass Fahrer das Auto typischerweise aufladen, wenn noch 5-10% übrig sind, um sicherzustellen, dass sie nicht ohne Batterie auskommen. Mit versteckter Kapazität lädt der Fahrer jedoch auf, wenn tatsächlich noch 15-20% Batterie übrig sind, was dazu führt, dass sie eine geringere elektrische Reichweite erleben als in Wirklichkeit.

EVKX.net hält dies für eine schlechte Praxis der Hersteller.

**Bjørn Nyland** hat mehrere EVs getestet, um zu sehen, wie viel zusätzliche Energie der Hersteller zwischen 0 und 1% versteckt hat. Mehr versteckte Energie ist schlechter, da sie den Besitzer täuscht.

<img src="https://media.evkx.net/multimedia/technology/battery/tbzeromile_1_st.jpg" class="img-fluid">

Einige Testergebnisse:

<table class="table table-striped">
<thead>
    <tr>
        <th>Modell</th>
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
        <td>5,1 kWh</td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=dAM1CIlJ1xQ" target="_blank">Toyota bZ4X</a></td>
        <td>5,1 kWh</td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=y675YCgSnlc" target="_blank">Tesla Model Y Performance</a></td>
        <td>4,1 kWh</td>
    </tr>
</tbody>
</table>

Siehe Bjørns Testergebnisse für <a href="https://docs.google.com/spreadsheets/d/1V6ucyFGKWuSQzvI8lMzvvWJHrBS82echMVJH37kwgjE/edit#gid=52159941" target="_blank">weitere Daten</a> oder alle seine <a href="https://www.youtube.com/playlist?list=PLqKx2qnB8Xv6ddxPVkiqQZMNyLtYjqQkq" target="_blank">Zero Miles Tests</a>.

{{< pagenavigation b_url="../charging/" b_title="Batteriedegradation" f_url="../manufactors/" f_title="Hersteller" >}}