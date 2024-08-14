---
title: Batteriedegradation
linktitle: Degradation
description: Batteriedegradation in Elektrofahrzeugen (EVs) bezieht sich auf den allmählichen Verlust der Kapazität oder Leistung einer Batterie im Laufe der Zeit, was die Reichweite des Fahrzeugs beeinträchtigen kann. Wie bei anderen Batterietypen wird dies durch eine Kombination von Faktoren verursacht.
weight: 9
---
<!-- markdownlint-disable MD033 -->

Die Batteriedegradation in EVs wird hauptsächlich durch chemische Reaktionen während der Lade- und Entladezyklen verursacht. Im Laufe der Zeit können diese Reaktionen zu physischen Veränderungen an den Elektroden und dem Elektrolyten der Batterie führen, was deren Kapazität und Leistung verringert.

Hohe Temperaturen, extreme Lade- oder Entladezustände und häufige Nutzung von Schnellladung können die Batteriedegradation beschleunigen. Es gibt jedoch Maßnahmen, um deren Fortschreiten zu verlangsamen und die Lebensdauer der Batterie zu verlängern. Dazu gehören das Vermeiden hoher Temperaturen, das Begrenzen der Entladetiefe und das Reduzieren der Häufigkeit von Lade- und Entladezyklen. Darüber hinaus kann die Verwendung eines Batteriemanagementsystems (BMS), das die Leistung der Batterie aktiv überwacht und reguliert, dazu beitragen, deren Lebensdauer und Leistung zu optimieren.

## Kalenderverschleiß

Kalenderverschleiß bezieht sich auf die Batteriedegradation, die im Laufe der Zeit auftritt, selbst wenn die Batterie nicht verwendet wird. Im Gegensatz zum Zyklusverschleiß, der durch wiederholte Lade- und Entladezyklen verursacht wird, wird der Kalenderverschleiß durch Faktoren wie Temperatur, Luftfeuchtigkeit und Zeit beeinflusst.

Während des Kalenderverschleißes kann sich die Chemie der Batterie ändern, was zu einem allmählichen Kapazitätsverlust und einem Anstieg des Innenwiderstands führt. Dies kann die Reichweite des EVs verringern und die Gesamtlebensdauer der Batterie verkürzen.

Hohe Temperaturen können den Kalenderverschleiß beschleunigen, daher ist es wichtig, EV-Batterien an einem kühlen, trockenen Ort zu lagern, wenn sie nicht in Gebrauch sind. Darüber hinaus kann das Laden der Batterie auf einen hohen Ladezustand und das Belassen in diesem Zustand über längere Zeiträume zum Kalenderverschleiß beitragen.

Um die Auswirkungen des Kalenderverschleißes zu minimieren, sollten die Richtlinien des Herstellers zur Batterielagerung und -ladung befolgt werden.

{{< sitefiguresized thumb="guides/degradation/evstoragestress_st.png" width="623" height="473" title="Lagerungsstress" >}}

## Zyklusverschleiß

Zyklusverschleiß tritt als Folge wiederholter Lade- und Entladezyklen auf. Jeder Zyklus kann die Batterie abnutzen, was im Laufe der Zeit zu einem allmählichen Kapazitäts- und Leistungsverlust führt.

{{< evkxdisplayaddarticle />}}

Während des Zyklusverschleißes können die aktiven Materialien in den Elektroden abgebaut werden und ihre Fähigkeit verlieren, Energie zu speichern und freizusetzen. Dies kann den Innenwiderstand der Batterie erhöhen und deren Kapazität und Gesamtleistung verringern. Darüber hinaus kann der Zyklusverschleiß zu physischen Veränderungen der Batterie führen, wie der Bildung von Festelektrolyt-Interphasen (SEI) oder dem Wachstum von Dendriten, was die Kapazität und Leistung der Batterie weiter verringert.

### Zyklusverschleiß basierend auf dem SOC-Bereich

Das folgende Diagramm zeigt, wie der während des Ladens und Entladens verwendete Ladezustandsbereich (SOC) die Degradation beeinflusst.

{{< sitefiguresized thumb="guides/degradation/dstcycles_st.png" width="570" height="456" title="Zyklusstress" >}}

### Einfluss der Ladegeschwindigkeit auf den Zyklusverschleiß

Der wichtigste Faktor für den Zyklusverschleiß ist die Ladegeschwindigkeit. Hochgeschwindigkeits-DC-Ladung erhöht den Effekt des sogenannten Lithium-Platings, bei dem Lithium-Ionen in Lithium-Metall umgewandelt werden.

Wenn Lithium-Plating auftritt, werden die verfügbaren Ionen in der Batterie reduziert. Höhere Ladegeschwindigkeiten erhöhen die Anzahl der Lithium-Ionen, die aufgrund von Einschränkungen im chemischen Prozess nicht die Anode erreichen können. Weitere Informationen zum Lithium-Plating finden Sie in [dieser Präsentation](https://www.nasa.gov/sites/default/files/atoms/files/1-lithium_plating_azimmerman.pdf) der NASA.

### Statistiken zur realen Degradation

Der [2022 Tesla Impact Report](https://www.tesla.com/ns_videos/2022-tesla-impact-report-highlights.pdf) von Tesla liefert aktualisierte Daten zu den Modellen S und X.

{{< sitefiguresized thumb="technology/battery/degradation/teslastats_1_st.png" width="991" height="550" title="Nach 200.000 Meilen degradieren die Tesla-Batterien nur um 12%" >}}

## Wie man die Batterie schont

Lesen Sie unseren [Leitfaden](../../../guides/protectingbattery/) darüber, wie Sie Ihre Batterie schonen können.

{{< pagenavigation b_url="../charging/" b_title="Laden" f_url="../buffer/" f_title="Puffer" >}}