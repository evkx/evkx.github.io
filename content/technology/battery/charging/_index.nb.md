---
title: EV-lading forklart: Teknologi, ytelse og faktorer i praksis
linktitle: Lading
description: Å lade batteriet er prosessen med å tilføre ny energi til batteriet.
weight: 8
navicon: bi-battery-charging
---

<!-- markdownlint-disable MD033 -->

Å lade et elbilbatteri innebærer å føre strøm inn i batteriet, hvor det lagres som kjemisk energi. Dette skjer gjennom bevegelse av elektroner og ioner mellom batteriets to elektroder: katoden og anoden, adskilt av en elektrolytt.

Under lading strømmer elektroner fra strømkilden (f.eks. en ladestasjon) til katoden. Samtidig beveger positive ioner seg fra katoden til anoden gjennom elektrolytten. Når batteriet er fulladet, lagrer det energi ved å opprettholde en høy spenningsforskjell mellom terminalene, klar til å drive kjøretøyet.

<figure>
<img src="https://media.evkx.net/multimedia/technology/battery/charging/batteryconceptcharging.drawio.svg" class="img-fluid mx-auto d-block">
<figcaption>
    <p class="lead text-center fw-semibold">
        Batterilading
    </p>
</figcaption>
</figure>

Prosessen er reversibel. Under utladning strømmer elektroner fra anoden til katoden gjennom en ekstern krets, og genererer strøm som driver den elektriske motoren.

{{<evkxdisplayaddarticle />}}

## Ladeytelse

Ladeytelsen varierer betydelig mellom elbilmodeller og påvirkes av flere sentrale faktorer:

{{< sitefiguresized thumb="technology/battery/charging/charging_1_st.jpg" width="1920" height="1080" title="Kia EV6 GT lader hos Ionity" >}}

### Batteripakkens konfigurasjon

Spenningsnivået i batteripakken påvirker maksimal ladekapasitet. For eksempel krever en 50 kW DC CCS-lader som leverer 125 A minst 400 V for å nå full effekt. En 300 V-pakke vil være begrenset til 37,5 kW (300 V × 125 A).

De fleste CCS høyeffektsladere (HPC) er begrenset til 500 A. Det betyr at en 400 V-pakke kan støtte opptil 200 kW, mens en 300 V-pakke er begrenset til 150 kW.

Modeller som Volvo EX90, Polestar 3 og Nio EL8 oppgir støtte for 250 kW lading på 400 V-arkitektur, men det forutsetter ladere som ikke er begrenset til 500 A.

#### 800 V-elbiler på 400 V-ladere

800 V-elbiler kan være begrenset av eldre 400–500 V-ladere. For eksempel er Tesla Superchargers begrenset til 500 V, noe som reduserer ladehastigheten for 800 V-kjøretøy.

Noen elbiler, som Mercedes CLA, har ikke mulighet til å lade på 400 V-ladere.

##### Invertorteknikk

Noen elbiler bruker ombord-invertere for å konvertere spenning og tilpasses ulike ladertyper. Dette er spesielt nyttig når 800 V-kjøretøy kobles til eldre 400 V-ladere. Inverteren øker spenningen internt, slik at bilen kan lade selv om laderen ikke støtter 800 V utgang.

Denne spenningskonverteringen har imidlertid effektivitetsbegrensninger, noe som fører til lavere maksimal ladehastighet. Den nøyaktige ytelsen avhenger av bilens inverterarkitektur og kjølesystem.

**Eksempler på maksimal hastighet med inverterspenning**:

<div class="overflow-x-auto mt-4">
  <table class="min-w-full border border-gray-300 text-sm text-left text-gray-800">
    <thead class="bg-gray-100">
      <tr>
        <th class="px-4 py-2 border-b">Modell</th>
        <th class="px-4 py-2 border-b">Plattform</th>
        <th class="px-4 py-2 border-b">800 V-pakke</th>
        <th class="px-4 py-2 border-b">Maks effekt på 400 V DC-lader</th>
        <th class="px-4 py-2 border-b">Merknader</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-white">
        <td class="px-4 py-2 border-b">Hyundai Ioniq 5</td>
        <td class="px-4 py-2 border-b">E‑GMP</td>
        <td class="px-4 py-2 border-b">Ja</td>
        <td class="px-4 py-2 border-b">~100 kW</td>
        <td class="px-4 py-2 border-b">Dobbel invertorsystem</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-2 border-b">Porsche Taycan</td>
        <td class="px-4 py-2 border-b">J1</td>
        <td class="px-4 py-2 border-b">Ja</td>
        <td class="px-4 py-2 border-b">~50 kW</td>
        <td class="px-4 py-2 border-b">Standard ombord-inverter, raskere tilgjengelig</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-2 border-b">Lucid Gravity</td>
        <td class="px-4 py-2 border-b">LEAP</td>
        <td class="px-4 py-2 border-b">Ja</td>
        <td class="px-4 py-2 border-b">~225 kW</td>
        <td class="px-4 py-2 border-b">Bruker drive unit-inverter</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-2 border-b">Smart #5</td>
        <td class="px-4 py-2 border-b">EPA</td>
        <td class="px-4 py-2 border-b">Ja</td>
        <td class="px-4 py-2 border-b">~80 kW</td>
        <td class="px-4 py-2 border-b"></td>
      </tr>
    </tbody>
  </table>
</div>

Lucid Gravity inkorporerer et avansert inverter‑boost‑system som muliggjør høyspenning (926 V) lading fra lavspente kilder som Tesla V3 (~500 V) Superchargers. Det gjør dette ved å integrere en boost-konverter i bakhjulsmotorens drivverk–med bruk av motorens stator og SiC-transistorer for å øke spenningen–uten å øke vekten betydelig (~5 kg ekstra) eller gå på kompromiss med kjølingen.

##### Bank-lading

Denne metoden deler batteriet inn i to 400 V-seksjoner. Modeller som Audi Q6 e-tron og Porsche Macan støtter opptil 135 kW på 400 V og opptil 270 kW på 800 V. Tesla Cybertruck kan nå 230 kW på 500 V Superchargers.

{{< sitefiguresized thumb="technology/battery/charging/bankcharging_1_st.jpg" width="3000" height="1852" title="Audi Q6 e-tron banklading" >}}

### Temperatur

Batteritemperatur påvirker ladehastigheten betydelig. I kaldt vær kan lading gå over 50 % tregere på grunn av begrensninger i Battery Management System (BMS). Mange elbiler forvarmer batteriet når navigasjon går mot en lader.

I varmt vær kan BMS også begrense lading for å unngå overoppheting. Optimalt temperaturområde for lading er 25–35 °C. Over 50–60 °C kan lading reduseres for å beskytte batteriets helse.

{{< sitefiguresized thumb="technology/battery/charging/charging_2_st.jpg" width="1920" height="1080" title="Audi e-tron GT lader om vinteren" >}}

Elbiler med hurtiglading krever effektive termiske styringssystemer for å opprettholde ideell batteritemperatur under økter. EVKX ladegrafer reflekterer **optimale forhold**:

* Batteritemperaturen er høy nok for maksimal hastighet.
* Batteriet forblir innen sikre grenser gjennom en 0–100 % økt.

{{<evkxdisplayaddarticle />}}

### BMS-programvare

BMS-programvare former også ladekurvene. Produsenter balanserer ladehastighet mot batteriets levetid. Siden høy hastighet akselererer degradering, begrenser noen elbiler ladekraft eller antall høy-effekt økter.

For eksempel:

* Toyota BZ4X tillater kun to høyhastighetsøkter per 24 timer.
* Porsche Taycan lar brukere begrense ladeeffekten (f.eks. fra 270 kW til 200 kW) for å redusere slitasje.

{{< sitefiguresized thumb="technology/battery/charging/taycancharging_1_st.jpg" width="3000" height="2669" title="Porsche Taycan lader" >}}

### Ladehastighet – eksempler

EVKX tilbyr reell ladeytelse-data og grafer for hver elbilmodell:

* [Zeekr 7x Long Range AWD](/models/zeekr/7x/7x_long_range_awd/chargingcurve/): Over 430 kW topp.
  Denne modellen krever mer enn 650 A for full hastighet. På 400 V-ladere er den begrenset til 80 kW. Ladekurvediagrammet viser alle tre scenarier.
  <img src="https://evkx.net/models/zeekr/7x/7x_long_range_awd/chargingcurve/chart/?battery=0" class="img-fluid">

* [Kia EV6 GT](/models/kia/ev6/ev6_gt/chargingcurve/): Høy topphastighet med flatt kurveløp, ideelt for langdistanse.
  <img src="https://evkx.net/models/kia/ev6/ev6_gt/chargingcurve/chart/?battery=0" class="img-fluid">

* [Nissan Ariya](/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve/): Moderat topphastighet men jevn kurve.
  <img src="/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve/chart/?battery=0" class="img-fluid">

### Avsluttende tanker

På lange turer er kurvens form viktig. Flate kurver gir lengre, mer konsistente stopp, mens topp-tunge kurver gagner raske påfyll. EVKX hjelper deg å sammenligne og forstå hver modells ytelse i praksis.
