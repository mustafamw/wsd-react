<?php

    header('Content-type: application/json');
    header("Access-Control-Allow-Origin: *");

    require_once(dirname(__FILE__) . '/../../server/database/connection/connection.php');
    require(dirname(__FILE__) . '/../../server/utils/https/status/index.php');
    require(dirname(__FILE__) . '/../../server/database/insert/book.php');
    require(dirname(__FILE__) . '/../../server/utils/validation/email/index.php');
    

    if(isset($_POST["email"],
             $_POST["fullname"], 
             $_POST["contactNo"], 
             $_POST["pickupFrom"], 
             $_POST["pickupTo"], 
             $_POST["pickupDatetime"],
             $_POST["vehicleType"],
             $_POST["description"]) && 
      (!empty($_POST["email"]) && 
       !empty($_POST["fullname"]) && 
       !empty($_POST["contactNo"]) &&
       !empty($_POST["pickupFrom"]) &&
       !empty($_POST["pickupTo"]) &&
       !empty($_POST["pickupDatetime"]) &&
       !empty($_POST["vehicleType"]) &&
       !empty($_POST["description"])))
    {
        $email = mysqli_real_escape_string($conn, $_POST["email"]);
        $fullname = mysqli_real_escape_string($conn, $_POST["fullname"]);
        $contactNo = mysqli_real_escape_string($conn, $_POST["contactNo"]);
        $pickupFrom = mysqli_real_escape_string($conn, strtoupper($_POST["pickupFrom"]));
        $pickupTo = mysqli_real_escape_string($conn, strtoupper($_POST["pickupTo"]));
        $pickupDatetime = mysqli_real_escape_string($conn, $_POST["pickupDatetime"]);
        $vehicleType = mysqli_real_escape_string($conn, $_POST["vehicleType"]);
        $description = mysqli_real_escape_string($conn, $_POST["description"]);

        $emailValid = new EmailValidation($email);
        $emailValid = $emailValid -> isEmailValid();

        if($emailValid -> valid == false){
            $response = new HttpStatusCode(400);
            $response -> data = $emailValid;
            print(json_encode($response));
        }
        else{
            $insert = new Book();
            $insert = $insert -> submit($email, $fullname, $contactNo, $pickupFrom, $pickupTo, $pickupDatetime, $vehicleType, $description);
            
            if($insert -> status != 200){
                $response = new HttpStatusCode($insert -> status);
                $response -> data = $insert;
                print(json_encode($response));
            }else{
                $response = new HttpStatusCode(200);
                $response -> data = $insert;
                print(json_encode($response));
            }
        }
    }else{
        $response = new HttpStatusCode(400);
        $response -> data -> message = "Input Fields are required";
        print(json_encode($response));
    }
?>