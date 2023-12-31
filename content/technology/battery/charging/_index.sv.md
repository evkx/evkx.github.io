---
title: Laddar
linktitle: Laddar
description: Att ladda batteriet är processen att tillföra ny energi till batteriet.
weight: 8
navicon: bi-battery-charging
---
<!-- markdownlint-disable MD033 -->
Att ladda ett elbilsbatteri innebär att elektriska laddningsbärare, såsom elektroner och joner, rör sig mellan batteriets elektroder. Batteriet består av två elektroder, en katod och en anod, åtskilda av en elektrolyt.

Under laddningsprocessen strömmar elektroner från laddningskällan (t.ex. laddstationen) till katoden, där de lagras i katodmaterialet. Samtidigt strömmar positiva joner i elektrolyten från katoden till anoden genom separatorn.

När batteriet är fulladdat har katodmaterialet sin maximala kapacitet att lagra elektroner, och anoden är helt utarmad på positiva joner. Batteriet är i ett stabilt tillstånd med stor potentialskillnad mellan katoden och anoden, vilket är det som tillhandahåller den elektriska energin som lagras i batteriet.

<figur>
<img src="batteryconceptcharging.drawio.svg" class="img-fluid mx-auto d-block">
<figcaption>
         <p class="lead text-center fw-semibold">
             Batteri lading
         </p>
     </figcaption>
</figur>

Laddningsprocessen är reversibel, och under urladdningen strömmar elektronerna tillbaka från katoden till anoden genom en extern krets, vilket skapar ett flöde av elektrisk ström som kan driva en elektrisk motor.

{{<evkxdisplayaddarticle />}}

### Laddningsprestanda

Laddningsprestanda varierar kraftigt mellan elbilar. Flera aspekter påverkar laddningshastigheten för elbilar de är.

{{< sitefiguresized thumb="technology/battery/charging/charging_1_st.jpg" width="1920" height="1080" title="Kia EV6 GT laddar vid Ionity" >}}

#### Paketkonfigurationen

Paketkonfigurationen kan påverka laddningshastigheten. En konfiguration som ger låg spänning kan göra att du når externa laddningsströmgränser. Till exempel har en 50KW DC CCS-laddare en maximal ström på 125A. För att få 50KW från 125A behöver du minst 400 Volt. Den maximala strömgränsen kommer att begränsa ett 300-voltspaket till 37,5KW laddningshastighet. (300*125)

Det är samma sak med CCS HPC-laddare eftersom de är begränsade till 500 Amp. 400 volt vid 500 ampere är max 200 kW. Laddningshastigheten för ett 300 volts batteri kommer att begränsas till 150 kW.

Volvo och Polestar hävdar att deras kommande EVS med 400 VOlt-paket kommer att få 250KW laddning. Det är dock oklart hur de skulle klara sig med nuvarande CCS-standardgränser.

#### Temperatur

Batteritemperaturen kan påverka laddningshastigheten avsevärt. Till exempel kan BMS minska laddningshastigheten med mer än 50 % i kallt väder.

Denna hastighetsminskning är anledningen till att vissa elbilar erbjuder automatisk uppvärmning av batteriet när du navigerar till en laddare eller möjligheten att manuellt utlösa uppvärmningen av batteripaketet.

Höga temperaturer kan också minska prestandan. Till exempel kan BMS minska laddningshastigheten i varmt väder eller efter höghastighetsladdning. BMS minskar laddningshastigheten för att låta batteriet svalna för att skydda det.

{{<evkxdisplayaddarticle />}}

#### BMS-programvara

Tillverkaren bestämmer kurvan utifrån olika indata. Ingångarna kan vara batteripaketets kemi eller andra fysiska aspekter, såsom kylning. Ändå bestämmer sig tillverkaren ofta för att balansera laddningshastigheten med batteritiden. Höghastighetsladdning påverkar försämringen, och sänkning av hastigheten minskar försämringen.

Vissa tillverkare begränsar också antalet höghastighetsladdningssessioner under en period. Toytota BZ4X är en modell som Toyota lanserade med en begränsning på endast två höghastighetssessioner inom 24 timmar. Mer laddning skulle vara vid låg hastighet.

{{< sitefiguresized thumb="technology/battery/charging/taycancharging_1_st.jpg" width="3000" height="2669" title="Porsche Taycan laddning" >}}

Porsche Taycan är en modell där ägaren kan ställa in en "batterivänlig" laddningshastighet som max för att minska nedbrytningen. En Taycan kan initialt ladda med en hastighet på upp till 270KW. Med den här inställningen aktiverad är den begränsad till 200KW.

#### Exempel på laddningshastighet

EVKX visar laddningsprestanda för varje elbil på vår hemsida med grafer och beräkningar baserade på prestanda.

Nedan följer några exempel på elbilar med olika typer av laddningsprestanda.

[Lucid Air Dream Edition Performance](/models/lucid/air/air_dream_edition_performance/chargingcurve/) är det första exemplet. Den har en extrem toppladdningshastighet på över 300kW, men sjunker snabbt.

<img src="/models/lucid/air/air_dream_edition_performance/chargingcurve.svg" class="img-fluid">

[Kia EV6 GT](/models/kia/ev6/ev6_gt/chargingcurve7/) är nästa exempel. Denna modell är en av de snabbast laddade elbilarna med hög hastighet och en mycket plattare kurva än Lucid Air.

<img src="/models/kia/ev6/ev6_gt/chargingcurve.svg" class="img-fluid">

{{<evkxdisplayaddarticle />}}

[Nissan Aryia](/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve/) Denna modell har inte en särskilt hög laddningstopp, men kurvan är relativt platt.

<img src="/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve.svg" class="img-fluid">

Vid längre resor kan laddningskurvan påverka det optimala laddningsstoppet. En plattare kurva gynnar till exempel de som föredrar längre stopp, medan en kurva med höga toppar gynnar korta stopp och du laddar runt toppområdet.

För alla modeller beräknar EVKX detta åt dig på modellinfosidan.

<div class="mt-3 mb-3">
    <a href="../" class="btn btn-outline-secondary">Artikelöversikt <i class="bi-card-list"></i></a>
    <a href="../degredation/" class="btn btn-primary float-end">Degredation <i class="bi-arrow-right-circle"></i></a>
</div>
