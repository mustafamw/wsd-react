import React, { Component } from 'react';
import Quote from '../../components/quote/Quote';
import './Quotes.scss';
import vanguide from '../../data/van-guide.json';

class Quotes extends Component {
  render(){
    const quotesList = vanguide.map((e)=>{
        return (
            <Quote quote={e}></Quote>
        );
    });
    return (
        <article>
            <section>
                <div class="container">
                    <div class="col-xl-12">
                        <h2>Quotes</h2>
                    </div>
                    <div class="col-xl-12">
                        {quotesList}
                    </div>
                </div>
            </section>
        </article>
    );
  }
}

export default Quotes;
