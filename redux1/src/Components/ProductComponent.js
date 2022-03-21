import React, { useEffect } from 'react'
import { Card, Button } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



const ProductComponent = () => {



  const products = useSelector((state) => state.allproducts.products);



  return (
    <>

      {products.map((product) => {
        const { id, title, image, price, category } = product;
        return ( <div className="col-md-4 mt-4" key={id}>
         
          <Card  style={{border:"1px solid black"}}>
          <Link style={{textDecoration:"none",color:'black'}} to={`/product/${id}`}>
            <Card.Img style={{width:"200px",height:"200px",margin:"2rem"}} variant="top" src={image} />
            <Card.Body>
              <Card.Title style={{marginTop:"1rem"}} >{title}</Card.Title>
              
              <Card.Title style={{fontSize:"1.3rem",marginTop:"1rem"}}>${price}</Card.Title>
              <Card.Footer   className="text-muted">{category}</Card.Footer>
              </Card.Body>
              </Link>
              <Button
    style={{margin:"1rem auto 1rem 10rem"}} variant="success">Add To Cart</Button>{' '}
          </Card>
      
         
          </div>
        )

      })}


    </>
  )
}

export default ProductComponent;