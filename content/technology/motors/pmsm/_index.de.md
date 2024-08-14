---
title: Permanentmagnet-Synchronmotoren
linktitle: PMSM
description: Ein Permanentmagnet-Synchronmotor (PMSM) ist ein Elektromotor, der Permanentmagnete auf dem Rotor verwendet, um ein Magnetfeld zu erzeugen, das mit der Statorwicklung interagiert, um eine mechanische Rotation zu erzeugen. PMSMs werden häufig in verschiedenen Anwendungen eingesetzt, darunter Elektrofahrzeuge, Industriemaschinen und Haushaltsgeräte.
weight: 2
---
<!-- markdownlint-disable MD033 -->

{{<evkxdisplayaddarticle />}}

## Funktionsweise

**Rotor:** Der Rotor eines PMSM enthält Permanentmagnete, die ein festes Magnetfeld erzeugen. Diese Magnete bestehen typischerweise aus Materialien wie Neodym-Eisen-Bor (NdFeB) oder Samarium-Kobalt (SmCo), die für ihre hohe magnetische Stärke bekannt sind.

{{< sitefiguresized thumb="technology/motors/pmsm/porschetaycanrotor_st.jpg" width="3000" height="1687" title="Porsche Taycan Rotor mit Permanentmagneten" >}}

Typischerweise hat der Rotor 6 oder 8 magnetische Pole.

**Stator:** Der Stator ist der stationäre Teil des Motors und besteht aus Wicklungen, die um die Statorpole gewickelt sind. Diese Wicklungen bestehen normalerweise aus Kupfer und werden mit Wechselstrom (AC) versorgt, um ein Magnetfeld zu erzeugen, das mit dem Rotor interagiert.

{{< sitefiguresized thumb="technology/motors/pmsm/porschetaycanstator_st.jpg" width="3000" height="1687" title="Porsche Taycan Stator" >}}

**Kommutierung:** Der PMSM verwendet elektronische Kommutierung, um die Richtung und Geschwindigkeit des Motors zu steuern. Sensoren, wie Hall-Effekt-Sensoren oder Encoder, erfassen die Position des Rotors und liefern Rückmeldungen an den Motorcontroller. Basierend auf diesen Rückmeldungen bestimmt der Motorcontroller, wann und wie die Statorwicklungen ein- und ausgeschaltet werden, um ein rotierendes Magnetfeld zu erzeugen, das den Rotor antreibt.

**Synchronisation:** Das von den Statorwicklungen erzeugte Magnetfeld muss mit der Position des Rotors synchronisiert werden, um einen effizienten und reibungslosen Betrieb zu gewährleisten. Dies wird typischerweise mit einer Technik namens feldorientierte Regelung (FOC) oder Vektorregelung erreicht, die die Amplitude und Phase des Statorstroms anpasst, um sie mit der Rotorposition auszurichten.

**Drehmomentproduktion:** Wenn das von den Statorwicklungen erzeugte rotierende Magnetfeld mit den Permanentmagneten auf dem Rotor interagiert, übt es ein Drehmoment auf den Rotor aus, wodurch dieser rotiert. Das vom Motor erzeugte Drehmoment kann durch Anpassen der Amplitude und Frequenz des Statorstroms gesteuert werden, was wiederum die Stärke und Geschwindigkeit des rotierenden Magnetfelds bestimmt.

{{<evkxdisplayaddarticle />}}

**Stromversorgung:** PMSMs benötigen eine Stromversorgung, die die geeignete Wechselspannung und Frequenz für die Statorwicklungen bereitstellen kann. Dies wird typischerweise mit einem Wechselrichter erreicht, der eine Gleichspannung aus einer Stromquelle, wie einer Batterie oder einem Stromnetz, in die erforderliche Wechselspannung und Frequenz für den Motor umwandelt.

Zusammenfassend lässt sich sagen, dass ein PMSM Permanentmagnete auf dem Rotor, Statorwicklungen, elektronische Kommutierung und Synchronisationstechniken verwendet, um ein rotierendes Magnetfeld zu erzeugen, das den Rotor antreibt und eine mechanische Rotation erzeugt. Das Drehmoment und die Geschwindigkeit des Motors können durch Anpassen der Amplitude und Frequenz des Statorstroms mit einem Wechselrichter und einem Motorcontroller gesteuert werden.
## Vorteile

Einer der Hauptvorteile von Synchronmotoren in Elektrofahrzeugen (EVs) ist ihre höhere Leistungsdichte. Permanentmagnete im Rotor erzeugen ein konstantes Magnetfeld, das ein höheres Drehmoment und eine höhere Leistung im Vergleich zu Asynchronmotoren ähnlicher Größe ermöglicht. Dies macht Synchronmotoren besonders geeignet für Hochleistungs-EVs, die schnelle Beschleunigung und hohe Geschwindigkeiten erfordern.

Synchronmotoren in EVs sind auch für ihre präzise und effiziente Steuerung bekannt. Sie können mithilfe fortschrittlicher Leistungselektronik, wie Motorsteuerungen oder Wechselrichtern, präzise gesteuert werden, was eine optimierte Leistung und ein verbessertes Energiemanagement ermöglicht. Dies ermöglicht Funktionen wie Torque Vectoring, bei dem das Drehmoment für jedes Rad unabhängig gesteuert werden kann, was die Traktion und das Handling unter verschiedenen Fahrbedingungen verbessert.

Ein weiterer Vorteil von Synchronmotoren ist ihre Fähigkeit, über einen weiten Bereich von Geschwindigkeiten und Lasten eine hohe Effizienz zu erreichen. Dies ermöglicht einen effizienten Betrieb sowohl bei niedrigen als auch bei hohen Geschwindigkeiten, was besonders nützlich in EVs ist, die je nach Fahrbedingungen unterschiedliche Leistungs- und Drehmomentanforderungen haben.

{{<evkxdisplayaddarticle />}}

## Einschränkungen

**Seltene Erden:** PMSMs benötigen Magnete aus seltenen Erden, die teuer sein können und Umweltprobleme in Bezug auf den Abbau und die Nachhaltigkeit mit sich bringen.

**Widerstand beim freien Rollen:** Wenn ein Elektrofahrzeug (EV) im Leerlauf rollt oder ohne Antrieb fährt, kann der Elektromotor einen Widerstandseffekt erzeugen, der oft als "Motorwiderstand" oder "Rollwiderstand" bezeichnet wird. Dieser Widerstand wird durch die elektromagnetischen Kräfte im Motor verursacht, die die Bewegung des Rotors behindern und einen Widerstand gegen die Bewegung des Fahrzeugs erzeugen können.

Im Fall von Permanentmagnetmotoren erzeugen die Magnete im Rotor ein festes Magnetfeld, das mehr Widerstand erzeugen kann, wenn der Motor nicht angetrieben wird. Dies führt zu einem höheren Motorwiderstand im Vergleich zu Induktionsmotoren. Der Widerstand von Permanentmagnetmotoren kann jedoch auch vom spezifischen Design und der verwendeten Steuerungsstrategie abhängen, da einige Permanentmagnetmotoren aufgrund fortschrittlicher Motorsteuerungstechniken einen reduzierten Widerstand aufweisen können.

Einige EV-Hersteller verwenden eine Kupplung, um den Motor vom Antriebsstrang zu entkoppeln, wodurch der Motor effektiv von den Rädern getrennt wird und das Fahrzeug ohne Widerstand durch den Motor rollen kann. Dies kann dazu beitragen, den Widerstand zu verringern, den die Räder spüren, wenn der Motor nicht angetrieben wird, was die Effizienz des Fahrzeugs verbessern und den Energieverbrauch senken kann.

{{< sitefiguresized thumb="technology/motors/pmsm/mercedeseqesuvfrontmotordisconnect_st.jpg" width="3000" height="1687" title="Mercedes EQE SUV mit Kupplung, die den Frontmotor beim Rollen trennt" >}}

Andere verwenden Asynchronmotoren vorne und PMSMs hinten. Beispiele hierfür sind alle Autos, die auf der Volkswagen MEB-Plattform basieren.

Wenn Sie noch mehr über PMSM-Motoren erfahren möchten, empfehlen wir Ihnen, dieses Video anzusehen, in dem Lucid ihr PMSM-Design erklärt und mit anderen vergleicht.

{{< youtube U7IHZxNC6hc >}}

{{< pagenavigation b_url="../asm/" b_title="Asynchronmotoren" f_url="../wrsm/" f_title="WRSM" >}}