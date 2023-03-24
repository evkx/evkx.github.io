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
