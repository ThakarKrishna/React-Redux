import React, { useState, useEffect } from 'react';
import { Modal, Button ,Card} from 'react-bootstrap';
import { useNavigate } from "react-router";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {selectedProduct,removeSelectedProduct} from "../redux/actios/ProductActions";



const ProductDetais = () => {

  const Navigate = useNavigate();




  const goBack = () => {
    Navigate("/")

  }

  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  // console.log(productId);

  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail =  (id) => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>{
      console.log(res.data); 
      dispatch(selectedProduct(res.data))
    }).catch((err) => {
        console.log(err);
      });
   
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);



  return (

    <>
    <div className="container" style={{ width: '500px' }}>
      {Object.keys(product).length === 0 ? (<h2 style={{margin:"11rem auto auto 12rem"}}>Loading...</h2>) :
        (
          <Card  style={{border:"1px solid black",mardinBottom:"2rem"}}>
            <Card.Img variant="top" src={image} style={{ width: '18rem',margin:" 2rem auto auto 6rem" }} />
            <br/>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <br/>
              <Card.Text>
             {description}
              </Card.Text>
              <Card.Title>${price}</Card.Title>
              <br></br>
              <Card.Footer className="text-muted">{category}</Card.Footer>

            </Card.Body>
          </Card>
        )
      }
    </div>



    </>


  )
}

export default ProductDetais