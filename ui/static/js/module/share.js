export function popUp() {
  const $el = queryAll('.ext-popup');

  Array.from($el).forEach(i => {
    i.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(i.href, i.title, 'width=640,height=480,toolbar=0,status=0');
    });
  });
}

function queryAll($element) {
  return document.querySelectorAll($element);
}