function Printer(nivo_tonera, dvostranoIspisivanje){
    if(nivo_tonera<0){
        this.nivo_tonera=0;
    }else if(nivo_tonera>100){
        this.nivo_tonera=100;
    }else{
        this.nivo_tonera=nivo_tonera;
    }
    this.dvostranoIspisivanje=dvostranoIspisivanje;
    this.ukupanBrojStranica=0;
}
var Samsung_M283x= new Printer(0, true);
var Epson_Sx105= new Printer(20, false);
var Cannon_Pixma= new Printer(100, true);
var HP_Smart_tank_500= new Printer(1020, true);


Printer.prototype.dodajBoju = function (){
    if(this.nivo_tonera<100){
    this.nivo_tonera+=100-this.nivo_tonera;
    }
}
//Zadatak 9
Epson_Sx105.dodajBoju();
//console.log(Epson_Sx105.nivo_tonera);

Printer.prototype.printaj = function (n){
    if(this.nivo_tonera<1){
        console.log("Nema boje");
        return 0;
    }else{
        this.nivo_tonera-=n*0.1;
        this.ukupanBrojStranica+=n;
        return n;
    }
}
Printer.prototype.getUkupanbrojstranica = function (){
    return this.ukupanBrojStranica;
}
Printer.prototype.getNivoTonera = function (){
    return this.nivo_tonera;
}
//zadatak 10
console.log(Samsung_M283x.printaj(10));
console.log(Cannon_Pixma.printaj(10));
console.log(Cannon_Pixma.printaj(30));
console.log(Cannon_Pixma.getNivoTonera());
console.log(Cannon_Pixma.getUkupanbrojstranica());