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

//Activates skill bars when scrolled on screen
//window.sr = ScrollReveal({ reset: true });
//sr.reveal('.skill-percent',{
//  origin: 'left',
//  delay: 100,
//  opacity: 0,
//});


$(document).ready(function() {
  $('#ms-word').waypoint(function() {
    $('#ms-word').css({
    animation: "loading 1s linear",
    opacity: "1"
    });
    }, { offset: '95%' });
});

$(document).ready(function() {
  $('#powerpoint').waypoint(function() {
    $('#powerpoint').css({
    animation: "loading 1s linear",
    opacity: "1"
    });
    }, { offset: '95%' });
});

$(document).ready(function() {
  $('#excel').waypoint(function() {
    $('#excel').css({
    animation: "loading 1s linear",
    opacity: "1"
    });
    }, { offset: '95%' });
});

$(document).ready(function() {
  $('#hubspot').waypoint(function() {
    $('#hubspot').css({
    animation: "loading 1s linear",
    opacity: "1"
    });
    }, { offset: '95%' });
});

$(document).ready(function() {
  $('#raiser').waypoint(function() {
    $('#raiser').css({
    animation: "loading 1s linear",
    opacity: "1"
    });
    }, { offset: '95%' });
});

$(document).ready(function() {
  $('#wordpress').waypoint(function() {
    $('#wordpress').css({
    animation: "loading 1s linear",
    opacity: "1"
    });
    }, { offset: '95%' });
});

$(document).ready(function() {
  $('#photoshop').waypoint(function() {
    $('#photoshop').css({
    animation: "loading 1s linear",
    opacity: "1"
    });
    }, { offset: '95%' });
});

$(document).ready(function() {
  $('#illustrator').waypoint(function() {
    $('#illustrator').css({
    animation: "loading 1s linear",
    opacity: "1"
    });
    }, { offset: '95%' });
});

$(document).ready(function() {
  $('#indesign').waypoint(function() {
    $('#indesign').css({
    animation: "loading 1s linear",
    opacity: "1"
    });
    }, { offset: '95%' });
});

$(document).ready(function() {
  $('#htmlcss').waypoint(function() {
    $('#htmlcss').css({
    animation: "loading 1s linear",
    opacity: "1"
    });
    }, { offset: '95%' });
});

$(document).ready(function() {
  $('#javascript').waypoint(function() {
    $('#javascript').css({
    animation: "loading 1s linear",
    opacity: "1"
    });
    }, { offset: '95%' });
});

$(document).ready(function() {
  $('#python').waypoint(function() {
    $('#python').css({
    animation: "loading 1s linear",
    opacity: "1"
    });
    }, { offset: '95%' });
});

