/** @format */

import React, {useState} from "react";
import  productData from "../productData";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"
import Header from "../Components/Header";



const Productlist = () => {
 const [search, setSearch] = useState("")

  
  const productsData = productData.filter((product) => {
    return search.toLowerCase() === "" ? product : product.name.toLowerCase().includes(search) || product.category.toLowerCase().includes(search)
  }).map(product => {
    return (
      <div className="col-md-6 col-lg-3" key={product.id}>
        <Link className="nav-link" to={`/products/${product.id}`}>
          <div
            className="card shadow border-0"
            style={{ backgroundColor: "#efefef" }}
          >
            <img
              src={product.image}
              className="card-img-top "
              alt="..."
              style={{ height: "400px" }}
            />
            <div className="card-body" style={{ backgroundColor: "white" }}>
              {" "}
              <h5 className="card-title text-start "> {product.name}</h5>{" "}
              <p className="card-text text-end text-success fw-bold">
                ${product.price}
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  })

  

    return (
      <>
        <Navbar />
        <Header />
        <div className="container">
          <article className="mt-5 mb-5 text-center">
            <h1 className="text-success"> RISE WITH TECH PRODUCTS</h1>
            <p className=""></p>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Products"
                aria-label="Search"
              />
              {/* <button className="btn btn-outline-warning" type="submit">
                Search
              </button> */}
            </form>
          </article>
          <div className="container">
            <div className="row g-4 ms-md-auto pt-4 d-sm-center">
              {productsData}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
};

export default Productlist;

