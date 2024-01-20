---
title: Buffert
linktitle: Buffert
description: För att skydda batteriet implementerar tillverkare buffertar på batterier.
weight: 10
---
<!-- markdownlint-disable MD033 -->

En batteribuffert är en funktion i vissa elbilar som gör att de har en skillnad mellan brutto- och nettobatterikapacitet. Bruttokapaciteten är den totala energi som batteripaketet kan lagra. Däremot är nettokapaciteten den användbara energi som batteripaketet kan ge till fordonet. Skillnaden mellan brutto- och nettokapaciteten kallas buffert.

Batterihanteringssystemet (BMS) styr bufferten.

Bufferten har två huvudfunktioner: att skydda batteripaketet från skador och att optimera prestanda. Bufferten skyddar batteripaketet från skador genom att förhindra att det över- eller överladdas, vilket kan leda till irreversibel nedbrytning eller till och med termisk rusning. Bufferten optimerar batteripaketets prestanda genom att låta det arbeta inom sitt optimala SOC-område, där det kan leverera högre kraft och effektivitet.

## Hur fungerar en batteribuffert?

En batteribuffert begränsar de högsta och lägsta SOC-nivåerna som batteripaketet kan nå. Den maximala SOC-nivån kallas den övre bufferten, medan den lägsta SOC-nivån kallas den nedre bufferten. Bottenbufferten kallas ibland även en tegelbuffert eftersom den förhindrar att batteripaketet når 0 % SOC, vilket kan skada eller mura igen cellerna.

Diagrammet nedan visar hur en tegel- och toppbuffert kommer att förhindra att batteriet laddas ur under tegelbuffertgränsen och laddas över toppbufferten.

<a href="chargecurve.drawio.svg">
     <img src="chargecurve.drawio.svg" class="img-fluid">
</a>

Buffertstorleken kan bero på typen och kemin hos de celler som används i batteripaketet. Till exempel kan vissa celler ha en högre tolerans för överladdning eller överurladdning än andra, vilket kräver mindre buffertar. Vissa celler kan också ha andra optimala SOC-intervall än andra och kräver därför större buffertar.

BMS reglerar laddning och urladdning av batteripaketet i enlighet med detta för att hålla det inom de godkända gränserna.

Ibland väljer tillverkaren att ändra buffertstorleken med programuppdateringar. Denna förändring sker vanligtvis när tillverkaren vet mer om hur ett nytt batteri presterar när det gäller nedbrytning.

## Dold användbar buffert

Vissa tillverkare döljer viss tillgänglig batterikapacitet i en dold användbar buffert. Vad betyder det?

Det betyder vanligtvis att SOC-skalan inte är linjär. Det betyder att 0-1 % är större än alla andra procentsatser. I många fall kan andelen från 0-1 % vara 5-10 gånger så stor som den andra procentsatsen. Den extra energin kallas ofta <b>Zero Buffer</b>.

Diagrammet visar hur 0-1 % är mycket större för den visade SOC än de andra procenttalen.

<a href="hiddenbuffer.drawio.svg">
      <img src="hiddenbuffer.drawio.svg" class="img-fluid">
</a>

Denna strategi gör det mindre sannolikt att elbilen tar slut på batteri. Problemet med detta tillvägagångssätt är att du vanligtvis laddar bilen när det är 5-10% kvar för att säkerställa att du inte tar slut, men när det finns dold kapacitet slutar föraren med att ladda redan när det är 15-20% batteri kvar . Detta tillvägagångssätt gör att ägaren upplever en lägre elektrisk räckvidd än i verkligheten.

EVKX.net anser att detta är dålig praxis från tillverkarnas sida.

<b>Bjørn Nyland</b> har testat flera elbilar för att se hur mycket extra energi tillverkaren har gömt mellan 0 och 1%. Mer är värre eftersom det lurar ägaren.

<img src="https://media.evkx.net/multimedia/technology/battery/tbzeromile_1_st.jpg" class="img-fluid">

  Noen tester med resultater:
<table class="table table-striped">
<thead>
    <tr>
        <td>
        Model
        </td>
        <td>
        Zero Buffer
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
        <td>5.1kWh</td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=dAM1CIlJ1xQ" target="_blank">Toyota bZ4X</a></td>
        <td>5.1kWh</td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=y675YCgSnlc" target="_blank">Tesla Model Y Performance</a></td>
        <td>4.1kWh</td>
    </tr>
</tbody>
</table>

Se Bjørns testresultat för <a href="https://docs.google.com/spreadsheets/d/1V6ucyFGKWuSQzvI8lMzvvWJHrBS82echMVJH37kwgjE/edit#gid=52159941" target="_blank">mer data</a> eller alla hans <a> = "_blank">mer data</a> ="https://www.youtube.com/playlist?list=PLqKx2qnB8Xv6ddxPVkiqQZMNyLtYjqQkq" target="_blank">Zero Miles-tester</a>


<div class="mt-3 mb-3">
    <a href="../charging/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i>  Batteriförsämring</strong></a>
    <a href="../manufactors/" class="text-decoration-none text-black float-end"><strong>Tillverkare <i class="bi-arrow-right"></i></strong></a>
</div>