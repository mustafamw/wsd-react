import React, { Component } from "react";
import { BrowserRouter as Route, NavLink } from "react-router-dom";
import './Nav.scss';

class Nav extends Component{
  render(){
    return (
      <div className="nav-links">
        <nav>
          <ul>
            <li>
              <NavLink to="/home" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services/" activeClassName="active">Services</NavLink>
            </li>
            <li>
              <NavLink to="/quotes/" activeClassName="active">Quotes</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us/" activeClassName="active">Contact us</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
