export function popUp() {
  const $el = $('.ext-popup');

  $el.on('click', function () {
    window.open(this.href, this.title, 'width=640,height=480,toolbar=0,status=0');
    return false;
  });
}