export function all() {
  const $el = $('.ext-select-all');

  $el.on('click', function () {
    $(this).select();
    document.execCommand('copy');
  });
}