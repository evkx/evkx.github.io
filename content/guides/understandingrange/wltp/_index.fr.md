---
title: Tests de la gamme WLTP
linktitle: WLTP
description:  La procédure d'essai harmonisée mondiale pour les véhicules légers (WLTP) est une norme mondiale permettant de déterminer l'autonomie des véhicules électriques.
weight: 2
---
<!-- markdownlint-disable MD033 -->

Pour les voitures vendues en Europe après septembre 2017, il est obligatoire d'utiliser cette norme. Cette norme a remplacé le NEDC.

## Comment est-il testé ?

La procédure de test est [décrit en détail](https://unece.org/transport/documents/2021/02/standards/un-regulation-no-154-worldwide-harmonized-light-vehicles-test) par l'ONU.

En bref, la nouvelle procédure WLTP s'appuie sur les nouveaux cycles de conduite (WLTC – Worldwide Harmonized Light-duty Vehicles Test Cycles) pour mesurer l'autonomie.

Le cycle WLTP comporte quatre sous-parties, chacune avec une vitesse maximale différente. La durée totale du cycle de test est de 30 minutes (1 800 secondes).

<div class="table-responsive">
<table class="table table-striped">
    <thead>
        <tr>
         <th>#
         </th>
         <th>City
         </th>
         <th>Suburban
         </th>
         <th>Rural
         </th>
         <th>Highway
         </th>
         <th>Total
         </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Duration, Seconds 
            </td>
            <td>589
            </td>
            <td>483
            </td>
            <td>455
            </td>
            <td>323
            </td>
            <td>1800
            </td>
        </tr>
        <tr>
            <td>Stop, seconds
            </td>
            <td>150
            </td>
            <td>49
            </td>
            <td>31
            </td>
            <td>8
            </td>
            <td>235
            </td>
        </tr>
        <tr>
            <td>Distance in meter
            </td>
            <td>3095
            </td>
            <td>4756
            </td>
            <td>7162
            </td>
            <td>8254
            </td>
            <td>23266
            </td>
        </tr>
             <tr>
            <td>Percent stop
            </td>
            <td>26.5% 
            </td>
            <td>11.1%
            </td>
            <td>6.8%
            </td>
            <td>2.2%
            </td>
            <td>13.5% 
            </td>
        </tr>
             <tr>
            <td>Max speed
            </td>
            <td>56.5
            </td>
            <td>76.6
            </td>
            <td> 97.4
            </td>
            <td>131.3
            </td>
            <td>
            </td>
        </tr>
             <tr>
            <td>Average speed w/o stop
            </td>
            <td>25.3
            </td>
            <td>44.5
            </td>
            <td>60.7
            </td>
            <td>94
            </td>
            <td>53.5
            </td>
        </tr>
             <tr>
            <td>Avg speed w stop
            </td>
            <td>18.9
            </td>
            <td>39.4
            </td>
            <td>56.5
            </td>
            <td>91.7
            </td>
            <td>46.5
            </td>
        </tr>
        <tr>
            <td>Min acceleration  m/s^2
            </td>
            <td>-1.5 
            </td>
            <td>-1.5
            </td>
            <td>-1.5
            </td>
            <td>- 1.44
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>Max acceleration  m/s^2
            </td>
            <td>1.611
            </td>
            <td>1.611
            </td>
            <td>1.666
            </td>
            <td>1.055
            </td>
            <td>
            </td>
        </tr>
    </tbody>
</table>
</div>Le graphique ci-dessous montre la vitesse des différents cycles.

{{< sitefiguresized thumb="guides/understandingrange/wltp/wltpcycle3_st.png" width="2914" height="1914" title="Cycle WLTP 3B" >}}


Le test est effectué sur un dynamomètre pour obtenir les mêmes conditions. Le

- 23 degrés Celsius
- Climatisation éteinte
- Lumières éteintes

En plus du test au dynamomètre, le constructeur doit tester la voiture en soufflerie. Le test donnera lieu à un coefficient de traînée et à une taille de zone avant utilisés pour calculer l'autonomie WLTP.

{{< sitefiguresized thumb="guides\understandingrange\wltp\windtunnel_st.jpg" width="3000" height="1539" title="Audi e-tron dans une soufflerie" >}}

## Le résultat dépend du niveau d'équipement

Pour de nombreux modèles, certaines options affecteront la gamme. Ces options peuvent être des roues plus grandes, des toits ouvrants, des miroirs virtuels et d'autres facteurs modifiant le poids ou l'aérodynamisme.

Pour les modèles dotés de ces options, le constructeur doit passer deux tests. Un test avec un maximum d'options et un avec un minimum d'options.

Le fabricant peut calculer la plage des différentes configurations d’options à partir de ces chiffres.

## Dans quelle mesure est-ce exact ?

Effectuer un test sans climatisation, chauffage et éclairage à 23 degrés Celsius ne donnera pas une consommation correcte dans de nombreux scénarios réels.

Dans le pire des cas, conduire sur une autoroute sous de fortes pluies et par temps froid ne donnerait probablement que 50 à 60 % de l'autonomie WLTP indiquée.

Dans la base de données de modèles EVKX.net, nous incluons les plages WLTP maximale et minimale ainsi que la plage réelle attendue.