import React,{useEffect} from 'react'
import ProductComponent from './ProductComponent'
import { useSelector,useDispatch } from 'react-redux';
import {setProducts} from "../redux/actios/ProductActions";
import axios from "axios";


const ProductList = () => {

  const products = useSelector((state)=>state.allproducts.products);
  const dispatch =useDispatch();


  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res)=>{
  dispatch(setProducts(res.data))
    }).catch((err)=>{
      console.log(err)
    })
console.log(setProducts)

  }, [])
  


console.log(products)
  return (
      <>
      <div className="container mt-5">
        <div className="row">

      <ProductComponent/>
        </div>

      </div>
      </>
  )
}

export default ProductList