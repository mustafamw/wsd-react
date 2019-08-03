import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import facebook from '../../assets/img/social/Facebook.png';
import twitter from '../../assets/img/social/Twitter.png';
import instagram from '../../assets/img/social/Instagram.png';
import './Social.scss';

class Social extends Component{
  render(){
    return (
        <div id="shares" className="shares">
            <div className="share">
                <a href="https://www.facebook.com/WSD-Courier-Cargo-103429197673948/" target="_blank">
                    <img src={facebook} alt="Facebook" id="fb-share-button"/>
                </a>
            </div>
            <div className="share">
                <a href="https://www.instagram.com/Wsd_courier/" target="_blank">
                    <img src={instagram} alt="Instagram"/>
                </a>
            </div>
        </div>
    );
  }
}

export default Social;
