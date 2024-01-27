---
title: Sådan tjekker du batteriets tilstand
linktitle: Sådan tjekker du batteriets tilstand description:Med simpel matematik er det muligt at verificere batteriets generelle status. Denne guide forklarer hvordan.
weight: 1
---
<!-- markdownlint-disable MD033 -->
<div class="alert alert-warning" role="alert">
    Denne procedure er <b>kun</b> mulig at bruge på elbiler, som
    <ul>
    <li>Viser et komplet forbrug for en køretur og ikke kun forbruget for den sidste distance. Eksempel: mange kinesiske elbiler viser kun forbrug for de sidste 50 km</li>
    <li>Har ikke skjult tilgængelig buffer, som Toyota bZ4X, hvor den skjuler meget kapacitet mellem 0-1 %</li>
    <li>Justerer ikke buffer, når den er forringet (de fleste gør det ikke)</li>
    </ul>
</div>

Efterhånden som batteriet nedbrydes, reduceres den tilgængelige batterikapacitet. Denne reduktion reducerer elbilens rækkevidde.

Hvis du ved, hvor meget nettokapacitet din bil skal have, når den er ny, kan du beregne det aktuelle helbred.

Denne procedure er, hvordan man kontrollerer batteriet

1. Oplad op til 100 %
2. Tag en køretur og brug mindst 90 % af batteriet. Prøv at holde forbruget lavt.
3. Bemærk forbrug og køreafstand
4. Bemærk endelig SOC (ladetilstand) (procent tilbage på batteriet)
5. Beregn den faktiske kapacitet

For de følgende eksempler antager vi, at du har en e-tron 55 med 86,5 kWh nettokapacitet fra fabrikken.

## Beregning i miles

### Miles eksempel 1

Du kører 169 miles med et forbrug på 2,6 miles/kWh. Du startede turen med 100 % batteri og endte med 21 %.

Beregn først den samlede energi, der bruges: 169/2,6 = <b>65 kWh</b>.<br>
Hvis du havde 21 % tilbage, har du brugt <b>79 %</b> (100 %-21 %)<br>
Den nuværende kapacitet er 79 % = 65 kWh.<br>
Du kan beregne fuld kapacitet (100%):<br>
(65/79)*100 = <b>82,27 kWh</b><br>
82,27 er den faktiske tilgængelige kapacitet på dit batteri.
82,27/86,5 = <b>95,1 %</b>
Det betyder en reduktion på næsten 5 % i forhold til den oprindelige tilgængelige kapacitet.

## Beregning i kilometer

### Km eksempel 1

Hvis du kører 308 kilometer med et forbrug på 25kWh/100km<br>
Du startede med 100 % og endte med 5 %<br>

Beregn først den samlede energi, der bruges<br>
(308 * 25)/100 = <b>77kWh</b> i alt på turen.<br>
Hvis du har 5 % tilbage, har du brugt <b>95 %</b> på rejsen (100-5)<br>

95 % = 77 kWh batteri.<br>

Fuld kapacitet (100%) kan derefter beregnes:<br>

(77/95)*100 = <b>81,05 kWh</b>
81,05 er batteriets faktiske kapacitet.<br>
81,05/86,5 = <b>93,7 %</b>. Det betyder en reduktion på næsten <b>6,5 %</b> fra den oprindelige kapacitet.

## Hvad påvirker kapaciteten?

Bare en måling med en afvigelse fra kapaciteten betyder ikke nødvendigvis, at dit batteri er nedbrudt.

Hvis du har et højt forbrug, vil der være et vist tab på grund af intern modstand.

Hvis batteriet var ubalanceret, vil det også påvirke batterikapaciteten.

For folk, der elsker at holde styr på dette, anbefaler vi at spore dette fra begyndelsen af ​​ejerskabet. På denne måde vil du kende din bil mere.

Følgende eksempel viser statistikken fra en e-tron 55 2020v1 med en kapacitet på 83,6 kWh, da den var ny.

{{< sitefiguresized thumb="guides/checkingbatteryhealth/graph1_st.jpg" width="2463" height="1366" title="Statistik over faktisk batterikapacitet sammenlignet med det samlede forbrug" >}}

{{< sitefiguresized thumb="guides/checkingbatteryhealth/graph2_st.jpg" width="2019" height="1364" title="Statistik over faktisk batterikapacitet sammenlignet med forbrug kWh/100 km" >}}

I videoen herunder ser du Bjørn Nyland udføre sådan en test på en Volkswagen ID4 ved at følge proceduren beskrevet ovenfor. Resultat 23% nedbrydning.

{{< youtube OqMOsyyMD2g >}}