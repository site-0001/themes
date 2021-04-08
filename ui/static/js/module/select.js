export function all() {
  const $el = queryAll('.ext-select-all');

  Array.from($el).forEach($i => {
    eventSelectAll($i);
  });
}

function eventSelectAll($i) {
  let $event;

  $event = $i.addEventListener('click', ($e) => {
    $i.select();
    document.execCommand('copy');
  });

  return $event;
}

function queryAll($element) {
  return document.querySelectorAll($element);
}