---
title: WLTP rækkevidde test
linktitle: WLTP
description: Worldwide Harmonized Light Vehicles (WLTP) er en global standard til bestemmelse af rækkevidden af ​​elektriske køretøjer.
weight: 2
---
<!-- markdownlint-disable MD033 -->
For biler solgt i Europa efter september 2017 er det et krav at bruge denne standard. Denne standard erstattede NEDC.

## Hvordan testes det?

Testproceduren er [beskrevet i detaljer](https://unece.org/transport/documents/2021/02/standards/un-regulation-no-154-worldwide-harmonized-light-vehicles-test) af FN.

Kort sagt er den nye WLTP-procedure afhængig af de nye kørecyklusser (WLTC – Worldwide harmonized Light-duty vehicles Test Cycles) til at måle rækkevidde.

WLTP-cyklussen har fire underafsnit, hver med en forskellig maksimal hastighed. Den samlede testcyklustid er 30 minutter (1800 sekunder).

<div class="table-responsive">
     <table class="table table-striped">
         <hoved>
             <tr>
             <th>#
             </th>
             <th>By
             </th>
             <th>Forstad
             </th>
             <th>Landdistrikt
             </th>
             <th>Motorvej
             </th>
             <th>I alt
             </th>
             </tr>
         </thead>
         <tbody>
             <tr>
                 <td>Varighed, sekunder
                 </td>
                 <td>589
                 </td>
                 <td>483
                 </td>
                 <td>455
                 </td>
                 <td>323
                 </td>
                 <td>1800
                 </td>
             </tr>
             <tr>
                 <td>Stop, sekunder
                 </td>
                 <td>150
                 </td>
                 <td>49
                 </td>
                 <td>31
                 </td>
                 <td>8
                 </td>
                 <td>235
                 </td>
             </tr>
             <tr>
                 <td>Afstand i meter
                 </td>
                 <td>3095
                 </td>
                 <td>4756
                 </td>
                 <td>7162
                 </td>
                 <td>8254
                 </td>
                 <td>23266
                 </td>
             </tr>
                 <tr>
                 <td>Procent stop
                 </td>
                 <td>26,5 %
                 </td>
                 <td>11,1 %
                 </td>
                 <td>6,8 %
                 </td>
                 <td>2,2 %
                 </td>
                 <td>13,5 %
                 </td>
             </tr>
                 <tr>
                 <td>Maksimal hastighed
                 </td>
                 <td>56,5
                 </td>
                 <td>76,6
                 </td>
                 <td> 97,4
                 </td>
                 <td>131,3
                 </td>
                 <td>
                 </td>
             </tr>
                 <tr>
                 <td>Gennemsnitshastighed uden stop
                 </td>
                 <td>25.3
                 </td>
                 <td>44,5
                 </td>
                 <td>60,7
                 </td>
                 <td>94
                 </td>
                 <td>53,5
                 </td>
             </tr>
                 <tr>
                 <td>Gns. hastighed w stop
                 </td>
                 <td>18.9
                 </td>
                 <td>39,4
                 </td>
                 <td>56,5
                 </td>
                 <td>91,7
                 </td>
                 <td>46,5
                 </td>
             </tr>
             <tr>
                 <td>Min acceleration m/s^2
                 </td>
                 <td>-1,5
                 </td>
                 <td>-1,5
                 </td>
                 <td>-1,5
                 </td>
                 <td> - 1,44
                 </td>
                 <td>
                 </td>
             </tr>
             <tr>
                 <td>Maksimal acceleration m/s^2
                 </td>
                 <td>1.611
                 </td>
                 <td>1.611
                 </td>
                 <td>1.666
                 </td>
                 <td>1.055
                 </td>
                 <td>
                 </td>
             </tr>
         </tbody>
     </table>
</div>

Grafen nedenfor viser hastigheden af ​​de forskellige cyklusser.

{{< sitefiguresized thumb="guides/understandingrange/wltp/wltpcycle3_st.png" width="2914" height="1914" title="WLTP cyklus 3B" >}}
Testen udføres på et dynamometer for at få de samme forhold. Det

- 23 grader celsius
- A/C slukket
- Lysene er slukket

Ud over dynamometertesten skal producenten teste bilen i en vindtunnel. Testen vil resultere i en modstandskoefficient og en frontal arealstørrelse, der bruges til at beregne WLTP-området.

{{< sitefiguresized thumb="guides\understandingrange\wltp\windtunnel_st.jpg" width="3000" height="1539" title="Audi e-tron i en vindtunnel" >}}

## Resultatet afhænger af udstyrsniveauet

For mange modeller vil nogle muligheder påvirke rækkevidden. Disse muligheder kan være større hjul, soltage, virtuelle spejle og andre faktorer, der ændrer vægt eller aerodynamik.

For modeller med disse muligheder skal producenten udføre to tests. En test med maksimale muligheder og en med minimumsmuligheder.

Producenten kan beregne rækkevidden for forskellige valgmuligheder ud fra disse tal.

## Hvor korrekt er det?

At køre en test uden AC, varme og lys ved 23 grader Celcius vil ikke give det korrekte forbrug i mange virkelige scenarier.

I værste fald vil motorvejskørsel i kraftig regn i koldt vejr sandsynligvis kun give 50-60 % procent af den angivne WLTP-rækkevidde.

I EVKX.net modeldatabasen inkluderer vi både max og min WLTP rækkevidde sammen med forventet virkelige verden rækkevidde.