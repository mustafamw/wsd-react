import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import './Quote.scss';

class Quote extends Component {
  render(){
    const quotesList = this.props.quote.details.map((e, index)=>{
        return (
            <li key={index}>{e}</li>
        );
    });
    const img = require(`../../assets/img/vans/${this.props.quote.img}`);
    return (
        <Link to={"/quotes/form?index=" + this.props.index}>
            <div className="quote-list col-12">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 image no-padding-left no-padding-right">
                    <img src={img}/>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 padding-bottom-5px">
                    <h2 className="no-padding-bottom">{this.props.quote.title}</h2>
                    <ul>
                        {quotesList}
                    </ul>
                    <button className="button blue">Get a Quote</button>
                </div>
            </div>
        </Link>
    );
  }
}

export default Quote;
