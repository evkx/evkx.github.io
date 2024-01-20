---
title: Batterihåndteringssystem
linktitle: Batterihåndteringssystem
description: Et Batterihåndteringssystem (BMS) er en kritisk komponent i et elektrisk kjøretøy (EV) som er ansvarlig for å administrere ytelsen, helsen og sikkerheten til batteriet.
weight: 5
---
<!-- markdownlint-disable MD033 -->
BMS er et sofistikert elektronisk system som overvåker og kontrollerer lading og utlading av batteriet, samt dets temperatur, ladetilstand (SOC) og helsetilstand (SOH).

BMS består av batteristyringskontroller (BMC) og cellemodulkontrollere (CMC).
CMC-ene er integrert direkte i modulene til høyspentbatteriet og forsyner BMC med målte verdier som cellespenning og temperatur.

I en EV spiller BMS en avgjørende rolle for å sikre optimal ytelse og levetid for batteriet. BMS gir følgende funksjoner:

**Celleovervåking:** BMS overvåker spenningen, temperaturen og SOC for hver enkelt celle i batteripakken. Dette lar den identifisere enhver celle som opererer utenfor normalområdet, og iverksette korrigerende tiltak for å forhindre skade eller degradering. De er også ansvarlige for cellebalansering.

**Ladekontroll:** BMS styrer ladeprosessen til batteriet, og sørger for at det lades trygt og effektivt. Den regulerer ladestrømmen, spenningen og temperaturen for å forhindre overlading, overoppheting og andre forhold som kan skade batteriet.

**Utladingskontroll:** BMS kontrollerer også utladingen av batteriet, og sikrer at batteriet brukes på en sikker og effektiv måte. Den regulerer utgangsspenningen og strømmen, og sørger for at batteriet ikke utlades utover sine sikre grenser. Som et eksempel. Det er BMS som begrenser strømmen på mange elbiler i kaldt vær for å beskytte batteriet.

{{<evkxdisplayaddarticle />}}

**Termisk styring:** BMS overvåker temperaturen på batteriet og styrer kjøle- og varmesystemene for å opprettholde det optimale temperaturområdet for batteriet. Dette bidrar til å forhindre overoppheting, som kan forårsake skade på batteriet, og opprettholde batteriets ytelse og levetid.

**State of Health (SOH)-overvåking:** BMS overvåker SOH-en til batteriet ved å analysere ytelsen og nedbrytningen over tid. Den gir advarsler og varsler når batteriets helse er kompromittert, og anbefaler vedlikehold eller utskifting når det er nødvendig.

{{< sitefiguresized thumb="technology/battery/batterymanagement/batterymanagement1_st.jpg" width="2000" height="1186" title="Battery management electronics for Audi e-tron battery pack" >}}

<div class="mt-3 mb-3">
    <a href="../batterypack/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i> Batteripakke og konfigurasjon</strong></a>
    <a href="../thermalmanagement/" class="text-decoration-none text-black float-end"><strong>Termisk styring <i class="bi-arrow-right"></i></strong></a>
</div>