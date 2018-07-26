// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
    $('.navbar-toggle:visible').click();
});

//Runs skill animation
//function myAnimation(stat){
//  stat.waypoint(function() {
//    stat.css({
//      animation: "loading 1s linear",
//      opacity: "1"
//    });
//  }, { offset: '95%' });
//}

//myAnimation($('#ms-word'));
//myAnimation($('#powerpoint'));
//myAnimation($('#excel'));
//myAnimation($('#hubspot'));
//myAnimation($('#raiser'));
//myAnimation($('#wordpress'));
//myAnimation($('#photoshop'));
//myAnimation($('#illustrator'));
//myAnimation($('#indesign'));
//myAnimation($('#htmlcss'));
//myAnimation($('#javascript'));
//myAnimation($('#python'));

function animateWhenVisible($element) {
    var top_of_element = $element.offset().top;
    var bottom_of_element = $element.offset().top + $element.outerHeight();
    var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
    var top_of_screen = $(window).scrollTop();

    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        // The element is visible, do something
          $element.css({
            animation: "loading 1s linear",
            opacity: "1"
          });
    } else {
        // The element is not visible, do something else
        $element.css({
            animation: "reset 0s",
            opacity: "0"
          });
    }
}

$(window).scroll(function() {
  animateWhenVisible($("#ms-word"));
  animateWhenVisible($("#powerpoint"));
  animateWhenVisible($("#excel"));
  animateWhenVisible($("#hubspot"));
  animateWhenVisible($("#raiser"));
  animateWhenVisible($("#wordpress"));
  animateWhenVisible($("#photoshop"));
  animateWhenVisible($("#illustrator"));
  animateWhenVisible($("#indesign"));
  animateWhenVisible($("#htmlcss"));
  animateWhenVisible($("#javascript"));
  animateWhenVisible($("#python"));
});


