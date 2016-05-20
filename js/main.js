//preLoader
var imagesLoaded =false;
var timesUp = false;

$(window).load(function () {
    imagesLoaded = true;
    turnOffPreloader("images loaded");
});

function timeoutOver() {
    timesUp = true;
    turnOffPreloader("time");
}



$(document).ready(function(){

    init();
    mobileResizeFix();
    setTimeout(timeoutOver, 2500);

    //the image's opacity will fade to 0
    //as the page scrolls the position is divided to calculate the opacity
    $(window).scroll(function() {
        var $s = $(window).scrollTop(),
            opacityVal = ($s / 200.0);

        //once the opacity is 100% is will remain at 100%
        if($('.blurred-img').css('opacity') >= 1){
            opacityVal = ( $s/$s );
        }
        $('.blurred-img').css('opacity', opacityVal);
    });

    //calculates the height for the transistion image
    var calcH = $('.heroView').outerHeight( true );
    $('.img-src').css('height', calcH);


});

//check if all images are loaded and removes the preloader
function turnOffPreloader(vars){

    if( imagesLoaded && timesUp === true){
        $('body').removeClass('no-scroll');
        $('.preloader').removeClass('show');
        $('.preloader').addClass('hide');
    }

}

//top URL on mobile effects fixed images
//helps fixed background images on mobile by taking into account top URL bar size change
function mobileResizeFix() {

    //fix for mobile URL bar resizing
    var bg = $(".heroView");
    $(window).resize(resizeBackground());
    function resizeBackground() {
        bg.height($(window).height() + 60);
    }
    resizeBackground();

}

function init(){

    //form sent notification -- temp fix
    $('.submit').click(function () {
        $(this).html('SENT!');
    });

    //prevent scrolling on body -- temp fix
    $('.modal').click(function () {
        if($('.modal-state').is(":checked")){
            $('body').addClass('no-scroll');
        }else{
            $('body').removeClass('no-scroll');
        }
    });

    //bouncing arrow in hero section
    $('.bouncing-arrow').click(function(){
        $('html, body').animate({
            scrollTop: $( $('.bioView') ).offset().top -100
        }, 1500);
        return false;
    });

    //animate home on logo click
    $('.backup').click(function(){
        $('html, body').animate({
            scrollTop: $( $('.heroView') ).offset().top
        }, 1500);
        return false;
    });

}
