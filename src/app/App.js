import React, { Component } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Cookies from '../components/cookies/Cookies';
import { BrowserRouter as Router } from "react-router-dom";
import ContactBanner from '../components/contact-banner/ContactBanner';
import Routes from '../components/routes/Routes';
import ReactGA from 'react-ga';
import { Config } from '../config/config';
import './App.scss';

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
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  render(){
    return (
      <div className="App">
        <Router>
          <ContactBanner/>
          <Header/>
          <div className={"wrap " + this.state.path + " "+ this.state.plain}>
            <Routes onRouteChanged={this.onRouteChanged}/>
          </div>
          <Footer/>
          <Cookies/>
        </Router>
      </div>
    );
  }
}

export default App;
