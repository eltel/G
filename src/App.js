import React, { Component } from 'react';
import logo from './buttons/svg/logo.svg';
import add from './buttons/svg/add.svg';
import search from './buttons/svg/search.svg';
import help from './buttons/svg/help.svg';
import user from './buttons/svg/user.svg';
import './buttons/btn.css';
import './App.css';
import './index.css';

//


class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
             <div className="AppBar">

          <img src={logo} className="btn-logo" alt="logo" />
          <img src={add} className="btn-add" alt="add" />
          <img src={search} className="btn-search" alt="search" />

          <img src={help} className="btn-help" alt="help" />
          <img src={user} className="btn-user" alt="user" />

              </div>
          </div>

        <div className="App-intro">
           <div className="container">
              <p> Search for people, events, organizations, things or ideas.</p>

                            <div className="search">

                                 <code></code>

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
