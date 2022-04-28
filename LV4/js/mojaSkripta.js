var element = new _lib('li');
element.ubaciElement('li',"", "", "higadfshkjb,dfhkjbds");

element.dodajKlasu('uff');
element.dodajAtribut('jo', 'jo');
var newelement= new _lib('.naslov');
newelement.sakrij();

localStorage.setItem('racunarstvo', 'http://racunarstvo.vuv.hr/');
localStorage.setItem('loomen', 'http://loomen.vsmti.hr/');
localStorage.setItem('imagine', 'http://e5.onthehub.com/d.ashx?s=ui4qkso06k');
localStorage.setItem('studentski_dom', 'http://studom.vsmti.hr/');
localStorage.setItem('office365', 'https://outlook.office365.com/owa/?realm=vsmti.hr%23path=/mail');

var fuuuter = new _lib('.footer-navigation');
for(var i=0; i<5;i++){
    fuuuter.ubaciElement('li','item','','');
}
var llink1 = new _lib('.item:nth-child(1)');
llink1.ubaciElement('a', '', '', localStorage.getItem('racunarstvo'));
var link1 = new _lib('.item:nth-child(1) a');
link1.dodajAtribut('href', localStorage.getItem('racunarstvo'));

var llink2 = new _lib('.item:nth-child(2)');
llink2.ubaciElement('a', '', '', localStorage.getItem('loomen'));
var link2 = new _lib('.item:nth-child(2) a');
link2.dodajAtribut('href', localStorage.getItem('loomen'));

var llink3 = new _lib('.item:nth-child(3)');
llink3.ubaciElement('a', '', '', localStorage.getItem('imagine'));
var link3 = new _lib('.item:nth-child(3) a');
link3.dodajAtribut('href', localStorage.getItem('imagine'));

var llink4 = new _lib('.item:nth-child(4)');
llink4.ubaciElement('a', '', '', localStorage.getItem('studentski_dom'));
var link4 = new _lib('.item:nth-child(4) a');
link4.dodajAtribut('href', localStorage.getItem('studentski_dom'));

var llink5 = new _lib('.item:nth-child(5)');
llink5.ubaciElement('a', '', '', localStorage.getItem('office365'));
var link5 = new _lib('.item:nth-child(5) a');
link5.dodajAtribut('href', localStorage.getItem('office365'));


