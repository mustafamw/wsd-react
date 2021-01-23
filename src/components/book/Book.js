import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import './Book.scss';

class Book extends Component {
  render(){
    const quotesList = this.props.quote.details.map((e, index)=>{
        return (
            <li key={index}>{e}</li>
        );
    });
    const img = require(`../../assets/img/vans/${this.props.quote.img}`);
    return (
        <div className="quote-list-container">
            <div className="quote-list col-12">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 image no-padding-left no-padding-right">
                    <img src={img} alt={this.props.quote.title}/>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 padding-bottom-5px">
                    <h2 className="no-padding-bottom">{this.props.quote.title}</h2>
                    <ul>
                        {quotesList}
                    </ul>
                    <Link to={"/booking/form?index=" + this.props.index}>
                        <button className="button blue">Make a Booking</button>
                    </Link>
                    <Link to={"/booking/quotes/form?index=" + this.props.index}>
                        <button className="button blue">Get a Quote</button>
                    </Link>
                </div>
            </div>
            
        </div>
    );
  }
}

export default Book;
