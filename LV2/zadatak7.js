import dajSlucajanBroj from './slucajniBroj.js';

var aBrojevi=[];
var min=2000;
var max=0;
while(aBrojevi.length<200){
    var broj = dajSlucajanBroj(150, 1500);
    aBrojevi.push(broj);
    if(max<broj){
        max=broj;
    }
    if(min>broj){
        min=broj;
    }
}
console.log(min);
console.log(max);
