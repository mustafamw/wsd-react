import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import facebook from '../../assets/img/social/Facebook.png';
import twitter from '../../assets/img/social/Twitter.png';
import instagram from '../../assets/img/social/Instagram.png';
import './Social.scss';

class Social extends Component{
  render(){
    return (
        <div id="shares" class="shares">
            <div class="share">
                <img src={facebook} alt="" srcset="" id="fb-share-button"/>
            </div>
            <div class="share">
                <a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=wsdcourierservices {{fullUrlPath}}." target="_blank">
                    <img src={twitter} alt="" srcset=""/>
                </a>
            </div>
            <div class="share"
                tooltip 
                tooltip-title="Instagram">
                <a href="https://www.instagram.com/wsdcourierservices/?hl=en" target="_blank">
                    <img src={instagram} alt="" srcset=""/>
                </a>
            </div>
        </div>
    );
  }
}

export default Social;
