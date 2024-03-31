---
title: Hvor meget kan regenereres?
linktitle: Regen beregninger
description: Følgende scenarier bruger matematik og fysik til at forklare, hvor betydelige fordelene ved regenerativ bremsning er.
weight: 3
---
<!-- markdownlint-disable MD033 -->
Vi forklarer detaljerne bag beregningen i fysikkapitlet. Ikke desto mindre bør du vide, at et objekt i bevægelse har kinetisk energi, som elbilen kan genvinde med regenerativ bremsning. En bil i en forhøjet position har potentiel energi, som regenerativ bremsning kan genvinde.

Derudover påvirker aerodynamisk modstand og rullemodstand bilens bevægelse.

Drivlinjen er heller ikke tabsfri, hvilket betyder, at drivlinjen mister noget energi, når energien omdannes fra strøm på batteriet til bevægelse af bilen eller omvendt, fra bevægelse på køretøjet til strøm på batteriet. På en typisk elbil er denne effektivitet omkring 80-85%. I vores beregninger bruger vi 80 %.

### Scenario 1: Pikes Peak

Lad os tage Pikes Peak som et eksempel. Dette bjerg er 14.110 fod (4.300 meter) højt, men hvis du kører ned ad de [første 11,6 miles](https://www.google.com/maps/dir/Pikes+Peak,+Colorado+80809,+United +States /38.9057543,-104.9779289/@38.8779104,-105.0432721,10824m/data=!3m1!1e3!4m9!4m8!1m5!1m1!1s0x8714a30506bdx8c05060dx8c05060dx8c05060dx8c0560dx !2m2!1d-105.0422595!2d38.8408707!1m0!3e0), du [ er faldet 6538 fod](https://www.slashgear.com/audi-e-tron-pikes-peak-recuperation-challenge-first-drive-ev-tech-07540279/) (1993 meter)

1993 meter for en Audi e-tron 55 på 2900 kg er 15,74 kWh i potentiel energi.

{{< sitefiguresized thumb="technology/regen/calculations/pikespeak_st.jpg" width="3000" height="2000" title="Kører ned af Pikes Peak i Audi e-tron" >}}

18,6 miles er 30 km. Hastigheden ned er lav og har baseret på rullemodstand og en hastighed på 40km/t et energiforbrug på 10,52kWh/100km.

For 30 km /18,6 miles betyder det 3,15 kWh i alt. Denne energi vil blive taget fra den potentielle energi.

Det betyder 12,59 kWh at regenerere. Med 80 % effektivitet vil det betyde 10,07 kWh tilbage i batteriet.

I videoen herunder ser du en realitytest af netop denne tur og hvor meget de formår at regenerere.

{{< youtube vrYRJ9TuaX0 >}}

### Scenario 2: Fuld stop fra 75 mph

I dette scenarie kører bilen med 75 mph (120,7 km/t) og skal standse for rødt lys.

{{< sitefiguresized thumb="technology/regen/calculations/stop_st.jpg" width="2000" height="300" title="Making et punktum fra 75mph" >}}

Som vist i grafen nedenfor giver 75 mph for en 2900 kg Audi e-tron den samlede kinetiske energi på 0,473 kWh.

Med 80 % drivværkseffektivitet betyder det, at bilen vil kunne få 0,38 kWh tilbage til batteriet.

En hel tur på 100 km (62 miles) med 10 fulde stop som denne ville så spare 3,8 kWh for den samlede tur sammenlignet med en bil med kun friktionsbremser.

Det betyder en forbrugsreduktion på 3,8 kWh/100 km.

### Scenario 3: Reducer hastigheden fra 30 mph til et fuldstændigt stop

{{< sitefiguresized thumb="technology/regen/calculations/fullstop_st.jpg" width="1400" height="995" title="Making et punktum fra 30mph" >}}

Dette scenarie er et typisk bykørselsscenarie. Ved kørsel med 30 mph (48,28 km/t) har Audi e-tron en samlet kinetisk energi på 0,0756 kWh.

Baseret på drivaggregatets effektivitet på 80 % sparer dette 0,061 kWh tilbage til batteriet.

Kører du 100 km i bytrafik og skal 100 stop som dette, sparer du 6,05 kWh energi.

Denne regenerering reducerer energiforbruget med 6,05 kWh/100 km sammenlignet med en bil med kun [friktionsbremser](../../brakes/).

### Scenario 4: Kørsel ned fra Saltfjellet

{{< sitefiguresized thumb="technology/regen/calculations/saltfjellet_st.jpg" width="768" height="558" title="Saltfjellet om vinteren" >}}

Dette bjerg ligger i det nordlige Norge og hovedvejen fra syd til nord går over det (E6).

Hvis vi tager [denne del](https://www.google.com/maps/dir/66.6848804,15.4189889/66.8133394,15.4007768/@66.7980852,15.1624003,10z/data=43) går det af sted på vejen! nedad ser vi, at starten er på 650 meter (2132 fod), og den slutter på 125 meter (410 fod) over havets overflade.
Ved en afstand på 16,4 km (10,2 miles) repræsenterer dette et fald på 3,1 %

Det betyder potentiel energi på 4.147 kWh.

Hastighedsgrænsen er 80 km/t (49,7 mph), og baseret på standardforbrug på tør vej, ville dette betyde, at denne bil kræver 2,49 kWh for at rulle denne distance drevet af potentiel energi.

Resten kunne regenereres, og med 80 % effektivitet giver dette 1,3 kWh tilbage i batteriet.

1,3 kWh skulle give 6,8 km ekstra rækkevidde ved 80 km/t (49,7 mph)
## Forstå fysikken

### Kinetisk energi

Et objekt i bevægelse har kinetisk energi. Denne energi afhænger af objektets vægt og objektets hastighed.

Formlen er

![\Large x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}](https://latex.codecogs.com/svg.image?KE&space;=&space;\frac{ 1}{2}osv.{2})

Hvor

- KE = kinetisk energi i Joule
- m = massen af ​​et legeme
- v = et legemes hastighed i meter/sekund

Derudover er 1 Joule 2,778·10⁻⁴ Wh

I alle beregninger på denne side bruger vi Audi e-tron 55 med en vægt på 2900kg i eksemplerne (bil + chauffør). Tabellen nedenfor viser, hvor meget kinetisk energi denne bil vil have ved normale hastigheder-

|Hastighed km/t | mph | m/s | Kinetisk energi |
|----|-----|-----|-----|
| 50 km | 31,07 mph | 13,89 m/s | 0,0777 kWh |
| 80 km/t | 49,7 mph | 22.222 m/s| 0,199 kWh |
| 104,7 km/t | 65 mph | 29,0575 m/s | 0,34 kWh |
| 120,7 km/t | 75 mph | 33.528 m/s | 0,453 kWh |

Du kan bruge denne [kinetisk energiberegner](https://www.omnicalculator.com/physics/kinetic-energy) til andre hastigheder. Se også grafen nedenfor.
### Rotations kinetisk energi

Udover selve bilens kinetiske energi indeholder hjulene, der snurrer på bilen, også rotationskinetisk energi, som kan regenereres.

Formlen for rotationsenergi

![Formel](rotational_energy.svg)

- E: den rotationskinetiske energi, udtrykt i Joule.
- I: inertimomentet for objektet, udtrykt i kg*m².
- ω: kroppens vinkelhastighed, udtrykt i radianer pr. sekund

For et hjul kan inertimoment beregnes

I = M * R²

For en Audi e-tron laver vi beregningen for hjuloptionen 265/40 R22. Med en estimeret vægt på 30 kg pr. hjul og en radius på 38,54 cm får du

I = 30 * 0,3854^2 = 4,4559948

For 80 km/t vil hjulet dreje ved 566,89 rpm, og den resulterende kinetiske energi vil være 8,724 Wh eller 0,008724 kWh for 4 hjul.

Bemærk: Dette er ikke 100% korrekt, da formlen er baseret på et hjul med samme form fra centrum til kant. Men det er tæt nok på til denne form for beregning.

Hvis du vil beregne, så prøv [Rotational Kinetic Energy Calculator](https://www.omnicalculator.com/physics/rotational-kinetic-energy)
### Gravitationel/potentiel energi

Potentiel energi eksisterer, når bilen er placeret højt i forhold til destinationen.

Formlen er ret simpel.

![Gravity](gravitational_energy.svg)

- U: gravitationsenergi i joule
- m: masse i kg
- g: gravitationsfelt 9,8 m/s^2 på overfladen
- h: højde i meter

For eksempel ville Audi e-tron 55 på 2.900 kg placeret 1.000 meter (3.280 fod) over havets overflade have en potentiel energi på 7.8998 kWh (28.492,85 Joule)

I områder med højde vil den potentielle energi være den største kilde til regenereret energi.

Se [potential energiberegner](https://www.omnicalculator.com/physics/potential-energy)

### Resumé

Grafen nedenfor viser den samlede kinetiske energi og de to typer kinetisk energi.

{{< sitefiguresized thumb="technology/regen/calculations/kinetic_st.png" width="2965" height="1645" title="Graf over kinetisk energi" >}}

## Forstå energiforbrug

Før vi giver dig et eksempel på, hvor meget energi der kan regenereres, skal vi forklare energiforbruget. For det påvirker resultatet.

### Forbrug på grund af aerodynamisk modstand

En bil i bevægelse vil have kræfter baseret på luftmodstand, der vil skubbe mod bevægelsen.

{{< sitefiguresized thumb="technology/regen/calculations/windtunnel_st.jpg" width="3000" height="1539" title="Audi e-tron i vindtunnel" >}}

Formlen for træk er:

![Træk](dragformula.png)

- P: Luftdensitet (1,225 på jorden ved 15 °C)
- u: Hastighed i meter/sekund
- A: Forsiden af ​​bilen (2,65m2 på Audi e-tron)
- CD: 0,28 på Audi e-tron 55

Ud fra dette som eksempel. 80 km/t kræver en effekt på 4,9 kW (6,23 kWh/100 km) for at overvinde aerodynamisk modstand

Bemærk, at den kraft, der er nødvendig for at skubbe en genstand gennem en væske, stiger, når terningen af ​​hastigheden er, så en Audi e-tron 55 kører med 160 km/t
kræver 39,89 kW (24,94 kWh/100 km) for at overvinde luftmodstanden.

Temperaturen påvirker massefylden. Ved -25 er tætheden 1,4224 og forbruget ved 80 km/t stiger til 7,23kWh/100km.

For alle beregninger på denne artikel antager vi 15 °C

### Rullemodstand

Udover trækkraft er der rullemodstand fra hjul og andre drivlinjekomponenter, der modvirker bevægelse.

Det er ikke let at finde dette tal, men ved at kende det samlede forbrug og forbruget forårsaget af luftmodstand, og drivlinjens effektivitet, er det muligt at estimere rullemodstanden for Audi e-tron.

Ud fra kørselshistorien ser det ud til, at kørsel på tør vej med 80 km/t i sommertemperaturer kræver omkring 19 kWh/100 km energi fra batteriet.
Hvis vi antager 80% effektivitet i drevet, har vi et energibehov på 15,2 kWh/100 km i alt inklusive luftmodstand.

Hvis vi fjerner den nødvendige energi til luftmodstand, har vi omkring 8,95 kWh/100 km til at overvinde rullemodstanden.

Dette tal er et skøn. På våde veje eller veje med sne stiger rullemodstanden.
### Forbrugsoversigt

Diagrammet nedenfor viser det beregnede forbrug, der kræves for at overvinde luftmodstand og rullemodstand og forbrug fra batteriet baseret på 80 % drivlinjeeffektivitet. Den reelle effektivitet kendes ikke, men den forventes at være omkring 80 %.

{{< sitefiguresized thumb="technology/regen/calculations/consumption_st.png" width="2751" height="1567" title="Beregnet forbrug" >}}

Se også [fuld tabel](https://media.electrichasgoneaudi.net/multimedia/guides/regen/consumptiontable.png) med kinetisk energi og forbrug for alle hastigheder fra 1-100 mph (1-161 km/t)

## Er regen altid den bedste løsning?

Da regenerativ bremsning kun er 80 % effektiv, er det bedst at undgå at bruge det, når du kan. For scenario 1 er det umuligt at køre ned ad Pikes Peak uden regenerativ bremsning. Hvis
du ikke bruger regen du vil gå ned. Men hvis du antager en flad vej i scenarier 2 og 3, ville du gøre det bedre, hvis du ser fremad og lader bilen kysse, så den bruger
rullemodstand og aerodynamisk modstand for at reducere hastigheden.

Det vil betyde, at du skal løfte din fod fra wattpedalen tidligt nok, så du automatisk stopper på det punkt, du ønsker.

Så hvor meget energi vil det spare? To faktorer reducerer det samlede forbrug.

- Du vil ikke miste 20 % af den kinetiske energi, når du regenererer
- Du vil ikke miste 20 % af din energi ved at prøve at følge med

Teoretisk set kan dette spare

- Scenarie 2: 1,89 kWh/100 km
- Scenario 3: 3,02 kWh/100 km

Men det er i bedste fald her, du kan beregne præcis, hvor du skal løfte din fod fra wattpedalen. I den virkelige verden ville denne fordel være mindre, da du ville ende med at skulle tilføje noget kraft eller bremse i slutningen, når du ikke er i stand til at beregne dette korrekt.

## Kan du se i bilen, hvor meget der blev regenereret?

En almindelig misforståelse er, at du kan se på rækkevidden rapporteret i bilen for at se, hvor meget der blev regenereret. For de fleste biler er dette ikke muligt

Afstandsmåleren baserer sin beregning på de sidste 100 kørte km. Hvis vi tager scenario 4 og antager, at bilen er kørt fra havoverfladen op til toppen i 650 meter ved 80 km/t (49,7 mph), vil forbruget være 25,4 kWh/100 km ved 650 meter.

På Audi e-tron 55 med 86,5 kWh batterikapacitet vil rækkevidden blive beregnet til 340 km (211 miles) for et fuldt batteri baseret på dette forbrug.

Efter at have kørt ned ad vejstrækningen i scenario 4, vil det samlede forbrug fra batteriet blive reduceret fra 25,4 kWh/100 km til 21 kWh/100 km.

Dette vil øge den estimerede rækkevidde til 411 km (255 miles) for et opladet 100 % batteri (mindre afhængigt af den rigtige SOC). Baseret på dette kan du fejlagtigt tro, at du har regenereret 71 km (44 miles), men den korrekte er 6,8 km. (4,2 miles)

Du kunne endda se denne form for stigning i scenarier, hvor der ikke er nogen regenerering, men blot et fald, der reducerede forbruget.

Den eneste måde at vide, hvor meget du har regenereret, er at se, hvor meget batteriets ladetilstand ændrer sig fra toppen til bunden af ​​bjerget.

{{< sitefiguresized thumb="technology/regen/calculations/soc_st.jpg" width="1212" height="682" title="State of Charge, den eneste måde at se, hvor meget du har regenereret på mange biler" >}}

## Et pedaldrev versus manuel/automatisk regenerering

Afhængigt af EV kan du bruge regenerativ bremsning på forskellige måder

- Manuel, kun ved brug af bremsepedalen
- Automatisk, giver bilen mulighed for at bestemme, hvornår den skal regenereres
-Kørsel med én pedal - automatisk regenerering, når du løfter foden fra wattpedalen

Alle metoder bruger de samme elektriske drivlinjekomponenter til at bremse, så de har samme effektivitet.

Men kørsel med én pedal har en smule reduceret effektivitet i scenarier, hvor føreren ønsker at skifte fra at bruge elektricitet til friløb.

Da du skal holde foden på pedalen i en bestemt position og ikke bruge energi eller bremsning, vil du altid bruge mere tid på at komme til denne position end at løfte foden lige af pedalen. Derudover kræver det lidt øvelse at holde din fod på det perfekte sted.

Derfor anbefaler producenter som Audi, Mercedes, Porsche at bruge automatisk regen med friløb for at spare energi.

Forskellen er lille, sandsynligvis mindre end 10% af forskellen mellem friløb og regenerativ bremsning i de scenarier, hvor friløb er muligt.

Der er ingen forskel for scenarier som scenario 1, da du vil udføre regenerativ bremsning for at holde bilen på vejen.

Da forskellen er så lille, bør du vælge ud fra dine præferencer.

{{< pagenavigation b_url="../" b_title="Regenerativ bremsning" f_url="../../safety/" f_title="Sikkerhed" >}}