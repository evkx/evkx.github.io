---
title: Battery pack & configuration
linktitle: Battery pack & configuration
description: The battery system combines many cells and other control electronics into a full battery to power the EV.
weight: 4
---
<!-- markdownlint-disable MD033 -->
## Battery Configuration

In an electric vehicle (EV), the battery configuration refers to the arrangement of individual battery cells within the battery pack. The battery configuration can affect the voltage, capacity, power output, and other aspects of the battery pack and the overall vehicle performance.

The most common configuration for EV batteries is a series-parallel hybrid configuration. In this configuration, multiple cells are connected in series to increase the voltage of the battery pack, and multiple groups of series-connected cells are then connected in parallel to increase the overall capacity of the battery pack.

The series connection of cells increases the voltage output of the battery pack, which is important for providing the necessary power output to drive the vehicle.  The parallel connection of cell groups increases the battery pack's capacity, which is essential for storing the energy required to drive the car to a desired range.

The specific battery configuration used in an EV depends on a variety of factors, such as the desired range, power output, and overall vehicle weight.

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6415007331199958"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-6415007331199958"
     data-ad-slot="6143356420"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

### 400 or 800 volts?

Manufacturers typically configure the packs to be around 400 volts or 800 volts.

A higher voltage battery configuration, such as an 800-volt system, can offer some advantages over a lower voltage 400-volt system but also has potential drawbacks. Here are some of the pros and cons of each configuration:

#### Pros 400 Volt package

**More mature technology:** 400-volt battery systems have been around longer and are more widely used in electric vehicles, which means they are more proven and reliable.

**Lower cost:** Because they are a more established technology, 400-volt battery systems tend to be less expensive to produce than higher voltage systems.

**Widely available charging infrastructure:** There are many public charging stations that support 400-volt charging, making it easier to find places to charge your EV.

**More available cell configurations**  400 Volt packs can be configured in more ways giving the manufactor more cell options.

#### Cons 400 Volt package

Slower charging: A 400-volt battery system typically requires longer charging times than an 800-volt system, which can be a disadvantage if you need to charge your vehicle quickly.

**Limited power output:** 400-volt battery systems may not be able to deliver the same level of power output as an 800-volt system, which could limit the acceleration and performance of the EV.

**Heavier:** A 400-volt battery system may require thicker cables to support same charging speed. 

#### Pros 800 Volt package

Faster charging: An 800-volt battery system can support faster charging times than a 400-volt system, which means you can charge your EV more quickly.

**Higher power output:** An 800-volt battery system can deliver more power output, which can provide better acceleration and performance, but in reality the most powersfull evs are 400 Volt. So this is not a real benefit.

**Lighter weight:** An 800-volt battery system may require thinner cables to support high speed charging.

#### Cons 800 Volt package:

**Limited charging infrastructure**: There are currently fewer public charging stations that support 800-volt charging, which means it may be harder to find places to charge your EV.

Here are some configuration examples

| Model | Gross Capacity | Configuration | Nominal Voltage |
|------|------|-------|-----|
| Audi Q8 e-tron | 116kWh | 108s4p | 396 Volt|
| Audi e-tron GT | 93.7kWh | 198s2p | 725 Volt |
| Kia EV6 GT | 77.4 | 192s2p | 697 Volt |
| [Tesla Model Y Long Range](../../../models/tesla/model_y/model_y_long_range/) | 78.1kWh | 96s46p | 357 Volt |

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6415007331199958"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-6415007331199958"
     data-ad-slot="6143356420"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

## Battery pack designs


## Cell-to-module

Cell-to-module (C2M) is a technology used in electric vehicle (EV) battery packs that allows for a more modular and scalable design compared to traditional battery pack designs.

In a traditional EV battery pack, individual battery cells are connected to form a module, and multiple modules are then connected in series and/or parallel to form the complete battery pack. This can be complex and expensive, especially in large battery packs, and may require extensive wiring and cooling systems to ensure even charging and discharging of the cells.

<figure>
    <a href="https://media.electrichasgoneaudi.net/multimedia/technology/battery/batterysystem/module_lg_pouch.jpg">
        <img src="https://media.electrichasgoneaudi.net/multimedia/technology/battery/batterysystem/module_lg_pouch.jpg"
        alt="LG battery module" title="LG battery module">
    </a>
    <figcaption><h4>LG battery module</h4></figcaption>
</figure>

With C2M technology, multiple battery cells are assembled into a single, self-contained module with integrated electronics and cooling systems. The modules can then be easily connected together to form the complete battery pack. Each module has its own BMS (battery management system) that monitors and controls the charging and discharging of the cells within the module, allowing for more precise control and monitoring of the individual cells.

C2M technology has several advantages over traditional battery pack designs. It can simplify the overall design of the battery pack, reduce wiring and cooling requirements, and allow for greater flexibility in the overall pack design. It can also improve the overall reliability of the pack, since each module is self-contained and faults can be detected and isolated more quickly.

<figure>
    <a href="https://media.electrichasgoneaudi.net/multimedia/technology/battery/batterysystem/batterypack_e-tron-gt.jpg">
        <img src="https://media.electrichasgoneaudi.net/multimedia/technology/battery/batterysystem/batterypack_e-tron-gts.jpg"
        alt="Battery pack with 33 modules" title="Battery pack with 33 modules">
    </a>
    <figcaption><h4>Battery pack with 33 modules</h4></figcaption>
</figure>

## Cell-to-pack

Cell-to-pack (C2P) is a technology used in electric vehicle (EV) battery packs that eliminates the need for a separate battery management system (BMS).

In a traditional EV battery pack, individual battery cells are connected to a central BMS that monitors and controls the charging and discharging of each cell. This can be complex and expensive, especially in large battery packs.

With C2P technology, the individual cells are connected directly to the vehicle's power electronics without the need for a central BMS. This is made possible by using a dedicated microcontroller in each battery cell to monitor and report on its status. These microcontrollers can communicate with each other and with the vehicle's power electronics to ensure that the cells are charged and discharged evenly and safely.

C2P technology has several advantages over traditional battery pack designs. It can reduce the weight and complexity of the battery pack, as well as increase its energy density. It can also improve the overall reliability of the pack, since each cell is monitored individually and faults can be detected and isolated more quickly.

Overall, cell-to-pack technology is a promising innovation in EV battery design that could help reduce costs and improve performance.

## Structural battery pack

A structural battery pack is a type of battery pack that is integrated into the structure of a vehicle or other device, serving both as a source of power and as a structural component. This approach can reduce the weight and complexity of the device, while also improving its overall performance and efficiency.

In a traditional battery pack, the battery cells are usually arranged in a specific configuration and enclosed within a protective casing. This casing adds weight and complexity to the overall design of the device, and may require additional support structures to ensure proper installation and operation.

With a structural battery pack, the battery cells are integrated directly into the vehicle or device's structure, such as the chassis or body panels. The battery cells themselves serve as both a source of power and as a structural component, providing support and strength to the overall design. This approach can reduce the overall weight of the device and improve its efficiency by eliminating the need for separate support structures and protective casings.

Structural battery packs are still a relatively new concept, but they are being explored and developed by a number of companies and research institutions. They have the potential to revolutionize the design of electric vehicles and other devices by reducing weight and complexity, improving performance, and making it easier to integrate battery technology into a wide range of applications.

Currently it is only Tesla Model Y that have structural packs. According to Tesla, this solution presents many advantages, such as a great reduction in the number of parts used in both the battery pack and the car, which allows the pack manufacturing line to be less than half the size of previous factories.

More importantly, the company said the new cells together with the structural pack are expected to increase the Model Y's range by 16 percent and decrease the overall weight of the car by 10 percent, resulting in improved acceleration and handling.

The below video show a detailed analysis of the pack by Munro & Associates.

{{< youtube FXpfU6I_T3w >}}

<br /> <br />

Continue reading about [Battery Mangement System](../batterymanagment/) or go back to [article overview](../). 