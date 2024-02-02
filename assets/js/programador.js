$(document).ready(function(){
    $('.fa-folder-open').hide();
    $('.fa-user').hide();
    $('.icono').hide();
    $('.icono2').hide();
    $('.icono3').hide();
    $('.contenido').hide();
    });

    $(".boton2").mouseenter(function(){
        $('.fa-folder-open').css("padding-left", "10px");
        $('.fa-folder-open').fadeTo(300, 1);
    });

$(".boton2").mouseleave(function(){
    $('.fa-folder-open').fadeTo(300, 0);
 $('.fa-folder-open ').hide(200);
});


$(".boton3").mouseenter(function(){
    $('.fa-user').css("padding-left", "10px");
    $('.fa-user').fadeTo(300, 1);
});

$(".boton3").mouseleave(function(){
$('.fa-user').fadeTo(200, 0);
$('.fa-user ').hide(200);
});


$(".fa-envelope").mouseenter(function(){
    $('.icono').fadeTo(300, 1);
});

$(".fa-envelope").mouseleave(function(){
    $('.icono').fadeTo(300, 0);
});


$(".fa-github").mouseenter(function(){
    $('.icono2').fadeTo(300, 1);
});

$(".fa-github").mouseleave(function(){
    $('.icono2').fadeTo(300, 0);
});

$(".fa-linkedin-in").mouseenter(function(){
    $('.icono3').fadeTo(300, 1);
});

$(".fa-linkedin-in").mouseleave(function(){
    $('.icono3').fadeTo(300, 0);
});

$(".img-bottom").mouseenter(function(){
    $('.img-top').fadeTo(300, 1);
});

$(".img-bottom").mouseleave(function(){
    $('.img-top').show(100);
});

$(".img-top").mouseenter(function(){
    $('.img-top').fadeTo(300, 1);
});

$(".img-top").mouseleave(function(){
    $('.img-top').fadeTo(300, 0);
});

$(".img-bottom2").mouseenter(function(){
    $('.img-top2').fadeTo(300, 1);
});

$(".img-bottom2").mouseleave(function(){
    $('.img-top2').show(100);
});

$(".img-top2").mouseenter(function(){
    $('.img-top2').fadeTo(300, 1);
});

$(".img-top2").mouseleave(function(){
    $('.img-top2').fadeTo(300, 0);
});
