import React from 'react'
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"
import Header from './Components/Header'
import ProductList from './Components/ProductList'

import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetais from './Components/ProductDetais';
import Cart from './Components/Cart';
import Home from './Components/Home';
import "./App.css"

const App = () => {
  return (
    <>

    <Router>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/product" element={<ProductList/>}></Route>

        <Route path="/product/:productId" element={<ProductDetais/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>

      </Routes>
    </Router>
    </>
  )
}

export default App