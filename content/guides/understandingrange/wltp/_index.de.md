---
title: WLTP-Reichweitentest
linktitle: WLTP
description: Das weltweit harmonisierte Testverfahren für leichte Fahrzeuge (WLTP) ist ein globaler Standard zur Bestimmung der Reichweite von Elektrofahrzeugen.
weight: 2
---
<!-- markdownlint-disable MD033 -->

Für Autos, die nach September 2017 in Europa verkauft werden, ist es obligatorisch, diesen Standard zu verwenden. Das WLTP hat das NEDC ersetzt.

## Wie wird getestet?

Das Testverfahren wird [detailliert beschrieben](https://unece.org/transport/documents/2021/02/standards/un-regulation-no-154-worldwide-harmonized-light-vehicles-test) von der UN.

Kurz gesagt, das WLTP-Verfahren basiert auf neuen Fahrzyklen (WLTC – Worldwide harmonized Light-duty vehicles Test Cycles), um die Reichweite zu messen.

Der WLTP-Zyklus hat vier Unterteile, jedes mit einer unterschiedlichen Höchstgeschwindigkeit. Die gesamte Testzykluszeit beträgt 30 Minuten (1800 Sekunden).

<div class="table-responsive">
<table class="table table-striped">
    <thead>
        <tr>
            <th>#</th>
            <th>Stadt</th>
            <th>Vorstadt</th>
            <th>Landstraße</th>
            <th>Autobahn</th>
            <th>Gesamt</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Dauer (Sekunden)</td>
            <td>589</td>
            <td>483</td>
            <td>455</td>
            <td>323</td>
            <td>1800</td>
        </tr>
        <tr>
            <td>Stopp (Sekunden)</td>
            <td>150</td>
            <td>49</td>
            <td>31</td>
            <td>8</td>
            <td>235</td>
        </tr>
        <tr>
            <td>Distanz (Meter)</td>
            <td>3095</td>
            <td>4756</td>
            <td>7162</td>
            <td>8254</td>
            <td>23266</td>
        </tr>
        <tr>
            <td>Prozent Stopp</td>
            <td>26.5%</td>
            <td>11.1%</td>
            <td>6.8%</td>
            <td>2.2%</td>
            <td>13.5%</td>
        </tr>
        <tr>
            <td>Maximale Geschwindigkeit (km/h)</td>
            <td>56.5</td>
            <td>76.6</td>
            <td>97.4</td>
            <td>131.3</td>
            <td></td>
        </tr>
        <tr>
            <td>Durchschnittsgeschwindigkeit ohne Stopp (km/h)</td>
            <td>25.3</td>
            <td>44.5</td>
            <td>60.7</td>
            <td>94</td>
            <td>53.5</td>
        </tr>
        <tr>
            <td>Durchschnittsgeschwindigkeit mit Stopp (km/h)</td>
            <td>18.9</td>
            <td>39.4</td>
            <td>56.5</td>
            <td>91.7</td>
            <td>46.5</td>
        </tr>
        <tr>
            <td>Minimale Beschleunigung (m/s²)</td>
            <td>-1.5</td>
            <td>-1.5</td>
            <td>-1.5</td>
            <td>-1.44</td>
            <td></td>
        </tr>
        <tr>
            <td>Maximale Beschleunigung (m/s²)</td>
            <td>1.611</td>
            <td>1.611</td>
            <td>1.666</td>
            <td>1.055</td>
            <td></td>
        </tr>
    </tbody>
</table>
</div>

Das untenstehende Diagramm zeigt die Geschwindigkeit für die verschiedenen Zyklen.

{{< sitefiguresized thumb="guides/understandingrange/wltp/wltpcycle3_st.png" width="2914" height="1914" title="WLTP-Zyklus 3B" >}}

Der Test wird auf einem Dynamometer durchgeführt, um konsistente Bedingungen zu gewährleisten:

- 23 Grad Celsius
- Klimaanlage ausgeschaltet
- Lichter ausgeschaltet

Zusätzlich zum Dynamometertest muss der Hersteller das Auto in einem Windkanal testen. Dieser Test bestimmt den Luftwiderstandsbeiwert und die Frontfläche, die zur Berechnung der WLTP-Reichweite verwendet werden.

{{< sitefiguresized thumb="guides/understandingrange/wltp/windtunnel_st.jpg" width="3000" height="1539" title="Audi e-tron in einem Windkanal" >}}

## Das Ergebnis hängt vom Ausstattungsniveau ab

Bei vielen Modellen können bestimmte Optionen die Reichweite beeinflussen. Diese Optionen könnten größere Räder, Schiebedächer, virtuelle Spiegel und andere Faktoren umfassen, die das Gewicht oder die Aerodynamik verändern.

Für Modelle mit diesen Optionen muss der Hersteller zwei Tests durchführen: einen mit maximalen Optionen und einen mit minimalen Optionen.

Der Hersteller kann dann die Reichweite für verschiedene Ausstattungsvarianten basierend auf diesen Zahlen berechnen.

## Wie genau ist es?

Ein Test ohne Klimaanlage, Heizung und Lichter bei 23 Grad Celsius liefert keine genauen Verbrauchswerte für viele reale Szenarien.

Im schlimmsten Fall könnte das Fahren auf der Autobahn bei starkem Regen und kaltem Wetter nur 50-60% der angegebenen WLTP-Reichweite ergeben.

In der EVKX.net-Modell-Datenbank enthalten wir sowohl maximale als auch minimale WLTP-Reichweiten sowie die erwartete reale Reichweite.