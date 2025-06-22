---
title: Laddning av elbilar förklarad: teknik, prestanda och verkliga faktorer
linktitle: Laddning
description: Att ladda batteriet innebär att tillföra ny energi till batteriet.
weight: 8
navicon: bi-battery-charging
---

<!-- markdownlint-disable MD033 -->

Att ladda ett elbilsbatteri innebär att föra in elektricitet i batteriet, där det lagras som kemisk energi. Detta sker genom rörelse av elektroner och joner mellan batteriets två elektroder: katod och anod, separerade av en elektrolyt.

Under laddning strömmar elektroner från strömkällan (t.ex. en laddstation) till katoden. Samtidigt rör sig positiva joner från katoden till anoden genom elektrolyten. När batteriet är fulladdat lagras energin genom en hög potentialskillnad mellan polerna, redo att driva fordonet.

<figure>
<img src="https://media.evkx.net/multimedia/technology/battery/charging/batteryconceptcharging.drawio.svg" class="img-fluid mx-auto d-block">
<figcaption>
    <p class="lead text-center fw-semibold">
        Batteriladdning
    </p>
</figcaption>
</figure>

Processen är reversibel. Vid urladdning strömmar elektroner från anoden till katoden genom en yttre krets och genererar ström till elmotorn.

{{<evkxdisplayaddarticle />}}

## Laddningsprestanda

Laddningsprestanda varierar kraftigt mellan olika elbilsmodeller och påverkas av flera viktiga faktorer:

{{< sitefiguresized thumb="technology/battery/charging/charging\_1\_st.jpg" width="1920" height="1080" title="Kia EV6 GT laddar vid Ionity" >}}

### Batterikonfiguration

Batteripackets spänning påverkar maximal laddhastighet. En 50 kW DC CCS-laddare som ger 125 A kräver exempelvis minst 400 V för att leverera full effekt. Ett 300 V-paket begränsas då till 37,5 kW (300 V × 125 A).

De flesta CCS HPC-laddare är också begränsade till 500 A. Det innebär att ett 400 V-paket klarar upp till 200 kW, medan ett 300 V-paket begränsas till 150 kW.

Modeller som Volvo EX90, Polestar 3 och Nio EL8 uppger att de stöder 250 kW laddning på 400 V-arkitektur, men det kräver laddare som inte är begränsade till 500 V.

#### 800-voltsbilar på 400-voltsladdare

800V-bilar kan begränsas av äldre 400–500 V-laddare. Tesla Superchargers är till exempel begränsade till 500 V, vilket sänker laddhastigheten för 800 V-fordon.

##### Inverterns funktion

Vissa elbilar använder inbyggda växelriktare för att höja spänningen. Dessa system begränsar ofta den totala effekten. Exempel:

* Hyundai E-GMP-modeller: ~100 kW max på 400 V-laddare  
* Porsche Taycan: ~50 kW på Superchargers med standardinverter

##### Bankladdning

Denna metod delar upp batteriet i två 400 V-sektioner. Modeller som Audi Q6 e-tron och Porsche Macan klarar upp till 135 kW vid 400 V och upp till 270 kW vid 800 V. Tesla Cybertruck kan nå 230 kW på 500 V Superchargers.

{{< sitefiguresized thumb="technology/battery/charging/bankcharging\_1\_st.jpg" width="3000" height="1852" title="Audi Q6 e-tron med bankladdning" >}}

### Temperatur

Batteritemperaturen påverkar laddhastigheten avsevärt. I kallt väder kan laddningen minska med över 50 % på grund av begränsningar i batterihanteringssystemet (BMS). Många elbilar förvärmer batteriet automatiskt när en laddare anges i navigationen.

Vid varmt väder kan BMS också strypa laddningen för att förhindra överhettning. Optimal laddningstemperatur ligger mellan 25–35 °C. Över 50–60 °C kan laddningen minska för att skydda batteriet.

{{< sitefiguresized thumb="technology/battery/charging/charging\_2\_st.jpg" width="1920" height="1080" title="Audi e-tron GT laddar på vintern" >}}

Elbilar med snabbladdning måste ha effektiv termisk hantering för att hålla batteriet inom ideal temperatur under laddning.

EVKX:s laddkurvor visar **optimala förhållanden**:

* Batteritemperaturen är tillräckligt hög för maximal hastighet  
* Batteriet hålls inom säkra gränser under en 0–100 % laddsession

{{<evkxdisplayaddarticle />}}

### BMS-programvara

BMS-programvaran påverkar också laddkurvan. Tillverkare balanserar laddhastighet mot batteriets livslängd. Eftersom snabbladdning påskyndar nedbrytningen, begränsar vissa elbilar hastigheten eller antalet högeffektsladdningar.

Exempel:

* Toyota BZ4X tillåter endast två snabbladdningar per dygn  
* Porsche Taycan låter användare begränsa laddhastigheten (t.ex. från 270 kW till 200 kW) för att minska slitage

{{< sitefiguresized thumb="technology/battery/charging/taycancharging\_1\_st.jpg" width="3000" height="2669" title="Porsche Taycan laddar" >}}

### Exempel på laddhastigheter

EVKX tillhandahåller verklig ladddata och diagram för varje elbilsmodell:

* [Zeekr 7x Long Range AWD](/models/zeekr/7x/7x_long_range_awd/chargingcurve/): Över 430 kW i topp.

  Denna modell kräver över 650 A för full hastighet. På 400 V-laddare är den begränsad till 80 kW. Laddkurvdiagrammet visar alla tre scenarier.

  <img src="https://evkx.net/models/zeekr/7x/7x_long_range_awd/chargingcurve/chart/?battery=0" class="img-fluid">

* [Kia EV6 GT](/models/kia/ev6/ev6_gt/chargingcurve/): Hög toppfart med platt kurva – perfekt för långresor.

  <img src="https://evkx.net/models/kia/ev6/ev6_gt/chargingcurve/chart/?battery=0" class="img-fluid">

* [Nissan Ariya](/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve/): Måttlig topp, men stabil kurva.

  <img src="/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve/chart/?battery=0" class="img-fluid">

### Slutsats

På längre resor spelar laddkurvans form stor roll. Platta kurvor möjliggör längre, stabila stopp, medan toppiga kurvor ger snabba påfyllningar. EVKX hjälper dig jämföra och förstå verklig laddprestanda för varje modell.
