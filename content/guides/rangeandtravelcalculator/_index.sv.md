---
title: Elbilsreseräknare (beta)
linktitle: Elbilsreseräknare (beta)
description: Planera och jämför elbilsresor med realistiska, fysikbaserade uppskattningar. Välj läge (Räckvidd, Sträcka eller Tid), ställ in hastighet och väder, och se hur olika bilar står sig—total tid, laddstopp och energianvändning—i en vy.
weight: 3
xsthumb: guides/evsearch/search_1_xst.jpg
---
<!-- markdownlint-disable MD033 -->

## Vad den gör

* **Räckviddsläge:** Hur långt bilen kan köra på ett laddfönster (t.ex. 100→0 %, 100→10 %, 80→10 %) vid vald hastighet och förhållanden.
* **Sträckläge:** Tid, energi och **laddstopp** som krävs för att täcka en given sträcka.
* **Tidsläge:** Hur långt du kommer inom en tidsbudget (körning + laddning).
* **Enheter:** Växla mellan metriska och imperiska enheter.
* **Alternativ:** Batteri-SoH, värmeförlustfaktor, trimnivå (hjul/däck) och **körning med släp** (förinställningar).

## Så fungerar den (övergripande)

Vi kombinerar enkel fordonsfysik med kalibrering mot verkliga data:

* **Luftmotstånd** (Cd × frontarea): ökar med hastighet² och **lufttäthet** (temperatur).
* **Rullmotstånd** (däck + massa): skalas av **väglag** (torrt → vått/snö) och fordonets massa.
* **Hjälp- och klimatlaster:** en bakgrundslast plus din **HVAC**-inställning (klimat/AC).
* **Kalibrering:** Anpassad mot WLTP och motorvägsankare (t.ex. 90/120 km/h), så resultat visas på **batterinivå** (drivline-/omvandlingsförluster ingår implicit).
* **Batteri & trim:** **SoH** (batterihälsa), **värmeförlust** (extra förluster vid kyla) och **trim** (hjul/däck).
* **Släp:** Lägger till släpets massa och en partiell **aerodynamisk** påföljd baserat på släpets frontarea och hur mycket som sticker ut utanför bilens luftskugga.

### Laddpåslag och förluster (antaganden)

* **Per-stopp-påslag: +5 minuter.**  
  Vi lägger på fasta 5 minuter utöver ren laddtid för att täcka avfart från väg, hitta stolpe, ansluta och starta laddning samt köra ut på vägen igen och upp i fart.
* **Laddförluster: 5 %.**  
  Vi antar ~5 % energiförlust i laddprocessen. **”Tillförd energi”** i resultaten är det som når **batteriet**; skärmen på laddaren (och det du debiteras för) är vanligtvis **cirka 5 % högre**.  
  *Exempel:* Visar tabellen **40 kWh** tillfört, kan debiterad mängd vara ungefär **42 kWh**.

Kalkylatorn uppskattar sedan laddbehov och tider för att nå ditt mål (Sträcka/Tid) och listar varje stopp med SoC in/ut och tillförda kWh.

## Det här ser du

* Fordon
* **Räckvidd / Sträcka / Total energi** (beroende på läge)
* **Förbrukning** (Wh/km eller mi/kWh)
* **Total tid**
* **Laddstopp** (antal, längder, SoC in→ut, tillförd kWh)
* Expandera rader för detaljer per stopp

## Viktiga notiser och begränsningar

Detta är en **uppskattning**, inte en garanti. Utfallet varierar med:

* **Rutt:** höjdprofil/backar, trafik, hastighetsgränser, vägarbeten
* **Väder:** vind (mot/sida), nederbörd, vägtemperatur/is
* **Fordon:** däcktyp/-tryck, last, takboxar/cykelhållare, körstil, förvärmning
* **Laddning i praktiken:** tillgänglighet, köer, delad effekt, stationens skick, betalning/appar
* **Datavariation:** tillverkarens siffror vs. din bils kurvor, batterikonditionering

Planera konservativt och bekräfta längre resor i en särskild ruttplanerare. **Ingen garanti lämnas; använd på egen risk.**

## Tips för bättre uppskattningar

* Ställ in en **realistisk marschhastighet** för din rutt och lagstiftning.
* Matcha **temperatur** och **väglag** med prognosen.
* Ange **SoH** om batteriet är degraderat; använd **värmeförlustfaktor** vid sträng kyla.
* Välj den **trimnivå** du faktiskt kör.
* Vid körning med släp: välj närmaste **släp-typ**.

---

*Modellversion:* v1.0 · *Senast uppdaterad:* 2025-09-20
