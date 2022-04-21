for(var i=1; i<=100;i++){
    switch(true){
        case i%5==0 &&i%7==0:{
            console.log("Broj je djeljiv "+i+ " sa 5 i sa 7");
            break;
        }
        case i%5==0:{
            console.log("Broj "+ i +" je je djeljiv sa 5");
            break;
        }
        case i%7==0:{
            console.log("Broj "+ i +" je je djeljiv sa 7");
            break;
        }
    }
}