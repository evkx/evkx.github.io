---
title: Motoren & Antriebseinheiten
linktitle: Motoren & Antriebseinheiten
description: Da die Automobilindustrie schnell auf Elektrifizierung umstellt, liegt das Herzstück von Elektrofahrzeugen (EVs) in ihren Motoren und Antriebseinheiten. Mit einer Vielzahl von Motortypen und komplexen Wechselrichtern ist das Verständnis der Komplexität dieser Komponenten entscheidend, um die Funktionsweise von EVs zu verstehen.
weight: 2
shownavtabs: true
---
<!-- markdownlint-disable MD033 -->

In diesem ausführlichen Artikel werden wir einen tiefen Einblick in Motoren und Antriebseinheiten für Elektroautos geben, die verschiedenen Motortypen untersuchen, die häufig in EVs verwendet werden, die Feinheiten des Wechselrichters erkunden und die entscheidende Rolle dieser Komponenten bei der Förderung der Zukunft des Transports beleuchten.

Zunächst werden wir die allgemeinen Prinzipien von Elektromotoren erklären.

{{< sitefiguresized thumb="technology/motors/vwapp550_st.jpg" width="3000" height="1407" title="Teile der elektrischen Antriebseinheit von VW." >}}

Dann werden wir die verschiedenen Arten von Motoren untersuchen, die in Elektroautos verwendet werden, von Permanentmagnetmotoren bis hin zu Induktionsmotoren.

Wir werden ihre einzigartigen Eigenschaften, Vorteile und Einschränkungen untersuchen und Einblicke in ihre Betriebsprinzipien und Effizienz geben.

{{<evkxdisplayaddarticle />}}

Als nächstes werden wir die Rolle des Wechselrichters untersuchen, der als Gehirn des Motorantriebssystems fungiert und Gleichstrom (DC) aus der Batterie in Wechselstrom (AC) umwandelt, um den Motor anzutreiben.

Wir werden die Komplexität des Wechselrichterdesigns erkunden, einschließlich seiner verschiedenen Steuerstrategien, des Wärmemanagements und der Leistungselektronik, und seine entscheidende Rolle bei der Optimierung der Motorleistung hervorheben.

Darüber hinaus werden wir die Integration von Motoren und Antriebseinheiten in Elektrofahrzeuge diskutieren, einschließlich ihrer Platzierung, Kühlsysteme und der Gesamtsystemeffizienz.

Wir werden auch den Einfluss des Motor- und Antriebseinheitendesigns auf Faktoren wie Fahrzeugreichweite, Leistung und Ladezeit untersuchen und die neuesten technologischen Fortschritte in diesem Bereich hervorheben.

Schließlich werden wir die Zukunftsaussichten von Motoren und Antriebseinheiten für Elektroautos erkunden, einschließlich Fortschritten in der Motortechnologie, Verbesserungen in der Leistungselektronik und aufkommenden Trends wie drahtlosem Laden und Festkörperbatterien. Wir werden auch die Herausforderungen und Chancen im Zusammenhang mit diesen Technologien und deren potenziellen Auswirkungen auf die Zukunft der Elektromobilität diskutieren.

Ob Sie ein EV-Enthusiast, ein Automobilingenieur oder einfach nur neugierig auf die Funktionsweise von Elektroautos sind, dieser umfassende Artikel wird ein tiefes Verständnis von Motoren und Antriebseinheiten vermitteln und die Spitzentechnologien beleuchten, die die Zukunft des Transports antreiben. Begleiten Sie uns also auf eine spannende Reise in die Welt des Elektrofahrzeugantriebs und entdecken Sie die Geheimnisse hinter der Kraft, die die Zukunft der Mobilität antreibt.

## Wie funktionieren Elektromotoren?

Obwohl es mehrere Arten von Elektromotoren gibt, sind die Prinzipien die gleichen. Elektromotoren arbeiten nach den Prinzipien des Elektromagnetismus. Sie bestehen aus einem Stator und einem Rotor, wobei der Stator ein stationärer Teil und der Rotor ein rotierender Teil ist.

{{< sitefiguresized thumb="technology/motors/asyncronmotor_st.jpg" width="1920" height="1080" title="Stator & Rotor." >}}

Der Stator enthält Spulenwicklungen, die mit einer Stromquelle verbunden sind, die einen elektrischen Strom erzeugt, der durch die Wicklungen fließt und ein Magnetfeld erzeugt.

Der Rotor hingegen enthält Magnete oder Wicklungen, und wenn das vom Stator erzeugte Magnetfeld mit den Magneten oder Wicklungen im Rotor interagiert, entsteht eine Kraft, die den Rotor zum Drehen bringt. Diese Drehbewegung wird dann auf die mechanische Last, wie die Räder eines Fahrzeugs, übertragen, was das Fahrzeug vorwärts bewegt.

{{<evkxdisplayaddarticle />}}

Der Motorcontroller steuert die Richtung und Geschwindigkeit der Motordrehung, indem er den durch die Statorwicklungen fließenden Strom variiert, was die Stärke und Ausrichtung des Magnetfelds verändert. Diese Technik ermöglicht eine präzise Steuerung der Motorleistung, einschließlich Drehmoment, Geschwindigkeit und Leistungsabgabe.

Verschiedene Arten von Elektromotoren, wie Permanentmagnet- und Induktionsmotoren, haben unterschiedliche Designs und Betriebsprinzipien. Dennoch basieren sie alle auf der Interaktion zwischen Magnetfeldern und elektrischen Strömen, um Bewegung zu erzeugen.

### Induktionsmotoren

Induktionsmotoren, auch als Asynchronmotoren bekannt, sind eine Art von Elektromotor, der aufgrund seiner einzigartigen Eigenschaften und Vorteile häufig in Elektrofahrzeugen (EVs) verwendet wird.

[Erfahren Sie mehr über Induktionsmotoren.](asm)

### Permanentmagnet-Synchronmotoren

Synchronmotoren sind eine Art von Elektromotor, der ebenfalls in Elektrofahrzeugen (EVs) für den Antrieb verwendet wird, aber anders als Asynchronmotoren arbeitet. Synchronmotoren erfordern eine physische Verbindung zwischen dem Rotor und dem Stator, typischerweise durch Permanentmagnete, was sie von Asynchronmotoren unterscheidet, die auf elektromagnetischer Induktion basieren.

[Erfahren Sie mehr über PMSM.](psm)

### Wickelrotor-Synchronmotor

Ein Wickelrotor-Synchronmotor, auch als Schleifring-Synchronmotor bekannt, ist eine Art von Elektromotor, der Merkmale sowohl von Synchronmotoren als auch von Wickelrotor-Induktionsmotoren kombiniert.

[Erfahren Sie mehr über WRSM.](wrsm)

## Der Wechselrichter

Der Wechselrichter ist eine entscheidende Komponente der Antriebseinheit eines Elektrofahrzeugs (EV). Er ist dafür verantwortlich, den in der Fahrzeugbatterie gespeicherten Gleichstrom (DC) in Wechselstrom (AC) umzuwandeln, der dann verwendet wird, um den Elektromotor anzutreiben, der die Räder des EVs antreibt.

[Erfahren Sie mehr über den Wechselrichter.](inverter)

## Motorkühlung

Die Kühlung ist ein wichtiger Aspekt des Elektromotordesigns in Elektrofahrzeugen (EVs), um optimale Leistung, Effizienz und Zuverlässigkeit zu gewährleisten.

[Erfahren Sie alles über die Kühlung](cooling)

## Getriebe

Elektrofahrzeuge (EVs) verwenden in ihren Antriebseinheiten typischerweise verschiedene Arten von Getrieben, abhängig vom spezifischen Design und den Anforderungen des Fahrzeugs.

[Erfahren Sie alles über Getriebe.](gears)

{{<evkxdisplayaddarticle />}}

## Motoraufbau

Elektrofahrzeuge (EVs) können je nach spezifischem Design und den Anforderungen des Fahrzeugs verschiedene Motoraufbauten verwenden. Einige der typischen Motoraufbauten, die in EVs verwendet werden, umfassen:

**Einzelmotoraufbau:** In einem Einzelmotoraufbau wird ein einzelner Elektromotor verwendet, um das Fahrzeug anzutreiben. Dieser Motor kann entweder ein Permanentmagnet-Synchronmotor (PMSM) oder ein Asynchron- oder Induktionsmotor (ASM) sein. Er treibt entweder die Vorder- oder Hinterräder des Fahrzeugs an.

**Doppelmotoraufbau:** In einem Doppelmotoraufbau werden zwei Elektromotoren verwendet, typischerweise einer für jede Achse oder jedes Rad. Dieser Aufbau ermöglicht eine präzisere Drehmomentverteilung zwischen den Vorder- und Hinterrädern, was eine bessere Traktionskontrolle und verbesserte Leistung, insbesondere in Allradantriebskonfigurationen (AWD), ermöglicht. Die Motoren können PMSMs, WRSMs, ASMs oder eine Kombination davon sein.

**Dreimotoraufbau:** Ein Dreimotoraufbau ist ähnlich wie ein Doppelmotoraufbau, jedoch mit drei Elektromotoren anstelle von zwei. Dieser Aufbau ist selten und wird in Hochleistungsmodellen wie dem Tesla Model S Plaid und dem Audi SQ8 e-tron verwendet. Ein Vorteil ist die Möglichkeit des Torque Vectoring.

{{< sitefiguresized thumb="technology/motors/trimotorsetupaudi_st.jpg" width="3000" height="1773" title="Dreimotoraufbau" >}}

**Viermotoraufbau:** Ein Viermotoraufbau hat einen Motor für jedes Rad. Hier sind einige der Vorteile von vier Motoren in einem EV:

- <b>Präzise Traktionskontrolle:</b> Jeder Motor kann das Drehmoment an jedem Rad unabhängig anpassen, je nach den Straßenbedingungen und den Eingaben des Fahrers. Dies kann die Stabilität, das Handling und die Sicherheit des Fahrzeugs verbessern, insbesondere in Offroad- und Schneesituationen. Zum Beispiel kann der Rivian R1S Quad Motor eine Funktion namens "Tank Turn" verwenden, um auf der Stelle zu drehen, indem die Räder auf einer Seite in eine Richtung und die Räder auf der anderen Seite in die entgegengesetzte Richtung gedreht werden.

- <b>Torque Vectoring:</b> Jeder Motor kann auch das Drehmoment an jedem Rad variieren, um das Lenken und Kurvenfahren des Fahrzeugs zu verbessern. Dies kann Übersteuern und Untersteuern reduzieren, die in herkömmlichen Fahrzeugen häufig auftreten. Torque Vectoring kann das Fahrzeug auch agiler und reaktionsschneller machen und mehr Fahrspaß bieten.

Einige Modelle mit Viermotoraufbau sind:

- [Zeekr 001 FR](/models/zeekr/001/001_fr/)
- [Rivian R1T/R1S Quad Motor](/models/rivian/r1/r1t_quad-motor_awd/)
- [GMC Hummer](/models/gmc/hummer_ev/hummer_ev_edition_1_pickup/)

Unten sehen Sie den Rivian R1T Quad Motor, der mit dem Viermotoraufbau einen Tank Turn durchführt.

{{< youtube yzwM8KE2L3I >}}

{{< pagenavigation b_url="../lights/" b_title="Lichter" f_url="asm/" f_title="Induktionsmotoren" >}}