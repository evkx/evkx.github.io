---
title: Lading
linktitle: Lading
description: Lading av batteriet er prosessen med å tilføre ny energi til batteriet.
weight: 8
navicon: bi-battery-charging
---
<!-- markdownlint-disable MD033 -->
Lading av et EV-batteri innebærer bevegelse av elektriske ladningsbærere, som elektroner og ioner, mellom batteriets elektroder. Batteriet består av to elektroder, en katode og en anode, atskilt med en elektrolytt.

Under ladeprosessen strømmer elektroner fra ladekilden (f.eks. ladestasjon) til katoden, hvor de lagres i katodematerialet. Samtidig strømmer positive ioner i elektrolytten fra katoden til anoden gjennom separatoren.

Når batteriet er fulladet, har katodematerialet sin maksimale kapasitet til å lagre elektroner, og anoden er fullstendig tømt for positive ioner. Batteriet er i en stabil tilstand med stor potensialforskjell mellom katoden og anoden, som er det som gir den elektriske energien som er lagret i batteriet.

<figur>
<img src="batteryconceptcharging.drawio.svg" class="img-fluid mx-auto d-block">
<figcaption>
         <p class="lead text-center fw-semibold">
             Batteri lading
         </p>
     </figcaption>
</figur>



Ladeprosessen er reversibel, og under utladning strømmer elektronene tilbake fra katoden til anoden gjennom en ekstern krets, og skaper en strøm av elektrisk strøm som kan drive en elektrisk motor.

{{<evkxdisplayaddarticle />}}

### Ladeytelse

Ladeytelsen varierer mye mellom elbiler. Flere aspekter påvirker ladehastigheten til elbiler de er.

{{< sitefiguresized thumb="technology/battery/charging/charging_1_st.jpg" width="1920" height="1080" title="Kia EV6 GT lader ved Ionity" >}}

#### Pakkekonfigurasjonen

Pakkekonfigurasjonen kan påvirke ladehastigheten. En konfigurasjon som gir lav spenning kan føre til at du treffer eksterne grenser for ladestrøm. For eksempel har en 50KW DC CCS-lader en maksimal strøm på 125A. For å få 50KW fra 125A trenger du minimum 400 Volt. Den maksimale strømgrensen vil begrense en 300-volts pakke til 37,5KW ladehastighet. (300*125)

Det er det samme med CCS HPC-ladere siden de er begrenset til 500 Ampere. 400 volt på 500 Amper er maks 200KW. Ladehastigheten på en 300 volt batteripakke vil være begrenset til 150 kW.

Volvo og Polestar hevder at deres kommende EVS med 400 VOlt-pakker vil få 250KW lading. Det er imidlertid uklart hvordan de ville klare det med gjeldende CCS-standardgrenser.

##### 800 volt elbiler på 400 volt ladere

Med nyere biler som bruker 800-volts batteripakker, er det et ekstra problem med at mange høyhastighetsladere er begrenset til 400-500-volts lading. Hvis du har en 800-volts EV som trenger å konvertere spenningen fra laderen til batteripakkens spenning, vil dette begrense den maksimale ladehastigheten. Tesla Superchargers, verdens største ladenettverk, er begrenset til 500 volt, og alle 800-volts biler som bruker dette nettverket er begrenset i ladehastighet.

Det er forskjellige teknikker som brukes til dette.

###### Inverter

Den vanligste teknikken er å bruke en inverter. Her har EV en inverter som kan konvertere spenningen til å matche batterispenningen. Denne omformeren har vanligvis en begrensning som er mye lavere enn den maksimale ladehastigheten på 800 volt.
Et eksempel er Hyundai E-GMP-plattformen, som begrenser hastigheten til 100kW ved bruk av inverteren mens den lader ved 250kW ved 800 volt. Et annet eksempel er Porsche Taycan, som er begrenset til rundt 50kW på Superchargers med standard inverter.

###### Bankbelastning

Denne teknikken deler batteripakken i to 400-volts pakker mens den lader ved 800-volts ladere. Nye Porsche Macan og Audi Q6 e-tron bruker denne teknikken og kan lade opptil 135kW på 400 volt (270kW på 800 volt). Et annet eksempel
Ved å bruke banklading kan Tesla Cybertruck lade opptil 230 kW ved 500 volt superladere.

{{< sitefiguresized thumb="technology/battery/charging/bankcharging_1_st.jpg" width="3000" height="1852" title="Audi Q6 e-tron banklading" >}}

#### Temperatur

Batteritemperaturen kan påvirke ladehastigheten betydelig. For eksempel kan BMS redusere ladehastigheten med mer enn 50 % i kaldt vær.

Denne hastighetsreduksjonen er grunnen til at noen elbiler tilbyr automatisk oppvarming av batteriet når de navigerer til en lader eller muligheten for manuelt å utløse oppvarmingen av batteripakken.

Høye temperaturer kan også redusere ytelsen. For eksempel kan BMS redusere ladehastigheten i varmt vær eller etter høyhastighetslading. BMS reduserer ladehastigheten for å la batteriet kjøle seg ned for å beskytte det.

Den optimale temperaturen i et batteri for lading er vanligvis rundt 25-35 grader Celsius (77-95 Fahrenheit). I sommertemperaturer vil batteriet typisk være i dette området når du kommer til ladestasjonen, og du vil få full ladehastighet.

{{< sitefiguresized thumb="technology/battery/charging/charging_2_st.jpg" width="1920" height="1080" title="Audi e-tron GT lader om vinteren" >}}

På noen modeller med hurtiglading kan en varm sommerdag med høyhastighetslading føre til at batteriet når temperaturer som vil føre til at BMS reduserer ladehastigheten for å beskytte batteriet. Denne hastighetsreduksjonen skjer vanligvis hvis batteritemperaturen når 50-60 grader Celsius under lading. Derfor er det essensielt med god varmestyring som kan kvitte seg med varmen under lading.

Ladekurven for modeller på EVKX-nettstedet er for <b>optimale forhold</b>:

- Temperaturen i batteriet er høy nok, så ladehastigheten reduseres ikke på grunn av lav temperatur.
- Temperaturen i batteriet blir ikke så høy at BMS reduserer hastigheten for beskyttelse under ladeøkten fra 0-100 %

{{<evkxdisplayaddarticle />}}

#### BMS-programvare

Produsenten bestemmer kurven basert på ulike innganger. Inndataene kan være batteripakkens kjemi eller andre fysiske aspekter, som kjøling. Likevel bestemmer produsenten seg ofte for å balansere ladehastigheten med batteriets levetid. Høyhastighetslading påvirker degraderingen, og å senke hastigheten vil redusere degraderingen.

Noen produsenter begrenser også antall høyhastighetsladingsøkter i løpet av en periode. Toytota BZ4X er en modell som Toyota lanserte med en begrensning på kun to høyhastighetsøkter i løpet av 24 timer. Mer lading ville vært ved lav hastighet.

{{< sitefiguresized thumb="technology/battery/charging/taycancharging_1_st.jpg" width="3000" height="2669" title="Porsche Taycan lading" >}}

Porsche Taycan er en modell hvor eieren kan stille inn en "batterivennlig" ladehastighet som maks for å redusere nedbrytningen. En Taycan kan i utgangspunktet lade med opptil 270KW hastighet. Med denne innstillingen aktivert, er den begrenset til 200KW.

#### Eksempler på ladehastighet

EVKX viser ladeytelsen for hver elbil på nettstedet vårt med grafer og beregninger basert på ytelsen.

Følgende er noen eksempler på elbiler med ulike typer ladeytelse.

[Lucid Air Dream Edition Performance](/models/lucid/air/air_dream_edition_performance/chargingcurve/) er det første eksemplet. Den har en ekstrem toppladehastighet på over 300kW, men faller raskt.

<img src="/images/models/lucid/air/air_dream_edition_performance/chargingcurve.svg" class="img-fluid">

[Kia EV6 GT](/models/kia/ev6/ev6_gt/chargingcurve/) er neste eksempel. Denne modellen er en av de raskest ladede elbilene med høy hastighet og en mye flatere kurve enn Lucid Air.

<img src="/images/models/kia/ev6/ev6_gt/chargingcurve.svg" class="img-fluid">

{{<evkxdisplayaddarticle />}}

[Nissan Aryia](/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve/) Denne modellen har ikke en veldig høy topptopp, men kurven er relativt flat.

<img src="/images/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve.svg" class="img-fluid">

På lengre turer kan ladekurven påvirke det optimale ladestoppet. For eksempel vil en flatere kurve være til fordel for de som foretrekker lengre stopp, mens en kurve med høye topper er til fordel for korte stopp, og du lader rundt toppområdet.

For alle modeller beregner EVKX dette for deg på modellinfosiden.
