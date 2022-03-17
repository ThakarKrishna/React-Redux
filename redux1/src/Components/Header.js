import React from 'react'
import { Navbar,Container,Button } from 'react-bootstrap';

const Header = () => {
  return (<>
 <>
  <Navbar  bg="dark" variant="dark">
    <Container className="justify-content-center" style={{}}>
    <Navbar.Brand  style={{fontSize:"2rem"}}  to="/">
    <svg style={{marginRight:"0.2rem",marginBottom:"0.3rem"}} xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-cart-check" viewBox="0 0 16 16">
  <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>Shop</Navbar.Brand>
 
    </Container>
    {/* {}
    <Navbar.Collapse style={{marginRight:"1rem"}} className="justify-content-end">
    <Button variant="info">Go Back</Button>
    </Navbar.Collapse> */}
  </Navbar>
  <br />
  
</>
</>
  )
}

export default Header;