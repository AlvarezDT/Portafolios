

//Menu fijo

var windowHeight = $(window).height();

var Alturaheader = $('.header').innerHeight();

$(window).scroll(function() {

    var scroll = $(window).scrollTop();

    if (scroll > Alturaheader) {

        $('.barra').addClass('fixed');
    
        
    } else {
        $('.barra').removeClass('fixed');

    }

});


$('.menu-movil').on('click', function() {

    $('.navegacion-principal').slideToggle();



});
