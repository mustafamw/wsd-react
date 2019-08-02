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
                <a href="https://www.facebook.com/WSD-Courier-Cargo-103429197673948/" target="_blank">
                    <img src={facebook} alt="Facebook" srcset="" id="fb-share-button"/>
                </a>
            </div>
            <div class="share"
                tooltip 
                tooltip-title="Instagram">
                <a href="https://www.instagram.com/Wsd_courier/" target="_blank">
                    <img src={instagram} alt="Instagram" srcset=""/>
                </a>
            </div>
        </div>
    );
  }
}

export default Social;
