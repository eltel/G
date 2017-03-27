import React, { Component } from 'react';

import logo from '../components/buttons/svg/logo.svg';
import user from '../components/buttons/svg/user.svg';

class Navigation extends React.Component {

	constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    return (
      <div className="nav">
        <div className="nav-left">
			    <button id="home" name="home" value="home" onClick='window.location="http://localhost:3000/"'><img src={logo} /></button>
        </div>
        <div className="nav-right">
          <button id="user" name="user" value="user" onClick='window.location="http://localhost:3000/"'><img src={user} /></button>
        </div>    
      </div>
    );
  }
}

export default Navigation;
