import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import AddressContact from '../../components/address-contact/AddressContact';
import './ContactUs.scss';

class ContactUs extends Component{
  render(){
    return (
        <article>
            <section>
                <div className="container contact-us">
                    <div className="col-12 text-align-center">
                        <h1>Contact Us</h1>
                    </div>
                    <div className="display-flex">
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 no-padding-left no-padding-right">
                            <div className="col-xl-12 col-12 margin-center">
                                <p>
                                    If you have an enquiry please do contact us, we will get back to you as soon as possible.
                                </p>
                                <form>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="email" placeholder="Email..." />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="subject" placeholder="Subject..." />
                                    </div>
                                    <div className="form-group">
                                        <textarea placeholder="Enquiry..."></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button className="blue">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 address-contact">
                            <AddressContact showTitle={false}/>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
  }
}

export default ContactUs;
