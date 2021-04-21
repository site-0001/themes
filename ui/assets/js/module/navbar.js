export function init() {
  toggle();
}

function toggle() {
  const $document = document.documentElement;
  const $header = query('.navbar');

  let $prevScroll = window.scrollY || $document.scrollTop;
  let $curScroll;
  let $direction = 0;
  let $prevDirection = 0;

  console.log($header.offsetHeight);

  let $checkScroll = function () {

    /**
     * Find the direction of scroll
     * 0 - initial, 1 - up, 2 - down
     */

    $curScroll = window.scrollY || $document.scrollTop;
    if ($curScroll > $prevScroll) {
      //scrolled up
      $direction = 2;
    } else if ($curScroll < $prevScroll) {
      //scrolled down
      $direction = 1;
    }

    if ($direction !== $prevDirection) {
      $toggleNavbar($direction, $curScroll);
    }

    $prevScroll = $curScroll;
  };

  let $toggleNavbar = function ($direction, $curScroll) {
    if ($direction === 2 && $curScroll > $header.offsetHeight) {
      $header.setAttribute('style', 'top: -' + $header.offsetHeight + 'px;');
      $prevDirection = $direction;
    } else if ($direction === 1) {
      $header.removeAttribute('style');
      $prevDirection = $direction;
    }
  };

  window.addEventListener('scroll', $checkScroll);
}

function query($element) {
  return document.querySelector($element);
}
