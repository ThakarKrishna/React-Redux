import React, { useState, useEffect } from 'react';
import { Row,Col,Button ,Card, Container} from 'react-bootstrap';
import { useNavigate } from "react-router";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from '../redux/actios/ProductActions';
import { delCart } from '../redux/actios/ProductActions';
import {selectedProduct,removeSelectedProduct} from "../redux/actios/ProductActions";



const ProductDetais = () => {

  const Navigate = useNavigate();


  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  // console.log(productId);

  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
const addToCart =(data)=>{
  dispatch(addCart(data))
  console.log(addCart);
}
const RemoveToCart = (data)=>{
  dispatch(delCart(data))
}

const goToCart = ()=>{
Navigate("/cart")
}

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
    <div className="container mt-5"  >
      {Object.keys(product).length === 0 ? (<h2 style={{margin:"11rem auto auto 24rem"}}>Loading...</h2>) :
        (
<Container>
          <Row>
            <Col><img src={image} alt={title} height="400px" width="400px"/></Col>
            <Col>
            <br/>
            <h4 style={{textTransform:"uppercase",color:'black'}}>{category}</h4>
            <br/>
            <Card.Title style={{fontSize:"2rem"}}>{title}</Card.Title>
            <br/>
            <h2>${price}</h2>
            <br/>
            <Card.Text>
            {description}
               </Card.Text>
               <br/>
               <Button onClick={()=>{
                 addToCart(product)
               }} variant="outline-dark">Add To Cart</Button>{' '}
                <Button onClick={()=>{
                 RemoveToCart(product)
               }} variant="outline-dark">Remove To Cart</Button>{' '}
                <Button onClick={goToCart
               } variant="dark">Go To Cart</Button>{' '}
            </Col>

          </Row>
          </Container>
         
        )
      }
    </div>



    </>


  )
}

export default ProductDetais