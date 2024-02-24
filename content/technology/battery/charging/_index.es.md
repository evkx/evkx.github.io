---
title: Cargando
linktitle: Cargando
description: Cargar la batería es el proceso de agregar nueva energía a la batería.
weight: 8
navicon: bi-battery-charging
---

<!-- markdownlint-disable MD033 -->
Cargar la batería de un vehículo eléctrico implica el movimiento de portadores de carga eléctrica, como electrones e iones, entre los electrodos de la batería. La batería tiene dos electrodos, un cátodo y un ánodo, separados por un electrolito.

Durante el proceso de carga, los electrones fluyen desde la fuente de carga (por ejemplo, la estación de carga) al cátodo, donde se almacenan en el material del cátodo. Al mismo tiempo, los iones positivos del electrolito fluyen desde el cátodo al ánodo a través del separador.

Cuando la batería está completamente cargada, el material del cátodo está en su máxima capacidad para almacenar electrones y el ánodo está completamente agotado de iones positivos. La batería se encuentra en un estado estable con una alta diferencia de potencial entre el cátodo y el ánodo, que es el que proporciona la energía eléctrica almacenada en la batería.

<figura>
<img src="batteryconceptcharging.drawio.svg" class="img-fluid mx-auto d-block">
<título de figura>
         <p class="lead text-center fw-semibold">
             Bateria cargando
         </p>
     </figcaption>
</figura>

El proceso de carga es reversible y, durante la descarga, los electrones regresan del cátodo al ánodo a través de un circuito externo, creando un flujo de corriente eléctrica que puede alimentar un motor eléctrico.

{{<evkxdisplayaddarticle />}}

### Rendimiento de carga

El rendimiento de carga varía mucho entre vehículos eléctricos. Varios aspectos afectan la velocidad de carga de los vehículos eléctricos.

{{< sitefiguresized thumb="technology/battery/charging/charging_1_st.jpg" width="1920" height="1080" title="Kia EV6 GT cargando en Ionity" >}}

#### La configuración del paquete

La configuración del paquete puede afectar la velocidad de carga. Una configuración que proporciona bajo voltaje puede hacer que se alcancen límites externos en la corriente de carga. Por ejemplo, un cargador DC CCS de 50 KW tiene una corriente máxima de 125 A. Para obtener 50 KW a partir de 125 A, necesita un mínimo de 400 voltios. El límite máximo de corriente limitaría un paquete de 300 voltios a una velocidad de carga de 37,5 KW. (300*125)

Lo mismo ocurre con los cargadores CCS HPC, ya que están limitados a 500 amperios. 400 voltios con 500 amperios es un máximo de 200 KW. La velocidad de carga de una batería de 300 voltios estaría limitada a 150 KW.

Volvo y Polestar afirman que sus próximos vehículos eléctricos con paquetes de 400 voltios tendrían una carga de 250 kW. Sin embargo, no está claro cómo gestionarían eso con los límites estándar actuales de CCS.

#### Temperatura

La temperatura de la batería puede afectar significativamente la velocidad de carga. Por ejemplo, el BMS puede reducir la velocidad de carga en más del 50% en climas fríos.

Esta reducción de velocidad es la razón por la que algunos vehículos eléctricos ofrecen calentamiento automático de la batería cuando se navega hacia un cargador o la posibilidad de activar manualmente el calentamiento de la batería.

Las altas temperaturas también pueden reducir el rendimiento. Por ejemplo, el BMS puede reducir la velocidad de carga en climas cálidos o después de una carga a alta velocidad. BMS reduce la velocidad de carga para permitir que la batería se enfríe y protegerla.

La temperatura óptima para cargar una batería suele ser de entre 25 y 35 grados Celsius (77 a 95 Fahrenheit). En temperaturas de verano, la batería normalmente estará en esta área al llegar a la estación de carga, y obtendrá la velocidad de carga máxima.

{{< sitefiguresized thumb="technology/battery/charging/charging_2_st.jpg" width="1920" height="1080" title="Audi e-tron GT cargando en invierno" >}}

En algunos modelos con carga rápida, un día cálido de verano con carga de alta velocidad puede hacer que la batería alcance temperaturas que harán que el BMS reduzca la velocidad de carga para proteger la batería. Esta reducción de velocidad suele ocurrir si la temperatura de la batería alcanza los 50-60 grados Celsius durante la carga. Por eso es fundamental contar con una buena gestión térmica que pueda eliminar el calor durante la carga.

La curva de carga para los modelos en el sitio de EVKX es para <b>condiciones óptimas</b>:

- La temperatura de la batería es lo suficientemente alta, por lo que la velocidad de carga no se reduce debido a la baja temperatura.
- La temperatura de la batería no sube tanto como para que BMS reduzca la velocidad para protección durante la sesión de carga del 0 al 100 %.


{{<evkxdisplayaddarticle />}}

#### Software BMS

El fabricante decide la curva basándose en varios datos. La entrada podría ser la química del paquete de baterías u otros aspectos físicos, como el enfriamiento. Aun así, el fabricante suele decidir equilibrar la velocidad de carga con la longevidad de la batería. La carga de alta velocidad afecta la degradación y reducir la velocidad reduciría la degradación.

Algunos fabricantes también limitan el número de sesiones de carga de alta velocidad durante un período. Toytota BZ4X es un modelo que Toyota lanzó con una limitación de sólo dos sesiones de alta velocidad durante 24 horas. Más carga sería a baja velocidad.

{{< sitefiguresized thumb="technology/battery/charging/taycancharging_1_st.jpg" width="3000" height="2669" title="Carga Porsche Taycan" >}}

Porsche Taycan es un modelo en el que el propietario puede establecer como máxima una velocidad de carga "amigable con la batería" para disminuir la degradación. Un Taycan puede cargarse inicialmente con una velocidad de hasta 270 KW. Con esta configuración habilitada, está limitada a 200 KW.

#### Ejemplos de velocidad de carga


EVKX muestra el rendimiento de carga de cada vehículo eléctrico en nuestro sitio con gráficos y cálculos basados en el rendimiento.

Los siguientes son algunos ejemplos de vehículos eléctricos con diferentes tipos de rendimiento de carga.

[Lucid Air Dream Edition Performance](/models/lucid/air/air_dream_edition_performance/chargingcurve/) es el primer ejemplo. Tiene una velocidad de carga máxima extrema de más de 300 kW, pero cae rápidamente.

<img src="/models/lucid/air/air_dream_edition_performance/chargingcurve.svg" class="img-fluid">

[Kia EV6 GT](/models/kia/ev6/ev6_gt/chargingcurve7/) es el siguiente ejemplo. Este modelo es uno de los vehículos eléctricos de carga más rápida, con alta velocidad y una curva mucho más plana que el Lucid Air.

<img src="/models/kia/ev6/ev6_gt/chargingcurve.svg" class="img-fluid">

{{<evkxdisplayaddarticle />}}

[Nissan Aryia](/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve/) Este modelo no tiene un pico superior muy alto, pero la curva es relativamente plana.

<img src="/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve.svg" class="img-fluid">

En viajes más largos, la curva de carga puede afectar a la parada de carga óptima. Por ejemplo, una curva más plana beneficiaría a aquellos que prefieren paradas más largas, mientras que una curva con picos altos beneficiaría a paradas cortas y usted cargaría alrededor del área de pico.

Para todos los modelos, EVKX calcula esto por usted en la página de información del modelo.

<div class="mt-3 mb-3">
     <a href="../cellbalancing/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i> Equilibrio de celdas</strong></a>
     <a href="../degredation/" class="text-decoration-none text-black float-end"><strong>Degredación <i class="bi-arrow-right"></i></strong ></a>
</div>