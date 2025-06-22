---
title: EV-Laden erklärt: Technologie, Leistung und reale Einflüsse
linktitle: Laden
description: Das Laden der Batterie ist der Prozess, bei dem neue Energie in die Batterie eingebracht wird.
weight: 8
navicon: bi-battery-charging
---

<!-- markdownlint-disable MD033 -->

Das Laden einer EV-Batterie bedeutet, Strom in die Batterie zu leiten, wo er als chemische Energie gespeichert wird. Dies geschieht durch die Bewegung von Elektronen und Ionen zwischen den beiden Elektroden der Batterie: Kathode und Anode, getrennt durch einen Elektrolyten.

Während des Ladevorgangs fließen Elektronen von der Stromquelle (z. B. einer Ladestation) zur Kathode. Gleichzeitig bewegen sich positive Ionen von der Kathode durch den Elektrolyten zur Anode. Ist die Batterie vollständig geladen, speichert sie Energie durch einen hohen Potenzialunterschied zwischen ihren Polen und ist bereit, das Fahrzeug mit Energie zu versorgen.

<figure>
<img src="https://media.evkx.net/multimedia/technology/battery/charging/batteryconceptcharging.drawio.svg" class="img-fluid mx-auto d-block">
<figcaption>
    <p class="lead text-center fw-semibold">
        Batterieladung
    </p>
</figcaption>
</figure>

Der Prozess ist umkehrbar. Beim Entladen fließen Elektronen von der Anode zur Kathode durch einen externen Stromkreis und erzeugen Strom, der den Elektromotor antreibt.

{{<evkxdisplayaddarticle />}}

## Ladeleistung

Die Ladeleistung unterscheidet sich deutlich zwischen EV-Modellen und wird durch mehrere Schlüsselfaktoren beeinflusst:

{{< sitefiguresized thumb="technology/battery/charging/charging\_1\_st.jpg" width="1920" height="1080" title="Kia EV6 GT lädt bei Ionity" >}}

### Akkukonfiguration

Die Spannung des Batteriepacks beeinflusst die maximale Ladegeschwindigkeit. Ein DC-CCS-Lader mit 50 kW und 125 A benötigt z. B. mindestens 400 V für die volle Leistung. Ein 300 V-Pack wäre auf 37,5 kW (300 V × 125 A) begrenzt.

Ebenso sind die meisten CCS-HPC-Lader auf 500 A begrenzt. Das bedeutet: Ein 400 V-Pack kann bis zu 200 kW unterstützen, ein 300 V-Pack maximal 150 kW.

Modelle wie der Volvo EX90, Polestar 3 und Nio EL8 geben 250 kW Ladeleistung bei 400 V an – das setzt allerdings Ladesäulen ohne 500 V-Limit voraus.

#### 800-Volt-EVs an 400-Volt-Ladern

800V-EVs können durch ältere 400–500V-Lader begrenzt werden. Tesla Supercharger z. B. sind auf 500 V limitiert, was die Ladegeschwindigkeit bei 800V-Fahrzeugen reduziert.

##### Invertertechnik

Einige EVs nutzen Bordwechselrichter zur Spannungsanhebung. Diese Systeme begrenzen oft die Gesamtleistung. Beispiele:

* Hyundai E-GMP-Modelle: ~100 kW max. an 400V-Ladern  
* Porsche Taycan: ~50 kW an Superchargern mit Standardwechselrichter

##### Bankladen

Hierbei wird die Batterie in zwei 400V-Sektionen aufgeteilt. Modelle wie Audi Q6 e-tron und Porsche Macan unterstützen bis zu 135 kW bei 400 V und bis zu 270 kW bei 800 V. Der Tesla Cybertruck erreicht 230 kW an 500 V-Superchargern.

{{< sitefiguresized thumb="technology/battery/charging/bankcharging\_1\_st.jpg" width="3000" height="1852" title="Audi Q6 e-tron Bankladen" >}}

### Temperatur

Die Batterietemperatur beeinflusst die Ladegeschwindigkeit entscheidend. Bei Kälte kann das Laden aufgrund der Begrenzung durch das Batteriemanagementsystem (BMS) um über 50 % verlangsamt werden. Viele EVs heizen den Akku vor, wenn ein Ladepunkt im Navigationssystem angefahren wird.

Auch bei Hitze kann das BMS die Ladeleistung drosseln, um Überhitzung zu vermeiden. Die optimale Temperatur zum Laden liegt zwischen 25–35 °C. Oberhalb von 50–60 °C kann das Laden zur Schonung der Batterie reduziert werden.

{{< sitefiguresized thumb="technology/battery/charging/charging\_2\_st.jpg" width="1920" height="1080" title="Audi e-tron GT lädt im Winter" >}}

EVs mit Schnellladefähigkeit benötigen ein effizientes Thermomanagement, um während der Ladesitzung die ideale Akkutemperatur zu halten.

Die EVKX-Ladekurven spiegeln **optimale Bedingungen** wider:

* Die Akkutemperatur ist hoch genug für maximale Geschwindigkeit.  
* Der Akku bleibt während der gesamten 0–100 %-Sitzung im sicheren Bereich.

{{<evkxdisplayaddarticle />}}

### BMS-Software

Auch die BMS-Software beeinflusst die Ladekurve. Hersteller balancieren Ladegeschwindigkeit und Batterielebensdauer. Da schnelles Laden die Alterung beschleunigt, begrenzen einige EVs die Ladegeschwindigkeit oder die Anzahl von Schnellladesitzungen.

Beispiele:

* Toyota BZ4X erlaubt nur zwei Schnellladesitzungen pro 24 Stunden.  
* Porsche Taycan ermöglicht es Nutzern, die Ladegeschwindigkeit (z. B. von 270 kW auf 200 kW) zu begrenzen, um Verschleiß zu reduzieren.

{{< sitefiguresized thumb="technology/bat
