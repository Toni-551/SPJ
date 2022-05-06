<?php

$jsonstring= file_get_contents("atributi.json");

if($jsonstring==""){
    $jsonstring="[]";
}
$jarray=json_decode($jsonstring, true);
array_push($jarray, json_decode($_POST['json']));

$result = json_encode($jarray);


$fw = fopen('atributi.json', 'w');
fwrite($fw, $result);
fclose($fw);

?>