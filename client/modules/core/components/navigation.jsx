import React from 'react';

import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import RaisedButton from 'material-ui/lib/raised-button';
import LeftNav from 'material-ui/lib/left-nav';
import Menu from 'material-ui/lib/svg-icons/navigation/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Add from 'material-ui/lib/svg-icons/content/add-circle-outline';
import Search from 'material-ui/lib/svg-icons/action/search';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import GTheme from '/client/configs/theme.jsx';

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

class Navigation extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render () {
    return (
      <div>
        <AppBar
          iconElementLeft={
            <div>
              <IconButton><Menu 
                onTouchTap={this.handleToggle}/>
              </IconButton>
              <IconButton><Search 
                onTouchTap={this.handleToggle}/>
              // </IconButton>
              <IconButton><Add
                onTouchTap={this.handleToggle}/>
              </IconButton>
            </div>
          }
          iconElementRight={<LogInButtonsDialog />}
        />              
        <LeftNav
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </LeftNav>
      </div>
    );
  }
};

export default Navigation;
