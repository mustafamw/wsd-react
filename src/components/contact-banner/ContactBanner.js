import React, { Component } from 'react';
import Social from '../../components/social/Social';
import './ContactBanner.scss';

class ContactBanner extends Component {
  render(){
    return (
        <section className="contact-banner">
            <div className="container">
                <div className="display-flex">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
                        info@wsdcourierservices.co.uk
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6 text-align-center">
                        01922 610216
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6 text-align-center">
                        07861304990
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6 text-align-right">
                        <Social/>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default ContactBanner;
