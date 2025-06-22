---
title: EV-opladning forklaret: Teknologi, ydeevne og virkelige faktorer
linktitle: Opladning
description: Opladning af batteriet er processen med at tilføre ny energi til batteriet.
weight: 8
navicon: bi-battery-charging
---

<!-- markdownlint-disable MD033 -->

Opladning af et EV-batteri indebærer at føre elektricitet ind i batteriet, hvor det lagres som kemisk energi. Dette sker gennem bevægelsen af elektroner og ioner mellem batteriets to elektroder: katoden og anoden, adskilt af en elektrolyt.

Under opladning strømmer elektroner fra strømkilden (f.eks. en ladestation) til katoden. Samtidig bevæger positive ioner sig fra katoden til anoden gennem elektrolytten. Når batteriet er fuldt opladet, lagres energien via en høj spændingsforskel mellem polerne og er klar til at drive køretøjet.

<figure>
<img src="https://media.evkx.net/multimedia/technology/battery/charging/batteryconceptcharging.drawio.svg" class="img-fluid mx-auto d-block">
<figcaption>
    <p class="lead text-center fw-semibold">
        Batteriopladning
    </p>
</figcaption>
</figure>

Processen er reversibel. Under afladning strømmer elektroner fra anoden til katoden gennem en ekstern kreds og genererer strøm til at drive elmotoren.

{{<evkxdisplayaddarticle />}}

## Opladningsydelse

Opladningsydelsen varierer markant mellem EV-modeller og påvirkes af flere nøglefaktorer:

{{< sitefiguresized thumb="technology/battery/charging/charging\_1\_st.jpg" width="1920" height="1080" title="Kia EV6 GT oplader ved Ionity" >}}

### Pakkeopsætning

Batteripakkens spænding påvirker den maksimale ladehastighed. For eksempel kræver en 50 kW DC CCS-lader, der leverer 125 A, mindst 400 V for at opnå fuld effekt. En 300 V-pakke ville være begrænset til 37,5 kW (300 V × 125 A).

De fleste CCS HPC-ladere er også begrænset til 500 A. Det betyder, at en 400 V-pakke kan understøtte op til 200 kW, mens en 300 V-pakke er begrænset til 150 kW.

Modeller som Volvo EX90, Polestar 3 og Nio EL8 hævder at understøtte 250 kW opladning på 400 V-arkitekturer, men det kræver ladere uden 500 V-begrænsning.

#### 800-Volt EV’er på 400-Volt Ladere

800 V EV’er kan begrænses af ældre 400–500 V-ladere. Tesla Superchargere er f.eks. begrænset til 500 V, hvilket reducerer opladningshastigheden for 800 V-køretøjer.

##### Inverterteknik

Nogle EV’er bruger indbyggede invertere til at hæve spændingen. Disse systemer begrænser ofte den samlede effekt. Eksempler:

* Hyundai E-GMP-modeller: ~100 kW maks. på 400 V-ladere  
* Porsche Taycan: ~50 kW på Superchargere med standard inverter

##### Bankopladning

Denne metode deler batteriet i to 400 V-sektioner. Modeller som Audi Q6 e-tron og Porsche Macan understøtter op til 135 kW ved 400 V og op til 270 kW ved 800 V. Tesla Cybertruck kan nå 230 kW på 500 V Superchargere.

{{< sitefiguresized thumb="technology/battery/charging/bankcharging\_1\_st.jpg" width="3000" height="1852" title="Audi Q6 e-tron bankopladning" >}}

### Temperatur

Batteritemperaturen har stor indflydelse på opladningshastigheden. I koldt vejr kan opladningen nedsættes med over 50 % pga. begrænsninger i batteristyringssystemet (BMS). Mange EV’er forvarmer batteriet, når navigationen fører til en lader.

I varmt vejr kan BMS også begrænse opladningen for at undgå overophedning. Den optimale opladningstemperatur ligger mellem 25–35 °C. Over 50–60 °C kan opladningen reduceres for at beskytte batteriet.

{{< sitefiguresized thumb="technology/battery/charging/charging\_2\_st.jpg" width="1920" height="1080" title="Audi e-tron GT oplader om vinteren" >}}

EV’er med lynopladning skal have effektiv termisk styring for at holde batteriet inden for den ideelle temperatur under opladning.

EVKX’s ladekurver viser **optimale forhold**:

* Batteritemperaturen er høj nok til maksimal hastighed  
* Batteriet forbliver inden for sikre grænser under en 0–100 % session

{{<evkxdisplayaddarticle />}}

### BMS-software

BMS-softwaren former også ladekurverne. Producenter balancerer ladehastighed med batteriets levetid. Da hurtigopladning øger slid, begrænser nogle EV’er enten ladehastighed eller antallet af højhastighedssessioner.

Eksempler:

* Toyota BZ4X tillader kun to hurtige opladninger pr. døgn  
* Porsche Taycan lader brugere sænke ladeeffekten (f.eks. fra 270 kW til 200 kW) for at mindske slid

{{< sitefiguresized thumb="technology/battery/charging/taycancharging\_1\_st.jpg" width="3000" height="2669" title="Porsche Taycan oplader" >}}

### Eksempler på ladehastigheder

EVKX tilbyder virkelige ladehastighedsdata og grafer for hver EV-model:

* [Zeekr 7x Long Range AWD](/models/zeekr/7x/7x_long_range_awd/chargingcurve/): Over 430 kW i top.

  Denne model kræver over 650 A for maksimal hastighed. På 400 V-ladere er den begrænset til 80 kW. Ladekurvediagrammet viser alle tre scenarier.

  <img src="https://evkx.net/models/zeekr/7x/7x_long_range_awd/chargingcurve/chart/?battery=0" class="img-fluid">

* [Kia EV6 GT](/models/kia/ev6/ev6_gt/chargingcurve/): Høj topfart med flad kurve – ideel til lange ture.

  <img src="https://evkx.net/models/kia/ev6/ev6_gt/chargingcurve/chart/?battery=0" class="img-fluid">

* [Nissan Ariya](/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve/): Moderat top, men jævn kurve.

  <img src="/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve/chart/?battery=0" class="img-fluid">

### Afsluttende tanker

På lange ture betyder formen på ladekurven meget. Flade kurver giver længere, stabile stop, mens top-tunge kurver er gode til hurtige opladninger. EVKX hjælper dig med at sammenligne og forstå den reelle ydeevne for hver model.
