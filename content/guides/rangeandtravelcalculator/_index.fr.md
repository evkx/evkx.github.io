---
title: Calculatrice de voyage EV (bêta)
linktitle: Calculatrice de voyage EV (bêta)
description: Planifiez et comparez des trajets en véhicule électrique avec des estimations réalistes basées sur la physique. Choisissez un mode (Autonomie, Distance ou Temps), réglez la vitesse et la météo, et voyez en un coup d’œil comment les modèles se comparent — temps total, arrêts de charge et énergie — dans une seule vue.
weight: 3
xsthumb: guides/evsearch/search_1_xst.jpg
---
<!-- markdownlint-disable MD033 -->

## Ce que fait l’outil

* **Mode Autonomie :** distance possible sur une fenêtre de charge (p. ex. 100→0 %, 100→10 %, 80→10 %) à la vitesse et dans les conditions choisies.
* **Mode Distance :** temps, énergie et **arrêts de charge** nécessaires pour couvrir une distance donnée.
* **Mode Temps :** distance atteignable dans un budget de temps (conduite + charge).
* **Unités :** bascule entre système métrique et impérial.
* **Options :** SoH (santé de batterie), facteur de pertes thermiques, niveau de finition (*trim* : effets roues/pneus) et **remorquage** (préréglages).

## Comment ça marche (vue d’ensemble)

Nous combinons une physique simple du véhicule avec une calibration sur des données réelles :

* **Traînée aérodynamique** (Cd × surface frontale) : croît avec la vitesse² et la **densité de l’air** (température).
* **Résistance au roulement** (pneus + masse) : modulée par l’**état de la chaussée** (sec → mouillé/neige) et la masse du véhicule.
* **Auxiliaires & climatisation :** une charge de fond à laquelle s’ajoute votre réglage **HVAC**.
* **Calibration :** ajustée sur des points d’ancrage WLTP et autoroute (p. ex. 90/120 km/h), donc résultats au niveau **batterie** (les pertes du groupe motopropulseur/onduleur sont implicitement incluses).
* **Batterie & finition :** **SoH**, **pertes thermiques** (surcoûts par grand froid) et **trim** (roues/pneus).
* **Remorquage :** ajoute la masse de la remorque et une pénalité **aéro** partielle selon son aire frontale et la part exposée hors de l’ombre aérodynamique du véhicule.

### Surcoût et pertes de charge (hypothèses)

* **Surcharge par arrêt : +5 minutes.**  
  Nous ajoutons 5 minutes fixes en plus du temps de charge « pur » pour couvrir la sortie de voie, la recherche d’une borne, le branchement et le démarrage de séance, puis le retour sur route et la remise à vitesse.
* **Pertes de charge : 5 %.**  
  Nous supposons ~5 % de pertes pendant la charge. L’**« énergie ajoutée »** affichée dans les résultats est celle qui atteint la **batterie** ; l’écran du chargeur (et ce que vous payez) est généralement d’environ **5 % plus élevé**.  
  *Exemple :* si le tableau indique **40 kWh** ajoutés, attendez-vous à être facturé autour de **42 kWh** au chargeur.

La calculatrice estime ensuite les besoins et durées de charge pour atteindre votre objectif (modes Distance/Temps) et liste chaque arrêt avec le SoC entrée→sortie et les kWh ajoutés.

## Ce que vous verrez

* Véhicule
* **Autonomie / Distance / Énergie totale** (selon le mode)
* **Consommation** (Wh/km ou mi/kWh)
* **Temps total**
* **Arrêts de charge** (nombre, durées, SoC entrée→sortie, kWh ajoutés)
* Dépliez les lignes pour voir le détail par arrêt

## Notes importantes & limites

Il s’agit d’une **estimation**, pas d’une garantie. Les résultats réels varient selon :

* **La route :** dénivelés/pentes, trafic, limitations, travaux
* **La météo :** vent (de face/latéral), précipitations, température de la chaussée/verglas
* **Le véhicule :** type/pression des pneus, chargement, coffres/porte-vélos, style de conduite, pré-conditionnement
* **La charge réelle :** disponibilité, files d’attente, puissance partagée, état des bornes, paiement/apps
* **La variabilité des données :** spécifications constructeur vs. courbe de votre véhicule, gestion thermique de la batterie

Planifiez avec une marge et confirmez les longs trajets avec un planificateur d’itinéraire dédié. **Aucune garantie n’est fournie ; utilisation à vos risques.**

## Conseils pour de meilleures estimations

* Choisissez une **vitesse de croisière réaliste** pour votre trajet et la réglementation.
* Adaptez **température** et **état de chaussée** aux prévisions.
* Renseignez votre **SoH** si la batterie est dégradée ; utilisez le **facteur de pertes thermiques** par grand froid.
* Sélectionnez le **trim** correspondant à votre véhicule réel.
* En remorquage, choisissez le **type de remorque** le plus proche.

---

*Version du modèle :* v1.0 · *Dernière mise à jour :* 2025-09-20
