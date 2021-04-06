export function init() {
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