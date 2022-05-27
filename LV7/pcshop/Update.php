<?php 

include "connectionDB.php";

$sQuery='UPDATE artikli SET Naziv="'.$_POST["Naziv"].'", Proizvodac="'.$_POST["Proizvodac"].'", Model="'.$_POST["Model"].'", Cijena='.$_POST["Cijena"].', Kolicina= '.$_POST["Kolicina"].' WHERE Id = '.$_POST["Id"].';';  
$oStatement = $oConnection->query($sQuery);


?>