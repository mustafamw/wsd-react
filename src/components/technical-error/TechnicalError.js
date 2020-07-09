import React, { Component } from "react";
import './TechnicalError.scss';

class TechnicalError extends Component{
  render(){
    return (
      <div className="technical-error">
          <h3>We are having technical difficulties and are actively working on a fix, please try again later. Thank you</h3>
      </div>
    );
  }
}

export default TechnicalError;
