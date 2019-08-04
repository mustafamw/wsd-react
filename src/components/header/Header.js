import React, { Component } from 'react';
import './Header.scss';
import Nav from '../nav/Nav';
import logo from '../../assets/img/logo/wsd-logo.png';
import { BrowserRouter as Route, Link } from "react-router-dom";
import burgerMenu  from '../../assets/img/icons/menu.png';
import { withRouter } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {show: false};
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({show:false});
    }
  }


  render(){

    const navShow = this.state.show;

    const test = () => {
      navShow ? this.setState({show:false}) : this.setState({show:true});
    };

    return (
      <header>
          <div className="container"> 
            <div className="display-flex nav-container">
              <div className="col-12 padding-top-5px padding-bottom-5px">
                <div className="nav-logo">
                  <Link to="/home">
                    <div className="logo">
                      <img src={logo}/>
                    </div>
                    <div className="title">
                      <span className="orange">WSD</span> Courier & Cargo<br/>
                      <small>Same day delivery specialists</small>
                    </div>
                  </Link>
                </div>
                <div className="burger-menu" onClick={test}>
                  <img src={burgerMenu}/>
                </div>
                <div className="route" style={{ display: navShow ? 'block' : 'none' }}>
                  <Nav style={{ display: navShow ? 'block' : 'none' }}/>
                </div>
              </div>
            </div>
          </div> 
          <div className="clear-both"></div>
      </header>
    );
  }
}
export default withRouter(Header);
