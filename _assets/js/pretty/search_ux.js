// Hide/show stuff based on whether or not text is entered in the search field

$("#search-input").on("keyup keypress", function(e) {
  var key = e.keyCode || e.which;
  if (key === 13) {
    e.preventDefault();
    return false;
  }
  if (e.target.value) {
    $("header").addClass("d-none d-md-block");
    $("#posts, #pagination").addClass("d-none");
    $("#search-results").removeClass("d-none");
  } else {
    $("header").removeClass("d-none d-md-block");
    $("header, #posts, #pagination").removeClass("d-none");
    $("#search-results").addClass("d-none");
  }
});
