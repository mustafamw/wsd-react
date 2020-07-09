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
                    background: white;
                    width: 50%;
                    margin: auto;
                    min-height: 300px;
                    padding: 15px;
                    padding-top: 15px;
                    box-sizing: border-box;
                    color: black;
                    border-top: none !important;
                    font-size: 16px;
                }
                a{
                    color: #040d29 !important;
                    text-decoration: underline !important;
                }
                a:hover{
                    color: #040d29 !important;
                    text-decoration: none !important;
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
                    padding-bottom: 10px;
                    padding-top: 10px;
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
                .footer a{
                    color: white !important;
                    text-decoration: underline !important;
                }
                .footer a:hover{
                    color: white !important;
                    text-decoration: none !important;
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
                    margin-top: 5px;
                }
                hr{
                    border: 1px solid #f5f5f5;
                    margin-top: 20px;
                }
                p.more_information{
                    font-size: 12px;
                }
                p a{
                    color: black !important;
                    text-decoration: underline !important;
                }
                p a:hover{
                    color: black;
                    text-decoration: none !important;
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
                .zui-table {
                    border-collapse: collapse;
                    border-spacing: 0;
                    font: normal 13px Arial, sans-serif;
                    margin: auto;
                    background: white;
                    width: 80%;
                    box-shadow: 0px 0px 5px black;
                }
                .zui-table thead th {
                    background-color: #040e29;
                    border: solid 1px #040e29;
                    color: white;
                    padding: 10px;
                    text-align: left;
                }
                .zui-table tbody td {
                    border: solid 1px #040d29;
                    padding: 10px;
                    text-shadow: 1px 1px 1px #fff;
                }
                .zui-table tbody td a {
                    text-decoration: underline;
                }
                .zui-table tbody td a:hover {
                    text-decoration: none;
                }
            </style>
        </head>
    ";
?>