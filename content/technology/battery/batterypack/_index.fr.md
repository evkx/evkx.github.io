---
title: Batterie et configuration
linktitle: Batterie et configuration
description: Le système de batterie combine de nombreuses cellules et autres composants électroniques de commande dans une batterie complète pour alimenter le véhicule électrique.
weight: 4
---

<!-- markdownlint-disable MD033 -->
## Configuration de la batterie

Dans un véhicule électrique (VE), la configuration de la batterie fait référence à la disposition des cellules individuelles de la batterie au sein du bloc-batterie. La configuration de la batterie peut affecter la tension, la capacité, la puissance de sortie et d'autres aspects de la batterie ainsi que les performances globales du véhicule.
La configuration la plus courante pour les batteries EV est un hybride série-parallèle. Dans cette configuration, plusieurs cellules sont connectées en série pour augmenter la tension du bloc-batterie, et plusieurs groupes de cellules connectées en série sont ensuite connectés en parallèle pour augmenter la capacité globale du bloc-batterie.

La connexion en série des cellules augmente la tension de sortie de la batterie, ce qui est essentiel pour fournir la puissance nécessaire à la conduite du véhicule. La connexion parallèle des groupes de cellules augmente la capacité de la batterie, ce qui est essentiel pour stocker l’énergie nécessaire pour conduire la voiture à une autonomie souhaitée.

Pour calculer la taille brute de la batterie, multipliez la capacité parallèle totale en Ah (ampères-heures) par la tension nominale de la batterie en Volts. Les résultats sont en WH wattheures.


### Exemple : Audi Q8 e-tron 55

Le schéma ci-dessous montre la configuration d'un module de batterie de l'Audi Q8 e-tron 55. Ce module contient 12 cellules de batterie, dont quatre sont montées en parallèle, et il existe trois groupes de cette configuration parallèle en série.

<figure>
<img src="configuration1.drawio.svg" class="img-fluid mx-auto d-block">
<légende de la figure>
         <p class="lead text-center fw-semibold">
             module 3s4p
         </p>
     </figcaption>
</figure>

Chaque cellule a une tension nominale de 3,6667 volts et une capacité de 72 AH.

Trois cellules en série donnent une tension de module de 11 Volts. 4 x 72AH en parallèle donne une capacité totale de module de 72 x 4 = 288 AH. Le Q8 e-tron 55 dispose d'un total de 36 modules en série. 36 x 11 volts donne 396 volts pour le pack. 396 Volts x 288 aH = 114 048 Wh ou 114 kWh de capacité brute.


### Exemple : Tesla Model Y longue portée

La Tesla Model Y Long Range utilise 4416 cellules au petit format 21700, avec 96 lignes et 46 cellules en parallèle.

Chaque cellule mesure 4,8 Ah avec une tension nominale de 3,7 Volts. 4,8ah x 46 donne un total de 220,8 ah. 96 x 3,7 volts donne une tension nominale du bloc de 355 volts. Cette configuration offre une capacité brute de 355 * 220,8 = 78,4 kWh.


### Exemple : Kia EV 6 longue portée

La batterie longue autonomie du Kia EV6 compte 384 cellules au total. Les cellules sont configurées en 192 rangées, avec deux cellules en parallèle, et sont structurées en modules de 12 cellules.


<figure>
<img src="configuration3.drawio.svg" class="img-fluid mx-auto d-block">
<légende de la figure>
         <p class="lead text-center fw-semibold">
             module 6s2p
         </p>
     </figcaption>
</figure>


Chaque cellule fait 55,6 AH. 2x55,6 = 111,2AH. La tension nominale est de 3,63 par cellule. 192 x 3,63 = 696,96 Volts nominal pour le pack. 696,96 * 111,2 = 77,5 kWh.
### Autres exemples de batteries
Voici quelques exemples de configuration

<table class="table table-striped border">
     <tête>
         <tr>
         <th>Modèle
         </th>
         <th>Capacité brute
         </th>
         <th>Configuration
         </th>
         <th>Tension nominale
     </tête>
     <corps>
     <tr>
         <td>Audi Q8 e-tron</td>
         <td>116 kWh</td>
         <td>108s4p</td>
         <td>396 volts</td>
     </tr>
     <tr>
         <td>Audi e-tron GT</td>
         <td>93,7 kWh</td>
         <td>198s2p</td>
         <td>725 volts</td>
     </tr>
     <tr>
         <td>Kia EV6 GT</td>
         <td>77,4</td>
         <td>192s2p</td>
         <td>697 volts</td>
     </tr>
     <tr>
         <td><a href="../../../models/nio/">Batterie Nio 100KWh</a></td>
         <td>100 kWh</td>
         <td>96s1p</td>
         <td>358 volts</td>
     </tr>
     <tr>
         <td><a href="../../../models/mercedes/eqe/">Mercedes EQE</a></td>
         <td>96,12 kWh</td>
         <td>90s4p</td>
         <td>328 volts</td>
     </tr>
     <tr>
         <td><a href="../../../models/mercedes/eqs/">Mercedes EQS</a></td>
         <td>120 kWh</td>
         <td>108s4p</td>
         <td>396 volts</td>
     </tr>
     <tr>
         <td><a href="../../../models/tesla/model_y/model_y_long_range/">Tesla Model Y longue portée</a></td>
         <td>78,1 kWh</td>
         <td>96s46p</td>
         <td>357 volts</td>
     </tr>
     <tr>
         <td>Rivan R1S Grand pack</a></td>
         <td>135 kWh</td>
         <td>108s72p</td>
         <td>390 volts</td>
     </tr>
     <tr>
         <td>Pack Rivan R1S Max</a></td>
         <td>149 kWh</td>
         <td>108s72p</td>
         <td>390 volts</td>
     </tr>
       <tr>
         <td>Porsche Macan / Audi Q6</a></td>
         <td>100 kWh</td>
         <td>180s1p</td>
         <td>662 volts</td>
     </tr>
</tbody>
</table>


La configuration spécifique de la batterie utilisée dans un véhicule électrique dépend de divers facteurs, tels que l'autonomie souhaitée, la puissance de sortie et le poids total du véhicule.

{{<evkxdisplayaddarticle />}}

### 400 or 800 vdes olts ?

Les fabricants configurent généralement les packs à environ 400 volts ou 800 volts.

Une configuration de batterie à tension plus élevée, telle qu'un système de 800 volts, peut offrir certains avantages par rapport à un système à tension inférieure de 400 volts, mais présente également des inconvénients potentiels. Voici quelques avantages et inconvénients de chaque configuration :

#### Avantages Forfait 400 Volts

**Technologie plus mature :** Les systèmes de batteries de 400 volts existent depuis plus longtemps et sont plus largement utilisés dans les véhicules électriques, ce qui signifie qu'ils sont plus éprouvés et plus fiables.

**Coût inférieur :** Parce qu'il s'agit d'une technologie plus établie, les systèmes de batteries de 400 volts ont tendance à être moins coûteux à produire que les systèmes à tension plus élevée.

**Infrastructure de recharge largement disponible :** De nombreuses bornes de recharge publiques prennent en charge la recharge de 400 volts, ce qui facilite la recherche d'endroits où recharger votre véhicule électrique. Par exemple, le réseau Tesla Supercharger ne prend pas en charge la recharge à 800 Volts.

**Plus de configurations de cellules disponibles :** Les packs de 400 volts peuvent être configurés de plusieurs manières, offrant ainsi au fabricant davantage d'options de cellules.

#### Inconvénients Forfait 400 Volts

**Charge plus lente :** Un système de batterie de 400 volts nécessite généralement des temps de charge plus longs qu'un système de 800 volts, ce qui peut être un inconvénient si vous devez recharger votre véhicule rapidement. Cette limitation est due au fait que les chargeurs ont des limites de courant. De nombreux chargeurs sont limités à 500 ampères. 500 ampères x 400 volts = 200 kW. Sur un chargeur de 800 volts avec les mêmes limitations de courant, le résultat serait de 500 ampères x 800 volts = 400 kW de puissance de charge.

**Puissance de sortie limitée :** Les systèmes de batterie de 400 volts peuvent ne pas être en mesure de fournir la même puissance de sortie qu'un système de 800 volts, ce qui pourrait limiter l'accélération et les performances du véhicule électrique. Cette limitation ne semble pas être un problème avec les modèles actuels.

**Plus lourd :** Un système de batterie de 400 volts peut nécessiter des câbles plus épais pour prendre en charge la même vitesse de charge.

#### Avantages Forfait 800 Volts

**Charge plus rapide :** Un système de batterie de 800 volts peut prendre en charge une vitesse de charge plus rapide qu'un système de 400 volts, ce qui vous permet de passer moins de temps à charger.

**Puissance de sortie plus élevée :** Un système de batterie de 800 volts peut fournir plus de puissance de sortie, ce qui peut offrir de meilleures accélérations et performances, mais en réalité, les batteries les plus puissantes sont de 400 volts, ce n'est donc pas un réel avantage.

**Plus léger :** Un système de batterie de 800 volts peut nécessiter des câbles plus fins pour prendre en charge une charge à grande vitesse.

#### Inconvénients du forfait 800 Volts :

**Infrastructure de recharge limitée** : Moins de bornes de recharge publiques prennent actuellement en charge la recharge à 800 volts, ce qui signifie qu'il peut être plus difficile de trouver des endroits pour recharger votre véhicule électrique à pleine vitesse.

Par exemple, le plus grand réseau de recharge, le réseau Tesla Supercharger, recharge à un maximum de 500 Volts. Charger une voiture de 800 volts sur ces chargeurs nécessite que le véhicule électrique convertisse la tension du chargeur en 800 volts, et la conversion est généralement
limite considérablement la vitesse de chargement. Les fabricants utilisent différentes techniques pour cette conversion. Voir le chapitre sur la charge pour plus de détails.

**Nécessite des cellules plus petites** : étant donné que vous auriez besoin d'au moins environ 170 cellules en série pour créer un package « 800 volts », cela empêche l'utilisation des cellules les plus grandes. Des cellules plus grandes donnent une densité plus élevée et moins de câblage.

{{<evkxdisplayaddarticle />}}
## Conceptions de batteries

Certaines conceptions standards sont utilisées pour construire la batterie.

## Cellule à module

La conception cellule à module (C2M) consiste à assembler plusieurs cellules de batterie en un seul module autonome avec des systèmes électroniques et de refroidissement intégrés. Les modules peuvent ensuite être facilement connectés pour former le pack batterie complet.

Chaque module possède son propre BMS (système de gestion de batterie) qui surveille et contrôle la charge et la décharge des cellules au sein du module, permettant un contrôle et une surveillance plus précis des cellules individuelles.

{{< sitefiguresized thumb="technology/battery/batterypack/module_q6_1_st.jpg" width="3000" height="1783" title="Module de batterie Audi Q6 e-tron avec 15 cellules prismatiques" >}}

Avec la technologie C2M, plusieurs cellules de batterie sont assemblées en un seul module autonome avec électronique et systèmes de refroidissement intégrés. Les modules peuvent ensuite être facilement connectés entre eux pour former la batterie complète. Chaque module possède son propre BMS (système de gestion de batterie) qui surveille et contrôle la charge et la décharge des cellules au sein du module, permettant un contrôle et une surveillance plus précis des cellules individuelles.

{{< sitefiguresized thumb="technology/battery/batterypack/q6pack_1_st.jpg" width="3000" height="1924" title="Batterie Audi Q6 e-tron avec 12 modules" >}}

### Avantages de la cellule à module (CtM) :

**Modularité :** Les conceptions CtM permettent de remplacer ou d'entretenir des modules de batterie individuels de manière indépendante. Si un module tombe en panne, il peut être remplacé sans affecter l'ensemble de la batterie.

**Gestion thermique :** Les modules offrent de l'espace pour les composants de gestion thermique (tels que des plaques de refroidissement ou des canaux de refroidissement liquide). Cela aide à réguler la température des cellules et garantit des performances optimales.

**Évolutivité :** Les conceptions CtM permettent une flexibilité dans la configuration des blocs-batteries. Les fabricants peuvent ajuster le nombre de modules pour répondre aux différentes exigences du véhicule (par exemple, autonomie, puissance ou taille).

**Sécurité :** L'isolation des cellules dans les modules améliore la sécurité. Si une cellule subit un emballement thermique ou d’autres problèmes, cela n’aura pas d’impact direct sur les cellules voisines.

**Efficacité de fabrication :** La construction de modules séparément simplifie l'assemblage et le contrôle qualité. Il permet également la production parallèle de modules, rationalisant ainsi le processus de fabrication.
{{<evkxdisplayaddarticle />}}

## Cellule à emballer

Les batteries Cell-to-Pack (CTP) sont un nouveau type de technologie de batterie qui élimine le besoin de modules de batterie en intégrant les cellules directement dans le pack.

Plusieurs entreprises, comme Tesla, BYD et CATL, développent cette technologie.

{{< sitefiguresized thumb="technology/battery/batterypack/catl_qilin_3_st.jpg" width="2222" height="1032" title="Batterie cellule à pack CATL Qilin" >}}

BYD Blade et CATL Qilin sont deux exemples de batteries CTP. La principale différence entre ces deux batteries réside dans leur système de refroidissement.

{{< sitefiguresized thumb="technology/battery/cell/bladebattery_st.jpg" width="3000" height="1351" title="Batterie BYD Blade" >}}

BYD Blade utilise un système de refroidissement liquide, tandis que CATL Qilin utilise un système de refroidissement structurel. Le
Le système de refroidissement structurel est plus efficace que le système de refroidissement liquide utilisé dans BYD Blade.


### Avantages du Cell-to-Pack (CtP) :

**Simplicité :** Les conceptions CtP éliminent le besoin de modules intermédiaires, réduisant ainsi la complexité. Le pack batterie intègre directement des cellules individuelles.

**Utilisation de l'espace :** Sans modules, plus d'espace est disponible pour les cellules, augmentant potentiellement la densité énergétique.

**Efficacité des coûts :** Moins de composants (pas de modules) peuvent entraîner des économies de coûts de production et d'assemblage.

**Réduction de poids :** L'élimination des boîtiers de modules réduit le poids global, améliorant ainsi l'efficacité du véhicule.

## Batterie structurelle

Une batterie structurelle est un type de batterie créé pour devenir un composant structurel du véhicule électrique.

Cette approche peut réduire le poids du véhicule électrique en supprimant les structures en double entre le pack et la structure du véhicule, à mesure que le pack batterie devient une partie de la structure du véhicule.

Cette conception peut améliorer les performances et l’efficacité globales du véhicule électrique. Les batteries structurelles sont encore relativement nouvelles, mais plusieurs entreprises et instituts de recherche les explorent et les développent.

Les batteries structurelles, qui changent la donne dans la conception des véhicules électriques, offrent de nombreux avantages. Ils réduisent le poids et la complexité, améliorent les performances et facilitent l’intégration transparente de la technologie des batteries dans diverses applications.

Tesla Model Y et Tesla Cybertruck sont deux modèles dotés de packs structurels. Selon Tesla, cette solution présente de nombreux avantages, comme la réduction significative du nombre de pièces utilisées tant dans la batterie que dans la voiture.

{{< sitefiguresized thumb="technology/battery/batterypack/teslastructuralbattery_1_st.jpg" width="1585" height="714" title="Pack structurel Tesla 4680 par rapport à un pack traditionnel" >}}

Plus important encore, la société a déclaré que les nouvelles cellules et le pack structurel devraient augmenter l'autonomie du modèle Y de 16 pour cent et réduire le poids total de la voiture de 10 pour cent, ce qui se traduirait par une accélération et une maniabilité améliorées.

{{< sitefiguresized thumb="technology/battery/batterypack/teslastructuralbattery_2_st.jpg" width="1344" height="645" title="Le pack structurel Tesla fonctionne comme le plancher du véhicule électrique" >}}

Tesla utilise de la mousse de polyuréthane rose pour encapsuler et sécuriser les composants de la batterie structurelle. Cette mousse sert à la fois d’isolant et d’élément structurel, apportant rigidité et protection. La mousse garantit que les cellules de la batterie et autres composants critiques restent bien en place et agit comme un pare-feu entre les différentes sections de la batterie.

Cette mousse est aussi résistante qu'une brique, contribuant à l'intégrité structurelle globale du pack2

La vidéo ci-dessous montre une analyse détaillée du pack par Munro & Associates.

{{< youtube FXpfU6I_T3w >}}
## Densité énergétique au niveau de la batterie

Le tableau suivant montre comment la densité des packs a varié au fil du temps entre certains exemples de packs de batteries.

<table class="table table-striped border">
     <tête>
         <tr>
             <th>Pack</th>
             <th>Année</th>
             <th>Capacité brute</th>
             <th>Poids</th>
             <th>Densité</th>
         </tr>
     </tête>
     <corps>
         <tr>
             <td>Tesla Roadster</td>
             <td>2010</td>
             <td>53kWh</td>
             <td>450kg</td>
             <td>118 Wh/kg</td>
         </tr>
          <tr>
             <td>Tesla Model S</td>
             <td>2012</td>
             <td>85kWh</td>
             <td>540kg</td>
             <td>157 Wh/kg</td>
         </tr>
          <tr>
             <td>Tesla Model X</td>
             <td>2015</td>
             <td>75kWh</td>
             <td>530kg</td>
             <td>141 Wh/kg</td>
         </tr>
          <tr>
             <td>Audi e-tron 55</td>
             <td>2018</td>
             <td>95kWh</td>
             <td>699 kg</td>
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
             <td>Tesla Model 3 LFP</td>
             <td>2021</td>
             <td>60 kWh</td>
             <td>477kg</td>
             <td>126Wh/kg</td>
         </tr>
          <tr>
             <td>Tesla Model S</td>
             <td>2022</td>
             <td>100 kWh</td>
             <td>544 kg</td>
             <td>184Wh/kg</td>
         </tr>
          <tr>
             <td>Audi Q8 e-tron 55 </td>
             <td>2022</td>
             <td>114 kWh</td>
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
             <td>107,8 kWh</td>
             <td>495kg</td>
             <td>217Wh/kg</td>
         </tr>
         <tr>
             <td>Sceau BYD LR (LFP)</td>
             <td>2022</td>
             <td>82,56 kWh</td>
             <td>558kg</td>
             <td>148Wh/kg</td>
         </tr>
          <tr>
             <td>Nio Semi-Solide</td>
             <td>2023</td>
             <td>150 kWh</td>
             <td>575kg</td>
             <td>260Wh/kg</td>
         </tr>
          <tr>
             <td>Audi Q6 e-tron / Porsche Macan EV</td>
             <td>2024</td>
             <td>100 kWh</td>
             <td>570kg</td>
             <td>175Wh/kg</td>
         </tr>
     </tbody>
</table>

Si vous souhaitez obtenir des détails sur plus de packs, nous vous recommandons <a href="https://www.batterydesign.net/maximising-pack-energy-density/">BatteryDesign.net</a>

<div class="mt-3 mb-3">
     <a href="../cell/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i> Logement cellulaire</strong>< /a>
     <a href="../batterymanagment/" class="text-decoration-none text-black float-end"><strong>Gestion de la batterie <i class="bi-arrow-right"></i></strong></a>
</div>