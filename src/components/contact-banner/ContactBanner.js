import React, { Component } from 'react';
import Social from '../../components/social/Social';
import './ContactBanner.scss';

class ContactBanner extends Component {
  render(){
    return (
        <section className="contact-banner">
            <div className="container">
                <div className="display-flex">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
                        info@wsdcourierservices.co.uk
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-4 text-align-center no-padding-right">
                        01922610216
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-4 text-align-center no-padding-right">
                        07861304990
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-4 text-align-right no-padding-right">
                        <Social/>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default ContactBanner;
