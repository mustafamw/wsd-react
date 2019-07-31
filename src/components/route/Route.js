import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import './Route.scss';

class Routes extends Component{
  render(){
    return (
      <div className="nav-links">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services/">Services</Link>
            </li>
            <li>
              <Link to="/quotes/">Quotes</Link>
            </li>
            <li>
              <Link to="/contact-us/">Contact us</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Routes;
