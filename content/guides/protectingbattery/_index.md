---
title: How to extend EV battery life?
linktitle: Extending Battery Life
description: One of the primary concerns for prospective electric vehicle (EV) buyers is battery longevity and the potential cost of replacement. 
weight: 1
---
<!-- markdownlint-disable MD033 -->

More than a decade after the launch of the Tesla Model S, we now have evidence that EV batteries tend to last longer than many initially feared.
However, there are still key strategies you can follow to maximize your EV's battery life and minimize degradation.
Much like the lithium-ion batteries in smartphones and other devices, EV batteries degrade over time, losing capacity. 

While this degradation occurs much more slowly in EVs, you can still adopt certain practices to further extend your battery’s lifespan.

## Tip 1: Minimize High State of Charge

One of the most effective ways to preserve battery life is to avoid keeping your battery at a high state of charge for extended periods. The optimal range is generally between 30% and 50%, depending on your usage patterns. 

The diagram below show the storage stress on cells with different state of charge with 3 different tempratures. 

{{< sitefiguresized thumb="guides/protectingbattery/evstoragestress_st.png" width="623" height="473" title="Storage stress" >}}

Most EV manufacturers recommend not charging more than 80% on a daily basis. This recommendation is typically shown in the MMI and the user manual.

{{< sitefiguresized thumb="guides/protectingbattery/chargingtarget_st.png" width="959" height="478" title="Charging target" >}}


### Recomended Charging strategy 

With this knowledge you can implement a strategty to reduce storage stress. 

**Daily short commutes:** If you drive a limited distance daily and consume about 20% of your battery, setting your charging target to 60% will help maintain an average charge of around 50%. This also gives you enough energy to double your driving range if needed.

**Moderate daily use:** If you consume around 50% of your battery each day, set your charging target at 80% and recharge once your battery drops to 30%. Many EVs and home chargers allow you to schedule charging sessions, which can also help you take advantage of lower electricity rates during off-peak hours, typically at night or early morning.

**High daily use:** If you consume around 80% of your battery each day, try to time charging so hit 95% when you need to leave. Then you have15% buffer for additional driving before running empty.  You might consider getting a EV with longer range



### For owners depending on DC Fast Charging. 

If you are depending on DC Fast charging this above strategy could be a hassle. This is a possible strategy for you


**Daily short commutes:** It all depends on how easy access you have to fast charger. When using a fast charger, aim for 80% and let the battery drain to 20% before recharging again. This cycle is less stressful on the battery than charging to 100%.

For the two **other scenarios** you should try to charge before just before going to work or leaving from work. In that way you will limit the time on high state of charge. 


## Comparision of strategies

To compare how the recomended strategies compares to a strategy where you always charge to 100% we put
the data in a table. We assume 8 hours at work and charging with 10kW AC charging. 

This is based on a battery with 100kWh usable capacity.

{{< sitefiguresized thumb="guides/protectingbattery/strategy_1_st.png" width="2493" height="1547" title="Charging to 100%" >}}

{{< sitefiguresized thumb="guides/protectingbattery/strategy_2_st.png" width="2493" height="1547" title="Using recomend strategy" >}}

<table class="table table-striped border">
<thead>
    <tr>
        <th>
            Scenario
        </th>
        <th>
            Average SOC 100% strategy
        </th>
        <th>
            Average SOC recomend strategy
        </th>
    </tr>
</thead>
<tbody>
<tr>
    <td>
        Short commutes
    </td>
    <td>94%
    </td>
    <td>55%
    </td>
</tr>
<tr> 
    <td>
        Modest commutes
    </td>
    <td>83%
    </td>
    <td>63%
    </td>
</tr>
<tr> 
    <td>
        Long commutes
    </td>
    <td>48%
    </td>
    <td>65%
    </td>
</tr>
</tbody>
</table>

You see from the graph and table that following the recomended 

## Tip 2: Reduce Fast Charging Frequency

While fast charging is convenient, it can accelerate battery degradation if overused. For longevity, opt for slower AC charging whenever possible. Charging your car slowly over 5 hours is gentler on the battery than relying on a fast charger that recharges your vehicle in 20-30 minutes. Use fast chargers only when necessary, such as on long trips.

## Tip 3: Avoid Extreme Heat

Heat is a major enemy of battery health. Whenever possible, park your EV in the shade or in a garage to avoid exposing the battery to extreme temperatures. High heat can increase the rate of degradation, especially if the car is fully charged. In warmer climates, it's even more critical to manage charging schedules and storage to keep the car cool.

## Tip 4: Improve Energy Efficiency

Finally, reducing energy consumption helps conserve battery life. Simple practices such as using eco-driving modes, avoiding harsh acceleration, and maintaining proper tire pressure can extend the range and lifespan of your battery. Efficient driving not only maximizes your battery’s performance but also reduces the frequency of charging, thereby slowing the degradation process.

he number of charge cycles also affects battery degradation. The diagram below shows how the battery degrades based on charging habits.

{{< sitefiguresized thumb="guides/protectingbattery/dstcycles_st.png" width="570" height="456" title="DST Cycles" >}}


## What do we know about real world degradation

With now more than a deceade of long range EVs avaiable in the market we are starting to get some good statisics on how battery degrades. 





You can find more information about battery degradation in our [battery guide](../../../technology/battery/).

