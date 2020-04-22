<?php
include('protection.php');
// // get posted data
// $data = json_decode(file_get_contents("php://input"));
$query = 'SELECT * FROM users
            WHERE email = :email';

$stmt = $db->prepare($query);
$stmt->execute(array(
    'email' => $_GET['email']
));

if ($lines = $stmt->fetch(PDO::FETCH_ASSOC)) {
    echo ('{"response":' . json_encode($lines) . '}');
} else {
    go_err_msg(400, 'Wrong credentials');
}

?>