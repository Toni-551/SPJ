import dajSlucajanBroj from './slucajniBroj.js';

var Brojevi="";
var i=1;
while(i<=10){
    var broj = dajSlucajanBroj(10, 100);
    Brojevi+= broj+"\n";
    i++;
}
import * as http from 'http';
var nPort = 8000;
console.log('Pokretanje servera na portu '+nPort);
http.createServer(function(request, response){
response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
response.write(Brojevi);
response.end();
}).listen(nPort);