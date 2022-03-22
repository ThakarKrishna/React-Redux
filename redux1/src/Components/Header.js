import React from 'react'
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Header = () => {
  const style = {
    fontSize: "1.3rem",
    color: "black"
  }
  const Navigate = useNavigate()

  const handleclick = () => {
    Navigate("/cart")
  }
  const cartListCount = useSelector((state) => {
    let totalQty = 0;
    if (state.handleCart && state.handleCart.length) {
      state.handleCart.forEach((item) => {
        totalQty += item.qty;
      });
    } 
    return totalQty;
  });

  return (<>
    <>
      <Navbar bg="light" variant="light">
        <Container >
          <Navbar.Brand style={{ fontSize: "2rem" }} href="/">
            <svg style={{ marginRight: "0.2rem", marginBottom: "0.3rem" }} xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-cart-check" viewBox="0 0 16 16">
              <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>FAKE SHOP</Navbar.Brand>
          <Nav style={{ marginRight: "12rem" }}>
            <Nav.Link style={style} href="/">Home</Nav.Link>
            <Nav.Link style={style} href="/product">Product</Nav.Link>
            <Nav.Link style={style} href="/about">About</Nav.Link>
            <Nav.Link style={style} href="/contact">Contact</Nav.Link>

          </Nav>

        </Container>
        <div className="d-flex ">
          {/* <Button variant="outline-dark">Login</Button> */}
          {/* <Button variant="outline-dark">Register</Button> */}
          <Button onClick={handleclick} style={{ marginRight: "2rem", display: "flex" }} variant='outline-dark '> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>Cart({cartListCount})</Button>
        </div>

        {/* <div style={{width:"4.5rem",height:"4.5rem",marginRight:"1rem",backgroundColor:"white",borderRadius:"50%"}}>
<div style={{width:"1.4rem",borderRadius:"50%",backgroundColor:"green",margin:"0.5rem",color:"white",padding:"0.1rem",marginLeft:"2.5rem"}}><span style={{marginLeft:"0.35rem"}}>{state.length}</span></div>
    <svg  style={{color:"green",margin:"-1rem auto auto 0.7rem"}} xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
    </div> */}

      </Navbar>

    </>
  </>
  )
}

export default Header;