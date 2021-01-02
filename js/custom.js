$(function(){

        $(".filter").click(function()
        {
            $(this).addClass("active").siblings().removeClass("active");
        });

        var mixer = mixitup('#Container');

});