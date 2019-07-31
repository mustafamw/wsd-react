import React, { Component } from 'react';
import './App.scss';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Cookies from '../components/cookies/Cookies';
import Main from '../pages/main/Main';
import Service from '../pages/service/Service';
import Quotes from '../pages/quotes/Quotes';
import QuotesForm from '../pages/quote-form/QuoteForm';
import ContactUs from '../pages/contact-us/ContactUs';
import TermsAndConditions from '../pages/terms-and-conditions/TermsAndConditions';
import PrivacyPolicy from '../pages/privacy-policy/privacy-policy';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContactBanner from '../components/contact-banner/ContactBanner';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
          <ContactBanner/>
          <Header/>
          <div className="wrap">
            <Route path="/" exact component={Main} />
            <Route path="/services/" exact component={Service} />
            <Route path="/quotes/" exact component={Quotes} />
            <Route path="/quotes/form" exact component={QuotesForm} />
            <Route path="/contact-us" exact component={ContactUs}/>
            <Route path="/terms-and-conditions" exact component={TermsAndConditions}/>
            <Route path="/privacy-policy" exact component={PrivacyPolicy}/>
          </div>
          <Footer/>
          <Cookies/>
        </Router>
      </div>
    );
  }
}

export default App;
