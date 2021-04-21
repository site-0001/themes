import Headroom from './vendor/headroom.min.js';

export function init() {
  toggle('.navbar');
}

function toggle($element) {
  const $header = query($element);
  const $headroom = new Headroom($header);
  $headroom.init();
}

function query($element) {
  return document.querySelector($element);
}