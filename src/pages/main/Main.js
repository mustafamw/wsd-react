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
                    WSD Courier & Cargo provide a bespoke delivery solution tailored to customer requirements We are specialists in providing same day collection & delivery service nationwide from small van loads to arctic trucks.<br/><br/>
                    Specialists in delivering on time we are your logistics partner for all your transport requirements. Just simply browse through our website to find out more. 
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
              <h3 className="text-align-center">Prices from £30</h3>
              <h3 className="text-align-center">Nationwide Next day Delivery</h3>
              <h3 className="text-align-center">Prices from £15</h3>
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
        <section className="orange"> 
          <div className="container">
            <div className="display-flex">
              <div className="col-12 text-align-center">
                <h1 className="grid-title text-align-center">
                  We offer a bespoke courier & haulage service tailored to our customer requirements.
                </h1>
                <ul className="bespoke-tags">
                  <li>
                    Retails
                  </li>
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
                <p className="text-align-center">
                  Of course you do! For a quick, reliable delivery today, all you need do is call.
                </p>
                <p className="text-align-center">Booked in 3 minutes Collected within 60 minutes Delivered direct... ASAP</p>
                <p className="text-align-center">We can collect from anywhere on the UK mainland within 60 minutes of booking and deliver direct to anywhere in the UK, Ireland or Europe.</p>
                <p className="text-align-center">Get instant quote for same day or next day delivery between any two addresses on the UK mainland (please call for a price for multiple collection or delivery points). If you’re happy with the price just give us a call to confirm it, supply us with a few details and we’ll be on our way to collect.</p>
                <p className="text-align-center">Credit terms available for regular customers.</p>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 margin-center">
                  <Link to={"/booking/"}>
                      <button className="button blue">Make a Booking</button>
                  </Link>
                </div>
                <h3 className="curser-pointer" onClick={this.call}>Call our team now on 0333 006 9260</h3>
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