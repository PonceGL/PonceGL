$(document).ready(function(){

    $(window).scroll(function(){
        var titulo = $(window).scrollTop();
        if(titulo > 50){
            $('h1').addClass('title-small');
        }else{
            $('h1').removeClass('title-small');
        }
    });

    $(window).scroll(function(){
        var display = $(window).scrollTop();
    
        if(display > 200){
            $('#container-tec-icon').addClass('flat');
            $('.tec-icon').css({
                'transition': '0.3s',
                'color': '#fff'
            });
            $('#contenedor-principal').addClass('background-change');
        }else{
            $('#container-tec-icon').removeClass('flat');
            $('.tec-icon').css({
                'transition': '0.3s',
                'color': '#000'
            });
            $('#contenedor-principal').removeClass('background-change');
        }

    });
    
    $(window).scroll(function(){
        var display = $(window).scrollTop();
    
        if(display > 400){
            $('#w').removeClass('oculto');
            $('#w').addClass('animate__fadeInUpBig');
            
            setTimeout(function(){
                $('#j').removeClass('oculto');
                $('#j').addClass('animate__fadeInUpBig');
            }, 200);
            
            setTimeout(function(){
                $('#b').removeClass('oculto');
                $('#b').addClass('animate__fadeInUpBig');
            }, 300);
            
            setTimeout(function(){
                $('#s').removeClass('oculto');
                $('#s').addClass('animate__fadeInUpBig');
            }, 400);
            
            setTimeout(function(){
                $('#l').removeClass('oculto');
                $('#l').addClass('animate__fadeInUpBig');
            }, 500);
            
            setTimeout(function(){
                $('#m').removeClass('oculto');
                $('#m').addClass('animate__fadeInUpBig');
            }, 600);
            
            setTimeout(function(){
                $('#n').removeClass('oculto');
                $('#n').addClass('animate__fadeInUpBig');
            }, 700);
            
            setTimeout(function(){
                $('#r').removeClass('oculto');
                $('#r').addClass('animate__fadeInUpBig');
            }, 800);
            
            setTimeout(function(){
                $('#v').removeClass('oculto');
                $('#v').addClass('animate__fadeInUpBig');
            }, 900);
            
            setTimeout(function(){
                $('#li').removeClass('oculto');
                $('#li').addClass('animate__fadeInUpBig');
            }, 1000);
        }

    });

    


});