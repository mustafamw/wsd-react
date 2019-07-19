import React, { Component } from 'react';
import forklift from '../../assets/img/services/forklift-van.jpg';
import hourService from '../../assets/img/services/24-hours-service.png';
import ukDelivery from '../../assets/img/services/uk.png';
import './Service.scss';

class Service extends Component {
  render(){
    return (
      <article>
        <section>
          <div className="container">
            <div className="display-flex">
              <div className="col-8">
                <div className="info">
                  <h1>
                    Services we deliver
                  </h1>
                  <h3>
                    A nationwide fast and secure sameday courier service
                    Customer satisfaction is always important for us
                  </h3>
                  <p>
                    <h4>Same day, next day, urgent courier service includes:</h4>
                    <ul>
                      <li>A nationwide sameday service operating 24/7 & 365, with fast, secure and affordable courier delivery giving client a peace of mind.</li>
                      <li>We provide urgent and business critical collection within one hour time.</li>
                      <li>Our sameday service means that you can rely on secure and timely nationwide deliveries any day of the year.</li>
                      <li>We respond quickly to your urgent and time critical delivery needs.</li>
                      <li>As same day courier, we aim to provide you with the best courier service nationwide, on demand, any time of the day or night.</li> 
                      <li>We can provide you courier service and manage your regular, daily, weekly or monthly basis deliveries.</li>
                      <li>We provide door to door collection and delivery service at competitive prices.</li> 
                      <li>We will take care of your special deliveries.</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="col-4 padding-top-5px">
                <div className="images">
                  <img src={forklift}/>
                  <img src={hourService}/>
                  <img src={ukDelivery}/>
                </div>

              </div>
            </div>
          </div>
        </section>
      </article>
    );
  }
}

export default Service;
