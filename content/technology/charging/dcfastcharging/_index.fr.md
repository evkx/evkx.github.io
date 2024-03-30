---
title: Chargement rapide CC
linktitle: Chargement rapide CC
description: La recharge rapide CC est le moyen le plus rapide et le plus pratique de recharger un véhicule électrique sur la route.
weight: 3
---
<!-- markdownlint-disable MD033 -->

Il utilise un courant continu (courant continu) haute puissance pour fournir jusqu'à 1 000 volts et 250 ampères. La recharge à grande vitesse peut ajouter jusqu'à 200 miles d'autonomie en seulement 20 à 30 minutes, ce qui permet de reconstituer rapidement une batterie de véhicule électrique pour une conduite longue distance.

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/charging_1_st.jpg" width="3000" height="2001" title="BMW i4 M50 DC Charge rapide" >}}

## Disponibilité de la charge rapide DC

La recharge rapide en courant continu peut être facile, disponible, complexe et difficile, selon l'endroit où vous vivez et la voiture que vous conduisez. Certaines zones disposent de très peu de chargeurs et nécessitent de planifier la création d'un itinéraire avec recharge, tandis que d'autres disposent de nombreux chargeurs où vous pouvez vous arrêter et recharger en cas de besoin.

Cette disponibilité peut varier beaucoup selon les marques. Bien que Tesla dispose de superchargeurs dans de nombreuses régions, trouver une station de recharge avec prise Chademo pour votre Nissan Leaf est presque impossible.

Ci-dessous, vous voyez tous les emplacements de chargeurs pour [Electrify America](https://www.electrifyamerica.com/locate-charger/), certaines zones très denses, alors que, dans d'autres zones, il y a de nombreux miles/km entre les chargeurs.

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/chargermap_st.jpg" width="2392" height="1160" title="Carte de localisation de recharge d'Electrify America 10 juin 2023" >}}

## Performances de charge rapide CC

La vitesse de recharge peut également varier considérablement entre les modèles de véhicules électriques, les bornes de recharge et même entre les sessions de recharge.

Il existe deux raisons typiques pour lesquelles la vitesse de recharge varie entre deux sessions de recharge pour le même véhicule électrique sur le même chargeur.

### La température de la batterie

La température de la batterie est le facteur le plus critique dans la vitesse de chargement de la batterie. La température optimale de la batterie est généralement de 25 à 35 degrés. Si la température est trop basse, le BMS réduira la vitesse de charge pour protéger la batterie. Cela pourrait vous ramener à seulement 25 % du taux optimal.

De nombreux véhicules électriques ont désormais ajouté un chauffage de batterie qui peut être activé lors de la navigation vers un chargeur via le système de navigation ou en le déclenchant manuellement.

### La courbe de charge

La courbe de charge décrit la vitesse à laquelle un véhicule électrique peut se recharger pour un état de charge donné. Généralement, cette courbe de charge n'est pas plate, ce qui signifie qu'à un état de charge de 10 %, la vitesse de charge est différente de celle à 80 %.

L’apparence de la courbe de charge varie considérablement d’un modèle à l’autre. Certains peuvent avoir une courbe plate jusqu'à 80 %, tandis que d'autres ont une plongée profonde à partir d'un état de charge faible. La vitesse maximale varie de moins de 100 kW à plus de 300 kW selon les modèles.

Ci-dessous, vous voyez la courbe de charge pour Lucid Air Dream Edition Performance. La courbe de charge a été profondément approfondie dès le début. Charger 30 % de 50 à 80 % prend 20 minutes, tandis que charger 30 % de 5 à 35 % ne prend que 9 minutes.

<img src="/images/models/lucid/air/air_dream_edition_performance/chargingcurve.svg" class="img-fluid">


Si vous devez garder les arrêts de recharge aussi courts que possible, identifiez la zone de recharge optimale pour votre véhicule électrique. EVKX.net vous y aide. Nous disposons d'informations détaillées sur les performances de charge pour chaque modèle dans notre [base de données EV](/evsearch/), avec des courbes de charge et le calcul des arrêts de charge optimaux pour les différents modèles.

## Planification d'itinéraire avec recharge

La plupart des véhicules électriques offrent une fonctionnalité de planification d’itinéraire, y compris des arrêts de recharge DC Fast pour atteindre la destination. Cette planification d'itinéraire fait partie du [Système de navigation](../../infotainment/navigation/).

En général, vous verrez le niveau de charge prévu à l'arrivée pour les bornes de recharge et le montant que vous devez facturer pour atteindre la prochaine borne de recharge.

## Brancher et charger

L’un des principaux défis auxquels sont confrontés les conducteurs de véhicules électriques est la commodité et la sécurité de la recharge de leur véhicule. Actuellement, la plupart des conducteurs de véhicules électriques ont besoin d’une carte RFID, d’une application ou d’un mode de paiement sans contact pour lancer une session de recharge sur une borne de recharge publique. Cela peut s’avérer fastidieux et prendre du temps, surtout si plusieurs réseaux de recharge disposent de systèmes de paiement et de méthodes d’authentification différents.

Cependant, une nouvelle technologie promet de rendre la recharge des véhicules électriques beaucoup plus accessible et plus sûre : brancher et charger. Plug and Charge est une fonctionnalité de la norme internationale ISO 15118, qui définit le protocole de communication entre les véhicules électriques et les bornes de recharge. Avec Plug and Charge, les conducteurs de véhicules électriques peuvent brancher leur véhicule sur une station de recharge compatible, et la session de recharge démarrera automatiquement sans aucune étape ni appareil supplémentaire.

### Comment fonctionne le branchement et la recharge ?

Plug and Charge utilise des certificats cryptographiques pour identifier et authentifier le véhicule électrique et les bornes de recharge. Ces certificats sont délivrés par des autorités de confiance et stockés dans des modules matériels sécurisés à l'intérieur du VE et de la borne de recharge. Lorsqu’un véhicule électrique est branché sur une station de recharge prenant en charge le plug and charge, ils échangent leurs certificats et établissent une liaison de communication sécurisée. La borne de recharge vérifie ensuite l’identité du VE et autorise la session de recharge sur la base du contrat du VE avec son fournisseur de services de mobilité (MSP). Le MSP est l'entité qui permet au conducteur de VE d'accéder aux services de recharge et gère la facturation et le paiement.

Le processus de branchement et de charge garantit la confidentialité, l’intégrité des données et l’authenticité de la communication entre le VE et la borne de recharge. Il permet également une tarification dynamique, un équilibrage de charge, une intégration de réseau intelligent et des mises à jour à distance du micrologiciel. Plug and Charge peut être utilisé pour le chargement AC et DC et le chargement sans fil.

[Hubject](https://www.hubject.com/) est la société qui gère les certificats basés sur le protoll.

## Réseaux de recharge les plus courants par emplacement

### ETATS-UNIS

Il existe plusieurs réseaux de recharge pour les véhicules électriques aux États-Unis. Selon le ministère américain de l'Énergie, Tesla possède plus de **1 600 stations Supercharger** aux États-Unis, avec plus de **17 000 ports de recharge rapide**. Electrify America est le prochain sur la liste, avec environ **800 stations**.

Voici quelques-uns des plus grands réseaux de recharge de véhicules électriques aux États-Unis :

- [Electrify America](https://www.electrifyamerica.com/) : Le plus grand réseau de recharge rapide CC pour la majorité des modèles de véhicules électriques. Ils sont ouverts à tous les véhicules électriques dotés d'une connexion de recharge CCS (la norme de l'industrie) et, pour le moment, aux quelques véhicules qui utilisent encore CHAdeMO comme la Nissan Leaf.

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/teslasupercharger_1_st.jpg" width="3000" height="1948" title="Emplacement du Tesla Supercharger" >}}

- [Tesla Superchargers](https://www.tesla.com/findus/list/superchargers/United+States) : le réseau Supercharger de Tesla est le plus grand du pays, avec moins de distance entre les stations par rapport à Electrify America. La plupart des Superchargeurs nécessitent un port NACS sur le véhicule électrique, mais ils construisent des chargeurs avec Magic Dock qui prend en charge les véhicules électriques CCS1. Voir les chargeurs [ici](https://www.tesla.com/findus?v=2&bounds=60.61822541172234%2C-37.567384000000004%2C18.24809425121173%2C-150.067384&zoom=5&filters=party)

- [EVgo](https://www.evgo.com/) : la recharge rapide DC ne se limite pas aux trajets routiers. EVgo compte plus de **800 emplacements de recharge rapide** dans 34 États et plus de 65 zones métropolitaines.

- [ChargePoint](https://driver.chargepoint.com/mapCenter/37.26709110057841/-121.95591497824141/18) : ChargePoint compte plus de **115 000 points de recharge** en Amérique du Nord et en Europe¹.
### Europe

Il existe plusieurs réseaux de recharge pour les véhicules électriques en Europe. Voici quelques-uns des plus grands réseaux de recharge de véhicules électriques en Europe :

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/ionity_1_st.jpg" width="3000" height="2000" title="Emplacement de chargement Ionity" >}}

- Ionity : Un réseau de bornes de recharge haute puissance pour véhicules électriques qui permet des déplacements longue distance à travers l'Europe. Elle a été fondée en tant que coentreprise par le groupe BMW, le groupe Mercedes-Benz, Ford Motor Company et le groupe Volkswagen².

- Plugsurfing : un réseau européen que vous pouvez utiliser pour recharger un véhicule électrique en Europe. Avec sa clé ou sa carte unique – qui coûte 9,95 € – et son application gratuite pour smartphone, vous pouvez utiliser plus de 200 000 chargeurs, dont ceux de différents réseaux comme Allego, EnBW, Eon, Innogy, IONITY et Vattenfall.

- Maingau : Grâce à son application pour smartphone EinfachStromLaden, à sa puce ou à sa carte de recharge, vous pouvez recharger un VE en Allemagne, en Autriche ou en Suisse sur 50 000 points de recharge avec Maingau.

<div class="mt-3 mb-3">
     <a href="../homechargement/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i> Recharge à domicile</strong></a>
     <a href="../batteryswap/" class="text-decoration-none text-black float-end"><strong>Échange de batterie <i class="bi-arrow-right"></i></strong></a>
</div>