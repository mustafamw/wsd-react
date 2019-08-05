<?php
    require_once(dirname(__FILE__) . '/../../config/index.php');
    $HEAD = "
        <head>
            <meta charset=\"UTF-8\">
            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
            <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">
            <title>{$EMAIL_TITLE}</title>
            <link href=\"https://fonts.googleapis.com/css?family=Oxygen&display=swap\" rel=\"stylesheet\">
            <style>
                .wrap{
                    padding-top: 15px;
                    padding-bottom: 15px;
                    margin: 0px;
                    background: #c5c5c5;
                    font-family: \"Roboto\", sans-serif;
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                }
                .body_container{
                    background: #003a67;
                    width: 50%;
                    margin: auto;
                    min-height: 300px;
                    padding: 15px;
                    padding-top: 50px;
                    box-sizing: border-box;
                    color: white;
                    border-top: none !important;
                }
                .header{
                    background: white;
                    padding: 15px;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    box-sizing: border-box;
                    height: 75px;
                    border-bottom: none !important;
                }
                .header img{
                    width: 250px;
                }
                .footer{
                    color: white;
                    background: #040f29;
                    padding: 15px;
                    box-sizing: border-box;
                    font-size: 12px;
                }
                .footer h4{
                    border-bottom: 1px solid #1ac5ff;
                    padding-bottom: 5px;
                    margin-bottom: 5px;
                    margin-top: 0px;
                    float: left;
                    clear: both;
                }
                .body_container,
                .header,
                .footer{
                    width: 660px;
                    margin: auto;
                    border: 1px solid #040f29;
                }
                .footer .container{
                    width: 25%;
                    float: left;
                }
                .footer .container_left h2{
                    margin-top: 0px;
                }
                .footer .copy_right{
                    clear: both;
                    text-align: center;
                    font-size: 10px;
                }
                hr{
                    border: 1px solid #f5f5f5;
                    margin-top: 20px;
                }
                p.more_information{
                    font-size: 12px;
                }
                table{
                    border-spacing: 0px;
                }
                a{
                    color: white !important;
                    text-decoration: underline;
                }
                a:hover{
                    text-decoration: none;
                }
                a.activate{
                    color: white;
                    background: #0089ff;
                    width: 100%;
                    display: block;
                    text-align: center;
                    padding: 15px;
                    box-sizing: border-box;
                    width: 70%;
                    margin: auto;
                    text-decoration: none;
                    font-size: 20px;
                }
                a.activate:hover{
                    text-decoration: underline;
                }
                .clear-both{
                    clear: both;
                }
                .shares{
                    display: block;
                }
                .shares .share{
                    display: inline-block;
                }
                .shares img{
                    width: 35px;
                }
            </style>
        </head>
    ";
?>