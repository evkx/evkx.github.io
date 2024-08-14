---
title: EPA Reichweitentest
linktitle: EPA
description: Der EPA-Reichweitentest ist der in den Vereinigten Staaten verwendete Test. Die United States Environmental Protection Agency definiert die Tests.
weight: 1
shownavtabs: true
---
<!-- markdownlint-disable MD033 -->

## Wie wird getestet?

Die EPA definiert die [Testzyklen](https://www.fueleconomy.gov/feg/fe_test_schedules.shtml), und die SAE definiert das [Testverfahren](https://www.fueleconomy.gov/feg/pdfs/EPA%20test%20procedure%20for%20EVs-PHEVs-11-14-2017.pdf).

Hersteller führen die EPA-Tests auf einem Dynamometer durch, einem Gerät, das Fahrbedingungen simuliert, indem das Fahrzeug auf Rollen gestellt und seine Leistung gemessen wird.

{{< sitefiguresized thumb="guides/understandingrange/epa/bmwi7dynamometer_1_st.jpg" width="3000" height="2000" title="BMW i7 auf einem Dynamometer" >}}

Hersteller können zwischen einem Zwei-Zyklen- oder Fünf-Zyklen-Test wählen.

### Zwei-Zyklen-Tests

Die EPA definiert zwei Fahrzyklen, um typische Stadt- und Autobahnszenarien darzustellen: den Urban Dynamometer Driving Schedule (UDDS) und den Highway Fuel Economy Driving Schedule (HWFET).

- **UDDS-Zyklus**: Beinhaltet häufiges Anhalten und Anfahren.
- **HWFET-Zyklus**: Beinhaltet konstante Geschwindigkeiten und minimales Bremsen.

<table class="table">
    <thead>
        <tr>
            <th></th>
            <th>UDDS</th>
            <th>HWFET</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Dauer (Sekunden)</td>
            <td>1874</td>
            <td>765</td>
        </tr>
        <tr>
            <td>Stopp (Sekunden)</td>
            <td>358</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Distanz (Meter)</td>
            <td>17767</td>
            <td>16142</td>
        </tr>
        <tr>
            <td>Distanz (Meilen)</td>
            <td>11.04</td>
            <td>10.03</td>
        </tr>
        <tr>
            <td>Prozent Stopp</td>
            <td>18%</td>
            <td>0%</td>
        </tr>
        <tr>
            <td>Maximale Geschwindigkeit (km/h)</td>
            <td>90.93</td>
            <td>96.6</td>
        </tr>
        <tr>
            <td>Maximale Geschwindigkeit (mph)</td>
            <td>56.5</td>
            <td>60</td>
        </tr>
        <tr>
            <td>Durchschnittsgeschwindigkeit (km/h)</td>
            <td>34.2</td>
            <td>77.7</td>
        </tr>
        <tr>
            <td>Durchschnittsgeschwindigkeit (mph)</td>
            <td>21.2</td>
            <td>48.3</td>
        </tr>
    </tbody>
</table>

{{< sitefiguresized thumb="guides/understandingrange/epa/epacycles_st.png" width="2732" height="1505" title="EPA-Zyklen" >}}

Hersteller testen Elektrofahrzeuge, indem sie sie vollständig aufladen, über Nacht stehen lassen und sie dann durch mehrere UDDS- und HWFET-Zyklen fahren, bis die Batterie vollständig entladen ist. Die Tests werden mit einer Mischung aus 55% HWFET und 45% UDDS durchgeführt.

Die während des Tests zurückgelegte Gesamtdistanz wird als vorläufige Reichweitenschätzung aufgezeichnet. Diese Schätzung wird dann durch einen Korrekturfaktor angepasst, um Variationen in den Fahrbedingungen wie Temperatur, Gelände und Fahrerverhalten zu berücksichtigen. Der Korrekturfaktor basiert auf realen Fahrdaten und beträgt 0,7 für die Zwei-Zyklen-Tests.

Beispielsweise, wenn ein Elektrofahrzeug während des Tests 300 Meilen zurücklegt und der Korrekturfaktor 0,7 beträgt, wäre die endgültige EPA-Reichweitenschätzung 300 x 0,7 = 210 Meilen. Das bedeutet, dass das Elektrofahrzeug unter typischen Fahrbedingungen 210 Meilen mit einer vollen Ladung fahren kann.

Nach dem Test wird die Batterie mit einer normalen Wechselstromquelle unter Verwendung des Ladegeräts des Herstellers für dieses Fahrzeug wieder aufgeladen. Der Energieverbrauch der Stadt- und Autobahnzyklen (in kW-hr/Meile oder kW-hr/100 Meilen) wird dann mathematisch aus den Aufladedaten, den DC-Entladedaten und der Distanz für jeden Zyklus bestimmt. Die Aufladeenergie umfasst alle Verluste aufgrund von Ineffizienzen des Ladegeräts des Herstellers.

### Fünf-Zyklen-Test

Zusätzlich zu den UDDS- und HWFET-Zyklen hat die EPA drei zusätzliche Zyklen definiert:

- **US06**: Ein Hochbeschleunigungs-Aggressivfahrzyklus, der das Fahren auf Autobahnen und Landstraßen mit höheren Geschwindigkeiten und häufigeren Stopps simuliert. Auch bekannt als Supplemental FTP-Zyklus.
- **SC03**: Ein Fahrzyklus, der das Fahren mit Klimaanlage bei heißem Wetter simuliert. Auch bekannt als Air Conditioning Supplemental FTP-Zyklus.
- **Kaltwettertest**: Ein Fahrzyklus, der kalte Wetterbedingungen simuliert und bei 20°F (-7°C) anstelle der normalen 75°F (24°C) durchgeführt wird. Auch bekannt als Cold CO2-Test.

Diese drei zusätzlichen Zyklen werden verwendet, um die angepassten Kraftstoffverbrauchswerte zu berechnen, die auf den Aufklebern neuer Fahrzeuge angezeigt werden. Die angepassten Werte sind repräsentativer für das reale Fahren als die nicht angepassten Werte, die nur auf den Standard-Stadt- und Autobahnzyklen basieren.

Elektrofahrzeughersteller können wählen, ob sie die Zwei-Zyklen- oder Fünf-Zyklen-Tests verwenden. Typischerweise wählen sie denjenigen, der die längste Reichweite bietet.

[Tesla verwendet den Fünf-Zyklen-Test, um eine längere bewertete EPA-Reichweite zu erhalten](https://www.caranddriver.com/features/a33824052/adjustment-factor-tesla-uses-for-big-epa-range-numbers/).

## Wie genau ist es?

Viele halten die EPA-Tests für näher an den realen Zahlen als die WLTP-Tests.

In der [EVKX.net-Modell-Datenbank](/evsearch) haben wir die EPA-Ergebnisse für verschiedene Modelle aufgelistet. Die EPA hat auch ihr eigenes [Suchwerkzeug](https://www.fueleconomy.gov/feg/PowerSearch.do?action=PowerSearch&year1=2021&year2=2023&minmsrpsel=0&maxmsrpsel=0&city=0&highway=0&combined=0&cbftelectricity=Electricity&YearSel=2021-2023&MakeSel=&MarClassSel=&FuelTypeSel=Electricity&VehTypeSel=&TranySel=&DriveTypeSel=&CylindersSel=&MpgSel=000&sortBy=Comb&Units=&url=SearchServlet&opt=new&minmsrp=0&maxmsrp=0&minmpg=0&maxmpg=0&sCharge=&tCharge=&startstop=&cylDeact=&rowLimit=200).