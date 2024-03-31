---
title: Hur mycket kan regenereras?
linktitle: Regen beräkningar
description: Följande scenarier använder matematik och fysik för att förklara hur betydande fördelarna med regenerativ bromsning är.
weight: 3
---
<!-- markdownlint-disable MD033 -->
Vi förklarar detaljerna bakom beräkningen i fysikkapitlet. Ändå bör du veta att ett föremål i rörelse har kinetisk energi som elbilen kan återvinna med regenerativ bromsning. En bil i högt läge har potentiell energi som regenerativ bromsning kan återvinna.

Dessutom påverkar aerodynamiskt motstånd och rullmotstånd bilens rörelse.

Drivlinan är inte heller förlustfri, vilket gör att drivlinan förlorar en del energi när energin omvandlas från ström på batteriet till rörelse av bilen eller vice versa, från rörelse på fordonet till ström på batteriet. På en typisk elbil är denna verkningsgrad cirka 80-85%. I våra beräkningar använder vi 80 %.

### Scenario 1: Pikes Peak

Låt oss ta Pikes Peak som ett exempel. Detta berg är 14 110 fot (4 300 meter) högt, men om du kör ner de [första 18,6 milen](https://www.google.com/maps/dir/Pikes+Peak,+Colorado+80809,+United+States/38.9057543,-104.9779289/@38.8779104,-105.0432721,10824m/data=!3m1!1e3!4m9!4m8!1m5!1m1!1s0x8714a806033005bd:0xa67b8c79d6580c1e!2m2!1d-105.0422595!2d38.8408707!1m0!3e0), du [ har falt 6538 fot](https://www.slashgear.com/audi-e-tron-pikes-peak-recuperation-challenge-first-drive-ev-tech-07540279/) (1993 meter)
1993 meter för en Audi e-tron 55 på 2900 kg är 15,74 kWh i potentiell energi.

{{< sitefiguresized thumb="technology/regen/calculations/pikespeak_st.jpg" width="3000" height="2000" title="Kör ner Pikes Peak i Audi e-tron" >}}

18,6 miles är 30 km. Hastigheten ner är låg och har, baserat på rullmotstånd och en hastighet på 40km/h, en energiförbrukning på 10,52kWh/100km.

För 30 km /18,6 mil betyder detta totalt 3,15 kWh. Denna energi kommer att tas från den potentiella energin.

Det innebär 12,59 kWh att regenerera. Med 80 % verkningsgrad kommer detta att innebära 10,07 kWh tillbaka i batteriet.

I videon nedan ser du ett verklighetstest av just denna resa och hur mycket de lyckas regenerera.

{{< youtube vrYRJ9TuaX0 >}}

### Scenario 2: Full stopp från 75 mph

I det här scenariot färdas bilen i 75 mph (120,7 km/h) och måste stanna för rött ljus.

{{< sitefiguresized thumb="technology/regen/calculations/stop_st.jpg" width="2000" height="300" title="Making a punktum from 75mph" >}}

Som visas i grafen nedan ger 75 mph för en 2900 kg Audi e-tron den totala kinetiska energin på 0,473 kWh.

Med 80% drivlinseffektivitet betyder det att bilen kommer att kunna få tillbaka 0,38 kWh till batteriet.

En hel resa på 100 km (62 miles) med 10 punkter som denna skulle då spara 3,8 kWh för den totala resan jämfört med en bil med enbart friktionsbromsar.

Det innebär en förbrukningsminskning på 3,8kWh/100km.

### Scenario 3: Minska hastigheten från 30 mph till ett helt stopp

{{< sitefiguresized thumb="technology/regen/calculations/fullstop_st.jpg" width="1400" height="995" title="Making a punktum from 30mph" >}}

Detta scenario är ett typiskt stadskörningsscenario. Vid körning i 30 mph (48,28 km/h) har Audi e-tron en total kinetisk energi på 0,0756 kWh.

Baserat på drivlinans effektivitet på 80 % sparar detta 0,061 kWh tillbaka till batteriet.

Kör du 10 mil i stadstrafik och behöver göra 100 stopp så här sparar du 6,05 kWh energi.

Denna regenerering minskar energiförbrukningen med 6,05 kWh/100 km jämfört med en bil med endast [friktionsbromsar](../../broms/).

### Scenario 4: Kör ner från Saltfjellet

{{< sitefiguresized thumb="technology/regen/calculations/saltfjellet_st.jpg" width="768" height="558" title="Saltfjellet på vintern" >}}

Detta berg ligger i norra Norge och huvudvägen från söder till norr går över det (E6).

Om vi ​​tar [denna del](https://www.google.com/maps/dir/66.6848804,15.4189889/66.8133394,15.4007768/@66.7980852,15.1624003,10z/data=43) så börjar det! nedåt ser vi att starten är på 650 meter (2132 fot) och den slutar på 125 meter (410 fot) över havet.
På ett avstånd av 16,4 km (10,2 miles) motsvarar detta en minskning med 3,1 %

Det innebär potentiell energi på 4 147 kWh.

Hastighetsgränsen är 80 km/h (49,7 mph) och baserat på standardförbrukning på torr väg skulle detta innebära att denna bil kräver 2,49 kWh för att rulla denna sträcka driven av potentiell energi.

Resten skulle kunna regenereras, och med 80 % verkningsgrad ger detta 1,3 kWh tillbaka till batteriet.

1,3 kWh bör ge 6,8 km extra räckvidd vid 80 km/h (49,7 mph)

## Förstå fysiken

### Rörelseenergi

Ett föremål i rörelse har kinetisk energi. Denna energi beror på föremålets vikt och föremålets hastighet.

Formeln är

![\Large x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}](https://latex.codecogs.com/svg.image?KE&space;=&space;\frac{ 1}{2}mv{2})

Var

- KE = kinetisk energi i joule
- m = massan av en kropp
- v = en kropps hastighet i meter/sekund

Dessutom är 1 Joule 2,778·10⁻⁴ Wh

I alla beräkningar på denna sida använder vi Audi e-tron 55 med en vikt på 2900kg i exemplen (bil + förare). Tabellen nedan visar hur mycket kinetisk energi denna bil kommer att ha vid normala hastigheter-

|Hastighet km/t | mph | m/s | Kinetisk energi |
|----|-----|-----|-----|
| 50 kmt | 31,07 mph | 13,89 m/s | 0,0777 kWh |
| 80 km/t | 49,7 mph | 22.222 m/s| 0,199 kWh |
| 104,7 km/t | 65 mph | 29,0575 m/s | 0,34 kWh |
| 120,7 km/t | 75 mph | 33,528 m/s | 0,453 kWh |
Du kan använda denna [kinetic energy calculator](https://www.omnicalculator.com/physics/kinetic-energy) för andra hastigheter. Se även grafen nedan.

### Roterande kinetisk energi

Utöver själva bilens kinetiska energi innehåller hjulen som snurrar på bilen även rotationskinetisk energi som kan regenereras.

Formeln för rotationsenergi

![Formel](rotational_energy.svg)

- E: den rotationskinetiska energin, uttryckt i joule.
- I: objektets tröghetsmoment, uttryckt i kg*m².
- ω: kroppens vinkelhastighet, uttryckt i radianer per sekund

För ett hjul kan tröghetsmoment beräknas

I = M * R²

För en Audi e-tron gör vi beräkningen för hjulalternativet 265/40 R22. Med en uppskattad vikt på 30 kg per hjul och en radie på 38,54 cm får du

I = 30 * 0,3854^2 = 4,4559948

För 80 km/h kommer hjulet att snurra vid 566,89 rpm och den resulterande kinetiska energin blir 8,724 Wh eller 0,008724 kWh för 4 hjul.

Obs: Detta är inte 100% korrekt eftersom formeln är baserad på ett hjul med samma form från mitten till kanten. Men det är tillräckligt nära för den här typen av beräkningar.

Om du vill beräkna, prova [Rotational Kinetic Energy Calculator](https://www.omnicalculator.com/physics/rotational-kinetic-energy)

### Potentiell gravitationsenergi

Potentiell energi finns när bilen placeras på en hög plats jämfört med destinationen.

Formeln är ganska enkel.

![Gravity](gravitational_energy.svg)

- U: gravitationsenergi i joule
- m: massa i kg
- g: gravitationsfält 9,8 m/s^2 på ytan
- h: höjd i meter

Till exempel skulle Audi e-tron 55 på 2 900 kg placerad på 1 000 meter (3 280 fot) över havet ha en potentiell energi på 7 8998 kWh (28 492,85 joule)

I områden med höjd över havet kommer den potentiella energin att vara den största källan till regenererad energi.

Se [potentiell energikalkylator](https://www.omnicalculator.com/physics/potential-energy)

### Sammanfattning

Grafen nedan visar den totala kinetiska energin och de två typerna av kinetisk energi.

{{< sitefiguresized thumb="technology/regen/calculations/kinetic_st.png" width="2965" height="1645" title="Graph of kinetic energy" >}}

## Förstå energiförbrukningen

Innan vi ger dig ett exempel på hur mycket energi som kan återskapas behöver vi förklara energiförbrukningen. För det här påverkar resultatet.

### Förbrukning på grund av aerodynamiskt motstånd

En bil i rörelse kommer att ha krafter baserade på luftmotstånd som kommer att trycka mot rörelsen.

{{< sitefiguresized thumb="technology/regen/calculations/windtunnel_st.jpg" width="3000" height="1539" title="Audi e-tron i vindtunnel" >}}

Formeln för drag är:

![Dra](dragformula.png)

- P: Luftdensitet (1,225 på marken vid 15 °C)
- u: Hastighet i meter/sekund
- A: Frontarea på bilen (2,65m2 på Audi e-tron)
- CD: 0,28 på Audi e-tron 55

Utifrån detta som exempel. 80 km/h kräver en effekt på 4,9 kW (6,23 kWh/100 km) för att övervinna aerodynamiskt motstånd

Observera att kraften som behövs för att trycka ett föremål genom en vätska ökar när kuben av hastigheten, så en Audi e-tron 55 färdas i 160 km/h
kräver 39,89 kW (24,94 kWh/100 km) för att övervinna luftmotstånd.

Temperaturen påverkar densiteten. Vid -25 är densiteten 1,4224 och förbrukningen vid 80 km/h ökar till 7,23kWh/100km.

För alla beräkningar på denna artikel antar vi 15 °C

### Rullmotstånd

Förutom dragkraft finns det rullmotstånd från hjul och andra drivlinans komponenter som motverkar rörelse.

Det är inte lätt att hitta denna siffra, men genom att känna till den totala förbrukningen och förbrukningen som orsakas av luftmotståndet och drivlinans effektivitet är det möjligt att uppskatta rullmotståndet för Audi e-tron.

Utifrån körhistoriken verkar det som att körning på torr väg i 80 km/h i sommartemperaturer kräver cirka 19 kWh/100 km energi från batteriet.
Om vi ​​antar 80% verkningsgrad i drivningen har vi ett energibehov på 15,2 kWh/100 km totalt inklusive luftmotstånd.

Om vi ​​tar bort energin som behövs för luftmotstånd har vi cirka 8,95 kWh/100 km för att övervinna rullmotståndet.

Denna siffra är en uppskattning. På våta vägar eller vägar med snö ökar rullmotståndet.

### Förbrukningsöversikt

Diagrammet nedan visar den beräknade förbrukningen som krävs för att övervinna luftmotstånd och rullmotstånd samt förbrukning från batteriet baserat på 80 % drivlinans effektivitet. Den verkliga effektiviteten är inte känd, men den förväntas ligga runt 80 %.

{{< sitefiguresized thumb="technology/regen/calculations/consumption_st.png" width="2751" height="1567" title="Beräknad förbrukning" >}}

Se även [fullständig tabell](https://media.electrichasgoneaudi.net/multimedia/guides/regen/consumptiontable.png) med kinetisk energi och förbrukning för alla hastigheter från 1–100 mph (1–161 km/h)

## Är regen alltid det bästa alternativet?

Eftersom regenerativ bromsning bara är 80 % effektiv är det bäst att undvika att använda den när du kan. För scenario 1 är det omöjligt att köra nerför Pikes Peak utan regenerativ bromsning. Om
du använder inte regen du kommer att krascha. Men om du antar en platt väg i scenario 2 och 3, skulle du klara dig bättre om du tittar framåt och låter bilen kyssas, så den använder
rullmotstånd och aerodynamiskt motstånd för att minska hastigheten.

Detta kommer att innebära att du måste lyfta foten från wattpedalen tillräckligt tidigt så att du automatiskt stannar vid den punkt du vill.

Så hur mycket energi kommer det att spara? Två faktorer minskar den totala förbrukningen.

– Du kommer inte att förlora 20 % av den kinetiska energin när du regenererar
– Du vill inte förlora 20 % av din energi genom att försöka hänga med

Teoretiskt kan detta spara

- Scenario 2: 1,89 kWh/100 km
- Scenario 3: 3,02 kWh/100 km

Men det är i bästa fall här du kan räkna ut exakt var du ska lyfta foten från wattpedalen. I den verkliga världen skulle denna fördel vara mindre eftersom du skulle behöva lägga till lite kraft eller bromsa i slutet när du inte kan beräkna detta korrekt.

## Kan du se i bilen hur mycket som regenererades?

En vanlig missuppfattning är att man kan titta på räckvidden som rapporterats i bilen för att se hur mycket som regenererats. För de flesta bilar är detta inte möjligt

Avståndsmätaren baserar sin beräkning på de senaste 100 km som körts. Om vi ​​tar scenario 4 och antar att bilen har körts från havsnivån upp till toppen i 650 meter i 80 km/h (49,7 mph) blir förbrukningen 25,4 kWh/100 km vid 650 meter.

På Audi e-tron 55 med 86,5 kWh batterikapacitet kommer räckvidden att beräknas till 340 km (211 miles) för ett fullt batteri baserat på denna förbrukning.

Efter att ha kört nerför scenario 4 vägsträcka kommer den totala förbrukningen från batteriet att minska från 25,4 kWh/100 km till 21 kWh/100 km.

Detta kommer att öka den beräknade räckvidden till 411 km (255 miles) för ett laddat 100 % batteri (mindre beroende på den verkliga SOC). Baserat på detta kan du av misstag tro att du har regenererat 71 km (44 miles), men den korrekta är 6,8 km. (4,2 miles)

Du kan till och med se denna typ av ökning i scenarier där det inte finns någon förnyelse, utan bara en nedgång som minskade konsumtionen.

Det enda sättet att veta hur mycket du har regenererat är att se hur mycket batteriets laddningstillstånd ändras från toppen till botten av berget.

{{< sitefiguresized thumb="technology/regen/calculations/soc_st.jpg" width="1212" height="682" title="State of Charge, det enda sättet att se hur mycket du har regenererat på många bilar" >}}


## En pedaldrift kontra manuell/automatisk regenerering

Beroende på EV kan du använda regenerativ bromsning på olika sätt

- Manuell, endast vid användning av bromspedalen
- Automatisk, låter bilen bestämma när den ska regenereras
-En pedalkörning - automatisk regenerering när du lyfter foten från wattpedalen

Alla metoder använder samma elektriska drivlina komponenter för att bromsa, så de har samma effektivitet.

Men körning med en pedal har något minskad effektivitet i scenarier där föraren vill byta från att använda el till frihjul.

Eftersom du behöver hålla foten på pedalen i en viss position och inte använda energi eller bromsning, kommer du alltid att lägga mer tid på att komma till denna position än att lyfta foten rakt från pedalen. Dessutom krävs det lite övning för att hålla foten på den perfekta platsen.

Det är därför tillverkare som Audi, Mercedes, Porsche rekommenderar att man använder automatisk regen med frihjul för att spara energi.

Skillnaden är liten, troligen mindre än 10 % av skillnaden mellan frihjulsdrift och regenerativ bromsning i de scenarier där frihjuling är möjlig.

Det är ingen skillnad för scenarier som scenario 1 eftersom du kommer att utföra regenerativ bromsning för att hålla bilen på vägen.

Eftersom skillnaden är så liten bör du välja utifrån dina preferenser.


{{< pagenavigation b_url="../" b_title="Regenerativ bromsning" f_url="../../safety/" f_title="Säkerhet" >}}