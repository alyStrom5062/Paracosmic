<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $valid_username = "admin";
    $valid_password = "admin"

    if ($username === $valid_username && $password === $valid_password) {
        echo "Login Successful."
    } else {
        echo "Invalid username or password."
    }

}
?>