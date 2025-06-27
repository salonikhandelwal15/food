import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/productList";
import CartListPage from "./pages/cartList";
import ProductDetailsPage from "./pages/productDetails";



function App() {
  

  return <Fragment>
    <Routes>
      <Route path="/products" element={<ProductListPage/>}/>
      <Route path="/cart-list" element={<CartListPage/>}/>
       <Route path="/product-details/:id" element={<ProductDetailsPage/>}/>
    </Routes>
  </Fragment>


}
export default App;
      