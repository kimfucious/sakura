!(function($, window, document) {
  $("#search-input").on("keyup keypress", function(e) {
    var key = e.keyCode || e.which;
    if (key === 13) {
      e.preventDefault();
      return false;
    }
    if (e.target.value) {
      $("header, .nav-item").addClass("d-none d-md-block");
      $("section, #pagination").addClass("d-none");
      $("#search-results").removeClass("d-none");
    } else {
      $("header, .nav-item").removeClass("d-none d-md-block");
      $("section, #pagination").removeClass("d-none");
      $("#search-results").addClass("d-none");
    }
  });
})(window.jQuery, window, document);
