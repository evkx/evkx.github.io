---
title: Tests de la gamme EPA
linktitle: EPA
description: Le test de gamme EPA est le test utilisé aux États-Unis. L'Environmental Protection Agency des États-Unis définit les tests.
weight: 1
shownavtabs: true
---
<!-- markdownlint-disable MD033 -->

## Comment est-il testé ?

L'EPA définit les [cycles de test](https://www.fueleconomy.gov/feg/fe_test_schedules.shtml) et la SAE la [procédure de test](https://www.fueleconomy.gov/feg/pdfs/EPA%20test %20procédure%20pour%20EVs-PHEVs-11-14-2017.pdf).

Les constructeurs effectuent les tests EPA sur un dynamomètre, un appareil qui simule les conditions de conduite en plaçant le véhicule sur des rouleaux et en mesurant ses performances.

{{< sitefiguresized thumb="guides/understandingrange/epa/bmwi7dynamometer_1_st.jpg" width="3000" height="2000" title="BMW i7 sur un dynamomètre" >}}

Le fabricant peut choisir entre un test en deux ou cinq cycles.

### Tests à deux cycles

L'EPA définit deux cycles de conduite pour représenter des scénarios typiques de ville et d'autoroute : le programme de conduite au dynamomètre urbain (UDDS) et le programme de conduite avec économie de carburant sur autoroute (HWFET).

Le cycle UDDS implique des arrêts et des démarrages fréquents, tandis que le cycle HWFET implique des vitesses constantes et un freinage minimal.s frequent stops and starts, while the HWFET cycle involves steady speeds and minimal braking.

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
</table>{{< sitefiguresized thumb="guides/understandingrange/epa/epacycles_st.png" width="2732" height="1505" title="Cycles EPA" >}}

Les fabricants testent les véhicules électriques en les chargeant complètement, en les laissant garés pendant la nuit et en les faisant subir plusieurs cycles UDDS et HWFET jusqu'à ce que le test ait complètement épuisé la batterie. Les fabricants effectuent les tests avec un mélange 55 % HWFET et 45 % UDDS.

Le constructeur enregistre la distance totale parcourue par le véhicule électrique pendant le test comme estimation préliminaire de l'autonomie. Cependant, le constructeur ajuste cette estimation par un facteur de correction pour tenir compte des variations des conditions de conduite, telles que la température, le terrain et le comportement du conducteur.

L'EPA a basé le facteur de correction sur les données collectées lors de la conduite réelle. L'estimation finale de la plage est le produit des facteurs préliminaires et correctifs. Le facteur de correction est de 0,7 pour les tests à deux cycles.

Par exemple, si un véhicule électrique parcourt 300 miles pendant le test avec un facteur de correction de 0,7, son estimation finale de l'autonomie EPA serait de 300 x 0,7 = 210 miles.

Ce résultat signifie que le véhicule électrique peut parcourir 210 miles avec une charge complète dans des conditions de conduite typiques.

Après le test, la batterie est rechargée à partir d’une source CA normale en utilisant le chargeur du fabricant pour ce véhicule.

La consommation d'énergie des cycles urbains et routiers (en kWh/mile ou kWh/100 miles) est ensuite déterminée mathématiquement à partir de l'énergie de recharge, des données de décharge DC et de la distance parcourue pour chaque cycle.

L’énergie de recharge inclut toutes les pertes dues aux inefficacités du chargeur du fabricant.

### Test en cinq cycles

En plus du programme de conduite au dynamomètre urbain (UDDS) et du programme de conduite à économie de carburant sur autoroute (HWFET), l'EPA a défini trois cycles supplémentaires.

Les trois cycles supplémentaires dans les tests en cinq cycles de l'EPA sont l'US06, le SC03 et le test à froid.

L'EPA utilise ces cycles pour mesurer la consommation de carburant et les émissions des véhicules dans différentes conditions de conduite que les cycles standard en ville et sur autoroute ne couvrent pas.

L'US06 est un cycle de conduite agressif à forte accélération qui simule la conduite sur autoroutes et routes rurales avec des vitesses plus élevées et des arrêts plus fréquents. Il est également connu sous le nom de cycle FTP supplémentaire.

Le SC03 est un cycle de conduite qui simule la conduite avec climatisation par temps chaud. Il est également connu sous le nom de cycle FTP supplémentaire pour la climatisation.

Le test de température froide est un cycle de conduite simulant des conditions météorologiques froides. Elle est réalisée à 20°F (-7°C) au lieu des 75°F (24°C) normaux. Il est également connu sous le nom de test CO2 à froid.

Ces trois cycles supplémentaires sont utilisés pour calculer les cotes d’économie de carburant ajustées affichées sur les autocollants des vitres des véhicules neufs. Les notes ajustées sont plus représentatives de la conduite réelle que les notes non ajustées basées uniquement sur les cycles standard en ville et sur autoroute.

Le fabricant de véhicules électriques peut choisir d’utiliser les tests en 2 ou en cinq cycles. Généralement, ils choisissent celui qui va le plus loin.

[Tesla utilise un test en cinq cycles pour obtenir une plage nominale EPA plus longue](https://www.caranddriver.com/features/a33824052/adjustment-factor-tesla-uses-for-big-epa-range-numbers/).

## Dans quelle mesure est-ce exact ?

Beaucoup considèrent que les tests EPA sont plus proches des chiffres réels que les tests WLTP.

Dans la [base de données de modèles EVKX.net](/evsearch), nous avons répertorié les résultats EPA pour les modèles. L'EPA possède également son propre [search](https://www.fueleconomy.gov/feg/PowerSearch.do?action=PowerSearch&year1=2021&year2=2023&minmsrpsel=0&maxmsrpsel=0&city=0&highway=0&combined=0&cbftelectricity=Electricity&YearSel=2021-2023&MakeSel=&MarClassSel=&FuelTypeSel=Electricity&VehTypeSel=&TranySel=&DriveTypeSel=&CylindersSel=&MpgSel=000&sortBy=Comb&Units=&url=SearchServlet&opt=new&minmsrp=0&maxmsrp=0&minmpg=0&maxmpg=0&sCharge=&tCharge=&startstop=&cylDeact=&rowLimit=200)
