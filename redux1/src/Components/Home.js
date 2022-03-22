import React from 'react'
import { Card } from 'react-bootstrap';
import ProductList from './ProductList';


const Home = () => {
  return (
  <>
    <Card className="bg-dark text-white cardss">
  <Card.Img  src="./Images/img.jpeg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title  style={{fontSize:"3rem",margin:"10rem auto auto 1rem"}}> NEW SEASON ARRIVALS</Card.Title>
    <Card.Text  style={{fontSize:"1.5rem",margin:"auto auto auto 1rem"}}>
     CHECK OUT ALL THE TRENDS
    </Card.Text>
  </Card.ImgOverlay>

</Card>
<ProductList/>
  </>
  )
}

export default Home