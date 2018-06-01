!(function() {
  var search = instantsearch({
    appId: "4P42FOBOZA",
    apiKey: "83993b03d87b22e88676627b58d9792f",
    indexName: "sakura",
    routing: true
  });

  const hideSearchResults = () => {
    $("#search-results").addClass("d-none");
  };

  const resetSearchBox = () => {
    hideSearchResults();
    $("input").val("");
    $("input").focus();
  };

  $("#search-input").on("keyup keypress", e => {
    var key = e.keyCode || e.which;
    if (key === 13) {
      e.preventDefault();
      return false;
    }
    e.target.value
      ? $("#search-results").removeClass("d-none")
      : hideSearchResults();
  });

  $("#search-input").on("click", "button", () => {
    hideSearchResults();
  });

  $("#search-modal").on("shown.bs.modal", () => {
    resetSearchBox();
  });

  $("#search-modal").on("hidden.bs.modal", () => {
    resetSearchBox();
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
