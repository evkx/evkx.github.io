---
title: WLTP rekkevidde testing
linktitle: WLTP
description: Worldwide Harmonized Light Vehicles (WLTP) er en global standard for å bestemme rekkevidden til elektriske kjøretøy.
weight: 2
---
<!-- markdownlint-disable MD033 -->

For biler som selges i Europa etter september 2017 er det et krav å bruke denne standarden. Denne standarden erstattet NEDC.

## Hvordan testes det?

Testprosedyren er [beskrevet i detalj](https://unece.org/transport/documents/2021/02/standards/un-regulation-no-154-worldwide-harmonized-light-vehicles-test) av FN.

Kort sagt, den nye WLTP-prosedyren er avhengig av de nye kjøresyklusene (WLTC – Worldwide harmonized Light-duty vehicles Test Cycles) for å måle rekkevidden.

WLTP-syklusen har fire underdeler, hver med forskjellig maksimal hastighet. Den totale testsyklustiden er 30 minutter (1800 sekunder).

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

Grafen nedenfor viser hastigheten for de forskjellige syklusene.

{{< sitefiguresized thumb="guides/understandingrange/wltp/wltpcycle3_st.png" width="2914" height="1914" title="WLTP cycle 3B" >}}


Testen gjøres på dynamometer for å få de samme forholdene. De

- 23 grader Celsius
- A/C slått av
- Lysene er slått av

I tillegg til dynamometertesten skal produsenten teste bilen i vindtunnel. Testen vil resultere i en luftmotstandskoeffisient og en frontarealstørrelse som brukes til å beregne WLTP-området.

{{< sitefiguresized thumb="guides\understandingrange\wltp\windtunnel_st.jpg" width="3000" height="1539" title="Audi e-tron i en vindtunnel" >}}

## Resultatet avhenger av utstyrsnivået

For mange modeller vil noen alternativer påvirke rekkevidden. Disse alternativene kan være større hjul, soltak, virtuelle speil og andre faktorer som endrer vekt eller aerodynamikk.

For modeller med disse alternativene må produsenten ta to tester. En test med maksimale alternativer og en med minimumsalternativer.

Produsenten kan beregne rekkevidden for ulike alternativoppsett fra disse tallene.

## Hvor riktig er det?

Å kjøre en test uten AC, oppvarming og lys ved 23 grader Celcius vil ikke gi riktig forbruk i mange virkelige scenarier.

I verste fall vil kjøring på motorvei i kraftig regn i kaldt vær sannsynligvis bare gi 50-60 % prosent av den oppgitte WLTP-rekkevidden.

I EVKX.net-modelldatabasen inkluderer vi både maks og minimum WLTP-rekkevidde sammen med forventet rekkevidde i den virkelige verden.