export function init() {
  const $elGallery = queryAll('.article-body');

  [].forEach.call($elGallery, (i) => {
    lightGallery(i, {
      selector: '.gallery-item'
    });
  });
}

function queryAll($element) {
  return document.querySelectorAll($element);
}