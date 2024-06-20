<?php 
use App\Models\usuario;

$user = usuario::latest('updated_at')->first();
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SEguridad</title>
</head>
<body>
    <h1>Codigo de verificacion</h1>
    <p><?php echo $user["verificador"] ?></p>
</body>
</html>