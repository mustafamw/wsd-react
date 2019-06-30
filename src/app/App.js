import React from 'react';
import '../scss/App.scss';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Main from '../pages/main/Main';
import AboutUs from '../pages/about-us/AboutUs';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="wrap">
          <Route path="/" exact component={Main} />
          <Route path="/about/" exact component={AboutUs} />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
