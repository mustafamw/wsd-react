<?php

    header('Content-type: application/json');
    header("Access-Control-Allow-Origin: *");

    require(dirname(__FILE__) . '/../../server/utils/https/status/index.php');
    require(dirname(__FILE__) . '/../../server/database/insert/quote.php');
    require(dirname(__FILE__) . '/../../server/utils/validation/email/index.php');

    if(isset($_POST["email"],
             $_POST["fullname"], 
             $_POST["contactNo"], 
             $_POST["pickupFrom"], 
             $_POST["pickupTo"], 
             $_POST["pickupDatetime"],
             $_POST["vehicleType"]) && 
      (!empty($_POST["email"]) && 
       !empty($_POST["fullname"]) && 
       !empty($_POST["contactNo"]) &&
       !empty($_POST["pickupFrom"]) &&
       !empty($_POST["pickupTo"]) &&
       !empty($_POST["pickupDatetime"]) &&
       !empty($_POST["vehicleType"])))
    {
        $email = $_POST["email"];
        $fullname = $_POST["fullname"];
        $contactNo = $_POST["contactNo"];
        $pickupFrom = strtoupper($_POST["pickupFrom"]);
        $pickupTo = strtoupper($_POST["pickupTo"]);
        $pickupDatetime = $_POST["pickupDatetime"];
        $vehicleType = $_POST["vehicleType"];

        $emailValid = new EmailValidation($email);
        $emailValid = $emailValid -> isEmailValid();

        if($emailValid -> valid == false){
            $response = new HttpStatusCode(400);
            $response -> data = $emailValid;
            print(json_encode($response));
        }
        else{
            $insert = new Quote();
            $insert = $insert -> submit($email, $fullname, $contactNo, $pickupFrom, $pickupTo, $pickupDatetime, $vehicleType);
            
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