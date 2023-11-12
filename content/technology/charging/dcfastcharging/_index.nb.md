---
title: DC hurtiglading
linktitle: DC hurtiglading
description: DC hurtiglading er den raskeste og mest praktiske måten å lade en elbil på veien.
weight: 3
---
<!-- markdownlint-disable MD033 -->

Den bruker en høyeffekts DC (Direct Current) for å levere opptil 1000 volt og 250 ampere. Høyhastighetslading kan øke rekkevidden på opptil 200 miles på bare 20 til 30 minutter, slik at den raskt kan fylle opp et elbilbatteri for langdistansekjøring.

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/charging_1_st.jpg" width="3000" height="2001" title="BMW i4 M50 DC Hurtiglading" >}}

## DC hurtiglading tilgjengelig

DC hurtiglading kan være enkelt, tilgjengelig, komplekst og utfordrende, avhengig av hvor du bor og hvilken bil du kjører. Noen områder har svært få ladere og krever planlegging for å lage en rute med lading, mens andre har mange ladere hvor du kan stoppe og lade ved behov.

Denne tilgjengeligheten kan variere veldig mellom merkene. Mens Tesla har superladere i mange områder, er det nesten umulig å finne en ladestasjon med Chademo-plugg til din Nissan Leaf.

Nedenfor ser du alle laderplasseringer for [Electrify America](https://www.electrifyamerica.com/locate-charger/), noen svært tette områder, mens det i andre områder er mange miles/km mellom laderne.

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/chargermap_st.jpg" width="2392" height="1160" title="Electrify America charging location map 10. juni 2023" >}}

## DC hurtiglading ytelse

Ladehastigheten kan også variere mye mellom EV-modeller, ladestasjoner og til og med mellom ladeøkter.

Det er to typiske grunner til at ladehastigheten varierer mellom to ladeøkter for samme elbil på samme lader.

### Batteritemperaturen

Batteritemperaturen er den mest kritiske faktoren i batteriets ladehastighet. Den optimale batteritemperaturen er vanligvis 25-35 grader. Hvis temperaturen er for lav, vil BMS senke ladehastigheten for å beskytte batteriet. Det kan gi deg ned til bare 25 % av den optimale prisen.

Mange elbiler har nå lagt til batterioppvarming som kan aktiveres når du navigerer til en lader gjennom navigasjonssystemet eller manuelt utløser det.

### Ladekurven

Ladekurven beskriver hvor raskt en elbil kan lade for en gitt ladeprosent. Vanligvis er denne ladekurven ikke flat, noe som betyr at ved 10 % ladetilstand er ladehastigheten annerledes enn ved 80 %.

Hvordan ladekurven ser ut varierer veldig mellom modellene. Noen kan ha en flat kurve opp til 80 %, mens andre har et dypdykk i takt fra lav ladetilstand. Makshastigheten varierer fra under 100KW til over 300KW mellom modellene.

Nedenfor ser du ladekurven for Lucid Air Dream Edition Performance. Ladekurven har et dypdykk fra tidlig av. Å lade 30 % fra 50-80 % tar 20 minutter, mens å lade 30 % fra 5 %-35 % tar bare 9 minutter.

<img src="../../../models/lucid/air/air_dream_edition_performance/chargingcurve.svg" class="img-fluid">


Hvis du trenger å holde ladestoppene så korte som mulig, identifiser det optimale ladeområdet for elbilen din. EVKX.net hjelper deg med det. Vi har detaljert ladeytelsesinformasjon for hver modell i vår [EV-database](/evsearch/), med ladekurver og beregning av optimale ladestopp for de forskjellige modellene.
## Ruteplanlegging med lading

De fleste elbiler tilbyr ruteplanleggingsfunksjonalitet, inkludert DC-hurtigladingsstopp for å nå destinasjonen. Denne ruteplanleggingen er en del av [navigasjonssystemet](../../infotainment/navigation/).

Vanligvis vil du se forventet ankomstladenivå for ladestasjoner og hvor mye du må lade for å nå neste ladestasjon

## Plugg&Charge

En av hovedutfordringene elbilsjåfører står overfor er bekvemmeligheten og sikkerheten ved å lade kjøretøyene sine. For tiden trenger de fleste elbilsjåfører et RFID-kort, en app eller en kontaktløs betalingsmetode for å starte en ladeøkt på en offentlig ladestasjon. Dette kan være tungvint og tidkrevende, spesielt hvis flere ladenettverk har ulike betalingssystemer og autentiseringsmetoder.

En ny teknologi lover imidlertid å gjøre elbil-lading mye mer tilgjengelig og tryggere: plugg og lad. Plugg og lad er en funksjon i den internasjonale standarden ISO 15118, som definerer kommunikasjonsprotokollen mellom elbiler og ladestasjoner. Med plug and charge kan elbilsjåfører koble kjøretøyene sine til en kompatibel ladestasjon, og ladeøkten starter automatisk uten noen ekstra trinn eller enheter.

### Hvordan fungerer plugg og lading?

Plug and charge bruker kryptografiske sertifikater for å identifisere og autentisere elbilen og ladestasjonene. Disse sertifikatene er utstedt av pålitelige myndigheter og lagret i sikre maskinvaremoduler inne i elbilen og ladestasjonen. Når en elbil kobles til en ladestasjon som støtter plug and charge, utveksler de sertifikatene og etablerer en sikker kommunikasjonsforbindelse. Ladestasjonen verifiserer deretter elbilens identitet og autoriserer ladeøkten basert på elbilens kontrakt med mobilitetsleverandøren (MSP). MSP er enheten som gir elbilsjåføren tilgang til ladetjenester og håndterer fakturering og betaling.

Plugg- og ladeprosessen sikrer konfidensialitet, dataintegritet og autentisitet for kommunikasjonen mellom elbilen og ladestasjonen. Den muliggjør også dynamisk tariffering, lastbalansering, smart grid-integrasjon og eksterne fastvareoppdateringer. Plug and charge kan brukes til både AC- og DC-lading og trådløs lading.

[Hubject](https://www.hubject.com/) er selskapet som administrerer sertifikater basert på protokollen.## De vanligste ladenettverkene etter sted

### USA

Det er flere ladenettverk i USA for elbiler. I følge det amerikanske energidepartementet har Tesla over **1600 Supercharger-stasjoner** i USA, med over **17.000 hurtigladeporter**. Electrify America er neste i rekken, med omtrent **800 stasjoner**.

Her er noen av de største EV-ladenettverkene i USA:

– [Electrify America](https://www.electrifyamerica.com/): Det største DC-hurtigladenettverket for de fleste EV-modeller. De er åpne for alle elbiler med en CCS-ladetilkobling (industristandarden) og foreløpig de få kjøretøyene som fortsatt bruker CHAdeMO som Nissan Leaf.

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/teslasupercharger_1_st.jpg" width="3000" height="1948" title="Tesla Supercharger location" >}}

- [Tesla Superchargers](https://www.tesla.com/findus/list/superchargers/United+States): Teslas Supercharger-nettverk er det største i landet, med mindre avstand mellom stasjonene sammenlignet med Electrify America. De fleste superladere krever NACS-port på elbilen, men de bygger ut ladere med Magic Dock som støtter CCS1 elbiler. Se ladere [her](https://www.tesla.com/findus?v=2&bounds=60.61822541172234%2C-37.567384000000004%2C18.24809425121173%2C-150.406party=zoom7&filtersparty=1350.06)

– [EVgo](https://www.evgo.com/): DC hurtiglading er ikke begrenset til bilturer. EVgo har over **800 hurtigladeplasser** i 34 delstater og mer enn 65 storbyområder.

- [ChargePoint](https://driver.chargepoint.com/mapCenter/37.26709110057841/-121.95591497824141/18): ChargePoint har over **115 000 ladeplasser** over hele Nord-Amerika og Europa¹.


### Europa

Det finnes flere ladenettverk i Europa for elbiler. Her er noen av de største ladenettverkene for elbiler i Europa:

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/ionity_1_st.jpg" width="3000" height="2000" title="Ionity ladested" >}}

- Ionity: Et kraftig ladestasjonsnettverk for elbiler som muliggjør langdistansereiser over hele Europa. Det ble grunnlagt som et joint venture av BMW Group, Mercedes-Benz Group, Ford Motor Company og Volkswagen Group².

- Plugsurfing: Et europeisk nettverk du kan bruke for å lade en elbil i Europa. Med den unike nøkkelen eller kortet – som koster €9,95 – og den gratis smarttelefonappen, kan du bruke over 200 000 ladere, inkludert de fra forskjellige nettverk som Allego, EnBW, Eon, Innogy, IONITY og Vattenfall.

- Maingau: Gjennom sin EinfachStromLaden smarttelefon-app, ladebrikke eller kort kan du lade en elbil i Tyskland, Østerrike eller Sveits ved 50 000 ladepunkter med Maingau.