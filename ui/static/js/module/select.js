export function all() {
  const $el = queryAll('.ext-select-all');

  Array.from($el).forEach(i => {
    i.addEventListener('click', (e) => {
      i.select();
      document.execCommand('copy');
    });
  });
}

function queryAll($element) {
  return document.querySelectorAll($element);
}