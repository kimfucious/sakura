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
    btn.innerHTML = '<i class="fas fa-clipboard"></i>';
    // $(this).before(btn);
    this.insertBefore(btn, this.firstChild);
  });

  var clipboard = new ClipboardJS(".btn-copy-code");
  clipboard.on("success", function(e) {
    console.info("Action:", e.action);
    e.clearSelection();
  });
})(window.jQuery, window, document);
