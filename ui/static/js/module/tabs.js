export function init() {
  active('ul.ext-node-tabs', 'button[data-bs-toggle="tab"]');
  active('div.ext-node-storage-tabs', 'button[data-bs-toggle="pill"]');
}

function active($element, $tabs) {
  if (!query($element)) {
    return false;
  }

  const $elID = attr($element, 'id');
  const $elTabs = queryAll($tabs);
  const $storageItem = $elID + '-active';

  Array.from($elTabs).forEach($i => {
    eventActive($i, $storageItem)
  });

  const $tabActive = storeGet($storageItem);

  if ($tabActive) {
    const $tab = query('button[data-bs-target="' + $tabActive + '"]');
    const $bsTab = new bootstrap.Tab($tab);
    $bsTab.show()
  }
}

function eventActive($i, $s) {
  $i.addEventListener('show.bs.tab', ($e) => {
    storeSet($s, $i.dataset.bsTarget);
  });
}

function storeSet($name, $value) {
  return localStorage.setItem($name, $value);
}

function storeGet($item) {
  return localStorage.getItem($item);
}

function query($element) {
  return document.querySelector($element);
}

function queryAll($element) {
  return document.querySelectorAll($element);
}

function attr($element, $attr) {
  return document.querySelector($element).getAttribute($attr);
}