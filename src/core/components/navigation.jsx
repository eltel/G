import React, { Component } from 'react';

import logo from '../components/buttons/svg/logo.svg';
import user from '../components/buttons/svg/user.svg';

import LogInButtonsDialog from '../components/LogInButtonsDialog.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const styles = {
  title: {
    cursor: 'pointer',
  },
};

class Navigation extends React.Component {

	constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    const {origin} = this.props;
    return (
      <div className="nav">
        <div className="nav-left">
				    <button id="home" name="home" value="home" onClick='window.location="http://localhost:3000/"'><img src={logo} /></button>
        </div>

<LogInButtonsDialog />
      </div>
    );
  }

  newOrigin(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const {setOrigin} = this.props;
    const originRef = event.currentTarget.value;

    setOrigin(originRef);
  }
}

export default Navigation;
