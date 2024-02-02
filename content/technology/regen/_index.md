---
title: Regenerative braking
linktitle: Regenerative braking
description: Regenerative braking is a critical feature of modern EVs, allowing the vehicle to recover energy during braking and deceleration.
weight: 2
shownavtabs: true
---
<!-- markdownlint-disable MD033 -->
By converting the vehicle’s kinetic energy into electrical energy and storing it in the battery, regenerative braking can extend the vehicle’s range and improve overall efficiency. This article will explore the different types of regenerative braking strategies used in EVs, their benefits, and their limitations.

## How does it work?

Regenerative braking is a process where the kinetic energy of a moving vehicle is captured and stored as electrical energy in the vehicle’s battery during braking or deceleration.

An electric motor can work as a generator in an EV by using the principle of electromagnetic induction, which states that the change in the magnetic field around a conductor generates an electric current in the circuit. When an electric motor rotates, it creates a magnetic field that interacts with the stator windings and produces an electric current that powers the vehicle. When the car decelerates or brakes, the wheels drive the motor in reverse, causing the magnetic field to change direction and induce electric current in the opposite direction. This current can be fed back to the battery and stored as energy, reducing the need for conventional friction brakes and increasing the range and efficiency of the EV.

{{< sitefiguresized thumb="technology/regen/illustration1_st.jpg" width="3000" height="1999" title="Illustration Regen Audi Q8 e-tron" >}}

## Types of Regenerative Braking Strategies

The EV manufacturers provide regenerative braking with different strategies. There are three main types of regen strategy. Some manufacturers only give one possibility, while others let the driver choose between two or all three.

### One-Pedal Driving / lift-of regen

One pedal regen is a feature of some electric vehicles that allows them to control the acceleration and deceleration of the car with only the accelerator pedal.

When the driver presses the pedal, the vehicle accelerates. When the driver releases the pedal, the car decelerates using regenerative braking, which converts the vehicle’s kinetic energy into electrical energy that the 
EV stores in the battery. This type of regen is also called throttle lift-of regen.
Depending on the vehicle settings and driving conditions, one pedal regen can bring the vehicle to a complete stop or maintain a low speed until the driver presses the pedal again.

The benefit of one-pedal driving is that you only need to use one pedal.

The cons of one-pedal regen are that it can require some adaptation from drivers who are used to traditional two-pedal driving. Full lift-up regen can be a disadvantage on a slippery road since it will break hard if you quickly remove the foot from the pedal. Many recommend reducing the regenerative force in winter. 

In addition, it can vary in performance depending on factors such as battery state of charge, temperature, road gradient, and traffic flow.
While some EVs have a fixed level of regen for one-pedal driving, others have paddles on the steering wheel to activate regen on different levels.

{{< sitefiguresized thumb="technology/regen/kiaev6regenpaddles_st.jpg" width="1920" height="1200" title="Kia EV6 Regen paddles" >}}

Others, like Tesla, have settings available in their infotainment system.

{{< sitefiguresized thumb="technology/regen/teslaregensetting_st.jpg" width="1844" height="1104" title="Tesla one-pedal driving settings" >}}

In the picture above, you also see how Tesla lets the driver decide how the car should behave at low speed. For example, they can add physical brakes at low vehicle speeds to make the vehicle entirely stop and hold.

{{<evkxdisplayaddarticle />}}

### Manual regen using the brake pedal

By pressing the brake pedal, you can regenerate energy on EVs with blended brakes.

Regen using a blended brake system in EVs, uses sensors and algorithms to determine the optimal balance between regenerative braking and friction braking, depending on factors such as driver input, battery state of charge, road conditions, traffic situation, and vehicle speed.

The system can also work with driver assistance systems such as adaptive cruise control or collision avoidance to enhance safety and convenience.

### Adaptive regen

Adaptive regen is a feature of some electric vehicles that allows them to adjust the level of regenerative braking according to the driving situation.

Adaptive regen works by using sensors, cameras, and navigation data to detect traffic conditions, road curvature, speed limits, and other factors that affect the optimal deceleration rate of the vehicle. Based on this information, the system can automatically increase or decrease the regen level when the driver releases the accelerator pedal without requiring manual input or mode selection.

The benefit of adaptive regen is that it can provide a smoother and more natural driving experience and more effective energy recovery. In addition, by adjusting the regen level according to the situation, adaptive regen can avoid excessive or insufficient braking that might cause discomfort or waste energy since it will coast when possible. The adaptive regen can also work with the driver assistance systems to enhance safety and convenience, such as maintaining a safe distance from the vehicle ahead or slowing down for a sharp turn.

Some examples of EVs that offer adaptive regen are the Porsche Taycan and the the BMW i4. These EVs use different technologies and algorithms to implement adaptive regen, but all aim to provide their drivers with a better one-pedal driving experience.

{{<evkxdisplayaddarticle />}}

## Max Regenerative Braking Power

The maximum regenerative power of an EV depends on several factors, such as the type and size of the motor, the speed and state of charge of the battery, and the settings and modes of the vehicle. Different EVs have different levels of regenerative braking, but typically, it is from above 50kW on small cars to 300kW on the most powerful.

## Brake lights & regenerative braking

{{< sitefiguresized thumb="technology/regen/rearlights_1_st.jpg" width="3000" height="2000" title="KIA EV6 brake lights" >}}

Typical brake lights will come on as long as the braking force is high enough to reduce speed substantially. But this is not always the case. For example, Hyundai Ionic 5 does not enable the braking lights when using one-pedal driving. This behavior can be dangerous. This danger is explained in [this video](https://www.youtube.com/watch?v=U0YW7x9U5TQ). Check how your EV works so you are not rear-ended.
In Europe, the [regulation](https://unece.org/transport/documents/2022/02/standards/un-regulation-no-13h-revision-4-amendment-2) is that if deceleration is above 1.3 m/s2, it should generate a brake signal.


## Benefits of Regenerative Braking

There are several benefits to regenerative braking, including:

**Improved Efficiency:** By recovering energy during braking and deceleration, regenerative braking can extend the vehicle’s range and improve efficiency.

**Reduced Wear on Brakes:** Because regenerative braking can handle much of the vehicle’s braking force, it can reduce wear on its [mechanical brakes](../brakes/), leading to lower maintenance costs.

**Smoother Braking:** Regenerative braking can provide smoother and more consistent braking than traditional friction brakes, leading to a more comfortable ride for passengers.

{{<evkxdisplayaddarticle />}}

## Limitations of Regenerative Braking

While regenerative braking offers many benefits, the technology has some limitations. These include:

**Reduced Effectiveness at High Speeds:** Regenerative braking is less effective at high speeds, as the amount of kinetic energy that can be captured and stored decreases as the vehicle's speed increases.

**Limited Range Extension:** Regenerative braking can extend the vehicle’s range. Still, the amount of energy the car recovers is limited, and the overall impact on the vehicle range can vary depending on driving conditions.

**Reduced Brake Feel:** Because regenerative braking uses the electric motor to slow the vehicle, it can reduce the brake pedal's feel, making it less intuitive for some drivers.

## How much can be regenerated?

In the second part, we give detailed calculations on how much energy can be regenerated and how that affects range. We also explain the physics behind the math.

[Go to regen calculations.](calculations)


<div class="mt-3 mb-3">
    <a href="../motors/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i> Motors & Drive Units</strong></a>
    <a href="calculations/" class="text-decoration-none text-black float-end"><strong>Regen calculations<i class="bi-arrow-right"></i></strong></a>
</div>
