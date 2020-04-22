<?php
include('protection.php');

$query = 'INSERT INTO users (name, email, country, last_name, service_name)
            VALUES (:name, :email, :country, :last_name, :service_name)';

//First check if users email exist
$queryS ='SELECT * FROM users
            WHERE email = :email';

$stmt = $db->prepare($query);
$stmt -> execute(array(
    'email' => $_GET['email']
));

if ($lines = $stmt->fetch(PDO::FETCH_ASSOC)) {
    go_err_msg(404, 'Email already exist!');
    die();
}

$stmt = $db->prepare($query);
$stmt -> execute(array(
    'name' => $_GET['name'],
    'email' => $_GET['email'],
    'country' => $_GET['country'],
    'last_name' => $_GET['lastName'],
    'service_name' => $_GET['serviceName'],
));

echo('{"response": true}');
// if($lines = $stmt->fetch(PDO::FETCH_ASSOC)){
//     echo('{"response":' . $lines . '}');
// }
?>