$(document).ready(function(){
    $(".divs").hide();
    $(".minus").hide();
});

$(".plus").on("click", function(){
    $(".divs").eq($(".plus").index(this)).show();
    $(".minus").eq($(".plus").index(this)).show();
    $(".plus").eq($(".plus").index(this)).hide();
});
$(".minus").on("click", function(){
    $(".divs").eq($(".minus").index(this)).hide();
    $(".minus").eq($(".minus").index(this)).hide();
    $(".plus").eq($(".minus").index(this)).show();
});
$(".slika").on("click", function(){
    $('#image').attr("src", "img/slika"+($(".slika").index(this)+1)+".jpg")
});