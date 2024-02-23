---
title: Equilibrio celular
linktitle: Equilibrio celular
description: El equilibrio de las celdas es importante para aprovechar al máximo la batería.
weight: 8
---
<!-- markdownlint-disable MD033 -->
El equilibrio celular es necesario cuando un grupo de células tiene un SOC más alto o más bajo que otros grupos de células.

<img src="cellbalancing.drawio.svg" class="img-fluid">

En este ejemplo, el grupo superior de celdas está cargado al 100 % y el procedimiento de carga está completo.
Sin embargo, el nivel de carga de la batería de alto voltaje es sólo del 96 %. Equilibrar significa que esta celda ahora se descarga a través de una resistencia y puede continuar cargándose hasta que todas las celdas alcancen el mismo nivel de carga. Esto permite que la batería de alto voltaje alcance su máxima capacitancia.

{{<evkxdisplayaddarticle />}}

Para ello, la unidad de control de regulación de la batería compara las tensiones de los grupos de celdas. Si los grupos de celdas tienen un voltaje de celda alto, la unidad de control de los módulos de batería responsable recibe la información de equilibrio. El equilibrio se realiza cuando las diferencias de tensión son superiores a aprox. El 1% se produce cuando se está cargando la batería de alto voltaje. Una vez desconectado el encendido, la unidad de control para la regulación de la batería comprueba si es necesario realizar un equilibrado y, en caso necesario, lo activa. El equilibrio típico se realiza a niveles de carga superiores al 30%.

<div class="mt-3 mb-3">
     <a href="../thermalmanagement/" class="text-decoration-none text-black"><strong><i class="bi-arrow-left"></i> Gestión térmica</strong>< /a>
     <a href="../charging/" class="text-decoration-none text-black float-end"><strong>Cargando <i class="bi-arrow-right"></i></strong ></a>
</div>