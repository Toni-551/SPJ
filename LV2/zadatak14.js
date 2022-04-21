var broj = 209;
if(broj>99){
    var b1 = String(broj).charAt(0);
    var b2 = String(broj).charAt(String(broj).length-1);
    console.log(parseInt(b1) + parseInt(b2));
}