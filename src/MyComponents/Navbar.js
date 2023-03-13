import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand col-6 d-flex" to="/">
          <h1>L</h1>
          <img src="img/logo.png" alt='logo' className="logo" style={{color: 'red', width: '36px', height: '36px', marginTop: '12px',}} />
          <h1>GO</h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav col-6 ">
              <Link className="nav-link active mr-5" aria-current="page" to="/Home"><b>Home</b></Link>
              <Link className="nav-link" to="/Careers"><b>Careers</b></Link>
              <Link className="nav-link" to="/Brands"><b>Brands</b></Link>
              <Link className="nav-link" to="/SingleBrands"><b>SingleBrands</b></Link>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
