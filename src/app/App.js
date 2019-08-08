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
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter } from "react-router-dom";
import ContactBanner from '../components/contact-banner/ContactBanner';
import ScrollToTop from '../components/scroll-to-top/ScrollToTop';
import NotFound from '../pages/404/404';
import Routes from '../components/routes/Routes';
import ReactGA from 'react-ga';
import { Config } from '../config/config';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      plain: '',
      path: ''
    };
    ReactGA.initialize(Config.GA);
    this.onRouteChanged = this.onRouteChanged.bind(this);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  onRouteChanged(data) {
    if(!data.match){
      this.setState({plain: 'plain'});
      this.setState({path: data.pathname});
    }else{
      this.setState({plain: ''});
      this.setState({path: data.pathname});
    }
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render(){
    return (
      <div className="App">
        <Router>
          <ScrollToTop>
            <ContactBanner/>
            <Header/>
            <div className={"wrap " + this.state.path + " "+ this.state.plain}>
              <Routes onRouteChanged={this.onRouteChanged}/>
            </div>
            <Footer/>
            <Cookies/>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}

export default App;
