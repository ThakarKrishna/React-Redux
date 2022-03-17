import React from 'react'
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"
import Header from './Components/Header'
import ProductList from './Components/ProductList'

import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetais from './Components/ProductDetais';


const App = () => {
  return (
    <>

    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<ProductList/>}></Route>
        <Route path="/product/:productId" element={<ProductDetais/>}></Route>

      </Routes>
    </Router>
    </>
  )
}

export default App