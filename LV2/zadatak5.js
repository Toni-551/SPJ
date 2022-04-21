var aPolje=[];
var aParniBrojevi=[];
for(var i=1;i<=50;i++){
    if(i%7==0){
        aPolje.push(i);
    }
}
aPolje.forEach(function(item){
    if(item%2==0){
        aParniBrojevi.push(item);
        console.log(item);
    }
});