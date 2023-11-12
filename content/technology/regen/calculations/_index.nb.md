---
title: Hvor mye kan regenereres?
linktitle: Regen kalkuleringer
description: De følgende scenariene bruker matematikk og fysikk for å forklare hvor betydelige fordelene med regenerativ bremsing er.
weight: 3
---
<!-- markdownlint-disable MD033 -->

Vi forklarer detaljene bak regnestykket i fysikkkapittelet. Likevel bør du vite at et objekt i bevegelse har kinetisk energi som elbilen kan gjenopprette med regenerativ bremsing. En bil i forhøyet posisjon har potensiell energi som regenerativ bremsing kan gjenvinne.

I tillegg virker aerodynamisk motstand og rullemotstand mot bilens bevegelse.

Drivverket er heller ikke uten tap, noe som betyr at drivverket mister noe energi når energien konverteres fra strøm på batteriet til bevegelse av bilen eller omvendt, fra bevegelse på kjøretøyet til strøm på batteriet. På en typisk elbil er denne effektiviteten omtrent 80-85 %. I våre beregninger bruker vi 80 %.

### Scenario 1: Pikes Peak

La oss ta Pikes Peak som et eksempel. Dette fjellet er 14,110 fot (4300 meter) høyt, men hvis du kjører ned de [første 18,6 milene](https://www.google.com/maps/dir/Pikes+Peak,+Colorado+80809,+United+States/38.9057543,-104.9779289/@38.8779104,-105.0432721,10824m/data=!3m1!1e3!4m9!4m8!1m5!1m1!1s0x8714a806033005bd:0xa67b8c79d6580c1e!2m2!1d-105.0422595!2d38.8408707!1m0!3e0), du [ har falt 6538 fot](https://www.slashgear.com/audi-e-tron-pikes-peak-recuperation-challenge-first-drive-ev-tech-07540279/) (1993 meter)

1993 meter for en Audi e-tron 55 på 2900 kg er 15,74 kWh i potensiell energi.

{{< sitefiguresized thumb="technology/regen/calculations/pikespeak_st.jpg" width="3000" height="2000" title="Kjøre ned Pikes Peak i Audi e-tron" >}}

18,6 miles er 30 km. Hastigheten ned er lav og har basert på rullemotstand og hastighet på 40km/t et energiforbruk på 10,52kWh/100km.

For 30km /18,6miles betyr dette 3,15 kWh totalt. Denne energien vil bli tatt fra den potensielle energien.

Dette betyr 12,59 kWh å regenerere. Med 80 % effektivitet vil dette bety 10,07 kWh tilbake i batteriet.

I videoen nedenfor ser du en virkelighetstest av akkurat denne turen og hvor mye de klarer å regenerere.

{{< youtube vrYRJ9TuaX0 >}}

### Scenario 2: Full stopp fra 75 mph

I dette scenariet beveger bilen seg i 75 mph (120,7 km/t) og må stoppe for rødt lys.

{{< sitefiguresized thumb="technology/regen/calculations/stop_st.jpg" width="2000" height="300" title="Making a full stop from 75mph" >}}

Som vist i grafen nedenfor gir 75 mph for en 2900 kg Audi e-tron den totale kinetiske energien på 0,473 kWh.

Med 80 % drivverkseffektivitet betyr dette at bilen vil kunne få 0,38 kWh tilbake til batteriet.

En hel tur på 100 km (62 miles) med 10 fulle stopp som dette vil da spare 3,8 kWh for den totale turen sammenlignet med en bil med kun friksjonsbremser.

Dette betyr en forbruksreduksjon på 3,8kWh/100km.

### Scenario 3: Reduser hastigheten fra 30 mph til helt stopp

{{< sitefiguresized thumb="technology/regen/calculations/fullstop_st.jpg" width="1400" height="995" title="Making a full stop from 30mph" >}}

Dette scenariet er et typisk bykjøringsscenario. Ved kjøring i 30 mph (48,28 km/t) har Audi e-tron en total kinetisk energi på 0,0756 kWh.

Basert på drivverkets effektivitet på 80 % sparer dette 0,061 kWh tilbake til batteriet.

Hvis du kjører 100 km i bytrafikk og trenger å gjøre 100 stopp som dette, sparer du 6,05 kWh energi.

Denne regenereringen reduserer energiforbruket med 6,05 kWh/100 km sammenlignet med en bil med kun [friksjonsbremser](../../brakes/).

### Scenario 4: Kjøring ned fra Saltfjellet

{{< sitefiguresized thumb="technology/regen/calculations/saltfjellet_st.jpg" width="768" height="558" title="Saltfjellet om vinteren" >}}

Dette fjellet ligger i Nord-Norge og hovedveien fra sør til nord går over det (E6).

Hvis vi tar [denne delen](https://www.google.com/maps/dir/66.6848804,15.4189889/66.8133394,15.4007768/@66.7980852,15.1624003,10z/data=43!)sm av veien starter den for å gå nedover ser vi at starten er på 650 meter (2132 fot) og den ender på 125 meter (410 fot) over havet.
Med en distanse på 16,4 km (10,2 miles), gir dette en nedgang på 3,1 %

Dette betyr potensiell energi på 4.147 kWh.

Fartsgrensen er 80 km/t (49,7 mph) og basert på standardforbruk på tørr vei, vil dette bety at denne bilen krever 2,49 kWh for å rulle denne distansen drevet av potensiell energi.

Resten kunne regenereres, og med 80 % effektivitet gir dette 1,3kWh tilbake i batteriet.

1,3 kWh skal gi 6,8 km ekstra rekkevidde i 80 km/t (49,7 mph)

## Forstå fysikken

### Kinetisk energi

Et objekt i bevegelse har kinetisk energi. Denne energien avhenger av vekten til objektet og hastigheten til objektet.

Formelen er

![\Large x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}](https://latex.codecogs.com/svg.image?KE&space;=&space;\frac{ 1}{2}mv{2})

Hvor

- KE = kinetisk energi i Joule
- m = massen til en kropp
- v = hastigheten til et legeme i meter/sekund

I tillegg er 1 Joule 2,778·10⁻⁴ Wh

I alle beregninger på denne siden bruker vi Audi e-tron 55 med en vekt på 2900kg i eksemplene (bil + sjåfør). Tabellen nedenfor viser hvor mye kinetisk energi denne bilen vil ha i vanlige hastigheter-

|Hastighet km/t | mph | m/s | Kinetisk energi |
|----|-----|-----|-----|
| 50 kmt | 31,07 mph | 13,89 m/s | 0,0777 kWh |
| 80 km/t | 49,7 mph | 22.222 m/s| 0,199 kWh |
| 104,7 km/t | 65 mph | 29,0575 m/s | 0,34 kWh |
| 120,7 km/t | 75 mph | 33,528 m/s | 0,453 kWh |

Du kan bruke denne [kinetic energy-kalkulatoren](https://www.omnicalculator.com/physics/kinetic-energy) for andre hastigheter. Se også grafen under.
### Rotasjons kinetisk energi

I tillegg til den kinetiske energien til selve bilen, inneholder hjulene som spinner på bilen også rotasjonskinetisk energi som kan regenereres.

Formelen for rotasjonsenergi

![Formel](rotational_energy.svg)

- E: den rotasjonskinetiske energien, uttrykt i Joule.
- I: treghetsmomentet til objektet, uttrykt i kg*m².
- ω: vinkelhastigheten til kroppen, uttrykt i radianer per sekund

For et hjul treghetsmoment kan beregnes

I = M * R²

For en Audi e-tron gjør vi beregningen for hjulalternativet 265/40 R22. Med en estimert vekt på 30 kg per hjul og en radius på 38,54 cm får du

I = 30 * 0,3854^2 = 4,4559948

For 80 km/t vil hjulet spinne med 566,89 rpm og den resulterende kinetiske energien vil være 8,724 Wh eller 0,008724 kWh for 4 hjul.

Merk: Dette er ikke 100 % riktig siden formelen er basert på et hjul med samme form fra senter til kant. Men det er nærme nok for denne typen beregninger.

Hvis du vil beregne, kan du prøve [Rotational Kinetic Energy-kalkulatoren](https://www.omnicalculator.com/physics/rotational-kinetic-energy)

### Gravitasjons-/potensiell energi

Potensiell energi eksisterer når bilen er plassert på et høyt sted sammenlignet med destinasjonen.

Formelen er ganske enkel.

![Gravity](gravitational_energy.svg)

- U: gravitasjonsenergi i joule
- m: masse i kg
- g: gravitasjonsfelt 9,8 m/s^2 på overflaten
- h: høyde i meter

For eksempel vil Audi e-tron 55 på 2900 kg plassert på 1000 meter (3280 fot) over havet ha en potensiell energi på 7,8998 kWh (28,492,85 Joule)

I områder med høyde vil den potensielle energien være den største kilden til regenerert energi.

Se [potensiell energikalkulator](https://www.omnicalculator.com/physics/potential-energy)

### Sammendrag

Grafen nedenfor viser den totale kinetiske energien og de to typene kinetisk energi.

{{< sitefiguresized thumb="technology/regen/calculations/kinetic_st.png" width="2965" height="1645" title="Graf over kinetisk energi" >}}

## Forstå energiforbruk

Før vi gir deg et eksempel på hvor mye energi som kan regenereres, må vi forklare energiforbruket. For dette påvirker resultatet.

### Forbruk ved aerodynamisk luftmotstand

En bil i bevegelse vil ha krefter basert på luftmotstand som vil presse mot bevegelsen.

{{< sitefiguresized thumb="technology/regen/calculations/windtunnel_st.jpg" width="3000" height="1539" title="Audi e-tron i vindtunnel" >}}

Formelen for drag er:

![Drag](dragformula.png)

- P: Lufttetthet (1,225 på bakken ved 15 °C)
- u: Hastighet i meter/sekund
- A: Frontareal på bilen (2,65m2 på Audi e-tron)
- CD: 0,28 på Audi e-tron 55

Basert på dette som eksempel. 80 km/t krever kraft på 4,9 kW (6,23 kWh/100 km) for å overvinne aerodynamisk luftmotstand

Legg merke til at kraften som trengs for å skyve en gjenstand gjennom en væske øker etter hvert som kuben av hastigheten, så en Audi e-tron 55 kjører i 160 km/t
krever 39,89 kW (24,94 kWh/100 km) for å overvinne luftmotstand.

Temperaturen påvirker tettheten. Ved -25 er tettheten 1,4224 og forbruket ved 80 km/t øker til 7,23kWh/100km.

For alle beregninger på denne artikkelen antar vi 15 °C

### Rullemotstand

I tillegg til dragkraft er det rullemotstand fra hjul og andre drivverkskomponenter som motvirker bevegelse.

Det er ikke lett å finne dette tallet, men med å kjenne totalforbruket og forbruket forårsaket av luftmotstand, og effektiviteten på drivverket er det mulig å estimere rullemotstanden på Audi e-tron.

Basert på førerhistorien virker det som å kjøre på tørr vei i 80 km/t i sommertemperatur krever rundt 19 kWh/100 km energi fra batteriet.
Hvis vi antar 80 % effektivitet i drivverket, har vi et energibehov på 15,2 kWh/100 km totalt inkludert luftmotstand.

Hvis vi tar bort energien som trengs for luftmotstand, har vi rundt 8,95 kWh/100 km for å overvinne rullemotstanden.

Dette tallet er et estimat. På våte veier eller veier med snø øker rullemotstanden.

### Forbrukssammendrag

Diagrammet nedenfor viser det beregnede forbruket som er nødvendig for å overvinne luftmotstand og rullemotstand og forbruk fra batteriet basert på 80 % effektivitet av drivverket. Den reelle effektiviteten er ikke kjent, men den forventes å være rundt 80 %.

{{< sitefiguresized thumb="technology/regen/calculations/consumption_st.png" width="2751" height="1567" title="Kalkulert forbruk" >}}

Se også [full tabell](https://media.electrichasgoneaudi.net/multimedia/guides/regen/consumptiontable.png) med kinetisk energi og forbruk for alle hastigheter fra 1–100 mph (1–161 km/t)

## Er regen alltid det beste alternativet?

Siden regenerativ bremsing bare er 80 % effektiv, er det best å unngå å bruke den når du kan. For scenario 1 er det umulig å kjøre ned Pikes Peak uten regenerativ bremsing. Hvis
du ikke bruker regen du vil krasje. Men hvis du antar flat vei på scenario 2 og 3, ville du gjort det bedre om du ser fremover og lar bilen kysse, så den bruker
rullemotstand og aerodynamisk luftmotstand for å redusere hastigheten.

Dette vil bety at du må løfte foten fra wattpedalen tidlig nok slik at du stopper på det punktet du ønsker av seg selv.

Så hvor mye energi vil det spare? To faktorer reduserer totalforbruket.

– Du vil ikke miste 20 % av den kinetiske energien ved regenering
– Du vil ikke miste 20 % av energien ved å prøve å holde farten

Teoretisk kan dette spare

- Scenario 2: 1,89 kWh/100 km
- Scenario 3: 3,02 kWh/100 km

Men dette er i beste fall hvor du kan beregne nøyaktig hvor du skal løfte foten av wattpedalen. I den virkelige verden vil denne fordelen være mindre siden du ville ende opp med å måtte legge til litt kraft eller bremse på slutten når du ikke er i stand til å beregne dette riktig.

## Kan du se i bilen hvor mye som ble regenerert?

En vanlig misforståelse er at du kan se på rekkevidden som er rapportert i bilen for å se hvor mye som ble regenerert. For de fleste biler er dette ikke mulig

Avstandsmåleren baserer sin beregning på de siste 100 km kjørt. Hvis vi tar scenario 4 og antar at bilen har blitt kjørt fra havnivå og opp til toppen i 650 meter i 80 km/t (49,7 mph) vil forbruket være 25,4 kWh/100 km ved 650 meter.

På Audi e-tron 55 med 86,5 kWh batterikapasitet vil rekkevidden beregnes til 340 km (211 miles) for et fullt batteri basert på dette forbruket.

Etter å ha kjørt nedover veistrekning scenario 4 vil det totale forbruket fra batteriet reduseres fra 25,4 kWh/100 km til 21 kWh/100 km.

Dette vil øke den beregnede rekkevidden til 411 km (255 miles) for et ladet 100 % batteri (mindre avhengig av den virkelige SOC). Basert på dette kan du feilaktig tro at du har regenerert 71 km (44 miles), men det riktige er 6,8 km. (4,2 miles)

Denne typen økning kunne du til og med se i scenarier der det ikke er noen regenerering, men bare en nedgang som reduserte forbruket.

Den eneste måten å vite hvor mye du har regenerert er å se på hvor mye ladetilstanden til batteriet endres fra topp til bunn av fjellet.

{{< sitefiguresized thumb="technology/regen/calculations/soc_st.jpg" width="1212" height="682" title="Ladetilstand, den eneste måten å se hvor mye du har regenerert på mange biler" >}}

## En pedalkjøring kontra manuell/automatisk regenerering

Avhengig av EV kan du bruke regenerative bremser på forskjellige måter

- Manuell, kun ved bruk av bremsepedalen
- Automatisk, lar bilen bestemme når den skal regenereres
-En pedal kjøring - automatisk regenerering når du løfter foten av wattpedalen

Alle metodene bruker de samme elektriske drivverkkomponentene for å bremse, så de har samme effektivitet.

Men enpedalkjøring har litt redusert effektivitet i scenarier der føreren ønsker å gå over fra å bruke strøm til frikjøring.

Siden du trenger å holde foten på pedalen i en bestemt posisjon og ikke bruke energi eller bremsing, vil du alltid bruke mer tid på å komme til denne posisjonen enn å løfte foten rett av pedalen. I tillegg krever det litt trening for å holde foten på det perfekte stedet.

Det er derfor produsenter som Audi, Mercedes, Porsche anbefaler å bruke automatisk regen med frihjul for å spare energi.

Forskjellen er liten, trolig mindre enn 10 % av forskjellen mellom frihjuling og regenerativ bremsing i scenariene der frihjuling er mulig.

Det er ingen forskjell for scenarier som scenario 1 siden du vil utføre regenerativ bremsing for å holde bilen på veien.

Siden forskjellen er så liten, bør du velge basert på dine preferanser.