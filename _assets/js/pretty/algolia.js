!(function($, window, document) {
  var search = instantsearch({
    appId: "4P42FOBOZA",
    apiKey: "83993b03d87b22e88676627b58d9792f",
    indexName: "sakura",
    routing: true
  });

  search.addWidget(
    instantsearch.widgets.hits({
      container: "#results-container",
      templates: {
        empty: "No Results",
        item:
          "<li class='list-group-item'>{{objectID}}: {{{_highlightResult.name.value}}}</li>"
      }
    })
  );
  search.start();
})(window.jQuery, window, document);
