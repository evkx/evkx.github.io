---
title: Permanent Magnet Synkronmotorer
linktitle: PMSM
description: En Permanent Magnet Synchronous Motor (PMSM) er en elektrisk motor som bruker permanente magneter på rotoren for å generere et magnetfelt som samhandler med statorviklingen for å produsere mekanisk rotasjon. PMSM-er brukes ofte i ulike applikasjoner, inkludert elektriske kjøretøy, industrimaskiner og apparater.
weight: 2
---
<!-- markdownlint-disable MD033 -->

{{<evkxdisplayaddarticle />}}

## Hvordan virker det

**Rotor:** Rotoren til en PMSM inneholder permanente magneter som genererer et fast magnetfelt. Magnetene er vanligvis laget av materialer som neodymjernbor (NdFeB) eller samariumkobolt (SmCo) som har høy magnetisk styrke.

{{< sitefiguresized thumb="technology/motors/pmsm/porschetaycanrotor_st.jpg" width="3000" height="1687" title="Porsche Taycan Rotor med permanente magneter" >}}

Vanligvis har rotoren 6 eller 8 magnetiske poler.

**Stator:** Statoren er den stasjonære delen av motoren og består av viklinger som er viklet rundt statorpolene. Disse viklingene er vanligvis laget av kobber og forsynes med vekselstrøm (AC) for å skape et magnetfelt som samhandler med rotoren.

{{< sitefiguresized thumb="technology/motors/pmsm/porschetaycanstator_st.jpg" width="3000" height="1687" title="Porsche Taycan Stator" >}}

**Kommutering:** PMSM er avhengig av elektronisk kommutering for å kontrollere retningen og hastigheten til motoren. Sensorer, som Hall-effektsensorer eller kodere, brukes til å oppdage rotorens posisjon og gi tilbakemelding til motorkontrolleren. Basert på denne tilbakemeldingen, bestemmer motorkontrolleren når og hvordan statorviklingene skal slås på og av for å skape et roterende magnetfelt som driver rotoren.

**Synkronisering:** Det magnetiske feltet som genereres av statorviklingene må synkroniseres med rotorens posisjon for å oppnå effektiv og jevn drift. Dette gjøres vanligvis ved å bruke en teknikk som kalles feltorientert kontroll (FOC) eller vektorkontroll, som justerer amplituden og fasen til statorstrømmen for å justere den med rotorposisjonen.

**Momentproduksjon:** Ettersom det roterende magnetiske feltet generert av statoren samhandler med permanentmagnetene på rotoren, utøver det et dreiemoment på rotoren, som får den til å rotere. Dreiemomentet som produseres av motoren kan kontrolleres ved å justere amplituden og frekvensen til statorstrømmen, som igjen bestemmer styrken og hastigheten til det roterende magnetfeltet.

{{<evkxdisplayaddarticle />}}

**Strømforsyning:** PMSM-er krever en strømforsyning som kan gi riktig AC-spenning og frekvens til statorviklingene. Dette oppnås vanligvis ved å bruke en omformer, som konverterer en likespenning fra en strømkilde, for eksempel et batteri eller et strømnett, til den nødvendige AC-spenningen og frekvensen for motoren.

Oppsummert bruker en PMSM permanente magneter på rotoren, statorviklinger, elektronisk kommutering og synkroniseringsteknikker for å generere et roterende magnetfelt som driver rotoren og produserer mekanisk rotasjon. Dreiemomentet og hastigheten til motoren kan kontrolleres ved å justere amplituden og frekvensen til statorstrømmen ved hjelp av en omformer og en motorkontroller.

## Fordeler

En av hovedfordelene med synkronmotorer i elbiler er deres høyere effekttetthet. Permanente magneter i rotoren til en synkronmotor gir et konstant magnetfelt, noe som gir høyere dreiemoment og effekt sammenlignet med asynkronmotorer av tilsvarende størrelse. Dette gjør synkronmotorer spesielt egnet for elbiler med høy ytelse som krever rask akselerasjon og høye hastigheter.

Synkronmotorer i elbiler er også kjent for sin presise og effektive kontroll. De kan kontrolleres nøyaktig ved hjelp av avansert kraftelektronikk, for eksempel motorkontrollere eller omformere, som gir optimal ytelse og forbedret energistyring. Dette muliggjør funksjoner som dreiemomentvektor, der dreiemomentet kan kontrolleres uavhengig for hvert hjul, noe som forbedrer trekkraft og kjøreegenskaper under ulike kjøreforhold.

En annen fordel med synkronmotorer er deres evne til å oppnå høy effektivitet over et bredt spekter av hastigheter og belastninger. Dette muliggjør effektiv drift ved både lave og høye hastigheter, noe som er spesielt nyttig i elbiler som krever ulike nivåer av kraft og dreiemoment avhengig av kjøreforholdene.

{{<evkxdisplayaddarticle />}}

## Begrensninger

**Sjeldne jordartsmaterialer:** PMSM krever sjeldne jordartsmagneter, som kan være kostbare og ha miljømessige konsekvenser når det gjelder gruvedrift og bærekraft.

**Dra ved frirulling:** Når et elektrisk kjøretøy (EV) ruller eller ruller uten strøm, kan den elektriske motoren skape en drageffekt, som ofte omtales som "motormotstand" eller "utløpsmotstand". Denne motstanden er forårsaket av de elektromagnetiske kreftene inne i motoren, som kan motstå rotorens bevegelse og skape motstand mot kjøretøyets bevegelse.

Når det gjelder permanentmagnetmotorer, som har magneter i rotoren, kan det generere mer motstand når motoren ikke er drevet. Magnetene i rotoren skaper et fast magnetfelt, som kan skape ekstra motstand mot rotorens bevegelse, noe som resulterer i høyere motormotstand sammenlignet med induksjonsmotorer. Luftmotstanden fra permanentmagnetmotoren kan imidlertid også avhenge av den spesifikke design- og kontrollstrategien som brukes, ettersom noen permanentmagnetmotorer kan ha redusert luftmotstand på grunn av avanserte motorkontrollteknikker.

Noen EV-produsenter bruker en clutch for å koble motoren fra drivverket, effektivt koble motoren fra hjulene og lar kjøretøyet rulle uten drag fra motoren. Dette kan bidra til å redusere motstanden som føles av hjulene når motoren ikke er drevet, noe som potensielt kan forbedre kjøretøyets effektivitet og redusere energiforbruket.

{{< sitefiguresized thumb="technology/motors/pmsm/mercedeseqesuvfrontmotordisconnect_st.jpg" width="3000" height="1687" title="Mercedes EQE Suv med clutch som kobler fra frontmotoren ved frikjøring" >}}

Andre bruker induksjonsmotorer foran og PSMS bak. Eksempler er all omsorg basert på Volkswagen MEB-plattform.

Hvis du vil lære enda mer om PSMS-motorer, anbefaler vi å se denne videoen hvor Lucid forklarer deres PMSM-design og sammenligne det med andre

{{< youtube U7IHZxNC6hc >}}

<div class="mt-3 mb-3">
    <a href="../asm/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i> Induksjonsmotorer</strong></a>
    <a href="../wrsm/" class="text-decoration-none text-black float-end"><strong>WRSM<i class="bi-arrow-right"></i></strong></a>
</div>