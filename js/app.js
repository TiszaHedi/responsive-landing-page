/* OWL CAROUSEL */ 

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin: 0,
        loop: true,
        autoplay: true,
        dots: false,
        items: 5,
        responsiveClass:true,
        responsive:{
            0:{
                items:3,
            },
            1000:{
                items:5,
                nav:false
            },
        }
    })
});
