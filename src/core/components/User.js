import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

class User extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentMenu: 'slide',
//       side: 'left'
// };
// }

  render() {
    return (
      <div className="user">
        Add User Component
        {/* <Menu right width={ '20%' }>
          <a id="login" className="menu-item" href="/">Log In</a>
          <a id="logout" className="menu-item" href="/about">Log Out</a>
          <a id="signup" className="menu-item" href="/contact">Sign Up</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu> */}
      </div>
          );
  }
}

export default User;
