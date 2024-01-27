---
title: Cellebalancering
linktitle: Cellebalancering
description: Cellebalansering er viktig for å få mest mulig ut av batteriet.
weight: 8
---
<!-- markdownlint-disable MD033 -->
Cellebalancering er nødvendig, når en gruppe af celler har en højere eller lavere SOC end andre grupper af celler.

<img src="cellbalancing.drawio.svg" class="img-fluid">

I dette eksempel er den øverste gruppe af celler 100 % opladet, og opladningsproceduren er fuldført.
Imidlertid er højspændingsbatteriets ladeniveau kun 96%. Balancering betyder, at denne celle nu aflades via en modstand og kan dermed fortsætte med at blive opladet, indtil alle cellerne har nået samme ladeniveau. Det betyder, at højspændingsbatteriet opnår sin maksimale kapacitet.

{{<evkxdisplayaddarticle />}}

For at gøre dette sammenligner batterireguleringskontrolenheden cellegruppernes spændinger. Hvis cellegrupper har høj cellespænding, modtager den ansvarlige batterimodulkontrolenhed balanceringsinformationen. Indregulering udføres, når spændingsforskelle på mere end ca. 1 % opstår, når højspændingsbatteriet oplades. Efter at tændingen er slået fra, kontrollerer batteristyringsenheden, om balancering er påkrævet, og udløser den om nødvendigt. Typisk afbalancering udføres ved ladningsniveauer over 30 %.

<div class="mt-3 mb-3">
     <a href="../thermalmanagement/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i> Termisk styring</strong>< /a>
     <a href="../charging/" class="text-decoration-none text-black float-end"><strong>Oplader <i class="bi-arrow-right"></i></strong ></a>
</div>