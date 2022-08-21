---
title: Batterisystemet
linktitle: Batterisystemet
description: Batterisystemet er kombinasjonen av mange celler og annen kontrollelektronikk til et komplett batteri for å drive elbilen.
weight: 3
---
<!-- markdownlint-disable MD033 -->
I dag oppnås dette vanligvis med Cell2Module-teknologien. Hvor celler er gruppert i moduler som igjen er gruppert i et batterisystem.

I fremtiden vil vi se biler med Cell2Pack-teknologier hvor celler legges direkte inn i pakker og til og med Cell2Car-teknologi hvor celler settes direkte inn i bilen. Mer om det senere

Typisk består en batteripakke av moduler som består av flere celler.

## Moduler

Moduler er en kombinasjon av celler. Antall celler i en modul varierer.

<figure>
    <a href="https://media.electrichasgoneaudi.net/multimedia/technology/battery/batterysystem/module_lg_pouch.jpg">
        <img src="https://media.electrichasgoneaudi.net/multimedia/technology/battery/batterysystem/module_lg_pouch.jpg"
        alt="LG batterimodul" title="LG batterimodul">
    </a>
    <figcaption><h4>LG batterimodul</h4></figcaption>
</figure>

### Arkitektur

Cellene inne i en modul kan kobles sammen på forskjellige måter.

- Seriekobling gir høyere spenning
– Parallellkobling gir høyere kapasitet.

#### Eksempel 1

Nedenfor ser du hvordan moduler på Audi e-tron 55 er. Det er 12 celler per modul.
De er gruppert i 3 grupper hvor 4 celler er koblet parallelt. Deretter er disse gruppene koblet sammen i serie og gir det
en 3 seriell 4 parallell konfigurasjon (3s4p). Med 60AH for hver celle og en nominell spenning på 3,66 volt, har denne modulen en kapasitet på 240AH og 11 volt.

![Batteri](/models/e-tron/drivetrain/battery/95kwhconnection.drawio.svg "3s4p-tilkobling")

#### Eksempel 2

Nedenfor ser du hvordan moduler på Audi e-tron 50 er. Det er 12 celler per modul.
De er gruppert i 4 grupper hvor 2 celler er koblet parallelt. Deretter er disse gruppene koblet sammen i serie og gir det
en 4 seriell 2 parallell konfigurasjon (3s4p). Med 60AH for hver celle og en nominell spenning på 3,66 volt, har denne modulen en kapasitet på
180AH og 14.666 volt.

![Batteri](/models/e-tron/drivetrain/battery/71kwhconnection.drawio.svg "4s3p-tilkobling")

### Audi-moduler

| Modul | Antall celler | Konfigurasjon | Kapasitet AH | Nominell spenning | kWh |
|-----|-----|-----|------|------|
|e-tron 55 | 12 | 3s4p | 240AH | 11 volt | 2.640 kWh |
|e-tron 50 | 12 | 4s3p | 180AH | 14.666 volt | 2.640 kWh |
|e-tron GT | 12 | 6s2p | 129,2AH | 21.909 volt | 2.830kWh |
|Q4 e-tron | 24 | 8s3p | 234AH | 29,16 volt | 6,825 kWh |

## Pakker

Batteripakker består av flere moduler plassert i en konstruksjon som er laget for å beskytte dem og
gi dem optimale forhold. Under ser du en batteripakke fra Audi e-tron GT.


<figure>
    <a href="https://media.electrichasgoneaudi.net/multimedia/technology/battery/batterysystem/batterypack_e-tron-gt.jpg">
        <img src="https://media.electrichasgoneaudi.net/multimedia/technology/battery/batterysystem/batterypack_e-tron-gts.jpg"
        alt="Batteripakke med 33 moduler" title="Batteripakke med 33 moduler">
    </a>
    <figcaption><h4>Batteripakke med 33 moduler</h4></figcaption>
</figure>

Vanligvis er pakken plassert nederst på bilen.

### Audi batteripakker

I dag bruker alle Audi-modeller Cell2Module-teknologi

#### Batteripakkekonfigurasjon

| | Celletype | Celler | Moduler | Spenning | Cellekonfigurasjon | Bruttotak |
|-----|------|-----|-----|------|-----|-----|
| [e-tron 55](/models/e-tron/drivetrain/battery/#battery-audi-e-tron-55) | LGXN2.1 | 432 | 36 | 396 | 108s4p | 95 kWh |
| [e-tron 55*3](/models/e-tron/drivetrain/battery/#battery-audi-e-tron-55) | Samsung | 432 | 36 | 396 | 108s4p | 95 kWh |
| [e-tron 50](/models/e-tron/drivetrain/battery/#battery-audi-e-tron-50) | Samsung | 324 | 27 | 396 | 108s3p | 71 kWh |
| [e-tron GT](/modeller/e-tron-gt/drivetrain/battery/) | E66A | 396 | 33 | 723 | 196s2p | 93,4 kWh |
| [RS e-tron GT](/modeller/e-tron-gt/drivetrain/battery/) | E66A | 396 | 33 | 723 | 196s2p | 93,4kWh |
| [Q4 e-tron 50](/models/q4-e-tron/drivetrain/battery/#battery-q4-40-e-tron-and-q4-50-e-tron) |LGX E78 | 288 | 12 | 350 |96s3p | 82 kWh |
| [Q4 e-tron 40](/models/q4-e-tron/drivetrain/battery/#battery-q4-40-e-tron-and-q4-50-e-tron) |LGX E78 | 288 | 12 | 350 |96s3p | 82 kWh |
| [Q4 e-tron 35](/models/q4-e-tron/drivetrain/battery/#battery-q4-35) | LGX E78| 196 | 9 | 350 | 96s2p | 55 kWh |
| [Q6 e-tron](/modeller/q6-e-tron/drivetrain/battery/)*1 | LGX E78?| 392? | 16? | 700? | 192s2p? | 110 kWh? |
| A6 e-tron *2 | LGX E78?| 392? | 16? | 700? | 192s2p? | 110 kWh? |

#### Batteripakkeytelse

I tabellen nedenfor ser du pakkens ytelse. Se hvordan Q4 har en høyere tetthet, selv om selve cellen ikke har en bedre tetthet.

| | Bruttokapasitet | Netto kapasitet | Maks DC-lading | Vekt | kWh/kg |
|-----|------|-----|-----|------|-----|
| [e-tron 55](/models/e-tron/drivetrain/battery/#battery-audi-e-tron-55) | 95kWh | 86,5 kWh | 150kW | 699 kg | 0,136 |
| [e-tron 55*3](/models/e-tron/drivetrain/battery/#battery-audi-e-tron-55) | 95kWh | 86,5 kWh | 150kW | 699 kg | 0,136 |
| [e-tron 50](/models/e-tron/drivetrain/battery/#battery-audi-e-tron-50) | 71kWh | 64,7kWh | 125kW | 580 | 0,122 |
| [e-tron GT](/modeller/e-tron-gt/drivetrain/battery/) | 93,4kWh | 83,7kWh | 270kW | 630 kg | 0,148 |
| [RS e-tron GT](/modeller/e-tron-gt/drivetrain/battery/) | 93,4kWh | 83,7kWh | 270kW | 630 kg | 0,148 |
| [Q4 e-tron 50](/models/q4-e-tron/drivetrain/battery/#battery-q4-40-e-tron-and-q4-50-e-tron) | 82kWh | 77kWh | 125kW | 493 kg | 0,188 |
| [Q4 e-tron 40](/models/q4-e-tron/drivetrain/battery/#battery-q4-40-e-tron-and-q4-50-e-tron) | 82kWh | 77kWh | 125kW | 493 kg | 0,188 |
| [Q4 e-tron 35](/models/q4-e-tron/drivetrain/battery/#battery-q4-35) | 55kWh | 52kWh | 100kW | 344 kg | 0,160 |

*1 Audi Q6-detaljer er ennå ikke bekreftet.

*2 Audi A6-detaljer er det ikke ennå bekreftet.

*3 Fra januar 2021 bruker Audi Samsung-celler på e-tron 55

## Hva er det neste for Audi?

Problemet med dagens tilnærming med Cell2Modules er at energitettheten på batterisystemet er mye lavere enn på cellenivå.
Dette er på grunn av alle strukturelle elementer i et batteri som ikke tilfører noe energiinnhold til en batteripakke.

For å redusere dette problemet går Volkswagen over til en Cell2Pack-teknologi der Audi med Artemis-prosjektet vil lansere den første bilen i
sent i 2024.

Teknologien er basert på å sette cellene direkte inn i pakken og øke energitettheten til batterisystemet. Dette reduserer vekten og øker kapasiteten.

15. mars 2021 presenterte Volkswagen-gruppen som Audi er en del av sin strategi som en del av Power-dagen.

<figure>
    <a href="https://media.electrichasgoneaudi.net/multimedia/technology/battery/batterysystem/cell2pack.jpg">
        <img src="https://media.electrichasgoneaudi.net/multimedia/technology/battery/batterysystem/cell2packs.jpg"
        alt="Volkswagen Cell2Pack-teknologi" title="Volkswagen Cell2Pack-teknologi">
    </a>
    <figcaption><h4>Volkswagen Cell2Pack-teknologi</h4></figcaption>
</figure>

<figure>
    <a href="https://media.electrichasgoneaudi.net/multimedia/technology/battery/batterysystem/cell2packcomparison.jpg">
        <img src="https://media.electrichasgoneaudi.net/multimedia/technology/battery/batterysystem/cell2packcomparisons.jpg"
        alt="Volkswagen Cell2Pack-sammenligning" title="Volkswagen Cell2Pack-sammenligning">
    </a>
    <figcaption><h4>Volkswagen Cell2Pack-sammenligning</h4></figcaption>
</figure>

Se hele presentasjonen.

{{< youtube UQZ8KmCItF8 >}}
