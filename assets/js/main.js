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
    $('.search-trigger').click(function (e) {
        e.preventDefault();
        $('.float-search-box').toggleClass('active');
        $(this).find('i').toggleClass('icon-x');
        $(this).find('i').toggleClass('icon-search');
    });

    //Mobile Menu
    $('.mobile-menu-trigger').click(function(){
        $('.primary-menu, .mobile-menu-backdrop').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('.mobile-menu-backdrop').click(function(){
        $('.primary-menu, .mobile-menu-trigger').toggleClass('active');
        $(this).toggleClass('active');
    });
    
}(jQuery));	