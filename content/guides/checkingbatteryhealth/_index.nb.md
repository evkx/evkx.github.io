---
title: Slik sjekker du batterihelsen
linktitle: Sjekk batteritilstanden
description: Med enkel matematikk er det mulig å verifisere batteriets generelle status. Denne veiledningen forklarer hvordan.
weight: 1
---
<!-- markdownlint-disable MD033 -->
<div class="alert alert-warning" role="alert">
   Denne prosedyren er <b>bare</b> mulig å bruke på elbiler som
   <ul>
   <li>Viser et fullstendig reiseforbruk og ikke bare forbruket for siste distanse. Eksempel: mange kinesiske elbiler viser kun forbruk siste 50 km</li>
   <li>Har ikke skjult tilgjengelig buffer, som Toyota bZ4X der den skjuler mye kapasitet mellom 0-1 %</li>
   <li>Justerer ikke bufferen når den degraderes (de fleste gjør det ikke)</li>
   </ul>
</div>

Når batteriet degraderes, reduseres den tilgjengelige batterikapasiteten. Denne reduksjonen reduserer rekkevidden til elbilen.

Hvis du vet hvor stor nettokapasitet bilen din skal ha når den er ny, kan du beregne dagens helse.

Denne prosedyren er hvordan du sjekker batteriet

1. Lad opp til 100 %
2. Ta en kjøretur og bruk minst 90 % av batteriet. Prøv å holde forbruket lavt.
3. Legg merke til forbruket og kjøreavstanden
4. Legg merke til slutt-SOC (ladetilstand) (prosent igjen på batteriet)
5. Beregn faktisk kapasitet

For de følgende eksemplene antar vi at du har en e-tron 55 med 86,5 kWh netto kapasitet fra fabrikk.

## Beregning i miles

### Miles eksempel 1

Du kjører 169 mil med et forbruk på 2,6 mil/kWh. Du startet turen med 100 % batteri og endte opp med 21 %.

Først beregner du den totale energien som brukes: 169/2,6 = <b>65kWh</b>.<br>
Hvis du hadde 21 % igjen, har du brukt <b>79 %</b> (100 %-21 %)<br>
Den nåværende kapasiteten er 79 % = 65 kWh.<br>
Du kan beregne full kapasitet (100%):<br>
(65/79)*100 = <b>82,27 kWh</b><br>
82,27 er den faktiske tilgjengelige kapasiteten til batteriet ditt.
82,27/86,5 = <b>95,1 %</b>
Dette betyr en reduksjon på nesten 5 % fra den opprinnelige tilgjengelige kapasiteten.

## Beregning i kilometer

### Km eksempel 1

Hvis du kjører 308 kilometer med et forbruk på 25kWh/100km<br>
Du startet med 100 % og endte opp med 5 %<br>

Først beregner du den totale energien som brukes<br>
(308 * 25)/100 = <b>77kWh</b> totalt på turen.<br>
Hvis du har 5 % igjen, har du brukt <b>95 %</b> på reisen (100-5)<br>

95 % = 77 kWh batteri.<br>

Full kapasitet (100%) kan da beregnes:<br>

(77/95)*100 = <b>81,05 kWh</b>
81.05 er den faktiske kapasiteten til batteriet.<br>
81,05/86,5 = <b>93,7 %</b>. Dette betyr en reduksjon på nesten <b>6.5 %</b> fra den opprinnelige kapasiteten.

## Hva påvirker kapasiteten

Bare en måling med avvik fra kapasiteten betyr ikke nødvendigvis at batteriet ditt har degradert.

Hvis du har høyt forbruk vil det være noe tap på grunn av indre motstand.

Hvis batteriet var ubalansert, vil det også påvirke batterikapasiteten.

For folk som elsker å holde styr på dette, anbefaler vi å spore dette fra begynnelsen av eierskapet. På denne måten vil du kjenne bilen din mer.

Følgende eksempel viser statistikken fra en e-tron 55 2020v1 med 83,6 kWh kapasitet fra den var ny.

{{< sitefiguresized thumb="guides/checkingbatteryhealth/graph1_st.jpg" width="2463" height="1366" title="Sporing av faktisk batterikapasitet sammenlignet med totalt forbruk" >}}

{{< sitefiguresized thumb="guides/checkingbatteryhealth/graph2_st.jpg" width="2019" height="1364" title="Sporing av faktisk batterikapasitet sammenlignet med forbruk kWh/100 km" >}}

I videoen under ser du Bjørn Nyland gjennomføre en slik test på en Volkswagen ID4 med å følge fremgangsmåten beskrevet over. Resultat 23% degradering.

{{< youtube OqMOsyyMD2g >}}