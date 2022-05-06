
function download(data, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([data], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

$('#slct').change(function(){
    $('#inpt').attr("type", $('#slct').val());
});
$('#btn').click(function(){
    var jObject={
         type:$('#inpt').attr("type"),
         input:$('#inpt').val()
    }
    $.getJSON('atributi.json', function(jd){
        console.log(jd);
    });

    var jsonData = JSON.stringify(jObject);

    download(jsonData, 'atributi.json', 'text/json');
    console.log(jsonData);
});
