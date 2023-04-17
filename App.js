/** @format */

import {
  BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";
  import Home from "./Pages/Home";
  import Productlist from "./Pages/ProductList";
  import ProductDetails from "./Pages/ProductDetails";
  
  function App() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products" element={<Productlist />} />
            <Route path="products/:productId" element={<ProductDetails />} />
            {/* <Route path="/Productlist/:productId" element={<productDetail />} /> */}
            {/* <Route path=":productId" element={<ProductDetails />} /> */}
            {/* <Route path="*" element={<Error />} /> */}
          </Routes>
        </BrowserRouter>
      </>
    );
  }
  
  export default App;
  