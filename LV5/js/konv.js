var euro=0.95;
var kuna=7.13;
var usd=1;

function result(fFrom, fTo, from){
    return (fTo/fFrom)*from;
}

function convert(){
    var f = $('#sec1').val();
    var t = $('#sec2').val();
    var ff;
    var ft;
    switch(f){
        case "euro":{
            ff=euro;
            break;
        }
        case "usd":{
            ff=usd;
            break;
        }
        case "kuna":{
            ff=kuna;
            break;
        }
        default:{
            break;
        }
    }
    switch(t){
        case "euro":{
            ft=euro;
            break;
        }
        case "usd":{
            ft=usd;
            break;
        }
        case "kuna":{
            ft=kuna;
            break;
        }
        default:{
            break;
        }
    }
    var resultat=result(ff, ft, $('#val1').val());
    $('#val2').val(resultat);
}

