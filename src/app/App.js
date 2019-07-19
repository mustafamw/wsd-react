import React, { Component } from 'react';
import './App.scss';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Main from '../pages/main/Main';
import Service from '../pages/service/Service';
import Quotes from '../pages/quotes/Quotes';
import QuotesForm from '../pages/quote-form/quote-form';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Header/>
          <div className="wrap">
            <Route path="/" exact component={Main} />
            <Route path="/services/" exact component={Service} />
            <Route path="/quotes/" exact component={Quotes} />
            <Route path="/quotes/form" exact component={QuotesForm} />
          </div>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
