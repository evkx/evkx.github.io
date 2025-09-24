---
title: Elbil-reisekalkulator (beta)
linktitle: Elbil-reisekalkulator (beta)
description: Planlegg og sammenlign elbilturer med realistiske, fysikkbaserte estimater. Velg modus (Rekkevidde, Distanse eller Tid), sett fart og vær, og se hvordan ulike biler står seg—total tid, ladestopp og energibruk—i én visning.
weight: 3
xsthumb: guides/evsearch/search_1_xst.jpg
---
<!-- markdownlint-disable MD033 -->

## Hva den gjør

* **Rekkevidde-modus:** Hvor langt bilen kan kjøre på ett ladevindu (f.eks. 100→0 %, 100→10 %, 80→10 %) ved valgt fart og forhold.
* **Distanse-modus:** Tid, energi og **ladestopp** som trengs for å dekke en gitt strekning.
* **Tid-modus:** Hvor langt du kommer innenfor en tidsramme (kjøring + lading).
* **Enheter:** Bytt mellom metriske og imperiale enheter.
* **Valg:** Batteri-SoH, varmetap-faktor, trimnivå (hjul/dekk), og **trekking av tilhenger** (forhåndsvalg).

## Slik fungerer den (overordnet)

Vi kombinerer enkel kjøretøyfysikk med kalibrering mot virkelige data:

* **Luftmotstand** (Cd × frontareal): øker med fart² og **lufttetthet** (temperatur).
* **Rullemotstand** (dekk + masse): skaleres av **veiforhold** (tørt → vått/snø) og kjøretøymasse.
* **Tilleggs-/klimaforbruk:** en grunnlast pluss valgt **HVAC** (klimaanlegg/varme).
* **Kalibrering:** Tilpasset WLTP- og motorveipunkter (f.eks. 90/120 km/t), så resultater vises på **batterinivå** (drivlinje-/omformer-tap er implisitt med).
* **Batteri & trim:** **SoH** (batterihelse), **varmetap** (ekstra tap i kulde) og **trimnivå** (hjul/dekk).
* **Tilhenger:** Legger til tilhengermasse og en delvis **aero**-straff basert på tilhengerens frontareal og hvor mye som stikker utenfor bilens luftskygge.

### Lade-overhead og -tap (forutsetninger)

* **Per stopp-overhead: +5 minutter.**  
  Vi legger på 5 faste minutter i tillegg til selve ladetiden for å dekke avkjøring fra vei, finne stolpe, koble til og starte økten, samt komme tilbake på veien og opp i fart.
* **Ladetap: 5 %.**  
  Vi antar ~5 % energitap i ladeprosessen. **«Tilført energi»** i resultatene er det som når **batteriet**; skjermen på laderen (og det du betaler for) er typisk **ca. 5 % høyere**.  
  *Eksempel:* Viser tabellen **40 kWh** tilført, kan fakturert mengde være rundt **42 kWh**.

Kalkulatoren anslår deretter ladebehov og -tider for å nå målet ditt (Distanse/Tid) og lister hvert stopp med SoC inn/ut og tilførte kWh.

## Dette ser du

* Bil
* **Rekkevidde / Distanse / Total energi** (avhengig av modus)
* **Forbruk** (Wh/km eller mi/kWh)
* **Total tid**
* **Ladestopp** (antall, varigheter, SoC inn→ut, kWh tilført)
* Utvid rader for detalj per stopp

## Viktige merknader og begrensninger

Dette er et **anslag**, ikke en garanti. Faktiske resultater varierer med:

* **Rute:** stigning/helning, trafikk, fartsgrenser, veiarbeid
* **Vær:** vind (mot/side), nedbør, vegtemperatur/is
* **Kjøretøy:** dekktype/-trykk, last, takbokser/sykkelstativer, kjørestil, forvarming
* **Lading i praksis:** tilgjengelighet, kø, delt effekt, stasjonstilstand, betaling/applikasjoner
* **Datavariasjon:** fabrikkdata vs. din bils kurver, batterikondisjonering

Planlegg konservativt og bekreft lange turer i en egen ruteplanlegger. **Ingen garanti gis; bruk på eget ansvar.**

## Tips for bedre anslag

* Velg en **realistisk marsjfart** for din rute og lovverket.
* Match **temperatur** og **veiforhold** med værvarselet.
* Legg inn **SoH** hvis batteriet er degradert; bruk **varmetap-faktor** i streng kulde.
* Velg **trimnivået** du faktisk kjører.
* Ved trekking: velg nærmeste **tilhengertype**.

---

*Modellversjon:* v1.0 · *Sist oppdatert:* 2025-09-20
