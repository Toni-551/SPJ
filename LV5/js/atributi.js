
function Write(jsonData) {
    $.ajax({
        url: "Write.php",
        type: 'post',
        dataType: 'text',
        data:{
            'json':jsonData
        },
        async: false,
        success: function(oData)
        {

        },
        error: function (xhr, ajaxOptions, thrownError) {
           // alert(xhr.status);
            alert(thrownError);
          }
    });
}

$('#slct').change(function(){
    $('#inpt').attr("type", $('#slct').val());
});
$('#btn').click(function(){
    var jObject={
         type:$('#inpt').attr("type"),
         input:$('#inpt').val()
    }
    var jsonData = JSON.stringify(jObject);

    Write(jsonData);
    console.log(typeof jsonData);
});
