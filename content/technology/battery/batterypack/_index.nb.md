---
title: Batteripakke og konfigurasjon
linktitle: Batteripakke og konfigurasjon
description: Batterisystemet kombinerer mange celler og annen kontrollelektronikk til et fullt batteri for å drive elbilen.
weight: 4
---

## Batterikonfigurasjon

I et elektrisk kjøretøy (EV) refererer batterikonfigurasjonen til arrangementet av individuelle battericeller i batteripakken. Batterikonfigurasjonen kan påvirke spenningen, kapasiteten, utgangseffekten og andre aspekter av batteripakken og den generelle kjøretøyytelsen.
Den vanligste konfigurasjonen for EV-batterier er en serie-parallell hybrid. I denne konfigurasjonen er flere celler koblet i serie for å øke batteripakkens spenning, og flere grupper av seriekoblede celler kobles deretter parallelt for å øke batteripakkens totale kapasitet.

Seriekoblingen av celler øker batteripakkens spenningsutgang, noe som er avgjørende for å gi den nødvendige kraften til å kjøre kjøretøyet. Den parallelle koblingen av cellegrupper øker batteripakkens kapasitet, noe som er avgjørende for å lagre energien som kreves for å kjøre bilen til ønsket rekkevidde.

For å beregne brutto batteripakkestørrelse, multipliser den totale parallellkapasiteten i Ah (ampere-timer) med batteripakkens nominelle spenning i volt. Resultatene er i WH watt-timer.


### Eksempel: Audi Q8 e-tron 55

Diagrammet under viser konfigurasjonen av en batterimodul fra Audi Q8 e-tron 55. Denne modulen inneholder 12 battericeller, hvorav fire er montert parallelt, og det er tre grupper av denne parallelle konfigurasjonen i serie.

<figur>
<img src="configuration1.drawio.svg" class="img-fluid mx-auto d-block">
<figcaption>
         <p class="lead text-center fw-semibold">
             3s4p-modul
         </p>
     </figcaption>
</figur>

Hver celle har en nominell spenning på 3,6667 volt og en kapasitet på 72 AH.

Tre celler i serie gir en modulspenning på 11 Volt. 4 x 72AH i parallell gir en total modulkapasitet på 72 x 4 = 288 AH. Q8 e-tron 55 har totalt 36 moduler i serie. 36 x 11 volt gir 396 volt for pakken. 396 Volt x 288 aH = 114048 Wh eller 114 kWh bruttokapasitet.


### Eksempel: Tesla Model Y Long Range

Tesla Model Y Long Range bruker 4416 celler i det lille 21700-formatet, med 96 rader og 46 celler parallelt.

Hver celle er 4,8 Ah med en nominell spenning på 3,7 Volt. 4,8ah x 46 gir totalt 220,8 ah. 96 x 3,7 Volt gir en nominell pakkespenning på 355 volt. Denne konfigurasjonen gir en bruttokapasitet på 355 * 220,8 = 78,4 kWh.


### Eksempel: Kia EV 6 Lang rekkevidde

Kia EV6 langtrekkende batteri har totalt 384 celler. Cellene er konfigurert i 192 rader, med to celler parallelt, og er strukturert i moduler med 12 celler.


<figur>
<img src="configuration3.drawio.svg" class="img-fluid mx-auto d-block">
<figcaption>
         <p class="lead text-center fw-semibold">
             6s2p modul
         </p>
     </figcaption>
</figur>


Hver celle er 55,6 AH. 2 x 55,6 = 111,2 AH. Den nominelle spenningen er 3,63 per celle. 192 x 3,63 = 696,96 volt nominelt for pakken. 696,96 * 111,2 = 77,5 kWh.


### Flere batteripakker
Her er noen konfigurasjonseksempler


<table class="table table-striped ">
    <thead>
        <tr>
        <th>Model
        </th>
        <th>Gross Capacity
        </th>
        <th>Configuration
        </th>
        <th>Nominal Voltage
    </thead>
    <tbody>
    <tr>
        <td>Audi Q8 e-tron</td>
        <td>116kWh</td>
        <td>108s4p</td>
        <td>396 Volt</td>
    </tr>
    <tr>
        <td>Audi e-tron GT</td>
        <td>93.7kWh</td>
        <td>198s2p</td>
        <td>725 Volt</td>
    </tr>
    <tr>
        <td>Kia EV6 GT</td>
        <td>77.4</td>
        <td>192s2p</td>
        <td>697 Volt</td>
    </tr>
    <tr>
        <td><a href="../../../models/nio/">Nio 100KWh Battery</a></td>
        <td>100kWh</td>
        <td>96s1p</td>
        <td>358 Volt</td>
    </tr>
    <tr>
        <td><a href="../../../models/mercedes/eqe/">Mercedes EQE</a></td>
        <td>96,12 kWh</td>
        <td>90s4p</td>
        <td>328 Volt</td>
    </tr>
    <tr>
        <td><a href="../../../models/mercedes/eqs/">Mercedes EQS</a></td>
        <td>120kWh</td>
        <td>108s4p</td>
        <td>396 Volt</td>
    </tr>
    <tr>
        <td><a href="../../../models/tesla/model_y/model_y_long_range/">Tesla Model Y Long Range</a></td>
        <td>78.1kWh</td>
        <td>96s46p</td>
        <td>357 Volt</td>
    </tr>
    <tr>
        <td>Rivan R1S Large pack</a></td>
        <td>135kWh</td>
        <td>108s72p</td>
        <td>390 Volt</td>
    </tr>
    <tr>
        <td>Rivan R1S Max pack</a></td>
        <td>149kWh</td>
        <td>108s72p</td>
        <td>390 Volt</td>
    </tr>
</tbody>
</table>

Den spesifikke batterikonfigurasjonen som brukes i en elbil avhenger av en rekke faktorer, for eksempel ønsket rekkevidde, effekt og total vekt.

{{<evkxdisplayaddarticle />}}

### 400 eller 800 volt?

Produsenter konfigurerer vanligvis pakkene til å være rundt 400 volt eller 800 volt.

En batterikonfigurasjon med høyere spenning, for eksempel et 800-volts system, kan tilby noen fordeler i forhold til et 400-voltssystem med lavere spenning, men har også potensielle ulemper. Her er noen av fordelene og ulempene med hver konfigurasjon:

#### Pros 400 Volt pakke

**Mer moden teknologi:** 400-volts batterisystemer har eksistert lenger og er mer utbredt i elektriske kjøretøy, noe som betyr at de er mer velprøvde og pålitelige.

**Lavere kostnader:** Fordi de er en mer etablert teknologi, har 400-volts batterisystemer en tendens til å være rimeligere å produsere enn høyere spenningssystemer.

**Bredt tilgjengelig ladeinfrastruktur:** Mange offentlige ladestasjoner støtter 400-volts lading, noe som gjør det lettere å finne steder å lade elbilen din. For eksempel støtter ikke Tesla Supercharger-nettverket 800 volts lading.

**Flere tilgjengelige cellekonfigurasjoner:** 400 Volt-pakker kan konfigureres på flere måter, noe som gir produsenten flere cellealternativer.

#### Cons 400 Volt pakke

**Saktere lading:** Et 400-volts batterisystem krever vanligvis lengre ladetider enn et 800-voltssystem, noe som kan være en ulempe hvis du trenger å lade kjøretøyet raskt. Denne begrensningen er fordi ladere har begrensninger på strøm. Mange ladere er begrenset til 500 ampere. 500 ampere x 400 volt = 200 kW. På en 800-volts lader med samme strømbegrensninger vil resultatet være 500 ampere x 800 volt = 400kW ladeeffekt.

**Begrenset effektuttak:** 400-volts batterisystemer kan kanskje ikke levere samme effekt som et 800-voltssystem, noe som kan begrense elbilens akselerasjon og ytelse. Denne begrensningen ser ikke ut til å være et problem med dagens modeller.

**Tyngre:** Et 400-volts batterisystem kan kreve tykkere kabler for å støtte samme ladehastighet.

#### Pros 800 Volt pakke

**Raskere lading:** Et 800-volts batterisystem kan støtte raskere ladehastighet enn et 400-voltssystem, slik at du bruker mindre tid på å lade.

**Høyere effektuttak:** Et 800-volts batterisystem kan levere mer effekt, noe som kan gi bedre akselerasjon og ytelse, men i virkeligheten er de kraftigste batteriene 400 volt, så dette er ikke en reell fordel.

**Lettere vekt:** Et 800-volts batterisystem kan kreve tynnere kabler for å støtte høyhastighetslading.

#### Cons 800 Volt pakke:

**Begrenset ladeinfrastruktur**: Færre offentlige ladestasjoner støtter for øyeblikket 800-volts lading, noe som betyr at det kan være vanskeligere å finne steder å lade elbilen med full hastighet.

For eksempel lader det største ladenettverket, Tesla Supercharger-nettverket, med maksimalt 500 volt. Lading av en 800 volt bil på disse laderne krever at EV konverterer ladespenningen til 800 volt, og konvertering vanligvis
begrenser ladehastigheten betydelig. Produsentene bruker forskjellige teknikker for denne konverteringen. Se ladekapittelet for detaljer.

**Krever mindre celler**: Siden du i det minste trenger rundt 170 celler i serie for å lage en "800 volt"-pakke, forhindrer dette bruken av de største cellene. Større celler gir høyere tetthet og mindre ledninger.

{{<evkxdisplayaddarticle />}}

## Batteripakkedesign

Det er noen standarddesign som brukes til å bygge batteripakken.

## Celle-til-modul

Cell-to-module (C2M)-design innebærer å sette sammen flere battericeller til en enkelt, selvstendig modul med integrert elektronikk og kjølesystemer. Modulene kan deretter enkelt kobles til for å danne hele batteripakken.

Hver modul har sitt eget BMS (battery management system) som overvåker og kontrollerer lading og utlading av cellene i modulen, noe som gir mer presis kontroll og overvåking av de enkelte cellene.

{{< sitefiguresized thumb="technology/battery/batterypack/module_q6_1_st.jpg" width="3000" height="1783" title="Audi Q6 e-tron batterimodul med 15 prismatiske celler" >}}

Med C2M-teknologi er flere battericeller satt sammen til en enkelt, selvstendig modul med integrert elektronikk og kjølesystemer. Modulene kan deretter enkelt kobles sammen for å danne hele batteripakken. Hver modul har sitt eget BMS (battery management system) som overvåker og kontrollerer lading og utlading av cellene i modulen, noe som gir mer presis kontroll og overvåking av de enkelte cellene.

{{< sitefiguresized thumb="technology/battery/batterypack/q6pack_1_st.jpg" width="3000" height="1924" title="Audi Q6 e-tron batteripakke med 12 moduler" >}}

### Cell-to-Module (CtM) fordeler:

**Modularitet:** CtM-design gjør at individuelle batterimoduler kan skiftes ut eller vedlikeholdes uavhengig. Hvis en modul svikter, kan den byttes ut uten at det påvirker hele batteripakken.

**Termisk styring:** Moduler gir plass til komponenter for varmestyring (som kjøleplater eller væskekjølekanaler). Dette hjelper til med å regulere celletemperaturen og sikrer optimal ytelse.

**Skalerbarhet:** CtM-design tillater fleksibilitet ved konfigurering av batteripakker. Produsenter kan justere antall moduler for å møte ulike kjøretøykrav (f.eks. rekkevidde, effekt eller størrelse).

**Sikkerhet:** Isolering av celler i moduler øker sikkerheten. Hvis en celle opplever termisk løping eller andre problemer, vil det ikke direkte påvirke naboceller.

**Produksjonseffektivitet:** Byggemoduler separat forenkler montering og kvalitetskontroll. Det muliggjør også parallell produksjon av moduler, og effektiviserer produksjonsprosessen.

{{<evkxdisplayaddarticle />}}

## Celle-til-pakke

Cell-to-pack (CTP) batterier er en ny type batteriteknologi som eliminerer behovet for batterimoduler ved å integrere cellene direkte i pakken.

Flere selskaper, som Tesla, BYD og CATL, utvikler denne teknologien.

{{< sitefiguresized thumb="technology/battery/batterypack/catl_qilin_3_st.jpg" width="2222" height="1032" title="CATL Qilin cell-to-pack batteri" >}}

BYD Blade og CATL Qilin er to eksempler på CTP-batterier. Hovedforskjellen mellom disse to batteriene er kjølesystemet deres.

{{< sitefiguresized thumb="technology/battery/cell/bladebattery_st.jpg" width="3000" height="1351" title="BYD Blade Battery" >}}

BYD Blade bruker et væskekjølesystem, mens CATL Qilin bruker et strukturelt kjølesystem. De
strukturelt kjølesystem er mer effektivt enn væskekjølesystemet som brukes i BYD Blade.


### Cell-to-Pack (CtP) fordeler:

**Enkelhet:** CtP-design eliminerer behovet for mellommoduler, noe som reduserer kompleksiteten. Batteripakken integrerer individuelle celler direkte.

**Plassutnyttelse:** Uten moduler er mer plass tilgjengelig for celler, noe som potensielt øker energitettheten.

**Kostnadseffektivitet:** Færre komponenter (ingen moduler) kan føre til kostnadsbesparelser i produksjon og montering.

**Vektreduksjon:** Eliminering av modulhus reduserer totalvekten, og forbedrer kjøretøyets effektivitet.

## Strukturell batteripakke

En strukturell batteripakke er en type batteripakke laget slik at den blir en strukturell komponent av EV.

Denne tilnærmingen kan redusere elbilens vekt ved å fjerne dupliserte strukturer mellom pakken og kjøretøystrukturen, ettersom batteripakken blir en del av kjøretøystrukturen.

Denne designen kan forbedre elbilens generelle ytelse og effektivitet. Strukturelle batteripakker er fortsatt relativt nye, men flere selskaper og forskningsinstitusjoner utforsker og utvikler dem.

Strukturelle batteripakker, en game-changer i EV-design, tilbyr mange fordeler. De reduserer vekt og kompleksitet, øker ytelsen og muliggjør sømløs integrasjon av batteriteknologi på tvers av ulike applikasjoner.

Tesla Model Y og Tesla Cybertruck er to modeller som har strukturelle pakker. Ifølge Tesla gir denne løsningen mange fordeler, som å redusere antall deler som brukes i både batteripakken og bilen betraktelig.

{{< sitefiguresized thumb="technology/battery/batterypack/teslastructuralbattery_1_st.jpg" width="1585" height="714" title="Tesla 4680 strukturell pakke sammenlignet med en tradisjonell pakke" >}}

Enda viktigere, selskapet sa at de nye cellene og strukturpakken forventes å øke modellen

Ys rekkevidde med 16 prosent og redusere bilens totalvekt med 10 prosent, noe som resulterer i forbedret akselerasjon og håndtering.

{{< sitefiguresized thumb="technology/battery/batterypack/teslastructuralbattery_2_st.jpg" width="1344" height="645" title="Tesla structural pack fungerer som gulvet på elbilen" >}}

Tesla bruker rosa polyuretanskum for å kapsle inn og sikre komponentene i den strukturelle batteripakken. Dette skummet fungerer både som en isolator og et strukturelt element, og gir stivhet og beskyttelse. Skummet sørger for at battericellene og andre kritiske komponenter forblir sikkert på plass og fungerer som en brannmur mellom ulike deler av batteripakken.

Dette skummet er sterkt som en murstein, og bidrar til den generelle strukturelle integriteten til pakken2

Videoen nedenfor viser en detaljert analyse av pakken av Munro & Associates.

{{< youtube FXpfU6I_T3w >}}

## Energitetthet på batteripakkenivå

Tabellen nedenfor viser hvordan pakketettheten har variert over tid mellom noen eksempelbatteripakker.

<table class="table table-striped border">
     <thead>
         <tr>
             <th>Pakke</th>
             <th>År</th>
             <th>Bruttokapasitet</th>
             <th>Vekt</th>
             <th>Tetthet</th>
         </tr>
     </thead>
     <tbody>
         <tr>
             <td>Tesla Roadster</td>
             <td>2010</td>
             <td>53kWh</td>
             <td>450 kg</td>
             <td>118 Wh/kg</td>
         </tr>
          <tr>
             <td>Tesla Model S</td>
             <td>2012</td>
             <td>85 kWh</td>
             <td>540 kg</td>
             <td>157 Wh/kg</td>
         </tr>
          <tr>
             <td>Tesla Model X </td>
             <td>2015</td>
             <td>75 kWh</td>
             <td>530 kg</td>
             <td>141 Wh/kg</td>
         </tr>
          <tr>
             <td>Audi e-tron 55</td>
             <td>2018</td>
             <td>95 kWh</td>
             <td>699 kg</td>
             <td>136Wh/kg</td>
         </tr>
         <tr>
             <td>Volkswagen MEB</td>
             <td>2021</td>
             <td>82kWh</td>
             <td>493 kg</td>
             <td>166Wh/kg</td>
         </tr>
           <tr>
             <td>Tesla Model 3 LFP</td>
             <td>2021</td>
             <td>60 kWh</td>
             <td>477 kg</td>
             <td>126Wh/kg</td>
         </tr>
          <tr>
             <td>Tesla Model S</td>
             <td>2022</td>
             <td>100 kWh</td>
             <td>544 kg</td>
             <td>184Wh/kg</td>
         </tr>
          <tr>
             <td>Audi Q8 e-tron 55 </td>
             <td>2022</td>
             <td>114kWh</td>
             <td>727 kg</td>
             <td>157Wh/kg</td>
         </tr>
          <tr>
             <td>Kia EV6</td>
             <td>2022</td>
             <td>77,4 kWh</td>
             <td>477 kg</td>
             <td>162Wh/kg</td>
         </tr>
          <tr>
             <td>Mercedes EQXX</td>
             <td>2022</td>
             <td>107,8 kWh</td>
             <td>495 kg</td>
             <td>217Wh/kg</td>
         </tr>
         <tr>
             <td>BYD Seal LR (LFP)</td>
             <td>2022</td>
             <td>82,56 kWh</td>
             <td>558 kg</td>
             <td>148Wh/kg</td>
         </tr>
          <tr>
             <td>Nio Semi-Solid</td>
             <td>2023</td>
             <td>150 kWh</td>
             <td>575 kg</td>
             <td>260Wh/kg</td>
         </tr>
          <tr>
             <td>Audi Q6 e-tron / Porsche Macan EV</td>
             <td>2024</td>
             <td>100 kWh</td>
             <td>570 kg</td>
             <td>175Wh/kg</td>
         </tr>
     </tbody>
</table>

Hvis du ønsker å få detaljene om flere pakker, anbefaler vi <a href="https://www.batterydesign.net/maximising-pack-energy-density/">BatteryDesign.net</a>


<div class="mt-3 mb-3">
    <a href="../cell/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i>Cellehus</strong></a>
    <a href="../batterymanagment/" class="text-decoration-none text-black float-end"><strong>Batterihåndteringssystem <i class="bi-arrow-right"></i></strong></a>
</div>
