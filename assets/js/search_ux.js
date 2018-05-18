// Hide/show stuff based on whether or not text is entered in the search field

$("#search-input").keyup(e => {
  if (e.target.value) {
    $("header, #posts, #pagination").addClass("d-none d-md-block");
    $("#search-results").removeClass("d-none");
  } else {
    $("header, #posts, #pagination").removeClass("d-none d-md-block");
    $("#search-results").addClass("d-none");
  }
});
