import React, { useEffect } from 'react'
import { Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const ProductComponent = () => {

  const products = useSelector((state) => state.allproducts.products);


  console.log(products)


  return (
    <>

      {products.map((product) => {
        const { id, title, image, price, category } = product;
        return ( <div className="col-md-4 mt-3" key={id}>
          <Link to={`/product/${id}`}>
          <Card >
            <Card.Img style={{width:"200px",height:"200px"}} variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              
              <Card.Title>${price}</Card.Title>
              <Card.Footer   className="text-muted">{category}</Card.Footer>

            </Card.Body>
          </Card>
          </Link>
          </div>
        )

      })}


    </>
  )
}

export default ProductComponent