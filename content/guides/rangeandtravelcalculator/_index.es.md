---
title: Calculadora de viaje EV (beta)
linktitle: Calculadora de viaje EV (beta)
description: Planifica y compara viajes en EV con estimaciones realistas basadas en la física. Elige un modo (Autonomía, Distancia o Tiempo), ajusta velocidad y clima, y ve en una sola vista cómo se comportan distintos coches: tiempo total, paradas de carga y consumo energético.
weight: 3
xsthumb: guides/evsearch/search_1_xst.jpg
---
<!-- markdownlint-disable MD033 -->

## Qué hace

* **Modo Autonomía:** Hasta dónde puede llegar un coche con una ventana de carga (p. ej., 100→0 %, 100→10 %, 80→10 %) a tu velocidad y condiciones elegidas.
* **Modo Distancia:** Tiempo, energía y **paradas de carga** necesarias para cubrir una distancia determinada.
* **Modo Tiempo:** Hasta dónde puedes llegar dentro de un presupuesto de tiempo (conducción + carga).
* **Unidades:** Cambia entre sistema métrico e imperial.
* **Opciones:** SoH de batería, factor de pérdida de calor, nivel de acabado (*trim*, efecto de ruedas/neumáticos) y **remolque** (preajustes).

## Cómo funciona (visión general)

Combinamos física básica del vehículo con calibración a datos reales:

* **Resistencia aerodinámica** (Cd × área frontal): crece con la velocidad² y con la **densidad del aire** (temperatura).
* **Resistencia a la rodadura** (neumáticos + masa): escala con el **estado de la calzada** (seco → mojado/nieve) y con la masa del vehículo.
* **Cargas auxiliares y climatización:** una carga de fondo más tu ajuste de **HVAC**.
* **Calibración:** Ajuste a anclas WLTP y de autopista (p. ej., 90/120 km/h), por lo que los resultados están al nivel de **batería** (las pérdidas de tren motriz/inversor están implícitamente incluidas).
* **Batería y trim:** **SoH** (salud de la batería), **pérdida de calor** (sobrecostes en frío) y **trim** (ruedas/neumáticos).
* **Remolque:** Suma masa del remolque y un **peaje aerodinámico** parcial según su área frontal y cuánto queda fuera de la estela del vehículo.

### Sobrecoste y pérdidas de carga (supuestos)

* **Sobrecoste por parada: +5 minutos.**  
  Sumamos 5 minutos fijos a la **carga pura** para cubrir salir de la vía, encontrar un punto, conectar e iniciar la sesión y volver a la carretera y recuperar la velocidad.
* **Pérdida de carga: 5 %.**  
  Asumimos ~5 % de pérdidas en el proceso de carga. La **“energía añadida”** mostrada en los resultados es la que llega a la **batería**; la pantalla del cargador (y lo que pagas) suele ser aproximadamente **un 5 % mayor**.  
  *Ejemplo:* Si la tabla muestra **40 kWh** añadidos, espera que en el cargador se facturen unos **42 kWh**.

Después, la calculadora estima necesidades y tiempos de carga para cumplir tu objetivo (modos Distancia/Tiempo) y lista cada parada con SoC de entrada→salida y kWh añadidos.

## Qué verás en los resultados

* Vehículo
* **Autonomía / Distancia / Energía total** (según el modo)
* **Consumo** (Wh/km o mi/kWh)
* **Tiempo total**
* **Paradas de carga** (recuento, duraciones, SoC entrada→salida, kWh añadidos)
* Despliega filas para ver detalles por parada

## Notas importantes y limitaciones

Esto es una **estimación**, no una garantía. Los resultados reales varían por:

* **Ruta:** desniveles/pendientes, tráfico, límites, obras
* **Clima:** viento (de cara/lateral), precipitación, temperatura del asfalto/hielo
* **Vehículo:** tipo/presión de neumáticos, carga, cofres/portabicis, estilo de conducción, preacondicionamiento
* **Carga real:** disponibilidad, colas, potencia compartida, estado del punto, pago/apps
* **Variabilidad de datos:** especificaciones del fabricante vs. curva de tu coche, acondicionamiento de batería

Planifica con margen y confirma viajes largos con un planificador de rutas dedicado. **Sin garantía; úsalo bajo tu responsabilidad.**

## Consejos para mejores estimaciones

* Elige una **velocidad de crucero realista** para tu ruta y normativa.
* Ajusta **temperatura** y **estado de la calzada** a la previsión.
* Indica tu **SoH** si la batería está degradada; usa **pérdida de calor** con frío intenso.
* Selecciona el **trim** con el que conduces realmente.
* Si remolcas, elige el **tipo de remolque** que más se aproxime.

---

*Versión del modelo:* v1.0 · *Última actualización:* 2025-09-20
