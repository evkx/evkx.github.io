---
title: EV-Reiserechner (Beta)
linktitle: EV-Reiserechner (Beta)
description: Plane und vergleiche EV-Reisen mit realistischen, physikbasierten Schätzungen. Wähle einen Modus (Reichweite, Distanz oder Zeit), setze Geschwindigkeit und Wetter – und sieh in einer Ansicht, wie verschiedene Fahrzeuge abschneiden: Gesamtzeit, Ladestopps und Energieverbrauch.
weight: 3
xsthumb: guides/evsearch/search_1_xst.jpg
---
<!-- markdownlint-disable MD033 -->

## Was er macht

* **Reichweiten-Modus:** Wie weit ein Auto mit einem Ladefenster kommt (z. B. 100→0 %, 100→10 %, 80→10 %) bei deiner gewählten Geschwindigkeit und unter deinen Bedingungen.
* **Distanz-Modus:** Zeit, Energie und **Ladestopps**, um eine vorgegebene Streckenlänge zu bewältigen.
* **Zeit-Modus:** Wie weit du innerhalb eines Zeitbudgets kommst (Fahren + Laden).
* **Einheiten:** Wechsel zwischen metrisch und imperial.
* **Optionen:** Batterie-SoH, Wärmeverlust-Faktor, Ausstattungs-/Trim-Level (Rad/Reifen-Einfluss) und **Fahren mit Anhänger** (Voreinstellungen).

## So funktioniert es (Überblick)

Wir kombinieren grundlegende Fahrzeugphysik mit Kalibrierung an realen Daten:

* **Aerodynamischer Widerstand** (Cd × Stirnfläche): wächst mit der Geschwindigkeit² und der **Luftdichte** (Temperatur).
* **Rollwiderstand** (Reifen + Masse): skaliert mit dem **Straßenzustand** (trocken → nass/Schnee) und der Fahrzeugmasse.
* **Neben-/Klimaverbrauch:** eine Grundlast plus deine **HVAC**-Einstellung.
* **Kalibrierung:** Abgleich mit WLTP- und Autobahn-Ankerwerten (z. B. 90/120 km/h), daher Ergebnisse auf **Batterieseite** (Antriebs-/Inverterverluste implizit enthalten).
* **Batterie & Trim:** **SoH** (Batteriezustand), **Wärmeverlust** (zusätzliche Verluste bei Kälte) und **Trim** (Räder/Reifen).
* **Anhängerbetrieb:** Zusätzliche Masse sowie ein teilweiser **Aero-Zuschlag** basierend auf der Stirnfläche des Anhängers und dem Anteil außerhalb des Strömungsschattens („Wake“) des Fahrzeugs.

### Lade-Overhead & -Verluste (Annahmen)

* **Zusatzzeit pro Stopp: +5 Minuten.**  
  Wir addieren pauschal 5 Minuten zur reinen Ladezeit, um Abfahrt von der Strecke, das Finden eines Ladepunkts, Anstecken/Starten der Sitzung sowie das Wiederauffahren und Beschleunigen abzudecken.
* **Ladeverluste: 5 %.**  
  Wir nehmen ~5 % Energieverlust im Ladeprozess an. Die in den Ergebnissen gezeigte **„hinzugefügte Energie“** ist das, was im **Batteriepack** ankommt; die Anzeige an der Ladesäule (und deine Kosten) liegen typischerweise etwa **5 % höher**.  
  *Beispiel:* Stehen in der Tabelle **40 kWh**, werden an der Säule ungefähr **42 kWh** abgerechnet.

Anschließend schätzt der Rechner Ladebedarf und -zeiten, um dein Ziel (Distanz-/Zeit-Modus) zu erreichen, und listet jeden Stopp mit SoC hinein→hinaus und hinzugefügten kWh auf.

## Das siehst du in den Ergebnissen

* Fahrzeug
* **Reichweite / Distanz / Gesamtenergie** (abhängig vom Modus)
* **Verbrauch** (Wh/km oder mi/kWh)
* **Gesamtzeit**
* **Ladestopps** (Anzahl, Dauer, SoC hinein→hinaus, hinzugefügte kWh)
* Zeilen lassen sich für Stopp-Details aufklappen

## Wichtige Hinweise & Einschränkungen

Dies ist eine **Schätzung**, keine Garantie. Reale Ergebnisse variieren durch:

* **Routendetails:** Höhenprofil/Steigungen, Verkehr, Limits, Baustellen
* **Wetter:** Wind (Gegen-/Seitenwind), Niederschlag, Straßentemperatur/Eis
* **Fahrzeug:** Reifentyp/-druck, Zuladung, Dachboxen/Fahrradträger, Fahrstil, Vorkonditionierung
* **Ladewirklichkeit:** Verfügbarkeit, Warteschlangen, geteilte Leistung, Zustand der Station, Zahlung/Apps
* **Datenstreuung:** Herstellerangaben vs. Kurve deines Fahrzeugs, Batteriekonditionierung

Plane konservativ und prüfe lange Reisen zusätzlich mit einem dedizierten Routenplaner. **Keine Gewähr; Nutzung auf eigenes Risiko.**

## Tipps für bessere Schätzungen

* Wähle eine **realistische Reisegeschwindigkeit** für deine Route und die Gesetzeslage.
* Passe **Temperatur** und **Straßenzustand** an die Vorhersage an.
* Trage deinen **SoH** ein, falls die Batterie gealtert ist; nutze **Wärmeverlust** bei strenger Kälte.
* Wähle das **Trim-Level**, mit dem du tatsächlich fährst.
* Mit Anhänger: wähle den **Anhängertyp**, der am besten passt.

---

*Modellversion:* v1.0 · *Zuletzt aktualisiert:* 2025-09-20
