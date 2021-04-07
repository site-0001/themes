export function all() {
  const $el = queryAll('.ext-select-all');

  [].forEach.call($el, (i) => {
    i.addEventListener('click', (e) => {
      i.select();
      document.execCommand('copy');
    });
  });
}

function queryAll($element) {
  return document.querySelectorAll($element);
}