---
title: DC hurtig opladning
linktitle: DC hurtig opladning
description: DC hurtigopladning er den hurtigste og mest bekvemme måde at oplade en elbil på på vejen.
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

<img src="/images/models/lucid/air/air_dream_edition_performance/chargingcurve.svg" class="img-fluid">


Hvis du har brug for at holde ladestop så korte som muligt, skal du identificere det optimale ladeområde til din elbil. EVKX.net hjælper dig med det. Vi har detaljerede oplysninger om ladeydelse for hver model i vores [EV-database](/evsearch/), med ladekurver og beregning af optimale ladestop for de forskellige modeller.

## Ruteplanlægning med opladning

De fleste elbiler tilbyder ruteplanlægningsfunktionalitet, herunder DC-hurtigopladningsstop for at nå din destination. Denne ruteplanlægning er en del af [navigationssystemet](../../infotainment/navigation/).

Normalt vil du se det forventede ankomstafgiftsniveau for ladestationer, og hvor meget du skal oplade for at nå den næste ladestation

## Plug&Charge

En af de største udfordringer, som elbilchauffører står over for, er bekvemmeligheden og sikkerheden ved at oplade deres køretøjer. I øjeblikket har de fleste elbilchauffører brug for et RFID-kort, en app eller en kontaktløs betalingsmetode for at starte en opladningssession på en offentlig ladestation. Dette kan være besværligt og tidskrævende, især hvis flere opladningsnetværk har forskellige betalingssystemer og autentificeringsmetoder.

En ny teknologi lover dog at gøre opladning af elbiler meget mere tilgængelig og mere sikker: plug and charge. Plug and charge er en funktion af den internationale standard ISO 15118, som definerer kommunikationsprotokollen mellem elbiler og ladestandere. Med plug and charge kan elbilchauffører tilslutte deres køretøjer til en kompatibel ladestation, og opladningssessionen starter automatisk uden yderligere trin eller enheder.

### Hvordan virker plug and charge?

Plug and charge bruger kryptografiske certifikater til at identificere og autentificere elbilen og ladestationerne. Disse certifikater udstedes af betroede myndigheder og opbevares i sikre hardwaremoduler inde i elbilen og ladestationen. Når en elbil er tilsluttet en ladestation, der understøtter plug and charge, udveksler de certifikaterne og etablerer en sikker kommunikationsforbindelse. Ladestationen verificerer derefter elbilens identitet og autoriserer opladningssessionen baseret på elbilens kontrakt med mobilitetsudbyderen (MSP). MSP'en er den enhed, der giver elbilisten adgang til ladetjenester og håndterer fakturering og betaling.

Plug and charge processen sikrer fortrolighed, dataintegritet og autenticitet for kommunikationen mellem elbilen og ladestationen. Det muliggør også dynamisk tarifering, belastningsbalancering, smart grid-integration og fjernfirmwareopdateringer. Plug and charge kan bruges til både AC og DC opladning og trådløs opladning.

[Hubject](https://www.hubject.com/) er virksomheden, der administrerer certifikater baseret på protokollen.## De mest almindelige opladningsnetværk efter placering

### Forenede Stater

Der er flere opladningsnetværk i USA for elbiler. Ifølge det amerikanske energiministerium har Tesla over **1.600 Supercharger-stationer** i USA med over **17.000 hurtigopladningsporte**. Electrify America er næste i rækken med cirka **800 stationer**.

Her er nogle af de største el-opladningsnetværk i USA:

– [Electrify America](https://www.electrifyamerica.com/): Det største DC-hurtigopladningsnetværk for de fleste EV-modeller. De er åbne for alle elbiler med en CCS-opladningsforbindelse (industristandarden) og i øjeblikket de få køretøjer, der stadig bruger CHAdeMO såsom Nissan Leaf.

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/teslasupercharger_1_st.jpg" width="3000" height="1948" title="Tesla Supercharger location" >}}

- [Tesla Superchargers](https://www.tesla.com/findus/list/superchargers/United+States): Teslas Supercharger-netværk er det største i landet, med mindre afstand mellem stationerne sammenlignet med Electrify America. De fleste superladere kræver en NACS-port på elbilen, men de bygger opladere med Magic Dock, der understøtter CCS1-elbiler. Se opladere [her](https://www.tesla.com/findus?v=2&bounds=60.61822541172234%2C-37.567384000000004%2C18.24809425121173%2C-150.606party=zoom156party=zoom156party=zoom106party=zoom106)&filter

– [EVgo](https://www.evgo.com/): DC hurtigopladning er ikke begrænset til roadtrips. EVgo har over **800 hurtigopladningssteder** i 34 stater og mere end 65 storbyområder.

- [ChargePoint](https://driver.chargepoint.com/mapCenter/37.26709110057841/-121.95591497824141/18): ChargePoint har over **115.000 ladepunkter** i hele Nordamerika og Europa¹.
  ### Europa

Der findes flere ladenetværk i Europa for elbiler. Her er nogle af de største opladningsnetværk for elbiler i Europa:

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/ionity_1_st.jpg" width="3000" height="2000" title="Ionity-ladestation" >}}

- Ionity: Et kraftfuldt ladestationsnetværk til elbiler, der muliggør langdistanceture på tværs af Europa. Det blev grundlagt som et joint venture mellem BMW Group, Mercedes-Benz Group, Ford Motor Company og Volkswagen Group².

- Plugsurfing: Et europæisk netværk, du kan bruge til at oplade en elbil i Europa. Med den unikke nøgle eller kort – som koster €9,95 – og den gratis smartphone-app kan du bruge over 200.000 opladere, inklusive dem fra forskellige netværk som Allego, EnBW, Eon, Innogy, IONITY og Vattenfall.

- Maingau: Gennem sin EinfachStromLaden smartphone-app, opladningschip eller kort kan du oplade en elbil i Tyskland, Østrig eller Schweiz ved 50.000 ladepunkter med Maingau.

<div class="mt-3 mb-3">
     <a href="../homecharging/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i> Hjemmeopladning</strong></a>
     <a href="../batteryswap/" class="text-decoration-none text-black float-end"><strong>Battery swap <i class="bi-arrow-right"></i></strong></a>
</div>