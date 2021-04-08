export function init() {
  document.addEventListener('DOMContentLoaded', () => {
    konamify('arrowuparrowuparrowdownarrowdownarrowleftarrowrightarrowleftarrowrightbaenter');
  });
}

function konamify($keys) {
  let $buffer = [];
  let $lastKeyTime = Date.now();
  let $modal = new bootstrap.Modal(query('#ext-egg'));

  document.addEventListener('keydown', (e) => {
    const $key = e.key.toLowerCase();
    const $currentTime = Date.now();

    if ($currentTime - $lastKeyTime > 1000) {
      $buffer = [];
    }

    $lastKeyTime = $currentTime;
    $buffer.push($key);

    if ($buffer.join('') === $keys) {
      $modal.show();
    }
  });
}

function query($element) {
  return document.querySelector($element);
}