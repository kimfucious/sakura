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
      autofocus: true,
      templates: {
        empty: "No Results",
        item: function(hit) {
          var snippet = hit._highlightResult.html.value;
          return (
            "<li class='list-group-item p-0'><a href='" +
            hit.url +
            "'><h4>" +
            hit.title +
            "</a></h4><div>" +
            snippet +
            "</div></li>"
          );
        }
      }
    })
  );

  search.start();
})();
