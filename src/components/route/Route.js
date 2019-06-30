import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

class Routes extends Component{
  render(){
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Routes;
