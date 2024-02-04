---
title: Radarsensorer
linktitle: Radar
description:  ADAS-systemer bruger bilradarsensorer til forskellige applikationer, herunder kollisionsundgåelse, adaptiv fartpilot og detektering af blinde vinkler.
weight: 2
---
<!-- markdownlint-disable MD033 -->Radarsensorer
Radar står för "Radio Detection and Ranging" och är en avkänningsteknik som använder radiovågor för att upptäcka närvaro och placering av föremål.

{{< sitefiguresized thumb="technology/sensorsandcameras/radar/radar_3_st.jpg" width="3000" height="1714" title="Radarsensor" >}}

Tillverkare placerar vanligtvis radarsensorer på fordonets fram-, bak- och sidor. Sensorerna sänder ut radiovågor som studsar av närliggande föremål och återgår till sensorn. Genom att mäta tiden det tar för radiovågorna att färdas till och från ett objekt kan radarsensorer bestämma objektets avstånd och hastighet.

Radarsensorerna kan vara standard eller tillval, beroende på EV-modell. Typiskt är den främre sensorn standard på alla elbilar med radar.

{{< sitefiguresized thumb="technology/sensorsandcameras/radar/radar_1_st.jpg" width="1290" height="826" title="Radarsensorplacering bak Audi e-tron GT" >}}

{{< sitefiguresized thumb="technology/sensorsandcameras/radar/radar_2_st.jpg" width="1113" height="852" title="Radarsensor" >}}

Radarsensorer är fördelaktiga för att undvika kollisioner och adaptiv farthållare.
För att undvika kollisioner kan radarsensorer upptäcka när en bil kommer för nära ett föremål, till exempel en annan bil, och varna föraren eller automatiskt bromsa för att undvika en kollision.

För adaptiv farthållare kan radarsensorer upptäcka hastigheten och avståndet för bilen framför dig och justera hastigheten på din bil för att hålla ett säkert avstånd.

Tabellen och diagrammet nedan visar typer och typiska placeringar för de olika radarsensorerna.

<table class="table table-striped border">
<huvud>
     <tr>
         <th>
             Typ
         </th>
         <th>
             Räckvidd
         </th>
         <th>
             Plats
         </th>
         <th>
             ADAS-användning
         </th>
     </tr>
</thead>
<tbody>
<tr>
     <td>
         Lång räckvidd 77/79Ghz
     </td>
     <td>
         10-300 meter
     </td>
     <td>
         Fram och bak
     </td>
     <td>
         <a href="../../driverassistance/adaptivecruisecontrol/">ACC</a>,
         <a href="../../driverassistance/automaticemergencybraking/">AEB</a>,
         <a href="../../driverassistance/collisionavoidancesystems/">CAS</a>,
         <a href="../../driverassistance/forwardcollisionwarning/">FCW</a>
     </td>
</tr>
<tr>
     <td>
         Medelområde 77/79Ghz
     </td>
     <td>
         1-60 meter
     </td>
     <td>
         Fram bak
     </td>
     <td>
         <a href="../../driverassistance/adaptivecruisecontrol/">ACC</a>,
         <a href="../../driverassistance/automaticemergencybraking/">AEB</a>,
         <a href="../../driverassistance/collisionavoidancesystems/">CAS</a>,
         <a href="../../driverassistance/forwardcollisionwarning/">FCW</a>,
         <a href="../../driverassistance/automatedlanechange/">ALC</a>,
         <a href="../../driverassistance/frontcrosstrafficassist/">FCTA</a>
     </td>
</tr>
<tr>
     <td>
         Kort räckvidd (24/77Ghz)
     </td>
     <td>
         0,5-20 meter
     </td>
     <td>
         Främre och bakre hörnet
     </td>
     <td>
          <a href="../../driverassistance/rearcrosstrafficalert/">RCTA</a>,
             RCW,
                 <a href="../../driverassistance/blindspotmonitoring/">BSM</a>
     </td>
</tr>

</tbody>

</table>

{{< sitefiguresized thumb="technology/sensorsandcameras/radar/radarrange_1_st.jpg" width="3000" height="1686" title="Radarsensoromfång " >}}


### Fördelar Radarsensorer

- Radarsensorer känner bättre av rörliga fordon, fotgängare och föremål än kameror eller lidarer. De kan se föremål på långt håll och röra sig snabbt, vilket är användbart i många ADAS.
- Radarsensorer fungerar också bra i alla väderförhållanden, inklusive regn, snö och dimma. De påverkas inte av ljusstyrkan eller mörkret i omgivningen, till skillnad från kameror eller lidarer.
– Radarsensorer är relativt billiga och enkla att installera och underhålla. De har låg strömförbrukning och lång livslängd.

### Nackdelar med radarsensorer

– Radarsensorer har lägre upplösning och noggrannhet än kameror eller lidarer. De kan inte urskilja föremåls form, färg eller struktur, vilket begränsar deras förmåga att känna igen trafikskyltar, körfältsmarkeringar eller andra visuella ledtrådar.
- Radarsensorer kan också drabbas av störningar eller falska larm som orsakas av andra radarkällor, såsom fordon, polisradar eller radiotorn.
- Radarsensorer har ett begränsat synfält och kan inte täcka fordonets omgivning. De måste kombineras med andra sensorer, såsom kameror eller lidarer, för att ge en heltäckande och tillförlitlig uppfattning av miljön.



<div class="mt-3 mb-3">
     <a href="../cameras/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i> Kameror</strong></ a>
     <a href="../lidar/" class="text-decoration-none text-black float-end"><strong>LiDAR-sensorer<i class="bi-arrow-right"></i></ stark</a>
</div>