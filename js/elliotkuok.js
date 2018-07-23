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

function myAnimation(selector){
selector.waypoint(function() {
    selector.css({
      animation: "loading 1s linear",
      opacity: "1"
    });
  }, { offset: '95%' });
}

myAnimation($('#ms-word'));
myAnimation($('#powerpoint'));
myAnimation($('#excel'));
myAnimation($('#hubspot'));
myAnimation($('#raiser'));
myAnimation($('#wordpress'));
myAnimation($('#photoshop'));
myAnimation($('#illustrator'));
myAnimation($('#indesign'));
myAnimation($('#htmlcss'));
myAnimation($('#javascript'));
myAnimation($('#python'));