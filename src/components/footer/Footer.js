import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import Social from '../social/Social';
import './Footer.scss';
import payments from '../../assets/img/resource/payment.png';
import { ContactNo } from '../../constant/contact-info/Telephone';

class Footer extends Component {

  call() {
    window.location.href = `tel:${ContactNo}`;
  }

  render(){
    const year = new Date().getFullYear();
    return (
      <footer>
        <div className="container">
          <div className="display-flex">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12"> 
              <h4>CONTACT US</h4>
              <div className="clear-both"></div>
              <small>
                info@wsdcourierservices.co.uk<br/>
                <span className="curser-pointer" onClick={this.call}>
                  {ContactNo}
                </span>
              </small>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <h4>BUSINESS ADDRESS</h4>
              <div className="clear-both"></div>
              <small>
                Unit 19 New firms Centre<br/>
                Fairground Way<br/>
                Walsall<br/>
                WS1 4NU
              </small>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <h4>QUICK LINKS</h4>
              <div className="clear-both"></div>
              <small>
                <Link to="/quotes/form">Get a Quote</Link><br/>
                <Link to="/contact-us">Contact Us</Link><br/>
                <Link to="/terms-and-conditions">Terms and Conditions</Link><br/>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </small>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 social-network">
              <h4>SOCIAL NETWORK</h4>
              <div className="clear-both"></div>
              <small>
                <Social/>
              </small>
              <div className="clear-both"></div>
              <img src={payments} alt="payments" className="payments"/>
            </div>
            <div className="col-12 text-align-center copy-right"> 
              <b>Copyright&copy;{year} by wsdcourierservices.co.uk</b>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
