<?php 

include "connectionDB.php";

$sQuery='INSERT INTO artikli(Naziv, Proizvodac, Model, Cijena, Kolicina) VALUES("'.$_POST["Naziv"].'", "'.$_POST["Proizvodac"].'", "'.$_POST["Model"].'", "'.$_POST["Cijena"].'", "'.$_POST["Kolicina"].'");'; 
$oStatement = $oConnection->query($sQuery);

?>