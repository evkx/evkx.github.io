---
title: Batteriethermomanagement
linktitle: Thermomanagement
description: Thermomanagement ist entscheidend für die Leistung und Gesundheit der Batterie.
weight: 6
---
<!-- markdownlint-disable MD033 -->

Die optimale Betriebstemperatur für eine Batterie liegt bei etwa 20-30 Grad Celsius. Für die Lagerung ist die optimale Temperatur noch niedriger.

Ein Batteriepack verfügt über ein Thermomanagementsystem, um die Batterie in einem optimalen Betriebszustand zu halten. Dieses System umfasst sowohl Kühl- als auch Heizmechanismen.

## Batterieheizung

Wenn die Batterie zu kalt ist, kann sie nicht den maximalen Strom aufnehmen oder abgeben, was die Reichweite, Leistung, maximale Rekuperation und Ladegeschwindigkeit reduziert. Diese Einschränkung tritt auf, weil die chemischen Reaktionen in der Batterie bei sinkenden Temperaturen langsamer ablaufen, was den Innenwiderstand erhöht.

Das Laden einer kalten Batterie mit hoher Geschwindigkeit kann auch die Batteriezellen beschädigen und deren Lebensdauer verkürzen.

Um dieses Problem zu überwinden, verfügen einige Elektrofahrzeuge über eine Funktion namens Batterievorwärmung. Diese Funktion ermöglicht es dem Elektrofahrzeug, die Batterie vor dem Laden oder Fahren auf eine geeignete Temperatur zu erwärmen. Dadurch kann das Elektrofahrzeug die Batterielebensdauer erhalten, die Reichweite erhöhen und die Ladezeit verkürzen.

### Wie funktioniert die Batterievorwärmung?

Die Batterievorwärmung nutzt das bordeigene Heizsystem oder Abwärme vom Motor/Antriebsstrang, um die Temperatur des Batteriepacks zu erhöhen.

{{< sitefiguresized thumb="technology/battery/thermalmanagment/thermal_management_st.jpg" width="2000" height="1200" title="Audi e-tron GT Batterieheizkreise" >}}

#### Automatische Vorwärmung beim Navigieren zu einem DC-Schnellladegerät

Die häufigste Methode, die Batterievorwärmung zu aktivieren, besteht darin, zu einem DC-Schnellladegerät zu navigieren, indem das bordeigene Navigationssystem verwendet wird. Das System berechnet, basierend auf der Entfernung zum Ladegerät und der aktuellen Temperatur, wie viel Heizung benötigt wird, um die optimale Temperatur für das Laden zu erreichen. Auf diese Weise ist die Batterie bereit, den maximalen Strom aufzunehmen und schneller zu laden.

{{< sitefiguresized thumb="technology/battery/thermalmanagment/kiaev9precondition_st.jpg" width="2078" height="973" title="Kia EV9 mit aktiver Heizung, angezeigt am Batteriesymbol unten rechts" >}}

#### Manuell aktivierte Vorwärmung

Einige Modelle ermöglichen die manuelle Aktivierung der Batterievorwärmung. Diese Funktion ermöglicht es dem Fahrer, die Heizung zu aktivieren, ohne zu einem Ladegerät navigieren zu müssen.

{{< sitefiguresized thumb="technology/battery/thermalmanagment/vw_manual_preheating_st.jpg" width="2300" height="981" title="Manuelle Vorwärmung VW ID7" >}}

#### Vorwärmung vor dem Reisen

Wenn Sie zu Hause laden, ist es eine gute Option, die Batterie und den Innenraum vor dem Fahren vorzuheizen, während das Fahrzeug an das Heimladegerät angeschlossen ist. Auf diese Weise können Sie mit einem warmen Innenraum und einer voll aufgeladenen Batterie starten. Typischerweise kann der Fahrer die Vorwärmung über das Infotainmentsystem oder die Auto-App starten.

Einige Modelle unterstützen keine Batterievorwärmung und wärmen nur den Innenraum vor. Für diese Modelle kann es vorteilhaft sein, sicherzustellen, dass das Laden kurz vor Beginn der Fahrt abgeschlossen ist.

{{< sitefiguresized thumb="technology/battery/thermalmanagment/preconditionwhencharging_1_st.jpg" width="3000" height="1892" title="Manuelle Vorwärmung VW ID7" >}}

### Wie leistungsstark sind die Heizkreise?

Die Leistung der Heizkreise hängt vom EV-Modell und der Batteriekapazität ab. Zum Beispiel hat das Tesla Model 3 ein 75 kWh Batteriepack und ein 6 kW Heizsystem, das die Batterietemperatur in einer Stunde um etwa 18°C (32°F) erhöhen kann. Der Nissan Leaf hat ein 40 kWh Batteriepack und ein 3 kW Heizsystem, das die Batterietemperatur in einer Stunde um etwa 9°C (16°F) erhöhen kann.

Bei einigen Modellen mit geringer Heizleistung kann es schwierig sein, die Batterie bei kaltem Wetter auf die optimale Temperatur zu bringen. Siehe die Tabelle unten für einige Beispiele der Batterieheizleistung:

<table class="table table-striped border">
    <thead>
        <tr>
            <th>Modell</th>
            <th>Heizleistung</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Kia Ionic 6</td>
            <td>4,5 kW</td>
        </tr>
    </tbody>
</table>

### Wie beeinflusst die Batterievorwärmung die Reichweite?

Die Batterievorwärmung verbraucht etwas Energie aus der Batterie, was die verfügbare Reichweite reduziert. Dieser Energieverlust wird jedoch teilweise durch die verbesserte Effizienz und Leistung der Batterie bei höherer Temperatur kompensiert. Darüber hinaus kann die Vorwärmung der Batterie, während das Elektrofahrzeug angeschlossen ist, den Energieverlust minimieren, da das Elektrofahrzeug Strom aus dem Netz statt aus der Batterie ziehen kann.

### Mindest-SOC-Level für die Vorwärmung

Die meisten Elektrofahrzeuge haben eine Grenze dafür, wie niedrig der Ladezustand (SOC) sein kann, damit die Vorwärmung aktiviert wird.

{{< sitefiguresized thumb="technology/battery/thermalmanagment/preconditiondisabled_st.jpg" width="2054" height="957" title="Kia EV9 GT-Line deaktiviert Vorwärmung bei 12% SOC" >}}

In [diesem Test](https://youtu.be/rKgnVzUJAfA?t=638) von Bjørn Nyland können Sie sehen, wie der Kia EV9 die Vorwärmung bei 12% SOC deaktiviert.

## Batteriekühlung

Die Batterietemperatur kann bei Hochgeschwindigkeitsladen oder sportlichem Fahren auf hohe Werte ansteigen. Wenn die Batterie zu heiß wird, kann sie schneller degradieren, Kapazität verlieren und die Reichweite reduzieren. Dieser Effekt tritt auf, weil die chemischen Reaktionen in der Batterie bei steigenden Temperaturen beschleunigt werden und der Innenwiderstand abnimmt. Das Laden einer heißen Batterie mit hoher Geschwindigkeit kann auch die Zellen beschädigen und deren Lebensdauer verkürzen.

Typischerweise reduzieren Hersteller sowohl die Lade- als auch die Leistungsabgabe, wenn die Batterietemperatur zu hoch ist.

Um dieses Problem zu überwinden, verfügen einige Elektrofahrzeuge über eine aktive Batteriekühlung. Diese Funktion ermöglicht es dem Elektrofahrzeug, die Temperatur der Batterie während des Ladens oder Fahrens auf ein geeignetes Niveau zu senken, um die Lade- oder Fahrleistung zu erhöhen.

### Wie funktioniert die Batteriekühlung?

Die Batteriekühlung verwendet ein flüssigkeitsbasiertes System, das ein Kühlmittel durch das Batteriepack zirkuliert. Das Kühlmittel absorbiert die Wärme von den Batteriezellen und überträgt sie auf einen Kühler. Der Kühler gibt die Wärme dann an die Umgebungsluft oder einen anderen Kühlkreislauf ab, der ein Kältemittel oder eine Wärmepumpe verwendet. Das Kühlmittel kann eine Wasser-Ethylenglykol-Mischung, eine dielektrische Flüssigkeit oder eine Flüssigkeit mit thermisch leitfähigen Partikeln sein.

{{< sitefiguresized thumb="technology/battery/thermalmanagment/batterycooling_1_st.jpg" width="3000" height="1808" title="Audi e-tron Batteriekühlkreise" >}}

In [diesem 1000km Test](https://youtu.be/Q0LaUx5I_28?t=412) von Bjørn Nyland hat der BMW i50 ein Problem mit Überhitzung nach dem Laden und reduzierter verfügbarer Leistung.

{{< pagenavigation b_url="../batterymanagment/" b_title="Batteriemanagement" f_url="../cellbalancing/" f_title="Zellenausgleich" >}}