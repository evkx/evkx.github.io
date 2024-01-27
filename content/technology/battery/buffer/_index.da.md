---
title: Buffer
linktitle: Buffer
description: For at beskytte batteriet implementerer producenter buffere på batterier.
weight: 10
---
<!-- markdownlint-disable MD033 -->
En batteribuffer er en funktion i elbiler, som betyder, at de har en forskel mellem brutto- og nettobatterikapacitet. Bruttokapaciteten er den samlede energi, som batteripakken kan lagre. I modsætning hertil er nettokapaciteten den brugbare energi, batteripakken kan levere til køretøjet. Forskellen mellem brutto- og nettokapaciteten kaldes bufferen.

Batteristyringssystemet (BMS) styrer bufferen.

Bufferen har to hovedfunktioner: at beskytte batteripakken mod beskadigelse og at optimere ydeevnen. Bufferen beskytter batteripakken mod beskadigelse ved at forhindre den i at blive overopladet eller helt drænet, hvilket kan føre til irreversibel nedbrydning.

Bufferen optimerer batteripakkens ydeevne ved at lade den fungere inden for sit optimale SOC-område, hvor den kan levere højere effekt og effektivitet.

## Hvordan fungerer en batteribuffer?

En batteribuffer begrænser de maksimale og minimale SOC-niveauer, som batteripakken kan nå. Det maksimale SOC-niveau kaldes den øverste buffer, mens det mindste SOC-niveau kaldes den nederste buffer. Bundbufferen kaldes også nogle gange en "murstensbuffer", fordi den forhindrer batteripakken i at nå 0% SOC, hvilket kan beskadige eller "mursten" cellerne.

Diagrammet nedenfor viser, hvordan en bund- og topbuffer forhindrer batteriet i at aflades under den nederste buffergrænse eller oplades over den øverste buffer.

<a href="chargecurve.drawio.svg">
      <img src="chargecurve.drawio.svg" class="img-fluid">
</a>

Bufferstørrelsen kan afhænge af typen og kemien af ​​de celler, der bruges i batteripakken. For eksempel kan nogle celler have en højere tolerance for overopladning eller overafladning end andre, og dermed kræve mindre buffere. Nogle celler kan også have forskellige optimale SOC-intervaller end andre og kræver derfor større buffere.

BMS regulerer opladning og afladning af batteripakken i overensstemmelse hermed for at holde den inden for de godkendte grænser.

Nogle gange vælger producenten at ændre bufferstørrelsen med softwareopdateringer. Denne ændring sker normalt, når producenten ved mere om, hvordan et nyt batteri yder med hensyn til nedbrydning.

## Skjult tilgængelig buffer

Nogle producenter skjuler noget tilgængelig batterikapacitet i en skjult tilgængelig buffer. Hvad betyder det?

Det betyder normalt, at SOC-skalaen ikke er lineær. Det betyder, at 0-1 % er større end alle andre procenter. I mange tilfælde kan procentdelen fra 0-1 % være 5-10 gange størrelsen af ​​de øvrige procenttrin. Den ekstra energi kaldes ofte <b>Nulbuffer</b>.

Diagrammet viser, hvordan 0-1 % er meget større for den viste SOC end de andre procenter.

<a href="hiddenbuffer.drawio.svg">
      <img src="hiddenbuffer.drawio.svg" class="img-fluid">
</a>

Denne strategi gør det mindre sandsynligt, at elbilen løber tør for batteri. Problemet med denne fremgangsmåde er, at man normalt oplader bilen, når der er 5-10% tilbage for at sikre, at man ikke løber tør, men når der er skjult kapacitet, ender chaufføren med at lade op allerede, når der er 15-20% batteri tilbage. . Denne tilgang får ejeren til at opleve en lavere elektrisk rækkevidde end i virkeligheden.

EVKX.net mener, at dette er dårlig praksis fra producenternes side.

<b>Bjørn Nyland</b> har testet flere elbiler for at se, hvor meget ekstra energi producenten har gemt mellem 0 og 1 %. Mere er værre, da det bedrager ejeren.

<img src="https://media.evkx.net/multimedia/technology/battery/tbzeromile_1_st.jpg" class="img-fluid">

   Nogle test med resultater:
<table class="table table-striped">
<hoved>
     <tr>
         <td>
         Model
         </td>
         <td>
         Nul buffer
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
         <td>5,1 kWh</td>
     </tr>
     <tr>
         <td><a href="https://www.youtube.com/watch?v=dAM1CIlJ1xQ" target="_blank">Toyota bZ4X</a></td>
         <td>5,1 kWh</td>
     </tr>
     <tr>
         <td><a href="https://www.youtube.com/watch?v=y675YCgSnlc" target="_blank">Tesla Model Y-ydelse</a></td>
         <td>4,1 kWh</td>
     </tr>
</tbody>
</table>

Se Bjørns testresultater for <a href="https://docs.google.com/spreadsheets/d/1V6ucyFGKWuSQzvI8lMzvvWJHrBS82echMVJH37kwgjE/edit#gid=52159941" target="_blank">flere data</a> eller alle hans <a href="https://www.youtube.com/playlist?list=PLqKx2qnB8Xv6ddxPVkiqQZMNyLtYjqQkq" target="_blank">Zero Miles Tester</a>

<div class="mt-3 mb-3">
     <a href="../charging/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i> Batteriforringelse</strong></a>
     <a href="../manufactors/" class="text-decoration-none text-black float-end"><strong>Producenter <i class="bi-arrow-right"></i></strong ></a>
</div>