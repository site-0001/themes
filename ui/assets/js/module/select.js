export function init() {
  selectAll('[data-ext-fn="ext-select-all"]');
}

function selectAll($element) {
  const $el = queryAll($element);

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