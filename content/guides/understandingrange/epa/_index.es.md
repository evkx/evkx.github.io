---
title: Pruebas de rango de la EPA
linktitle: EPA
description: La prueba de rango de la EPA es la prueba utilizada en los Estados Unidos. La Agencia de Protección Ambiental de Estados Unidos define las pruebas.
weight: 1
shownavtabs: true
---
<!-- markdownlint-disable MD033 -->---

## ¿Cómo se prueba?

La EPA define los [ciclos de prueba](https://www.fueleconomy.gov/feg/fe_test_schedules.shtml) y la SAE el [procedimiento de prueba](https://www.fueleconomy.gov/feg/pdfs/EPA%20test %20procedimiento%20for%20EVs-PHEVs-11-14-2017.pdf).

Los fabricantes realizan las pruebas de la EPA en un dinamómetro, un dispositivo que simula las condiciones de conducción colocando el vehículo sobre rodillos y midiendo su rendimiento.

{{< sitefiguresized thumb="guides/understandingrange/epa/bmwi7dynamometer_1_st.jpg" width="3000" height="2000" title="BMW i7 en un dinamómetro" >}}

El fabricante puede elegir entre una prueba de dos o cinco ciclos.

### Pruebas de dos ciclos

La EPA define dos ciclos de conducción para representar escenarios típicos de ciudad y carretera: el programa de conducción con dinamómetro urbano (UDDS) y el programa de conducción con economía de combustible en carretera (HWFET).

El ciclo UDDS implica paradas y arranques frecuentes, mientras que el ciclo HWFET implica velocidades constantes y frenado mínimo.
<table class="table">
    <thead>
    <tr>
    <th>
    </th>
    <th>
        UDDP
    </th>
    <th>
        HWFET
    </th>
    </thead>
    <tbody>
        <tr>
            <td>Duration, Seconds</td>
            <td>1874</td>
            <td>765</td>
        </tr>
        <tr>
            <td>Stop, seconds</td>
            <td>358</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Distance in meters</td>
            <td>17767</td>
            <td>16142</td>
        </tr>
        <tr>
            <td>Distance in miles</td>
            <td>11.04</td>
            <td>10.03</td>
        </tr>
        <tr>
            <td>Percent stop</td>
            <td>18%</td>
            <td>0%</td>
        </tr>
        <tr>
            <td>Max speed km/h</td>
            <td>90.93</td>
            <td>96.6</td>
        </tr>
        <tr>
            <td>Max speed mph</td>
            <td>56.5</td>
            <td>60</td>
        </tr>
        <tr>
            <td>Avg speed km/h</td>
            <td>34.2</td>
            <td>77.7</td>
        </tr>
        <tr>
            <td>Avg speed mph</td>
            <td>21.2</td>
            <td>48.3</td>
        </tr>
    </tbody>
</table>

{{< sitefiguresized thumb="guides/understandingrange/epa/epacycles_st.png" width="2732" height="1505" title="EPA Cycles" >}}
Los fabricantes prueban los vehículos eléctricos cargándolos completamente, dejándolos estacionados durante la noche y haciéndolos pasar por múltiples ciclos UDDS y HWFET hasta que la prueba haya agotado por completo la batería. Los fabricantes realizan las pruebas con una mezcla de 55% HWFET y 45% UDDS.

El fabricante registra la distancia total recorrida por el vehículo eléctrico durante la prueba como estimación preliminar de la autonomía. Sin embargo, el fabricante ajusta esta estimación mediante un factor de corrección para tener en cuenta las variaciones en las condiciones de conducción, como la temperatura, el terreno y el comportamiento del conductor.

La EPA ha basado el factor de corrección en datos recopilados de la conducción en el mundo real. La estimación final del rango es el producto de los factores preliminares y de corrección. El factor de corrección es 0,7 para las pruebas de dos ciclos.

Por ejemplo, si un vehículo eléctrico viaja 300 millas durante la prueba con un factor de corrección de 0,7, su alcance estimado final por la EPA sería 300 x 0,7 = 210 millas.

Este resultado significa que el vehículo eléctrico puede recorrer 210 millas con una carga completa en condiciones de conducción típicas.

Después de la prueba, la batería se recarga desde una fuente de CA normal utilizando el cargador del fabricante para ese vehículo.

El consumo de energía de los ciclos en ciudad y carretera (en kW-h/milla o kW-h/100 millas) se determina matemáticamente a partir de la energía de recarga, los datos de descarga de CC y la distancia de cada ciclo.

La energía de recarga incluye cualquier pérdida por ineficiencias del cargador del fabricante.

### Prueba de cinco ciclos

Además del programa de conducción con dinamómetro urbano (UDDS) y el programa de conducción con economía de combustible en carretera (HWFET), la EPA ha definido tres ciclos adicionales.

Los tres ciclos adicionales en las pruebas de cinco ciclos de la EPA son el US06, el SC03 y la prueba de temperatura fría.

La EPA utiliza estos ciclos para medir la economía de combustible y las emisiones de los vehículos en diferentes condiciones de conducción que los ciclos estándar en ciudad y carretera no cubren.

El US06 es un ciclo de conducción agresiva de alta aceleración que simula la conducción en autopistas y caminos rurales con velocidades más altas y paradas más frecuentes. También se le conoce como ciclo FTP suplementario.

El SC03 es una bicicleta de conducción que simula la conducción con aire acondicionado en climas cálidos. También se conoce como ciclo FTP suplementario de aire acondicionado.

La prueba de temperatura fría es un ciclo de conducción que simula condiciones de clima frío. Se realiza a 20°F (-7°C) en lugar de los 75°F (24°C) normales. También se conoce como Prueba de CO2 en Frío.

Estos tres ciclos adicionales se utilizan para calcular las clasificaciones ajustadas de economía de combustible que se muestran en las pegatinas de las ventanas de los vehículos nuevos. Las calificaciones ajustadas son más representativas de la conducción en el mundo real que las calificaciones no ajustadas basadas únicamente en los ciclos estándar en ciudad y carretera.

El fabricante de vehículos eléctricos puede elegir si desea utilizar las pruebas de 2 o cinco ciclos. Normalmente elegirán el que llegue más lejos.

[Tesla utiliza una prueba de cinco ciclos para obtener un rango EPA más largo](https://www.caranddriver.com/features/a33824052/adjustment-factor-tesla-uses-for-big-epa-range-numbers/).

## ¿Qué tan correcto es?

Muchos consideran que las pruebas de la EPA están más cerca de las cifras del mundo real que las pruebas WLTP.

En la [base de datos de modelos EVKX.net](/evsearch), hemos enumerado el resultado de la EPA para los modelos. La EPA también tiene su propia [búsqueda](https://www.fueleconomy.gov/feg/PowerSearch.do?action=PowerSearch&year1=2021&year2=2023&minmsrpsel=0&maxmsrpsel=0&city=0&highway=0&combined=0&cbftelectricity=Electricity&YearSel=2021-2023&MakeSel=&MarClassSel=&FuelTypeSel=Electricidad&VehTypeSel=&TranySel=&DriveTypeSel=&CylindersSel=&MpgSel=000&sortBy=Comb&Units=&url=SearchServlet&opt=new&minmsrp=0&maxmsrp=0&minmpg=0&maxmpg=0&sCharge=&tCharge=&startstop=&cylDeact=&rowLimit=200)