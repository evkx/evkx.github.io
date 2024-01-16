---
title: Buffer
linktitle: Buffer
description: For å beskytte batteriet implementerer produsentene buffere på batterier.
weight: 10
---
<!-- markdownlint-disable MD033 -->

En batteribuffer er en funksjon i elbiler som gjør at de har en forskjell mellom brutto- og netto batterikapasitet. Bruttokapasiteten er den totale energien batteripakken kan lagre. Derimot er nettokapasiteten den brukbare energien batteripakken kan gi til kjøretøyet. Forskjellen mellom brutto- og nettokapasiteten kalles buffer.

Batteristyringssystemet (BMS) styrer bufferen.

Bufferen har to hovedfunksjoner: å beskytte batteripakken mot skade og å optimere ytelsen. Bufferen beskytter batteripakken mot skade ved å forhindre at den overlades eller tappes helt ned, noe som kan føre til irreversibel nedbrytning.. 

Bufferen optimerer batteripakkens ytelse ved å la den operere innenfor sitt optimale SOC-område, hvor den kan levere høyere kraft og effektivitet.

## Hvordan fungerer en batteribuffer?

En batteribuffer begrenser de maksimale og laveste SOC-nivåene batteripakken kan nå. Det maksimale SOC-nivået kalles toppbufferen, mens minimum SOC-nivået kalles bunnbufferen. Bunnbufferen kalles også noen ganger en "brickbuffer" fordi den hindrer batteripakken i å nå 0 % SOC, noe som kan skade eller "bricke" cellene.

Diagrammet nedenfor viser hvordan en bunn og toppbuffer vil forhindre at batteriet utlades under bunnbuffergrensen eller lades over toppbufferen.

<a href="chargecurve.drawio.svg">
     <img src="chargecurve.drawio.svg" class="img-fluid">
</a>

Bufferstørrelsen kan avhenge av typen og kjemien til cellene som brukes i batteripakken. For eksempel kan noen celler ha en høyere toleranse for overlading eller overutlading enn andre, og dermed kreve mindre buffere. Noen celler kan også ha forskjellige optimale SOC-områder enn andre og krever derfor større buffere.

BMS regulerer lading og utlading av batteripakken tilsvarende for å holde den innenfor de godkjente grensene.

Noen ganger velger produsenten å endre bufferstørrelsen med programvareoppdateringer. Denne endringen skjer vanligvis når produsenten vet mer om hvordan et nytt batteri presterer angående nedbrytning.

## Skjult tilgjengelig buffer

Noen produsenter skjuler noe tilgjengelig batterikapasitet i en skjult tilgjengelig buffer. Hva betyr det?

Det betyr vanligvis at SOC-skalaen ikke er lineær. Det betyr at 0-1 % er større enn alle andre prosent. I mange tilfeller kan prosentandelen fra 0-1 % være størrelsen 5-10 ganger den størrelsen til de andre prosentstegene. Den ekstra energien kalles ofte <b>Nullbuffer</b>.

Diagrammet viser hvordan 0-1 % er mye større for den viste SOC enn de andre prosentene.

<a href="hiddenbuffer.drawio.svg">
     <img src="hiddenbuffer.drawio.svg" class="img-fluid">
</a>

Denne strategien gjør det mindre sannsynlig at elbilen går tom for batteri. Problemet med denne tilnærmingen er at du vanligvis lader bilen når det er 5-10 % igjen for å sikre at du ikke går tom, men når det er skjult kapasitet ender sjåføren med å lade allerede når det er 15-20 % batteri igjen. Denne tilnærmingen fører til at eieren opplever lavere elektrisk rekkevidde enn i virkeligheten.

EVKX.net mener dette er en dårlig praksis fra produsentene.

<b>Bjørn Nyland</b>har testet flere elbiler for å se hvor mye ekstra energi produsenten har skjult mellom 0 og 1 %. Mer er verre siden det lurer eieren.

<img src="https://media.evkx.net/multimedia/technology/battery/tbzeromile_1_st.jpg" class="img-fluid">

  Noen tester med resultater:
<table class="table table-striped">
<thead>
    <tr>
        <td>
        Model
        </td>
        <td>
        Zero Buffer
        </td>
    </tr>
</thead>
<tbody>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=2rSuFCrf-C0" target="_blank">Audi e-tron 55</a></td>
        <td>0kWh</td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=OR5JRd0g_Q8" target="_blank">Nissan Aryia 87kWh FWD</a></td>
        <td>5.1kWh</td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=dAM1CIlJ1xQ" target="_blank">Toyota bZ4X</a></td>
        <td>5.1kWh</td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=y675YCgSnlc" target="_blank">Tesla Model Y Performance</a></td>
        <td>4.1kWh</td>
    </tr>
</tbody>
</table>

Se Bjørns testresultater for <a href="https://docs.google.com/spreadsheets/d/1V6ucyFGKWuSQzvI8lMzvvWJHrBS82echMVJH37kwgjE/edit#gid=52159941" target="_blank">mer data</a> eller alle hans <a href="https://www.youtube.com/playlist?list=PLqKx2qnB8Xv6ddxPVkiqQZMNyLtYjqQkq" target="_blank">Zero Miles-tester</a>

<div class="mt-3 mb-3">
    <a href="../" class="btn btn-outline-secondary">Artikkeloversikt <i class="bi-card-list"></i></a>
    <a href="../manufactors/" class="btn btn-primary float-end">Produsenter <i class="bi-arrow-right-circle"></i></a>
</div>