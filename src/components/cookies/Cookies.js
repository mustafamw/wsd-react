import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import Cookie from 'js-cookie';
import './Cookies.scss';

class Cookies extends Component {

  constructor(props){
    super(props);
    this.state = {
      showCookiesBanner: false
    };
    this.state.showCookiesBanner = Cookie.get('hideCookie');
  }

  render(){

    const confirm = () => {
      this.setState({showCookiesBanner: true});
      Cookie.set('hideCookie', true);
    }

    return (
      !this.state.showCookiesBanner ? <div className="cookie-banner">
        <div className="container">
          <div className="display-flex">
            <div className="col-xl-11 col-lg-11 col-md-10 col-sm-10 col-12 info no-padding-left"> 
              By clicking "Accept" or continuing to use our site, you acknowledge that you accept our <Link to="/terms-and-conditions">Terms and Conditions</Link> & <Link to="/privacy-policy">Privacy Policy</Link>.
            </div>
            <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-12 no-padding-left no-padding-right"> 
              <button className="blue button" onClick={confirm}>Accept</button>
            </div>
          </div>
        </div>
      </div> : null
    );
  }
}

export default Cookies;
