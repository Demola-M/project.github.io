/** @format */

import React from "react";
// import { Link, Route, Routes } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Header from "../components/Header";
// import {Productlist} from '../Pages/Productlist'
// import Footer from "../components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Home = () => {

  return (
    <div>
      <Navbar  />
      <Header />
      {/* <Productlist/> */}
      <Footer />
    </div>
  );
};

export default Home;
