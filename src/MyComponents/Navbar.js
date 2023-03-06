import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand col-8" to="/">
          <img src="img/logo.png" alt='logo' className="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav col-4">
              <Link className="nav-link active mr-5" aria-current="page" to="/Home">Home</Link>
              <Link className="nav-link" to="/Careers">Careers</Link>
              <Link className="nav-link" to="/Brands">Brands</Link>
              <Link className="nav-link" to="/SingleBrands">SingleBrands</Link>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
