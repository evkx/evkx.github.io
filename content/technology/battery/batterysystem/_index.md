---
title: Battery system
linktitle: Battery system
description: The battery system is the combination of many cells and other control electronics to a complete battery to power the EV.
weight: 3
---
<!-- markdownlint-disable MD033 -->
Today this is most typically achieved with the Cell2Module technology. Where cells are grouped into modules that again are grouped into a battery system.

In the future, we will see cars with Cell2Pack technologies where cells are put directly into packs and even Cell2Car technology where cells are put directly into the car. More about that later

Typical a battery pack consists of modules that consist of several cells.

## Modules

Modules are a combination of cells. The number of cells in a module varies.

<figure>
    <a href="https://media.electrichasgoneaudi.net/multimedia/technology/battery/batterysystem/module_lg_pouch.jpg">
        <img src="https://media.electrichasgoneaudi.net/multimedia/technology/battery/batterysystem/module_lg_pouch.jpg"
        alt="LG battery module" title="LG battery module">
    </a>
    <figcaption><h4>LG battery module</h4></figcaption>
</figure>

### Architecture

The cells inside a module can be connected in different ways.

- Serial connecting gives a higher voltage
- Parallel connection gives a higher capacity.

#### Example 1

Below you see how modules on the Audi e-tron 55 are. There are 12 cells per module.
They are grouped into 3 groups where 4 cells are connected in parallel. Then those groups are connected in serial giving it
a 3 serial 4 parallel configuration (3s4p). With 60AH for each cell and a nominal voltage of 3.66 volts, this module has a capacity of 240AH and 11 volts.

![Battery](/models/e-tron/drivetrain/battery/95kwhconnection.drawio.svg "3s4p connection")

#### Example 2

Below you see how modules on the Audi e-tron 50 are. There are 12 cells per module.
They are grouped into 4 groups where 2 cells are connected in parallel. Then those groups are connected in serial giving it
a 4 serial 2 parallel configuration (3s4p). With 60AH for each cell and a nominal voltage of 3.66 volts, this module has a capacity of
180AH and 14.666 volts.

![Battery](/models/e-tron/drivetrain/battery/71kwhconnection.drawio.svg "4s3p connection")

### Audi modules

| Module | No of cells | Config | Capacity AH | Nominal voltage | kWh |
|-----|-----|-----|------|------|
|e-tron 55 | 12 | 3s4p | 240AH | 11 volts | 2.640 kWh |
|e-tron 50 | 12 | 4s3p | 180AH | 14.666 volts | 2.640 kWh |
|e-tron GT | 12 | 6s2p | 129.2AH | 21.909 volts | 2.830kWh |
|Q4 e-tron | 24 | 8s3p | 234AH | 29.16 volts | 6.825kWh |

## Packs

Battery packs consist of several modules placed in a construction that is created to protect them and
give them optimal conditions. Below you see a battery pack from Audi e-tron GT.

<figure>
    <a href="https://media.electrichasgoneaudi.net/multimedia/technology/battery/batterysystem/batterypack_e-tron-gt.jpg">
        <img src="https://media.electrichasgoneaudi.net/multimedia/technology/battery/batterysystem/batterypack_e-tron-gts.jpg"
        alt="Battery pack with 33 modules" title="Battery pack with 33 modules">
    </a>
    <figcaption><h4>Battery pack with 33 modules</h4></figcaption>
</figure>

Typical the pack is placed at bottom of the car.

### Audi Battery packs

Today all Audi models use Cell2Module technology

#### Battery pack configuration

|  | Cell type | Cells | Modules | Voltage | Cell config | Gross cap |
|-----|------|-----|-----|------|-----|-----|
| [e-tron 55](/models/e-tron/drivetrain/battery/#battery-audi-e-tron-55) | LGXN2.1 | 432 | 36 | 396 | 108s4p | 95 kWh |
| [e-tron 55*3](/models/e-tron/drivetrain/battery/#battery-audi-e-tron-55) | Samsung | 432 | 36 | 396 | 108s4p | 95 kWh |
| [e-tron 50](/models/e-tron/drivetrain/battery/#battery-audi-e-tron-50) | Samsung | 324 | 27 | 396 | 108s3p | 71 kWh |
| [e-tron GT](/models/e-tron-gt/drivetrain/battery/) | E66A | 396 | 33 | 723 | 196s2p | 93.4 kWh |
| [RS e-tron GT](/models/e-tron-gt/drivetrain/battery/) | E66A | 396 | 33 | 723 | 196s2p | 93.4kWh |
| [Q4 e-tron 50](/models/q4-e-tron/drivetrain/battery/#battery-q4-40-e-tron-and-q4-50-e-tron) |LGX E78 | 288 | 12 | 350 |96s3p | 82 kWh |
| [Q4 e-tron 40](/models/q4-e-tron/drivetrain/battery/#battery-q4-40-e-tron-and-q4-50-e-tron) |LGX E78 | 288 | 12 | 350 |96s3p | 82 kWh |
| [Q4 e-tron 35](/models/q4-e-tron/drivetrain/battery/#battery-q4-35) | LGX E78|  196 | 9 | 350 | 96s2p | 55 kWh |
| [Q6 e-tron](/models/q6-e-tron/drivetrain/battery/)*1 | LGX E78?|  392? | 16? | 700? | 192s2p? | 110 kWh? |
| A6 e-tron *2 | LGX E78?|  392? | 16? | 700? | 192s2p? | 110 kWh? |

#### Battery pack performance

In the table below you see the pack performance. See how Q4 has a higher density even the cell itself does not have a better density.

|  | Gross capacity | Net capacity | Max DC Charging | Weight | kWh/kg |
|-----|------|-----|-----|------|-----|
| [e-tron 55](/models/e-tron/drivetrain/battery/#battery-audi-e-tron-55) | 95kWh | 86.5kWh | 150kW | 699kg | 0.136 |
| [e-tron 55*3](/models/e-tron/drivetrain/battery/#battery-audi-e-tron-55) | 95kWh | 86.5kWh | 150kW | 699kg | 0.136 |
| [e-tron 50](/models/e-tron/drivetrain/battery/#battery-audi-e-tron-50) | 71kWh | 64.7kWh | 125kW | 580 | 0.122 |
| [e-tron GT](/models/e-tron-gt/drivetrain/battery/) | 93.4kWh | 83.7kWh | 270kW | 630kg | 0.148 |
| [RS e-tron GT](/models/e-tron-gt/drivetrain/battery/) | 93.4kWh | 83.7kWh | 270kW | 630kg | 0.148 |
| [Q4 e-tron 50](/models/q4-e-tron/drivetrain/battery/#battery-q4-40-e-tron-and-q4-50-e-tron) | 82kWh | 77kWh | 125kW | 493kg | 0.188 |
| [Q4 e-tron 40](/models/q4-e-tron/drivetrain/battery/#battery-q4-40-e-tron-and-q4-50-e-tron) | 82kWh | 77kWh | 125kW | 493kg | 0.188 |
| [Q4 e-tron 35](/models/q4-e-tron/drivetrain/battery/#battery-q4-35) | 55kWh | 52kWh | 100kW | 344kg | 0.160 |

*1 Audi Q6 details are not yet confirmed.

*2 Audi A6 details are not yet confirmed.

*3 From January 2021 Audi uses Samsung cells on e-tron 55

## What is next for Audi?

The problem with today's approach with Cell2Modules is that the energy density on the battery system is much lower than on the cell level.
This is because of all the structural elements in a battery that does not add any energy content to a battery pack.

To reduce this problem Volkswagen is moving to a Cell2Pack technology where Audi with its Artemis project will launch the first car in
late 2024.

The technology is based on putting the cells directly in to the pack increasing the energy density to the battery system. This reduces weight and increases capacity.

On March 15. 2021 the Volkswagen group that Audi is part of, presented their strategy as part of Power day.

<figure>
    <a href="https://media.electrichasgoneaudi.net/multimedia/technology/battery/batterysystem/cell2pack.jpg">
        <img src="https://media.electrichasgoneaudi.net/multimedia/technology/battery/batterysystem/cell2packs.jpg"
        alt="Volkswagen Cell2Pack technology" title="Volkswagen Cell2Pack technology">
    </a>
    <figcaption><h4>Volkswagen Cell2Pack technology</h4></figcaption>
</figure>

<figure>
    <a href="https://media.electrichasgoneaudi.net/multimedia/technology/battery/batterysystem/cell2packcomparison.jpg">
        <img src="https://media.electrichasgoneaudi.net/multimedia/technology/battery/batterysystem/cell2packcomparisons.jpg"
        alt="Volkswagen Cell2Pack comparison" title="Volkswagen Cell2Pack comparison">
    </a>
    <figcaption><h4>Volkswagen Cell2Pack comparison</h4></figcaption>
</figure>

See the complete presentation.

{{< youtube UQZ8KmCItF8 >}}
