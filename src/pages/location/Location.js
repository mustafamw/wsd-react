import React, { Component } from "react";
import './Location.scss';
import locations from '../../data/location.json';
import { BrowserRouter as Route, Link } from "react-router-dom";

class Location extends Component {

    render() {
        const list = locations.map((location) => {
            return (
                <div className="col-6 col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 location-list-item">
                    {
                        location.map((e) => (<h3>{e}</h3>))
                    }
                </div>
            )
        });
        return (
            <article>
                <section>
                    <div className="container location">
                        <div className="col-xl-12 text-align-center">
                            <h1>Wild Network</h1>
                            <p>As part of courier network we have access to over 2300 drivers giving us the ability to collect and deliver anywhere in the UK. We have partners across the UK, we are local Courier with national presence.</p>
                            <div className="col-12 row location-list">
                                {list}
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 margin-center">
                                <Link to={"/booking/"}>
                                    <button className="button blue">Make a Booking</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        );
    }
}

export default Location;
