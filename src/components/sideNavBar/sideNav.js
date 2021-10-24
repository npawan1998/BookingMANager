import React, { Component } from 'react';

class sideNav extends Component {
  render() {
    return (
      <div className="sideNavBar">
        <div id="mySidebar" className="sidebar">
                <a href="google.com" class="closebtn">&times;</a>
                <a href="google.com">About</a>
                <a href="google.com">Services</a>
                <a href="google.com">Clients</a>
                <a href="google.com">Contact</a>
                </div>
      </div>
    );
  };
}
export default sideNav;