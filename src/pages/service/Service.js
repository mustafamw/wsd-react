import React, { Component } from 'react';
import ukDelivery from '../../assets/img/services/uk.png';
import globe from '../../assets/img/services/globe.png';
import './Service.scss';

class Service extends Component {
  render(){
    return (
      <article>
        <section>
          <div className="container">
            <div className="display-flex">
                <div className="col-xl-6 col-lg-6 col-md-8 col-sm-8 col-12">
                  <h1>
                    National Courier Service
                  </h1>
                  <p>
                    <ul>
                      <li>Urgent same day deliveries</li>
                      <li>Local or National Timed deliveries</li>
                      <li>Vehicle Tracking</li>
                      <li>Quick response times</li>
                      <li>All loads direct, Door-to-Door</li>
                      <li>Proof of delivery</li>
                      <li>From an envelope to pallet loads</li>
                      <li>Any size Van to suit you</li>
                    </ul>
                  </p>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4  col-12 uk text-align-right">
                  <img src={ukDelivery} alt="UK Delivery"/>
                </div>
              </div>
              <div className="display-flex">
                <div className="col-xl-6 col-lg-6 col-md-8 col-sm-8 col-12">
                  <h1>
                    World Wide Cargo Service
                  </h1>
                  <p>
                    <ul>
                      <li>Door to Door</li>
                      <li>Door to Airport</li>
                      <li>Excess Baggage</li>
                      <li>Personal effects</li>
                    </ul>
                  </p>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4  col-12 globe text-align-right">
                  <img src={globe} alt="World Globe"/>
                </div>
              </div>
            </div>
        </section>
      </article>
    );
  }
}

export default Service;
