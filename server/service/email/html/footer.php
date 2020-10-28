<?php
    require_once(dirname(__FILE__) . '/../../config/index.php');
    $YEAR = date("Y");
    $FOOTER = "
        <div class=\"footer\">
            <div class=\"container\">
                <h4>CONTACT US</h4>
                <div class=\"clear-both\"></div>
                <small>
                    info@wsdcourierservices.co.uk<br/>
                    0333 006 9260
                </small>
            </div>
            <div class=\"container\">
                <h4>BUSINESS ADDRESS</h4>
                <div class=\"clear-both\"></div>
                <small>
                    Unit 19 New firms Centre<br/>
                    Fairground Way<br/>
                    Walsall<br/>
                    WS1 4NU
                </small>
            </div>
            <div class=\"container\">
                <h4>QUICK LINKS</h4>
                <div class=\"clear-both\"></div>
                <small>
                    <a href=\"{$API_ENDPOINT_FRONTEND}/quotes/form\">Get a Quote</a><br/>
                    <a href=\"{$API_ENDPOINT_FRONTEND}/contact-us\">Contact Us</a><br/>
                    <a href=\"{$API_ENDPOINT_FRONTEND}/terms-and-conditions\">Terms and Conditions</a><br/>
                    <a href=\"{$API_ENDPOINT_FRONTEND}/privacy-policy\">Privacy Policy</a>
                </small>
            </div>
            <div class=\"container\">
                <h4>SOCIAL NETWORK</h4>
                <div class=\"clear-both\"></div>
                <div id=\"shares\" class=\"shares\">
                    <div class=\"share\">
                        <a href=\"https://www.facebook.com/WSD-Courier-Cargo-103429197673948/\" target=\"_blank\">
                            <img src=\"{$API_ENDPOINT_FRONTEND}/resource/image/social/Facebook.png\" alt=\"Facebook\" id=\"fb-share-button\"/>
                        </a>
                    </div>
                    <div class=\"share\">
                        <a href=\"https://www.instagram.com/Wsd_courier/\" target=\"_blank\">
                            <img src=\"{$API_ENDPOINT_FRONTEND}/resource/image/social/Instagram.png\" alt=\"Instagram\"/>
                        </a>
                    </div>
                </div>
            </div>
            <div class=\"clear-both\"></div>
            <div class=\"copy_right\">
                <b>Copyright&copy;$YEAR by wsdcourierservices.co.uk</b>
            </div>
        </div>
    ";
?>