---
title: WLTP rekkevidde testing
linktitle: WLTP
description: Worldwide Harmonized Light Vehicles (WLTP) er en global standard for å bestemme rekkevidden til elektriske kjøretøy.
weight: 2
---
<!-- markdownlint-disable MD033 -->

För bilar som säljs i Europa efter september 2017 är det ett krav att använda denna standard. Denna standard ersatte NEDC.

## Hur testas det?

Testförfarandet [beskrivs i detalj](https://unece.org/transport/documents/2021/02/standards/un-regulation-no-154-worldwide-harmonized-light-vehicles-test) av FN.

Kort sagt, det nya WLTP-förfarandet bygger på de nya körcyklerna (WLTC – Worldwide harmonized Light-duty vehicles Test Cycles) för att mäta räckvidden.

WLTP-cykeln har fyra undersektioner, var och en med olika maxhastighet. Den totala testcykeltiden är 30 minuter (1800 sekunder).

<div class="table-responsive">
    <table class="table table-striped">
        <thead>
            <tr>
            <th>#
            </th>
            <th>City
            </th>
            <th>Suburban
            </th>
            <th>Rural
            </th>
            <th>Highway
            </th>
            <th>Total
            </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Duration, Seconds 
                </td>
                <td>589
                </td>
                <td>483
                </td>
                <td>455
                </td>
                <td>323
                </td>
                <td>1800
                </td>
            </tr>
            <tr>
                <td>Stop, seconds
                </td>
                <td>150
                </td>
                <td>49
                </td>
                <td>31
                </td>
                <td>8
                </td>
                <td>235
                </td>
            </tr>
            <tr>
                <td>Distance in meter
                </td>
                <td>3095
                </td>
                <td>4756
                </td>
                <td>7162
                </td>
                <td>8254
                </td>
                <td>23266
                </td>
            </tr>
                <tr>
                <td>Percent stop
                </td>
                <td>26.5% 
                </td>
                <td>11.1%
                </td>
                <td>6.8%
                </td>
                <td>2.2%
                </td>
                <td>13.5% 
                </td>
            </tr>
                <tr>
                <td>Max speed
                </td>
                <td>56.5
                </td>
                <td>76.6
                </td>
                <td> 97.4
                </td>
                <td>131.3
                </td>
                <td>
                </td>
            </tr>
                <tr>
                <td>Average speed w/o stop
                </td>
                <td>25.3
                </td>
                <td>44.5
                </td>
                <td>60.7
                </td>
                <td>94
                </td>
                <td>53.5
                </td>
            </tr>
                <tr>
                <td>Avg speed w stop
                </td>
                <td>18.9
                </td>
                <td>39.4
                </td>
                <td>56.5
                </td>
                <td>91.7
                </td>
                <td>46.5
                </td>
            </tr>
            <tr>
                <td>Min acceleration  m/s^2
                </td>
                <td>-1.5 
                </td>
                <td>-1.5
                </td>
                <td>-1.5
                </td>
                <td>- 1.44
                </td>
                <td>
                </td>
            </tr>
            <tr>
                <td>Max acceleration  m/s^2
                </td>
                <td>1.611
                </td>
                <td>1.611
                </td>
                <td>1.666
                </td>
                <td>1.055
                </td>
                <td>
                </td>
            </tr>
        </tbody>
    </table>
</div>

Grafen nedan visar hastigheten för de olika cyklerna.

{{< sitefiguresized thumb="guides/understandingrange/wltp/wltpcycle3_st.png" width="2914" height="1914" title="WLTP cykel 3B" >}}


Testet görs på en dynamometer för att få samma förhållanden. De

-23 grader Celsius
- A/C avstängd
– Lamporna är släckta

Förutom dynamometertestet ska tillverkaren testa bilen i vindtunnel. Testet kommer att resultera i en dragkoefficient och en frontal areastorlek som används för att beräkna WLTP-intervallet.

{{< sitefiguresized thumb="guides\understandingrange\wltp\windtunnel_st.jpg" width="3000" height="1539" title="Audi e-tron i en vindtunnel" >}}

## Resultatet beror på utrustningsnivån

För många modeller kommer vissa alternativ att påverka utbudet. Dessa alternativ kan vara större hjul, soltak, virtuella speglar och andra faktorer som förändrar vikt eller aerodynamik.

För modeller med dessa alternativ måste tillverkaren utföra två tester. Ett test med maximala alternativ och ett med minimala alternativ.

Tillverkaren kan beräkna intervallet för olika tillvalslayouter utifrån dessa siffror.

## Hur korrekt är det?

Att köra ett test utan AC, värme och ljus vid 23 grader Celcius ger inte korrekt förbrukning i många verkliga scenarier.

I värsta fall kommer att köra på motorväg i kraftigt regn i kallt väder förmodligen bara ge 50-60 % procent av det angivna WLTP-räckvidden.

I modelldatabasen EVKX.net inkluderar vi både max och min WLTP-räckvidd tillsammans med förväntat verkligt räckvidd.