import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Navigation from './core/components/navigation.jsx';
// import Core from './core/components/core.jsx';
import Admin from './admin-crud/Admin';
import './core/components/buttons/btn.css';
import './App.css';
import './index.css';


class App extends Component {
  render() {
    return (
      <div>
      <Admin />
      {/* <div className="App">
          <div className="App-header">
             <div className="AppBar">
          			<Navigation />
              </div>
          </div>

        <div className="App-intro">
           <div className="container">
              <div id="core" className="core">								
				        <Core/>
        			</div>
      			</div>
  			</div>
      
			<div className="body">
  	 		<p> copyright © 2017 Nayelo </p>
			</div> */}
		</div>
		);
  }
}
export default App;
