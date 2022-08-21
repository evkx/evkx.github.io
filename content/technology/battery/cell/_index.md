---
title: Cell & chemistry
linktitle: Cell & Chemistry
description: The battery cells are the most important part of the battery system and the most important factor both for cost and performance on EV's.
weight: 2
---
<!-- markdownlint-disable MD033 -->
## Cell parts

### Anode

The anode material in the vast majority of lithium-ion batteries is graphite powder.

Graphite materials are either synthetically-produced or mined from the ground, and then processed before being baked onto a copper foil to serve as anodes.

Graphite anodes meet the voltage requirements of most common Li-ion cathodes, are relatively affordable, extremely light, porous, and durable.

### Cathode

There are multiple cathode materials to choose from within the Li-ion battery space.

Originally, the primary active component of the cathode was cobalt. To reduce the dependencies to cobalt different chemistries are used.

#### Lithium nickel manganese cobalt oxides (NMC)

[Lithium nickel manganese cobalt oxides](https://en.wikipedia.org/wiki/Lithium_nickel_manganese_cobalt_oxides) are the most common chemistry on EV's today.

The metal ratio varies. The version was NMC 111, then NMC 622 was the common followed by NCM 711. Many vendors are working on providing cells with an 811 metal ratio.

#### Lithium nickel cobalt aluminum oxides (NCA)

[Lithium nickel cobalt aluminum oxides](https://en.wikipedia.org/wiki/Lithium_nickel_cobalt_aluminum_oxides) (NCA) are used by Panasonic.

#### Lithium iron phosphate battery (LFP)

[Lithium iron phosphate battery](https://en.wikipedia.org/wiki/Lithium_iron_phosphate_battery)

### Seperator

A [separator](https://en.wikipedia.org/wiki/Separator_(electricity)) is a permeable membrane placed between a battery's anode and cathode.

### Electrolyte

Liquid electrolytes in lithium-ion batteries consist of lithium salts in an organic solvent, such as ethylene carbonate, dimethyl carbonate, and diethyl carbonate.

A liquid electrolyte acts as a conductive pathway for the movement of cations passing from the negative to the positive electrodes during discharge and the opposite direction when charging.

Electrolytes based on solid materials are areas that many works on. These are called [solid-state batteries](https://en.wikipedia.org/wiki/Solid-state_battery). Currently, there are no concrete plans for any mass production EV with Solid-state batteries.

### Current collector

 The current collector is used to provide the conduction of electrons from inside the electrochemical reaction to the external part without any reaction within the operation window.

 Currently used collectors are mostly made of aluminum or copper foils.

## Cell Housing

Cells for EV's come in 3 different housings

### Cylinder housing

A cylindrical cell consists of sheet-like anodes, separators, and cathodes that are sandwiched, rolled up, and packed into a cylinder-shaped can. This is the form factor that has been used for years in the market.

<figure>
    <a href="https://media.electrichasgoneaudi.net/multimedia/technology/battery/cell/cylinder4680.jpg">
        <img src="https://media.electrichasgoneaudi.net/multimedia/technology/battery/cell/cylinder4680s.jpg"
        alt="Tesla 4680 cylinder battery" title="Tesla 4680 cylinder battery">
    </a>
    <figcaption><h4>Tesla 4680 cylinder battery</h4></figcaption>
</figure>

One advantage is mechanical stability. The round shape of the battery distributes the internal pressure from side reactions over the cell circumference almost evenly. This allows the cell to tolerate a higher level of internal pressure without deformation.

Tesla is one of the few EV manufacturers that uses this.

### Prismatic housing

Li-ion cells with prismatic housing consist of large sheets of anodes, cathodes, and separators sandwiched, rolled up, and pressed to fit into a hard-plastic or metallic housing in cubic form. The electrodes can also be assembled by layer stacking rather than jelly rolling.

<figure>
    <a href="https://media.electrichasgoneaudi.net/multimedia/technology/battery/cell/samsungprismatic.jpg">
        <img src="https://media.electrichasgoneaudi.net/multimedia/technology/battery/cell/samsungprismatics.jpg"
        alt="Samsung prismatic cells" title="Samsung prismatic cells">
    </a>
    <figcaption><h4>Samsung prismatic cells</h4></figcaption>
</figure>

Parts of the electrode and separator sheets of a prismatic cell that are close to the container corners can experience more stress. This can damage electrode coating and lead to the non-uniform distribution of the electrolyte.

When combining prismatic cells into packs, the cell box-like shape enables optimal use of the available space. However, this optimal space is achieved at the cost of more challenging thermal management. This is because there are no space cavities between the cells as there are in a pack of cylindrical cells.

### Pouch housing

Pouch cells do not have a rigid enclosure like prismatic and cylinder cells and use a sealed flexible foil as the cell container.

This makes it the most efficient use of space and achieves a 90 to 95 percent packaging efficiency, the highest among battery packs, advantages of flexible size, and safety performance. Eliminating the metal enclosure reduces weight but the cell needs some alternative support in the battery compartment.

Swelling Pouch Cell Battery as a Result of Gas Generation During Charge and Discharge

The electrode and separator layers of a pouch cell are stacked rather than jelly-rolled. With pouch cells, the designer should allocate enough space for the cell swelling. A swelling of as much as 8% to 10% can occur after 500 cycles.

<figure>
    <a href="https://media.electrichasgoneaudi.net/multimedia/technology/battery/cell/lgchenx21.jpg">
        <img src="https://media.electrichasgoneaudi.net/multimedia/technology/battery/cell/lgchenx21s.jpg"
        alt="LG Chem pouch cell" title="LG Chem pouch cell">
    </a>
    <figcaption><h4>LG Chem pouch cell</h4></figcaption>
</figure>

## Audi cells

The below table list the cells used on the different all-electric Audi models. Click on model-name
for more details about the cells.

| Model | Cell | Format | Capacity | Energy Density | Chemistry|
|-----|------|-----|------|------|------|
| [Audi e-tron 50](../../../models/e-tron/drivetrain/battery/#cell-technology) | Samsung SDI | Prismatic | 60AH | ? | NCM 622 |
| [Audi e-tron 55](../../../models/e-tron/drivetrain/battery/#cell-technology) | Samsung SDI | Prismatic | 60AH | ? | NCM 622 |
| [Audi e-tron 55](../../../models/e-tron/drivetrain/battery/#cell-technology) | LG Chem LGX N2.1 | Pouch | 60AH | 268 Wh/kg | NCM 622 |
| [Audi Q4 e-tron](../../../models/q4-e-tron/drivetrain/battery/#battery-cells) | LG Chem LGX E78 | Pouch | 78AH | 265 Wh/kg | NCM 712 |
| [Audi e-tron GT](../../../models/e-tron-gt/drivetrain/battery/#cell-technology) | LG Chem E66A | Pouch | 64.6AH | 263 Wh/kg | NCM 712 |

## Volkswagen Unified Cell

Volkswagen has decided to standardize on a prismatic cell with standard size and packaging.

The standardization will reduce the cell cost by 50%. 80% of the VW models will use unified cells.

 The first Audi model will be using it in 2025 on the new [SSP-platform](../../bev-platforms/ssp/).

<figure>
    <a href="https://media.electrichasgoneaudi.net/multimedia/technology/battery/cell/unifiedcell1.jpg">
        <img src="https://media.electrichasgoneaudi.net/multimedia/technology/battery/cell/unifiedcell1s.jpg"
        alt="Olaf Scholz with the first unified  cell" title="Olaf Scholz with the first unified cell">
    </a>
    <figcaption><h4>Olaf Scholz with the first unified  cell</h4></figcaption>
</figure>

VW’s unified cell technology uses the same physical pack formats, just with different chemistries inside, to make designing future EVs less expensive and requiring less time.
The unified cell dimensions are approximately 32 x 12 x 3 cm.

<figure>
    <a href="https://media.electrichasgoneaudi.net/multimedia/technology/bev-platforms/ssp/unifiedcell1.jpg">
        <img src="https://media.electrichasgoneaudi.net/multimedia/technology/bev-platforms/ssp/unifiedcell1s.jpg"
        alt="VW Unified cell" title="VW Unified cell">
    </a>
    <figcaption><h4>VW Unified cell</h4></figcaption>
</figure>

The cells will be produced on the [new Salzgiga](https://www.volkswagen-newsroom.com/en/press-releases/ground-breaking-in-salzgitter-volkswagen-enters-global-battery-business-with-powerco-8050) factory in [Salzgitter Germany](https://www.google.com/maps/@52.1896961,10.442521,878m/)





The ground breaking cermony for this factory was july 7. 2022.

<figure>
    <a href="https://media.electrichasgoneaudi.net/multimedia/technology/battery/cell/salzgiga1.jpg">
        <img src="https://media.electrichasgoneaudi.net/multimedia/technology/battery/cell/salzgiga1s.jpg"
        alt="Salzgiga factory" title="Salzgiga factory">
    </a>
    <figcaption><h4>Salzgiga factory</h4></figcaption>
</figure>

{{% children description="true" depth="1" %}}
