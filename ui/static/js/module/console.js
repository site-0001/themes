export function msg() {
  let $msg, $item;

  $msg = [''];

  $item = $msg[Math.floor(Math.random() * $msg.length)];
  text($item, 'font-size: 2rem;');
}

function text($text, $style = '') {
  console.log('%c' + $text, $style);
}