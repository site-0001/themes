export function init() {
  const $font = 'inherit';
  const $config = {
    startOnLoad: true,
    fontFamily: $font,
    securityLevel: 'strict',
    flowchart: {
      fontFamily: $font
    },
    sequence: {
      fontFamily: $font,
      actorFontFamily: $font,
      noteFontFamily: $font,
      messageFontFamily: $font
    },
    gantt: {
      fontFamily: $font
    }
  };

  mermaid.initialize($config);
}