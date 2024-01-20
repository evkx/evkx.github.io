---
title: Cellbalansering
linktitle: Cellbalansering
description: Cellbalansering är viktigt för att få ut så mycket som möjligt av batteriet.
weight: 8
---
<!-- markdownlint-disable MD033 -->
Cellbalansering är nödvändig när en grupp av celler har en högre eller lägre SOC än andra grupper av celler.

<img src="cellbalancing.drawio.svg" class="img-fluid">

I det här exemplet är den översta gruppen av celler 100 % laddad och laddningsproceduren är klar.
Högspänningsbatteriets laddningsnivå är dock endast 96 %. Balansering gör att denna cell nu laddas ur via ett motstånd och kan därmed fortsätta att laddas tills alla celler har nått samma laddningsnivå. Detta gör att högspänningsbatteriet når sin maximala kapacitet.

{{<evkxdisplayaddarticle />}}

För att göra detta jämför batteriregleringsstyrenheten cellgruppernas spänningar. Om cellgrupper har hög cellspänning tar den ansvariga batterimodulstyrenheten emot balanseringsinformationen. Balansering utförs när spänningsskillnader större än ca. 1 % inträffar när högspänningsbatteriet laddas. Efter att tändningen stängts av kontrollerar batterihanteringsenheten om balansering krävs och utlöser den vid behov. Typisk balansering utförs vid laddningsnivåer över 30 %.

<div class="mt-3 mb-3">
    <a href="../thermalmanagement/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i> Termisk hantering</strong></a>
    <a href="../charging/" class="text-decoration-none text-black float-end"><strong>Laddning <i class="bi-arrow-right"></i></strong></a>
</div>
