---
title: Batteriepack & Konfiguration
linktitle: Batteriepack & Konfiguration
description: Das Batteriesystem kombiniert viele Zellen und andere Steuerelektronik zu einem vollständigen Akku, um das Elektrofahrzeug (EV) anzutreiben.
weight: 4
---
<!-- markdownlint-disable MD033 -->

## Batteriekonfiguration

In einem Elektrofahrzeug (EV) bezieht sich die Batteriekonfiguration auf die Anordnung der einzelnen Batteriezellen innerhalb des Batteriepakets. Diese Konfiguration beeinflusst die Spannung, Kapazität, Leistungsabgabe und die Gesamtleistung des Fahrzeugs.

Die häufigste Konfiguration für EV-Batterien ist ein Serien-Parallel-Hybrid. In dieser Anordnung sind mehrere Zellen in Serie geschaltet, um die Spannung des Batteriepakets zu erhöhen, und mehrere Gruppen von in Serie geschalteten Zellen sind dann parallel geschaltet, um die Gesamtkapazität des Batteriepakets zu erhöhen.

- **Serienschaltung:** Erhöht die Spannung des Batteriepakets, was entscheidend ist, um die notwendige Leistung zum Antrieb des Fahrzeugs bereitzustellen.
- **Parallelschaltung:** Erhöht die Kapazität des Batteriepakets, die erforderlich ist, um die gewünschte Reichweite zu erreichen.

Um die Bruttokapazität des Batteriepakets zu berechnen, multiplizieren Sie die gesamte parallele Kapazität in Amperestunden (Ah) mit der Nennspannung des Batteriepakets in Volt (V). Das Ergebnis wird in Wattstunden (Wh) angegeben.

### Beispiel: Audi Q8 e-tron 55

Das untenstehende Diagramm zeigt die Konfiguration eines Batteriemoduls des Audi Q8 e-tron 55. Dieses Modul enthält 12 Batteriezellen, von denen vier parallel geschaltet sind, und es gibt drei Gruppen dieser parallelen Konfiguration in Serie.

<figure>
<img src="configuration1.drawio.svg" class="img-fluid mx-auto d-block">
<figcaption>
    <p class="lead text-center fw-semibold">3s4p Modul</p>
</figcaption>
</figure>

- **Zellspezifikationen:** Jede Zelle hat eine Nennspannung von 3,6667 Volt und eine Kapazität von 72 Ah.
- **Modulspannung:** Drei Zellen in Serie ergeben eine Modulspannung von 11 Volt.
- **Modulkapazität:** 4 x 72 Ah in Parallelschaltung ergeben eine Gesamtkapazität des Moduls von 288 Ah.
- **Packspannung:** Der Q8 e-tron 55 hat insgesamt 36 Module in Serie. 36 x 11 Volt ergeben 396 Volt für das Paket.
- **Bruttokapazität:** 396 Volt x 288 Ah = 114.048 Wh oder 114 kWh Bruttokapazität.

### Beispiel: Tesla Model Y Long Range

Das Tesla Model Y Long Range verwendet 4.416 Zellen im kleinen 21700-Format, mit 96 Reihen und 46 Zellen parallel.

- **Zellspezifikationen:** Jede Zelle hat 4,8 Ah mit einer Nennspannung von 3,7 Volt.
- **Parallele Kapazität:** 4,8 Ah x 46 ergibt eine Gesamtkapazität von 220,8 Ah.
- **Packspannung:** 96 x 3,7 Volt ergeben eine Nennspannung des Pakets von 355 Volt.
- **Bruttokapazität:** 355 Volt x 220,8 Ah = 78,4 kWh.

### Beispiel: Kia EV6 Long Range

Die Langstreckenbatterie des Kia EV6 hat insgesamt 384 Zellen, die in 192 Reihen mit zwei Zellen parallel konfiguriert sind und in Modulen mit 12 Zellen strukturiert sind.

<figure>
<img src="configuration3.drawio.svg" class="img-fluid mx-auto d-block">
<figcaption>
    <p class="lead text-center fw-semibold">6s2p Modul</p>
</figcaption>
</figure>

- **Zellspezifikationen:** Jede Zelle hat 55,6 Ah.
- **Parallele Kapazität:** 2 x 55,6 Ah = 111,2 Ah.
- **Packspannung:** Die Nennspannung beträgt 3,63 Volt pro Zelle. 192 x 3,63 Volt = 696,96 Volt Nennspannung für das Paket.
- **Bruttokapazität:** 696,96 Volt x 111,2 Ah = 77,5 kWh.

### Weitere Beispiele für Batteriepakete

Hier sind einige Konfigurationsbeispiele:

<table class="table table-striped border">
    <thead>
        <tr>
            <th>Modell</th>
            <th>Bruttokapazität</th>
            <th>Konfiguration</th>
            <th>Nennspannung</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Audi Q8 e-tron</td>
            <td>116 kWh</td>
            <td>108s4p</td>
            <td>396 Volt</td>
        </tr>
        <tr>
            <td>Audi e-tron GT</td>
            <td>93,7 kWh</td>
            <td>198s2p</td>
            <td>725 Volt</td>
        </tr>
        <tr>
            <td>Kia EV6 GT</td>
            <td>77,4 kWh</td>
            <td>192s2p</td>
            <td>697 Volt</td>
        </tr>
        <tr>
            <td><a href="../../../models/nio/">Nio 100 kWh Batterie</a></td>
            <td>100 kWh</td>
            <td>96s1p</td>
            <td>358 Volt</td>
        </tr>
        <tr>
            <td><a href="../../../models/mercedes/eqe/">Mercedes EQE</a></td>
            <td>96,12 kWh</td>
            <td>90s4p</td>
            <td>328 Volt</td>
        </tr>
        <tr>
            <td><a href="../../../models/mercedes/eqs/">Mercedes EQS</a></td>
            <td>120 kWh</td>
            <td>108s4p</td>
            <td>396 Volt</td>
        </tr>
        <tr>
            <td><a href="../../../models/tesla/model_y/model_y_long_range/">Tesla Model Y Long Range</a></td>
            <td>78,1 kWh</td>
            <td>96s46p</td>
            <td>357 Volt</td>
        </tr>
        <tr>
            <td>Rivian R1S Large Pack</td>
            <td>135 kWh</td>
            <td>108s72p</td>
            <td>390 Volt</td>
        </tr>
        <tr>
            <td>Rivian R1S Max Pack</td>
            <td>149 kWh</td>
            <td>108s72p</td>
            <td>390 Volt</td>
        </tr>
        <tr>
            <td>Porsche Macan / Audi Q6</td>
            <td>100 kWh</td>
            <td>180s1p</td>
            <td>662 Volt</td>
        </tr>
    </tbody>
</table>

Die spezifische Batteriekonfiguration, die in einem EV verwendet wird, hängt von verschiedenen Faktoren ab, wie der gewünschten Reichweite, der Leistungsabgabe und dem Gesamtgewicht des Fahrzeugs.

{{<evkxdisplayaddarticle />}}

### 400 oder 800 Volt?

Hersteller konfigurieren Batteriepakete typischerweise auf etwa 400 Volt oder 800 Volt. Jede Konfiguration hat ihre Vor- und Nachteile:

#### Vorteile des 400-Volt-Pakets

- **Reifere Technologie:** 400-Volt-Systeme sind bewährter und zuverlässiger.
- **Geringere Kosten:** Weniger teuer in der Produktion.
- **Weit verbreitete Ladeinfrastruktur:** Einfacher zu findende Ladestationen.
- **Mehr verfügbare Zellkonfigurationen:** Bietet mehr Flexibilität bei den Zelloptionen.

#### Nachteile des 400-Volt-Pakets

- **Langsameres Laden:** Benötigt längere Ladezeiten.
- **Begrenzte Leistungsabgabe:** Kann möglicherweise nicht die gleiche Leistung wie 800-Volt-Systeme liefern.
- **Schwerer:** Benötigt dickere Kabel für die gleiche Ladegeschwindigkeit.

#### Vorteile des 800-Volt-Pakets

- **Schnelleres Laden:** Unterstützt höhere Ladegeschwindigkeiten.
- **Höhere Leistungsabgabe:** Kann mehr Leistung liefern.
- **Geringeres Gewicht:** Benötigt dünnere Kabel.

#### Nachteile des 800-Volt-Pakets

- **Begrenzte Ladeinfrastruktur:** Weniger öffentliche Ladestationen unterstützen das 800-Volt-Laden.
- **Erfordert kleinere Zellen:** Verhindert die Verwendung größerer Zellen, die eine höhere Dichte und weniger Verkabelung bieten.

{{<evkxdisplayaddarticle />}}

## Batteriepack-Designs

Es gibt mehrere Standarddesigns, die zum Bau von Batteriepaketen verwendet werden.

## Zell-zu-Modul (C2M)

Das Zell-zu-Modul (C2M)-Design umfasst das Zusammenbauen mehrerer Batteriezellen zu einem einzigen, eigenständigen Modul mit integrierter Elektronik und Kühlsystemen. Diese Module können dann einfach verbunden werden, um das vollständige Batteriepaket zu bilden.

Jedes Modul hat sein eigenes Batteriemanagementsystem (BMS), das das Laden und Entladen der Zellen innerhalb des Moduls überwacht und steuert, was eine präzisere Kontrolle und Überwachung einzelner Zellen ermöglicht.

{{< sitefiguresized thumb="technology/battery/batterypack/module_q6_1_st.jpg" width="3000" height="1783" title="Audi Q6 e-tron Batteriemodul mit 15 prismatischen Zellen" >}}

### Vorteile des Zell-zu-Modul (C2M):

- **Modularität:** Einzelne Batteriemodule können unabhängig ersetzt oder gewartet werden. Wenn ein Modul ausfällt, kann es ausgetauscht werden, ohne das gesamte Batteriepaket zu beeinträchtigen.
- **Thermomanagement:** Module bieten Platz für Thermomanagementkomponenten (wie Kühlplatten oder Flüssigkeitskühlkanäle), die helfen, die Zelltemperatur zu regulieren und optimale Leistung sicherzustellen.
- **Skalierbarkeit:** C2M-Designs ermöglichen Flexibilität bei der Konfiguration von Batteriepaketen. Hersteller können die Anzahl der Module anpassen, um unterschiedliche Fahrzeuganforderungen (z. B. Reichweite, Leistung oder Größe) zu erfüllen.
- **Sicherheit:** Das Isolieren von Zellen innerhalb von Modulen erhöht die Sicherheit. Wenn eine Zelle thermisches Durchgehen oder andere Probleme erfährt, wird dies die benachbarten Zellen nicht direkt beeinflussen.
- **Fertigungseffizienz:** Der separate Bau von Modulen vereinfacht die Montage und Qualitätskontrolle. Es ermöglicht auch die parallele Produktion von Modulen, was den Fertigungsprozess rationalisiert.

{{< sitefiguresized thumb="technology/battery/batterypack/q6pack_1_st.jpg" width="3000" height="1924" title="Audi Q6 e-tron Batteriepack mit 12 Modulen" >}}

## Zell-zu-Pack (CTP)

Zell-zu-Pack (CTP)-Batterien sind eine neue Art von Batterietechnologie, die die Notwendigkeit von Batteriemodulen eliminiert, indem die Zellen direkt in das Paket integriert werden. Mehrere Unternehmen, wie Tesla, BYD und CATL, entwickeln diese Technologie.

{{< sitefiguresized thumb="technology/battery/batterypack/catl_qilin_3_st.jpg" width="2222" height="1032" title="CATL Qilin Zell-zu-Pack Batterie" >}}

BYD Blade und CATL Qilin sind zwei Beispiele für CTP-Batterien. Der Hauptunterschied zwischen diesen beiden Batterien ist ihr Kühlsystem. BYD Blade verwendet ein Flüssigkeitskühlsystem, während CATL Qilin ein strukturelles Kühlsystem verwendet, das effizienter ist.

{{< sitefiguresized thumb="technology/battery/cell/bladebattery_st.jpg" width="3000" height="1351" title="BYD Blade Batterie" >}}

### Vorteile des Zell-zu-Pack (CTP):

- **Einfachheit:** CTP-Designs eliminieren die Notwendigkeit für Zwischenmodule, was die Komplexität reduziert. Das Batteriepaket integriert direkt einzelne Zellen.
- **Raumnutzung:** Ohne Module steht mehr Platz für Zellen zur Verfügung, was die Energiedichte potenziell erhöht.
- **Kosteneffizienz:** Weniger Komponenten (keine Module) können zu Kosteneinsparungen in der Produktion und Montage führen.
- **Gewichtsreduktion:** Das Eliminieren von Modulgehäusen reduziert das Gesamtgewicht und verbessert die Fahrzeugeffizienz.

## Strukturelles Batteriepack

Ein strukturelles Batteriepack ist so konzipiert, dass es zu einem strukturellen Bestandteil des EV wird. Dieser Ansatz kann das Gewicht des EV reduzieren, indem doppelte Strukturen zwischen dem Pack und der Fahrzeugstruktur entfernt werden, da das Batteriepack Teil der Fahrzeugstruktur wird.

Dieses Design kann die Gesamtleistung und Effizienz des EV verbessern. Strukturelle Batteriepakete sind noch relativ neu, aber mehrere Unternehmen und Forschungseinrichtungen erkunden und entwickeln sie.

Strukturelle Batteriepakete, ein Wendepunkt im EV-Design, bieten viele Vorteile. Sie reduzieren Gewicht und Komplexität, steigern die Leistung und erleichtern die nahtlose Integration der Batterietechnologie in verschiedene Anwendungen.

Tesla Model Y und Tesla Cybertruck sind zwei Modelle, die strukturelle Packs haben. Laut Tesla bietet diese Lösung viele Vorteile, wie die signifikante Reduzierung der Anzahl der Teile sowohl im Batteriepack als auch im Auto.

{{< sitefiguresized thumb="technology/battery/batterypack/teslastructuralbattery_1_st.jpg" width="1585" height="714" title="Tesla 4680 Strukturelles Pack im Vergleich zu einem traditionellen Pack" >}}

Wichtiger ist, dass das Unternehmen sagte, dass die neuen Zellen und das strukturelle Pack die Reichweite des Model Y um 16 Prozent erhöhen und das Gesamtgewicht des Autos um 10 Prozent reduzieren sollen, was zu verbesserter Beschleunigung und Handhabung führt.

{{< sitefiguresized thumb="technology/battery/batterypack/teslastructuralbattery_2_st.jpg" width="1344" height="645" title="Tesla strukturelles Pack fungiert als Boden des EV" >}}

Tesla verwendet rosa Polyurethanschaum, um die Komponenten innerhalb des strukturellen Batteriepakets zu kapseln und zu sichern. Dieser Schaum dient sowohl als Isolator als auch als strukturelles Element und bietet Steifigkeit und Schutz. Der Schaum stellt sicher, dass die Batteriezellen und andere kritische Komponenten sicher an ihrem Platz bleiben und fungiert als Brandschutzwand zwischen verschiedenen Abschnitten des Batteriepakets.

Dieser Schaum ist so stark wie ein Ziegelstein und trägt zur strukturellen Integrität des Packs bei.

Das folgende Video zeigt eine detaillierte Analyse des Packs von Munro & Associates.

{{< youtube FXpfU6I_T3w >}}

## Energiedichte auf Batteriepack-Ebene

Die folgende Tabelle zeigt, wie sich die Packdichte im Laufe der Zeit zwischen einigen Beispiel-Batteriepacks verändert hat.

<table class="table table-striped border">
    <thead>
        <tr>
            <th>Pack</th>
            <th>Jahr</th>
            <th>Bruttokapazität</th>
            <th>Gewicht</th>
            <th>Dichte</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Tesla Roadster</td>
            <td>2010</td>
            <td>53kWh</td>
            <td>450kg</td>
            <td>118 Wh/kg</td>
        </tr>
        <tr>
            <td>Tesla Model S</td>
            <td>2012</td>
            <td>85kWh</td>
            <td>540kg</td>
            <td>157 Wh/kg</td>
        </tr>
        <tr>
            <td>Tesla Model X</td>
            <td>2015</td>
            <td>75kWh</td>
            <td>530kg</td>
            <td>141 Wh/kg</td>
        </tr>
        <tr>
            <td>Audi e-tron 55</td>
            <td>2018</td>
            <td>95kWh</td>
            <td>699kg</td>
            <td>136 Wh/kg</td>
        </tr>
        <tr>
            <td>Volkswagen MEB</td>
            <td>2021</td>
            <td>82kWh</td>
            <td>493kg</td>
            <td>166 Wh/kg</td>
        </tr>
        <tr>
            <td>Tesla Model 3 LFP</td>
            <td>2021</td>
            <td>60kWh</td>
            <td>477kg</td>
            <td>126 Wh/kg</td>
        </tr>
        <tr>
            <td>Tesla Model S</td>
            <td>2022</td>
            <td>100kWh</td>
            <td>544kg</td>
            <td>184 Wh/kg</td>
        </tr>
        <tr>
            <td>Audi Q8 e-tron 55</td>
            <td>2022</td>
            <td>114kWh</td>
            <td>727kg</td>
            <td>157 Wh/kg</td>
        </tr>
        <tr>
            <td>Kia EV6</td>
            <td>2022</td>
            <td>77,4kWh</td>
            <td>477kg</td>
            <td>162 Wh/kg</td>
        </tr>
        <tr>
            <td>Mercedes EQXX</td>
            <td>2022</td>
            <td>107,8kWh</td>
            <td>495kg</td>
            <td>217 Wh/kg</td>
        </tr>
        <tr>
            <td>BYD Seal LR (LFP)</td>
            <td>2022</td>
            <td>82,56kWh</td>
            <td>558kg</td>
            <td>148 Wh/kg</td>
        </tr>
        <tr>
            <td>Nio Semi-Solid</td>
            <td>2023</td>
            <td>150kWh</td>
            <td>575kg</td>
            <td>260 Wh/kg</td>
        </tr>
        <tr>
            <td>Audi Q6 e-tron / Porsche Macan EV</td>
            <td>2024</td>
            <td>100kWh</td>
            <td>570kg</td>
            <td>175 Wh/kg</td>
        </tr>
    </tbody>
</table>

Für weitere Details zu Batteriepaketen empfehlen wir den Besuch von [BatteryDesign.net](https://www.batterydesign.net/maximising-pack-energy-density/).

{{< pagenavigation b_url="../cell/" b_title="Zellgehäuse" f_url="../batterymanagment/" f_title="Batteriemanagement" >}}