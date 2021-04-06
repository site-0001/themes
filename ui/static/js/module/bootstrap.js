export function nodeActiveTab() {
  const $elID = $('ul.node-tabs').attr('id');
  const $elTab = $('a[data-bs-toggle="tab"]');
  const $storageItem = $elID + '-active-tab';

  $elTab.on('show.bs.tab', function (e) {
    localStorage.setItem($storageItem, $(e.target).attr('href'));
  });

  const $activeTab = localStorage.getItem($storageItem);

  if ($activeTab) {
    const $id = $('#' + $elID)
    $id.find('a[href="' + $activeTab + '"]').tab('show');
  }
}