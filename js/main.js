/**
 * Created by rafaelheard on 10/29/15.
 */
$(document).ready(function(){

    init();
    mobileResizeFix();

});

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

