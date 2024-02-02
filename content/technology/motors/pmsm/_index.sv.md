---
title: Permanent magnet synkronmotorer
linktitle: PMSM
description: En Permanent Magnet Synchronous Motor (PMSM) är en elektrisk motor som använder permanentmagneter på rotorn för att generera ett magnetfält som interagerar med statorlindningen för att producera mekanisk rotation. PMSM används ofta i olika applikationer, inklusive elfordon, industriella maskiner och apparater.
weight: 2
---
<!-- markdownlint-disable MD033 -->

{{<evkxdisplayaddarticle />}}

## Hur fungerar det

**Rotor:** Rotorn på en PMSM innehåller permanentmagneter som genererar ett fast magnetfält. Magneterna är vanligtvis gjorda av material som neodymjärnbor (NdFeB) eller samariumkobolt (SmCo) som har hög magnetisk styrka.

{{< sitefiguresized thumb="technology/motors/pmsm/porschetaycanrotor_st.jpg" width="3000" height="1687" title="Porsche Taycan Rotor med permanenta magneter" >}}

Vanligtvis har rotorn 6 eller 8 magnetiska poler.

**Stator:** Statorn är den stationära delen av motorn och består av lindningar lindade runt statorpolerna. Dessa lindningar är vanligtvis gjorda av koppar och förses med växelström (AC) för att skapa ett magnetfält som samverkar med rotorn.

{{< sitefiguresized thumb="technology/motors/pmsm/porschetaycanstator_st.jpg" width="3000" height="1687" title="Porsche Taycan Stator" >}}

**Kommutering:** PMSM förlitar sig på elektronisk kommutering för att styra motorns riktning och hastighet. Sensorer, såsom Hall-effektsensorer eller pulsgivare, används för att detektera rotorns position och ge feedback till motorstyrningen. Baserat på denna feedback bestämmer motorstyrenheten när och hur statorlindningarna ska slås på och av för att skapa ett roterande magnetfält som driver rotorn.

**Synkronisering:** Det magnetiska fältet som genereras av statorlindningarna måste synkroniseras med rotorns position för att uppnå effektiv och smidig drift. Detta görs vanligtvis med hjälp av en teknik som kallas fältorienterad styrning (FOC) eller vektorstyrning, som justerar amplituden och fasen för statorströmmen för att anpassa den till rotorns position.

**Vridmomentproduktion:** Eftersom det roterande magnetfältet som genereras av statorn interagerar med permanentmagneterna på rotorn, utövar det ett vridmoment på rotorn, vilket får den att rotera. Vridmomentet som produceras av motorn kan styras genom att justera statorströmmens amplitud och frekvens, vilket i sin tur bestämmer styrkan och hastigheten på det roterande magnetfältet.

{{<evkxdisplayaddarticle />}}

**Strömförsörjning:** PMSM kräver en strömkälla som kan ge rätt växelspänning och frekvens till statorlindningarna. Detta uppnås vanligtvis genom att använda en växelriktare, som omvandlar en DC-spänning från en strömkälla, såsom ett batteri eller elnät, till den växelspänning och frekvens som krävs för motorn.

Sammanfattningsvis använder en PMSM permanentmagneter på rotorn, statorlindningar, elektronisk kommutering och synkroniseringstekniker för att generera ett roterande magnetfält som driver rotorn och producerar mekanisk rotation. Motorns vridmoment och hastighet kan styras genom att justera statorströmmens amplitud och frekvens med hjälp av en växelriktare och en motorstyrenhet.

## Fördelar

En av de främsta fördelarna med synkronmotorer i elbilar är deras högre effekttäthet. Permanenta magneter i rotorn på en synkronmotor ger ett konstant magnetfält, vilket resulterar i högre vridmoment och effekt jämfört med asynkronmotorer av liknande storlek. Detta gör synkronmotorer särskilt lämpliga för högpresterande elfordon som kräver snabb acceleration och höga hastigheter.

Synkronmotorer i elbilar är också kända för sin exakta och effektiva styrning. De kan styras exakt med hjälp av avancerad kraftelektronik, såsom motorstyrenheter eller växelriktare, som ger optimal prestanda och förbättrad energihantering. Detta möjliggör funktioner som vridmomentvektor, där vridmomentet kan styras oberoende för varje hjul, vilket förbättrar dragkraft och hantering under olika körförhållanden.

En annan fördel med synkronmotorer är deras förmåga att uppnå hög verkningsgrad över ett brett spektrum av hastigheter och belastningar. Detta möjliggör effektiv drift vid både låga och höga hastigheter, vilket är särskilt användbart i elfordon som kräver olika nivåer av effekt och vridmoment beroende på körförhållandena.

{{<evkxdisplayaddarticle />}}

## Begränsningar

**Sällsynta jordartsmetaller:** PMSM kräver magneter för sällsynta jordartsmetaller, vilket kan vara kostsamt och ha miljöpåverkan när det gäller gruvdrift och hållbarhet.

**Drag vid utrullning:** När ett elfordon (EV) rullar eller rullar på utan ström kan elmotorn skapa en drageffekt, som ofta kallas "motormotstånd" eller "runaway drag". Detta motstånd orsakas av de elektromagnetiska krafterna inuti motorn, som kan motstå rotorns rörelse och skapa motstånd mot fordonets rörelse.

När det gäller permanentmagnetmotorer, som har magneter i rotorn, kan det generera mer motstånd när motorn inte drivs. Magneterna i rotorn skapar ett fast magnetfält, vilket kan skapa ytterligare motstånd mot rotorns rörelse, vilket resulterar i högre motormotstånd jämfört med induktionsmotorer. Men permanentmagnetmotorns motstånd kan också bero på den specifika konstruktionen och styrstrategin som används, eftersom vissa permanentmagnetmotorer kan ha minskat motstånd på grund av avancerade motorstyrningstekniker.

Vissa elbilstillverkare använder en koppling för att koppla bort motorn från drivlinan, vilket effektivt kopplar bort motorn från hjulen och låter fordonet rulla utan motormotstånd. Detta kan bidra till att minska det motstånd som hjulen känner när motorn inte är igång, vilket kan förbättra fordonets effektivitet och minska energiförbrukningen.

{{< sitefiguresized thumb="technology/motors/pmsm/mercedeseqesuvfrontmotordisconnect_st.jpg" width="3000" height="1687" title="Mercedes EQE Suv med koppling som kopplar bort frontmotorn vid utrullning" >}}

Andra använder induktionsmotorer fram och PSMS bak. Exempel är all vård baserad på Volkswagen MEB-plattformen.

Om du vill lära dig ännu mer om PSMS-motorer rekommenderar vi att du tittar på den här videon där Lucid förklarar deras PMSM-design och jämför den med andra

{{< youtube U7IHZxNC6hc >}}


<div class="mt-3 mb-3">
    <a href="../asm/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i> Induktionsmotorer</strong></a>
    <a href="../wrsm/" class="text-decoration-none text-black float-end"><strong>WRSM<i class="bi-arrow-right"></i></strong></a>
</div>