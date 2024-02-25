---
title: Cómo verificar el estado de la batería
linktitle: Verificar el estado de la batería
description: Con cálculos simples, es posible verificar el estado general de la batería. Esta guía explica cómo.
weight: 1
---
<!-- markdownlint-disable MD033 -->---

<div class="alerta alerta-advertencia" rol="alerta">
   Este procedimiento <b>sólo</b> es posible para vehículos eléctricos que
   <ul>
   <li>Muestra el consumo completo del viaje y no solo el consumo de la última distancia. Ejemplo: muchos vehículos eléctricos chinos solo muestran consumo en los últimos 50 km</li>
   <li>No tiene un búfer utilizable oculto, como el Toyota bZ4X, donde oculta una gran cantidad de capacidad entre 0-1 %</li>
   <li>No ajusta el búfer cuando se degrada (la mayoría no lo hace)</li>
   </ul>
</div>

Cuando la batería se degrada, la capacidad disponible de la batería se reduce. Esta reducción reduce la autonomía del vehículo eléctrico.

Si sabes cuánta capacidad neta debería tener tu coche cuando sea nuevo, podrás calcular el estado actual.

Este procedimiento es cómo verificas tu batería.

1. Cargar al 100%
2. Da una vuelta y gasta al menos el 90% de la batería. Intenta mantener el consumo bajo.
3. Toma nota de tu consumo y distancia recorrida
4. Tome nota del SOC (estado de carga) final (porcentaje restante en la batería)
5. Calcular la capacidad real

Para los siguientes ejemplos, asumimos que tiene un e-tron 55 con una capacidad neta de 86,5 kWh de fábrica.

## Cálculo en millas

### Millas ejemplo 1

Conduces 169 millas con un consumo de 2,6 millas/kWh. Empezaste el viaje con el 100% de batería y terminaste con el 21%.

Primero, calcula la energía total utilizada: 169/2,6 = <b>65kWh</b>.<br>
Si te quedaba el 21%, has usado el <b>79%.</b> (100%-21%)<br>
La capacidad actual es 79% = 65kWh.<br>
Puedes calcular la capacidad total (100%):<br>
(65/79)*100 = <b>82,27kWh</b><br>
82,27 es la capacidad utilizable real de su batería.
82,27/86,5 = <b>95,1%</b>
Lo que supone una reducción de casi el 5% de la capacidad utilizable original.

## Cálculo en kilómetros

### Km ejemplo 1

Si conduces 308 kilómetros con un consumo de 25kWh/100km<br>
Empezaste con el 100% y terminaste con el 5%.<br>

Primero, calcula la energía total utilizada<br>
(308 * 25)/100 = <b>77kWh</b> en total en el viaje.<br>
Si te queda el 5% has usado el <b>95%</b> en el viaje (100-95)<br>

95 % = batería de 77 kWh.<br>

Luego se puede calcular la capacidad total (100%):<br>

(77/95)*100 = <b>81,05 kWh</b>
81.05 es la capacidad real de su batería.<br>
81,05/86,5 = <b>93,7%</b>. Lo que supone una reducción de casi el <b>6,5%</b> respecto a la capacidad original.

## ¿Qué afecta la capacidad?

Una sola desviación de la capacidad no significa necesariamente que la batería se haya degradado.

Si tiene un consumo elevado, habrá alguna pérdida debido a la resistencia interna.

Si su batería estaba desequilibrada, también afectará la capacidad de la batería.

Para las personas a las que les encanta realizar un seguimiento de esto, recomendamos realizarlo desde el inicio de la propiedad. De esta forma conocerás más tu coche.

El siguiente ejemplo muestra las estadísticas de un e-tron 55 2020v1 con 83,6kWh de capacidad cuando era nuevo.

{{< sitefiguresized thumb="guides/checkingbatteryhealth/graph1_st.jpg" width="2463" height="1366" title="Seguimiento de la capacidad real de la batería en comparación con el consumo total" >}}

{{< sitefiguresized thumb="guides/checkingbatteryhealth/graph2_st.jpg" width="2019" height="1364" title="Seguimiento de la capacidad real de la batería en comparación con el consumo kWh/100 km" >}}