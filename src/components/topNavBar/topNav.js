import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class topNav extends Component{
    render(){
        return(
            <div className='topNavBar'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="www.google.com">Booking MANager</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="www.google.com">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="www.google.com">About us</a>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="www.google.com" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               FAQ's
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="www.google.com">Action</a></li>
                                <li><a className="dropdown-item" href="www.google.com">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="www.google.com">Something else here</a></li>
                            </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </div>
                    </div>
                </nav>
            </div>
        );
    };
}
export default topNav;