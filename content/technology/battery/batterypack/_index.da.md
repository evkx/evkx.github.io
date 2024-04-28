---
title: Batteripakke og konfiguration
linktitle: Batteripakke og konfiguration
description: Batterisystemet kombinerer mange celler og anden kontrolelektronik til et fuldt batteri for at drive elbilen.
weight: 4
------

<!-- markdownlint-disable MD033 -->
## Batterikonfiguration

I et elektrisk køretøj (EV) refererer batterikonfigurationen til arrangementet af individuelle battericeller i batteripakken. Batterikonfigurationen kan påvirke spændingen, kapaciteten, udgangseffekten og andre aspekter af batteripakken og køretøjets overordnede ydeevne.
Den mest almindelige konfiguration for EV-batterier er en serie-parallel hybrid. I denne konfiguration er flere celler forbundet i serie for at øge batteripakkens spænding, og flere grupper af serieforbundne celler forbindes derefter parallelt for at øge batteripakkens samlede kapacitet.

Serieforbindelsen af celler øger batteripakkens spændingsudgang, hvilket er afgørende for at levere den nødvendige strøm til at køre køretøjet. Den parallelle forbindelse af cellegrupper øger batteripakkens kapacitet, hvilket er afgørende for at lagre den energi, der kræves for at køre bilen til en ønsket rækkevidde.

For at beregne bruttobatteripakkens størrelse skal du gange den samlede parallelle kapacitet i Ah (ampere-timer) med batteripakkens nominelle spænding i volt. Resultaterne er i WH watt-timer.


### Eksempel: Audi Q8 e-tron 55

Nedenstående diagram viser konfigurationen af et batterimodul fra Audi Q8 e-tron 55. Dette modul indeholder 12 battericeller, hvoraf fire er monteret parallelt, og der er tre grupper af denne parallelle konfiguration i serie.

<figur>
<img src="configuration1.drawio.svg" class="img-fluid mx-auto d-block">
<figcaption>
         <p class="lead text-center fw-semibold">
             3s4p modul
         </p>
     </figcaption>
</figur>

Hver celle har en nominel spænding på 3,6667 volt og en kapacitet på 72 AH.

Tre celler i serie giver en modulspænding på 11 Volt. 4 x 72AH i parallel giver en samlet modulkapacitet på 72 x 4 = 288 AH. Q8 e-tron 55 har i alt 36 moduler i serie. 36 x 11 volt giver 396 volt til pakken. 396 Volt x 288 aH = 114048 Wh eller 114 kWh bruttokapacitet.


### Eksempel: Tesla Model Y Long Range

Tesla Model Y Long Range bruger 4416 celler i det lille 21700-format med 96 rækker og 46 celler parallelt.

Hver celle er 4,8 Ah med en nominel spænding på 3,7 Volt. 4,8ah x 46 giver i alt 220,8 ah. 96 x 3,7 Volt giver en nominel pakkespænding på 355 volt. Denne konfiguration giver en bruttokapacitet på 355 * 220,8 = 78,4 kWh.


### Eksempel: Kia EV 6 Lang rækkevidde

Kia EV6-langrækkende batteri har i alt 384 celler. Cellerne er konfigureret i 192 rækker, med to celler parallelt, og er struktureret i moduler med 12 celler.


<figur>
<img src="configuration3.drawio.svg" class="img-fluid mx-auto d-block">
<figcaption>
         <p class="lead text-center fw-semibold">
             6s2p modul
         </p>
     </figcaption>
</figur>


Hver celle er 55,6 AH. 2 x 55,6 = 111,2 AH. Den nominelle spænding er 3,63 pr. celle. 192 x 3,63 = 696,96 volt nominelt for pakken. 696,96 * 111,2 = 77,5 kWh.
### Flere eksempler på batteripakker
Her er nogle konfigurationseksempler

<table class="table table-striped border">
     <hoved>
         <tr>
         <th>Model
         </th>
         <th>Bruttokapacitet
         </th>
         <th>Konfiguration
         </th>
         <th>Nominel spænding
     </thead>
     <tbody>
     <tr>
         <td>Audi Q8 e-tron</td>
         <td>116 kWh</td>
         <td>108s4p</td>
         <td>396 volt</td>
     </tr>
     <tr>
         <td>Audi e-tron GT</td>
         <td>93,7 kWh</td>
         <td>198s2p</td>
         <td>725 volt</td>
     </tr>
     <tr>
         <td>Kia EV6 GT</td>
         <td>77.4</td>
         <td>192s2p</td>
         <td>697 volt</td>
     </tr>
     <tr>
         <td><a href="../../../models/nio/">Nio 100KWh-batteri</a></td>
         <td>100 kWh</td>
         <td>96s1p</td>
         <td>358 volt</td>
     </tr>
     <tr>
         <td><a href="../../../models/mercedes/eqe/">Mercedes EQE</a></td>
         <td>96,12 kWh</td>
         <td>90s4p</td>
         <td>328 volt</td>
     </tr>
     <tr>
         <td><a href="../../../models/mercedes/eqs/">Mercedes EQS</a></td>
         <td>120 kWh</td>
         <td>108s4p</td>
         <td>396 volt</td>
     </tr>
     <tr>
         <td><a href="../../../models/tesla/model_y/model_y_long_range/">Tesla Model Y Long Range</a></td>
         <td>78,1 kWh</td>
         <td>96s46p</td>
         <td>357 volt</td>
     </tr>
     <tr>
         <td>Rivan R1S stor pakke</a></td>
         <td>135 kWh</td>
         <td>108s72p</td>
         <td>390 volt</td>
     </tr>
     <tr>
         <td>Rivan R1S Max-pakke</a></td>
         <td>149 kWh</td>
         <td>108s72p</td>
         <td>390 volt</td>
     </tr>
       <tr>
         <td>Porsche Macan / Audi Q6</a></td>
         <td>100 kWh</td>
         <td>180s1p</td>
         <td>662 volt</td>
     </tr>
</tbody>
</table>


Den specifikke batterikonfiguration, der bruges i en EV, afhænger af en række faktorer, såsom den ønskede rækkevidde, udgangseffekt og køretøjets samlede vægt.

{{<evkxdisplayaddarticle />}}
### 400 eller 800 volt?

Producenter konfigurerer typisk pakkerne til at være omkring 400 volt eller 800 volt.

En batterikonfiguration med højere spænding, såsom et 800-volt-system, kan give nogle fordele i forhold til et 400-volt-system med lavere spænding, men har også potentielle ulemper. Her er nogle af fordelene og ulemperne ved hver konfiguration:

#### Pros 400 Volt pakke

**Mere moden teknologi:** 400-volts batterisystemer har eksisteret længere og er mere udbredt i elektriske køretøjer, hvilket betyder, at de er mere gennemprøvede og pålidelige.

**Lavere omkostninger:** Fordi de er en mere etableret teknologi, har 400-volts batterisystemer en tendens til at være billigere at producere end højspændingssystemer.

**Bredt tilgængelig opladningsinfrastruktur:** Mange offentlige ladestationer understøtter 400-volts opladning, hvilket gør det nemmere at finde steder at oplade din elbil. For eksempel understøtter Tesla Supercharger-netværket ikke 800 volt opladning.

**Flere tilgængelige cellekonfigurationer:** 400 Volt-pakker kan konfigureres på flere måder, hvilket giver producenten flere cellemuligheder.

#### Cons 400 Volt pakke

**Langsommere opladning:** Et 400 volt batterisystem kræver typisk længere opladningstid end et 800 volt system, hvilket kan være en ulempe, hvis du skal oplade dit køretøj hurtigt. Denne begrænsning skyldes, at opladere har begrænsninger på strøm. Mange opladere er begrænset til 500 ampere. 500 ampere x 400 volt = 200 kW. På en 800 volt oplader med de samme strømbegrænsninger ville resultatet være 500 ampere x 800 volt = 400 kW ladeeffekt.

**Begrænset udgangseffekt:** 400-volts batterisystemer kan muligvis ikke levere den samme effekt som et 800-volt system, hvilket kan begrænse elbilens acceleration og ydeevne. Denne begrænsning ser ikke ud til at være et problem med nuværende modeller.

**Tyngre:** Et 400 volt batterisystem kan kræve tykkere kabler for at understøtte den samme opladningshastighed.

#### Pros 800 Volt pakke

**Hurtigere opladning:** Et 800 volt batterisystem kan understøtte hurtigere opladningshastighed end et 400 volt system, så du bruger mindre tid på at oplade.

**Højere effektudgang:** Et 800 volt batterisystem kan levere mere effekt, hvilket kan give bedre acceleration og ydeevne, men i virkeligheden er de kraftigste batterier 400 volt, så dette er ikke en reel fordel.

**Lettere vægt:** Et 800-volt batterisystem kan kræve tyndere kabler for at understøtte højhastighedsopladning.

#### Cons 800 Volt pakke:

**Begrænset opladningsinfrastruktur**: Færre offentlige ladestationer understøtter i øjeblikket 800 volt opladning, hvilket betyder, at det kan være sværere at finde steder at oplade din elbil ved fuld hastighed.

Eksempelvis lader det største ladenetværk, Tesla Supercharger-netværket, maksimalt 500 volt. Opladning af en 800 volt bil på disse opladere kræver, at EV konverterer opladerspændingen til 800 volt, og konvertering typisk
begrænser opladningshastigheden væsentligt. Producenterne bruger forskellige teknikker til denne konvertering. Se kapitlet om opladning for detaljer.

**Kræver mindre celler**: Da du i det mindste skal bruge omkring 170 celler i serie for at skabe en "800 volt"-pakke, forhindrer dette brugen af de største celler. Større celler giver højere tæthed og mindre ledninger.

{{<evkxdisplayaddarticle />}}
## Batteripakkedesign

Der er nogle standarddesigns, der bruges til at bygge batteripakken.

## Celle-til-modul

Celle-til-modul-design (C2M) involverer at samle flere battericeller til et enkelt, selvstændigt modul med integreret elektronik og kølesystemer. Modulerne kan derefter nemt forbindes for at danne den komplette batteripakke.

Hvert modul har sit eget BMS (battery management system), der overvåger og styrer opladningen og afladningen af cellerne i modulet, hvilket giver mulighed for mere præcis styring og overvågning af de enkelte celler.

{{< sitefiguresized thumb="technology/battery/batterypack/module_q6_1_st.jpg" width="3000" height="1783" title="Audi Q6 e-tron batterimodul med 15 prismatiske celler" >}}

Med C2M-teknologi er flere battericeller samlet i et enkelt, selvstændigt modul med integreret elektronik og kølesystemer. Modulerne kan derefter nemt forbindes sammen til den komplette batteripakke. Hvert modul har sit eget BMS (battery management system), der overvåger og styrer opladningen og afladningen af cellerne i modulet, hvilket giver mulighed for mere præcis styring og overvågning af de enkelte celler.

{{< sitefiguresized thumb="technology/battery/batterypack/q6pack_1_st.jpg" width="3000" height="1924" title="Audi Q6 e-tron batteripakke med 12 moduler" >}}

### Cell-to-Module (CtM) fordele:

**Modularitet:** CtM-design tillader, at individuelle batterimoduler kan udskiftes eller serviceres uafhængigt. Hvis et modul svigter, kan det skiftes ud uden at påvirke hele batteripakken.

**Termisk styring:** Moduler giver plads til varmestyringskomponenter (såsom køleplader eller væskekølekanaler). Dette hjælper med at regulere celletemperaturen og sikrer optimal ydeevne.

**Skalerbarhed:** CtM-design tillader fleksibilitet ved konfiguration af batteripakker. Producenter kan justere antallet af moduler for at opfylde forskellige køretøjskrav (f.eks. rækkevidde, effekt eller størrelse).

**Sikkerhed:** Isolering af celler i moduler øger sikkerheden. Hvis en celle oplever termisk flugt eller andre problemer, vil det ikke direkte påvirke naboceller.

**Produktionseffektivitet:** Opbygning af moduler separat forenkler montering og kvalitetskontrol. Det muliggør også parallel produktion af moduler, hvilket strømliner fremstillingsprocessen.

{{<evkxdisplayaddarticle />}}

## Celle-til-pakke

Cell-to-pack (CTP) batterier er en ny type batteriteknologi, der eliminerer behovet for batterimoduler ved at integrere cellerne direkte i pakken.

Flere virksomheder, såsom Tesla, BYD og CATL, udvikler denne teknologi.

{{< sitefiguresized thumb="technology/battery/batterypack/catl_qilin_3_st.jpg" width="2222" height="1032" title="CATL Qilin cell-to-pack batteri" >}}

BYD Blade og CATL Qilin er to eksempler på CTP-batterier. Den største forskel mellem disse to batterier er deres kølesystem.

{{< sitefiguresized thumb="technology/battery/cell/bladebattery_st.jpg" width="3000" height="1351" title="BYD Blade Battery" >}}

BYD Blade bruger et væskekølesystem, mens CATL Qilin bruger et strukturelt kølesystem. Det
det strukturelle kølesystem er mere effektivt end det flydende kølesystem, der bruges i BYD Blade.
### Cell-to-Pack (CtP) fordele:

**Simpelt:** CtP-design eliminerer behovet for mellemmoduler, hvilket reducerer kompleksiteten. Batteripakken integrerer direkte individuelle celler.

**Rumudnyttelse:** Uden moduler er mere plads tilgængelig til celler, hvilket potentielt øger energitætheden.

**Omkostningseffektivitet:** Færre komponenter (ingen moduler) kan føre til omkostningsbesparelser i produktion og montage.

**Vægtreduktion:** Eliminering af modulhuse reducerer den samlede vægt, hvilket forbedrer køretøjets effektivitet.

## Strukturel batteripakke

En strukturel batteripakke er en type batteripakke, der er skabt, så den bliver en strukturel komponent i EV.

Denne tilgang kan reducere elbilens vægt ved at fjerne dobbelte strukturer mellem pakken og køretøjets struktur, da batteripakken bliver en del af køretøjets struktur.

Dette design kan forbedre elbilens generelle ydeevne og effektivitet. Strukturelle batteripakker er stadig relativt nye, men flere virksomheder og forskningsinstitutioner udforsker og udvikler dem.

Strukturelle batteripakker, en game-changer i EV-design, tilbyder mange fordele. De reducerer vægt og kompleksitet, øger ydeevnen og letter sømløs integration af batteriteknologi på tværs af forskellige applikationer.

Tesla Model Y og Tesla Cybertruck er to modeller, der har strukturelle pakker. Ifølge Tesla byder denne løsning på mange fordele, såsom at reducere antallet af dele, der bruges i både batteripakken og bilen markant.

{{< sitefiguresized thumb="technology/battery/batterypack/teslastructuralbattery_1_st.jpg" width="1585" height="714" title="Tesla 4680 Strukturel pakke sammenlignet med en traditionel pakke" >}}

Endnu vigtigere sagde virksomheden, at de nye celler og den strukturelle pakke forventes at øge Model Y's rækkevidde med 16 procent og reducere bilens samlede vægt med 10 procent, hvilket resulterer i forbedret acceleration og håndtering.

{{< sitefiguresized thumb="technology/battery/batterypack/teslastructuralbattery_2_st.jpg" width="1344" height="645" title="Tesla-strukturpakke fungerer som gulvet på elbilen" >}}

Tesla bruger pink polyurethanskum til at indkapsle og fastgøre komponenterne i den strukturelle batteripakke. Dette skum fungerer som både en isolator og et strukturelt element, hvilket giver stivhed og beskyttelse. Skummet sikrer, at battericellerne og andre kritiske komponenter forbliver sikkert på plads og fungerer som en firewall mellem forskellige sektioner af batteripakken.

Dette skum er så stærkt som en mursten, hvilket bidrager til pakkens overordnede strukturelle integritet2

Nedenstående video viser en detaljeret analyse af pakken af Munro & Associates.

{{< youtube FXpfU6I_T3w >}}

## Energitæthed på batteripakkeniveau

Følgende tabel viser, hvordan pakningsdensiteten har varieret over tid mellem nogle eksempler på batteripakker.

<table class="table table-striped border">
    <thead>
        <tr>
            <th>Pack</th>
            <th>Year</th>
            <th>Gross Capacity</th>
            <th>Weight</th>
            <th>Density</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Tesla Roadster</td>
            <td>2010</td>
            <td>53kWh</td>
            <td>450kg</td>
            <td>118 Wh/kg</td>
        </tr>
         <tr>
            <td>Tesla Model S</td>
            <td>2012</td>
            <td>85kWh</td>
            <td>540kg</td>
            <td>157 Wh/kg</td>
        </tr>
         <tr>
            <td>Tesla Model X </td>
            <td>2015</td>
            <td>75kWh</td>
            <td>530kg</td>
            <td>141 Wh/kg</td>
        </tr>
         <tr>
            <td>Audi e-tron 55</td>
            <td>2018</td>
            <td>95kWh</td>
            <td>699kg</td>
            <td>136Wh/kg</td>
        </tr>
        <tr>
            <td>Volkswagen MEB</td>
            <td>2021</td>
            <td>82kWh</td>
            <td>493kg</td>
            <td>166Wh/kg</td>
        </tr>
          <tr>
            <td>Tesla Model 3 LFP</td>
            <td>2021</td>
            <td>60kWh</td>
            <td>477kg</td>
            <td>126Wh/kg</td>
        </tr>
         <tr>
            <td>Tesla Model S</td>
            <td>2022</td>
            <td>100kWh</td>
            <td>544kg</td>
            <td>184Wh/kg</td>
        </tr>
         <tr>
            <td>Audi Q8 e-tron 55 </td>
            <td>2022</td>
            <td>114kWh</td>
            <td>727kg</td>
            <td>157Wh/kg</td>
        </tr>
         <tr>
            <td>Kia EV6</td>
            <td>2022</td>
            <td>77.4kWh</td>
            <td>477kg</td>
            <td>162Wh/kg</td>
        </tr>
         <tr>
            <td>Mercedes EQXX</td>
            <td>2022</td>
            <td>107.8kWh</td>
            <td>495kg</td>
            <td>217Wh/kg</td>
        </tr>
        <tr>
            <td>BYD Seal LR (LFP)</td>
            <td>2022</td>
            <td>82.56kWh</td>
            <td>558kg</td>
            <td>148Wh/kg</td>
        </tr>
         <tr>
            <td>Nio Semi-Solid</td>
            <td>2023</td>
            <td>150kWh</td>
            <td>575kg</td>
            <td>260Wh/kg</td>
        </tr>
         <tr>
            <td>Audi Q6 e-tron / Porsche Macan EV</td>
            <td>2024</td>
            <td>100kWh</td>
            <td>570kg</td>
            <td>175Wh/kg</td>
        </tr>
    </tbody>
</table>

Hvis du ønsker at få detaljerne om flere pakker, anbefaler vi <a href="https://www.batterydesign.net/maximising-pack-energy-density/">BatteryDesign.net</a>

{{< pagenavigation b_url="../cell/" b_title="Celle format" f_url="../batterymanagment/" f_title="Batteristyring" >}}