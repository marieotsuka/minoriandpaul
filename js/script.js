$(document).ready(function(){

  var root = $('html, body'); 
  $('nav a, #scrollToTop a').click(function() {
    var href = $.attr(this, 'href');
    root.animate({
        scrollTop: $(href).offset().top
          }, 300, function () {
                if(href==="#top"){
                  history.pushState("", document.title, window.location.pathname);
                } else {
                  window.location.hash = href;
                }
            });
      return false;
    });

    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

});

