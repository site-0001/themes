export function init() {
  gallery('.article-body', '[data-ext-fn="ext-gallery-item"]');
}

function gallery($wrapper, $image) {
  const $el = queryAll($wrapper);

  Array.from($el).forEach($i => {
    eventGallery($i, $image)
  });
}

function eventGallery($i, $image) {
  let $gallery;

  $gallery = lightGallery($i, {
    selector: $image
  });

  return $gallery;
}

function queryAll($element) {
  return document.querySelectorAll($element);
}