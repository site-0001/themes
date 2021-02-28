'use strict';

// ---------------------------------------------------------------------------------------------------------------------
// Init.
// ---------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  extGallery();
  extSelectAll();
  extPopUp();
  extGoogleForm();
  extDiagram();
  extMap();
  extNavbarCanvas();
});

// ---------------------------------------------------------------------------------------------------------------------
// Navbar Canvas.
// ---------------------------------------------------------------------------------------------------------------------

function extNavbarCanvas() {
  const $data = $('[data-toggle="navbar-canvas"]');
  const $class = $('.navbar-collapse-canvas');

  $data.on('click', function () {
    $class.toggleClass('open')
  })
}

// ---------------------------------------------------------------------------------------------------------------------
// Gallery.
// ---------------------------------------------------------------------------------------------------------------------

function extGallery() {
  const $article = $('.article-body');
  const $gallery = $('.ext-gallery');

  $article.lightGallery({
    selector: '.gallery-item',
    galleryId: 2,
    share: 0
  });

  $gallery.lightGallery({
    selector: '.gallery-item',
    galleryId: 1,
    share: 0
  });
}

// ---------------------------------------------------------------------------------------------------------------------
// PopUp Share.
// ---------------------------------------------------------------------------------------------------------------------

function extPopUp() {
  const $el = $('.ext-popup');

  $el.on('click', function () {
    window.open(this.href, this.title, 'width=640,height=480,toolbar=0,status=0');
    return false;
  });
}

// ---------------------------------------------------------------------------------------------------------------------
// Select All.
// ---------------------------------------------------------------------------------------------------------------------

function extSelectAll() {
  const $el = $('.ext-select-all');

  $el.on('click', function () {
    $(this).select();
    document.execCommand('copy');
  });
}

// ---------------------------------------------------------------------------------------------------------------------
// Forms.
// ---------------------------------------------------------------------------------------------------------------------

function formStatus($element = $(this), $button = 'btn-primary btn-success', $icon = '') {
  $element.find(':submit').toggleClass($button).attr('disabled', true);
  $element.find(':submit i').toggleClass($icon);
}

function extGoogleForm() {
  const $el = $('.ext-google-form');

  $el.on('submit', function (e) {
    e.preventDefault();

    const $t = $(this);
    const $form = $t.data('google-form');
    const $fields = {};

    $.each($t.serializeArray(), function (i, field) {
      $fields[field.name] = field.value;
    });

    $.ajax({
      type: 'POST',
      url: 'https://docs.google.com/forms/d/e/' + $form + '/formResponse',
      data: $fields,
      dataType: 'xml',
      complete: function () {
        formStatus($t, 'btn-primary btn-success', 'fa-upload fa-check');
      }
    });

    return false;
  });
}

// ---------------------------------------------------------------------------------------------------------------------
// Diagram (Mermaid).
// ---------------------------------------------------------------------------------------------------------------------

function extDiagram() {
  const $font = 'inherit';
  const $config = {
    startOnLoad: true,
    fontFamily: $font,
    securityLevel: 'strict',
    flowchart: {
      fontFamily: $font
    },
    sequence: {
      fontFamily: $font,
      actorFontFamily: $font,
      noteFontFamily: $font,
      messageFontFamily: $font
    },
    gantt: {
      fontFamily: $font
    }
  };

  mermaid.initialize($config);
}

// ---------------------------------------------------------------------------------------------------------------------
// Map (Leaflet).
// ---------------------------------------------------------------------------------------------------------------------

function extMap() {
  const $el = $('.ext-map');

  $el.each(function () {
    let $map, $marker;
    const $id = $(this).attr('id');
    const $data = $(this).data();

    $map = L.map($id, {
      preferCanvas: true,
      attributionControl: false,
      zoomControl: false
    }).setView([$data.mapLat, $data.mapLon], $data.mapZoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo($map);

    if ($data.mapMarkerLat && $data.mapMarkerLon) {
      $marker = L.marker([$data.mapMarkerLat, $data.mapMarkerLon]).addTo($map);
    }

    if ($data.mapMarkerTxt) {
      $marker.bindPopup($data.mapMarkerTxt);
    }
  });
}
