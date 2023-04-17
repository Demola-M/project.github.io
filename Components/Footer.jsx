/* eslint-disable jsx-a11y/anchor-is-valid */
/** @format */

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-danger bg-gradient p-5 mt-5 p-bottom">
      <div className="container p-1">
        <hr className="border border-light border-2 opacity-90"></hr>
        <div className="row">
          <div className="col-md-6">
            <a className="navbar-brand text-white fw-bold" href="#">
              RISE WITH TECH
            </a>
            {/* <p className="text-light">
              Your natural candle made for <br /> your home and for your
              wellness
            </p> */}
          </div>
          <div className="col-md-2 ">
            <div className="container">
              <ul className="list-unstyled ">
                <li className="mt-4">
                  <a className="text-decoration-none text-light" href="">
                    Company
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-decoration-none text-light " href="">
                 Black friday
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-decoration-none text-light " href="">
                    New products
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-decoration-none text-light " href="">
                    Best products
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="container">
              <ul className="list-unstyled">
                <li className="mt-4">
                  <a className="text-decoration-none text-light" href="">
                    About us
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-decoration-none text-light" href="">
                    Help center
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-decoration-none text-light" href="">
                    Shipping policy
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-decoration-none text-light" href="">
                    Become a seller
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="container">
              <ul className="list-unstyled">
                <li className="mt-4">
                  <a className="text-decoration-none text-light" href="">
                    email
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-decoration-none text-light" href="">
                    Report a product
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-decoration-none text-light" href="">
                    Privacy Policies
                  </a>
                </li>
                <li className="mt-4 ">
                  <a className="text-decoration-none text-light" href="">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
