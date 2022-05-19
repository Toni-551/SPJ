<?php 
include "connectionDB.php";

header('Content-type: text/json');
header('Content-type: application/json; charset=utf-8');

class Artikl{
    public $Id;
    public $Naziv;
    public $Proizvodac;
    public $Modelo;
    public $Cijena;
    public $Kolicina;

    public function __construct($id, $nativ, $proiz, $model, $cijena, $kolicina){
        $this->Id=$id;
        $this->Naziv=$nativ;
        $this->Proizvodac=$proiz;
        $this->Modelo=$model;
        $this->Cijena=$cijena;
        $this->Kolicina=$kolicina;
    }
}

$sQuery="SELECT * FROM artikli"; 
$oStatement = $oConnection->query($sQuery);
$oArtikls = array();
while($oRow = $oStatement->fetch(PDO::FETCH_BOTH))
{
    $oArtikl = new Artikl($oRow['Id'], $oRow['Naziv'], $oRow['Proizvodac'], $oRow['Model'], $oRow['Cijena'], $oRow['Kolicina']);
    array_push($oArtikls, $oArtikl);
}
echo json_encode($oArtikls);

?>