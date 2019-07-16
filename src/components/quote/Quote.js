import React, { Component } from 'react';
import './Quote.scss';

class Quote extends Component {
  render(){
    const quotesList = this.props.quote.details.map((e)=>{
        return (
            <li>{e}</li>
        );
    });
    const img = require(`../../assets/img/vans/${this.props.quote.img}`);
    return (
        <div class="quote-list">
            <div class="col-xl-3 col-12 image no-padding-left no-padding-right">
                <img src={img}/>
            </div>
            <div class="col-xl-9 col-12 display-flex">
                <div class="col-xl-8 col-12 info">
                    <h3>{this.props.quote.name}</h3>
                    <p>{this.props.quote.info}</p>
                </div>
                <div class="col-xl-4 col-12 info">
                    <ul>
                        {quotesList}
                    </ul>
                </div>
                <div class="col-xl-12 col-12 button">
                    <button class="button">Get A Quote</button>
                </div>
            </div>
        </div>
    );
  }
}

export default Quote;
