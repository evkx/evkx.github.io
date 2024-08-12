---
title: Cellebalansering
linktitle: Cellebalansering
description: Cellebalansering er viktig for å få mest mulig ut av batteriet.
weight: 8
---
<!-- markdownlint-disable MD033 -->

Cellebalansering er nødvendig når noen celler i en batteripakke har en høyere eller lavere ladetilstand (SOC) enn andre.

<img src="cellbalancing.drawio.svg" class="img-fluid">

I dette eksempelet er den øverste gruppen av celler 100% ladet, og ladeprosedyren er fullført. Imidlertid er det totale høyspenningsbatteriets ladingsnivå bare 96%. Balansering innebærer å utlade de fulladede cellene via en motstand, slik at ladeprosessen kan fortsette til alle cellene når samme ladingsnivå. Dette sikrer at høyspenningsbatteriet oppnår sin maksimale kapasitet.

{{< evkxdisplayaddarticle />}}

Batterireguleringsenheten sammenligner spenningene til cellegruppene. Hvis noen cellegrupper har høyere spenning, mottar den ansvarlige batterimodulens kontrollenhet balanseringsinformasjonen. Balansering utføres når spenningsforskjeller større enn omtrent 1% oppstår under lading. Etter at tenningen er slått av, sjekker batterireguleringsenheten om balansering er nødvendig og utløser det hvis nødvendig. Vanligvis utføres balansering ved ladingsnivåer over 30%.

{{< pagenavigation b_url="../thermalmanagement/" b_title="Termisk styring" f_url="../charging/" f_title="Lading" >}}