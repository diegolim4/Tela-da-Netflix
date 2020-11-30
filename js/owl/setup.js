$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{    /*com 600 pixels(tela pela metade) vai mostra 3 elementos*/
            items:3
        },
        1000:{        /*com 1000 pixels(tela cheia) colocar 5 elementos(padrão)na tela*/
            items:5
        }
    }
})