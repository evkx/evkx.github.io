---
title: Battery Thermal management 
linktitle: Thermal management 
description: Thermal management is essential for battery performance and health
weight: 6
---
<!-- markdownlint-disable MD033 -->
The optimal temperature for a battery is around 20-30 degrees Celcius for operating. For storage, the optimal temperature is even lower.

A battery pack has a thermal management system to try to keep the battery in the best operating condition.

A battery pack has a thermal management system to keep the battery in the best operating condition.

This system includes cooling and heating. 

## Battery Heating

When the battery is too cold, it cannot accept or deliver the maximum current, which reduces the range, performance, maximum regen braking, and charging speed. 

This limitation is because the chemical reactions inside the battery slow down when the temperature drops and the internal resistance increases.

Charging a cold battery at a high rate can also damage the battery cells and shorten their lifespan.

To overcome this problem, some EVs have a feature called battery preconditioning. This feature allows the EV to warm the battery to a suitable temperature before charging or driving. By doing so, the EV can preserve the battery health, increase the range, and shorten the charging time.

### How does battery preconditioning work?

Battery preconditioning uses the onboard heating system or the waste heat from the motor/drivetrain to raise the battery pack’s temperature.

{{< sitefiguresized thumb="technology/battery/thermalmanagment/thermal_management_st.jpg" width="2000" height="1200" title="Audi e-tron GT battery heating circuits" >}}


#### Automatic precondition when navigating to DC Fast charger

The most common way to activate battery precondition is to navigate to a DC Fast charger in the onboard navigation system. The system then calculates, based on the distance to the charger and temperature, how much it needs to heat to get the optimal temperature for charging. 

This way, the battery will be ready to accept the maximum current and charge faster. 

{{< sitefiguresized thumb="technology/battery/thermalmanagment/kiaev9precondition_st.jpg" width="2078" height="973" title="Kia EV9 with an active heating show at battery symbol lower right" >}} 

#### Manually activated precondition

Some models allow manual activation of battery precondition. This feature enables the driver to activate heating without telling the navigation system that you are going to a charger. 

{{< sitefiguresized thumb="technology/battery/thermalmanagment/vw_manual_preheating_st.jpg" width="2300" height="981" title="Manually Precondition VW ID7" >}} 

#### Precondition before traveling

If you have a home charging, a good option is to precondition the battery and cabin before driving when connected to the home charger. 

This way, you can start with a warm cabin and battery and a fully charged battery. 

Typically, the driver can start preconditioning from the Infotainment system or car App.

Some models do not support the precondition of the battery and only cabin. For these models, it can be an idea to ensure charging is finished just before starting the trip. 

{{< sitefiguresized thumb="technology/battery/thermalmanagment/preconditionwhencharging_1_st.jpg" width="3000" height="1892" title="Manually Precondition VW ID7" >}} 


### How powerful are the heating circuits?

The power of the heating circuits depends on the EV model and the battery size. For instance, the Tesla Model 3 has a 75 kWh battery pack and a 6 kW heating system, which can raise the battery temperature by about 18°C (32°F) in an hour. The Nissan Leaf has a 40 kWh battery pack and a 3 kW heating system, which can raise the battery temperature by about 9°C (16°F) in an hour.

For some models with low-power heating, getting the battery to optimal temperature in cold weather can be difficult. 

See the table below for some examples of battery heating power

<table class="table table-striped border">
    <thead>
        <tr>
        <th>Model
        </th>
        <th>Heating Power
        </th>
    </thead>
    <tbody>
    <tr>
        <td>Kia Ionic 6</td>
        <td>4.5kW</td>
    </tr>
</tbody>
</table>


### How does battery preconditioning affect the range?

Battery preconditioning does consume some energy from the battery, which reduces the available range.

However, this energy loss is partially compensated by the improved efficiency and performance of the battery at a higher temperature.

Moreover, preconditioning the battery while the EV is plugged in can minimize the energy loss, as the EV can draw power from the grid instead of the battery.

### Minimum SOC level for precondition

Most EVs have a limit on how low the State of Charge can be 

{{< sitefiguresized thumb="technology/battery/thermalmanagment/preconditiondisabled_st.jpg" width="2054" height="957" title="Kia EV9 GT-Line disabling precondition at 12% SOC" >}}

You can see in <a href="https://youtu.be/rKgnVzUJAfA?t=638" target="_blank">this test</a> from Bjørn Nyland how Kia EV9 disables precondition at 12%.

## Battery Cooling 

The battery temperature can rise to high levels during high-speed charging or sporty driving.
When the battery is too hot, it can degrade faster, lose capacity, and reduce the range. 

This effect is because the chemical reactions inside the battery accelerate when the temperature rises, and the internal resistance decreases. Charging a hot battery at a high rate can also damage the cells and shorten their lifespan.

Typically, manufacturers will derate both charging and power output if the temperature in the battery is too high.

To overcome this problem, some EVs have active battery cooling. This feature allows the EV to lower the battery's temperature to a suitable level during charging or driving to increase charging or driving performance. 


### How does battery cooling work?

Battery cooling uses a liquid-based system that circulates a coolant through the battery pack. The coolant absorbs the heat from the battery cells and transfers it to a radiator. The radiator then dissipates the heat to the ambient air or another cooling loop using a refrigerant or heat pump. The coolant can be a water-ethylene glycol mixture, a dielectric fluid, or a fluid containing thermally conductive particles.

{{< sitefiguresized thumb="technology/battery/thermalmanagment/batterycooling_1_st.jpg" width="3000" height="1808" title="Audi e-tron battery cooling circuits" >}} 


In <a href="https://youtu.be/Q0LaUx5I_28?t=412" target="_blank">this 1000km test</a> by Bjørn Nyland, the BMW i50 has a problem with overheating after charging and reduced the available power.

<br />

<div class="mt-3 mb-3">
    <a href="../batterymanagment/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i> Battery management</strong></a>
    <a href="../cellbalancing/" class="text-decoration-none text-black float-end"><strong>Cell balancing <i class="bi-arrow-right"></i></strong></a>
</div>
