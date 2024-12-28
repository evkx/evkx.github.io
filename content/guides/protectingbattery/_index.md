---
title: How to Extend EV Battery Life
linktitle: Extending Battery Life
description: Learn key strategies to maximize your electric vehicle's battery life and minimize degradation.
weight: 1
xsthumb: technology/battery/cell/bladebattery_xst.jpg
---
<!-- markdownlint-disable MD033 -->

More than a decade after the launch of the Tesla Model S, we now have evidence that EV batteries tend to last longer than many initially feared. However, there are still key strategies you can follow to maximize your EV's battery life and minimize degradation. Much like the lithium-ion batteries in smartphones and other devices, EV batteries degrade over time, losing capacity.

While this degradation occurs much more slowly in EVs, you can still adopt certain practices to further extend your battery’s lifespan.

## Tip 1: Minimize High State of Charge

One of the most effective ways to preserve battery life is to avoid keeping your battery at a high state of charge for extended periods. The optimal range is generally between 30% and 50%, depending on your usage patterns.

The diagram below shows the storage stress on cells with different states of charge at three different temperatures.

{{< sitefiguresized thumb="guides/protectingbattery/evstoragestress_st.png" width="623" height="473" title="Storage stress" >}}

Most EV manufacturers recommend not charging more than 80% on a daily basis. This recommendation is typically shown in the MMI and the user manual.

{{< sitefiguresized thumb="guides/protectingbattery/chargingtarget_st.png" width="959" height="478" title="Charging target" >}}

### Recommended Charging Strategy

With this knowledge, you can implement a strategy to reduce storage stress.

**Daily short commutes:** If you drive a limited distance daily and consume about 20% of your battery, setting your charging target to 60% will help maintain an average charge of around 50%. This also gives you enough energy to double your driving range if needed.

**Moderate daily use:** If you consume around 50% of your battery each day, set your charging target at 80% and recharge once your battery drops to 30%. Many EVs and home chargers allow you to schedule charging sessions, which can also help you take advantage of lower electricity rates during off-peak hours, typically at night or early morning.

**High daily use:** If you consume around 80% of your battery each day, try to time charging so you hit 95% when you need to leave. This gives you a 15% buffer for additional driving before running empty. You might consider getting an EV with a longer range.

### For Owners Depending on DC Fast Charging

If you depend on DC fast charging, the above strategy could be a hassle. This is a possible strategy for you:

**Daily short commutes:** It all depends on how easy access you have to a fast charger. When using a fast charger, aim for 80% and let the battery drain to 20% before recharging again. This cycle is less stressful on the battery than charging to 100%.

For the two **other scenarios**, you should try to charge just before going to work or leaving from work. In that way, you will limit the time at a high state of charge.

## Comparison of Strategies

To compare how the recommended strategies compare to a strategy where you always charge to 100%, we put the data in a table. We assume 8 hours at work and charging with 10kW AC charging.

This is based on a battery with 100kWh usable capacity.

{{< sitefiguresized thumb="guides/protectingbattery/strategy_1_st.png" width="2493" height="1547" title="Charging to 100%" >}}

{{< sitefiguresized thumb="guides/protectingbattery/strategy_2_st.png" width="2493" height="1547" title="Using recommended strategy" >}}

<table class="table table-striped border">
<thead>
    <tr>
        <th>Scenario</th>
        <th>Average SOC 100% Strategy</th>
        <th>Average SOC Recommended Strategy</th>
    </tr>
</thead>
<tbody>
<tr>
    <td>Short commutes</td>
    <td>94%</td>
    <td>55%</td>
</tr>
<tr>
    <td>Moderate commutes</td>
    <td>83%</td>
    <td>63%</td>
</tr>
<tr>
    <td>Long commutes</td>
    <td>48%</td>
    <td>65%</td>
</tr>
</tbody>
</table>

You can see from the graph and table that following the recommended strategy reduces the average state of charge considerably, and potentially reduces degradation and extends the battery life.

## Tip 2: Reduce Fast Charging Frequency

While fast charging is convenient, it can accelerate battery degradation if overused. For longevity, opt for slower AC charging whenever possible. Charging your car slowly over 5 hours is gentler on the battery than relying on a fast charger that recharges your vehicle in 20-30 minutes. Use fast chargers only when necessary, such as on long trips.

To learn why fast charging affects battery life, read our [battery article](../../../technology/battery/degredation).

## Tip 3: Avoid Extreme Heat

Heat is a major enemy of battery health. Whenever possible, park your EV in the shade or in a garage to avoid exposing the battery to extreme temperatures. High heat can increase the rate of degradation, especially if the car is fully charged. In warmer climates, it's even more critical to manage charging schedules and storage to keep the car cool.

## Tip 4: Improve Energy Efficiency

Finally, reducing energy consumption helps conserve battery life. Simple practices such as using eco-driving modes, avoiding harsh acceleration, and maintaining proper tire pressure can extend the range and lifespan of your battery. Efficient driving not only maximizes your battery’s performance but also reduces the frequency of charging, thereby slowing the degradation process.

The number of charge cycles also affects battery degradation. The diagram below shows how the battery degrades based on charging habits.

{{< sitefiguresized thumb="guides/protectingbattery/dstcycles_st.png" width="570" height="456" title="DST Cycles" >}}

## What Do We Know About Real-World Degradation

With now more than a decade of long-range EVs available in the market, we are starting to get some good statistics on how batteries degrade.

Tesla's [2022 Tesla Impact Report](https://www.tesla.com/ns_videos/2022-tesla-impact-report-highlights.pdf) provides updated data on the Model S and Model X.

{{< sitefiguresized thumb="technology/battery/degradation/teslastats_1_st.png" width="991" height="550" title="After 200,000 miles, the Tesla batteries degrade just 12%" >}}

The [2023 Tesla Impact Report](https://www.tesla.com/ns_videos/2023-tesla-impact-report-highlights.pdf) provides updated data on the Model Y.

{{< sitefiguresized thumb="guides/protectingbattery/degradation_1_st.jpg" width="1568" height="758" title="After 200,000 miles, the Tesla batteries degrade just 15%" >}}

You can find more information about battery degradation in our [battery article](../../../technology/battery/degredation).

## Learn More

The YouTube channel "Engineering Explained" has three great videos on how degradation works.

### How To Ruin Your Electric Car's Battery - NMC Edition!

{{< youtube w4lvDGtfI9U >}}

### How To Ruin Your Electric Car's Battery - LFP Edition!

{{< youtube w1zKfIQUQ-s >}}

### Does Fast Charging Ruin Your Electric Car's Battery?

{{< youtube qYJk1Qljwgg >}}
