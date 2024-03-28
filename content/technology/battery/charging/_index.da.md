---
title: Opladning
linktitle: Opladning
description: Opladning af batteriet er processen med at tilføje ny energi til batteriet.
weight: 8
navicon: bi-battery-charging
---
<!-- markdownlint-disable MD033 -->
Opladning af et EV-batteri involverer bevægelse af elektriske ladningsbærere, såsom elektroner og ioner, mellem batteriets elektroder. Batteriet består af to elektroder, en katode og en anode, adskilt af en elektrolyt.

Under opladningsprocessen strømmer elektroner fra ladekilden (f.eks. ladestation) til katoden, hvor de opbevares i katodematerialet. Samtidig strømmer positive ioner i elektrolytten fra katoden til anoden gennem separatoren.

Når batteriet er fuldt opladet, har katodematerialet sin maksimale kapacitet til at lagre elektroner, og anoden er fuldstændig udtømt for positive ioner. Batteriet er i en stabil tilstand med en stor potentialforskel mellem katoden og anoden, hvilket er det, der giver den elektriske energi, der er lagret i batteriet.

<figur>
<img src="batteryconceptcharging.drawio.svg" class="img-fluid mx-auto d-block">
<figcaption>
          <p class="lead text-center fw-semibold">
              Batteri opladning
          </p>
      </figcaption>
</figur>



Opladningsprocessen er reversibel, og under udladningen strømmer elektronerne tilbage fra katoden til anoden gennem et eksternt kredsløb, hvilket skaber en strøm af elektrisk strøm, der kan drive en elektrisk motor.

{{<evkxdisplayaddarticle />}}

### Opladningsydelse

Opladningsydelsen varierer meget mellem elbiler. Flere aspekter påvirker opladningshastigheden af ​​elbiler, de er.

{{< sitefiguresized thumb="technology/battery/charging/charging_1_st.jpg" width="1920" height="1080" title="Kia EV6 GT oplader ved Ionity" >}}

#### Pakkekonfigurationen

Pakkekonfigurationen kan påvirke opladningshastigheden. En lavspændingskonfiguration kan få dig til at ramme eksterne ladestrømgrænser. For eksempel har en 50KW DC CCS-oplader en maksimal strøm på 125A. For at få 50KW fra 125A skal du have minimum 400 Volt. Den maksimale strømgrænse vil begrænse en 300-volt-pakke til 37,5 kW opladningshastighed. (300*125)

Det er det samme med CCS HPC-opladere, da de er begrænset til 500 Amp. 400 volt ved 500 ampere er maksimalt 200KW. Opladningshastigheden for en 300 volt batteripakke vil være begrænset til 150 kW.

Volvo og Polestar hævder, at deres kommende EVS med 400 VOlt-pakker vil få 250KW opladning. Det er dog uklart, hvordan de ville klare sig med de nuværende CCS-standardgrænser.

##### 800 volt elbiler på 400 volt opladere

Med nyere biler, der bruger 800-volts batteripakker, er der et yderligere problem med, at mange højhastighedsopladere er begrænset til 400-500-volts opladning. Hvis du har en 800 volt EV, der skal konvertere spændingen fra opladeren til batteripakkens spænding, vil dette begrænse den maksimale opladningshastighed. Tesla Superchargers, verdens største ladenetværk, er begrænset til 500 volt, og alle 800-volts biler, der bruger dette netværk, er begrænset i opladningshastighed.

Der er forskellige teknikker brugt til dette.

###### Inverter

Den mest almindelige teknik er at bruge en inverter. Her har EV en inverter, der kan konvertere spændingen til at matche batterispændingen. Denne inverter har typisk en begrænsning meget lavere end den maksimale ladehastighed på 800 volt.
Et eksempel er Hyundai E-GMP-platformen, som begrænser hastigheden til 100kW ved hjælp af inverteren, mens den oplader ved 250kW ved 800 volt. Et andet eksempel er Porsche Taycan, som er begrænset til omkring 50 kW ved Superchargers med standard inverteren.

###### Bank charging

Denne teknik opdeler batteripakken i to 400-volt-pakker, mens den oplader ved 800-volt-opladere. Den nye Porsche Macan og Audi Q6 e-tron bruger denne teknik og kan lade op til 135 kW på 400 volt (270 kW på 800 volt). Et andet eksempel
Ved hjælp af bankopladning kan Tesla Cybertruck oplade op til 230 kW ved 500 Volt Superchargers.

{{< sitefiguresized thumb="technology/battery/charging/bankcharging_1_st.jpg" width="3000" height="1852" title="Audi Q6 e-tron bank charging" >}}

#### Temperatur

Batteritemperaturen kan påvirke opladningshastigheden markant. For eksempel kan BMS reducere opladningshastigheden med mere end 50 % i koldt vejr.

Denne hastighedsreduktion er grunden til, at nogle elbiler tilbyder automatisk opvarmning af batteriet, når de navigerer til en oplader eller mulighed for manuelt at udløse opvarmningen af ​​batteripakken.

Høje temperaturer kan også reducere ydeevnen. For eksempel kan BMS reducere opladningshastigheden i varmt vejr eller efter højhastighedsopladning. BMS reducerer opladningshastigheden for at lade batteriet køle af for at beskytte det.

Den optimale temperatur i et batteri til opladning er normalt omkring 25-35 grader Celsius (77-95 Fahrenheit). I sommertemperaturer vil batteriet typisk være i dette område, når du kommer til ladestationen, og du får fuld opladningshastighed.

{{< sitefiguresized thumb="technology/battery/charging/charging_2_st.jpg" width="1920" height="1080" title="Audi e-tron GT oplader om vinteren" >}}

På nogle hurtigopladningsmodeller kan en varm sommerdag med højhastighedsopladning få batteriet til at nå temperaturer, der vil få BMS til at reducere opladningshastigheden for at beskytte batteriet. Denne hastighedsreduktion sker normalt, hvis batteritemperaturen når 50-60 grader Celsius under opladning. Derfor er det essentielt med en god varmestyring, der kan komme af med varmen under opladning.

Opladningskurven for modeller på EVKX-webstedet er for <b>optimale forhold</b>:

- Temperaturen i batteriet er høj nok, så opladningshastigheden reduceres ikke på grund af lav temperatur.
- Temperaturen i batteriet bliver ikke så høj, at BMS reducerer hastigheden for beskyttelse under opladningssessionen fra 0-100 %

{{<evkxdisplayaddarticle />}}

#### BMS-software

Producenten bestemmer kurven baseret på forskellige input. Indgangene kan være batteripakkens kemi eller andre fysiske aspekter, såsom køling. Ikke desto mindre beslutter producenten ofte at balancere opladningshastigheden med batteriets levetid. Højhastighedsopladning påvirker nedbrydningen, og sænkning af hastigheden vil reducere nedbrydningen.

Nogle producenter begrænser også antallet af højhastighedsopladningssessioner i en periode. Toytota BZ4X er en model, som Toyota lancerede med en begrænsning på kun to højhastighedssessioner inden for 24 timer. Mere opladning ville være ved lav hastighed.

{{< sitefiguresized thumb="technology/battery/charging/taycancharging_1_st.jpg" width="3000" height="2669" title="Porsche Taycan opladning" >}}

Porsche Taycan er en model, hvor ejeren kan indstille en "batterivenlig" ladehastighed som maksimum for at reducere nedbrydning. En Taycan kan i starten lade op med en hastighed på op til 270KW. Med denne indstilling aktiveret er den begrænset til 200KW.

#### Eksempler på opladningshastighed

EVKX viser hver elbils ladeydelse på vores hjemmeside med grafer og beregninger baseret på ydeevne.

Følgende er nogle eksempler på elbiler med forskellige typer ladeydelse.

[Lucid Air Dream Edition Performance](/models/lucid/air/air_dream_edition_performance/chargingcurve/) er det første eksempel. Den har en ekstrem maksimal opladningshastighed på over 300kW, men falder hurtigt.

<img src="/images/models/lucid/air/air_dream_edition_performance/chargingcurve.svg" class="img-fluid">

[Kia EV6 GT](/models/kia/ev6/ev6_gt/chargingcurve/) er det næste eksempel. Denne model er en af ​​de hurtigst opladede elbiler med høj hastighed og en meget fladere kurve end Lucid Air.

<img src="/images/models/kia/ev6/ev6_gt/chargingcurve.svg" class="img-fluid">

{{<evkxdisplayaddarticle />}}

[Nissan Aryia](/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve/) Denne model har ikke en særlig høj opladningstop, men kurven er forholdsvis flad.

<img src="/images/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve.svg" class="img-fluid">

På længere ture kan ladekurven påvirke det optimale ladestop. For eksempel vil en fladere kurve gavne dem, der foretrækker længere stop, mens en kurve med høje toppe vil gavne korte stop, og du lader omkring topområdet.

For alle modeller beregner EVKX dette for dig på modelinfosiden.

<div class="mt-3 mb-3">
     <a href="../cellbalancing/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i> Cellebalancering</strong></a>
     <a href="../degredation/" class="text-decoration-none text-black float-end"><strong>Batteriforringelse <i class="bi-arrow-right"></i></strong></a>
</div>