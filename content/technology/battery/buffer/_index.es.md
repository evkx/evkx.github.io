---
title: Buffer de batería
linktitle: Buffer de batería
description: Para proteger la batería, los fabricantes implementan amortiguadores en las baterías.
weight: 10
---
<!-- markdownlint-disable MD033 -->

Un buffer de batería es una característica de algunos vehículos eléctricos que hace que tengan una diferencia entre la capacidad bruta y neta de la batería. La capacidad bruta es la energía total que puede almacenar la batería. Por el contrario, la capacidad neta es la energía utilizable que la batería puede proporcionar al vehículo. La diferencia entre la capacidad bruta y neta se llama buffer.

El sistema de gestión de baterías (BMS) controla el buffer.

El buffer tiene dos funciones principales: proteger la batería contra daños y optimizar su rendimiento. El buffer protege el paquete de baterías contra daños evitando que se sobrecargue o descargue, lo que puede causar una degradación irreversible o incluso un descontrol térmico. El búfer optimiza el rendimiento del paquete de baterías al permitirle operar dentro de su rango óptimo de SOC, donde puede ofrecer mayor potencia y eficiencia.

## ¿Cómo funciona una batería de reserva?

Un búfer de batería limita los niveles máximos y mínimos de SOC que puede alcanzar la batería. El nivel máximo de SOC se denomina búfer superior, mientras que el nivel mínimo de SOC se denomina búfer inferior. El búfer inferior a veces también se denomina búfer de ladrillo porque evita que la batería alcance el 0% de SOC, lo que puede dañar o bloquear las celdas.

El siguiente diagrama muestra cómo un bloque y un amortiguador superior evitarán que la batería se descargue por debajo del límite del amortiguador de ladrillo y se cargue por encima del límite superior.

<a href="chargecurve.drawio.svg">
    <img src="chargecurve.drawio.svg" class="img-fluid">
</a>
El tamaño del búfer puede depender del tipo y la química de las celdas utilizadas en el paquete de baterías. Por ejemplo, algunas celdas pueden tener una mayor tolerancia a la sobrecarga o la sobredescarga que otras, por lo que requieren buffers más pequeños. Algunas celdas también pueden tener rangos de SOC óptimos diferentes a otros y, por lo tanto, requieren buffers más grandes.

El BMS regula la carga y descarga del paquete de baterías en consecuencia para mantenerlo dentro de los límites aprobados.

A veces, el fabricante opta por cambiar el tamaño del búfer con actualizaciones de software. Este cambio suele ocurrir cuando el fabricante sabe más sobre cómo se comporta una batería nueva con respecto a la degradación.

## Búfer utilizable oculto

Algunos fabricantes ocultan parte de la capacidad disponible de la batería en un búfer utilizable oculto. ¿Qué significa eso?

Normalmente significa que la escala SOC no es lineal. Lo que significa que 0-1% es mayor que todos los demás porcentajes. En muchos casos, el porcentaje del 0 al 1% podría ser de 5 a 10 veces el otro porcentaje. La energía adicional a menudo se denomina <b>Zero Buffer</b>.

El diagrama muestra cómo 0-1% es mucho mayor para el SOC mostrado que los otros porcentajes.

<a href="hiddenbuffer.drawio.svg">
     <img src="hiddenbuffer.drawio.svg" class="img-fluid">
</a>

Esta estrategia hace que sea menos probable que el vehículo eléctrico se quede sin batería. El problema con este enfoque es que normalmente se carga el automóvil cuando queda entre un 5% y un 10% para asegurarse de que no se agote, pero cuando hay capacidad oculta, el conductor termina cargando cuando queda entre un 15% y un 20% de batería. izquierda. Este enfoque hace que el propietario experimente una autonomía eléctrica inferior a la real.

EVKX.net cree que se trata de una mala práctica por parte de los fabricantes.

<b>Bjørn Nyland</b>ha probado varios vehículos eléctricos para ver cuánta energía adicional ha ocultado el fabricante entre el 0 y el 1%. Más es peor porque engaña al dueño.

<img src="https://media.evkx.net/multimedia/technology/battery/tbzeromile_1_st.jpg" class="img-fluid">

  Algunas pruebas con resultados:

<table class="table table-striped">
<thead>
    <tr>
        <td>
        Model
        </td>
        <td>
        Zero Buffer
        </td>
    </tr>
</thead>
<tbody>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=2rSuFCrf-C0" target="_blank">Audi e-tron 55</a></td>
        <td>0kWh</td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=OR5JRd0g_Q8" target="_blank">Nissan Aryia 87kWh FWD</a></td>
        <td>5.1kWh</td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=dAM1CIlJ1xQ" target="_blank">Toyota bZ4X</a></td>
        <td>5.1kWh</td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=y675YCgSnlc" target="_blank">Tesla Model Y Performance</a></td>
        <td>4.1kWh</td>
    </tr>
</tbody>
</table>

Consulte los resultados de las pruebas de Bjørns para <a href="https://docs.google.com/spreadsheets/d/1V6ucyFGKWuSQzvI8lMzvvWJHrBS82echMVJH37kwgjE/edit#gid=52159941" target="_blank">más datos</a> o todos sus <a href ="https://www.youtube.com/playlist?list=PLqKx2qnB8Xv6ddxPVkiqQZMNyLtYjqQkq" target="_blank">Pruebas Cero Millas</a>

<div class="mt-3 mb-3">
     <a href="../charging/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i> Degradación de la batería</strong></a>
     <a href="../manufactors/" class="text-decoration-none text-black float-end"><strong>Fabricantes <i class="bi-arrow-right"></i></strong></a>
</div>