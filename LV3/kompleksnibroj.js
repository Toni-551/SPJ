function KompleksniBroj(real,imag){
    this.realni=real;
    this.imaginarni=imag;
}
var  _kb={
    ispisiKompleksniBroj: function (real, imag)
    {
        console.log("z = "+real+" + "+imag+"i");
    },
    zbroji: function (b1, b2)
    {
        //return "z = "+(b1.realni+b2.realni)+" + "+(b1.imaginarni+b2.imaginarni)+"i";
        return new KompleksniBroj(parseInt(b1.realni)+parseInt(b2.realni), parseInt(b1.imaginarni)+parseInt(b2.imaginarni));
    },
    mnozenje:function(b1, b2){
        b1.realni=parseInt(b1.realni);
        b2.realni=parseInt(b2.realni);
        b1.imaginarni=parseInt(b1.imaginarni);
        b2.imaginarni=parseInt(b2.imaginarni);
        var real = (b1.realni * b2.realni)-(b1.imaginarni * b2.imaginarni);
        var imaginary = (b1.realni * b2.imaginarni)+(b1.imaginarni * b2.realni); 
        //return "z = "+real+" + "+imaginary+"i";
        return new KompleksniBroj(real, imaginary);
    }
}
function clik(){
var a1= document.getElementById('a1').value;
var a2= document.getElementById('a2').value;
var a3= document.getElementById('a3');
var b1= document.getElementById('b1').value;
var b2= document.getElementById('b2').value;
var b3= document.getElementById('b3');
var choice = document.getElementById('choice').value;
if(choice=="zbroj"){
    var rez = _kb.zbroji(new KompleksniBroj(a1, b1), new KompleksniBroj(a2, b2));
    a3.value=rez.realni;
    b3.value=rez.imaginarni;
}
if(choice=="mnozenje"){
    var rez = _kb.mnozenje(new KompleksniBroj(a1, b1), new KompleksniBroj(a2, b2));
    a3.value=rez.realni;
    b3.value=rez.imaginarni;
}
}