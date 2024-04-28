---
title: Paquete de batería y configuración
linktitle: Paquete de batería y configuración
description: El sistema de batería combina muchas celdas y otros dispositivos electrónicos de control en una batería completa para alimentar el vehículo eléctrico.
weight: 4
---
<!-- markdownlint-disable MD033 -->
## Configuración de la batería

En un vehículo eléctrico (EV), la configuración de la batería se refiere a la disposición de las celdas de batería individuales dentro del paquete de baterías. La configuración de la batería puede afectar el voltaje, la capacidad, la potencia de salida y otros aspectos del paquete de baterías y el rendimiento general del vehículo.
La configuración más común para las baterías de vehículos eléctricos es un híbrido en serie-paralelo. En esta configuración, se conectan varias celdas en serie para aumentar el voltaje del paquete de baterías y luego se conectan en paralelo varios grupos de celdas conectadas en serie para aumentar la capacidad general del paquete de baterías.

La conexión en serie de celdas aumenta la salida de voltaje del paquete de baterías, que es vital para proporcionar la energía necesaria para conducir el vehículo. La conexión en paralelo de grupos de células aumenta la capacidad del paquete de baterías, que es esencial para almacenar la energía necesaria para conducir el coche hasta la autonomía deseada.

Para calcular el tamaño bruto del paquete de baterías, multiplique la capacidad total en paralelo en Ah (amperios-hora) por el voltaje nominal del paquete de baterías en voltios. Los resultados están en WH vatios-hora.


### Ejemplo: Audi Q8 e-tron 55

El siguiente diagrama muestra la configuración de un módulo de batería del Audi Q8 e-tron 55. Este módulo contiene 12 celdas de batería, cuatro de las cuales están montadas en paralelo, y hay tres grupos de esta configuración en paralelo en serie.

<figura>
<img src="configuration1.drawio.svg" class="img-fluid mx-auto d-block">
<título de figura>
         <p class="lead text-center fw-semibold">
             módulo 3s4p
         </p>
     </figcaption>
</figura>

Cada celda tiene un voltaje nominal de 3,6667 voltios y una capacidad de 72 AH.

Tres celdas en serie dan un voltaje de módulo de 11 voltios. 4 x 72AH en paralelo dan una capacidad total del módulo de 72 x 4 = 288 AH. El Q8 e-tron 55 tiene un total de 36 módulos en serie. 36 x 11 voltios dan 396 voltios para el paquete. 396 voltios x 288 aH = 114048 Wh o 114 kWh de capacidad bruta.


### Ejemplo: Tesla Model Y de largo alcance

El Tesla Model Y Long Range utiliza 4416 celdas en el formato pequeño 21700, con 96 filas y 46 celdas en paralelo.

Cada celda es de 4,8 Ah con un voltaje nominal de 3,7 voltios. 4,8ah x 46 da un total de 220,8ah. 96 x 3,7 voltios dan un voltaje nominal del paquete de 355 voltios. Esta configuración proporciona una capacidad bruta de 355 * 220,8 = 78,4 kWh.


### Ejemplo: Kia EV 6 de largo alcance

La batería de largo alcance del Kia EV6 tiene 384 celdas en total. Las celdas están configuradas en 192 filas, con dos celdas en paralelo, y se estructuran en módulos de 12 celdas.


<figura>
<img src="configuration3.drawio.svg" class="img-fluid mx-auto d-block">
<título de figura>
         <p class="lead text-center fw-semibold">
             módulo 6s2p
         </p>
     </figcaption>
</figura>


Cada celda tiene 55,6 AH. 2 x 55,6 = 111,2 AH. La tensión nominal es de 3,63 por celda. 192 x 3,63 = 696,96 Voltios nominales para el paquete. 696,96 * 111,2 = 77,5 kWh.
### Más ejemplos de paquetes de baterías
A continuación se muestran algunos ejemplos de configuración.

<table class="table table-striped border">
     <thead>
         <tr>
         <th>Modelo
         </th>
         <th>Capacidad bruta
         </th>
         <th>Configuración
         </th>
         <th>Tensión nominal
     </thead>
     <tbody>
     <tr>
         <td>Audi Q8 e-tron</td>
         <td>116kWh</td>
         <td>108s4p</td>
         <td>396 voltios</td>
     </tr>
     <tr>
         <td>Audi e-tron GT</td>
         <td>93,7kWh</td>
         <td>198s2p</td>
         <td>725 voltios</td>
     </tr>
     <tr>
         <td>Kia EV6 GT</td>
         <td>77,4</td>
         <td>192s2p</td>
         <td>697 voltios</td>
     </tr>
     <tr>
         <td><a href="../../../models/nio/">Batería Nio 100KWh</a></td>
         <td>100kWh</td>
         <td>96s1p</td>
         <td>358 voltios</td>
     </tr>
     <tr>
         <td><a href="../../../models/mercedes/eqe/">Mercedes EQE</a></td>
         <td>96,12 kWh</td>
         <td>90s4p</td>
         <td>328 voltios</td>
     </tr>
     <tr>
         <td><a href="../../../models/mercedes/eqs/">Mercedes EQS</a></td>
         <td>120kWh</td>
         <td>108s4p</td>
         <td>396 voltios</td>
     </tr>
     <tr>
         <td><a href="../../../models/tesla/model_y/model_y_long_range/">Tesla Modelo Y de largo alcance</a></td>
         <td>78,1 kWh</td>
         <td>96s46p</td>
         <td>357 voltios</td>
     </tr>
     <tr>
         <td>Paquete grande Rivan R1S</a></td>
         <td>135kWh</td>
         <td>108s72p</td>
         <td>390 voltios</td>
     </tr>
     <tr>
         <td>Paquete Rivan R1S Max</a></td>
         <td>149kWh</td>
         <td>108s72p</td>
         <td>390 voltios</td>
     </tr>
       <tr>
         <td>Porsche Macan / Audi Q6</a></td>
         <td>100kWh</td>
         <td>180s1p</td>
         <td>662 voltios</td>
     </tr>
</tbody>
</table>


La configuración específica de la batería utilizada en un vehículo eléctrico depende de una variedad de factores, como la autonomía deseada, la potencia de salida y el peso total del vehículo.

{{<evkxdisplayaddarticle />}}
### ¿400 u 800 voltios?

Los fabricantes suelen configurar los paquetes para que tengan alrededor de 400 u 800 voltios.

Una configuración de batería de mayor voltaje, como un sistema de 800 voltios, puede ofrecer algunas ventajas sobre un sistema de menor voltaje de 400 voltios, pero también tiene posibles inconvenientes. Éstos son algunos de los pros y los contras de cada configuración:

#### Ventajas del paquete de 400 voltios

**Tecnología más madura:** Los sistemas de baterías de 400 voltios existen desde hace más tiempo y se utilizan más ampliamente en vehículos eléctricos, lo que significa que están más probados y confiables.

**Menor costo:** Debido a que son una tecnología más establecida, los sistemas de baterías de 400 voltios tienden a ser menos costosos de producir que los sistemas de mayor voltaje.

**Infraestructura de carga ampliamente disponible:** Muchas estaciones de carga públicas admiten carga de 400 voltios, lo que facilita encontrar lugares para cargar su vehículo eléctrico. Por ejemplo, la red Tesla Supercharger no admite carga de 800 voltios.

**Más configuraciones de celdas disponibles:** Los paquetes de 400 voltios se pueden configurar de más maneras, lo que brinda al fabricante más opciones de celdas.

#### Contras del paquete de 400 voltios

**Carga más lenta:** Un sistema de batería de 400 voltios generalmente requiere tiempos de carga más prolongados que un sistema de 800 voltios, lo que puede ser una desventaja si necesita cargar su vehículo rápidamente. Esta limitación se debe a que los cargadores tienen limitaciones de corriente. Muchos cargadores están limitados a 500 amperios. 500 amperios x 400 voltios = 200 kW. En un cargador de 800 voltios con las mismas limitaciones de corriente, el resultado sería 500 amperios x 800 voltios = 400 kW de potencia de carga.

**Salida de potencia limitada:** Es posible que los sistemas de batería de 400 voltios no puedan entregar la misma potencia de salida que un sistema de 800 voltios, lo que podría limitar la aceleración y el rendimiento del vehículo eléctrico. Esta limitación no parece ser un problema con los modelos actuales.

**Más pesado:** Un sistema de batería de 400 voltios puede requerir cables más gruesos para soportar la misma velocidad de carga.

#### Ventajas del paquete de 800 voltios

**Carga más rápida:** Un sistema de batería de 800 voltios puede soportar una velocidad de carga más rápida que un sistema de 400 voltios, por lo que pasa menos tiempo cargando.

**Mayor potencia de salida:** Un sistema de batería de 800 voltios puede ofrecer más potencia de salida, lo que puede proporcionar una mejor aceleración y rendimiento, pero en realidad, las baterías más potentes son de 400 voltios, por lo que esto no es un beneficio real.

**Peso más ligero:** Un sistema de batería de 800 voltios puede requerir cables más delgados para soportar la carga de alta velocidad.

#### Contras del paquete de 800 voltios:

**Infraestructura de carga limitada**: Actualmente, menos estaciones de carga públicas admiten carga de 800 voltios, lo que significa que puede ser más difícil encontrar lugares para cargar su vehículo eléctrico a toda velocidad.

Por ejemplo, la red de carga más grande, la red Tesla Supercharger, carga a un máximo de 500 voltios. Cargar un automóvil de 800 voltios con estos cargadores requiere que el vehículo eléctrico convierta el voltaje del cargador a 800 voltios, y la conversión generalmente
limita sustancialmente la velocidad de carga. Los fabricantes utilizan diferentes técnicas para esta conversión. Consulte el capítulo sobre carga para obtener más detalles.

**Requiere celdas más pequeñas**: dado que necesitaría al menos alrededor de 170 celdas en serie para crear un paquete de “800 voltios”, esto evita el uso de celdas más grandes. Las celdas más grandes dan mayor densidad y menos cableado.

{{<evkxdisplayaddarticle />}}
## Diseños de paquetes de baterías

Hay algunos diseños estándar que se utilizan para construir el paquete de baterías.

## Celda a módulo

El diseño de celda a módulo (C2M) implica ensamblar varias celdas de batería en un único módulo autónomo con sistemas electrónicos y de refrigeración integrados. Luego, los módulos se pueden conectar fácilmente para formar el paquete de baterías completo.

Cada módulo tiene su propio BMS (sistema de gestión de batería) que monitorea y controla la carga y descarga de las celdas dentro del módulo, lo que permite un control y monitoreo más preciso de las celdas individuales.

{{< sitefiguresized thumb="technology/battery/batterypack/module_q6_1_st.jpg" width="3000" height="1783" title="Módulo de batería Audi Q6 e-tron con 15 celdas prismáticas" >}}

Con la tecnología C2M, se ensamblan varias celdas de batería en un único módulo autónomo con sistemas electrónicos y de refrigeración integrados. Luego, los módulos se pueden conectar fácilmente entre sí para formar el paquete de baterías completo. Cada módulo tiene su propio BMS (sistema de gestión de batería) que monitorea y controla la carga y descarga de las celdas dentro del módulo, lo que permite un control y monitoreo más preciso de las celdas individuales.

{{< sitefiguresized thumb="technology/battery/batterypack/q6pack_1_st.jpg" width="3000" height="1924" title="Batería Audi Q6 e-tron con 12 módulos" >}}

### Ventajas de celda a módulo (CtM):

**Modularidad:** Los diseños CtM permiten reemplazar o reparar módulos de batería individuales de forma independiente. Si un módulo falla, se puede cambiar sin afectar toda la batería.

**Gestión térmica:** Los módulos proporcionan espacio para componentes de gestión térmica (como placas de refrigeración o canales de refrigeración líquida). Esto ayuda a regular la temperatura celular y garantiza un rendimiento óptimo.

**Escalabilidad:** Los diseños CtM permiten flexibilidad en la configuración de paquetes de baterías. Los fabricantes pueden ajustar la cantidad de módulos para satisfacer los diferentes requisitos del vehículo (por ejemplo, autonomía, potencia o tamaño).

**Seguridad:** Aislar las celdas dentro de los módulos mejora la seguridad. Si una celda experimenta una fuga térmica u otros problemas, no afectará directamente a las celdas vecinas.

**Eficiencia de fabricación:** La construcción de módulos por separado simplifica el montaje y el control de calidad. También permite la producción paralela de módulos, agilizando el proceso de fabricación.

{{<evkxdisplayaddarticle />}}

## Celda a paquete

Las baterías de celda a paquete (CTP) son un nuevo tipo de tecnología de batería que elimina la necesidad de módulos de batería al integrar las celdas directamente en el paquete.

Varias empresas, como Tesla, BYD y CATL, están desarrollando esta tecnología.

{{< sitefiguresized thumb="technology/battery/batterypack/catl_qilin_3_st.jpg" width="2222" height="1032" title="Batería de celda a paquete CATL Qilin" >}}

BYD Blade y CATL Qilin son dos ejemplos de baterías CTP. La principal diferencia entre estas dos baterías es su sistema de refrigeración.

{{< sitefiguresized thumb="technology/battery/cell/bladebattery_st.jpg" width="3000" height="1351" title="BYD Blade Battery" >}}

BYD Blade utiliza un sistema de refrigeración líquida, mientras que CATL Qilin utiliza un sistema de refrigeración estructural. El
El sistema de refrigeración estructural es más eficiente que el sistema de refrigeración líquida utilizado en BYD Blade.
### Ventajas de celda a paquete (CtP):

**Simplicidad:** Los diseños CtP eliminan la necesidad de módulos intermedios, lo que reduce la complejidad. El paquete de baterías integra directamente celdas individuales.

**Utilización del espacio:** Sin módulos, hay más espacio disponible para las celdas, lo que potencialmente aumenta la densidad de energía.

**Eficiencia de costos:** Menos componentes (sin módulos) pueden generar ahorros de costos en producción y ensamblaje.

**Reducción de peso:** La eliminación de las carcasas de los módulos reduce el peso total, lo que mejora la eficiencia del vehículo.

## Paquete de baterías estructurales

Un paquete de baterías estructurales es un tipo de paquete de baterías creado para convertirse en un componente estructural del vehículo eléctrico.

Este enfoque puede reducir el peso del vehículo eléctrico eliminando estructuras duplicadas entre el paquete y la estructura del vehículo, ya que el paquete de baterías pasa a formar parte de la estructura del vehículo.

Este diseño puede mejorar el rendimiento y la eficiencia generales del vehículo eléctrico. Los paquetes de baterías estructurales son todavía relativamente nuevos, pero varias empresas e instituciones de investigación los están explorando y desarrollando.

Los paquetes de baterías estructurales, que cambian las reglas del juego en el diseño de vehículos eléctricos, ofrecen muchos beneficios. Reducen el peso y la complejidad, aumentan el rendimiento y facilitan la integración perfecta de la tecnología de baterías en diversas aplicaciones.

Tesla Model Y y Tesla Cybertruck son dos modelos que tienen paquetes estructurales. Según Tesla, esta solución presenta muchas ventajas, como reducir significativamente el número de piezas utilizadas tanto en la batería como en el coche.

{{< sitefiguresized thumb="technology/battery/batterypack/teslastructuralbattery_1_st.jpg" width="1585" height="714" title="Paquete estructural Tesla 4680 comparado con un paquete tradicional" >}}

Más importante aún, la compañía dijo que se espera que las nuevas celdas y el paquete estructural aumenten el alcance del Model Y en un 16 por ciento y reduzcan el peso total del automóvil en un 10 por ciento, lo que resultará en una mejor aceleración y manejo.

{{< sitefiguresized thumb="technology/battery/batterypack/teslastructuralbattery_2_st.jpg" width="1344" height="645" title="El paquete estructural de Tesla funciona como piso del vehículo eléctrico" >}}

Tesla utiliza espuma de poliuretano rosa para encapsular y asegurar los componentes dentro del paquete de batería estructural. Esta espuma sirve a la vez como aislante y elemento estructural, aportando rigidez y protección. La espuma garantiza que las celdas de la batería y otros componentes críticos permanezcan seguros en su lugar y actúa como un cortafuegos entre las diferentes secciones del paquete de baterías.

Esta espuma es tan fuerte como un ladrillo, lo que contribuye a la integridad estructural general del paquete2

El siguiente vídeo muestra un análisis detallado del paquete realizado por Munro & Associates.

{{< youtube FXpfU6I_T3w >}}

## Densidad de energía a nivel del paquete de baterías

La siguiente tabla muestra cómo la densidad del paquete ha variado con el tiempo entre algunos paquetes de baterías de ejemplo.
<table class="table table-striped border">
     <thead>
         <tr>
             <th>Paquete</th>
             <th>Año</th>
             <th>Capacidad bruta</th>
             <th>Peso</th>
             <th>Densidad</th>
         </tr>
     </thead>
     <tbody>
         <tr>
             <td>Tesla Roadster</td>
             <td>2010</td>
             <td>53kWh</td>
             <td>450kg</td>
             <td>118 Wh/kg</td>
         </tr>
          <tr>
             <td>Tesla Modelo S</td>
             <td>2012</td>
             <td>85kWh</td>
             <td>540kg</td>
             <td>157 Wh/kg</td>
         </tr>
          <tr>
             <td>Tesla Modelo X</td>
             <td>2015</td>
             <td>75kWh</td>
             <td>530kg</td>
             <td>141 Wh/kg</td>
         </tr>
          <tr>
             <td>Audi e-tron 55</td>
             <td>2018</td>
             <td>95kWh</td>
             <td>699kg</td>
             <td>136Wh/kg</td>
         </tr>
         <tr>
             <td>Volkswagen MEB</td>
             <td>2021</td>
             <td>82kWh</td>
             <td>493kg</td>
             <td>166Wh/kg</td>
         </tr>
           <tr>
             <td>Tesla Modelo 3 LFP</td>
             <td>2021</td>
             <td>60kWh</td>
             <td>477kg</td>
             <td>126Wh/kg</td>
         </tr>
          <tr>
             <td>Tesla Modelo S</td>
             <td>2022</td>
             <td>100kWh</td>
             <td>544kg</td>
             <td>184Wh/kg</td>
         </tr>
          <tr>
             <td>Audi Q8 e-tron 55 </td>
             <td>2022</td>
             <td>114kWh</td>
             <td>727kg</td>
             <td>157Wh/kg</td>
         </tr>
          <tr>
             <td>Kia EV6</td>
             <td>2022</td>
             <td>77,4 kWh</td>
             <td>477kg</td>
             <td>162Wh/kg</td>
         </tr>
          <tr>
             <td>Mercedes EQXX</td>
             <td>2022</td>
             <td>107,8kWh</td>
             <td>495kg</td>
             <td>217Wh/kg</td>
         </tr>
         <tr>
             <td>Sello BYD LR (LFP)</td>
             <td>2022</td>
             <td>82,56 kWh</td>
             <td>558kg</td>
             <td>148Wh/kg</td>
         </tr>
          <tr>
             <td>Nio Semisólido</td>
             <td>2023</td>
             <td>150kWh</td>
             <td>575kg</td>
             <td>260Wh/kg</td>
         </tr>
          <tr>
             <td>Audi Q6 e-tron / Porsche Macan EV</td>
             <td>2024</td>
             <td>100kWh</td>
             <td>570kg</td>
             <td>175 Wh/kg</td>
         </tr>
     </tbody>
</table>

Si desea obtener detalles sobre más paquetes, le recomendamos <a href="https://www.batterydesign.net/maximising-pack-energy-density/">BatteryDesign.net</a>

<div class="mt-3 mb-3">
     <a href="../cell/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i> Vivienda celular</strong></a>
     <a href="../batterymanagment/" class="text-decoration-none text-black float-end"><strong>Gestión de la batería <i class="bi-arrow-right"></i></strong></a>
</div>
