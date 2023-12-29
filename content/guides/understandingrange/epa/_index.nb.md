---
title: EPA Range testing
linktitle: EPA
description: EPA-rekkeviddetestingen er testen som brukes i USA. Det amerikanske miljøvernbyrået definerer testene.
weight: 1
shownavtabs: true
---
<!-- markdownlint-disable MD033 -->
## Hvordan testes det?

EPA definerer [testsyklusene](https://www.fueleconomy.gov/feg/fe_test_schedules.shtml), og SAE [testprosedyren](https://www.fueleconomy.gov/feg/pdfs/EPA%20test%20prosedyre%20for%20EVs-PHEVs-11-14-2017.pdf).

Produsentene utfører EPA-testene på et dynamometer, en enhet som simulerer kjøreforhold ved å plassere kjøretøyet på ruller og måle ytelsen.

{{< sitefiguresized thumb="guides/understandingrange/epa/bmwi7dynamometer_1_st.jpg" width="3000" height="2000" title="BMW i7 på et dynamometer" >}}

Produsenten kan velge mellom en to- eller femsyklustest.

### To syklustester

EPA definerer to kjøresykluser for å representere typiske by- og motorveiscenarier: Urban Dynamometer Driving Schedule (UDDS) og Highway Fuel Economy Driving Schedule (HWFET).

UDDS-syklusen innebærer hyppige stopp og starter, mens HWFET-syklusen innebærer jevn hastighet og minimal bremsing.

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

Produsentene tester elbiler ved å lade dem helt, la dem stå parkert over natten, og kjøre dem gjennom flere UDDS- og HWFET-sykluser til testen har helt utladet batteriet. Produsentene utfører testene med en 55 % HWFET- og 45 % UDDS-blanding.

Produsenten registrerer den totale avstanden tilbakelagt av EV under testen som det foreløpige rekkeviddeestimatet. Imidlertid justerer produsenten dette anslaget med en korreksjonsfaktor for å ta hensyn til variasjoner i kjøreforhold, som temperatur, terreng og føreradferd.

EPA har basert korreksjonsfaktoren på data samlet inn fra kjøring i den virkelige verden. Det endelige rekkeviddeestimatet er produktet av de foreløpige faktorene og korreksjonsfaktorene. Korreksjonsfaktoren er 0,7 for to-syklustestene.

For eksempel, hvis en elbil kjører 300 miles under testen med en korreksjonsfaktor på 0,7, vil dens endelige EPA-rekkevidde være 300 x 0,7 = 210 miles.

Dette resultatet betyr at elbilen kan kjøre 210 miles på full lading under typiske kjøreforhold.

Etter testingen lades batteriet opp fra en vanlig AC-kilde ved hjelp av produsentens lader for det kjøretøyet.

Energiforbruket til by- og motorveisyklusene (i kW-t/mil eller kW-t/100 miles) bestemmes deretter matematisk fra ladeenergien, DC-utladningsdataene og avstanden for hver syklus.

Ladingsenergien inkluderer eventuelle tap på grunn av ineffektivitet til produsentens lader.

### Femsyklustest

I tillegg til Urban Dynamometer Driving Schedule (UDDS) og Highway Fuel Economy Driving Schedule (HWFET), har EPA definert tre ekstra sykluser.

De tre ekstra syklusene i femsyklustestene for EPA er US06, SC03 og Cold Temperature Test.

EPA bruker disse syklusene til å måle kjøretøyers drivstofføkonomi og utslipp under forskjellige kjøreforhold som standard by- og motorveisykluser ikke dekker.

US06 er en aggressiv kjøresyklus med høy akselerasjon som simulerer kjøring på motorveier og landlige veier med høyere hastigheter og hyppigere stopp. Det er også kjent som den supplerende FTP-syklusen.

SC03 er en kjøresyklus som simulerer kjøring med klimaanlegg i varmt vær. Det er også kjent som Air Conditional Supplemental FTP-syklus.

Kaldtemperaturtesten er en kjøresyklus som simulerer kalde værforhold. Det utføres ved 20 °F (-7 °C) i stedet for de normale 75 °F (24 °C). Det er også kjent som den kalde CO2-testen.

Disse tre ekstra syklusene brukes til å beregne de justerte drivstofføkonomivurderingene som vises på klistremerker for nye kjøretøyvinduer. De justerte vurderingene er mer representative for kjøring i den virkelige verden enn de ujusterte vurderingene basert på standard by- og motorveisykluser alene.

Elbilprodusenten kan velge om de vil bruke 2-syklus- eller femsyklustestene. Vanligvis vil de velge den som går lengst.

[Tesla bruker femsyklustest for å få en lengre vurdert EPA-rekkevidde](https://www.caranddriver.com/features/a33824052/adjustment-factor-tesla-uses-for-big-epa-range-numbers/).

## Hvor riktig er det?

Mange anser EPA-testene for å være nærmere virkelige tall enn WLTP-tester.

I [EVKX.net modelldatabasen](/evsearch) har vi listet opp EPA-resultatet for modellene. EPA har også sin egen [search](https://www.fueleconomy.gov/feg/PowerSearch.do?action=PowerSearch&year1=2021&year2=2023&minmsrpsel=0&maxmsrpsel=0&city=0&highway=0&combined=0&cbftelectricity=Electricity&YearSel=2021-2023&MakeSel=&MarClassSel=&FuelTypeSel=Electricity&VehTypeSel=&TranySel=&DriveTypeSel=&CylindersSel=&MpgSel=000&sortBy=Comb&Units=&url=SearchServlet&opt=new&minmsrp=0&maxmsrp=0&minmpg=0&maxmpg=0&sCharge=&tCharge=&startstop=&cylDeact=&rowLimit=200)
