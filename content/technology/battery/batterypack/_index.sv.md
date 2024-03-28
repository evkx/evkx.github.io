---
title: Batteripaket och konfiguration
linktitle: Batteripaket och konfiguration
description: Batterisystemet kombinerar många celler och annan styrelektronik till ett fullt batteri för att driva elbilen.
weight: 4
---
<!-- markdownlint-disable MD033 -->
## Batterikonfiguration

I ett elfordon (EV) avser batterikonfigurationen arrangemanget av individuella battericeller i batteripaketet. Batterikonfigurationen kan påverka spänningen, kapaciteten, uteffekten och andra aspekter av batteripaketet och fordonets totala prestanda.

Den vanligaste konfigurationen för elbilsbatterier är en serieparallell hybridkonfiguration. I denna konfiguration är flera celler kopplade i serie för att öka spänningen på batteripaketet, och flera grupper av seriekopplade celler kopplas sedan parallellt för att öka batteripaketets totala kapacitet.

Seriekopplingen av celler ökar spänningen från batteripaketet, vilket är viktigt för att ge den nödvändiga kraften för att köra fordonet. Parallellkopplingen av cellgrupper ökar batteripaketets kapacitet, vilket är väsentligt för att lagra den energi som krävs för att köra bilen till önskad räckvidd.

Den specifika batterikonfigurationen som används i en elbil beror på ett antal faktorer, såsom önskad räckvidd, effekt och fordonets totalvikt.

{{<evkxdisplayaddarticle />}}

### 400 eller 800 volt?

Tillverkare konfigurerar vanligtvis paketen att vara runt 400 volt eller 800 volt.

En batterikonfiguration med högre spänning, såsom ett 800-voltssystem, kan erbjuda vissa fördelar jämfört med ett 400-voltssystem med lägre spänning, men har också potentiella nackdelar. Här är några av fördelarna och nackdelarna med varje konfiguration:#### Pros 400 Volt-paket

**Mogenare teknik:** 400-volts batterisystem har funnits längre och är vanligare i elfordon, vilket innebär att de är mer beprövade och pålitliga.

**Lägre kostnad:** Eftersom de är en mer etablerad teknik tenderar 400-volts batterisystem att vara billigare att tillverka än system med högre spänning.

**Brett tillgänglig laddningsinfrastruktur:** Det finns många offentliga laddstationer som stöder 400-voltsladdning, vilket gör det lättare att hitta platser att ladda din elbil.

**Flera cellkonfigurationer tillgängliga** 400 Volt-paket kan konfigureras på flera sätt och ger tillverkaren flera cellalternativ.

#### Cons 400 Volt pack

Långsammare laddning: Ett 400-volts batterisystem kräver vanligtvis längre laddningstider än ett 800-voltssystem, vilket kan vara en nackdel om du behöver ladda ditt fordon snabbt.

**Begränsad uteffekt:** 400-volts batterisystem kanske inte kan leverera samma nivå av uteffekt som ett 800-voltssystem, vilket kan begränsa accelerationen och prestandan hos elbilen.

**Tyngre:** Ett 400-volts batterisystem kan kräva tjockare kablar för att klara samma laddningshastighet.

#### Pros 800 Volt paket

Snabbare laddning: Ett 800-volts batterisystem kan stödja snabbare laddningstider än ett 400-voltssystem, vilket innebär att du kan ladda din elbil snabbare.

**Högre effekt:** Ett 800-volts batterisystem kan leverera mer kraft, vilket kan ge bättre acceleration och prestanda, men i verkligheten är de mest kraftfulla elbilarna 400 volt. Så detta är ingen verklig fördel.

**Lättare vikt:** Ett 800-volts batterisystem kan kräva tunnare kablar för att stödja höghastighetsladdning.

#### Cons 800 Volt paket:

**Begränsad laddinfrastruktur**: Färre offentliga laddstationer stöder för närvarande 800-voltsladdning, vilket innebär att det kan vara svårare att hitta platser att ladda din elbil i full hastighet.

Till exempel laddas det största laddningsnätverket, Tesla Supercharger-nätverket, med max 500 volt. Att ladda en 800-volts bil på dessa laddare kräver att EV konverterar laddarens spänning till 800 volt, och konvertering vanligtvis
begränsar laddningshastigheten avsevärt. Tillverkarna använder olika tekniker för denna konvertering. Se kapitlet om laddning för detaljer.

Här är några konfigurationsexempel

<table class="table table-striped ">
    <thead>
        <tr>
        <th>Model
        </th>
        <th>Gross Capacity
        </th>
        <th>Configuration
        </th>
        <th>Nominal Voltage
    </thead>
    <tbody>
    <tr>
        <td>Audi Q8 e-tron</td>
        <td>116kWh</td>
        <td>108s4p</td>
        <td>396 Volt</td>
    </tr>
    <tr>
        <td>Audi e-tron GT</td>
        <td>93.7kWh</td>
        <td>198s2p</td>
        <td>725 Volt</td>
    </tr>
    <tr>
        <td>Kia EV6 GT</td>
        <td>77.4</td>
        <td>192s2p</td>
        <td>697 Volt</td>
    </tr>
    <tr>
        <td><a href="../../../models/nio/">Nio 100KWh Battery</a></td>
        <td>100kWh</td>
        <td>96s1p</td>
        <td>358 Volt</td>
    </tr>
    <tr>
        <td><a href="../../../models/mercedes/eqe/">Mercedes EQE</a></td>
        <td>96,12 kWh</td>
        <td>90s4p</td>
        <td>328 Volt</td>
    </tr>
    <tr>
        <td><a href="../../../models/mercedes/eqs/">Mercedes EQS</a></td>
        <td>120kWh</td>
        <td>108s4p</td>
        <td>396 Volt</td>
    </tr>
    <tr>
        <td><a href="../../../models/tesla/model_y/model_y_long_range/">Tesla Model Y Long Range</a></td>
        <td>78.1kWh</td>
        <td>96s46p</td>
        <td>357 Volt</td>
    </tr>
    <tr>
        <td>Rivan R1S Large pack</a></td>
        <td>135kWh</td>
        <td>108s72p</td>
        <td>390 Volt</td>
    </tr>
    <tr>
        <td>Rivan R1S Max pack</a></td>
        <td>149kWh</td>
        <td>108s72p</td>
        <td>390 Volt</td>
    </tr>
</tbody>
</table>

{{<evkxdisplayaddarticle />}}

## Batteripaketdesign

## Cell-till-modul

Cell-to-module (C2M) är en teknik som används i batteripaket för elfordon (EV) som möjliggör en mer modulär och skalbar design jämfört med traditionella batteripaket.

I ett traditionellt elbilsbatteri ansluts individuella battericeller för att bilda en modul, och flera moduler kopplas sedan i serie och/eller parallellt för att bilda hela batteripaketet. Detta kan vara komplicerat och dyrt, särskilt i stora batteripaket, och kan kräva omfattande kablage och kylsystem för att säkerställa smidig laddning och urladdning av cellerna.

{{< sitefiguresized thumb="technology/battery/batterypack/module_lg_pouch_st.jpg" width="3000" height="1790" title="LG batterimodul" >}}

Med C2M-teknik sätts flera battericeller samman till en enda, oberoende modul med integrerad elektronik och kylsystem. Modulerna kan sedan enkelt kopplas ihop till ett komplett batteripaket. Varje modul har sitt eget BMS (battery management system) som övervakar och styr laddning och urladdning av cellerna i modulen, vilket ger en mer exakt styrning och övervakning av de enskilda cellerna.

C2M-tekniken har flera fördelar jämfört med traditionella batteripaket. Det kan förenkla batteripaketets övergripande design, minska lednings- och kylningskraven och ge större flexibilitet i den övergripande packdesignen. Det kan också förbättra paketets övergripande tillförlitlighet, eftersom varje modul är fristående och fel kan upptäckas och isoleras snabbare.

{{< sitefiguresized thumb="technology/battery/batterypack/batterypack_e-tron-gt_st.jpg" width="3000" height="2062" title="Batteripaket med 33 moduler" >}}

{{<evkxdisplayaddarticle />}}
## Cell-till-paket

Cell-to-pack (CTP)-batterier är en ny typ av batteriteknologi som eliminerar behovet av batterimoduler genom att integrera cellerna direkt i paketet.

Denna teknik utvecklas av flera företag som Tesla, BYD och CATL.

{{< sitefiguresized thumb="technology/battery/batterypack/catl_qilin_3_st.jpg" width="2222" height="1032" title="CATL Qilin cell-to-pack batteri" >}}

BYD Blade och CATL Qilin är två exempel på CTP-batterier. Den största skillnaden mellan dessa två batterier är deras kylsystem.

{{< sitefiguresized thumb="technology/battery/cell/bladebattery_st.jpg" width="3000" height="1351" title="BYD Blade Battery" >}}

BYD Blade använder ett vätskekylningssystem medan CATL Qilin använder ett strukturellt kylsystem. Det strukturella kylsystemet är mer effektivt än vätskekylsystemet som används i BYD Blade.

Fördelarna med CTP-batterier inkluderar högre energitäthet och lägre kostnader jämfört med cell-till-moduler.

## Strukturellt batteripaket

Ett strukturellt batteripaket är en typ av batteripaket som är skapat på ett sådant sätt att själva packen blir en strukturell komponent i elbilen.

Detta tillvägagångssätt kan minska EV-vikten genom att ta bort den dubbla strukturen mellan paketet och fordonsstrukturen eftersom själva batteripaketet blir en del av fordonets struktur.

Detta kan förbättra elbilarnas totala prestanda och effektivitet.

Strukturella batteripaket är fortfarande ett relativt nytt koncept, men de undersöks och utvecklas av ett antal företag och forskningsinstitutioner.

De har potentialen att revolutionera designen av elfordon och andra enheter genom att minska vikten och komplexiteten, förbättra prestandan och göra det lättare att integrera batteritekniken i ett brett spektrum av applikationer.

För närvarande är det bara Tesla Model Y som har strukturella paket. Enligt Tesla erbjuder denna lösning många fördelar, som en stor minskning av antalet delar som används i både batteripaketet och bilen.

{{< sitefiguresized thumb="technology/battery/batterypack/teslastructuralbattery_1_st.jpg" width="1585" height="714" title="Tesla 4680 strukturpaket jämfört med traditionellt pack" >}}

Ännu viktigare, företaget sa att de nya cellerna tillsammans med strukturpaketet förväntas öka Model Y:s räckvidd med 16 procent och minska bilens totala vikt med 10 procent, vilket resulterar i förbättrad acceleration och hantering.

{{< sitefiguresized thumb="technology/battery/batterypack/teslastructuralbattery_2_st.jpg" width="1344" height="645" title="Teslas strukturpaket fungerar som golvet i elbilen" >}}

Videon nedan visar en detaljerad analys av paketet av Munro & Associates.

{{< youtube FXpfU6I_T3w >}}

## Energitetthet på batteripakkenivå

Tabellen nedenfor viser hvordan pakketettheten har variert over tid mellom noen eksempelbatteripakker.

<table class="table table-striped">
    <thead>
        <tr>
            <th>Pack</th>
            <th>Year</th>
            <th>Gross Capacity</th>
            <th>Weight</th>
            <th>Density</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Tesla Roadster</td>
            <td>2010</td>
            <td>53kWh</td>
            <td>450kg</td>
            <td>118 Wh/kg</td>
        </tr>
         <tr>
            <td>Tesla Model S</td>
            <td>2012</td>
            <td>85kWh</td>
            <td>540kg</td>
            <td>157 Wh/kg</td>
        </tr>
         <tr>
            <td>Tesla Model X </td>
            <td>2015</td>
            <td>75kWh</td>
            <td>530kg</td>
            <td>141 Wh/kg</td>
        </tr>
         <tr>
            <td>Audi e-tron 55</td>
            <td>2018</td>
            <td>95kWh</td>
            <td>699kg</td>
            <td>136Wh/kg</td>
        </tr>
        <tr>
            <td>Volkswagen MEB</td>
            <td>2021</td>
            <td>82kWh</td>
            <td>493kg</td>
            <td>166Wh/kg</td>
        </tr>
         <tr>
            <td>Tesla Model S</td>
            <td>2022</td>
            <td>100kWh</td>
            <td>544kg</td>
            <td>184Wh/kg</td>
        </tr>
         <tr>
            <td>Audi Q8 e-tron 55 </td>
            <td>2022</td>
            <td>114kWh</td>
            <td>727kg</td>
            <td>157Wh/kg</td>
        </tr>
         <tr>
            <td>Kia EV6</td>
            <td>2022</td>
            <td>77.4kWh</td>
            <td>477kg</td>
            <td>162Wh/kg</td>
        </tr>
         <tr>
            <td>Mercedes EQXX</td>
            <td>2022</td>
            <td>107.8kWh</td>
            <td>495kg</td>
            <td>217Wh/kg</td>
        </tr>
         <tr>
            <td>Nio Semi-Solid</td>
            <td>2023</td>
            <td>150kWh</td>
            <td>575kg</td>
            <td>260Wh/kg</td>
        </tr>
        <tr>
            <td>Audi Q6 e-tron / Porsche Macan EV</td>
            <td>2024</td>
            <td>100kWh</td>
            <td>570kg</td>
            <td>175Wh/kg</td>
        </tr>
    </tbody>
</table>

För detaljer om flera paket rekommenderar vi <a href="https://www.batterydesign.net/maximising-pack-energy-density/">BatteryDesign.net</a>

<div class="mt-3 mb-3">
    <a href="../" class="btn btn-outline-secondary">Artikelöversikt <i class="bi-card-list"></i></a>
    <a href="../batterymanagment/" class="btn btn-primary float-end">Battery Mangement System <i class="bi-arrow-right-circle"></i></a>
</div>