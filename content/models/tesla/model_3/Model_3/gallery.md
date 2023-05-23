---
title: Tesla Model 3 gallery
linktitle: Image Gallery
description: See below for our large Tesla Model 3 image gallery. Click pictures for high-resolution versions.
weight: 10
hidden: true
---
<!-- markdownlint-disable MD033 -->
<object type="image/svg+xml" data="../modelnavigation.svg"></object>
<div class="pswp-gallery pswp-gallery--single-column" id="my-gallery">
</div>
<script type="module">
  import PhotoSwipeLightbox from '/js/photoswipe-lightbox.esm.js';
    const lightbox = new PhotoSwipeLightbox({
       gallery: '#my-gallery',
        children: 'a',
        pswpModule: () => import('/js/photoswipe.esm.js')
    });
lightbox.init();
</script>
