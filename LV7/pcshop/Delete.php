<?php

include "connectionDB.php";

$sQuery='DELETE FROM artikli WHERE Id='.$_GET['elemetId'];
$oStatement = $oConnection->query($sQuery);

?>