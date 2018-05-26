!(function($, window, document) {
  // get all <code> elements
  var allCodeBlocksElements = $(".highlight code");

  allCodeBlocksElements.each(function(i) {
    // add different id for each code block

    // target
    var currentId = "codeblock" + (i + 1);
    $(this).attr("id", currentId);

    //trigger
    var btn = document.createElement("a");
    btn.setAttribute("type", "btn");
    btn.setAttribute("class", "btn-copy-code");
    btn.setAttribute("data-clipboard-target", "#" + currentId);
    btn.setAttribute("data-toggle", "tooltip");
    btn.setAttribute("data-placement", "left");
    btn.setAttribute("data-boundary", this.closest("div"));
    btn.setAttribute("data-original-title", "Copy to Clipboard");
    btn.innerHTML = '<i class="fas fa-clipboard"></i>';
    this.insertBefore(btn, this.firstChild);
  });

  $(".btn-copy-code").tooltip();

  var clipboard = new ClipboardJS(".btn-copy-code");
  clipboard.on("success", function(e) {
    $(e.trigger)
      .attr("title", "Copied!")
      .tooltip("_fixTitle")
      .tooltip("show")
      .attr("title", "Copy to clipboard")
      .tooltip("_fixTitle");
    e.clearSelection();
  });
})(window.jQuery, window, document);
