<?php

$username = "root";
$password = "root";
try {
    $bd = new PDO("mysql:host=localhost;dbname=autocompletion;charset=utf8mb4", $username, $password);
    $bd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

?>