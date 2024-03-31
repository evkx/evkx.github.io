---
title: Permanent Magnet Synkronmotorer
linktitle: PMSM
description: En Permanent Magnet Synchronous Motor (PMSM) er en elektrisk motor som bruker permanente magneter på rotoren for å generere et magnetfelt som samhandler med statorviklingen for å produsere mekanisk rotasjon. PMSM-er brukes ofte i ulike applikasjoner, inkludert elektriske kjøretøy, industrimaskiner og apparater.
weight: 2
---
<!-- markdownlint-disable MD033 -->
{{<evkxdisplayaddarticle />}}

## Hvordan virker det

**Rotor:** Rotoren på en PMSM indeholder permanente magneter, der genererer et fast magnetfelt. Magneterne er normalt lavet af materialer som neodymjernbor (NdFeB) eller samariumkobolt (SmCo), som har høj magnetisk styrke.

{{< sitefiguresized thumb="technology/motors/pmsm/porschetaycanrotor_st.jpg" width="3000" height="1687" title="Porsche Taycan Rotor med permanente magneter" >}}

Normalt har rotoren 6 eller 8 magnetiske poler.

**Stator:** Statoren er den stationære del af motoren og består af viklinger viklet rundt om statorpolerne. Disse viklinger er normalt lavet af kobber og forsynes med vekselstrøm (AC) for at skabe et magnetfelt, der interagerer med rotoren.

{{< sitefiguresized thumb="technology/motors/pmsm/porschetaycanstator_st.jpg" width="3000" height="1687" title="Porsche Taycan Stator" >}}

**Kommutering:** PMSM er afhængig af elektronisk kommutering til at styre motorens retning og hastighed. Sensorer, såsom Hall-effektsensorer eller encodere, bruges til at detektere rotorens position og give feedback til motorstyringen. Baseret på denne feedback beslutter motorstyringen, hvornår og hvordan statorviklingerne skal tændes og slukkes for at skabe et roterende magnetfelt, der driver rotoren.

**Synkronisering:** Det magnetiske felt, der genereres af statorviklingerne, skal synkroniseres med rotorens position for at opnå effektiv og jævn drift. Dette gøres normalt ved hjælp af en teknik kaldet feltorienteret kontrol (FOC) eller vektorstyring, som justerer amplituden og fasen af ​​statorstrømmen for at justere den med rotorens position.

**Momentproduktion:** Da det roterende magnetfelt, der genereres af statoren, interagerer med de permanente magneter på rotoren, udøver det et drejningsmoment på rotoren, hvilket får den til at rotere. Drejningsmomentet produceret af motoren kan styres ved at justere amplituden og frekvensen af ​​statorstrømmen, som igen bestemmer styrken og hastigheden af ​​det roterende magnetfelt.

{{<evkxdisplayaddarticle />}}

**Strømforsyning:** PMSM'er kræver en strømforsyning, der kan levere den korrekte AC-spænding og frekvens til statorviklingerne. Dette opnås normalt ved at bruge en inverter, som konverterer en DC-spænding fra en strømkilde, såsom et batteri eller lysnettet, til den nødvendige AC-spænding og frekvens for motoren.

Sammenfattende bruger en PMSM permanente magneter på rotoren, statorviklinger, elektronisk kommutering og synkroniseringsteknikker til at generere et roterende magnetfelt, der driver rotoren og producerer mekanisk rotation. Motorens drejningsmoment og hastighed kan styres ved at justere amplituden og frekvensen af ​​statorstrømmen ved hjælp af en inverter og en motorstyring.

## Fordele

En af de vigtigste fordele ved synkronmotorer i elbiler er deres højere effekttæthed. Permanente magneter i rotoren på en synkronmotor giver et konstant magnetfelt, hvilket resulterer i højere drejningsmoment og effekt sammenlignet med asynkronmotorer af tilsvarende størrelse. Dette gør synkronmotorer særligt velegnede til højtydende elektriske køretøjer, der kræver hurtig acceleration og høje hastigheder.

Synkronmotorer i elbiler er også kendt for deres præcise og effektive styring. De kan styres præcist ved hjælp af avanceret effektelektronik, såsom motorstyringer eller invertere, som giver optimal ydeevne og forbedret energistyring. Dette muliggør funktioner som momentvektoring, hvor momentet kan styres uafhængigt for hvert hjul, hvilket forbedrer trækkraft og håndtering under forskellige køreforhold.

En anden fordel ved synkronmotorer er deres evne til at opnå høj effektivitet over en bred vifte af hastigheder og belastninger. Dette muliggør effektiv drift ved både lave og høje hastigheder, hvilket er særligt nyttigt i elektriske køretøjer, der kræver forskellige niveauer af kraft og drejningsmoment afhængigt af køreforholdene.

{{<evkxdisplayaddarticle />}}

## Begrænsninger

**Sjældne jordarters materialer:** PMSM kræver sjældne jordarters magneter, som kan være dyre og have miljøpåvirkninger med hensyn til minedrift og bæredygtighed.

**Træk ved friløb:** Når et elektrisk køretøj (EV) kører eller kører uden strøm, kan elmotoren skabe en modstandseffekt, som ofte omtales som "motormodstand" eller "løbsk modstand". Denne modstand er forårsaget af de elektromagnetiske kræfter inde i motoren, som kan modstå rotorens bevægelse og skabe modstand mod køretøjets bevægelse.

I tilfælde af permanentmagnetmotorer, som har magneter i rotoren, kan det generere mere modstand, når motoren ikke er drevet. Magneterne i rotoren skaber et fast magnetfelt, som kan skabe yderligere modstand mod rotorens bevægelse, hvilket resulterer i højere motormodstand sammenlignet med induktionsmotorer. Imidlertid kan modstanden af ​​permanentmagnetmotoren også afhænge af det specifikke design og den anvendte kontrolstrategi, da nogle permanentmagnetmotorer kan have reduceret modstand på grund af avancerede motorstyringsteknikker.

Nogle EV-producenter bruger en kobling til at afbryde motoren fra drivlinjen, hvilket effektivt afbryder motoren fra hjulene og tillader køretøjet at rulle uden motormodstand. Dette kan hjælpe med at reducere modstanden, der mærkes af hjulene, når motoren ikke kører, hvilket potentielt forbedrer køretøjets effektivitet og reducerer energiforbruget.

{{< sitefiguresized thumb="technology/motors/pmsm/mercedeseqesuvfrontmotordisconnect_st.jpg" width="3000" height="1687" title="Mercedes EQE Suv med kobling, der afbryder frontmotoren ved friløb" >}}

Andre bruger induktionsmotorer foran og PSMS bagtil. Eksempler er al pleje baseret på Volkswagen MEB-platformen.

Hvis du vil lære endnu mere om PSMS-motorer, anbefaler vi at se denne video, hvor Lucid forklarer deres PMSM-design og sammenligner det med andre

{{< youtube U7IHZxNC6hc >}}

{{< pagenavigation b_url="../asm/" b_title="Induktionsmotorer" f_url="../wrsm/" f_title="WRSM" >}}