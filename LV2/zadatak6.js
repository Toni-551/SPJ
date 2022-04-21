import dajSlucajanBroj from './slucajniBroj.js';

var aBrojevi=[];
while(aBrojevi.length<100){
    var broj = dajSlucajanBroj(50, 5000);
    aBrojevi.push(broj);
}
var parni=0;
var neparni=0;
aBrojevi.forEach(item => {
    if(item%2==0){
        parni++;
    }else{
        neparni++;
    }
});
console.log("parnih ima "+parni);
console.log("neparni ima "+neparni);