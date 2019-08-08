import React, { Component } from 'react';
import Slider from '../../components/slider/Slider';
import AddressContact from '../../components/address-contact/AddressContact';
import van from '../../assets/img/vans/van.png';
import vansList from '../../data/van-guide.json';
import { BrowserRouter as Route, Link } from "react-router-dom";
import servicesList from '../../data/services.json';


import './Main.scss';

class Main extends Component{

  render(){

    const serviceList = servicesList.map((data, index) => {
      const img = require(`../../assets/img/services-icon/${data.img}`);
      return (
        <div className="col-xl-2 col-md-3 col-sm-6 col-xs-6 col-6 services-container" key={index}>
          <div className="service-img">
            <img src={img} alt={data.name}/>
          </div>
          <h3>{data.name}</h3>
          <small>{data.info}</small>
        </div>
      );
    });

    const vanList = vansList.map((data, index) => {
      const img = require(`../../assets/img/vans/${data.img}`);
      return (
        <div className="col-xl-4 col-6 van-list" key={index}>
          <Link to="/quotes/">
            <div className="van-container">
              <img src={img} alt={data.name}/>
              <div className="title">{data.name}</div>
            </div>
          </Link>
        </div>
      );
    })

    return (
      <article>
        <section className="red">
          <div className="container">
            <div>
              <div className="col-12"> 
                <h2 className="text-align-center">About us</h2>
              </div>
              <div className="display-flex">
                <div className="col-xl-6 col-md-6 col-sm-6 col-xs-12 col-12 van-info">
                  <p>
                    WSD Courier & Cargo has been proudly providing high quality same day delivery service throughout the UK since 2009. What differentiates 
                    us from other services is our ability to truly connect with our customers, and provide the exceptional, compassionate service they deserve. 
                    To learn more, simply browse through our site.   
                  </p>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6 col-xs-12 col-12 text-align-right van-image">
                  <img src={van} alt="van"/>
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
                <h2 className="text-align-center">Services we offer</h2>
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
                <h2 className="grid-title">Assurance & Quality</h2>
                <p>
                  WSD Courier & Cargo has been proudly providing high quality same day and next day deliveries through out the UK in a secure and timely manner since 2009.
                </p>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-6 col-xs-6 col-12">
                <h2 className="grid-title">Wild Network</h2>
                <p>
                  As part of courier network we have access to over 2300 drivers giving us the ability to collect and deliver anywhere in the UK
                </p>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-6 col-xs-6 col-12">
                <h2 className="grid-title">Meet your standards</h2>
                <p>
                  WSD Courier & Cargo offer a range of courier services for customers to suit individual needs. Our dedicated team take pride in delivering every 
                  parcel with care on time, every time. Our courier services guarantee to offer fantastic value for money.
                </p>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-6 col-xs-6 col-12">
                <h2 className="grid-title">Fully Tracked Vehicles</h2>
                <p>
                 We are able to track our vehicles through smart phones and online tracking system.
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
                <h2 className="grid-title">Going the Extra Mile</h2>
                <p>
                  Whether you use our same day delivery or another option, we aim to give  you complete peace of mind. Be sure that we will meet your customer deadlines enhancing your lead times.
                </p>
              </div>
              <div className="col-xl-6 col-12">
              <h2 className="grid-title">Flexibility and Dedication</h2>
                <p>
                  It’s no problem if you require any last minute changes to your delivery. We can alter the delivery schedules or routes as required. 
                  Same day delivery is our speciality, we have been doing it since 2009!   
                </p>
              </div>
            </div>
            <div className="clear-both"></div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="display-flex">
              <div className="col-12 text-align-center need-today">
                <h2 className="text-align-center">Need it there today?</h2>
                <p>
                  Of course you do! For a quick, reliable delivery today, all you need do is call. Our highly trained team can find you the perfect solution right now.
                  We’re known for being a friendly and professional same day courier, so just chat through your requirements and leave the rest to us. We organise the delivery and tell you when it’s arrived. Simple.
                </p>
                <h3>Call our team now on 01922610216</h3>
              </div>
            </div>
            <div className="clear-both"></div>
          </div>
        </section>
        <section className="orange address-info">
          <div className="container">
            <AddressContact showTitle={true}/>
          </div>
        </section>
      </article>
    );
  }
}
export default Main;