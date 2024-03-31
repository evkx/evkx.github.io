---
title: Gestion thermique de la batterie
linktitle: Gestion thermique
description: La gestion thermique est essentielle pour les performances et la santé de la batterie
weight: 6
---
<!-- markdownlint-disable MD033 -->

La température optimale pour une batterie est d’environ 20 à 30 degrés Celsius pour son fonctionnement. Pour le stockage, la température optimale est encore plus basse.

Une batterie dispose d’un système de gestion thermique pour tenter de maintenir la batterie dans les meilleures conditions de fonctionnement.

Une batterie dispose d'un système de gestion thermique pour maintenir la batterie dans les meilleures conditions de fonctionnement.

Ce système comprend le refroidissement et le chauffage.

## Chauffage de la batterie

Lorsque la batterie est trop froide, elle ne peut pas accepter ou fournir le courant maximum, ce qui réduit l'autonomie, les performances, le freinage à régénération maximale et la vitesse de charge.

Cette limitation est due au fait que les réactions chimiques à l’intérieur de la batterie ralentissent lorsque la température baisse et que la résistance interne augmente.

Charger une batterie froide à un rythme élevé peut également endommager les cellules de la batterie et réduire leur durée de vie.

Pour surmonter ce problème, certains véhicules électriques disposent d’une fonctionnalité appelée préconditionnement de la batterie. Cette fonction permet au véhicule électrique de réchauffer la batterie à une température appropriée avant de la charger ou de conduire. Ce faisant, le véhicule électrique peut préserver la santé de la batterie, augmenter l’autonomie et raccourcir le temps de charge.

### Comment fonctionne le préconditionnement de la batterie ?

Le préconditionnement de la batterie utilise le système de chauffage embarqué ou la chaleur perdue du moteur/de la transmission pour augmenter la température de la batterie.

{{< sitefiguresized thumb="technology/battery/thermalmanagment/thermal_management_st.jpg" width="2000" height="1200" title="Circuits de chauffage de la batterie Audi e-tron GT" >}}


#### Condition préalable automatique lors de la navigation vers le chargeur DC Fast

La manière la plus courante d’activer la condition préalable de la batterie consiste à accéder à un chargeur DC Fast dans le système de navigation embarqué. Le système calcule ensuite, en fonction de la distance jusqu'au chargeur et de la température, la quantité de chaleur nécessaire pour obtenir la température optimale de chargement.

De cette façon, la batterie sera prête à accepter le courant maximum et à se charger plus rapidement.

{{< sitefiguresized thumb="technology/battery/thermalmanagment/kiaev9precondition_st.jpg" width="2078" height="973" title="Kia EV9 avec un spectacle de chauffage actif sur le symbole de la batterie en bas à droite" >}}

#### Condition préalable activée manuellement

Certains modèles permettent l'activation manuelle de la condition préalable de la batterie. Cette fonctionnalité permet au conducteur d'activer le chauffage sans indiquer au système de navigation que vous vous dirigez vers un chargeur.

{{< sitefiguresized thumb="technology/battery/thermalmanagment/vw_manual_preheating_st.jpg" width="2300" height="981" title="Préconditionner manuellement le VW ID7" >}}

#### Précondition avant de voyager

Si vous disposez d'un chargeur domestique, une bonne option consiste à préconditionner la batterie et l'habitacle avant de conduire lorsqu'ils sont connectés au chargeur domestique.

De cette façon, vous pouvez commencer avec une cabine et une batterie chaudes et une batterie complètement chargée.

En règle générale, le conducteur peut démarrer le préconditionnement à partir du système d'infodivertissement ou de l'application du véhicule.

Certains modèles ne prennent pas en charge la condition préalable de la batterie et uniquement de l'habitacle. Pour ces modèles, il peut être judicieux de s’assurer que la recharge est terminée juste avant de commencer le voyage.

{{< sitefiguresized thumb="technology/battery/thermalmanagment/preconditionwhencharger_1_st.jpg" width="3000" height="1892" title="Préconditionner manuellement le VW ID7" >}}


### Quelle est la puissance des circuits de chauffage ?

La puissance des circuits de chauffage dépend du modèle de VE et de la taille de la batterie. Par exemple, la Tesla Model 3 dispose d'une batterie de 75 kWh et d'un système de chauffage de 6 kW, qui peuvent augmenter la température de la batterie d'environ 18°C (32°F) en une heure. La Nissan Leaf dispose d'une batterie de 40 kWh et d'un système de chauffage de 3 kW, qui peuvent augmenter la température de la batterie d'environ 9°C (16°F) en une heure.

Pour certains modèles dotés d'un chauffage à faible puissance, amener la batterie à une température optimale par temps froid peut être difficile.

Voir le tableau ci-dessous pour quelques exemples de puissance de chauffage de la batterie

<table class="table table-striped border">
    <thead>
        <tr>
        <th>Model
        </th>
        <th>Heating Power
        </th>
    </thead>
    <tbody>
    <tr>
        <td>Kia Ionic 6</td>
        <td>4.5kW</td>
    </tr>
</tbody>
</table>
### Comment le préconditionnement de la batterie affecte-t-il l'autonomie ?

Le préconditionnement de la batterie consomme une partie de l'énergie de la batterie, ce qui réduit l'autonomie disponible.

Cependant, cette perte d’énergie est partiellement compensée par l’amélioration de l’efficacité et des performances de la batterie à une température plus élevée.

De plus, le préconditionnement de la batterie pendant que le VE est branché peut minimiser la perte d’énergie, car le VE peut tirer son énergie du réseau plutôt que de la batterie.

### Niveau SOC minimum pour la condition préalable

La plupart des véhicules électriques ont une limite quant à l’état de charge.

{{< sitefiguresized thumb="technology/battery/thermalmanagment/preconditiondisabled_st.jpg" width="2054" height="957" title="Kia EV9 GT-Line désactivant la condition préalable à 12 % SOC" >}}

Vous pouvez voir dans <a href="https://youtu.be/rKgnVzUJAfA?t=638" target="_blank">ce test</a> de Bjørn Nyland comment la Kia EV9 désactive la précondition à 12 %.

## Refroidissement de la batterie

La température de la batterie peut atteindre des niveaux élevés lors d'une charge à grande vitesse ou d'une conduite sportive.
Lorsque la batterie est trop chaude, elle peut se dégrader plus rapidement, perdre en capacité et réduire l’autonomie.

Cet effet est dû au fait que les réactions chimiques à l’intérieur de la batterie s’accélèrent lorsque la température augmente et que la résistance interne diminue. Charger une batterie chaude à un rythme élevé peut également endommager les cellules et réduire leur durée de vie.

En règle générale, les fabricants réduisent la charge et la puissance de sortie si la température dans la batterie est trop élevée.

Pour surmonter ce problème, certains véhicules électriques disposent d’un refroidissement actif de la batterie. Cette fonction permet au véhicule électrique d'abaisser la température de la batterie à un niveau approprié pendant la charge ou la conduite afin d'augmenter les performances de charge ou de conduite.


### Comment fonctionne le refroidissement de la batterie ?

Le refroidissement de la batterie utilise un système à base de liquide qui fait circuler un liquide de refroidissement à travers la batterie. Le liquide de refroidissement absorbe la chaleur des cellules de la batterie et la transfère vers un radiateur. Le radiateur dissipe ensuite la chaleur vers l'air ambiant ou une autre boucle de refroidissement à l'aide d'un réfrigérant ou d'une pompe à chaleur. Le liquide de refroidissement peut être un mélange eau-éthylène glycol, un fluide diélectrique ou un fluide contenant des particules thermiquement conductrices.

{{< sitefiguresized thumb="technology/battery/thermalmanagment/batterycooling_1_st.jpg" width="3000" height="1808" title="Circuits de refroidissement de la batterie Audi e-tron" >}}


Dans <a href="https://youtu.be/Q0LaUx5I_28?t=412" target="_blank">ce test de 1 000 km</a> réalisé par Bjørn Nyland, la BMW i50 a un problème de surchauffe après la charge et a réduit la puissance disponible.

<br />

<div class="mt-3 mb-3">
     <a href="../batterymanagment/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i> Gestion de la batterie</strong></a>
     <a href="../cellbalancing/" class="text-decoration-none text-black float-end"><strong>Équilibrage des cellules <i class="bi-arrow-right"></i></strong></a>
</div>