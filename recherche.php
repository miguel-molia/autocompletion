<?php

require("./bdd.php");

if(isset($_GET['search'])){
    $req = $bd->prepare("SELECT * FROM joueurs_om WHERE prenom LIKE ? OR nom LIKE ? OR numero = ? ");
    $req->execute([$_GET['search']."%", $_GET['search']."%", $_GET['search']]);
}


if(isset($_GET['search1'])){
    $req = $bd->prepare("SELECT * FROM joueurs_om WHERE prenom LIKE ? OR nom LIKE ? OR numero LIKE ? ");
    $req->execute(["%".$_GET['search1']."%", "%".$_GET['search1']."%", "%".$_GET['search1']."%"]);
}


if(isset($_GET['id'])){
    $req = $bd->prepare("SELECT * FROM joueurs_om WHERE id = ?");
    $req->execute([$_GET['id']]);
}
$result = $req->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($result)

?>