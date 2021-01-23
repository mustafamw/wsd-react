import React, { Component } from 'react';
import Book from '../../components/book/Book';
import './booking.scss';
import vanguide from '../../data/van-guide.json';
import { BrowserRouter as Route, Link } from "react-router-dom";

class Booking extends Component {

    render() {

        let x = ["Full Load Arctic", "Parcels", "Pallets", "Fragile goods", "Bespoke", "Dedicated Vehicles"]; 

        const benefitsList = x.map((e, index) => {
            return (
                <li key={index}>{e}</li>
            );
        });

        const quotesList = vanguide.map((e, index) => {
            return (
                <Book quote={e} index={index} key={index}></Book>
            );
        });

        return (
            <article>
                <section>
                    <div className="container quotes">
                        <div className="col-xl-12 text-align-center">
                            <h1>Booking & Quotes</h1>
                            <p>Same day pallet delivery prices start from £35</p>
                            <div className="clear-both">
                                <ul className="benefitsList">
                                    {benefitsList}
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            {quotesList}
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container quotes info">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 margin-center">
                            <h3 className="text-align-center">Please note other vehicles are available upon request</h3>
                            <Link to="/contact-us" className="blue button">Please contact one of our team</Link>
                        </div>
                    </div>
                </section>
            </article>
        );
    }
}

export default Booking;
