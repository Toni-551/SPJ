$(document).ready(function()
{
});
function Dodaj(){
    if($('#ime').val() != "" && $('#prezime').val()!= "" && $('#jmbag').val()!= "" && $('#oib').val()!= "" && $('#datum').val()!= "" && $('#adresa').val()!= "" && $('#postbroj').val()!= "" && $('#grad').val()!= ""){
        if($.isNumeric($('#oib').val()) && $.isNumeric($('#jmbag').val()) && $.isNumeric($('#postbroj').val())){
            var ime =$('#ime').val();
            var prezime = $('#prezime').val();
            var jmbag = $('#jmbag').val();
            var oib = $('#oib').val();
            var datum = $('#datum').val();
            var adresa = $('#adresa').val();
            var postbroj = $('#postbroj').val();
            var grad = $('#grad').val();
            var Osoba={
                ime: ime,
                prezime: prezime,
                jmbag: jmbag,
                oib:oib,
                datum: datum,
                adresa:adresa,
                postbroj:postbroj,
                grad:grad
            };
            console.log(Osoba);
            
        }else{
            alert("oib i jmbag i poštanski broj moraju bit brojevi");
        }
    }else{
        alert("sva polja nisu popunjena");
    }
}