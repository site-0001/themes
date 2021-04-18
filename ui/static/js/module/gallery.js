export function init() {
  const $el = queryAll('.article-body');

  Array.from($el).forEach($i => {
    eventGallery($i)
  });
}

function eventGallery($i) {
  let $gallery;

  $gallery = lightGallery($i, {
    selector: '.ext-gallery-item'
  });

  return $gallery;
}

function queryAll($element) {
  return document.querySelectorAll($element);
}