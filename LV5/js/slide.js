var i=1;
function Next(){
    if(i<5){
        i++;
        $('#slika').attr("src", "img/slider_"+i+".jpg");
    }else{
        i=1;
        $('#slika').attr("src", "img/slider_"+i+".jpg");
    }
}
function Prev(){
    if(i>1){
        i--;
        $('#slika').attr("src", "img/slider_"+i+".jpg");
    }else{
        i=5;
        $('#slika').attr("src", "img/slider_"+i+".jpg");
    }
}