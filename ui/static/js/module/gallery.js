export function init() {
  const $el = queryAll('.article-body');

  Array.from($el).forEach(i => {
    lightGallery(i, {
      selector: '.gallery-item'
    });
  });
}

function queryAll($element) {
  return document.querySelectorAll($element);
}