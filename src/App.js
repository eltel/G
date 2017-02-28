import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import logo from './buttons/svg/logo.svg';
import add from './buttons/svg/add.svg';
import Navigation from './components/navigation.jsx';
import search from './buttons/svg/search.svg';
import help from './buttons/svg/help.svg';
import user from './buttons/svg/user.svg';
import './buttons/btn.css';
import './App.css';
import './index.css';
import SearchBar from './components/SearchBar.js';
import Title from './components/title2.jsx';
import Core from './components/core.jsx';



class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
             <div className="AppBar">
			<Navigation />
              </div>
          </div>

        <div className="App-intro">
           <div className="container">
              <p> Search for people, events, organizations, things or ideas.</p>

                           <div id="core" className="core">
								
						        <Core/>
			</div>
			</div>
			</div>
			<div className="body">
			<p> copyright © 2017 Nayelo </p>
			</div>
			</div>
		);
  }
}
export default App;
