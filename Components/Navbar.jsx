/* eslint-disable jsx-a11y/anchor-is-valid */
/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
 
  


  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-light container-fluid ">
        <div className="container-fluid d-flex ">
          <a className="navbar-brand fw-bold ms-5" href="#">
            RISE WITH TECH
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
              <li className="nav-item me-3">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <Link to="/products" className="nav-link ">
                <li className="nav-item">Products</li>
              </Link>
              <li className="nav-item dropdown me-3">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  // onChange={}
                >
                  Select Category
                </a>
                <ul className="dropdown-menu me-3">
                  <li>
                    <a className="dropdown-item" href="#">
                      iPhone
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Pods 
                    </a>
                  </li>
                  <li></li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Drone
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <form className="d-flex"
              role="search"
      >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Products"
                aria-label="Search"
              
              />
              <button
                className="btn btn-outline-warning" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
