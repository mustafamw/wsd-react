import React, { Component } from 'react';
import Social from '../../components/social/Social';
import './ContactBanner.scss';
import phone from '../../assets/img/icons/phone.png';
import { ContactNo } from '../../constant/contact-info/Telephone';

class ContactBanner extends Component {

    call() {
        window.location.href = `tel:${ContactNo}`;
    }

    render() {
        return (
            <section className="contact-banner">
                <div className="container">
                    <div className="display-flex">
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12">
                            <span className="curser-pointer" onClick={this.call}>
                                <img src={phone} alt="phone" className="telephone" />
                                {ContactNo} Call Us Now For a Free Quote! We're Open 24/7
                            </span>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 text-align-right no-padding-right">
                            Find us on <Social />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactBanner;
