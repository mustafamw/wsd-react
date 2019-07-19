import React, { Component } from 'react';
import Slider from '../../components/slider/Slider';
import van from '../../assets/img/vans/van.png';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Config } from '../../config/config';
import vansList from '../../data/van-guide.json';
import { BrowserRouter as Route, Link } from "react-router-dom";
import servicesList from '../../data/services.json';

import './Main.scss';

class Main extends Component{

  constructor(props){
    super(props);
  }

  render(){

    const serviceList = servicesList.map((data, index) => {
      const img = require(`../../assets/img/services-icon/${data.img}`);
      return (
        <div className="col-xl-2 col-md-3 col-sm-6 col-xs-6 col-6">
          <div className="service-img">
            <img src={img}/>
          </div>
          <h3>{data.name}</h3>
        </div>
      );
    });

    const vanList = vansList.map((data, index) => {
      const img = require(`../../assets/img/vans/${data.img}`);
      return (
        <div className="col-xl-4 col-6 van-list">
          <Link to="/quotes/">
            <div className="van-container">
              <img src={img}/>
              <div className="title">{data.name}</div>
            </div>
          </Link>
        </div>
      );
    })

    const mapStyles = {
      position: 'relative',
      width: '100%',
      height: '100%',
    };

    return (
      <article>
        <section className="red">
          <div className="container">
            <div>
              <div className="col-12"> 
                <h2 className="text-align-center">Who we are</h2>
              </div>
              <div className="display-flex">
                <div className="col-xl-6 col-md-6 col-sm-6 col-xs-12 col-12 van-info">
                  <p>
                    We are a family run business and we take our customers extremely seriously.
                    WSD Courier has been proudly providing high quality same day delivery service throughout the UK since 2010 What differentiates 
                    us from other services is our ability to truly connect with our customers, and provide the exceptional, compassionate service they deserve. 
                    To learn more, simply browse through our site.   
                  </p>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6 col-xs-12 col-12 text-align-right van-image">
                  <img src={van}/>
                </div>
              </div>
            </div>
            <div className="clear-both"></div>
          </div>
        </section>
        <Slider/>
        <section className="blue">
          <div className="container text-align-center">
            <div className="display-flex">
              <div className="col-xl-12"> 
                <h2 className="text-align-center">Services we provide</h2>
              </div>
              {serviceList}
            </div>
            <div className="clear-both"></div>
          </div>
        </section>
        <section className="white">
          <div className="container">
            <div className="col-xl-12"> 
              <h2 className="text-align-center">Van Sizes Guide</h2>
            </div>
            <div className="display-flex">
              {vanList}
            </div>
          </div>
        </section>
        <section className="purple">
          <div className="container">
            <div className="display-flex">
              <div className="col-xl-3 col-md-6 col-sm-6 col-xs-6 col-12">
                <h2>Assurance & Quality</h2>
                <p>
                  Gravity Speed Express has been proudly providing high quality same day, next day delivery, 
                  courier services to the Walsall area, west midlands and even Nationwide (UK). What differentiates us from other businesses 
                  is our ability to truly connect with our customers, and provide the exceptional, compassionate service they deserve. To learn more, 
                  simply browse through our site.
                </p>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-6 col-xs-6 col-12">
                <h2>Wild Network</h2>
                <p>
                  As part of courier network we have access to over 2500 drivers giving us the ability to collect and deliver anywhere in the UK
                </p>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-6 col-xs-6 col-12">
                <h2>Offers & Ranges</h2>
                <p>
                  G S Express offer a range of courier services for customers to suit individual needs. Our dedicated team take pride in delivering every 
                  parcel with care on time, every time. Whether you are sending personal items or business use items, our courier services guarantee to offer 
                  fantastic value for money.
                </p>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-6 col-xs-6 col-12">
                <h2>Email Confirmation</h2>
                <p>
                  We will send you an email immediately to confirm the delivery
                </p>
              </div>
            </div>
            <div className="clear-both"></div>
          </div>
        </section>
        <section className="orange">
          <div className="container">
            <div className="display-flex">
              <div className="col-xl-6 col-12">
                <h2>Going the Extra Mile</h2>
                <p>
                  Whether you use our same day delivery or another option, we aim to give  you complete peace of mind. 
                  Using modern satellite technology we can  track all of our deliveries from start to finishes, giving you visibility 
                  of where your parcel is at any time. Courier Express can also  notify you on pickup or drop off, either by telephone or by email, 
                  and  hard proof can also be provided to you by post, fax or email if needed. 
                </p>
              </div>
              <div className="col-xl-6 col-12">
              <h2>Flexibility and Dedication</h2>
                <p>
                  Our same day courier delivery service ensures your urgent delivery will arrive on  time. At Courier Express, 
                  we pride ourselves on our service that is  second to none – offering efficiency as well as flexibility. It’s also no problem 
                  if you require any last minute changes to your delivery.  We  can alter the delivery schedules or routes as required, providing 
                  drivers available for any urgent matters 24 hours a day. Same day delivery is our speciality, we have been doing it since 1998!   
                </p>
              </div>
            </div>
            <div className="clear-both"></div>
          </div>
        </section>
        <section className="orange address-info">
          <div className="container">
            <div className="display-flex">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                <h2 className="text-align-center">Where to find us?</h2>
                <p>
                  <h3>Address:</h3>
                  Unit 19 New firms Centre<br/>
                  Fairground Way<br/>
                  Walsall<br/> 
                  WS1 4NU<br/>
                  <h3>Contact Info:</h3>
                  Tel - 01922 610216<br/>
                  Mob - 07861304990
                </p>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6  no-padding-left">
                <Map google={this.props.google}
                     zoom={16}
                     style={mapStyles}
                     initialCenter={{ lat: 52.578280, lng: -1.990230}}>
                  <Marker position={{ lat: 52.578280, lng: -1.990230}} />
                </Map>
              </div>
              <div className="clear-both"></div>
            </div>
            <div className="clear-both"></div>
          </div>
        </section>
      </article>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: Config.GOOGLEMAPAPIKEY,
})(Main);
