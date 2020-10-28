import React, { Component } from 'react';
import Slider from '../../components/slider/Slider';
import AddressContact from '../../components/address-contact/AddressContact';
import van from '../../assets/img/vans/van.png';
import vansList from '../../data/van-guide.json';
import { BrowserRouter as Route, Link } from "react-router-dom";
import servicesList from '../../data/services.json';
import { ContactNo } from '../../constant/contact-info/Telephone';
import './Main.scss';

class Main extends Component{

  call() {
    window.location.href = `tel:${ContactNo}`;
  }

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
      if(data.name !== 'LUTON BOX VAN'){
        const img = require(`../../assets/img/vans/${data.img}`);
        return (
          <div className="col-xl-4 col-6 van-list" key={index}>
            <Link to="/booking/">
              <div className="van-container">
                <img src={img} alt={data.name}/>
                <div className="title">{data.name}</div>
              </div>
            </Link>
          </div>
        );
      }
    })

    return (
      <article>
        <section className="red van-info">
          <div className="container">
            <div>
              <div className="col-12"> 
                <h1>About us</h1>
              </div>
              <div className="display-flex">
                <div className="col-12 col-xl-6 col-lg-6 col-md-6">
                  <p>
                  WSD Courier & Cargo has been proudly providing high quality same day delivery service throughout the UK, 
                  Europe and Worldwide since 2009. What differentiates us from other services is our ability to truly connect with our customers, 
                  and provide the exceptional, compassionate serve they deserve. For all your delivery requirements, we are your logistics partners 
                  from collection to delivery, anywhere in the UK, Europe & Worldwide. Same day Courier Specialists, Next day, timed deliveries. 
                  To find out more, simply browse through our site.  
                  </p>
                </div>
              </div>
            </div>
            <div className="clear-both"></div>
          </div>
        </section>
        <section className="white">
          <div className="container">
            <div className="col-xl-12"> 
              <h1 className="text-align-center">Nationwide Same Day Delivery</h1>
              <h3 className="text-align-center">Prices as low as £35</h3>
              <Link to="/booking" className="blue button book-now">Book Now</Link>
            </div>
            <div className="display-flex">
              {vanList}
            </div>
          </div>
        </section>
        <Slider/>
        <section className="blue">
          <div className="container text-align-center">
            <div className="display-flex">
              <div className="col-xl-12"> 
                <h1 className="text-align-center">Services we offer</h1>
              </div>
              {serviceList}
            </div>
            <div className="clear-both"></div>
          </div>
        </section>
        <section className="purple">
          <div className="container">
            <div className="display-flex">
              <div className="col-xl-4 col-md-4 col-sm-4 col-xs-4 col-12">
                <h1 className="grid-title">Same Day Haulage Service</h1>
                <p>
                  We offer same day, urgent and overnight haulage services regardless of the size of your business or the industry you operate in. Our extensive haulage network means we are able to meet your needs in a safe, secure and efficient manner.
                </p>
              </div>
              <div className="col-xl-4 col-md-4 col-sm-4 col-xs-4 col-12">
                <h1 className="grid-title">Extensive Fleet for All Load Sizes</h1>
                <p>
                  Sameday Haulage have a modern fleet of vehicles to suit almost all your haulage and courier requirements. We ensure that the fleet is meticulously maintained and above the standard required for our FORS accreditation, as well as being a proud member of the Road Haulage Association.
                </p>
              </div>
              <div className="col-xl-4 col-md-4 col-sm-4 col-xs-4 col-12">
                <h1 className="grid-title">Wild Network</h1>
                <p>
                  As part of courier network we have access to over 2300 drivers giving us the ability to collect and deliver anywhere in the UK.
                </p>
                <p>
                  We have partners across the UK, we are local Courier with national presence.
                </p>
              </div>
            </div>
            <div className="clear-both"></div>
          </div>
        </section>
        <section className="orange"> 
          <div className="container">
            <div className="display-flex">
              <div className="col-12 text-align-center">
                <h1 className="grid-title text-align-center">
                  We offer a bespoke haulage/courier service tailored to our customer requirements.
                </h1>
                <ul className="bespoke-tags">
                  <li>
                    Manufacturing & Construction
                  </li>
                  <li>
                    Telecommunication
                  </li>
                  <li>
                    Print & Marketing
                  </li>
                  <li>
                    IT
                  </li>
                  <li>
                    Hospitality & Events
                  </li>
                  <li>
                    Automation
                  </li>
                  <li>
                    Aerospace
                  </li>
                  <li>
                    Medical & Pharmaceutical
                  </li>
                  <li>
                    Food
                  </li>
                  <li>
                    Exhibition & Installation
                  </li>
                  <li>
                    Others
                  </li>
                  <div className="clear-both"></div>
                </ul>
              </div>
            </div>
            <div className="clear-both"></div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="display-flex">
              <div className="col-12 text-align-center need-today">
                <h1 className="text-align-center">Need it there today?</h1>
                <p>
                  Of course you do! For a quick, reliable delivery today, all you need do is call. Our highly trained team can find you the perfect solution right now.
                  We’re known for being a friendly and professional same day courier, so just chat through your requirements and leave the rest to us. We organise the delivery and tell you when it’s arrived. Simple.
                </p>
                <h3 onClick={this.call}>Call our team now on 0333 006 9260</h3>
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