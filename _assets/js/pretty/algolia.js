!(function() {
  var modalCloseButton = document.querySelector(".close");
  var searchModal = document.querySelector("#search-modal");
  var searchInputField = document.querySelector(".ais-search-box--input");
  var searchBtn = document.querySelector(".btn-search");
  var search = instantsearch({
    appId: "4P42FOBOZA",
    apiKey: "83993b03d87b22e88676627b58d9792f",
    indexName: "sakura",
    routing: true
  });

  search.addWidget(
    instantsearch.widgets.searchBox({
      autofocus: true,
      container: "#search-input",
      placeholder: "Search",
      poweredBy: true
    })
  );

  search.addWidget(
    instantsearch.widgets.hits({
      container: "#results-container",
      reset: true,
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
