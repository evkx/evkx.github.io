---
title: Hvordan sjekke batterihelsen
linktitle: Sjekke batteriet.
description: Det er mulig med enkel matte å kontrollere batteriets generelle helse. Denne guiden forklarer hvordan. 
weight: 1
---

Når batteriet degraderes, reduseres den tilgjengelige batterikapasiteten. Dette fører til en kortere rekkevidde.

Hvis du vet hvor mye nettokapasitet bilen din skal ha, kan du enkelt sjekke den.

Slik sjekker du batteriet

1. Lad til ca 90%
2. Koble bilen fra lader og la den stå 2-3 timer. Dette for å sikre at batteriet er skikkelig balansert. Hvis batteriet er i ubalanse vil prosenten synke i denne perioden.
3. Koble til lader igjen og lad opp til 100%
4. Ta en kjøretur og bruk minst 70% av batteriet. Prøv å holde forbruket lavt.
5. Noter deg forbruk og kjøreavstand
6. Noter deg SOC på turens slutt (ladetilstand) (prosent igjen på batteriet)
7. Beregn faktisk kapasitet

For de følgende eksemplene antar vi at du har en e-tron 55 med 86,5 kWh nettokapasitet fra fabrikken.

## Beregning i kilometer

### Km eksempel 1

Hvis du kjører 280 kilometer med et forbruk på 25kWh/100
Du begynte med 100% og endte opp med 16%.

Først beregner du den totale energien som brukes

(280 * 25)/100 = 70kWh totalt på turen.

Hvis du har 16% igjen har du brukt 84% på turen (100-16)
/
84% = 70kWh batteri.

Full kapasitet (100%) kan deretter beregnes:

(70/84)*100 = 83,333 kWh

 83.333 er batteriets faktiske kapasitet.

83,33/86,5 = 96,34%. Det betyr en reduksjon på nesten 4% fra den opprinnelige kapasiteten.

## Hva påvirker kapasiteten

Bare ett avvik fra kapasiteten betyr ikke nødvendigvis at batteriet ditt er degradert.

Hvis du har et høyt forbruk, vil det være noe tap på grunn av intern motstand.

Hvis batteriet var i ubalanse, vil det også påvirke batterikapasiteten.

For folk som liker å holde styr på dette, anbefaler vi å spore dette fra begynnelsen av eierskapet. På denne måten vil du kjenne bilen din mer.

Følgende eksempel viser statistikken fra en e-tron 55 2020v1 med 83,6 kWh kapasitet fra den var ny.

![Graph](https://media.electrichasgoneaudi.net/multimedia/guides/checkingbatteryhealth/graph1.jpg "Loggføring av tilgjengelig batteri sammenlignet med brukt energi Oslo-Trysil over tid.")

![Graph](https://media.electrichasgoneaudi.net/multimedia/guides/checkingbatteryhealth/graph2.jpg "Loggføring av tilgjengelig batteri sammenlignet med forbruk  kWh/100 km")

## Hva hvis avviket er veldig stort?

Hvis avviket er veldig stort kan det tyde på at det har oppstått en feil på batteriet og bilen må på verksted.

Da er det en stor fordel at du har beregnet dette og i større grad vet det er et avvik enn at det bare er en følelse om kortere rekkevidde.

Nedenfor er et eksempel fra bil med feil på battericelle.

![VC](https://media.electrichasgoneaudi.net/multimedia/guides/checkingbatteryhealth/vc1.jpg "Data fra bil med feil")

Her er bilen kjørt 118.1km med et forbruk på 21kWh/100km. Prosenten har gått ned fra 100% - 25%.

Beregnet som over gir dette en totalakapasitet på batteriet på 33kWh. Langt under sitt originale 86.5kWh.

Ny batterimodul ble byttet på garanti.

## Kan man heller måle hvor mye man lader?

I beregningen over bruker man mengden energi man tar ut av batteriet. Kan man ikke heller bare måle hvor mye man fyller på etter en slik kjøretur og beregne utifra det?

Grunnen til at dette blir mindre nøyaktig er at under lading forsvinner det en del energi i laderen under konverteringen fra vekselstrøm til likestrøm eller i varmetap i kabler og annet elektronikk under hurtiglading. Det er ikke mulig å vite hvor
stor dette tapet er nøyaktig.  Audi oppgir indirekte dette tapet for WLTP forbruket. WLTP forbruk er oppgitt inkludert ladetap. Når man vet hvor stort batteriet er og hvor langt man kjørte kan man regne dette ut.

På Audi e-tron oppgis minimum WLTP forbruk til 22.2kWh/100km. Samtidig oppgis rekkevidden til 441km. Når man vet at batteriet er på 86.5kWh vet man for å få 441km ut av det batteriet må man ha et forbruk på 19.6kWh/100. (86.5/4,41)
22.2/19.6 gir et tap på 13.2%. Dette er et relativt høyt tall og over det man vanligvis ser.

La oss anta at at man har ladet fra 15% - 99% og ladeboksen oppgir at man har ladet 79.15kWh. Dette betyr at å lade hele batteriet krever 94.22kWh Dette tilsvarer 8.8% over batteriet kapasitet. Sannsynligvis er batteriet kapasitet bra i henhold til spesifikasjon,
men er vanskelig å vite helt sikkert da man ikke vet varmetapet i lader/kabler.

## Hvordan beskytte batteriet?

Hvis du ønsker å leser mer hvordan man beskytter batteriet mot degradering så kan du lese [denne guiden](/nb/guides/protectingbattery/).

Hvis du ønsker å lære enda mer om batteri kan du lese vår [artikkel om batteri](../../technology/battery/).

{{% children description="true" depth="1" %}}
