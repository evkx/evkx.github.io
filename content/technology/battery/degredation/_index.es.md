---
title: Degradación de la batería
linktitle: Degradación
description: La degradación de la batería en los vehículos eléctricos se refiere a la pérdida gradual de la capacidad o el rendimiento de la batería con el tiempo, lo que puede afectar la autonomía del vehículo. Al igual que otros tipos de baterías, se debe a una combinación de factores.
weight: 9
---
<!-- markdownlint-disable MD033 -->

Una de las principales causas de la degradación de la batería de los vehículos eléctricos son las reacciones químicas que se producen durante los ciclos de carga y descarga. Con el tiempo, estas reacciones pueden causar cambios físicos en los electrodos y electrolitos de la batería, lo que lleva a una reducción en la capacidad o el rendimiento de la batería.

La exposición a altas temperaturas también puede acelerar la degradación de la batería de los vehículos eléctricos, al igual que cargar o descargar la batería a niveles extremos. Además, el uso frecuente de la carga rápida puede provocar un mayor desgaste de la batería, lo que también puede contribuir a su degradación con el tiempo.

Si bien puede que no sea posible prevenir por completo la degradación de la batería de los vehículos eléctricos, existen medidas que se pueden tomar para frenar su progresión y extender la vida útil de la batería. Por ejemplo, evitar la exposición a altas temperaturas, limitar la profundidad de la descarga y reducir la frecuencia de los ciclos de carga y descarga pueden ayudar a minimizar el impacto de la degradación. Además, el uso de un sistema de gestión de batería (BMS) que supervise y regule activamente el rendimiento de la batería puede ayudar a optimizar su vida útil y su rendimiento.

## Envejecimiento del calendario

El envejecimiento calendario es un tipo de degradación de la batería que se produce en las baterías de los vehículos eléctricos con el tiempo, incluso cuando no están en uso. A diferencia del envejecimiento cíclico, que se produce como resultado de ciclos repetidos de carga y descarga, el envejecimiento calendario es causado por una combinación de factores como la temperatura, la humedad y el tiempo.

Durante el envejecimiento calendario, la química de la batería puede cambiar, lo que puede provocar una pérdida gradual de capacidad y un aumento de la resistencia interna. Esto puede dar como resultado una autonomía de conducción reducida para el vehículo eléctrico, así como una vida útil general más corta de la batería.

Las altas temperaturas pueden acelerar el ritmo del envejecimiento natural, por lo que es importante almacenar las baterías de los vehículos eléctricos en un lugar fresco y seco cuando no estén en uso. Además, cargar la batería a un estado de carga alto y dejarla en un estado completamente cargado durante períodos prolongados también puede contribuir al envejecimiento natural.

Para prevenir o minimizar el impacto del envejecimiento natural de las baterías de vehículos eléctricos, se recomienda seguir las pautas del fabricante para el almacenamiento y la carga de la batería.
{{< sitefiguresized thumb="guides/degradation/evstoragestress_st.png" width="623" height="473" title="Esfuerzo de almacenamiento" >}}

## Ciclo de envejecimiento

El envejecimiento cíclico es un tipo de degradación de la batería que se produce en las baterías de vehículos eléctricos como resultado de ciclos repetidos de carga y descarga. Cada ciclo puede provocar cierto desgaste en la batería, lo que puede provocar una pérdida gradual de capacidad y rendimiento con el tiempo.

{{<evkxdisplayaddarticle />}}

Durante el envejecimiento del ciclo, los materiales activos de los electrodos pueden degradarse y perder su capacidad de almacenar y liberar energía. Esto puede provocar un aumento en la resistencia interna de la batería, lo que puede reducir la capacidad y el rendimiento general de la batería. Además, el envejecimiento del ciclo puede provocar cambios físicos en la batería, como la formación de capas de interfaz de electrolito sólido (SEI) o el crecimiento de dendritas, que pueden reducir aún más la capacidad y el rendimiento de la batería.

### Envejecimiento del ciclo según el área SOC

El siguiente diagrama muestra cómo el área SOC utilizada durante la carga/descarga afecta la degradación.

{{< sitefiguresized thumb="guides/degradation/dstcycles_st.png" width="570" height="456" title="Estrés del ciclo" >}}

### Efecto de la velocidad de carga en el envejecimiento del ciclo

El factor más importante para la carga cíclica es la velocidad de carga. La carga de CC de alta velocidad aumenta el efecto llamado revestimiento de litio que convierte los iones de litio en litio metálico.

Cuando esto sucede, se reducen los iones disponibles en la batería. Una carga a mayor velocidad aumenta la cantidad de iones de litio que no pueden llegar al ánodo. Esto nuevamente se debe a limitaciones en el proceso químico. Si desea obtener más información sobre el revestimiento de litio, puede leer [esta presentación] (https://www.nasa.gov/sites/default/files/atoms/files/1-lithium_plating_azimmerman.pdf) de la NASA.

### Estadísticas de degradación del mundo real

Tesla tiene en el [Informe de impacto de Tesla de 2022] (https://www.tesla.com/ns_videos/2022-tesla-impact-report-highlights.pdf) sus datos más actualizados sobre el Model S y el Model X.

{{< sitefiguresized thumb="technology/battery/degradation/teslastats_1_st.png" width="991" height="550" title="Después de 200.000 millas, las baterías Tesla se degradan sólo un 12%" >}}

## Cómo conservar la batería

Lea cómo conservar su batería en nuestra [guía](../../../guides/protectingbattery/).

<div class="mt-3 mb-3">
     <a href="../charging/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i> Cargando</strong></a>
     <a href="../buffer/" class="text-decoration-none text-black float-end"><strong>Búfer <i class="bi-arrow-right"></i></strong></a>
</div>