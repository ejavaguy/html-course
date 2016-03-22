//$() is a jquery function and the function you place inside
//of it will get executed the same as document...DOMContentLoaded
$(
  function() {
    //$("") acts as a querySelector in jquery
    //add blur event handler to navbar buttons
    $("#navbarToggle").blur(function(event){
      var screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        console.log("here, width=" + screenWidth)
        $("#collapsable-nav").collapse('hide');
      }
    });
  }
);

(function (global) {

  var dc={};
  var homeHtml = "snippets/home-snippet.html";

  //convenience method to select element and set HTML
  var insertHtml = function (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };

  //show loading icon for selector
  var showLoading = function(selector){
    var html = "<div class='text-center'>";
    html += "<img src='images/ajax-loader.gif'>";
    html += "</div>";
    insertHtml(selector, html)
  };

  //on page load
  document.addEventListener("DOMContentLoaded", function(event){

    showLoading("#main-content");

    $ajaxUtils.sendGetRequest(
      homeHtml,
      function(responseText) {
        document.querySelector("#main-content")
          .innerHTML = responseText;
      }, false);
  });

  global.$dc = dc;

})(window);