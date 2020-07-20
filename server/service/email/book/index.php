<?php

    require_once(dirname(__FILE__) . '/../../config/index.php');
    require_once(dirname(__FILE__) . '/../html/head.php');
    require_once(dirname(__FILE__) . '/../html/header.php');
    require_once(dirname(__FILE__) . '/../html/footer.php');

    class BookEmail{

        function __construct(){

        }

        function bookSubmit($bookDetails){

            global $API_ENDPOINT_FRONTEND, $EMAIL_TITLE, $HEAD, $HEADER, $FOOTER, $SUPPORT_EMAIL, $NO_REPLY_EMAIL;

            $email = $bookDetails -> email;
            $fullname = $bookDetails -> fullname;
            $contactNo = $bookDetails -> contactNo;
            $pickupFrom = $bookDetails -> pickupFrom;
            $pickupTo = $bookDetails -> pickupTo;
            $pickupDatetime = date("d/m/Y h:iA", strtotime($bookDetails -> pickupDatetime));
            $vehicleType = $bookDetails -> vehicleType;
            $description = $bookDetails -> description;

            $to = "{$email}";
            $subject = "{$EMAIL_TITLE} Booking";
            $message = "
                <!DOCTYPE html>
                <html lang=\"en\">
                    {$HEAD}
                    <body class=\"wrap\">
                        {$HEADER}
                        <div class=\"body_container\">
                            <h2>Hello {$fullname}</h2>
                            <p>Thank you, you have booked for the {$vehicleType}, we will respond to you as soon as possible.</p>
                            <table class=\"zui-table\">
                                <thead>
                                    <tr>
                                        <th>
                                            Details:
                                        </th>
                                        <th>
                                            Information:
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            Contact No:
                                        </td>
                                        <td>
                                            {$contactNo}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Pick up From:
                                        </td>
                                        <td>
                                            {$pickupFrom}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Pick up To:
                                        </td>
                                        <td>
                                            {$pickupTo}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Date & Time:
                                        </td>
                                        <td>
                                            {$pickupDatetime}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Vehicle Type:
                                        </td>
                                        <td>
                                            {$vehicleType}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Description:
                                        </td>
                                        <td>
                                            {$description}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <hr/>
                            <p class=\"more_information\">Please do not reply to this email, this email address is not monitored. Please use our <a href=\"{$API_ENDPOINT_FRONTEND}/contact-us\">contact</a> page.</p>
                        </div>
                        {$FOOTER}
                    </body>
                </html>
            ";

            // To send HTML mail, the Content-type header must be set
            $headers[] = "MIME-Version: 1.0";
            $headers[] = "Content-type: text/html; charset=iso-8859-1";
            $headers[] = "To: <{$email}>";
            $headers[] = "From: {$EMAIL_TITLE} <{$NO_REPLY_EMAIL}>";

            mail('', $subject, $message, implode("\r\n", $headers));
        }

        function bookSubmitAdmin($bookDetails){

            global $API_ENDPOINT_FRONTEND, $EMAIL_TITLE, $HEAD, $HEADER, $FOOTER, $EMAIL_ADMIN, $SUPPORT_EMAIL;

            $email = $bookDetails -> email;
            $fullname = $bookDetails -> fullname;
            $contactNo = $bookDetails -> contactNo;
            $pickupFrom = $bookDetails -> pickupFrom;
            $pickupTo = $bookDetails -> pickupTo;
            $pickupDatetime = date("d/m/Y h:iA", strtotime($bookDetails -> pickupDatetime));
            $vehicleType = $bookDetails -> vehicleType;
            $description = $bookDetails -> description;

            $to = "{$EMAIL_ADMIN}";
            $subject = "{$EMAIL_TITLE} Booking";
            $message = "
                <!DOCTYPE html>
                <html lang=\"en\">
                    {$HEAD}
                    <body class=\"wrap\">
                        {$HEADER}
                        <div class=\"body_container\">
                            <h2>Booking Details From: {$email}</h2>
                            <table class=\"zui-table\">
                                <thead>
                                    <tr>
                                        <th>
                                            Details:
                                        </th>
                                        <th>
                                            Information:
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            Email:
                                        </td>
                                        <td>
                                            {$email}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Full Name:
                                        </td>
                                        <td>
                                            {$fullname}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Contact No:
                                        </td>
                                        <td>
                                            {$contactNo}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Pickup from:
                                        </td>
                                        <td>
                                            {$pickupFrom}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Deliver to:
                                        </td>
                                        <td>
                                            {$pickupTo}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Date & Time:
                                        </td>
                                        <td>
                                            {$pickupDatetime}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Vehicle Type:
                                        </td>
                                        <td>
                                            {$vehicleType}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Description:
                                        </td>
                                        <td>
                                            {$description}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <hr/>
                            <p class=\"more_information\">Please do not reply to this email; this address is not monitored.</p>
                        </div>
                        {$FOOTER}
                    </body>
                </html>
            ";

            // To send HTML mail, the Content-type header must be set
            $headers[] = "MIME-Version: 1.0";
            $headers[] = "Content-type: text/html; charset=iso-8859-1";
            $headers[] = "To: {$EMAIL_TITLE} support <{$to}>";
            $headers[] = "From: {$EMAIL_TITLE} <{$SUPPORT_EMAIL}>";

            mail($to, $subject, $message, implode("\r\n", $headers));
        }
    }
?>