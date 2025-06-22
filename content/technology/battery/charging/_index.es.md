---
title: Carga de vehículos eléctricos explicada: tecnología, rendimiento y factores reales
linktitle: Carga
description: Cargar la batería es el proceso de añadir nueva energía a la batería.
weight: 8
navicon: bi-battery-charging
---

<!-- markdownlint-disable MD033 -->

Cargar una batería de vehículo eléctrico implica mover electricidad hacia la batería, donde se almacena como energía química. Esto ocurre mediante el movimiento de electrones e iones entre los dos electrodos de la batería: el cátodo y el ánodo, separados por un electrolito.

Durante la carga, los electrones fluyen desde la fuente de energía (por ejemplo, una estación de carga) hacia el cátodo. Al mismo tiempo, los iones positivos se desplazan desde el cátodo hacia el ánodo a través del electrolito. Una vez completamente cargada, la batería almacena energía mediante una alta diferencia de potencial entre sus terminales, lista para alimentar el vehículo.

<figure>
<img src="https://media.evkx.net/multimedia/technology/battery/charging/batteryconceptcharging.drawio.svg" class="img-fluid mx-auto d-block">
<figcaption>
    <p class="lead text-center fw-semibold">
        Carga de batería
    </p>
</figcaption>
</figure>

El proceso es reversible. Durante la descarga, los electrones fluyen desde el ánodo hacia el cátodo a través de un circuito externo, generando corriente para alimentar el motor eléctrico.

{{<evkxdisplayaddarticle />}}

## Rendimiento de carga

El rendimiento de carga varía significativamente entre modelos de EV y está influenciado por varios factores clave:

{{< sitefiguresized thumb="technology/battery/charging/charging\_1\_st.jpg" width="1920" height="1080" title="Kia EV6 GT cargando en Ionity" >}}

### Configuración del paquete

El voltaje del paquete de baterías afecta la velocidad máxima de carga. Por ejemplo, un cargador CCS DC de 50 kW que entrega 125 A requiere al menos 400 V para alcanzar su capacidad total. Un paquete de 300 V estaría limitado a 37,5 kW (300 V × 125 A).

De manera similar, la mayoría de los cargadores HPC CCS están limitados a 500 A. Esto significa que un paquete de 400 V puede admitir hasta 200 kW, mientras que uno de 300 V se limita a 150 kW.

Modelos como el Volvo EX90, Polestar 3 y Nio EL8 afirman admitir carga de 250 kW con arquitecturas de 400 V, pero esto depende de cargadores que no estén limitados a 500 V.

#### EV de 800 voltios en cargadores de 400 voltios

Los EV de 800 V pueden verse limitados por cargadores antiguos de 400–500 V. Por ejemplo, los Supercargadores de Tesla están limitados a 500 V, lo que reduce la velocidad de carga para vehículos de 800 V.

##### Técnica de inversor

Algunos EV utilizan inversores a bordo para aumentar el voltaje. Estos sistemas a menudo limitan la potencia total entregada. Por ejemplo:

* Modelos Hyundai E-GMP: ~100 kW máximo en cargadores de 400 V  
* Porsche Taycan: ~50 kW en Supercargadores usando el inversor estándar

##### Carga por bancos

Este método divide la batería en dos secciones de 400 V. Modelos como el Audi Q6 e-tron y el Porsche Macan admiten hasta 135 kW a 400 V y hasta 270 kW a 800 V. El Tesla Cybertruck puede alcanzar 230 kW en Supercargadores de 500 V.

{{< sitefiguresized thumb="technology/battery/charging/bankcharging\_1\_st.jpg" width="3000" height="1852" title="Audi Q6 e-tron carga por bancos" >}}

### Temperatura

La temperatura de la batería afecta críticamente la velocidad de carga. En climas fríos, la carga puede reducirse más del 50 % debido a las limitaciones del sistema de gestión de batería (BMS). Muchos EV precalientan la batería cuando se navega hacia una estación de carga.

En climas calurosos, el BMS también puede reducir la carga para evitar el sobrecalentamiento. Las temperaturas óptimas para cargar van de 25 a 35 °C. Por encima de 50–60 °C, la carga puede reducirse para proteger la salud de la batería.

{{< sitefiguresized thumb="technology/battery/charging/charging\_2\_st.jpg" width="1920" height="1080" title="Audi e-tron GT cargando en invierno" >}}

Los EV con carga rápida deben contar con sistemas térmicos eficientes para mantener la temperatura ideal durante la sesión de carga.

Las curvas de carga de EVKX reflejan **condiciones óptimas**:

* La temperatura de la batería es suficientemente alta para máxima velocidad  
* La batería se mantiene dentro de límites seguros durante una sesión del 0 al 100 %

{{<evkxdisplayaddarticle />}}

### Software BMS

El software del BMS también define las curvas de carga. Los fabricantes equilibran la velocidad de carga con la longevidad de la batería. Como la carga rápida acelera la degradación, algunos EV limitan la velocidad o el número de sesiones de alta potencia.

Por ejemplo:

* El Toyota BZ4X permite solo dos sesiones rápidas por día  
* El Porsche Taycan permite al usuario limitar la velocidad de carga (por ejemplo, de 270 kW a 200 kW) para reducir el desgaste

{{< sitefiguresized thumb="technology/battery/charging/taycancharging\_1\_st.jpg" width="3000" height="2669" title="Porsche Taycan cargando" >}}

### Ejemplos de velocidad de carga

EVKX proporciona datos de rendimiento de carga real y gráficos para cada modelo de EV:

* [Zeekr 7x Long Range AWD](/models/zeekr/7x/7x_long_range_awd/chargingcurve/): Más de 430 kW pico.

  Este modelo requiere más de 650 A para alcanzar la velocidad máxima. En cargadores de 400 V, está limitado a 80 kW. El diagrama de curva de carga muestra los tres escenarios.

  <img src="https://evkx.net/models/zeekr/7x/7x_long_range_awd/chargingcurve/chart/?battery=0" class="img-fluid">

* [Kia EV6 GT](/models/kia/ev6/ev6_gt/chargingcurve/): Alta velocidad pico con curva plana, ideal para viajes largos.

  <img src="https://evkx.net/models/kia/ev6/ev6_gt/chargingcurve/chart/?battery=0" class="img-fluid">

* [Nissan Ariya](/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve/): Velocidad pico moderada pero curva constante.

  <img src="/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve/chart/?battery=0" class="img-fluid">

### Reflexiones finales

En viajes largos, la forma de la curva de carga es importante. Las curvas planas permiten paradas más largas y constantes, mientras que las curvas con picos favorecen recargas rápidas. EVKX te ayuda a comparar y entender el rendimiento real de cada modelo.
