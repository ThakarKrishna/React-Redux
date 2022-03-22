import React from 'react';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addCart } from '../redux/actios/ProductActions';


const Cart = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.allproducts.products);


  const handleclick = (data) => {
    console.log(data)
    dispatch(addCart(data))
    console.log(addCart)
  }

  return (
    <>
      {/* console.log("dfg") */}
      {products.map((product) => {
        const { id, title, image, price } = product;
        return (
          <div className="mt-5" key={id}>

            <Container>
              <Row style={{ padding: "2rem" }}>
                <Col><img src={image} alt={title} height="250px" width="250px" /></Col>
                <Col>
                  <br />

                  <Card.Title style={{ fontSize: "1.5rem" }}>{title}</Card.Title>
                  <br />
                  <h5>2 X $ {price} = $ {2 * price  }</h5>

                  <br />

                  <Button variant="dark me-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                  </svg></Button>
                  <Button onClick={()=>handleclick(product)} variant="dark me-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                  </svg></Button>

                </Col>

              </Row>
            </Container>
          </div>
        )

      })}

    </>
  )
}

export default Cart;