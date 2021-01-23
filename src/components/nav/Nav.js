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
              <NavLink exact={true} to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/booking/" activeClassName="active">Booking & Quotes</NavLink>
            </li>
            <li>
              <NavLink to="/services/" activeClassName="active">Services</NavLink>
            </li>
            <li>
              <NavLink to="/location/" activeClassName="active">Location</NavLink>
            </li>
            <li>
              <NavLink to="/payment/" activeClassName="active">Payment</NavLink>
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
