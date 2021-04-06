export function init() {
  const $article = $('.article-body');
  const $gallery = $('.ext-gallery');

  $article.lightGallery({
    selector: '.gallery-item',
    galleryId: 2,
    share: 0
  });

  $gallery.lightGallery({
    selector: '.gallery-item',
    galleryId: 1,
    share: 0
  });
}