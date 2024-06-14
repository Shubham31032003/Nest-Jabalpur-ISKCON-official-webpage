import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
function Header() {
  return (
    <div>
      <>
        <header>
          <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
             
              <Link className="navbar-brand" to="/">
               
                <img src="/assets/nest_logo_removedbg.png" alt="Logo" width="50" height="50"/>
                NEST JABALPUR 
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                
              </button>
              
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" exact to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/help">Help</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Divine Discourse
                    </a>
                    <ul className="dropdown-menu">
                      <li><NavLink className="dropdown-item" to="https://vaishnavsongs.iskcondesiretree.com/" target='_blank'>Vaishnava Songs</NavLink></li>
                      <li><NavLink className="dropdown-item" to="https://vedabase.io/en/library/bg/" target='_blank'>Bhagavad-gītā</NavLink></li>
                      <li><NavLink className="dropdown-item" to="https://vedabase.io/en/library/sb/" target='_blank'>Śrīmad-Bhāgavatam</NavLink></li>
                    </ul>
                  </li>
                </ul>
                
                <button
  className="btn btn-custom"
  type="submit"
  onClick={() => window.location.href = '/donate'}
>
  Donate
</button>
                
              </div>
            </div>
          </nav>
        </header>
      </>
    </div>
  )
}

export default Header;
