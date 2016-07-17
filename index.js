// Tomorrow Night Eighties Theme

exports.middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      action.config.foregroundColor = '#cccccc';
      action.config.backgroundColor = '#2d2d2d';
      action.config.cursorColor = '#515151';
      action.config.colors = [
        "#2d2d2d",
        "#f2777a",
        "#99cc99",
        "#ffcc66",
        "#6699cc",
        "#c88193",
        "#66cccc",
        "#393939",
        "#999999",
        "#f2777a",
        "#99cc99",
        "#ffcc66",
        "#6699cc",
        "#c88193",
        "#66cccc",
        "#ffffff",
        "#cccccc"
      ];
      action.config.css = '.title_1i8co95 { color: #cccccc !important }'
  }
  next(action)
}

