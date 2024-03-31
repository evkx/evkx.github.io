---
title: Comment vérifier l'état de la batterie
linktitle: Vérifier l'état de la batterie
description: Avec des calculs simples, il est possible de vérifier l'état général de votre batterie. Ce guide explique comment.
weight: 1
---
<!-- markdownlint-disable MD033 -->

<div class="alerte alerte-avertissement" role="alerte">
   Cette procédure est <b>uniquement</b> possible à utiliser sur les véhicules électriques qui
   <ul>
   <li>Afficher la consommation complète du trajet et pas seulement la consommation de la dernière distance. Exemple : de nombreux véhicules électriques chinois n'affichent que la consommation sur les 50 derniers km</li>
   <li>N'a pas de tampon utilisable caché, comme le Toyota bZ4X où il cache une grande capacité entre 0 et 1 %</li>
   <li>N'ajuste pas le tampon en cas de dégradation (la plupart ne le font pas)</li>
   </ul>
</div>

Lorsque la batterie se dégrade, la capacité disponible de la batterie diminue. Cette réduction réduit l’autonomie du véhicule électrique.

Si vous savez quelle capacité nette votre voiture devrait avoir lorsqu'elle est neuve, vous pouvez calculer son état de santé actuel.

Cette procédure vous permet de vérifier votre batterie

1. Chargez à 100 %
2. Faites un tour et dépensez au moins 90 % de la batterie. Essayez de maintenir une consommation faible.
3. Prenez note de votre consommation et de votre distance parcourue
4. Notez le SOC (état de charge) final (pourcentage restant sur la batterie)
5. Calculer la capacité réelle

Pour les exemples suivants, nous supposons que vous disposez d’un e-tron 55 d’une capacité nette de 86,5 kWh en sortie d’usine.

## Calcul en miles

### Miles, exemple 1

Vous parcourez 169 miles avec une consommation de 2,6 miles/kWh. Vous avez commencé le voyage avec 100 % de batterie et vous avez terminé avec 21 %.

Tout d'abord, vous calculez l'énergie totale utilisée : 169/2,6 = <b>65 kWh</b>.<br>
S'il vous restait 21 %, vous avez utilisé <b>79 %.</b> (100 %-21 %)<br>
La capacité actuelle est de 79 % = 65 kWh.<br>
Vous pouvez calculer la pleine capacité (100 %) :<br>
(65/79)*100 = <b>82,27 kWh</b><br>
82,27 est la capacité réellement utilisable de votre batterie.
82,27/86,5 = <b>95,1 %</b>
Cela signifie une réduction de près de 5 % par rapport à la capacité utilisable d’origine.

## Calcul en kilomètres

### Km exemple 1

Si vous parcourez 308 kilomètres avec une consommation de 25 kWh/100 km<br>
Vous avez commencé avec 100 % et vous avez terminé avec 5 %.<br>

Tout d'abord, vous calculez l'énergie totale utilisée<br>
(308 * 25)/100 = <b>77kWh</b> au total sur le trajet.<br>
S'il vous reste 5 %, vous avez utilisé <b>95 %</b> pendant le voyage (100-95)<br>

95 % = batterie de 77 kWh.<br>

La pleine capacité (100 %) peut alors être calculée :<br>

(77/95)*100 = <b>81,05 kWh</b>
81,05 est la capacité réelle de votre batterie.<br>
81,05/86,5 = <b>93,7%</b>. Cela signifie une réduction de près de <b>6,5 %</b> par rapport à la capacité d'origine.

## Qu'est-ce qui affecte la capacité

Un seul écart de capacité ne signifie pas nécessairement que votre batterie s’est dégradée.

Si vous avez une consommation élevée, il y aura une certaine perte à cause de la résistance interne.

Si votre batterie était déséquilibrée, cela affectera également sa capacité.

Pour les personnes qui aiment suivre cela, nous recommandons de le suivre dès le début de la propriété. De cette façon, vous connaîtrez davantage votre voiture.

L'exemple suivant montre que les statistiques d'un e-tron 55 2020v1 avec une capacité de 83,6 kWh étaient neuves.

{{< sitefiguresized thumb="guides/checkingbatteryhealth/graph1_st.jpg" width="2463" height="1366" title="Suivi de la capacité réelle de la batterie par rapport à la consommation totale" >}}

{{< sitefiguresized thumb="guides/checkingbatteryhealth/graph2_st.jpg" width="2019" height="1364" title="Suivi de la capacité réelle de la batterie par rapport à la consommation kWh/100 km" >}}