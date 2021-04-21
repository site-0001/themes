import Headroom from './vendor/headroom.min.js';

export function init() {
  const $header = query('.navbar');
  const $headroom = new Headroom($header);
  $headroom.init();
}

function query($element) {
  return document.querySelector($element);
}
