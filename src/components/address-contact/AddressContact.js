import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Config } from '../../config/config';
import './AddressContact.scss';

class AddressContact extends Component {

    constructor(props){
        super(props);
    }

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
                        <Map google={this.props.google}
                            zoom={16}
                            style={mapStyles}
                            initialCenter={{ lat: 52.578280, lng: -1.990230 }}>
                            <Marker position={{ lat: 52.578280, lng: -1.990230 }} />
                        </Map>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 address-info">
                        <h2 className="text-align-center" style={{ display: showTitle ? 'block' : 'none' }}>Where to find us?</h2>
                        <p>
                            <h3>Address:</h3>
                            Unit 19 New firms Centre<br />
                            Fairground Way<br />
                            Walsall<br />
                            WS1 4NU<br />
                            <h3>Contact Us:</h3>
                            01922 610216<br />
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
