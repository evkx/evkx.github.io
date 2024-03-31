---
title: Motores síncronos de imanes permanentes
linktitle: PMSM
description: Un motor síncrono de imanes permanentes (PMSM) es un motor eléctrico que utiliza imanes permanentes en el rotor para generar un campo magnético que interactúa con el devanado del estator para producir rotación mecánica. Los PMSM se utilizan comúnmente en diversas aplicaciones, incluidos vehículos eléctricos, maquinaria industrial y electrodomésticos.
weight: 2
---
<!-- markdownlint-disable MD033 -->

{{<evkxdisplayaddarticle />}}

## Como funciona

**Rotor:** El rotor de un PMSM contiene imanes permanentes que generan un campo magnético fijo. Los imanes suelen estar hechos de materiales como neodimio, hierro y boro (NdFeB) o samario y cobalto (SmCo), que tienen una alta fuerza magnética.

{{< sitefiguresized thumb="technology/motors/pmsm/porschetaycanrotor_st.jpg" width="3000" height="1687" title="Porsche Taycan Rotor con imanes permanentes" >}}

Normalmente, el rotor tiene 6 u 8 polos magnéticos.

**Estator:** El estator es la parte estacionaria del motor y consta de devanados que se enrollan alrededor de los polos del estator. Estos devanados suelen estar hechos de cobre y se alimentan con corriente alterna (CA) para crear un campo magnético que interactúa con el rotor.

{{< sitefiguresized thumb="technology/motors/pmsm/porschetaycanstator_st.jpg" width="3000" height="1687" title="Porsche Taycan Stator" >}}

**Conmutación:** El PMSM se basa en una conmutación electrónica para controlar la dirección y la velocidad del motor. Los sensores, como los sensores de efecto Hall o codificadores, se utilizan para detectar la posición del rotor y proporcionar retroalimentación al controlador del motor. Basándose en esta retroalimentación, el controlador del motor determina cuándo y cómo encender y apagar los devanados del estator para crear un campo magnético giratorio que impulsa el rotor.

**Sincronización:** El campo magnético generado por los devanados del estator debe sincronizarse con la posición del rotor para lograr un funcionamiento eficiente y suave. Esto generalmente se hace mediante el uso de una técnica llamada control orientado a campo (FOC) o control vectorial, que ajusta la amplitud y la fase de la corriente del estator para alinearla con la posición del rotor.

**Producción de par:** A medida que el campo magnético giratorio generado por el estator interactúa con los imanes permanentes del rotor, ejerce un par sobre el rotor, lo que hace que gire. El par producido por el motor se puede controlar ajustando la amplitud y frecuencia de la corriente del estator, que a su vez determina la fuerza y velocidad del campo magnético giratorio.

{{<evkxdisplayaddarticle />}}

**Fuente de alimentación:** Los PMSM requieren una fuente de alimentación que pueda proporcionar el voltaje y la frecuencia de CA adecuados a los devanados del estator. Por lo general, esto se logra utilizando un inversor, que convierte un voltaje de CC de una fuente de energía, como una batería o una red eléctrica, en el voltaje de CA y la frecuencia necesarios para el motor.

En resumen, un PMSM utiliza imanes permanentes en el rotor, devanados del estator, conmutación electrónica y técnicas de sincronización para generar un campo magnético giratorio que impulsa el rotor y produce rotación mecánica. El par y la velocidad del motor se pueden controlar ajustando la amplitud y frecuencia de la corriente del estator utilizando un inversor y un controlador de motor.
## Ventajas

Una de las principales ventajas de los motores síncronos en los vehículos eléctricos es su mayor densidad de potencia. Los imanes permanentes en el rotor de un motor síncrono proporcionan un campo magnético constante, lo que permite un mayor par y potencia de salida en comparación con motores asíncronos de tamaño similar. Esto hace que los motores síncronos sean especialmente adecuados para vehículos eléctricos de alto rendimiento que requieren una aceleración rápida y altas velocidades.

Los motores síncronos de los vehículos eléctricos también son conocidos por su control preciso y eficiente. Se pueden controlar con precisión mediante electrónica de potencia avanzada, como controladores de motor o inversores, que permiten un rendimiento optimizado y una mejor gestión de la energía. Esto permite funciones como la vectorización del par, donde el par se puede controlar de forma independiente para cada rueda, lo que mejora la tracción y el manejo en diversas condiciones de conducción.

Otra ventaja de los motores síncronos es su capacidad para lograr una alta eficiencia en una amplia gama de velocidades y cargas. Esto permite un funcionamiento eficiente tanto a velocidades bajas como altas, lo que resulta especialmente útil en vehículos eléctricos que requieren diferentes niveles de potencia y par según las condiciones de conducción.

{{<evkxdisplayaddarticle />}}

## Limitaciones

**Materiales de tierras raras:** Los PMSM requieren imanes de tierras raras, que pueden ser costosos y tener implicaciones ambientales en términos de minería y sostenibilidad.

**Arrastre al rodar libremente:** Cuando un vehículo eléctrico (EV) se desplaza por inercia o rueda sin energía, el motor eléctrico puede crear un efecto de arrastre, que a menudo se denomina "resistencia del motor" o "resistencia por inercia". Esta resistencia es causada por las fuerzas electromagnéticas dentro del motor, que pueden resistir el movimiento del rotor y crear resistencia contra el movimiento del vehículo.

En el caso de los motores de imanes permanentes, que tienen imanes en el rotor, pueden generar más resistencia cuando el motor no está alimentado. Los imanes en el rotor crean un campo magnético fijo, que puede crear una resistencia adicional al movimiento del rotor, lo que resulta en una mayor resistencia del motor en comparación con los motores de inducción. Sin embargo, la resistencia del motor de imán permanente también puede depender del diseño específico y la estrategia de control empleada, ya que algunos motores de imán permanente pueden tener una resistencia reducida debido a técnicas avanzadas de control del motor.

Algunos fabricantes de vehículos eléctricos utilizan un embrague para desacoplar el motor de la transmisión, desacoplando efectivamente el motor de las ruedas y permitiendo que el vehículo ruede sin ningún arrastre del motor. Esto puede ayudar a reducir la resistencia que sienten las ruedas cuando el motor no está accionado, lo que potencialmente puede mejorar la eficiencia del vehículo y reducir el consumo de energía.

{{< sitefiguresized thumb="technology/motors/pmsm/mercedeseqesuvfrontmotordisconnect_st.jpg" width="3000" height="1687" title="Mercedes EQE Suv con embrague que desconecta el motor delantero cuando avanza" >}}

Otros utilizan motores de inducción en la parte delantera y PSMS en la parte trasera. Ejemplo de ello son todos los cuidados basados en la plataforma Volkswagen MEB.

Si desea aprender aún más sobre el motor PSMS, le recomendamos ver este video donde Lucid explica su diseño PMSM y compararlo con otros.

{{< youtube U7IHZxNC6hc >}}

{{< pagenavigation b_url="../asm/" b_title="Motores de inducción" f_url="../wrsm/" f_title="WRSM" >}}