<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Authorization");
header('Content-Type: application/json');

function go_err_msg($code, $msg) {
    header("HTTP/1.1 400 Bad Request");
    if (is_array($msg)){
        $msg['res'] = $code;
    }
    else{
        $msg = array(
            'res' => $code,
            'msg' => $msg
        );
    }
    die(json_encode($msg));
}
$db = new PDO(
    'mysql:host=fdb18.biz.nf;dbname=3403039_milan',
    '3403039_milan',
    'sifrazadomen1'
);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// exceptions
// 404 -> 'Email already exist!';
// 400 -> 'Wrong credentials'
?>