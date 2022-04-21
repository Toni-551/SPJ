function Grad(naziv, brojst, lat, long){
    this.Naziv_grada=naziv;
    this.Broj_stanovnika=brojst;
    this.Latituda=lat;
    this.Longituda=long;

}
var oVirovitica = new Grad("Virovitica", 21291, 45.83194, 17.38389);
var oSlatina= new Grad("Slatina", 13686 ,45.70333, 17.70278);
var oBjelovar= new Grad("Bjelovar", 40276,45.89861 ,16.84889);
var oOsijek= new Grad("Osijek", 96848, 45.55111 ,18.69389);
var oZagreb= new Grad("Zagreb", 806341, 45.81444 ,15.97798);

Grad.prototype.dajVelicinuGrada = function ()
{
    if(this.Broj_stanovnika<30000) return 1;
    if(this.Broj_stanovnika>=30000 && this.Broj_stanovnika<200000) return 2;
    if(this.Broj_stanovnika>=200000) return 3;
}
//Zadatak 2
/*console.log(oOsijek.dajVelicinuGrada());
console.log(oVirovitica.dajVelicinuGrada());
console.log(oZagreb.dajVelicinuGrada());*/

function dajUdaljenost(grad1, grad2) {
    var R=6371;
    var a = Math.sin(((grad2.Latituda-grad1.Latituda)*Math.PI/180)/2) * Math.sin(((grad2.Latituda-grad1.Latituda)*Math.PI/180)/2) + Math.cos((grad1.Latituda*Math.PI/180)) * Math.cos((grad2.Latituda*Math.PI/180)) * Math.sin(((grad2.Longituda-grad1.Longituda)*Math.PI/180)/2) * Math.sin(((grad2.Longituda-grad1.Longituda)*Math.PI/180)/2);  
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return d = R * c; 
}
//Zadatak 3
console.log(dajUdaljenost(oVirovitica, oSlatina));