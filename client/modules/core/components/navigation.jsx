import React from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import RaisedButton from 'material-ui/lib/raised-button';

import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import FontIcon from 'material-ui/lib/font-icon';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import GTheme from '/client/configs/theme.jsx';


function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
}; 

const Navigation = React.createClass({

  // childContextTypes : {
  //   muiTheme: React.PropTypes.object,
  // },

  // getChildContext() {
  //   return {
  //     muiTheme: ThemeManager.getMuiTheme(GTheme),
  //   };
  // },

  
  handleChange: function(event) {
    this.setState({origin: e.currentTarget.value});
  },

  render () {
    return (
      <div>
	      <RaisedButton label="G" />	
	      <RaisedButton label="Search" linkButton={true} href="/"  />
	      <RaisedButton label="Create"  />
        <LogInButtonsDialog />
      </div>
    );
},
});

export default Navigation;
