function langRedirect() {
  // Only do i18n at root,
  // otherwise, redirect immediately.
  if (window.location.pathname !== '/') {
    window.location.replace('{{ .Permalink }}');
    return;
  }

  const getFirstBrowserLanguage = function () {
    const $nav = window.navigator;
    const $browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'];
    let $i;
    let $language;

    if (Array.isArray($nav.languages)) {
      for ($i = 0; $i < $nav.languages.length; $i++) {
        $language = $nav.languages[$i];
        if ($language && $language.length) {
          return $language;
        }
      }
    }

    // Support for other well known properties in browsers.
    for ($i = 0; $i < $browserLanguagePropertyKeys.length; $i++) {
      $language = $nav[$browserLanguagePropertyKeys[$i]];
      if ($language && $language.length) {
        return $language;
      }
    }
    return 'en';
  }

  const $preferLang = getFirstBrowserLanguage();
  if ($preferLang.indexOf('ru') !== -1) {
    // Visitor prefers Russian.
    window.location.replace('/ru/');
  } else {
    // Fallback to English.
    window.location.replace('/en/');
  }
}

langRedirect();