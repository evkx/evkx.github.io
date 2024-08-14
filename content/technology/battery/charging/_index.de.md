---
title: Laden
linktitle: Laden
description: Das Laden der Batterie ist der Prozess, bei dem der Batterie neue Energie zugeführt wird.
weight: 8
navicon: bi-battery-charging
---
<!-- markdownlint-disable MD033 -->
Das Laden einer EV-Batterie beinhaltet die Bewegung von elektrischen Ladungsträgern, wie Elektronen und Ionen, zwischen den Elektroden der Batterie. Die Batterie hat zwei Elektroden, eine Kathode und eine Anode, die durch einen Elektrolyten getrennt sind.

Während des Ladevorgangs fließen Elektronen von der Ladequelle (z.B. Ladestation) zur Kathode, wo sie im Kathodenmaterial gespeichert werden. Gleichzeitig fließen positive Ionen im Elektrolyten von der Kathode zur Anode durch den Separator.

Wenn die Batterie vollständig geladen ist, ist das Kathodenmaterial maximal in der Lage, Elektronen zu speichern, und die Anode ist vollständig von positiven Ionen erschöpft. Die Batterie befindet sich in einem stabilen Zustand mit einem hohen Potentialunterschied zwischen der Kathode und der Anode, der die in der Batterie gespeicherte elektrische Energie liefert.

<figure>
<img src="batteryconceptcharging.drawio.svg" class="img-fluid mx-auto d-block">
<figcaption>
    <p class="lead text-center fw-semibold">
        Batterieladung
    </p>
</figcaption>
</figure>

Der Ladevorgang ist reversibel, und während der Entladung fließen die Elektronen durch einen externen Stromkreis von der Kathode zur Anode zurück, wodurch ein elektrischer Stromfluss entsteht, der einen Elektromotor antreiben kann.

{{< evkxdisplayaddarticle />}}

### Ladeleistung

Die Ladeleistung variiert erheblich zwischen EVs. Mehrere Faktoren beeinflussen die Ladegeschwindigkeit von EVs:

{{< sitefiguresized thumb="technology/battery/charging/charging_1_st.jpg" width="1920" height="1080" title="Kia EV6 GT lädt bei Ionity" >}}

#### Pack-Konfiguration

Die Pack-Konfiguration kann die Ladegeschwindigkeit beeinflussen. Eine Konfiguration, die eine niedrige Spannung liefert, kann dazu führen, dass Sie externe Grenzen für den Ladestrom erreichen. Zum Beispiel hat ein 50KW DC CCS-Ladegerät einen maximalen Strom von 125A. Um 50KW von 125A zu erhalten, benötigen Sie mindestens 400 Volt. Das maximale Stromlimit würde eine 300-Volt-Packung auf 37,5KW Ladegeschwindigkeit beschränken (300*125).

Das Gleiche gilt für CCS HPC-Ladegeräte, da sie auf 500 Ampere begrenzt sind. 400 Volt bei 500 Ampere ergeben maximal 200KW. Die Ladegeschwindigkeit bei einem 300-Volt-Batteriepack wäre auf 150KW begrenzt.

Volvo und Polestar behaupten, dass ihre kommenden EVs mit 400-Volt-Packs 250KW Ladeleistung erreichen würden. Wie sie das mit den aktuellen CCS-Standardgrenzen bewältigen würden, ist jedoch unklar.

##### 800-Volt-EVs an 400-Volt-Ladegeräten

Bei neueren Autos mit 800-Volt-Batteriepacks gibt es ein zusätzliches Problem, dass viele Hochgeschwindigkeitsladegeräte auf 400-500 Volt Ladeleistung begrenzt sind. Wenn Sie ein 800-Volt-EV haben, das die Spannung vom Ladegerät auf die Batteriespannung umwandeln muss, wird dies die maximale Ladegeschwindigkeit begrenzen. Tesla Supercharger, das weltweit größte Ladenetzwerk, sind auf 500 Volt begrenzt, und alle 800-Volt-Autos, die dieses Netzwerk nutzen, sind in der Ladegeschwindigkeit begrenzt.

Es gibt verschiedene Techniken, die dafür verwendet werden:

###### Wechselrichter

Die häufigste Technik ist die Verwendung eines Wechselrichters. Hier hat das EV einen Wechselrichter, der die Spannung an die Batteriespannung anpassen kann. Dieser Wechselrichter hat typischerweise eine Begrenzung, die viel niedriger ist als die maximale Ladegeschwindigkeit von 800 Volt. Ein Beispiel ist die Hyundai E-GMP-Plattform, die die Geschwindigkeit auf 100KW mit dem Wechselrichter begrenzt, während sie bei 800 Volt mit 250KW lädt. Ein weiteres Beispiel ist der Porsche Taycan, der mit dem Standardwechselrichter auf etwa 50KW bei Superchargern begrenzt ist.

###### Bankladung

Diese Technik teilt das Batteriepack in zwei 400-Volt-Packs auf, während es bei 800-Volt-Ladegeräten geladen wird. Der neue Porsche Macan und Audi Q6 e-tron verwenden diese Technik und können mit bis zu 135KW bei 400 Volt (270KW bei 800 Volt) laden. Ein weiteres Beispiel ist der Tesla Cybertruck, der mit bis zu 230KW bei 500-Volt-Superchargern laden kann.

{{< sitefiguresized thumb="technology/battery/charging/bankcharging_1_st.jpg" width="3000" height="1852" title="Audi Q6 e-tron Bankladung" >}}

#### Temperatur

Die Batterietemperatur kann die Ladegeschwindigkeit erheblich beeinflussen. Zum Beispiel kann das BMS die Ladegeschwindigkeit bei kaltem Wetter um mehr als 50% reduzieren.

Diese Geschwindigkeitsreduzierung ist der Grund, warum einige EVs das automatische Heizen der Batterie beim Navigieren zu einem Ladegerät oder die Möglichkeit des manuellen Auslösens der Batterieheizung anbieten.

Hohe Temperaturen können die Leistung ebenfalls reduzieren. Zum Beispiel kann das BMS die Ladegeschwindigkeit bei heißem Wetter oder nach Hochgeschwindigkeitsladung reduzieren. Das BMS reduziert die Ladegeschwindigkeit, um die Batterie abkühlen zu lassen und sie zu schützen.

Die optimale Temperatur in einer Batterie zum Laden liegt typischerweise bei etwa 25-35 Grad Celsius (77-95 Fahrenheit). Bei Sommertemperaturen würde die Batterie typischerweise in diesem Bereich liegen, wenn sie an der Ladestation ankommt, was eine volle Ladegeschwindigkeit ermöglicht.

{{< sitefiguresized thumb="technology/battery/charging/charging_2_st.jpg" width="1920" height="1080" title="Audi e-tron GT lädt im Winter" >}}

Bei einigen Modellen mit Schnellladung kann ein warmer Sommertag mit Hochgeschwindigkeitsladung dazu führen, dass die Batterie Temperaturen erreicht, die das BMS dazu veranlassen, die Ladegeschwindigkeit zu reduzieren, um die Batterie zu schützen. Diese Geschwindigkeitsreduzierung tritt typischerweise auf, wenn die Batterietemperatur während des Ladevorgangs 50-60 Grad Celsius erreicht. Deshalb ist es wichtig, ein gutes Thermomanagement zu haben, das die Wärme während des Ladevorgangs ableiten kann.

Die Ladekurve für Modelle auf der EVKX-Website gilt für **optimale Bedingungen**:

- Die Temperatur in der Batterie ist hoch genug, sodass die Ladegeschwindigkeit nicht aufgrund niedriger Temperatur reduziert wird.
- Die Temperatur in der Batterie wird nicht so hoch, dass das BMS die Geschwindigkeit zum Schutz während der Ladesitzung von 0-100% reduziert.

{{< evkxdisplayaddarticle />}}

#### BMS-Software

Der Hersteller entscheidet die Kurve basierend auf verschiedenen Eingaben. Die Eingabe könnte die Chemie des Batteriepacks oder andere physikalische Aspekte wie Kühlung sein. Dennoch entscheidet der Hersteller oft, die Ladegeschwindigkeit mit der Langlebigkeit der Batterie in Einklang zu bringen. Hochgeschwindigkeitsladung beeinflusst die Degradation, und eine Reduzierung der Geschwindigkeit würde die Degradation verringern.

Einige Hersteller begrenzen auch die Anzahl der Hochgeschwindigkeitsladesitzungen während eines Zeitraums. Toyota BZ4X ist ein Modell, das Toyota mit einer Begrenzung von nur zwei Hochgeschwindigkeitsladesitzungen innerhalb von 24 Stunden auf den Markt gebracht hat. Mehr Ladungen würden mit niedriger Geschwindigkeit erfolgen.

{{< sitefiguresized thumb="technology/battery/charging/taycancharging_1_st.jpg" width="3000" height="2669" title="Porsche Taycan lädt" >}}

Porsche Taycan ist ein Modell, bei dem der Besitzer eine 'batteriefreundliche' Ladegeschwindigkeit als Maximum einstellen kann, um die Degradation zu verringern. Ein Taycan kann zunächst mit bis zu 270KW Geschwindigkeit laden. Mit dieser Einstellung aktiviert, ist es auf 200KW begrenzt.

#### Ladegeschwindigkeit Beispiele

EVKX zeigt die Ladeleistung für jedes EV auf unserer Website mit Grafiken und Berechnungen basierend auf der Leistung.

Die folgenden sind einige Beispiele für EVs mit unterschiedlichen Ladeleistungen:

[Lucid Air Dream Edition Performance](/models/lucid/air/air_dream_edition_performance/chargingcurve/) ist das erste Beispiel. Es hat eine extreme Spitzenladegeschwindigkeit von über 300KW, fällt aber schnell ab.

<img src="/images/models/lucid/air/air_dream_edition_performance/chargingcurve.svg" class="img-fluid">

[Kia EV6 GT](/models/kia/ev6/ev6_gt/chargingcurve/) ist das nächste Beispiel. Dieses Modell ist eines der schnellsten ladenden EVs mit hoher Geschwindigkeit und einer viel flacheren Kurve als der Lucid Air.

<img src="/images/models/kia/ev6/ev6_gt/chargingcurve.svg" class="img-fluid">

[Nissan Aryia](/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve/) hat keinen sehr hohen Spitzenwert, aber die Kurve ist relativ flach.

<img src="/images/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve.svg" class="img-fluid">

Bei längeren Fahrten kann die Ladekurve den optimalen Ladestopp beeinflussen. Zum Beispiel würde eine flachere Kurve denen zugutekommen, die längere Stopps bevorzugen, während eine Kurve mit hohen Spitzenwerten kurze Stopps begünstigt, und Sie laden im Bereich der Spitzenwerte.

Für alle Modelle berechnet EVKX dies für Sie auf der Modell-Infoseite.

{{< pagenavigation b_url="../cellbalancing/" b_title="Zellenausgleich" f_url="../degredation/" f_title="Degradation" >}}