export function init() {
  qrcode('[data-ext-fn="ext-qrcode"]');
}

function qrcode($element) {
  const $el = queryAll($element);
  let $text;

  Array.from($el).forEach($i => {
    $text = attr($i, 'data-ext-text');
    QRCode.toCanvas($i, $text);
  });
}

function queryAll($element) {
  return document.querySelectorAll($element);
}

function attr($i, $attr) {
  return $i.getAttribute($attr);
}