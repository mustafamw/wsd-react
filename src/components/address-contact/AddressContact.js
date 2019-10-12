import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Config } from '../../config/config';
import './AddressContact.scss';
import googleMapImg from '../../assets/img/resource/map.png';

class AddressContact extends Component {

    render() {
        const mapStyles = {
            position: 'relative',
            width: '100%',
            height: '100%',
        };

        const showTitle = this.props.showTitle;

        return (
            <div className="col-12 address-contact-container no-padding-left no-padding-right">
                <div className="display-flex">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 address-map no-padding-left">
                        <img src={googleMapImg} alt="Google Map" title="Google Map"/>
                        <div className="clear-both"></div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 address-info">
                        <h2 className={"text-align-center " + showTitle ? "" : "hide" }>Where to find us?</h2>
                        <p>
                            Unit 19 New firms Centre<br/>
                            Fairground Way<br/>
                            Walsall<br/>
                            WS1 4NU<br/>
                            <h3>Contact Us:</h3>
                            info@wsdcourierservices.co.uk<br/>
                            01922610216<br/>
                            07861304990
                        </p>
                    </div>
                </div>
            </div>
    );
    }
}

export default GoogleApiWrapper({
    apiKey: Config.GOOGLEMAPAPIKEY,
})(AddressContact);
