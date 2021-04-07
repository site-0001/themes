export function init() {
  const $elGallery = queryAll('.ext-gallery');

  [].forEach.call($elGallery, (i) => {
    lightGallery(i, {
      selector: '.gallery-item'
    });
  });
}

function queryAll($element) {
  return document.querySelectorAll($element);
}