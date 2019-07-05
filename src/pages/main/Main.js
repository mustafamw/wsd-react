import React, { Component } from 'react';
import van1 from '../../assets/img/van.png';
import service1 from '../../assets/img/services/1.png';
import service2 from '../../assets/img/services/2.png';
import service3 from '../../assets/img/services/3.png';
import service4 from '../../assets/img/services/4.png';
import service5 from '../../assets/img/services/5.png';
import service6 from '../../assets/img/services/6.png';
import service7 from '../../assets/img/services/7.png';

import './Main.scss';

class Main extends Component{
  render(){
    return (
      <article>
        <section className="red">
          <div className="container">
            <div>
              <div className="col-grid-half">
                <h1 className="text-align-center">Who we are</h1>
                We are a family run business and we take our customers extremely seriously.
                WSD Courier has been proudly providing high quality same day delivery service throughout the UK since 2010 What differentiates 
                us from other services is our ability to truly connect with our customers, and provide the exceptional, compassionate service they deserve. 
                To learn more, simply browse through our site.   
              </div>
              <div className="col-grid-half text-align-right">
                <img src={van1}/>
              </div>
            </div>
            <div className="clear-both"></div>
          </div>
        </section>
        <section className="blue">
          <div className="container text-align-center">
            <div>
              <div className="col-grid-fifth">
                <div className="service-img">
                  <img src={service1}/>
                </div>
                <h3>Assurance & Quality</h3>
              </div>
              <div className="col-grid-fifth">
                <div className="service-img">
                  <img src={service2}/>
                </div>
                <h3>Wild Network</h3>
              </div>
              <div className="col-grid-fifth">
                <div className="service-img">
                  <img src={service3}/>
                </div>
                <h3>Offers & Ranges</h3>
              </div>
              <div className="col-grid-fifth">
                <div className="service-img">
                  <img src={service4}/>
                </div>
                <h3>Email Confirmation</h3>
              </div>
              <div className="col-grid-fifth">
                <div className="service-img">
                  <img src={service5}/>
                </div>
                <h3>Email Confirmation</h3>
              </div>
            </div>
            <div className="clear-both"></div>
          </div>
        </section>
        <section className="blue">
          <div className="container">
            <div>
              <div className="col-grid-quarter">
                <h3>Assurance & Quality</h3>
                <p>
                  Gravity Speed Express has been proudly providing high quality same day, next day delivery, 
                  courier services to the Walsall area, west midlands and even Nationwide (UK). What differentiates us from other businesses 
                  is our ability to truly connect with our customers, and provide the exceptional, compassionate service they deserve. To learn more, 
                  simply browse through our site.
                </p>
              </div>
              <div className="col-grid-quarter">
                <h3>Wild Network</h3>
                <p>
                  As part of courier network we have access to over 2500 drivers giving us the ability to collect and deliver anywhere in the UK
                </p>
              </div>
              <div className="col-grid-quarter">
                <h3>Offers & Ranges</h3>
                <p>
                  G S Express offer a range of courier services for customers to suit individual needs. Our dedicated team take pride in delivering every 
                  parcel with care on time, every time. Whether you are sending personal items or business use items, our courier services guarantee to offer 
                  fantastic value for money.
                </p>
              </div>
              <div className="col-grid-quarter">
                <h3>Email Confirmation</h3>
                <p>
                  We will send you an email immediately to confirm the delivery
                </p>
              </div>
            </div>
            <div className="clear-both"></div>
          </div>
        </section>
        <section className="purple">
          <div className="container">
            <div>
              <div className="col-grid-fith">
                <h3>Assurance & Quality</h3>
                <p>
                  Gravity Speed Express has been proudly providing high quality same day, next day delivery, 
                  courier services to the Walsall area, west midlands and even Nationwide (UK). What differentiates us from other businesses 
                  is our ability to truly connect with our customers, and provide the exceptional, compassionate service they deserve. To learn more, 
                  simply browse through our site.
                </p>
              </div>
              <div className="col-grid-fith">
                <h3>Wild Network</h3>
                <p>
                  As part of courier network we have access to over 2500 drivers giving us the ability to collect and deliver anywhere in the UK
                </p>
              </div>
              <div className="col-grid-fith">
                <h3>Offers & Ranges</h3>
                <p>
                  G S Express offer a range of courier services for customers to suit individual needs. Our dedicated team take pride in delivering every 
                  parcel with care on time, every time. Whether you are sending personal items or business use items, our courier services guarantee to offer 
                  fantastic value for money.
                </p>
              </div>
              <div className="col-grid-fith">
                <h3>Email Confirmation</h3>
                <p>
                  We will send you an email immediately to confirm the delivery
                </p>
              </div>
              <div className="col-grid-fith">
                <h3>Email Confirmation</h3>
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
            <div>
              <div className="col-grid-half">
                <h3>Going the Extra Mile</h3>
                <p>
                  Whether you use our same day delivery or another option, we aim to give  you complete peace of mind. 
                  Using modern satellite technology we can  track all of our deliveries from start to finishes, giving you visibility 
                  of where your parcel is at any time. Courier Express can also  notify you on pickup or drop off, either by telephone or by email, 
                  and  hard proof can also be provided to you by post, fax or email if needed. 
                </p>
              </div>
              <div className="col-grid-half">
              <h3>Flexibility and Dedication</h3>
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
      </article>
    );
  }
}

export default Main;
