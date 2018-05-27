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
      poweredBy: true,
      templates: {
        empty: "No Results",
        item: function(hit) {
          return (
            "<li class='list-group-item'><a href='" +
            hit.url +
            "'>" +
            hit.title +
            "</a></li>"
          );
        }
      }
    })
  );
  search.start();
})(window.jQuery, window, document);
