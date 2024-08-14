---
title: So überprüfen Sie den Batteriezustand
linktitle: Batteriezustand überprüfen
description: Mit einfacher Mathematik können Sie den Gesamtzustand Ihrer Batterie überprüfen. Diese Anleitung erklärt, wie.
weight: 1
---
<!-- markdownlint-disable MD033 -->

<div class="alert alert-warning" role="alert">
  Dieses Verfahren ist <b>nur</b> anwendbar auf EVs, die:
  <ul>
    <li>Den gesamten Verbrauch der Fahrt anzeigen, nicht nur den Verbrauch für die letzte Strecke. Zum Beispiel zeigen viele chinesische EVs nur den Verbrauch für die letzten 50 km an.</li>
    <li>Keinen versteckten nutzbaren Puffer haben, wie der Toyota bZ4X, der viel Kapazität zwischen 0-1% versteckt.</li>
    <li>Den Puffer bei Degradation nicht anpassen (die meisten tun dies nicht).</li>
  </ul>
</div>

Wenn die Batterie degradiert, reduziert sich die verfügbare Batteriekapazität, was die Reichweite des EVs verringert.

Wenn Sie die Nettokapazität kennen, die Ihr Auto im Neuzustand haben sollte, können Sie dessen aktuellen Zustand berechnen.

So überprüfen Sie Ihre Batterie:

1. Laden Sie auf 100% auf.
2. Fahren Sie und nutzen Sie mindestens 90% der Batterie. Versuchen Sie, den Verbrauch niedrig zu halten.
3. Notieren Sie Ihren Verbrauch und die Fahrstrecke.
4. Notieren Sie den verbleibenden SOC (Ladezustand) Prozentsatz der Batterie.
5. Berechnen Sie die tatsächliche Kapazität.

Für die folgenden Beispiele nehmen wir an, dass Sie einen e-tron 55 mit einer Nettokapazität von 86,5 kWh ab Werk haben.

## Berechnung in Meilen

### Beispiel 1

Sie fahren 169 Meilen mit einem Verbrauch von 2,6 Meilen/kWh. Sie haben die Fahrt mit einer 100% geladenen Batterie begonnen und mit 21% beendet.

Berechnen Sie zuerst die insgesamt verbrauchte Energie: 169 / 2,6 = <b>65 kWh</b>.<br>
Wenn Sie 21% übrig hatten, haben Sie <b>79%</b> verbraucht (100% - 21%).<br>
Die aktuelle Kapazität beträgt 79% = 65 kWh.<br>
Sie können die volle Kapazität (100%) berechnen:<br>
(65 / 79) * 100 = <b>82,27 kWh</b>.<br>
82,27 ist die tatsächliche nutzbare Kapazität Ihrer Batterie.<br>
82,27 / 86,5 = <b>95,1%</b>.<br>
Dies zeigt eine Reduktion von fast 5% der ursprünglichen nutzbaren Kapazität an.

## Berechnung in Kilometern

### Beispiel 1

Sie fahren 308 Kilometer mit einem Verbrauch von 25 kWh/100 km.<br>
Sie haben mit 100% begonnen und mit 5% beendet.<br>

Berechnen Sie zuerst die insgesamt verbrauchte Energie:<br>
(308 * 25) / 100 = <b>77 kWh</b> insgesamt.<br>
Wenn Sie 5% übrig haben, haben Sie <b>95%</b> verbraucht (100% - 5%).<br>

95% = 77 kWh Batterie.<br>

Die volle Kapazität (100%) kann dann berechnet werden:<br>
(77 / 95) * 100 = <b>81,05 kWh</b>.<br>
81,05 ist die tatsächliche Kapazität Ihrer Batterie.<br>
81,05 / 86,5 = <b>93,7%</b>.<br>
Dies zeigt eine Reduktion von fast <b>6,5%</b> der ursprünglichen Kapazität an.

## Was die Kapazität beeinflusst

Eine einzelne Abweichung von der Kapazität bedeutet nicht unbedingt, dass Ihre Batterie degradiert ist.

Hoher Verbrauch kann aufgrund des Innenwiderstands zu einem gewissen Verlust führen.

Eine unausgeglichene Batterie wird ebenfalls die Kapazität beeinflussen.

Für diejenigen, die gerne den Überblick behalten, empfehlen wir, dies von Anfang an zu überwachen. So lernen Sie Ihr Auto besser kennen.

Das folgende Beispiel zeigt die Statistiken eines e-tron 55 2020v1 mit einer Kapazität von 83,6 kWh im Neuzustand.

{{< sitefiguresized thumb="guides/checkingbatteryhealth/graph1_st.jpg" width="2463" height="1366" title="Verfolgung der tatsächlichen Batteriekapazität im Vergleich zum Gesamtverbrauch" >}}

{{< sitefiguresized thumb="guides/checkingbatteryhealth/graph2_st.jpg" width="2019" height="1364" title="Verfolgung der tatsächlichen Batteriekapazität im Vergleich zum Verbrauch kWh/100 km" >}}