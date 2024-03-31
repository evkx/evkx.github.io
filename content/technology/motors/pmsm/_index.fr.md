---
title: Moteurs synchrones à aimants permanents
linktitle: PMSM
description:  Un moteur synchrone à aimant permanent (PMSM) est un moteur électrique qui utilise des aimants permanents sur le rotor pour générer un champ magnétique qui interagit avec l'enroulement du stator pour produire une rotation mécanique. Les PMSM sont couramment utilisés dans diverses applications, notamment les véhicules électriques, les machines industrielles et les appareils électroménagers.
weight: 2
---
<!-- markdownlint-disable MD033 -->

{{<evkxdisplayaddarticle />}}

## Comment ça marche

**Rotor :** Le rotor d'un PMSM contient des aimants permanents qui génèrent un champ magnétique fixe. Les aimants sont généralement constitués de matériaux tels que le néodyme fer bore (NdFeB) ou le samarium cobalt (SmCo) qui ont une force magnétique élevée.

{{< sitefiguresized thumb="technology/motors/pmsm/porschetaycanrotor_st.jpg" width="3000" height="1687" title="Porsche Taycan Rotor avec aimants permanents" >}}

Typiquement, le rotor a 6 ou 8 pôles magnétiques.

**Stator :** Le stator est la partie fixe du moteur et se compose d'enroulements enroulés autour des pôles du stator. Ces enroulements sont généralement en cuivre et sont alimentés en courant alternatif (AC) pour créer un champ magnétique qui interagit avec le rotor.

{{< sitefiguresized thumb="technology/motors/pmsm/porschetaycanstator_st.jpg" width="3000" height="1687" title="Porsche Taycan Stator" >}}

**Commutation :** Le PMSM s'appuie sur la commutation électronique pour contrôler la direction et la vitesse du moteur. Des capteurs, tels que des capteurs à effet Hall ou des encodeurs, sont utilisés pour détecter la position du rotor et fournir un retour d'information au contrôleur de moteur. Sur la base de ce retour d'information, le contrôleur de moteur détermine quand et comment activer et désactiver les enroulements du stator pour créer un champ magnétique rotatif qui entraîne le rotor.

**Synchronisation :** Le champ magnétique généré par les enroulements du stator doit être synchronisé avec la position du rotor pour obtenir un fonctionnement efficace et fluide. Cela se fait généralement à l'aide d'une technique appelée contrôle orienté champ (FOC) ou contrôle vectoriel, qui ajuste l'amplitude et la phase du courant du stator pour l'aligner sur la position du rotor.

**Production de couple :** Lorsque le champ magnétique tournant généré par le stator interagit avec les aimants permanents du rotor, il exerce un couple sur le rotor, le faisant tourner. Le couple produit par le moteur peut être contrôlé en ajustant l’amplitude et la fréquence du courant statorique, qui à son tour détermine la force et la vitesse du champ magnétique tournant.

{{<evkxdisplayaddarticle />}}

**Alimentation :** Les PMSM nécessitent une alimentation capable de fournir la tension alternative et la fréquence appropriées aux enroulements du stator. Ceci est généralement réalisé à l'aide d'un onduleur, qui convertit la tension continue provenant d'une source d'alimentation, telle qu'une batterie ou un réseau électrique, en tension alternative et en fréquence requises pour le moteur.

En résumé, un PMSM utilise des aimants permanents sur le rotor, les enroulements du stator, des techniques de commutation électronique et de synchronisation pour générer un champ magnétique tournant qui entraîne le rotor et produit une rotation mécanique. Le couple et la vitesse du moteur peuvent être contrôlés en ajustant l'amplitude et la fréquence du courant statorique à l'aide d'un onduleur et d'un contrôleur de moteur.

## Avantages

L’un des principaux avantages des moteurs synchrones dans les véhicules électriques est leur densité de puissance plus élevée. Les aimants permanents dans le rotor d'un moteur synchrone fournissent un champ magnétique constant, ce qui permet un couple et une puissance de sortie plus élevés par rapport aux moteurs asynchrones de taille similaire. Cela rend les moteurs synchrones particulièrement adaptés aux véhicules électriques hautes performances qui nécessitent une accélération rapide et des vitesses élevées.

Les moteurs synchrones des véhicules électriques sont également connus pour leur contrôle précis et efficace. Ils peuvent être contrôlés avec précision à l'aide d'une électronique de puissance avancée, telle que des contrôleurs de moteur ou des onduleurs, qui permettent d'optimiser les performances et d'améliorer la gestion de l'énergie. Cela permet des fonctionnalités telles que la vectorisation du couple, où le couple peut être contrôlé indépendamment pour chaque roue, améliorant ainsi la traction et la maniabilité dans diverses conditions de conduite.

Un autre avantage des moteurs synchrones est leur capacité à atteindre un rendement élevé sur une large plage de vitesses et de charges. Cela permet un fonctionnement efficace à basse et à haute vitesse, ce qui est particulièrement utile dans les véhicules électriques qui nécessitent différents niveaux de puissance et de couple en fonction des conditions de conduite.

{{<evkxdisplayaddarticle />}}

## Limites

**Matériaux de terres rares :** Les PMSM nécessitent des aimants de terres rares, qui peuvent être coûteux et avoir des implications environnementales en termes d'exploitation minière et de durabilité.

**Traînée en roue libre :** Lorsqu'un véhicule électrique (VE) roule en roue libre ou roule sans puissance, le moteur électrique peut créer un effet de traînée, souvent appelé « traînée du moteur » ou « traînée en roue libre ». Cette traînée est causée par les forces électromagnétiques à l'intérieur du moteur, qui peuvent résister au mouvement du rotor et créer une résistance au mouvement du véhicule.

Dans le cas des moteurs à aimants permanents, qui ont des aimants dans le rotor, ils peuvent générer plus de traînée lorsque le moteur n'est pas alimenté. Les aimants du rotor créent un champ magnétique fixe, ce qui peut créer une résistance supplémentaire au mouvement du rotor, ce qui entraîne une traînée du moteur plus élevée que celle des moteurs à induction. Cependant, la traînée du moteur à aimant permanent peut également dépendre de la stratégie de conception et de contrôle spécifique utilisée, car certains moteurs à aimant permanent peuvent avoir une traînée réduite grâce à des techniques avancées de contrôle du moteur.

Certains fabricants de véhicules électriques utilisent un embrayage pour découpler le moteur de la transmission, désengageant ainsi efficacement le moteur des roues et permettant au véhicule de rouler sans aucune résistance du moteur. Cela peut contribuer à réduire la résistance ressentie par les roues lorsque le moteur n'est pas alimenté, ce qui peut potentiellement améliorer l'efficacité du véhicule et réduire la consommation d'énergie.

{{< sitefiguresized thumb="technology/motors/pmsm/mercedeseqesuvfrontmotordisconnect_st.jpg" width="3000" height="1687" title="Mercedes EQE Suv avec embrayage qui déconnecte le moteur avant en roue libre" >}}

D'autres utilisent des moteurs à induction à l'avant et des PSMS à l'arrière. Par exemple, tous les soins basés sur la plateforme Volkswagen MEB.

Si vous souhaitez en savoir encore plus sur le moteur PSMS, nous vous recommandons de regarder cette vidéo dans laquelle Lucid explique sa conception PMSM et la compare avec d'autres.

{{< youtube U7IHZxNC6hc >}}


{{< pagenavigation b_url="../asm/" b_title="Moteurs à induction" f_url="../wrsm/" f_title="WRSM" >}}