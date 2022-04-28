function _lib(selektor){
    this.selektor=selektor;
    this.el=document.querySelectorAll(selektor);
}

_lib.prototype.ubaciElement = function(naziv,klasa,identifikator,tekst){
    var list = this.el;
    list.forEach(item => {
    var newElement = document.createElement(naziv);
    if(klasa.length>0){
        newElement.setAttribute('class', klasa);
    }
    if(identifikator.length>0){
        newElement.setAttribute('id', identifikator);
    }
    if(tekst.length>0){
        newElement.innerHTML=tekst;
    }
    
     item.appendChild(newElement);
    });
    
}

_lib.prototype.dodajKlasu = function(klasa){
    this.el.forEach(element => {
        element.setAttribute('class', klasa);
    });
}
_lib.prototype.dodajAtribut = function(atribut, vrijednost){
    this.el.forEach(element => {
        element.setAttribute(atribut, vrijednost);
    });
}
_lib.prototype.prikazi = function(){
    this.el.forEach(element => {
        element.style.visibility = "visible";;
    });
}
_lib.prototype.sakrij = function(naziv,klasa,identifikator,tekst){
    this.el.forEach(element => {
        element.style.visibility = "hidden";
    });
}