
import './App.css';
import SideNav from './components/sideNavBar/sideNav';
import TopNav from './components/topNavBar/topNav';
import React, { Component } from 'react';

class App extends Component{
  render(){
    return(
      <div className="App">
      <div className = "topNav">
        <TopNav />
      </div>
      <div className = "body">
      <div className = "sideNav">
        <SideNav />
      </div>
      <div className="mainContent">
      <button type="button" class="btn btn-primary">Primary</button>
      </div>
      </div>
    </div>
    );
  };
}

export default App;
