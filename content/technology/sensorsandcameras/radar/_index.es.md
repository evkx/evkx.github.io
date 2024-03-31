---
title: Sensores de radar
linktitle: Radar
description:  Los sistemas ADAS utilizan sensores de radar de automóviles para diversas aplicaciones, incluida la prevención de colisiones, el control de crucero adaptativo y la detección de puntos ciegos.
weight: 2
---
<!-- markdownlint-disable MD033 -->
Radar significa "Detección y alcance de radio" y es una tecnología de detección que utiliza ondas de radio para detectar la presencia y ubicación de objetos.

{{< sitefiguresized thumb="technology/sensorsandcameras/radar/radar_3_st.jpg" width="3000" height="1714" title="Sensor de radar" >}}

Los fabricantes suelen colocar sensores de radar en la parte delantera, trasera y laterales del vehículo. Los sensores emiten ondas de radio que rebotan en los objetos cercanos y regresan al sensor. Al medir el tiempo que tardan las ondas de radio en viajar hacia y desde un objeto, los sensores de radar pueden determinar la distancia y la velocidad del objeto.

Los sensores de radar pueden ser estándar u opcionales, según el modelo de vehículo eléctrico. Normalmente, el sensor frontal es estándar en todos los vehículos eléctricos con radar.

{{< sitefiguresized thumb="technology/sensorsandcameras/radar/radar_1_st.jpg" width="1290" height="826" title="Ubicación del sensor de radar trasero Audi e-tron GT" >}}

{{< sitefiguresized thumb="technology/sensorsandcameras/radar/radar_2_st.jpg" width="1113" height="852" title="Sensor de radar" >}}

Los sensores de radar son beneficiosos para evitar colisiones y el control de crucero adaptativo.
Para evitar colisiones, los sensores de radar pueden detectar cuando un automóvil se acerca demasiado a un objeto, como otro automóvil, y alertar al conductor o aplicar los frenos automáticamente para evitar una colisión.

Para el control de crucero adaptativo, los sensores de radar pueden detectar la velocidad y la distancia del automóvil que está delante de usted y ajustar la velocidad de su automóvil en consecuencia para mantener una distancia segura.

La tabla y el diagrama siguientes muestran los tipos y ubicaciones típicas de los diferentes sensores de radar.

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

### Ventajas de los sensores de radar

- Los sensores de radar detectan mejor vehículos, peatones y objetos en movimiento que las cámaras o los lidars. Pueden ver objetos lejanos y moverse rápidamente, lo cual resulta útil en muchos ADAS.
- Los sensores de radar también funcionan bien en todas las condiciones climáticas, incluidas lluvia, nieve y niebla. No se ven afectados por el brillo u oscuridad del entorno, a diferencia de las cámaras o los lidars.
- Los sensores de radar son relativamente baratos y fáciles de instalar y mantener. Tienen un bajo consumo de energía y una larga vida útil.

### Contras de los sensores de radar

- Los sensores de radar tienen menor resolución y precisión que las cámaras o los lidars. No pueden distinguir la forma, el color o la textura de los objetos, lo que limita su capacidad para reconocer señales de tráfico, marcas de carril u otras señales visuales.
- Los sensores de radar también pueden sufrir interferencias o falsas alarmas causadas por otras fuentes de radar, como vehículos, radares de policía o torres de radio.
- Los sensores de radar tienen un campo de visión limitado y no pueden cubrir el entorno del vehículo. Deben combinarse con otros sensores, como cámaras o lidares, para proporcionar una percepción integral y fiable del entorno.

### Fabricantes

A continuación se muestran algunos fabricantes de sensores de radar.

- [Valeo](https://www.valeo.com/es/)
- [Bosch](https://www.bosch-mobility.com/en/solutions/sensors/front-radar-sensor/)
- [HELLA](https://www.hella.com/partnerworld/us/Product-range/ADAS-Transforming-the-automotive-industry-47101/)
- [Continental](https://www.continental-automotive.com/en/components/radars.html)
- [Corporación Denso](https://www.denso.com/global/en/driven-base/feature/mobility/)
- [Tecnologías Infineon](https://www.infineon.com/cms/en/product/sensor/radar-sensors/)
- [NXP Semiconductors N.V](https://www.nxp.com/applications/automotive/adas-and-safe-driving/automotive-radar-systems:RADAR-SYSTEMS)
- [Texas Instruments Incorporated](https://www.ti.com/sensors/mmwave-radar/overview.html)

<div class="mt-3 mb-3">
     <a href="../cameras/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i> Cámaras</strong></a>
     <a href="../lidar/" class="text-decoration-none text-black float-end"><strong>Sensores LiDAR<i class="bi-arrow-right"></i></strong></a>
</div>