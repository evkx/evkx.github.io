---
title: How much can be regenerated?
linktitle: Regen calculations
description: The following scenarios use math and physics to explain how significant the benefits of regenerative braking are.
weight: 3
---
<!-- markdownlint-disable MD033 -->

We explain the details behind the calculation in the physics chapter. Still, you should know that a moving object has kinetic energy that the EV can recover with regenerative braking. A car in an elevated position has potential energy that regenerative braking can recover.

In addition, aerodynamic drag and rolling resistance work against the car’s movement.

The drivetrain is also not without loss, meaning the drivetrain loses some energy when converting energy from power on the battery to movement of the car or vice versa, from movement on the vehicle to power on the battery. On a typical EV, this efficiency is about 80-85%. In our calculations, we use 80%.

### Scenario 1: Pikes Peak

Let's take Pikes Peak as an example. This mountain is 14.110 ft (4300 meters) high, but if you drive down the [first 18.6 miles](https://www.google.com/maps/dir/Pikes+Peak,+Colorado+80809,+United+States/38.9057543,-104.9779289/@38.8779104,-105.0432721,10824m/data=!3m1!1e3!4m9!4m8!1m5!1m1!1s0x8714a806033005bd:0xa67b8c79d6580c1e!2m2!1d-105.0422595!2d38.8408707!1m0!3e0), you [have dropped 6538 ft](https://www.slashgear.com/audi-e-tron-pikes-peak-recuperation-challenge-first-drive-ev-tech-07540279/)  (1993 meters)

1993 meters for an Audi e-tron 55 at 2900kg is 15.74kWh in potential energy.

{{< sitefiguresized thumb="technology/regen/calculations/pikespeak_st.jpg" width="3000" height="2000" title="Driving down Pikes Peak in Audi e-tron" >}}

18.6 miles is 30 km. The speed down is low and based on rolling resistance and speed at 40km/h have an energy consumption of 10.52kWh/100km.

For 30km /18.6miles this means 3.15 kWh in total. This energy will be taken from the potential energy.

This means 12.59kWh to regenerate. With 80% efficiency, this would mean 10.07kWh back into the battery.

In the video below you see a real-world test of just exactly this trip and how much they are able to regenerate.

{{< youtube vrYRJ9TuaX0 >}}

### Scenario 2: Fully stop from 75mph

In this scenario, the car is moving at 75mph (120.7km/h) and needs to make a full stop for a red light.

{{< sitefiguresized thumb="technology/regen/calculations/stop_st.jpg" width="2000" height="300" title="Making a full stop from 75mph" >}}

As shown in the graph below 75mph for a 2900kg Audi e-tron gives the total kinetic energy of 0,473 kWh.

With 80% drivetrain efficiency, this means the car will be able to get 0.38kWh back to the battery.

A full trip on 100km (62 miles) with 10 full stops like this would then save 3.8kWh for the total trip compared with a car with only friction brakes.

This means a consumption reduction of 3.8kWh/100km.  

### Scenario 3: Reduce speed from 30 mph to fully stop

{{< sitefiguresized thumb="technology/regen/calculations/fullstop_st.jpg" width="1400" height="995" title="Making a full stop from 30mph" >}}

This scenario is a typical city-driving scenario. When driving at 30 mph (48.28km/h), the Audi e-tron has a total kinetic energy of 0,0756kWh.

Based on the 80% efficiency of the drivetrain, this saves 0,061kWh back to the battery.

If you drive 100km in city traffic and need to make 100 stops like this, you save 6,05 kWh of energy.

This regeneration reduces energy consumption by 6.05kWh/100km compared to a car with only [friction brakes](../../brakes/).

### Scenario 4: Driving down from Saltfjellet mountain

{{< sitefiguresized thumb="technology/regen/calculations/saltfjellet_st.jpg" width="768" height="558" title="Saltfjellet in winter" >}}

This mountain is located in Northern Norway and the main road from South to North passes over it (E6).

If we take [this section](https://www.google.com/maps/dir/66.6848804,15.4189889/66.8133394,15.4007768/@66.7980852,15.1624003,10z/data=!3m1!4b1) of the road where it starts to go downhill we see that the start is at 650 meters (2132feet) and it ends at 125 meters (410 feet) above sea level. 
With a distance of 16.4 km (10.2 miles), this gives a decline of 3.1%

This means potential energy of 4.147 kWh.

The speed limit is 80km/h (49.7mph) and based on standard consumption on a dry road, this would mean that this car requires 2.49kWh to roll this distance driven by the potential energy.

The rest could be regenerated, and with 80% efficiency, this gives 1.3kWh back in the battery.

1.3kWh should give 6.8km additional range in 80km/h (49.7mph)

## Understanding the physics

### Kinetic energy

A moving object has kinetic energy. This energy depends on the weight of the object and the speed of the object.

The formula is

![\Large x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}](https://latex.codecogs.com/svg.image?KE&space;=&space;\frac{1}{2}mv{2}) 

Where

- KE = kinetic energy in Joule
- m = mass of a body
- v = velocity of a body in meters/second

In addition, 1 Joule is 2.778·10⁻⁴ Wh

In all calculations on this page, we use the Audi e-tron 55 with a weight of 2900kg in the examples (car + driver). The below table shows how much kinetic energy this car will have in common speeds-

|Speed km/h | mph | m/s | Kinetic energy |
|----|-----|-----|-----|
| 50 kmh | 31.07 mph | 13.89 m/s |  0,0777 kWh |
| 80 km/h | 49,7 mph | 22.222 m/s| 0.199 kWh |
| 104.7km/h | 65 mph | 29.0575 m/s | 0.34 kWh |
| 120.7km/h | 75 mph | 33.528 m/s | 0.453 kWh |

You can use this [kinetic energy calculator](https://www.omnicalculator.com/physics/kinetic-energy) for other speeds. See also the graph below.

### Rotational kinetic energy

In addition to the kinetic energy of the car itself, the wheels spinning on the car also contain rotational kinetic energy that can be regenerated.

The formula for rotational energy

![Formula](rotational_energy.svg)

- E: the rotational kinetic energy, expressed in Joules.
- I: the moment of inertia of the object, expressed in kg*m².
- ω: the angular velocity of the body, expressed in radians per second

For a wheel moment of inertia can be calculated

I = M * R²

For an Audi e-tron, we do the calculation for the wheel option 265/40 R22. With an estimated weight of 30 kg per wheel and a radius of 38.54 cm you get

I = 30 * 0.3854^2 = 4,4559948

For 80km/h the wheel will spin with 566.89 rpm and the resulting kinetic energy would be 8.724 Wh or 0,008724 kWh for 4 wheels.

Note: This is not 100% correct since the formula is based on a wheel with the same form from center to edge. But it is close enough for this kind of calculation.

If you want to calculate you can try the [Rotational Kinetic Energy calculator](https://www.omnicalculator.com/physics/rotational-kinetic-energy)

### Gravitational/Potential energy

Potential energy exists when the car is located at an elevated location compared to the destination.

The formula is quite simple.

![Gravity](gravitational_energy.svg)

- U: gravitational energy in joule
- m: mass in kg
- g: gravitational field 9.8 m/s^2 on surface
- h: height in meters

For example, the Audi e-tron 55 on 2900kg located at 1000 meters (3280 feet) above sea level will have the potential energy of 7.8998 kWh (28.492.85 Joule)

In areas with elevation, the potential energy will be the biggest source of regenerated energy.

See [potential energy calculator](https://www.omnicalculator.com/physics/potential-energy)

### Summary

The below graph shows the total kinetic energy and the two types of kinetic energy.

{{< sitefiguresized thumb="technology/regen/calculations/kinetic_st.png" width="2965" height="1645" title="Graph over kinetic energy" >}}

## Understanding energy consumption

Before we give you an example of how much energy can be regenerated, we need to explain energy consumption. Because this affects the result.

### Consumption by aerodynamic drag

A moving car will have forces based on air resistance that will push against the movement.

{{< sitefiguresized thumb="technology/regen/calculations/windtunnel_st.jpg" width="3000" height="1539" title="Audi e-tron in wind tunnel" >}}

The formula for drag is:

![Drag](dragformula.png)

- P: Air density (1.225 on the ground at 15 °C)
- u: Speed in meters/second
- A: Frontal area of the car (2.65m2 on Audi e-tron)
- CD: 0.28 on Audi e-tron 55

Based on this as an example. 80km/h requires power on 4.9kW (6.23kWh/100km) to overcome aerodynamic drag

Note that the power needed to push an object through a fluid increases as the cube of the velocity, so an Audi e-tron 55 traveling at 160km/h
requires 39,89 kW (24,94 kWh/100km) to overcome drag.

Temperature affects density. At -25 the density is 1.4224 and the consumption at 80 km/h increases to 7.23kWh/100km.

For all calculations on this article, we assume 15 °C

### Rolling resistance

In addition to drag force, there is rolling resistance from wheels and other drivetrain components that works against movement.

It is not easy to find this number, but with knowing the total consumption and the consumption caused by drag, and the efficiency on the drivetrain it is possible to estimate the rolling resistance on the Audi e-tron.

Based on driver history it seems like driving on a dry road at 80 km/h in summer temperature requires around 19kWh/100km energy from the battery.
If we assume 80% efficiency in the drivetrain, we have an energy need of 15.2kWh/100km in total including drag.  

If we take away the energy needed for drag, we have around 8.95kWh/100km to overcome rolling resistance.

This number is an estimate. On wet roads or roads with snow, the rolling resistance increases.

### Consumption summary

The below diagram shows the calculated consumption needed to overcome drag and rolling resistance and consumption from the battery based on 80% efficiency of the drivetrain. The real efficiency is not known but it is expected to be around 80%.

{{< sitefiguresized thumb="technology/regen/calculations/consumption_st.png" width="2751" height="1567" title="Calculated consumption" >}}

See also [full table](https://media.electrichasgoneaudi.net/multimedia/guides/regen/consumptiontable.png) with kinetic energy and consumption for all speeds from 1-100 mph (1-161 km/h)

## Is regen the best option always?

Since regenerative braking is only 80% efficient it is best to avoid using it when you can. For scenario 1, driving down Pikes Peak is impossible without regenerative braking. If
you don't use regen you will crash. But if you assume flat road on scenarios 2 and 3, you would do better if you look ahead and let the car coast, so it uses the
rolling resistance and aerodynamic drag to reduce the speed.

This would mean you need to lift your foot from the watt pedal early enough so you stop at the point you want by itself.

So how much energy would that save? Two factors reduce total consumption.

- You will not lose 20% of the kinetic energy when regening
- You will not lose 20% of the energy trying to keep the speed

Theoretical this can save

- Scenario 2: 1.89 kWh/100km
- Scenario 3: 3.02 kWh/100km

But this is in the best-case scenario where you can calculate exactly where to lift the foot of the watt pedal. In the real world, this benefit would be smaller since you would end up needing to add some power or braking at the end when you are not able to calculate this correctly.

## Can you see in the car how much was regenerated?

A common misunderstanding is that you can look at the range reported in the car to see how much was regenerated. For most cars this is not possible

The range meter bases its calculation on the last 100km driven. If we take scenario 4 and assume the car has been driven from sea level up to the top at 650 meters in 80km/h (49.7 mph) the consumption would be 25.4kWh/100km at 650 meters.

On the Audi e-tron 55 with 86.5kWh battery capacity, the range would be calculated to 340km (211 miles) for a full battery based on this consumption.

After driving down the road section scenario 4 the total consumption from the battery would be reduced from 25.4kWh/100km to 21kWh/100km.

This would increase the calculated range to 411km (255 miles) for a charged 100% battery (less depending on the real SOC).  Based on this you could mistakenly believe that you have regenerated 71km (44 miles), but the correct is 6.8km.(4.2 miles)

This type of increase you could even see in scenarios where there is no regeneration, but just a decline that reduced the consumption.

The only way to know how much you have regenerated is to look at how much the state of charge of the battery changes from top to bottom of the mountain.

{{< sitefiguresized thumb="technology/regen/calculations/soc_st.jpg" width="1212" height="682" title="State of charge, the only way to see how much you have regenerated on many cars" >}}

## One pedal driving vs. manual/automatic regen

Depending on the EV, you can use regenerative brakes in different ways

- Manual, only using the brake pedal
- Automatic, letting the car decide when to regenerate
-One pedal driving - automatic regenerate when lifting the foot off the watt pedal

All methods use the same electric drivetrain components to do braking, so they have the same efficiency.

But one-pedal driving has a little reduced efficiency in scenarios where the driver wants to transition from using power to coasting.

Since you need to keep your foot on the pedal at a specific position and not use any energy or braking, you will always spend more time coming to this position than lifting the foot directly off the pedal. In addition, it takes some training to keep the foot in the perfect place.

That's why manufacators like Audi, Mercedes, Porsche recommends using automatic regen with coasting to save energy.

The difference is small, probably less than 10% of the difference between coasting and regenerative braking in the scenarios where coasting is possible.

There is no difference for scenarios like scenario 1 since you will do regenerative braking to keep the car on the road.

Since the difference is so small, you should choose based on your preference.

{{< pagenavigation b_url="../" b_title="Regenerative braking" f_url="../../safety/" f_title="Safety" >}}