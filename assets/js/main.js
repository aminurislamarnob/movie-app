(function ($) {
    "use strict";
    
    //Main Slider
    
    $('#main-slider').owlCarousel({
        margin:10,
        nav: false,
        items: 1,
        dots: true,
        margin: 0,
        autoplay: false,
        loop: true
    })
    

    //Pause youtube video
    $('#videoModal').on('hidden.bs.modal', function (event) {
        $('.modal iframe').attr('src', $('iframe').attr('src'));
    });

    //Search Trigger
    $('.search-trigger').click(function () {
        $('.float-search-box').toggleClass('active');
        $(this).find('i').toggleClass('icon-x');
        $(this).find('i').toggleClass('icon-search');
    });
    
}(jQuery));	