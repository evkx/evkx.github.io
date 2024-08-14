---
title: DC-Schnellladen
linktitle: DC-Schnellladen
description: DC-Schnellladen ist die schnellste und bequemste Art, ein Elektrofahrzeug unterwegs zu laden.
weight: 3
---
<!-- markdownlint-disable MD033 -->

DC-Schnellladen verwendet Hochleistungs-Gleichstrom (DC), um bis zu 1000 Volt und 650 Ampere zu liefern. Dieses Hochgeschwindigkeitsladen kann in nur 10 bis 30 Minuten bis zu 200 Meilen Reichweite hinzufügen, was es ideal für Langstreckenfahrten macht.

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/charging_1_st.jpg" width="3000" height="2001" title="BMW i4 M50 DC-Schnellladen" >}}

## Verfügbarkeit von DC-Schnellladen

Die Verfügbarkeit von DC-Schnellladen variiert erheblich je nach Standort und Art des Elektrofahrzeugs. In einigen Gebieten gibt es zahlreiche Ladegeräte, was es einfach macht, eine Station zu finden, während andere Gebiete eine spärliche Abdeckung haben, was eine sorgfältige Routenplanung erfordert.

Die Verfügbarkeit variiert auch je nach Marke. Zum Beispiel hat Tesla ein umfangreiches Supercharger-Netzwerk, während es schwierig sein kann, einen CHAdeMO-Stecker für einen Nissan Leaf zu finden.

Unten ist eine Karte, die die Ladeorte für [Electrify America](https://www.electrifyamerica.com/locate-charger/) zeigt und Gebiete mit dichter Abdeckung sowie solche mit weniger Ladegeräten hervorhebt.

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/chargermap_st.jpg" width="2392" height="1160" title="Electrify America Ladeortkarte vom 10. Juni 2023" >}}

## Leistung des DC-Schnellladens

Die Ladegeschwindigkeit kann stark zwischen verschiedenen Elektrofahrzeugmodellen, Ladestationen und sogar einzelnen Ladesitzungen variieren. Zwei Hauptfaktoren beeinflussen diese Variabilität:

### Batterietemperatur

Die Batterietemperatur ist entscheidend für die Ladegeschwindigkeit. Der optimale Temperaturbereich liegt typischerweise zwischen 25-35 Grad Celsius. Wenn die Batterie zu kalt ist, reduziert das Batteriemanagementsystem (BMS) die Ladegeschwindigkeit, um die Batterie zu schützen, was die Rate möglicherweise auf 25% der optimalen Geschwindigkeit senkt.

Viele Elektrofahrzeuge verfügen jetzt über Batteriesysteme, die beim Navigieren zu einer Ladestation oder manuell aktiviert werden können.

### Ladekurve

Die Ladekurve beschreibt, wie schnell ein Elektrofahrzeug bei verschiedenen Ladezuständen (SoC) geladen werden kann. Diese Kurve ist normalerweise nicht flach, was bedeutet, dass die Ladegeschwindigkeit bei 10% SoC anders ist als bei 80% SoC.

Ladekurven variieren erheblich zwischen den Modellen. Einige Elektrofahrzeuge halten eine hohe Ladegeschwindigkeit bis zu 80% SoC aufrecht, während andere einen steilen Abfall erleben. Maximale Geschwindigkeiten können von unter 100 kW bis über 300 kW reichen.

Unten ist die Ladekurve für die Lucid Air Dream Edition Performance. Beachten Sie den steilen Rückgang der Ladegeschwindigkeit, wenn der SoC steigt. Das Laden von 50% auf 80% dauert 20 Minuten, während das Laden von 5% auf 35% nur 9 Minuten dauert.

<img src="/images/models/lucid/air/air_dream_edition_performance/chargingcurve.svg" class="img-fluid">

Um die Ladezeit zu minimieren, identifizieren Sie den optimalen Ladebereich für Ihr Elektrofahrzeug. EVKX.net bietet detaillierte Ladeleistungsinformationen für verschiedene Modelle, einschließlich Ladekurven und optimaler Ladestopps.

## Routenplanung mit Laden

Die meisten Elektrofahrzeuge bieten Routenplanungsfunktionen, die DC-Schnellladestopps beinhalten, um Ihr Ziel zu erreichen. Diese Funktionalität ist Teil des [Navigationssystems](../../infotainment/navigation/).

Typischerweise können Sie den erwarteten Ankunftsladestand an Ladestationen und wie viel Sie laden müssen, um die nächste Station zu erreichen, sehen.

## Plug & Charge

Eine der Hauptherausforderungen für Elektrofahrzeugfahrer ist die Bequemlichkeit und Sicherheit des Ladens. Derzeit benötigen die meisten Elektrofahrzeugfahrer eine RFID-Karte, eine App oder eine kontaktlose Zahlungsmethode, um eine Ladesitzung an einer öffentlichen Station zu starten. Dies kann umständlich sein, insbesondere bei mehreren Ladenetzwerken, die unterschiedliche Zahlungssysteme erfordern.

Plug and Charge, eine Funktion des internationalen Standards ISO 15118, vereinfacht diesen Prozess. Mit Plug and Charge können Fahrer ihre Fahrzeuge an eine kompatible Station anschließen, und die Sitzung startet automatisch ohne zusätzliche Schritte.

### Wie funktioniert Plug and Charge?

Plug and Charge verwendet kryptografische Zertifikate, um das Elektrofahrzeug und die Ladestation zu identifizieren und zu authentifizieren. Diese Zertifikate werden von vertrauenswürdigen Behörden ausgestellt und in sicheren Hardwaremodulen im Elektrofahrzeug und in der Station gespeichert. Wenn ein Elektrofahrzeug an eine kompatible Station angeschlossen wird, tauschen sie Zertifikate aus und stellen eine sichere Kommunikationsverbindung her. Die Station überprüft dann die Identität des Elektrofahrzeugs und autorisiert die Sitzung basierend auf dem Vertrag des Elektrofahrzeugs mit seinem Mobilitätsdienstleister (MSP).

Dieser Prozess gewährleistet Vertraulichkeit, Datenintegrität und Authentizität. Es ermöglicht auch dynamische Tarifierung, Lastenausgleich, Smart-Grid-Integration und Fern-Firmware-Updates. Plug and Charge kann für AC-, DC- und kabelloses Laden verwendet werden.

[Hubject](https://www.hubject.com/) verwaltet die Zertifikate basierend auf diesem Protokoll.

## Wichtige Ladenetzwerke nach Standort

### USA

Mehrere große Ladenetzwerke sind in den USA tätig. Laut dem US-Energieministerium hat Tesla über **1.600 Supercharger-Stationen** mit mehr als **17.000 Schnellladeanschlüssen**. Electrify America folgt mit etwa **800 Stationen**.

Einige der größten Elektrofahrzeug-Ladenetzwerke in den USA sind:

- [Electrify America](https://www.electrifyamerica.com/): Das größte DC-Schnellladenetzwerk für die meisten Elektrofahrzeugmodelle, offen für alle Elektrofahrzeuge mit einem CCS-Anschluss und einige CHAdeMO-Fahrzeuge wie den Nissan Leaf.

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/teslasupercharger_1_st.jpg" width="3000" height="1948" title="Tesla Supercharger Standort" >}}

- [Tesla Superchargers](https://www.tesla.com/findus/list/superchargers/United+States): Teslas Netzwerk ist das größte im Land, mit engerer Stationsabdeckung im Vergleich zu Electrify America. Die meisten Supercharger erfordern einen NACS-Anschluss, aber Tesla fügt Ladegeräte mit Magic Dock hinzu, um CCS1-Elektrofahrzeuge zu unterstützen. Siehe Ladegeräte [hier](https://www.tesla.com/findus?v=2&bounds=60.61822541172234%2C-37.567384000000004%2C18.24809425121173%2C-150.067384&zoom=5&filters=party).

- [EVgo](https://www.evgo.com/): EVgo hat über **800 Schnellladestandorte** in 34 Bundesstaaten und mehr als 65 Metropolregionen.

- [ChargePoint](https://driver.chargepoint.com/mapCenter/37.26709110057841/-121.95591497824141/18): ChargePoint hat über **115.000 Ladepunkte** in Nordamerika und Europa.

### Europa

Mehrere große Ladenetzwerke sind in Europa tätig. Einige der größten sind:

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/ionity_1_st.jpg" width="3000" height="2000" title="Ionity Ladeort" >}}

- Ionity: Ein Hochleistungs-Ladestationsnetzwerk für Elektrofahrzeuge, das Langstreckenreisen in ganz Europa ermöglicht. Gegründet als Joint Venture von BMW Group, Mercedes-Benz Group, Ford Motor Company und Volkswagen Group.

- Plugsurfing: Ein europaweites Netzwerk, das Zugang zu über 200.000 Ladegeräten bietet, einschließlich derer von Allego, EnBW, Eon, Innogy, IONITY und Vattenfall, mit einem Schlüssel oder einer Karte und einer kostenlosen Smartphone-App.

- Maingau: Über seine EinfachStromLaden-App, Ladechip oder Karte bietet Maingau Zugang zu 50.000 Ladepunkten in Deutschland, Österreich und der Schweiz.

{{< pagenavigation b_url="../homecharging/" b_title="Heimladen" f_url="../batteryswap/" f_title="Batteriewechsel" >}}