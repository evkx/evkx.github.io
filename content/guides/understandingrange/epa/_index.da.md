---
title: EPA Range testing
linktitle: EPA
description: EPA-rækkeviddetest er den test, der bruges i USA. Det amerikanske miljøbeskyttelsesagentur definerer testene.
weight: 1
shownavtabs: true
---
<!-- markdownlint-disable MD033 -->
## Hvordan testes det?

EPA definerer [testcyklusserne](https://www.fueleconomy.gov/feg/fe_test_schedules.shtml) og SAE [testproceduren](https://www.fueleconomy.gov/feg/pdfs/EPA% 20test%20procedure%20for %20EVs-PHEVs-11-14-2017.pdf).

Producenter udfører EPA-testene på et dynamometer, en enhed, der simulerer køreforhold ved at placere køretøjet på ruller og måle dets ydeevne.

{{< sitefiguresized thumb="guides/understandingrange/epa/bmwi7dynamometer_1_st.jpg" width="3000" height="2000" title="BMW i7 på et dynamometer" >}}

Producenten kan vælge mellem en to- eller fem-cyklus test.

### To cyklustest

EPA definerer to kørecyklusser, der repræsenterer typiske by- og motorvejsscenarier: Urban Dynamometer Driving Schedule (UDDS) og Highway Fuel Economy Driving Schedule (HWFET).

UDDS-cyklussen involverer hyppige stop og starter, mens HWFET-cyklussen involverer konstant hastighed og minimal opbremsning.

<table class="table">
     <hoved>
     <tr>
     <th>
     </th>
     <th>
         UDDP
     </th>
     <th>
         HWFET
     </th>
     </thead>
     <tbody>
         <tr>
             <td>Varighed, sekunder</td>
             <td>1874</td>
             <td>765</td>
         </tr>
         <tr>
             <td>Stop, sekunder</td>
             <td>358</td>
             <td>0</td>
         </tr>
         <tr>
             <td>Afstand i meter</td>
             <td>17767</td>
             <td>16142</td>
         </tr>
         <tr>
             <td>Afstand i miles</td>
             <td>11.04</td>
             <td>10.03</td>
         </tr>
         <tr>
             <td>Procent stop</td>
             <td>18 %</td>
             <td>0 %</td>
         </tr>
         <tr>
             <td>Maksimal hastighed km/t</td>
             <td>90,93</td>
             <td>96,6</td>
         </tr>
         <tr>
             <td>Maksimal hastighed mph</td>
             <td>56.5</td>
             <td>60</td>
         </tr>
         <tr>
             <td>Gns. hastighed km/t</td>
             <td>34.2</td>
             <td>77,7</td>
         </tr>
         <tr>
             <td>Gns. hastighed mph</td>
             <td>21.2</td>
             <td>48.3</td>
         </tr>
     </tbody>
</table>
{{< sitefiguresized thumb="guides/understandingrange/epa/epacycles_st.png" width="2732" height="1505" title="EPA Cycles" >}}

Producenter tester elbiler ved at oplade dem helt, lade dem stå parkeret natten over og køre dem gennem flere UDDS- og HWFET-cyklusser, indtil testen har helt afladet batteriet. Producenterne udfører testene med en 55 % HWFET og 45 % UDDS blanding.

Producenten registrerer den samlede afstand tilbagelagt af elbilen under testen som det foreløbige estimat for rækkevidde. Producenten justerer dog dette estimat med en korrektionsfaktor for at tage højde for variationer i kørselsforhold, såsom temperatur, terræn og føreradfærd.

EPA har baseret korrektionsfaktoren på data indsamlet fra kørsel i den virkelige verden. Det endelige intervalestimat er produktet af de foreløbige faktorer og korrektionsfaktorerne. Korrektionsfaktoren er 0,7 for to-cyklustestene.

For eksempel, hvis en EV kører 300 miles under testen med en korrektionsfaktor på 0,7, vil dens endelige EPA-område være 300 x 0,7 = 210 miles.

Dette resultat betyder, at elbilen kan køre 210 miles på fuld opladning under typiske kørselsforhold.

Efter test genoplades batteriet fra en standard AC-kilde ved hjælp af producentens oplader til det pågældende køretøj.

Energiforbruget for by- og motorvejscyklusser (i kW-t/mil eller kW-t/100 miles) bestemmes derefter matematisk ud fra ladeenergien, DC-udladningsdata og afstanden for hver cyklus.

Opladningsenergien inkluderer eventuelle tab som følge af ineffektivitet af producentens oplader.

### Fem cyklus test
Ud over Urban Dynamometer Driving Schedule (UDDS) og Highway Fuel Economy Driving Schedule (HWFET) har EPA defineret tre yderligere cyklusser.

De tre yderligere cyklusser i de fem cyklustests for EPA er US06, SC03 og Cold Temperature Test.

EPA bruger disse cyklusser til at måle køretøjers brændstoføkonomi og emissioner under forskellige kørselsforhold, som standard by- og motorvejscykler ikke dækker.

US06 er en aggressiv kørecyklus med høj acceleration, der simulerer motorvejs- og landevejskørsel ved højere hastigheder og hyppigere stop. Det er også kendt som den supplerende FTP-cyklus.

SC03 er en kørecyklus, der simulerer kørsel med aircondition i varmt vejr. Det er også kendt som Air Conditional Supplemental FTP-cyklus.

Den kolde temperaturtest er en kørecyklus, der simulerer kolde vejrforhold. Det udføres ved 20°F (-7°C) i stedet for de normale 75°F (24°C). Det er også kendt som den kolde CO2-test.

Disse tre ekstra cyklusser bruges til at beregne de justerede brændstoføkonomivurderinger, der vises på klistermærker med nye bilruder. De justerede vurderinger er mere repræsentative for kørsel i den virkelige verden end de ujusterede vurderinger baseret på standard by- og motorvejscykler alene.

Elbilproducenten kan vælge, om man vil bruge 2-takts- eller fem-cyklus-testen. Normalt vil de vælge den, der går længst.

[Tesla bruger fem-cyklus test for at få længere EPA-vurderet rækkevidde](https://www.caranddriver.com/features/a33824052/adjustment-factor-tesla-uses-for-big-epa-range-numbers/).

## Hvor korrekt er det?

Mange anser EPA-testene for at være tættere på reelle tal end WLTP-testene.

I [EVKX.net modeldatabase](/evsearch) har vi listet EPA-resultaterne for modellerne. EPA har også sin egen [search](https://www.fueleconomy.gov/feg/PowerSearch.do?action=PowerSearch&year1=2021&year2=2023&minmsrpsel=0&maxmsrpsel=0&city=0&highway=0&combined=0&cbftelectricity=0&cbftelectricity=0&cbftelectricity=0&cbftelectricity=E201ElectS02Electricity=E201ElectSc&201ElectricitylassSel=&BrændstofTypeSel=Elektricitet&VehTypeSel=&TranySel=&DriveTypeSel=&CylindersSel=&MpgSel=000&sortBy=Comb&Units=&url=SearchServlet&opt=new&minmsrp=0&maxChmpg=0&minmsrp=0&maxChmpg=0&maxChmpg=0&maxchmpg=0stop=&cylDeact=&rowLimit=200)