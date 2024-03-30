---
title: Carga rápida CC
linktitle: Carga rápida CC
description: La carga rápida de CC es la forma más rápida y cómoda de cargar un vehículo eléctrico en la carretera.
weight: 3
---
<!-- markdownlint-disable MD033 -->

Utiliza CC (corriente continua) de alta potencia para entregar hasta 1000 voltios y 250 amperios. La carga de alta velocidad puede agregar hasta 200 millas de alcance en solo 20 a 30 minutos, por lo que puede recargar rápidamente la batería de un vehículo eléctrico para viajes de larga distancia.

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/charging_1_st.jpg" width="3000" height="2001" title="BMW i4 M50 DC Carga rápida" >}}

## Disponibilidad de carga rápida de CC

La carga rápida de CC puede ser fácil, disponible, compleja y desafiante, dependiendo de dónde viva y qué automóvil conduzca. Algunas zonas tienen muy pocos cargadores y requieren planificación para crear una ruta con carga, mientras que otras tienen muchos cargadores donde puedes parar y cargar cuando sea necesario.

Esta disponibilidad puede variar mucho entre las marcas. Si bien Tesla tiene supercargadores en muchas áreas, encontrar una estación de carga con enchufe Chademo para su Nissan Leaf es casi imposible.

A continuación verá todas las ubicaciones de los cargadores para [Electrify America](https://www.electrifyamerica.com/locate-charger/), algunas áreas muy densas, mientras que, en otras áreas, hay muchas millas/km entre los cargadores.

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/chargermap_st.jpg" width="2392" height="1160" title="Mapa de ubicación de carga de Electrify America 10 de junio de 2023" >}}

## Rendimiento de carga rápida de CC

La velocidad de carga también puede variar enormemente entre modelos de vehículos eléctricos, estaciones de carga e incluso entre sesiones de carga.

Hay dos razones típicas por las que la velocidad de carga varía entre dos sesiones de carga para el mismo vehículo eléctrico con el mismo cargador.

### La temperatura de la batería

La temperatura de la batería es el factor más crítico en la velocidad de carga de la batería. La temperatura óptima de la batería suele ser de 25 a 35 grados. Si la temperatura es demasiado baja, el BMS reducirá la velocidad de carga para proteger la batería. Podría reducirle hasta solo el 25% de la tasa óptima.

Muchos vehículos eléctricos ahora han agregado calefacción de batería que se puede activar al navegar hacia un cargador a través del sistema de navegación o activarlo manualmente.

### La curva de carga

La curva de carga describe qué tan rápido puede cargarse un vehículo eléctrico para un porcentaje de carga determinado. Normalmente, esta curva de carga no es plana, lo que significa que con un estado de carga del 10%, la velocidad de carga es diferente que con un estado de carga del 80%.

El aspecto de la curva de carga varía enormemente entre modelos. Algunos pueden tener una curva plana de hasta el 80%, mientras que otros tienen un paso profundo desde un estado de carga bajo. La velocidad máxima varía desde menos de 100 KW hasta más de 300 KW entre los modelos.

A continuación puede ver la curva de carga de Lucid Air Dream Edition Performance. La curva de carga se hunde profundamente desde el principio. Cargar el 30 % del 50 % al 80 % tarda 20 minutos, mientras que cargar el 30 % del 5 % al 35 % tarda solo 9 minutos.

<img src="/images/models/lucid/air/air_dream_edition_performance/chargingcurve.svg" class="img-fluid">



Si necesita que las paradas de carga sean lo más breves posible, identifique el área de carga óptima para su vehículo eléctrico. EVKX.net te ayuda con eso. Tenemos información detallada sobre el rendimiento de carga para cada modelo en nuestra [base de datos de vehículos eléctricos](/evsearch/), con curvas de carga y cálculo de paradas de carga óptimas para los diferentes modelos.

## Planificación de rutas con carga

La mayoría de los vehículos eléctricos ofrecen funcionalidad de planificación de rutas, incluidas paradas de carga rápida de CC para llegar al destino. Esta planificación de ruta forma parte del [Sistema de navegación](../../infotainment/navigation/).

Normalmente verá el nivel de carga de llegada esperado para las estaciones de carga y cuánto necesita cargar para llegar a la siguiente estación de carga.
## Conectar y cargar

Uno de los principales desafíos a los que se enfrentan los conductores de vehículos eléctricos es la comodidad y seguridad de cargar sus vehículos. Actualmente, la mayoría de los conductores de vehículos eléctricos necesitan una tarjeta RFID, una aplicación o un método de pago sin contacto para iniciar una sesión de carga en una estación de carga pública. Esto puede resultar engorroso y llevar mucho tiempo, especialmente si varias redes de carga tienen diferentes sistemas de pago y métodos de autenticación.

Sin embargo, una nueva tecnología promete hacer que la carga de vehículos eléctricos sea mucho más accesible y segura: enchufar y cargar. Conectar y cargar es una característica de la norma internacional ISO 15118, que define el protocolo de comunicación entre los vehículos eléctricos y las estaciones de carga. Con plug and charge, los conductores de vehículos eléctricos pueden conectar sus vehículos a una estación de carga compatible y la sesión de carga comenzará automáticamente sin necesidad de pasos ni dispositivos adicionales.

### ¿Cómo funciona enchufar y cargar?

Plug and charge utiliza certificados criptográficos para identificar y autenticar el vehículo eléctrico y las estaciones de carga. Estos certificados son emitidos por autoridades confiables y almacenados en módulos de hardware seguros dentro del vehículo eléctrico y la estación de carga. Cuando un vehículo eléctrico se conecta a una estación de carga que admite enchufar y cargar, intercambian sus certificados y establecen un enlace de comunicación seguro. Luego, la estación de carga verifica la identidad del vehículo eléctrico y autoriza la sesión de carga según el contrato del vehículo eléctrico con su proveedor de servicios de movilidad (MSP). El MSP es la entidad que proporciona al conductor de vehículos eléctricos acceso a los servicios de carga y gestiona la facturación y el pago.

El proceso de enchufar y cargar garantiza la confidencialidad, la integridad de los datos y la autenticidad de la comunicación entre el vehículo eléctrico y la estación de carga. También permite tarificación dinámica, equilibrio de carga, integración de redes inteligentes y actualizaciones remotas de firmware. Plug and charge se puede utilizar para carga de CA y CC y carga inalámbrica.

[Hubject](https://www.hubject.com/) es la empresa que gestiona los certificados basados en el protocolo.

## Redes de carga más comunes por ubicación

### EE.UU

Existen varias redes de carga en EE. UU. para vehículos eléctricos. Según el Departamento de Energía de EE. UU., Tesla tiene más de **1.600 estaciones Supercharger** en EE. UU., con más de **17.000 puertos de carga rápida**. Electrify America es el siguiente en la fila, con alrededor de **800 estaciones**.

Estas son algunas de las redes de carga de vehículos eléctricos más grandes de EE. UU.:

- [Electrify America](https://www.electrifyamerica.com/): La red de carga rápida de CC más grande para la mayoría de los modelos de vehículos eléctricos. Están abiertos a todos los vehículos eléctricos con una conexión de carga CCS (el estándar de la industria) y, por el momento, a los pocos vehículos que todavía usan CHAdeMO como el Nissan Leaf.

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/teslasupercharger_1_st.jpg" width="3000" height="1948" title="Ubicación del supercargador Tesla" >}}

- [Tesla Superchargers](https://www.tesla.com/findus/list/superchargers/United+States): La red de Superchargers de Tesla es la más grande del país, con menos distancia entre estaciones en comparación con Electrify America. La mayoría de los Superchargers requieren el puerto NACS en el vehículo eléctrico, pero están construyendo cargadores con Magic Dock que admite vehículos eléctricos CCS1. Ver cargadores [aquí](https://www.tesla.com/findus?v=2&bounds=60.61822541172234%2C-37.567384000000004%2C18.24809425121173%2C-150.067384&zoom=5&filters=party)

- [EVgo](https://www.evgo.com/): la carga rápida de CC no se limita a los viajes por carretera. EVgo tiene más de **800 ubicaciones de carga rápida** en 34 estados y más de 65 áreas metropolitanas.

- [ChargePoint](https://driver.chargepoint.com/mapCenter/37.26709110057841/-121.95591497824141/18): ChargePoint tiene más de **115 000 puntos de carga** en Norteamérica y Europa¹.


### Europa

En Europa existen varias redes de carga para vehículos eléctricos. Estas son algunas de las redes de carga de vehículos eléctricos más grandes de Europa:

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/ionity_1_st.jpg" width="3000" height="2000" title="Ubicación de carga de Ionity" >}}

- Ionity: una red de estaciones de carga de alta potencia para vehículos eléctricos que permite viajes de larga distancia por toda Europa. Fue fundada como una empresa conjunta por el Grupo BMW, el Grupo Mercedes-Benz, Ford Motor Company y el Grupo Volkswagen².

- Plugsurfing: una red europea que puedes utilizar para cargar un vehículo eléctrico en Europa. Con su llave o tarjeta única, que cuesta 9,95 €, y su aplicación gratuita para smartphone, puedes utilizar más de 200.000 cargadores, incluidos los de diferentes redes como Allego, EnBW, Eon, Innogy, IONITY y Vattenfall.

- Maingau: A través de su aplicación para smartphone EinfachStromLaden, chip de carga o tarjeta, puede cargar un vehículo eléctrico en Alemania, Austria o Suiza en 50.000 puntos de carga con Maingau.

<div class="mt-3 mb-3">
     <a href="../homecharging/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i> Carga doméstica</strong></a>
     <a href="../batteryswap/" class="text-decoration-none text-black float-end"><strong>Cambio de batería <i class="bi-arrow-right"></i></strong></a>
</div>