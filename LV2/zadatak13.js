import dajSlucajanBroj from './slucajniBroj.js';

var aBrojevi=[];
while(aBrojevi.length<30){
    var broj = dajSlucajanBroj(10, 200);
    aBrojevi.push(broj);
}
var done = false;
while (!done) {
    done = true;
    for (var i = 1; i < aBrojevi.length; i += 1) {
    if (aBrojevi[i - 1] > aBrojevi[i]) {
        done = false;
        var tmp = aBrojevi[i - 1];
        aBrojevi[i - 1] = aBrojevi[i];
        aBrojevi[i] = tmp;
    }
    }
 }
 aBrojevi.forEach(item=>{
     console.log(item);
 });

  