function DodajUListu(){
    var val = $('#inpt').val();
    $('#toDoLista').append("<li><input class='check' onclick='Overline(this)'  type='checkbox'><i onclick='Remove(this)' class='fa fa-trash-o'></i>"+val+"</li>");
}

function Remove(r){
    $(r).parent("li").remove();
}

function Overline(element) {
    element.parentElement.style.textDecoration = element.checked == true?"line-through":"none";
}