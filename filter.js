$(document).ready(function () {
    $(".btn").click(function () {
        var value = $(this).attr("data-filter");
        if (value == "*")
         {
            $(".item").show("1000");   
        } 
        else 
        {
            $(".item").not("."+value).hide("1000");   
            $(".item").filter("."+value).show("1000");   
        }
        //add active class
        $(".btn").click(function(){
            $(this).addClass('active').siblings().removeClass('active');
        })
    });
});