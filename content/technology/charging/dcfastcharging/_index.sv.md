---
title: DC snabbladdning
linktitle: DC snabbladdning
description: DC snabbladdning är det snabbaste och bekvämaste sättet att ladda en elbil på vägen.
weight: 3
---
<!-- markdownlint-disable MD033 -->
Den använder en hög effekt DC (Direct Current) för att leverera upp till 1000 volt och 250 ampere. Höghastighetsladdning kan öka räckvidden med upp till 200 miles på bara 20 till 30 minuter, vilket gör att den snabbt kan ladda ett elbilsbatteri för långdistanskörning.

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/charging_1_st.jpg" width="3000" height="2001" title="BMW i4 M50 DC Snabbladdning" >}}

## DC snabbladdning tillgänglig

DC-snabbladdning kan vara enkel, tillgänglig, komplex och utmanande, beroende på var du bor och vilken bil du kör. Vissa områden har väldigt få laddare och kräver planering för att skapa en laddningsrutt, medan andra har många laddare där du kan stanna och ladda när det behövs.

Denna tillgänglighet kan variera mycket mellan märken. Även om Tesla har kompressorer inom många områden är det nästan omöjligt att hitta en laddstation med en Chademo-kontakt till din Nissan Leaf.

Nedan ser du alla laddarplatser för [Electrify America](https://www.electrifyamerica.com/locate-charger/), några mycket täta områden, medan det i andra områden är många mil/km mellan laddare.

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/chargermap_st.jpg" width="2392" height="1160" title="Electrify America charging location map 10 juni 2023" >}}

## DC snabbladdningsprestanda

Laddningshastigheten kan också variera kraftigt mellan elbilsmodeller, laddningsstationer och till och med mellan laddningssessioner.

Det finns två typiska orsaker till att laddningshastigheten varierar mellan två laddningstillfällen för samma elbil på samma laddare.

### Batteritemperaturen

Batteritemperaturen är den mest kritiska faktorn för batteriets laddningshastighet. Den optimala batteritemperaturen är vanligtvis 25-35 grader. Om temperaturen är för låg sänker BMS laddningshastigheten för att skydda batteriet. Det kan få dig ner till bara 25 % av det optimala priset.

Många elbilar har nu lagt till batterivärme som kan aktiveras när du navigerar till en laddare via navigationssystemet eller manuellt utlöser den.

### Laddningskurvan

Laddkurvan beskriver hur snabbt en elbil kan ladda för en given laddningsprocent. Vanligtvis är denna laddningskurva inte platt, vilket betyder att vid 10 % laddningstillstånd är laddningshastigheten annorlunda än vid 80 %.

Hur laddningskurvan ser ut varierar stort mellan modellerna. Vissa kan ha en platt kurva på upp till 80 %, medan andra har en djupdykning i hastighet från ett lågt laddningstillstånd. Maxhastigheten varierar från under 100KW till över 300KW mellan modellerna.

Nedan ser du laddningskurvan för Lucid Air Dream Edition Performance. Laddkurvan har en djupdykning från början. Att ladda 30% från 50-80% tar 20 minuter, medan laddning av 30% från 5%-35% bara tar 9 minuter.<img src="../../../models/lucid/air/air_dream_edition_performance/chargingcurve.svg" class="img-fluid">


Om du behöver hålla laddningsstoppen så korta som möjligt, identifiera det optimala laddningsområdet för din elbil. EVKX.net hjälper dig med det. Vi har detaljerad information om laddningsprestanda för varje modell i vår [EV-databas](/evsearch/), med laddningskurvor och beräkning av optimala laddningsstopp för de olika modellerna.
## Ruttplanering med laddning

De flesta elbilar erbjuder ruttplaneringsfunktioner, inklusive DC-snabbladdningsstopp för att nå din destination. Denna ruttplanering är en del av [navigationssystemet](../../infotainment/navigation/).

Vanligtvis ser du den förväntade ankomstavgiftsnivån för laddstationer och hur mycket du behöver ladda för att nå nästa laddstation

## Plug&Charge

En av de största utmaningarna för elbilsförare är bekvämligheten och säkerheten med att ladda sina fordon. För närvarande behöver de flesta elbilsförare ett RFID-kort, en app eller en kontaktlös betalningsmetod för att starta en laddningssession vid en offentlig laddstation. Detta kan vara krångligt och tidskrävande, särskilt om flera laddningsnätverk har olika betalningssystem och autentiseringsmetoder.

En ny teknik lovar dock att göra elbilsladdningen mycket mer tillgänglig och säkrare: plug and charge. Plug and charge är en funktion av den internationella standarden ISO 15118, som definierar kommunikationsprotokollet mellan elbilar och laddstationer. Med plug and charge kan elbilsförare ansluta sina fordon till en kompatibel laddstation och laddningssessionen startar automatiskt utan några ytterligare steg eller enheter.

### Hur fungerar plug and charge?

Plug and charge använder kryptografiska certifikat för att identifiera och autentisera elbilen och laddstationer. Dessa certifikat utfärdas av betrodda myndigheter och lagras i säkra hårdvarumoduler inuti elbilen och laddstationen. När en elbil ansluts till en laddstation som stöder plug and charge byter de ut certifikaten och upprättar en säker kommunikationsuppkoppling. Laddstationen verifierar sedan elbilens identitet och auktoriserar laddningssessionen utifrån elbilens avtal med mobilitetsleverantören (MSP). MSP är enheten som ger elbilsföraren tillgång till laddtjänster och sköter fakturering och betalning.

Plug and charge-processen säkerställer konfidentialitet, dataintegritet och autenticitet för kommunikationen mellan elbilen och laddstationen. Det möjliggör också dynamisk tariffer, lastbalansering, smart grid-integration och fjärruppdateringar av firmware. Plug and charge kan användas för både AC- och DC-laddning och trådlös laddning.

[Hubject](https://www.hubject.com/) är företaget som hanterar certifikat baserat på protokollet.## De vanligaste laddningsnätverken efter plats

### Förenta staterna

Det finns flera laddningsnätverk i USA för elbilar. Enligt US Department of Energy har Tesla över **1 600 Supercharger-stationer** i USA, med över **17 000 snabbladdningsportar**. Electrify America är nästa på tur, med cirka **800 stationer**.

Här är några av de största laddningsnätverken för elbilar i USA:

– [Electrify America](https://www.electrifyamerica.com/): Det största DC-snabbladdningsnätverket för de flesta EV-modeller. De är öppna för alla elbilar med en CCS-laddningsanslutning (industristandarden) och för närvarande de få fordon som fortfarande använder CHAdeMO som Nissan Leaf.

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/teslasupercharger_1_st.jpg" width="3000" height="1948" title="Tesla Supercharger location" >}}

- [Tesla Superchargers](https://www.tesla.com/findus/list/superchargers/United+States): Teslas Supercharger-nätverk är det största i landet, med mindre avstånd mellan stationerna jämfört med Electrify America. De flesta superladdare kräver en NACS-port på elbilen, men de bygger ut laddare med Magic Dock som stöder CCS1-elbilar. Se laddare [här](https://www.tesla.com/findus?v=2&bounds=60.61822541172234%2C-37.567384000000004%2C18.24809425121173%2C-150.60party=zoom136party=zoom136party=zoom136party=zoom17)&filter

– [EVgo](https://www.evgo.com/): DC-snabbladdning är inte begränsad till bilresor. EVgo har över **800 snabbladdningsplatser** i 34 delstater och mer än 65 storstadsområden.

- [ChargePoint](https://driver.chargepoint.com/mapCenter/37.26709110057841/-121.95591497824141/18): ChargePoint har över **115 000 laddningspunkter** i Nordamerika och Europa¹.


### Europa

Det finns flera laddningsnätverk i Europa för elbilar. Här är några av de största laddningsnätverken för elbilar i Europa:

{{< sitefiguresized thumb="technology/charging/ontheroadcharging/ionity_1_st.jpg" width="3000" height="2000" title="Ionity laddstation" >}}

- Ionity: Ett kraftfullt laddstationsnätverk för elbilar som möjliggör långväga resor över hela Europa. Det grundades som ett joint venture mellan BMW Group, Mercedes-Benz Group, Ford Motor Company och Volkswagen Group².

- Plugsurfing: Ett europeiskt nätverk du kan använda för att ladda en elbil i Europa. Med den unika nyckeln eller kortet – som kostar €9,95 – och den kostnadsfria smartphone-appen kan du använda över 200 000 laddare, inklusive de från olika nätverk som Allego, EnBW, Eon, Innogy, IONITY och Vattenfall.

- Maingau: Genom sin EinfachStromLaden smartphone-app, laddningschip eller kort kan du ladda en elbil i Tyskland, Österrike eller Schweiz vid 50 000 laddningspunkter med Maingau.