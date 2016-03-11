import React from 'react';

// import AppBar from 'material-ui/lib/app-bar';
// import IconButton from 'material-ui/lib/icon-button';
// import RaisedButton from 'material-ui/lib/raised-button';
// import LeftNav from 'material-ui/lib/left-nav';
// import Menu from 'material-ui/lib/svg-icons/navigation/menu';
// import MenuItem from 'material-ui/lib/menus/menu-item';
// import Create from 'material-ui/lib/svg-icons/content/add-circle-outline';
// import Search from 'material-ui/lib/svg-icons/action/search';
// import ThemeManager from 'material-ui/lib/styles/theme-manager';
// import GTheme from '/client/configs/theme.jsx';

// Can't import svg's from Public - why?

// import Add from '.public/plus_sign.svg';
// import Search from '/public/MagGlass.svg';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const styles = {
  title: {
    cursor: 'pointer',
  },
}; 

  // childContextTypes : {
  //   muiTheme: React.PropTypes.object,
  // },

  // getChildContext() {
  //   return {
  //     muiTheme: ThemeManager.getMuiTheme(GTheme),
  //   };
  // },

handleToggle = () => this.setState({open: !this.state.open});
handleClose = () => this.setState({open: false});

// Make this work with a material-ui appbar and svg icons

class Navigation extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render () {
    const {origin} = this.props;
    return (
      <div>     
        <input type="button" name="search" value="search" onClick={this.newOrigin.bind(this)}></input> 
        <input type="button" name="create" value="create" onClick={this.newOrigin.bind(this)}></input> 
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
};

export default Navigation;


// Menu icon should only appear when viewing a single item
// LeftNav should contain all the admin data for current item displayed

