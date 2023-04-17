/** @format */

import { BsArrowLeft } from "react-icons/bs";
import React from "react";
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import productData from '../productData';
import Footer from '../Components/Footer';


const ProductDetails = () => {
  const { productId } = useParams();
  
  const thisProduct = productData.find((product) => product.id === productId);
  const { image, name, description,price, category } = thisProduct;
      //  const {  name } = thisProduct;
  //   if (!products) {
  //     return "No matching product found.";
  //   }

  //   const { name } = thisProduct;
    // console.log(productId);
  return (
    <div>
      <Navbar />
      {/* <h4>{thisProduct}</h4> */}
      <Link to="/products" className="btn btn-outline-danger mx-5 mt-4 ">
        <BsArrowLeft className="pe-1 fs-4" />
        back to products
      </Link>

      <div className="container my-5 mt2">
        <div className="row">
          <div className="col-md-5">
            <div className="main-img">
              <img
                className="img-fluid "
                src={image}
                alt="ProductS"
              />
              <div className="row my-3 previews">
                <div className="col-md-3">
                  <img
                    className="w-75"
                    src={image}
                    alt="Sale"
                  />
                </div>
                <div className="col-md-3">
                  <img
                    className="w-75"
                    src={image}
                    alt={name}
                  />
                </div>
                <div className="col-md-3">
                  <img
                    className="w-75"
                    src={image}
                    alt={name}
                  />
                </div>
                <div className="col-md-3">
                  <img
                    className="w-75"
                    src={image}
                    alt={name}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="main-description px-2">
              <div className="category text-bold">{ category}</div>
              <div className="product-title text-bold my-3"></div>

              <div className="price-area my-4">
                <p className="old-price mb-1">
                  <del>{ price}</del>{" "}
                  <span className="old-price-discount text-danger">
                    (20% off)
                  </span>
                </p>
                <p className="new-price text-bold mb-1">$80</p>
                <p className="text-secondary mb-1">
                  (Shipping fees apply)
                </p>
              </div>

              <div className="buttons d-flex my-5">
                <div className="block">
                  <a href="#" className="shadow btn custom-btn ">
                    Wishlist
                  </a>
                </div>
                <div className="block">
                  <button className="shadow btn custom-btn">Add to cart</button>
                </div>

                <div className="block quantity">
                  <input
                    type="number"
                    className="form-control"
                    id="cart_quantity"
                    value="1"
                    min="0"
                    max="5"
                    placeholder="Enter email"
                    name="cart_quantity"
                  />
                </div>
              </div>
            </div>

            <div className="product-details my-4">
              <p className="details-title text-color mb-1">Product description</p>
              <p className="description">
                {description}
              </p>
            </div>

            <div className="row questions bg-light p-3">
              <div className="col-md-1 icon">
                <i className="fa-brands fa-rocketchat questions-icon"></i>
              </div>
              <div className="col-md-11 text">
                 Feel free to contact our representatives via live chat or email.
              </div>
            </div>

            <div className="delivery my-4">
              <p className="font-weight-bold mb-0">
                <span>
                  <i className="fa-solid fa-truck"></i>
                </span>{" "}
                <b>Delivery process starts in 3 days after purchase</b>{" "}
              </p>
              <p className="text-secondary">
                Order now to get this product delivery
              </p>
            </div>
            <div className="delivery-options my-4">
              <p className="font-weight-bold mb-0">
                <span>
                  <i className="fa-solid fa-filter"></i>
                </span>{" "}
                {/* <b></b>{" "} */}
              </p>
              {/* <p className="text-secondary">View delivery options here</p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container similar-products my-4">
        <hr />
        <p className="display-5">Similar Products</p>

        <div className="row">
          <div className="col-md-3">
            <div className="similar-product">
              <img
                className="w-100"
                src= "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-2up-purple-220907-geo_inline.jpg.large.jpg"
                alt="Preview"
              />
              <p className="title">Product</p>
              <p className="price">$100</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className=" other similar-product">
              <img
                className="w-100"
                src="https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-2up-purple-220907-geo_inline.jpg.large.jpg"
                alt="Preview"
              />
              <p className="title">Product</p>
              <p className="price">$120</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="similar-product">
              <img
                className="w-100"
                src= "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-2up-purple-220907-geo_inline.jpg.large.jpg" 
                alt="Preview"
              />
              <p className="title">Product</p>
              <p className="price">$120</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="similar-product">
              <img
                className="w-100"
                src= "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-2up-purple-220907-geo_inline.jpg.large.jpg"
                alt="Preview"
              />
              <p className="title">Product</p>
              <p className="price">$120</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}









export default ProductDetails;











