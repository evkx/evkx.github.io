---
title: EPA intervalltestning
linktitle: EPA
description: EPA-intervalltestningen är det test som används i USA. Den amerikanska miljöskyddsmyndigheten definierar testerna.
weight: 1
shownavtabs: true
---
<!-- markdownlint-disable MD033 -->
## Hur testas det?

EPA definierar [testcyklerna](https://www.fueleconomy.gov/feg/fe_test_schedules.shtml) och SAE [testproceduren](https://www.fueleconomy.gov/feg/pdfs/EPA% 20test%20procedur%20för %20EVs-PHEVs-11-14-2017.pdf).

Tillverkare utför EPA-testerna på en dynamometer, en enhet som simulerar körförhållanden genom att placera fordonet på rullar och mäta dess prestanda.

{{< sitefiguresized thumb="guides/understandingrange/epa/bmwi7dynamometer_1_st.jpg" width="3000" height="2000" title="BMW i7 på en dynamometer" >}}

Tillverkaren kan välja mellan ett två- eller femtaktstest.

### Två cykeltester

EPA definierar två körcykler för att representera typiska stads- och motorvägsscenarier: Urban Dynamometer Driving Schedule (UDDS) och Highway Fuel Economy Driving Schedule (HWFET).

UDDS-cykeln innebär frekventa stopp och starter, medan HWFET-cykeln innebär jämn hastighet och minimal inbromsning.

<table class="table">
    <thead>
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
            <td>Duration, Seconds</td>
            <td>1874</td>
            <td>765</td>
        </tr>
        <tr>
            <td>Stop, seconds</td>
            <td>358</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Distance in meters</td>
            <td>17767</td>
            <td>16142</td>
        </tr>
        <tr>
            <td>Distance in miles</td>
            <td>11.04</td>
            <td>10.03</td>
        </tr>
        <tr>
            <td>Percent stop</td>
            <td>18%</td>
            <td>0%</td>
        </tr>
        <tr>
            <td>Max speed km/h</td>
            <td>90.93</td>
            <td>96.6</td>
        </tr>
        <tr>
            <td>Max speed mph</td>
            <td>56.5</td>
            <td>60</td>
        </tr>
        <tr>
            <td>Avg speed km/h</td>
            <td>34.2</td>
            <td>77.7</td>
        </tr>
        <tr>
            <td>Avg speed mph</td>
            <td>21.2</td>
            <td>48.3</td>
        </tr>
    </tbody>
</table>
{{< sitefiguresized thumb="guides/understandingrange/epa/epacycles_st.png" width="2732" height="1505" title="EPA Cycles" >}}

Tillverkare testar elbilar genom att ladda dem helt, lämna dem parkerade över natten och köra dem genom flera UDDS- och HWFET-cykler tills testet har laddat ur helt och hållet batteriet. Tillverkarna utför testerna med en 55 % HWFET och 45 % UDDS mix.

Tillverkaren registrerar den totala sträckan som elbilen tillryggalagt under testet som en preliminär uppskattning av räckvidden. Tillverkaren justerar dock denna uppskattning med en korrigeringsfaktor för att ta hänsyn till variationer i körförhållanden, såsom temperatur, terräng och förarens beteende.

EPA har baserat korrigeringsfaktorn på data som samlats in från verklig körning. Den slutliga intervalluppskattningen är produkten av de preliminära faktorerna och korrektionsfaktorerna. Korrektionsfaktorn är 0,7 för tvåtaktstesterna.

Till exempel, om en EV kör 300 miles under testet med en korrektionsfaktor på 0,7, kommer dess slutliga EPA-intervall att vara 300 x 0,7 = 210 miles.

Detta resultat innebär att elbilen kan köra 210 mil på full laddning under typiska körförhållanden.

Efter testning laddas batteriet från en vanlig AC-källa med hjälp av tillverkarens laddare för det fordonet.

Energiförbrukningen för stads- och motorvägscykler (i kW-h/mil eller kW-h/100 miles) bestäms sedan matematiskt från laddningsenergin, DC-urladdningsdata och avstånd för varje cykel.

Laddningsenergin inkluderar eventuella förluster på grund av ineffektivitet hos tillverkarens laddare.

### Fem cykeltest

Utöver Urban Dynamometer Driving Schedule (UDDS) och Highway Fuel Economy Driving Schedule (HWFET), har EPA definierat ytterligare tre cykler.

De tre ytterligare cyklerna i de fem cykeltesterna för EPA är US06, SC03 och Cold Temperature Test.

EPA använder dessa cykler för att mäta fordons bränsleekonomi och utsläpp under olika körförhållanden som vanliga stads- och motorvägscykler inte täcker.

US06 är en aggressiv körcykel med hög acceleration som simulerar körning på motorväg och landsväg i högre hastigheter och tätare stopp. Det är också känt som den kompletterande FTP-cykeln.

SC03 är en körcykel som simulerar körning med luftkonditionering i varmt väder. Det är också känt som Air Conditional Supplemental FTP-cykel.

Kalltemperaturtestet är en körcykel som simulerar kalla väderförhållanden. Den utförs vid 20°F (-7°C) istället för normala 75°F (24°C). Det är också känt som det kalla CO2-testet.

Dessa tre extra cykler används för att beräkna de justerade bränsleekonomivärdena som visas på dekaler för nya fordonsfönster. De justerade betygen är mer representativa för körning i verkligheten än de ojusterade betygen baserade enbart på standardcykler i stads- och motorvägar.

Elbilstillverkaren kan välja om man vill använda 2-takts- eller femtaktstestet. Vanligtvis kommer de att välja den som går längst.

[Tesla använder fem-cykeltest för att få längre EPA-klassad räckvidd](https://www.caranddriver.com/features/a33824052/adjustment-factor-tesla-uses-for-big-epa-range-numbers/).

## Hur korrekt är det?

Många anser att EPA-testerna ligger närmare reella tal än WLTP-tester.

I [EVKX.net modelldatabasen](/evsearch) har vi listet opp EPA-resultatet for modellene. EPA har også sin egen [search](https://www.fueleconomy.gov/feg/PowerSearch.do?action=PowerSearch&year1=2021&year2=2023&minmsrpsel=0&maxmsrpsel=0&city=0&highway=0&combined=0&cbftelectricity=Electricity&YearSel=2021-2023&MakeSel=&MarClassSel=&FuelTypeSel=Electricity&VehTypeSel=&TranySel=&DriveTypeSel=&CylindersSel=&MpgSel=000&sortBy=Comb&Units=&url=SearchServlet&opt=new&minmsrp=0&maxmsrp=0&minmpg=0&maxmpg=0&sCharge=&tCharge=&startstop=&cylDeact=&rowLimit=200)
