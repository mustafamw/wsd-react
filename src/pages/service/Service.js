import React, { Component } from 'react';
import VerticalSLider from '../../components/vertical-slider/VerticalSlider';
import './Service.scss';

class Service extends Component {
  render() {
    return (
      <article>
        <section>
          <div className="container">
            <div className="display-flex">
              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                <div className="col-12">
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
                <div className="clear-both"></div>
                <div className="col-12">
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
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 slider">
                  <VerticalSLider/>
                </div>
              </div>
            </div>
        </section>
      </article>
        );
      }
    }
    
    export default Service;
