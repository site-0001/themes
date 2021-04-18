export function init() {
  popUp('.ext-popup');
}

function popUp($element) {
  const $el = queryAll($element);

  Array.from($el).forEach($i => {
    eventPopUp($i);
  });
}

function eventPopUp($i) {
  let $event;

  $event = $i.addEventListener('click', ($e) => {
    $e.preventDefault();
    window.open($i.href, $i.title, 'width=640,height=480,toolbar=0,status=0');
  });

  return $event;
}

function queryAll($element) {
  return document.querySelectorAll($element);
}