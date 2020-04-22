<?php

$db = new PDO(
    'mysql:host=fdb18.biz.nf;dbname=3403039_milan',
    '3403039_milan',
    'sifrazadomen1'
);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

?>