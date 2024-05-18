

//Lang Menu
const langBtn=$('.langMenu__btn');
const langDrp=$('.langMenu__drp');

langBtn.on('click',function(){
    $(this).attr('href','javascript:void(0)');
    $(this).toggleClass('active');
    langDrp.fadeToggle();
})

$('*').on('click',function(e){
    if(!$(e.target).is('.langMenu__drp') && !$(e.target).is('.langMenu__drp *'))
    if(!$(e.target).is('.langMenu__btn') && !$(e.target).is('.langMenu__btn *')){
        langDrp.fadeOut();
       
    }
});

if(window.innerWidth < 992){
    $('.nav-toggle').on('click',function(){
        $(this).find('.nav-dropdown').fadeToggle();
    })
}

const menuBtn=$('.menu-icon');
const nav=$('nav')
menuBtn.on('click',function(){
    $(this).toggleClass('active');
    nav.toggleClass('active');
})
$('.count').counterUp({
    delay: 5,
    time: 5000
});

//Blog Filter

$('.blogFilter a').on('click',function(){
    $(this).attr('href','javascript:void(0)')
    $('.blogFilter a').removeClass('active');
    $(this).addClass('active');
})

//OfferModal

const modal=$('.offerModal');
const modalOpen=$('.modalOpen');
const modalClose=$('.offerModal__close');

modalOpen.on('click',function(){
    $(this).attr('href','javascript:void(0)');
    modal.addClass('active');
    $('.offerModal__center').fadeIn();
})
modalClose.on('click',function(){
    $(this).attr('href','javascript:void(0)');
    modal.removeClass('active')
    $('.offerModal__center').fadeOut();
})

const num = 200;

$(window).on('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.header').addClass('sticky');
    } else {
        $('.header').removeClass('sticky');
    }
});

window.addEventListener('load', AOS.refresh)
$(function () {
    AOS.init({
        once: false,
    });
});

if(window.innerWidth < 992){
    $('.nav-toggle').on('click',function(){
        $(this).find('.nav-dropdown').fadeToggle();
    })
}
