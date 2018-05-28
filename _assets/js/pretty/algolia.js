!(function() {
  var search = instantsearch({
    appId: "4P42FOBOZA",
    apiKey: "83993b03d87b22e88676627b58d9792f",
    indexName: "sakura",
    routing: true
  });

  search.addWidget(
    instantsearch.widgets.searchBox({
      container: "#search-input",
      placeholder: "Search"
    })
  );

  search.addWidget(
    instantsearch.widgets.hits({
      container: "#results-container",
      poweredBy: true,
      templates: {
        empty: "No Results",
        item: function(hit) {
          var title = hit._highlightResult.title.value;
          return (
            "<li class='list-group-item'><a href='" +
            hit.url +
            "'>" +
            hit.title +
            "</a><span>" +
            hit.html +
            "</span></li>"
          );
        }
      }
    })
  );
  search.start();
})();
