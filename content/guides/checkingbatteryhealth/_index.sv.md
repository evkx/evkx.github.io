---
title: Hur man kontrollerar batteriets hälsa
linktitle: Kontrollera batteriets skick
description: Med enkel matematik är det möjligt att verifiera batteriets allmänna status. Den här guiden förklarar hur.
weight: 1
---
<!-- markdownlint-disable MD033 -->
<div class="alert alert-warning" role="alert">
  Denna procedur är <b>endast</b> möjlig att använda på elbilar som
    <ul>
    <li>Visar en fullständig reseförbrukning och inte bara förbrukningen för den senaste sträckan. Exempel: många kinesiska elbilar visar bara förbrukningen de senaste 50 km</li>
    <li>Har ingen dold tillgänglig buffert, som Toyota bZ4X där den döljer mycket kapacitet mellan 0-1 %</li>
    <li>Justerar inte bufferten när den degraderas (de flesta gör det inte)</li>
    </ul>
</div>
När batteriet försämras minskar den tillgängliga batterikapaciteten. Denna minskning minskar elbilens räckvidd.

Om du vet hur stor nettokapacitet din bil ska ha när den är ny kan du räkna ut aktuell hälsa.

Denna procedur är hur du kontrollerar batteriet

1. Ladda upp till 100 %
2. Ta en biltur och använd minst 90 % av batteriet. Försök att hålla konsumtionen låg.
3. Notera förbrukning och körsträcka
4. Notera slutlig SOC (laddningstillstånd) (procent kvar på batteriet)
5. Beräkna faktisk kapacitet

För följande exempel antar vi att du har en e-tron 55 med 86,5 kWh nettokapacitet från fabrik.

## Beräkning i miles

### Miles exempel 1

Du kör 169 mil med en förbrukning på 2,6 mil/kWh. Du började resan med 100% batteri och slutade på 21%.

Beräkna först den totala energianvändningen: 169/2,6 = <b>65kWh</b>.<br>
Om du hade 21 % kvar har du använt <b>79 %</b> (100 %-21 %)<br>
Den nuvarande kapaciteten är 79 % = 65 kWh.<br>
Du kan beräkna full kapacitet (100%):<br>
(65/79)*100 = <b>82,27 kWh</b><br>
82,27 är den faktiska användbara kapaciteten för ditt batteri.
82,27/86,5 = <b>95,1 %</b>
Detta innebär en minskning med nästan 5 % från den ursprungliga användbara kapaciteten.

## Beräkning i kilometer

### Km exempel 1

Om du kör 308 kilometer med en förbrukning på 25kWh/100km<br>
Du började med 100 % och slutade med 5 %<br>

Beräkna först den totala energianvändningen<br>
(308 * 25)/100 = <b>77kWh</b> totalt på resan.<br>
Om du har 5 % kvar har du spenderat <b>95 %</b> på resan (100-95)<br>

95 % = 77 kWh batteri.<br>

Full kapacitet (100%) kan då beräknas:<br>

(77/95)*100 = <b>81,05 kWh</b>
81.05 kWh är batteriets faktiska kapacitet.<br>
81,05/86,5 = <b>93,7 %</b>. Detta innebär en minskning med nästan <b>6.5 %</b> från den ursprungliga kapaciteten.

## Vad påverkar kapaciteten

Bara en mätning med en avvikelse från kapaciteten betyder inte nödvändigtvis att ditt batteri har försämrats.

Om du har hög förbrukning blir det viss förlust på grund av inre motstånd.

Om batteriet var obalanserat kommer det också att påverka batterikapaciteten.

För personer som älskar att hålla reda på detta rekommenderar vi att spåra detta från början av ägandet. På så sätt kommer du att känna din bil mer.

Följande exempel visar statistik från en e-tron 55 2020v1 med 83,6 kWh kapacitet när den var ny.

{{< sitefiguresized thumb="guides/checkingbatteryhealth/graph1_st.jpg" width="2463" height="1366" title="Spåra faktisk batterikapacitet jämfört med total förbrukning" >}}

{{< sitefiguresized thumb="guides/checkingbatteryhealth/graph2_st.jpg" width="2019" height="1364" title="Spåra faktisk batterikapacitet jämfört med förbrukning kWh/100 km" >}}
