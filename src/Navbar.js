import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar(){
    return(
      <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="#">React CRUD APP</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">List</NavLink>
            </li>
            <li className="nav-item">
              {/* <NavLink className="nav-link" to="/list">List</NavLink> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}