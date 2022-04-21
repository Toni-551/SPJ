import dajSlucajanBroj from './slucajniBroj.js';

var aBrojevi=[];
while(aBrojevi.length<50){
    var broj = dajSlucajanBroj(1, 20);
    aBrojevi.push(broj);
}

var JedinstveniBrojevi=[];
aBrojevi.forEach(function(item){
    if(JedinstveniBrojevi.indexOf(item)==-1){
        JedinstveniBrojevi.push(item);
    }else{
        var index= JedinstveniBrojevi.indexOf(item);
        JedinstveniBrojevi.splice(index,1);
    }
});

JedinstveniBrojevi.forEach(item=>{
    console.log(item);
});