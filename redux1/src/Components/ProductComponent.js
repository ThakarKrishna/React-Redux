import { Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const ProductComponent = () => {



  const products = useSelector((state) => state.allproducts.products);



  return (
    <>
     { products.length === 0? <h2 style={{margin:"11rem auto auto 24rem"}}>Loading...</h2>:products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
        <div className="col-md-4 mt-4" key={id}>

          <Card style={{ border: "1px solid black", textAlign: "center", marginTop: "1rem" }}>
            <Link style={{ textDecoration: "none", color: 'black' }} to={`/product/${id}`}>
              <Card.Img style={{ width: "13rem", height: "14rem", margin: "2rem" }} variant="top" src={image} />
              <Card.Body>
                <Card.Title style={{ marginTop: "1rem" }} >{title}</Card.Title>

                <Card.Title style={{ fontSize: "1.3rem", marginTop: "1rem" }}>${price}</Card.Title>
                {/* <Card.Footer   className="text-muted">{category}</Card.Footer> */}
                <Button variant="outline-dark mt-3">Buy Now</Button>
              </Card.Body>
            </Link>

          </Card>


        </div>
        )

      })}



    </>
  )
}

export default ProductComponent;