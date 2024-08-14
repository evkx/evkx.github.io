---
title: Radarsensoren
linktitle: Radar
description: ADAS-Systeme verwenden Radarsensoren in Autos für verschiedene Anwendungen, einschließlich Kollisionsvermeidung, adaptiver Geschwindigkeitsregelung und Totwinkelüberwachung.
weight: 2
---
<!-- markdownlint-disable MD033 -->

Radar, kurz für "Radio Detection and Ranging", ist eine Sensortechnologie, die Radiowellen verwendet, um die Anwesenheit und Position von Objekten zu erkennen.

{{< sitefiguresized thumb="technology/sensorsandcameras/radar/radar_3_st.jpg" width="3000" height="1714" title="Radarsensor" >}}

## Funktionsweise von Radarsensoren

Hersteller platzieren Radarsensoren typischerweise an der Vorder-, Rückseite und den Seiten des Fahrzeugs. Diese Sensoren senden Radiowellen aus, die von nahegelegenen Objekten reflektiert werden und zum Sensor zurückkehren. Durch die Messung der Zeit, die die Radiowellen benötigen, um zu einem Objekt und zurück zu reisen, können Radarsensoren die Entfernung und Geschwindigkeit des Objekts bestimmen.

Radarsensoren können je nach EV-Modell standardmäßig oder optional sein. Typischerweise ist der vordere Sensor bei allen EVs mit Radar standardmäßig vorhanden.

{{< sitefiguresized thumb="technology/sensorsandcameras/radar/radar_1_st.jpg" width="1290" height="826" title="Radarsensorposition hinten Audi e-tron GT" >}}

{{< sitefiguresized thumb="technology/sensorsandcameras/radar/radar_2_st.jpg" width="1113" height="852" title="Radarsensor" >}}

## Anwendungen in ADAS

Radarsensoren sind nützlich für verschiedene ADAS-Anwendungen, einschließlich:

- **Kollisionsvermeidung:** Erkennt, wenn ein Auto einem Objekt, wie einem anderen Auto, zu nahe kommt, und warnt den Fahrer oder bremst automatisch, um eine Kollision zu vermeiden.
- **Adaptive Geschwindigkeitsregelung (ACC):** Erkennt die Geschwindigkeit und Entfernung des vorausfahrenden Autos und passt die Geschwindigkeit Ihres Autos entsprechend an, um einen sicheren Abstand zu halten.

## Arten von Radarsensoren

Die folgende Tabelle zeigt die Typen und typischen Standorte verschiedener Radarsensoren.

<table class="table table-striped border">
<thead>
    <tr>
        <th>Typ</th>
        <th>Reichweite</th>
        <th>Standort</th>
        <th>ADAS-Nutzung</th>
    </tr>
</thead>
<tbody>
<tr>
    <td>Langstreckenradar 77/79Ghz</td>
    <td>10-300 Meter</td>
    <td>Vorne und hinten</td>
    <td>
        <a href="../../driverassistance/adaptivecruisecontrol/">ACC</a>,
        <a href="../../driverassistance/automaticemergencybraking/">AEB</a>,
        <a href="../../driverassistance/collisionavoidancesystems/">CAS</a>,
        <a href="../../driverassistance/forwardcollisionwarning/">FCW</a>
    </td>
</tr>
<tr>
    <td>Mittelstreckenradar 77/79Ghz</td>
    <td>1-60 Meter</td>
    <td>Vorne/hinten</td>
    <td>
        <a href="../../driverassistance/adaptivecruisecontrol/">ACC</a>,
        <a href="../../driverassistance/automaticemergencybraking/">AEB</a>,
        <a href="../../driverassistance/collisionavoidancesystems/">CAS</a>,
        <a href="../../driverassistance/forwardcollisionwarning/">FCW</a>,
        <a href="../../driverassistance/automatedlanechange/">ALC</a>,
        <a href="../../driverassistance/frontcrosstrafficassist/">FCTA</a>
    </td>
</tr>
<tr>
    <td>Kurstreckenradar (24/77Ghz)</td>
    <td>0.5-20 Meter</td>
    <td>Vorne und hinten Ecke</td>
    <td>
        <a href="../../driverassistance/rearcrosstrafficalert/">RCTA</a>,
        RCW,
        <a href="../../driverassistance/blindspotmonitoring/">BSM</a>
    </td>
</tr>
</tbody>
</table>

{{< sitefiguresized thumb="technology/sensorsandcameras/radar/radarrange_1_st.jpg" width="3000" height="1686" title="Radarsensorreichweite" >}}

## Vor- und Nachteile von Radarsensoren

### Vorteile

- **Effektive Erkennung:** Radarsensoren können sich bewegende Fahrzeuge, Fußgänger und Objekte besser erkennen als Kameras oder LiDAR. Sie können weit entfernte Objekte sehen und sich schnell bewegen, was in vielen ADAS hilfreich ist.
- **Allwetterleistung:** Radarsensoren funktionieren gut bei allen Wetterbedingungen, einschließlich Regen, Schnee und Nebel. Sie sind nicht von der Helligkeit oder Dunkelheit der Umgebung betroffen, im Gegensatz zu Kameras oder LiDAR.
- **Kosteneffektiv:** Radarsensoren sind relativ günstig und einfach zu installieren und zu warten. Sie haben einen geringen Stromverbrauch und eine lange Lebensdauer.

### Nachteile

- **Geringere Auflösung:** Radarsensoren haben eine geringere Auflösung und Genauigkeit als Kameras oder LiDAR. Sie können die Form, Farbe oder Textur von Objekten nicht unterscheiden, was ihre Fähigkeit zur Erkennung von Verkehrsschildern, Fahrbahnmarkierungen oder anderen visuellen Hinweisen einschränkt.
- **Interferenzen:** Radarsensoren können unter Interferenzen oder Fehlalarmen leiden, die durch andere Radarquellen wie Fahrzeuge, Polizeiradare oder Funktürme verursacht werden.
- **Begrenztes Sichtfeld:** Radarsensoren haben ein begrenztes Sichtfeld und können die Umgebung des Fahrzeugs nicht vollständig abdecken. Sie müssen mit anderen Sensoren wie Kameras oder LiDAR kombiniert werden, um eine umfassende und zuverlässige Wahrnehmung der Umgebung zu gewährleisten.

## Hersteller

Hier sind einige Hersteller von Radarsensoren:

- [Valeo](https://www.valeo.com/en/)
- [Bosch](https://www.bosch-mobility.com/en/solutions/sensors/front-radar-sensor/)
- [HELLA](https://www.hella.com/partnerworld/us/Product-range/ADAS-Transforming-the-automotive-industry-47101/)
- [Continental](https://www.continental-automotive.com/en/components/radars.html)
- [Denso Corporation](https://www.denso.com/global/en/driven-base/feature/mobility/)
- [Infineon Technologies](https://www.infineon.com/cms/en/product/sensor/radar-sensors/)
- [NXP Semiconductors N.V](https://www.nxp.com/applications/automotive/adas-and-safe-driving/automotive-radar-systems:RADAR-SYSTEMS)
- [Texas Instruments Incorporated](https://www.ti.com/sensors/mmwave-radar/overview.html)

{{< pagenavigation b_url="../cameras/" b_title="Kameras" f_url="../lidar/" f_title="LiDAR-Sensoren" >}}