---
title: EV Rejseberegner (beta)
linktitle: EV Rejseberegner (beta)
description: Planlæg og sammenlign elbilture med realistiske, fysikbaserede estimater. Vælg en tilstand (Rækkevidde, Distance eller Tid), sæt hastighed og vejr, og se hvordan forskellige biler klarer sig—samlet tid, lade­stop og energiforbrug—i ét overblik.
weight: 3
xsthumb: guides/evsearch/search_1_xst.jpg
---
<!-- markdownlint-disable MD033 -->

## Hvad den gør

* **Rækkevidde-tilstand:** Hvor langt en bil kan køre på ét ladevindue (fx 100→0 %, 100→10 %, 80→10 %) ved din valgte hastighed og forhold.
* **Distance-tilstand:** Tid, energi og **opladningsstop** for at dække en given rute­længde.
* **Tid-tilstand:** Hvor langt du kan nå inden for et tidsbudget (kørsel + ladning).
* **Enheder:** Skift mellem metriske og imperiale enheder.
* **Valgmuligheder:** Batteri-SoH (state of health), varmetabsfaktor, udstyrs-/trimniveau (hjul/dæk), samt **kørsel med anhænger** (forudindstillinger).

## Sådan virker den (overblik)

Vi kombinerer simple kørsels­fysik med kalibrering mod virkelige data:

* **Aerodynamisk modstand** (Cd × frontareal): vokser med hastighed² og **luftdensitet** (temperatur).
* **Rullemodstand** (dæk + masse): skaleres af **vejtilstand** (tørt → vådt/sne) og køretøjets masse.
* **Forbruger- og klimabelastning:** en grundbelastning plus din **HVAC**-indstilling.
* **Kalibrering:** Tilpasset WLTP og motorvejs-ankre (fx 90/120 km/t), så resultater er på **batteriniveau** (drivlinje/inverter-tab er implicit inkluderet).
* **Batteri & trim:** **SoH** (batteriets helbred), **varmetab** (ekstra tab i kulde), og **trim** (hjul/dæk).
* **Anhængerkørsel:** Lægger anhængerens masse til og en delvis **aero**-straf baseret på anhængerens frontareal og hvor meget der er uden for bilens “vindskygge”.

### Opladnings­overhead & -tab (antagelser)

* **Ekstra tid pr. stop: +5 minutter.**  
  Vi lægger en fast buffer på 5 minutter oven i den rene ladetid for at dække afkørsel fra vejen, finde en stander, tilslutning, sessionens opstart samt at komme tilbage på vejen og op i hastighed igen.
* **Ladetab: 5 %.**  
  Vi antager ~5 % energitab i selve lade­processen. Den **“tilføjede energi”** i resultaterne er det, der når **batteriet**; skærmen på laderen (og det du betaler for) er typisk omkring **5 % højere**.  
  *Eksempel:* Viser tabellen **40 kWh** tilføjet, kan du forvente cirka **42 kWh** faktureret ved laderen.

Herefter estimerer beregneren ladebehov og tider for at nå dit mål (Distance-/Tid-tilstand) og viser hvert stop med SoC (state of charge) ind→ud og tilføjede kWh.

## Det ser du i resultaterne

* Køretøj
* **Rækkevidde / Distance / Samlet energi** (afhænger af tilstand)
* **Forbrug** (Wh/km eller mi/kWh)
* **Samlet tid**
* **Opladningsstop** (antal, varigheder, SoC ind→ud, tilføjede kWh)
* Udvid rækker for detaljer pr. stop

## Vigtige forbehold & begrænsninger

Dette er et **estimat**, ikke en garanti. Faktisk forbrug/tid kan variere pga.:

* **Rutespecifikke forhold:** stigninger/fald, trafik, hastighedsgrænser, vejarbejde
* **Vejr:** vind (mod-/sidevind), nedbør, vejtemperatur/is
* **Køretøj:** dæktype/-tryk, last, tagbokse/cykelholdere, kørestil, forvarmning
* **Ladeforhold:** tilgængelighed, kø, delt effekt, stations­tilstand, betaling/apps
* **Datavariation:** fabriksdata vs. din bils kurve, batterikonditionering

Planlæg konservativt og dobbelttjek med en dedikeret ruteplanlægger før lange ture. **Ingen garanti; brug på eget ansvar.**

## Tips til bedre estimater

* Vælg en **realistisk marchhastighed** for din rute og lovgivning.
* Match **temperatur** og **vejtilstand** til vejrudsigten.
* Angiv din **SoH**, hvis batteriet er degraderet; brug **varmetab** i hård kulde.
* Vælg det **trimniveau**, du faktisk kører med.
* Ved anhænger: vælg den **anhængertype**, der passer bedst.

---

*Modelversion:* v1.0 · *Sidst opdateret:* 2025-09-20
