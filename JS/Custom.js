/* ===========================================================================================
                                          Counter
=========================================================================================== */
AOS.init(
    {
    duration: 1000
});

$(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

// Smooth scrolling
$(function() {
    $("a.smooth-scroll").click(function(event) {

        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");

    });
});


//NAVBAR
$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('.navbar').css('background', '#543695');
    } else {
        $('.navbar').css('background', 'transparent');
        
    }
});


// Magnify POPup

$(function(){
   $("#portfolio").magnificPopup({
      delegate: 'a',
       type: 'image',
       gallery: {
       enabled: true
   }   
   });
});