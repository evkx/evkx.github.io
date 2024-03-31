---
title: Tampon
linktitle: Tampon
description: Pour protéger la batterie les fabricants mettent en place des tampons sur les batteries.
weight: 10
---
<!-- markdownlint-disable MD033 -->

Une batterie tampon est une caractéristique de certains véhicules électriques qui entraîne une différence entre la capacité brute et nette de la batterie. La capacité brute est l’énergie totale que la batterie peut stocker. En revanche, la capacité nette correspond à l’énergie utilisable que la batterie peut fournir au véhicule. La différence entre la capacité brute et nette est appelée le tampon.

Le système de gestion de la batterie (BMS) contrôle le tampon.

Le tampon a deux fonctions principales : protéger la batterie contre les dommages et optimiser ses performances. Le tampon protège la batterie contre les dommages en l'empêchant d'une surcharge ou d'une décharge excessive, ce qui peut provoquer une dégradation irréversible, voire un emballement thermique. Le tampon optimise les performances de la batterie en lui permettant de fonctionner dans sa plage optimale de SOC, où elle peut fournir une puissance et une efficacité plus élevées.

## Comment fonctionne une batterie tampon ?

Un tampon de batterie limite les niveaux SOC maximum et minimum que la batterie peut atteindre. Le niveau SOC maximum est appelé tampon supérieur, tandis que le niveau SOC minimum est appelé tampon inférieur. Le tampon inférieur est aussi parfois appelé tampon de brique car il empêche la batterie d'atteindre 0 % de SOC, ce qui pourrait endommager ou briquer les cellules.

Le diagramme ci-dessous montre comment une brique et un tampon supérieur empêcheront la batterie d'être déchargée en dessous de la limite du tampon de brique et chargée au-dessus du tampon supérieur.

<a href="chargecurve.drawio.svg">
     <img src="chargecurve.drawio.svg" class="img-fluid">
</a>

La taille du tampon peut dépendre du type et de la composition chimique des cellules utilisées dans la batterie. Par exemple, certaines cellules peuvent avoir une tolérance plus élevée que d’autres en matière de surcharge ou de décharge excessive, nécessitant ainsi des tampons plus petits. Certaines cellules peuvent également avoir des plages SOC optimales différentes de celles d’autres et nécessitent donc des tampons plus grands.

Le BMS régule la charge et la décharge de la batterie en conséquence pour la maintenir dans les limites approuvées.

Parfois, le fabricant choisit de modifier la taille du tampon avec des mises à jour logicielles. Ce changement se produit généralement lorsque le fabricant en sait plus sur les performances d'une nouvelle batterie en matière de dégradation.

## Tampon utilisable caché

Certains fabricants cachent une partie de la capacité disponible de la batterie dans un tampon utilisable caché. Qu'est-ce que cela signifie?

Cela signifie généralement que l’échelle SOC n’est pas linéaire. Cela signifie que 0 à 1 % est plus grand que tous les autres pourcentages. Dans de nombreux cas, le pourcentage de 0 à 1 % peut représenter 5 à 10 fois l’autre pourcentage. L'énergie supplémentaire est souvent appelée <b>Zéro Tampon</b>.

Le diagramme montre que 0 à 1 % est beaucoup plus élevé pour le SOC affiché que les autres pourcentages.

<a href="hiddenbuffer.drawio.svg">
     <img src="hiddenbuffer.drawio.svg" class="img-fluid">
</a>

Cette stratégie rend moins probable que le véhicule électrique soit à court de batterie. Le problème avec cette approche est que vous chargez généralement la voiture lorsqu'il en reste 5 à 10 % pour vous assurer de ne pas en manquer, mais lorsqu'il y a de la capacité cachée, le conducteur finit par charger déjà lorsqu'il reste 15 à 20 % de batterie. gauche. Cette approche amène le propriétaire à bénéficier d’une autonomie électrique inférieure à celle de la réalité.

EVKX.net estime qu'il s'agit d'une mauvaise pratique de la part des fabricants.

<b>Bjørn Nyland</b> a testé plusieurs véhicules électriques pour voir quelle quantité d'énergie supplémentaire le constructeur a cachée entre 0 et 1 %. Plus c'est pire puisque cela trompe le propriétaire.

<img src="https://media.evkx.net/multimedia/technology/battery/tbzeromile_1_st.jpg" class="img-fluid">

Quelques tests avec résultats :

<table class="table table-striped">
<thead>
    <tr>
        <td>
        Model
        </td>
        <td>
        Zero Buffer
        </td>
    </tr>
</thead>
<tbody>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=2rSuFCrf-C0" target="_blank">Audi e-tron 55</a></td>
        <td>0kWh</td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=OR5JRd0g_Q8" target="_blank">Nissan Aryia 87kWh FWD</a></td>
        <td>5.1kWh</td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=dAM1CIlJ1xQ" target="_blank">Toyota bZ4X</a></td>
        <td>5.1kWh</td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=y675YCgSnlc" target="_blank">Tesla Model Y Performance</a></td>
        <td>4.1kWh</td>
    </tr>
</tbody>
</table>

Consultez les résultats des tests de Bjørns pour <a href="https://docs.google.com/spreadsheets/d/1V6ucyFGKWuSQzvI8lMzvvWJHrBS82echMVJH37kwgjE/edit#gid=52159941" target="_blank">plus de données</a> ou toutes ses <a href ="https://www.youtube.com/playlist?list=PLqKx2qnB8Xv6ddxPVkiqQZMNyLtYjqQkq" target="_blank">Tests zéro mile</a>

<div class="mt-3 mb-3">
     <a href="../chargement/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i> Dégradation de la batterie</strong></a>
     <a href="../manufactors/" class="text-decoration-none text-black float-end"><strong>Fabricants <i class="bi-arrow-right"></i></strong></a>
</div>