function KompleksniBroj(real,imag){
    this.realni=real;
    this.imaginarni=imag;
}

var oBroj1 = new KompleksniBroj(1, 5);
var oBroj2 = new KompleksniBroj(2, 8);
var oBroj3 = new KompleksniBroj(3, 9);
var oBroj4 = new KompleksniBroj(4, 2);
var oBroj5 = new KompleksniBroj(5, 1);

var  _kb={
    ispisiKompleksniBroj: function (real, imag)
    {
        console.log("z = "+real+" + "+imag+"i");
    },
    zbroji: function (b1, b2)
    {
        return "z = "+(b1.realni+b2.realni)+" + "+(b1.imaginarni+b2.imaginarni)+"i";
        //return new KompleksniBroj(b1.realni+b2.realni, b1.imaginarni+b2.imaginarni);
    },
    mnozenje:function(b1, b2){
        var real = (b1.realni * b2.realni)-(b1.imaginarni * b2.imaginarni);
        var imaginary = (b1.realni * b2.imaginarni)+(b1.imaginarni * b2.realni); 
        return "z = "+real+" + "+imaginary+"i";
        //return new KompleksniBroj(real, imaginary);
    }
}
//zadatak 5
/*_kb.ispisiKompleksniBroj(oBroj1.realni, oBroj1.imaginarni);
_kb.ispisiKompleksniBroj(oBroj2.realni, oBroj2.imaginarni);
_kb.ispisiKompleksniBroj(oBroj3.realni, oBroj3.imaginarni);
_kb.ispisiKompleksniBroj(oBroj4.realni, oBroj4.imaginarni);
_kb.ispisiKompleksniBroj(oBroj5.realni, oBroj5.imaginarni);*/

//zadatak 6
console.log(_kb.zbroji(oBroj1, oBroj2));
console.log(_kb.mnozenje(oBroj1, oBroj2));