---
title: Cellebalansering
linktitle: Cellebalansering
description: Cellebalansering er viktig for å få mest mulig ut av batteriet.
weight: 8
---
<!-- markdownlint-disable MD033 -->
Cellebalansering er nødvendig når en gruppe celler har høyere eller lavere SOC enn andre grupper av celler.

<img src="cellbalancing.drawio.svg" class="img-fluid">

I dette eksemplet er den øverste gruppen av celler 100 % ladet og ladeprosedyren er fullført.
Imidlertid er høyspenningsbatteriets ladenivå bare 96 %. Balansering gjør at denne cellen nå utlades via en motstand og kan dermed fortsette å lades til alle cellene har nådd samme ladenivå. Dette gjør at høyspentbatteriet oppnår sin maksimale kapasitans.

{{<evkxdisplayaddarticle />}}

For å gjøre dette sammenligner batterireguleringskontrollenheten spenningene til cellegruppene. Hvis cellegrupper har høy cellespenning, mottar den ansvarlige batterimodulens kontrollenhet balanseringsinformasjonen. Balansering utføres når spenningsforskjeller på større enn ca. 1 % oppstår når høyspentbatteriet lades. Etter at tenningen er slått av, kontrollerer batterireguleringsenheten om balansering er nødvendig og utløser den om nødvendig. Typisk balansering utføres ved ladenivåer over 30 %.

<div class="mt-3 mb-3">
    <a href="../" class="btn btn-outline-secondary">Artikkeloversikt <i class="bi-card-list"></i></a>
    <a href="../charging/" class="btn btn-primary float-end">Lading <i class="bi-arrow-right-circle"></i></a>
</div>

