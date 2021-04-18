export function init() {
  msg(['']);
}

function msg($message) {
  let $item;

  $item = $message[Math.floor(Math.random() * $message.length)];
  log($item, 'font-size: 2rem;');
}

function log($text, $style = '') {
  console.log('%c' + $text, $style);
}