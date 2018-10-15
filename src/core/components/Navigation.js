import React, { Component } from 'react';
  import { Link } from 'react-router';
  import { Router, Route, browserHistory } from 'react-router';
// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   Switch,
// } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { slide as Menu } from 'react-burger-menu';

import logo from '../components/buttons/svg/logo.svg';
import search from '../components/buttons/svg/search.svg';
import add from '../components/buttons/svg/add.svg';
import user from '../components/buttons/svg/user.svg';
import Add from './Add';
import User from './User';
// import core from './core';
import SearchBar from './SearchBar';
import Login from './Login';

// Landing page will eventually contain top constellations of the day or something similar.
// At that time, the Search button will bring down a diagonal slide translucent search modal
//    that looks like the one in the initial spec (including the advanced search option at the
//    bottom)
// The plus button is here temporarily as a link to constellations
// The help button may or may not be in the final version, still deciding


class Navigation extends React.Component {

	// constructor(props) {
  //   super(props);
  //   this.state = {open: false};
  // }

  render() {
    return (
		         <div className="nav">
               <div className="nav-left">
                 <Link className="link" to="/" ><img src={logo} /></Link>
                 <Link className="link" to="/" ><img src={search} /></Link>
                 <Link className="link" to="/add"><img src={add} /></Link>
               </div>
               <div className="nav-right">
                 {/* <Link className="link" to="/user"><img src={user} /></Link> */}
                 <Menu right width={ '10%' } customBurgerIcon={ <img src={user} /> } >
                   <img src={user} />
                   <a id="login" className="menu-item" href="/login">Log In</a>
                   <a id="logout" className="menu-item" href="/logout">Log Out</a>
                   <a id="signup" className="menu-item" href="/signup">Sign Up</a>
                   {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
                 </Menu>
               </div>
             </div>
      );
  }
}

export default Navigation;
