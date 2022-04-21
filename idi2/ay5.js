$(document).ready(function(){
    var texto1 = $(".footer");
    var foto = $(".foto");
    var texto2 = $(".font-properties");


    foto.mouseenter(function(){
        $(this).fadeTo("fast", 0.5);
        $(this).fadeTo("slow", 1);

    });
    
    texto1.mouseenter(function(){
        $(this).css('color', 'blue');
    });


    texto2.click(function(){
        $(this).append("hola hola hola ")

    });
});