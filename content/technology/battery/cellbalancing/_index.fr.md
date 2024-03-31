---
title: Equilibrage cellulaire
linktitle: Equilibrage cellulaire
description: L’équilibrage des cellules est important pour tirer le meilleur parti de la batterie.
weight: 8
---
<!-- markdownlint-disable MD033 -->

L’équilibrage cellulaire est nécessaire lorsqu’un groupe de cellules a un SOC supérieur ou inférieur à celui des autres groupes de cellules.

<img src="cellbalancing.drawio.svg" class="img-fluid">

Dans cet exemple, le groupe supérieur de cellules est chargé à 100 % et la procédure de charge est terminée.
Cependant, le niveau de charge de la batterie haute tension n'est que de 96 %. L'équilibrage signifie que cette cellule est désormais déchargée via une résistance et peut ainsi continuer à être chargée jusqu'à ce que toutes les cellules aient atteint le même niveau de charge. Cela permet à la batterie haute tension d'atteindre sa capacité maximale.

{{<evkxdisplayaddarticle />}}

Pour ce faire, la centrale de régulation de batterie compare les tensions des groupes de cellules. Si les groupes de cellules ont une tension de cellule élevée, l'unité de contrôle des modules de batterie responsable reçoit les informations d'équilibrage. L'équilibrage est effectué lorsque des différences de tension supérieures à env. 1 % se produit lorsque la batterie haute tension est en charge. Après la coupure du contact, la centrale de régulation de batterie vérifie si un équilibrage est nécessaire et le déclenche si nécessaire. L'équilibrage typique est effectué à des niveaux de charge supérieurs à 30 %.

<div class="mt-3 mb-3">
     <a href="../thermalmanagement/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i> Gestion thermique</strong></a>
     <a href="../chargement/" class="text-decoration-none text-black float-end"><strong>Charge <i class="bi-arrow-right"></i></strong ></a>
</div>