import React, { Component } from 'react';
import Quote from '../../components/quote/Quote';
import './Quotes.scss';
import vanguide from '../../data/van-guide.json';

class Quotes extends Component {

    render() {

        let x = ["Parcels", "Pallets", "Fragile goods"]; 

        const benefitsList = x.map((e, index) => {
            return (
                <li key={index}>{e}</li>
            );
        });

        const quotesList = vanguide.map((e, index) => {
            return (
                <Quote quote={e} index={index}></Quote>
            );
        });

        return (
            <article>
                <section>
                    <div className="container quotes">
                        <div className="col-xl-12 text-align-center">
                            <h1>Van Guide and Quotes</h1>
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
            </article>
        );
    }
}

export default Quotes;
