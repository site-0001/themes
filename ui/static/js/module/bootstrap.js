export function nodeActiveTab() {
  if (!query('ul.node-tabs')) {
    return false;
  }

  const $elID = attr('ul.node-tabs', 'id');
  const $elTabs = queryAll('button[data-bs-toggle="tab"]');
  const $storageItem = $elID + '-active';

  Array.from($elTabs).forEach($i => {
    eventActiveTab($i, $storageItem)
  });

  const $activeTab = storeGet($storageItem);

  if ($activeTab) {
    const $tab = query('button[data-bs-target="' + $activeTab + '"]');
    const $bsTab = new bootstrap.Tab($tab);
    $bsTab.show()
  }
}

function eventActiveTab($i, $s) {
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