import React from 'react';
import './Header.scss';
import Routes from '../route/Route';
import logo from '../../assets/img/logo/wsd-logo.png';


function Header() {
  return (
    <header>
        <div className="container"> 
          <div className="logo">
            <img src={logo}/>
          </div>
        </div> 
        <div className="container"> 
          <Routes />
        </div>
    </header>
  );
}

export default Header;
