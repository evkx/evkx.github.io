---
title: Capteurs radar
linktitle: Radar
description:  Les systèmes ADAS utilisent des capteurs radar de voiture pour diverses applications, notamment l'évitement des collisions, le régulateur de vitesse adaptatif et la détection des angles morts.
weight: 2
---
<!-- markdownlint-disable MD033 -->
Radar signifie « Radio Detection and Ranging » et est une technologie de détection qui utilise des ondes radio pour détecter la présence et l'emplacement d'objets.

{{< sitefiguresized thumb="technology/sensorsandcameras/radar/radar_3_st.jpg" width="3000" height="1714" title="Capteur radar" >}}

Les fabricants placent généralement des capteurs radar à l'avant, à l'arrière et sur les côtés du véhicule. Les capteurs émettent des ondes radio qui rebondissent sur les objets proches et reviennent au capteur. En mesurant le temps nécessaire aux ondes radio pour se déplacer vers et depuis un objet, les capteurs radar peuvent déterminer la distance et la vitesse de l'objet.

Les capteurs radar peuvent être standard ou en option, selon le modèle EV. En règle générale, le capteur avant est standard sur tous les véhicules électriques équipés d'un radar.

{{< sitefiguresized thumb="technology/sensorsandcameras/radar/radar_1_st.jpg" width="1290" height="826" title="Emplacement du capteur radar arrière Audi e-tron GT" >}}

{{< sitefiguresized thumb="technology/sensorsandcameras/radar/radar_2_st.jpg" width="1113" height="852" title="Capteur radar" >}}

Les capteurs radar sont utiles pour éviter les collisions et pour le régulateur de vitesse adaptatif.
Pour éviter les collisions, les capteurs radar peuvent détecter lorsqu'une voiture se rapproche trop d'un objet, comme une autre voiture, et alerter le conducteur ou appliquer automatiquement les freins pour éviter une collision.

Pour le régulateur de vitesse adaptatif, les capteurs radar peuvent détecter la vitesse et la distance de la voiture devant vous et ajuster la vitesse de votre voiture en conséquence pour maintenir une distance de sécurité.

Le tableau et le diagramme ci-dessous montrent les types et les emplacements typiques des différents capteurs radar.
<table class="table table-striped border">
<thead>
    <tr>
        <th>
            Type
        </th>
        <th>
            Range
        </th>
        <th>
            Location
        </th>
        <th>
            ADAS Usage
        </th>
    </tr>
</thead>
<tbody>
<tr>
    <td>
        Long range 77/79Ghz
    </td>
    <td>
        10-300 meters
    </td>
    <td>
        Front and rear
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
        Medium range 77/79Ghz
    </td>
    <td>
        1-60 meters
    </td>
    <td>
        Front/rear
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
        Short range (24/77Ghz)
    </td>
    <td>
        0.5-20 meters
    </td>
    <td>
        Front and Rear corner
    </td>
    <td>
         <a href="../../driverassistance/rearcrosstrafficalert/">RCTA</a>,
            RCW,
                <a href="../../driverassistance/blindspotmonitoring/">BSM</a>
    </td>
</tr>

</tbody>

</table>

{{< sitefiguresized thumb="technology/sensorsandcameras/radar/radarrange_1_st.jpg" width="3000" height="1686" title="Radar sensor range " >}}

### Avantages Capteurs radar

- Les capteurs radar détectent mieux les véhicules en mouvement, les piétons et les objets que les caméras ou les lidars. Ils peuvent voir des objets éloignés et se déplacer rapidement, ce qui est utile dans de nombreux ADAS.
- Les capteurs radar fonctionnent également bien dans toutes les conditions météorologiques, y compris la pluie, la neige et le brouillard. Ils ne sont pas affectés par la luminosité ou l’obscurité de l’environnement, contrairement aux caméras ou lidars.
- Les capteurs radar sont relativement bon marché et faciles à installer et à entretenir. Ils ont une faible consommation d'énergie et une longue durée de vie.

### Inconvénients des capteurs radar

- Les capteurs radar ont une résolution et une précision inférieures à celles des caméras ou des lidars. Ils ne peuvent pas distinguer la forme, la couleur ou la texture des objets, ce qui limite leur capacité à reconnaître les panneaux de signalisation, les marquages au sol ou d'autres indices visuels.
- Les capteurs radar peuvent également souffrir d'interférences ou de fausses alarmes provoquées par d'autres sources radar, telles que des véhicules, des radars de police ou des tours radio.
- Les capteurs radar ont un champ de vision limité et ne peuvent pas couvrir les environs du véhicule. Ils doivent être associés à d’autres capteurs, comme des caméras ou des lidars, pour offrir une perception complète et fiable de l’environnement.

### Fabricants

Voici quelques fabricants de capteurs radar

- [Valeo](https://www.valeo.com/en/)
- [Bosch](https://www.bosch-mobility.com/en/solutions/sensors/front-radar-sensor/)
- [HELLA](https://www.hella.com/partnerworld/us/Product-range/ADAS-Transforming-the-automotive-industry-47101/)
- [Continental](https://www.continental-automotive.com/en/components/radars.html)
- [Denso Corporation](https://www.denso.com/global/en/driven-base/feature/mobility/)
- [Infineon Technologies](https://www.infineon.com/cms/en/product/sensor/radar-sensors/)
- [NXP Semiconductors N.V](https://www.nxp.com/applications/automotive/adas-and-safe-driving/automotive-radar-systems:RADAR-SYSTEMS)
- [Texas Instruments Incorporated](https://www.ti.com/sensors/mmwave-radar/overview.html)
  

{{< pagenavigation b_url="../cameras/" b_title="Caméras" f_url="../lidar/" f_title="Capteurs LiDAR" >}}