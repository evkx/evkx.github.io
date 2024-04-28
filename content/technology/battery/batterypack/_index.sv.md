---
title: Batteripaket och konfiguration
linktitle: Batteripaket och konfiguration
description: Batterisystemet kombinerar många celler och annan styrelektronik till ett fullt batteri för att driva elbilen.
weight: 4
---
<!-- markdownlint-disable MD033 -->
## Batterikonfiguration

I ett elfordon (EV) hänvisar batterikonfigurationen till arrangemanget av individuella battericeller i batteripaketet. Batterikonfigurationen kan påverka spänningen, kapaciteten, uteffekten och andra aspekter av batteripaketet och fordonets totala prestanda.
Den vanligaste konfigurationen för elbilsbatterier är en serie-parallell hybrid. I denna konfiguration kopplas flera celler i serie för att öka batteripaketets spänning, och flera grupper av seriekopplade celler kopplas sedan parallellt för att öka batteripaketets totala kapacitet.

Seriekopplingen av celler ökar batteripaketets spänningsutgång, vilket är avgörande för att ge den nödvändiga kraften för att köra fordonet. Parallellkopplingen av cellgrupper ökar batteripaketets kapacitet, vilket är väsentligt för att lagra den energi som krävs för att köra bilen till önskad räckvidd.

För att beräkna batteripaketets bruttostorlek, multiplicera den totala parallella kapaciteten i Ah (ampere-timmar) med batteripaketets nominella spänning i volt. Resultaten är i WH wattimmar.


### Exempel: Audi Q8 e-tron 55

Diagrammet nedan visar konfigurationen av en batterimodul från Audi Q8 e-tron 55. Denna modul innehåller 12 battericeller, varav fyra är monterade parallellt, och det finns tre grupper av denna parallella konfiguration i serie.

<figur>
<img src="configuration1.drawio.svg" class="img-fluid mx-auto d-block">
<figcaption>
         <p class="lead text-center fw-semibold">
             3s4p-modul
         </p>
     </figcaption>
</figur>

Varje cell har en nominell spänning på 3,6667 volt och en kapacitet på 72 AH.

Tre celler i serie ger en modulspänning på 11 Volt. 4 x 72AH i parallell ger en total modulkapacitet på 72 x 4 = 288 AH. Q8 e-tron 55 har totalt 36 moduler i serie. 36 x 11 volt ger 396 volt för paketet. 396 Volt x 288 aH = 114048 Wh eller 114 kWh bruttokapacitet.


### Exempel: Tesla Model Y Long Range

Tesla Model Y Long Range använder 4416 celler i det lilla 21700-formatet, med 96 rader och 46 celler parallellt.

Varje cell är 4,8 Ah med en nominell spänning på 3,7 Volt. 4,8ah x 46 ger totalt 220,8 ah. 96 x 3,7 Volt ger en nominell packspänning på 355 volt. Denna konfiguration ger en bruttokapacitet på 355 * 220,8 = 78,4 kWh.


### Exempel: Kia EV 6 Lång räckvidd

Kia EV6 långdistansbatteri har totalt 384 celler. Cellerna är konfigurerade i 192 rader, med två celler parallella, och är strukturerade i moduler med 12 celler.


<figur>
<img src="configuration3.drawio.svg" class="img-fluid mx-auto d-block">
<figcaption>
         <p class="lead text-center fw-semibold">
             6s2p modul
         </p>
     </figcaption>
</figur>


Varje cell är 55,6 AH. 2 x 55,6 = 111,2 AH. Den nominella spänningen är 3,63 per cell. 192 x 3,63 = 696,96 volt nominellt för paketet. 696,96 * 111,2 = 77,5 kWh.
### Fler batteriexempel
Här är några konfigurationsexempel

<table class="table table-striped border">
     <huvud>
         <tr>
         <th>Modell
         </th>
         <th>Bruttokapacitet
         </th>
         <th>Konfiguration
         </th>
         <th>Nominell spänning
     </thead>
     <tbody>
     <tr>
         <td>Audi Q8 e-tron</td>
         <td>116kWh</td>
         <td>108s4p</td>
         <td>396 volt</td>
     </tr>
     <tr>
         <td>Audi e-tron GT</td>
         <td>93,7 kWh</td>
         <td>198s2p</td>
         <td>725 volt</td>
     </tr>
     <tr>
         <td>Kia EV6 GT</td>
         <td>77.4</td>
         <td>192s2p</td>
         <td>697 volt</td>
     </tr>
     <tr>
         <td><a href="../../../models/nio/">Nio 100KWh-batteri</a></td>
         <td>100 kWh</td>
         <td>96s1p</td>
         <td>358 volt</td>
     </tr>
     <tr>
         <td><a href="../../../models/mercedes/eqe/">Mercedes EQE</a></td>
         <td>96,12 kWh</td>
         <td>90s4p</td>
         <td>328 volt</td>
     </tr>
     <tr>
         <td><a href="../../../models/mercedes/eqs/">Mercedes EQS</a></td>
         <td>120 kWh</td>
         <td>108s4p</td>
         <td>396 volt</td>
     </tr>
     <tr>
         <td><a href="../../../models/tesla/model_y/model_y_long_range/">Tesla Model Y Long Range</a></td>
         <td>78,1 kWh</td>
         <td>96s46p</td>
         <td>357 volt</td>
     </tr>
     <tr>
         <td>Rivan R1S Large pack</a></td>
         <td>135 kWh</td>
         <td>108s72p</td>
         <td>390 volt</td>
     </tr>
     <tr>
         <td>Rivan R1S Max-paket</a></td>
         <td>149 kWh</td>
         <td>108s72p</td>
         <td>390 volt</td>
     </tr>
       <tr>
         <td>Porsche Macan / Audi Q6</a></td>
         <td>100 kWh</td>
         <td>180s1p</td>
         <td>662 volt</td>
     </tr>
</tbody>
</table>


Den specifika batterikonfigurationen som används i en elbil beror på en mängd olika faktorer, såsom önskat räckvidd, uteffekt och fordonets totalvikt.

{{<evkxdisplayaddarticle />}}
### 400 eller 800 volt?

Tillverkare konfigurerar vanligtvis paketen att vara runt 400 volt eller 800 volt.

En batterikonfiguration med högre spänning, såsom ett 800-voltssystem, kan erbjuda vissa fördelar jämfört med ett 400-voltssystem med lägre spänning men har också potentiella nackdelar. Här är några av fördelarna och nackdelarna med varje konfiguration:

#### Pros 400 Volt paket

**Mogenare teknologi:** 400-volts batterisystem har funnits längre och används mer allmänt i elfordon, vilket innebär att de är mer beprövade och pålitliga.

**Lägre kostnad:** Eftersom de är en mer etablerad teknik tenderar 400-volts batterisystem att vara billigare att tillverka än system med högre spänning.

**Brett tillgänglig laddningsinfrastruktur:** Många offentliga laddstationer stöder 400-voltsladdning, vilket gör det lättare att hitta platser att ladda din elbil. Till exempel stöder Tesla Supercharger-nätverket inte 800 volts laddning.

**Fler tillgängliga cellkonfigurationer:** 400 Volt-paket kan konfigureras på fler sätt, vilket ger tillverkaren fler cellalternativ.

#### Cons 400 Volt paket

**Långsammare laddning:** Ett 400-volts batterisystem kräver vanligtvis längre laddningstider än ett 800-voltssystem, vilket kan vara en nackdel om du behöver ladda ditt fordon snabbt. Denna begränsning beror på att laddare har begränsningar för ström. Många laddare är begränsade till 500 ampere. 500 ampere x 400 volt = 200kW. På en 800-volts laddare med samma strömbegränsningar skulle resultatet bli 500 ampere x 800 volt = 400kW laddningseffekt.

**Begränsad uteffekt:** 400-volts batterisystem kanske inte kan leverera samma effekt som ett 800-voltssystem, vilket kan begränsa elbilens acceleration och prestanda. Denna begränsning verkar inte vara ett problem med nuvarande modeller.

**Tyngre:** Ett 400-volts batterisystem kan kräva tjockare kablar för att stödja samma laddningshastighet.

#### Pros 800 Volt paket

**Snabbare laddning:** Ett 800-volts batterisystem kan stödja snabbare laddningshastighet än ett 400-voltssystem så att du spenderar mindre tid på att ladda.

**Högre effekt:** Ett 800-volts batterisystem kan leverera mer effekt, vilket kan ge bättre acceleration och prestanda, men i verkligheten är de mest kraftfulla batterierna 400 volt, så detta är ingen verklig fördel.

**Lättare vikt:** Ett 800-volts batterisystem kan kräva tunnare kablar för att stödja höghastighetsladdning.

#### Cons 800 Volt paket:

**Begränsad laddningsinfrastruktur**: Färre offentliga laddstationer stöder för närvarande 800-voltsladdning, vilket innebär att det kan vara svårare att hitta platser att ladda din elbil i full hastighet.

Till exempel laddas det största laddningsnätverket, Tesla Supercharger-nätverket, med max 500 volt. Att ladda en 800-volts bil på dessa laddare kräver att EV konverterar laddarens spänning till 800 volt, och konvertering vanligtvis
begränsar laddningshastigheten avsevärt. Tillverkarna använder olika tekniker för denna konvertering. Se kapitlet om laddning för detaljer.

**Kräver mindre celler**: Eftersom du åtminstone skulle behöva cirka 170 celler i serie för att skapa ett "800 volts"-paket, förhindrar detta användningen av de största cellerna. Större celler ger högre densitet och mindre ledningar.

{{<evkxdisplayaddarticle />}}
## Batteripaketdesign

Det finns några standarddesigner som används för att bygga batteripaketet.

## Cell-till-modul

Cell-to-module (C2M)-design involverar sammansättning av flera battericeller till en enda, fristående modul med integrerad elektronik och kylsystem. Modulerna kan sedan enkelt kopplas ihop för att bilda ett komplett batteripaket.

Varje modul har sitt eget BMS (battery management system) som övervakar och kontrollerar laddning och urladdning av cellerna i modulen, vilket möjliggör mer exakt styrning och övervakning av de enskilda cellerna.

{{< sitefiguresized thumb="technology/battery/batterypack/module_q6_1_st.jpg" width="3000" height="1783" title="Audi Q6 e-tron batterimodul med 15 prismatiska celler" >}}

Med C2M-teknik är flera battericeller sammansatta till en enda, fristående modul med integrerad elektronik och kylsystem. Modulerna kan sedan enkelt kopplas ihop för att bilda ett komplett batteripaket. Varje modul har sitt eget BMS (battery management system) som övervakar och kontrollerar laddning och urladdning av cellerna i modulen, vilket möjliggör mer exakt styrning och övervakning av de enskilda cellerna.

{{< sitefiguresized thumb="technology/battery/batterypack/q6pack_1_st.jpg" width="3000" height="1924" title="Audi Q6 e-tron batteripaket med 12 moduler" >}}

### Cell-to-Module (CtM) fördelar:

**Modularitet:** CtM-design gör att individuella batterimoduler kan bytas ut eller servas oberoende. Om en modul går sönder kan den bytas ut utan att hela batteripaketet påverkas.

**Termisk hantering:** Moduler ger utrymme för värmeledningskomponenter (som kylplattor eller vätskekylningskanaler). Detta hjälper till att reglera celltemperaturen och säkerställer optimal prestanda.

**Skalbarhet:** CtM-design ger flexibilitet vid konfiguration av batteripaket. Tillverkare kan justera antalet moduler för att möta olika fordonskrav (t.ex. räckvidd, effekt eller storlek).

**Säkerhet:** Att isolera celler i moduler ökar säkerheten. Om en cell upplever termisk flykt eller andra problem kommer det inte att direkt påverka närliggande celler.

**Tillverkningseffektivitet:** Att bygga moduler separat förenklar montering och kvalitetskontroll. Det möjliggör också parallell produktion av moduler, vilket effektiviserar tillverkningsprocessen.

{{<evkxdisplayaddarticle />}}

## Cell-to-pack

Cell-to-pack (CTP)-batterier är en ny typ av batteriteknologi som eliminerar behovet av batterimoduler genom att integrera cellerna direkt i paketet.

Flera företag, som Tesla, BYD och CATL, utvecklar denna teknik.

{{< sitefiguresized thumb="technology/battery/batterypack/catl_qilin_3_st.jpg" width="2222" height="1032" title="CATL Qilin cell-to-pack batteri" >}}

BYD Blade och CATL Qilin är två exempel på CTP-batterier. Den största skillnaden mellan dessa två batterier är deras kylsystem.

{{< sitefiguresized thumb="technology/battery/cell/bladebattery_st.jpg" width="3000" height="1351" title="BYD Blade Battery" >}}

BYD Blade använder ett vätskekylningssystem, medan CATL Qilin använder ett strukturellt kylsystem. De
strukturellt kylsystem är mer effektivt än vätskekylsystemet som används i BYD Blade.

### Cell-to-Pack (CtP) fördelar:

**Enkelhet:** CtP-designer eliminerar behovet av mellanliggande moduler, vilket minskar komplexiteten. Batteripaketet integrerar individuella celler direkt.

**Utnyttjande av utrymme:** Utan moduler är mer utrymme tillgängligt för celler, vilket potentiellt ökar energitätheten.

**Kostnadseffektivitet:** Färre komponenter (inga moduler) kan leda till kostnadsbesparingar i produktion och montering.

**Viktminskning:** Eliminering av modulhöljen minskar totalvikten, vilket förbättrar fordonets effektivitet.

## Strukturellt batteripaket

Ett strukturellt batteripaket är en typ av batteripaket som skapats så att det blir en strukturell komponent i elbilen.

Detta tillvägagångssätt kan minska elbilens vikt genom att ta bort dubbla strukturer mellan paketet och fordonsstrukturen, eftersom batteripaketet blir en del av fordonets struktur.

Denna design kan förbättra elbilens övergripande prestanda och effektivitet. Strukturella batteripaket är fortfarande relativt nya, men flera företag och forskningsinstitutioner undersöker och utvecklar dem.

Strukturella batteripaket, en spelväxlare i EV-design, erbjuder många fördelar. De minskar vikt och komplexitet, ökar prestanda och underlättar sömlös integrering av batteriteknik i olika applikationer.

Tesla Model Y och Tesla Cybertruck är två modeller som har strukturella paket. Enligt Tesla ger denna lösning många fördelar, som att avsevärt minska antalet delar som används i både batteripaketet och bilen.

{{< sitefiguresized thumb="technology/battery/batterypack/teslastructuralbattery_1_st.jpg" width="1585" height="714" title="Tesla 4680 Strukturpaket jämfört med ett traditionellt paket" >}}

Ännu viktigare, företaget sa att de nya cellerna och strukturpaketet förväntas öka Model Y:s räckvidd med 16 procent och minska bilens totalvikt med 10 procent, vilket resulterar i förbättrad acceleration och hantering.

{{< sitefiguresized thumb="technology/battery/batterypack/teslastructuralbattery_2_st.jpg" width="1344" height="645" title="Teslas strukturpaket fungerar som golvet på elbilen" >}}

Tesla använder rosa polyuretanskum för att kapsla in och säkra komponenterna i det strukturella batteripaketet. Detta skum fungerar som både en isolator och ett strukturellt element, vilket ger styvhet och skydd. Skummet ser till att battericellerna och andra kritiska komponenter förblir säkert på plats och fungerar som en brandvägg mellan olika delar av batteripaketet.

Detta skum är starkt som en tegelsten och bidrar till förpackningens övergripande strukturella integritet2

Videon nedan visar en detaljerad analys av förpackningen av Munro & Associates.

{{< youtube FXpfU6I_T3w >}}

## Energitäthet på batteripaketnivå

Följande tabell visar hur packdensiteten har varierat över tiden mellan några exempel på batteripaket.

<table class="table table-striped border">
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
            <td>Tesla Model 3 LFP</td>
            <td>2021</td>
            <td>60kWh</td>
            <td>477kg</td>
            <td>126Wh/kg</td>
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
            <td>BYD Seal LR (LFP)</td>
            <td>2022</td>
            <td>82.56kWh</td>
            <td>558kg</td>
            <td>148Wh/kg</td>
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

Om du vill få information om fler paket rekommenderar vi <a href="https://www.batterydesign.net/maximising-pack-energy-density/">BatteryDesign.net</a>


{{< pagenavigation b_url="../cell/" b_title="Celle format" f_url="../batterymanagment/" f_title="Batterihantering" >}}
