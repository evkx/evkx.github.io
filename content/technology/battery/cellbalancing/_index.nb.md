---
title: Cellebalansering 
linktitle: Cellebalansering 
description: Cellebalansering er viktig for å få mest mulig ut av batteriet.
weight: 5
---
<!-- markdownlint-disable MD033 -->
Cellebalansering er nødvendig når en gruppe celler har høyere eller lavere SOC enn andre grupper av celler.

![Cellebalansering](cellbalancing.drawio.svg "Cellebalansering")

I dette eksemplet er den øverste gruppen av celler 100 % ladet og ladeprosedyren er fullført.
Imidlertid er høyspenningsbatteriets ladenivå bare 96 %. Balansering gjør at denne cellen nå utlades via en motstand og kan dermed fortsette å lades til alle cellene har nådd samme ladenivå. Dette gjør at høyspentbatteriet oppnår sin maksimale kapasitans.

For å gjøre dette sammenligner batterireguleringskontrollenheten spenningene til cellegruppene. Hvis cellegrupper har høy cellespenning, mottar den ansvarlige batterimodulens kontrollenhet balanseringsinformasjonen. Balansering utføres når spenningsforskjeller på større enn ca. 1 % oppstår når høyspentbatteriet lades. Etter at tenningen er slått av, kontrollerer batterireguleringsenheten om balansering er nødvendig og utløser den om nødvendig. Typisk balansering utføres ved ladenivåer over 30 %.

På helelektriske Audier er det ikke mulig å sjekke cellebalansen uten ekstra verktøy. ODBEleven er et av disse verktøyene som kan brukes. Skjermbildet nedenfor viser at ett cellesett har 10 % SOC og et annet har 13 % soc. Audi e-tron har 108 cellesett med 3 eller 4 celler parallelt avhengig av versjon.

figure>
    <a href="https://media.electrichasgoneaudi.net/multimedia/technology/battery/cellbalancing/obdeleven.jpg">
        <img src="https://media.electrichasgoneaudi.net/multimedia/technology/battery/cellbalancing/obdeleven.jpg"
        alt="info fra OBDEleven" title="info fra OBDEleven">
    </a>
    <figcaption><h4>info fra OBDEleven</h4></figcaption>
</figure>
