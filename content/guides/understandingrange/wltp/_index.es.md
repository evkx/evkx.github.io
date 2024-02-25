---
title: Pruebas de rango WLTP
linktitle: WLTP
description: The Worldwide harmonized Light vehicles Test Procedure (WLTP) is a global standard for determining the range of electric vehicles.
weight: 2
---
<!-- markdownlint-disable MD033 -->---

Para los coches vendidos en Europa después de septiembre de 2017, es obligatorio utilizar esta norma. Este estándar reemplazó al NEDC.

## ¿Cómo se prueba?

El procedimiento de prueba está [descrito en detalle](https://unece.org/transport/documents/2021/02/standards/un-regulation-no-154-worldwide-harmonized-light-vehicles-test) por la ONU.

En definitiva, el nuevo procedimiento WLTP se basa en los nuevos ciclos de conducción (WLTC – Worldwide Harmonized Light-duty Vehicles Test Cycles) para medir la autonomía.

El ciclo WLTP tiene cuatro subpartes, cada una con una velocidad máxima diferente. El tiempo total del ciclo de prueba es de 30 minutos (1800 segundos).

<div class="table-responsive">
<table class="table table-striped">
    <thead>
        <tr>
         <th>#
         </th>
         <th>City
         </th>
         <th>Suburban
         </th>
         <th>Rural
         </th>
         <th>Highway
         </th>
         <th>Total
         </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Duration, Seconds 
            </td>
            <td>589
            </td>
            <td>483
            </td>
            <td>455
            </td>
            <td>323
            </td>
            <td>1800
            </td>
        </tr>
        <tr>
            <td>Stop, seconds
            </td>
            <td>150
            </td>
            <td>49
            </td>
            <td>31
            </td>
            <td>8
            </td>
            <td>235
            </td>
        </tr>
        <tr>
            <td>Distance in meter
            </td>
            <td>3095
            </td>
            <td>4756
            </td>
            <td>7162
            </td>
            <td>8254
            </td>
            <td>23266
            </td>
        </tr>
             <tr>
            <td>Percent stop
            </td>
            <td>26.5% 
            </td>
            <td>11.1%
            </td>
            <td>6.8%
            </td>
            <td>2.2%
            </td>
            <td>13.5% 
            </td>
        </tr>
             <tr>
            <td>Max speed
            </td>
            <td>56.5
            </td>
            <td>76.6
            </td>
            <td> 97.4
            </td>
            <td>131.3
            </td>
            <td>
            </td>
        </tr>
             <tr>
            <td>Average speed w/o stop
            </td>
            <td>25.3
            </td>
            <td>44.5
            </td>
            <td>60.7
            </td>
            <td>94
            </td>
            <td>53.5
            </td>
        </tr>
             <tr>
            <td>Avg speed w stop
            </td>
            <td>18.9
            </td>
            <td>39.4
            </td>
            <td>56.5
            </td>
            <td>91.7
            </td>
            <td>46.5
            </td>
        </tr>
        <tr>
            <td>Min acceleration  m/s^2
            </td>
            <td>-1.5 
            </td>
            <td>-1.5
            </td>
            <td>-1.5
            </td>
            <td>- 1.44
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>Max acceleration  m/s^2
            </td>
            <td>1.611
            </td>
            <td>1.611
            </td>
            <td>1.666
            </td>
            <td>1.055
            </td>
            <td>
            </td>
        </tr>
    </tbody>
</table>
</div>

El siguiente gráfico muestra la velocidad de los diferentes ciclos.

{{< sitefiguresized thumb="guides/understandingrange/wltp/wltpcycle3_st.png" width="2914" height="1914" title="ciclo WLTP 3B" >}}


La prueba se realiza en un dinamómetro para obtener las mismas condiciones. El

- 23 grados centígrados
- A/C apagado
- Luces apagadas

Además de la prueba en dinamómetro, el fabricante debe probar el coche en un túnel de viento. La prueba dará como resultado un coeficiente de resistencia y un tamaño del área frontal utilizado para calcular el rango WLTP.

{{< sitefiguresized thumb="guides\understandingrange\wltp\windtunnel_st.jpg" width="3000" height="1539" title="Audi e-tron en un túnel de viento" >}}

## El resultado depende del nivel del equipo.

Para muchos modelos, algunas opciones afectarán la gama. Estas opciones podrían ser ruedas más grandes, techos corredizos, espejos virtuales y otros factores que cambian el peso o la aerodinámica.

Para los modelos con estas opciones, el fabricante debe realizar dos pruebas. Una prueba con opciones máximas y otra con opciones mínimas.

El fabricante puede calcular el rango para diferentes configuraciones de opciones a partir de estos números.

## ¿Qué tan correcto es?

Realizar una prueba sin aire acondicionado, calefacción y luces a 23 grados centígrados no arrojará un consumo correcto en muchos escenarios del mundo real.

En el peor de los casos, conducir por una autopista con lluvia intensa y tiempo frío probablemente daría sólo el 50-60% del rango WLTP indicado.

En la base de datos del modelo EVKX.net, incluimos el rango WLTP máximo y mínimo junto con el rango esperado en el mundo real.