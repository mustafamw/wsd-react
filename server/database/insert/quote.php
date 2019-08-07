<?php

    require_once(dirname(__FILE__) . '/../connection/connection.php');
    require_once(dirname(__FILE__) . '/../../service/email/quote/index.php');
 
    class Quote{

        function __construct(){

        }

        function submit($email, $fullname, $contactNo, $pickupFrom, $pickupTo, $pickupDatetime, $vehicleType){

            global $conn;

            $obj = new stdClass();
            $quoteObj = new stdClass();
            $quoteEmail = new QuoteEmail();

            $pickupDatetimeMySql = date('Y-m-d\TH:i:s', strtotime($pickupDatetime));

            $sql = "INSERT INTO quote (email, fullname, contactNo, pickupFrom, pickupTo, pickupDatetime, vehicleType)
                    VALUES ('$email', '$fullname', '$contactNo', '$pickupFrom', '$pickupTo', '$pickupDatetimeMySql', '$vehicleType');";

            if ($conn->query($sql) === TRUE) {

                $quoteObj -> email = $email;
                $quoteObj -> fullname = $fullname;
                $quoteObj -> contactNo = $contactNo;
                $quoteObj -> pickupFrom = $pickupFrom;
                $quoteObj -> pickupTo = $pickupTo;
                $quoteObj -> pickupDatetime = $pickupDatetime;
                $quoteObj -> vehicleType = $vehicleType;

                $quoteEmail -> quoteSubmit($quoteObj);
                $quoteEmail -> quoteSubmitAdmin($quoteObj);

                $obj -> status = 200;
                $obj -> message = "Successfully sent";
            } else {
                $obj -> status = 500;
                //$obj -> message = "Error: " . $sql . "<br>" . $conn->error;
                $obj -> message = "Technical Error";
            }

            return $obj;
        }
    }
?>
