---
title: Chargement
linktitle: Chargement
description: Charger la batterie est le processus d’ajout d’une nouvelle énergie à la batterie.
weight: 8
navicon: bi-battery-charging
---
<!-- markdownlint-disable MD033 -->

Le chargement d'une batterie de VE implique le mouvement de porteurs de charge électrique, tels que des électrons et des ions, entre les électrodes de la batterie. La batterie comporte deux électrodes, une cathode et une anode, séparées par un électrolyte.

Pendant le processus de charge, les électrons circulent de la source de charge (par exemple, une station de charge) vers la cathode, où ils sont stockés dans le matériau cathodique. Dans le même temps, les ions positifs contenus dans l’électrolyte circulent de la cathode vers l’anode à travers le séparateur.

Lorsque la batterie est complètement chargée, le matériau de la cathode atteint sa capacité maximale à stocker des électrons et l’anode est complètement dépourvue d’ions positifs. La batterie est dans un état stable avec une différence de potentiel élevée entre la cathode et l’anode, qui fournit l’énergie électrique stockée dans la batterie.

<figure>
<img src="batteryconceptcharging.drawio.svg" class="img-fluid mx-auto d-block">
<légende de la figure>
         <p class="lead text-center fw-semibold">
             Batterie en charge
         </p>
     </figcaption>
</figure>



Le processus de charge est réversible et pendant la décharge, les électrons reviennent de la cathode à l'anode via un circuit externe, créant ainsi un flux de courant électrique pouvant alimenter un moteur électrique.

{{<evkxdisplayaddarticle />}}

### Performances de charge

Les performances de recharge varient considérablement d’un véhicule électrique à l’autre. Plusieurs aspects affectent la vitesse de recharge des véhicules électriques.

{{< sitefiguresized thumb="technology/battery/charging/charging_1_st.jpg" width="1920" height="1080" title="Kia EV6 GT en charge chez Ionity" >}}

#### La configuration du pack

La configuration du pack peut affecter la vitesse de chargement. Une configuration qui donne une basse tension peut vous amener à atteindre des limites externes de courant de charge. Par exemple, un chargeur DC CCS de 50 kW a un courant maximum de 125 A. Pour obtenir 50 kW à partir de 125 A, vous avez besoin d'un minimum de 400 volts. La limite de courant maximale limiterait un package de 300 volts à une vitesse de charge de 37,5 kW. (300*125)

Il en est de même avec les chargeurs CCS HPC puisqu'ils sont limités à 500 Ampères. 400 volts sur 500 ampères équivaut à un maximum de 200 kW. La vitesse de charge sur une batterie de 300 volts serait limitée à 150 kW.

Volvo et Polestar affirment que leur prochain EVS avec des packs de 400 volts bénéficierait d'une charge de 250 kW. Cependant, la manière dont ils géreraient cela avec les limites actuelles de la norme CCS n’est pas claire.

##### Véhicules électriques de 800 volts sur chargeurs de 400 volts

Avec les voitures plus récentes utilisant des batteries de 800 volts, il existe un problème supplémentaire avec de nombreux chargeurs à grande vitesse limités à une charge de 400 à 500 volts. Si vous possédez un véhicule électrique de 800 volts qui doit convertir la tension du chargeur en tension de la batterie, cela limitera la vitesse de charge maximale. Les Superchargers Tesla, le plus grand réseau de recharge au monde, sont limités à 500 volts, et toutes les voitures de 800 volts utilisant ce réseau sont limitées en vitesse de recharge.

Il existe différentes techniques utilisées pour cela.

###### Onduleur

La technique la plus courante consiste à utiliser un onduleur. Ici, le véhicule électrique dispose d’un onduleur qui peut convertir la tension pour qu’elle corresponde à la tension de la batterie. Cet onduleur a généralement une limitation bien inférieure à la vitesse de charge maximale de 800 volts.
Un exemple est la plate-forme Hyundai E-GMP, qui limite la vitesse à 100 kW en utilisant l'onduleur tout en chargeant à 250 kW à 800 volts. Un autre exemple est la Porsche Taycan, dont la puissance est limitée à environ 50 kW avec les Superchargers avec l'onduleur standard.

###### Chargement bancaire

Cette technique divise la batterie en deux blocs de 400 volts tout en chargeant sur des chargeurs de 800 volts. Les nouveaux Porsche Macan et Audi Q6 e-tron utilisent cette technique et peuvent charger jusqu'à 135 kW sur 400 volts (270 kW sur 800 volts). Un autre exemple
Grâce à la recharge bancaire, le Tesla Cybertruck peut charger jusqu'à 230 kW sur des superchargeurs de 500 volts.

{{< sitefiguresized thumb="technology/battery/charging/bankcharging_1_st.jpg" width="3000" height="1852" title="Charge bancaire Audi Q6 e-tron" >}}

#### Température

La température de la batterie peut affecter considérablement la vitesse de chargement. Par exemple, le BMS peut réduire la vitesse de charge de plus de 50 % par temps froid.

Cette réduction de vitesse est la raison pour laquelle certains véhicules électriques proposent un chauffage automatique de la batterie lors de la navigation vers un chargeur ou la possibilité de déclencher manuellement le chauffage du pack batterie.

Les températures élevées peuvent également réduire les performances. Par exemple, le BMS peut réduire la vitesse de charge par temps chaud ou après une charge à grande vitesse. BMS réduit la vitesse de charge pour laisser la batterie refroidir afin de la protéger.

La température optimale dans une batterie pour le chargement se situe généralement autour de 25 à 35 degrés Celsius (77 à 95 Fahrenheit). Par temps d’été, la batterie se trouve généralement dans cette zone lorsqu’elle arrive à la station de recharge, et vous obtiendrez une vitesse de charge maximale.

{{< sitefiguresized thumb="technology/battery/charging/charging_2_st.jpg" width="1920" height="1080" title="Audi e-tron GT en charge en hiver" >}}

Sur certains modèles à charge rapide, une chaude journée d'été avec une charge à grande vitesse peut amener la batterie à atteindre des températures qui amèneront le BMS à réduire la vitesse de charge pour protéger la batterie. Cette réduction de vitesse se produit généralement si la température de la batterie atteint 50 à 60 degrés Celsius pendant la charge. C'est pourquoi il est essentiel d'avoir une bonne gestion thermique capable d'évacuer la chaleur pendant la charge.

La courbe de charge des modèles sur le site EVKX correspond à des <b>conditions optimales</b> :

- La température dans la batterie est suffisamment élevée pour que la vitesse de charge ne soit pas réduite en raison d'une température basse.
- La température dans la batterie ne devient pas si élevée que le BMS réduit la vitesse de protection pendant la session de charge de 0 à 100 %

{{<evkxdisplayaddarticle />}}
#### Logiciel GTC

Le fabricant décide de la courbe en fonction de diverses entrées. L’entrée peut être la chimie de la batterie ou d’autres aspects physiques, comme le refroidissement. Pourtant, le fabricant décide souvent d’équilibrer la vitesse de charge avec la longévité de la batterie. La charge à grande vitesse affecte la dégradation, et réduire la vitesse réduirait la dégradation.

Certains fabricants limitent également le nombre de sessions de recharge à haut débit sur une période donnée. Le Toytota BZ4X est un modèle lancé par Toyota avec une limitation à seulement deux sessions à grande vitesse par 24 heures. Une charge plus importante se ferait à faible vitesse.

{{< sitefiguresized thumb="technology/battery/charging/taycancharging_1_st.jpg" width="3000" height="2669" title="Porsche Taycan en charge" >}}

La Porsche Taycan est un modèle dans lequel le propriétaire peut définir une vitesse de charge maximale « respectueuse de la batterie » pour réduire la dégradation. Un Taycan peut initialement charger jusqu’à une vitesse de 270 kW. Avec ce paramètre activé, il est limité à 200KW.

#### Exemples de vitesse de charge

EVKX affiche les performances de charge pour chaque véhicule électrique sur notre site avec des graphiques et des calculs basés sur les performances.

Voici quelques exemples de véhicules électriques offrant différents types de performances de recharge.

[Lucid Air Dream Edition Performance](/models/lucid/air/air_dream_edition_performance/chargingcurve/) est le premier exemple. Il a une vitesse de charge extrême de plus de 300 kW, mais chute rapidement.

<img src="/images/models/lucid/air/air_dream_edition_performance/chargingcurve.svg" class="img-fluid">

[Kia EV6 GT](/models/kia/ev6/ev6_gt/chargingcurve/) est l'exemple suivant. Ce modèle est l’un des véhicules électriques à recharge la plus rapide, avec une vitesse élevée et une courbe beaucoup plus plate que le Lucid Air.

<img src="/images/models/kia/ev6/ev6_gt/chargingcurve.svg" class="img-fluid">

{{<evkxdisplayaddarticle />}}

[Nissan Aryia](/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve/) Ce modèle n'a pas de sommet supérieur très élevé, mais la courbe est relativement plate.

<img src="/images/models/nissan/ariya/ariya_87kwh_e-4orce/chargingcurve.svg" class="img-fluid">

Sur les trajets plus longs, la courbe de charge peut affecter l'arrêt de charge optimal. Par exemple, une courbe plus plate profiterait à ceux qui préfèrent des arrêts plus longs, tandis qu'une courbe avec des pics élevés bénéficierait aux arrêts courts et vous rechargeriez autour de la zone de pointe.

Pour tous les modèles, EVKX calcule cela pour vous sur la page d'informations sur le modèle.

<div class="mt-3 mb-3">
     <a href="../cellbalancing/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i> Équilibrage des cellules</strong></a>
     <a href="../degredation/" class="text-decoration-none text-black float-end"><strong>Dégradation <i class="bi-arrow-right"></i></strong ></a>
</div>