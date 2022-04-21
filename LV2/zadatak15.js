import dajSlucajanBroj from './slucajniBroj.js';

var aBrojevi=[];
while(aBrojevi.length<3){
    var broj = dajSlucajanBroj(10, 100);
    aBrojevi.push(broj);
}
//aBrojevi=[25,32,25];
if(String(aBrojevi[0]).charAt(String(aBrojevi[0]).length-1)==String(aBrojevi[1]).charAt(String(aBrojevi[1]).length-1) || String(aBrojevi[0]).charAt(String(aBrojevi[0]).length-1)==String(aBrojevi[2]).charAt(String(aBrojevi[2]).length-1) || String(aBrojevi[2]).charAt(String(aBrojevi[2]).length-1)==String(aBrojevi[1]).charAt(String(aBrojevi[1]).length-1)){
    console.log("true");
}else{
    console.log("false");
}