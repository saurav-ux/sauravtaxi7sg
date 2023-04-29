import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Nav7() {
  return (
    <Navbar bg="light" expand="lg" className='navbar '>
      <Container>
        <Navbar.Brand href="#home"> <img src="maxitaxi-logo.png" alt="Bootstrap" width="190" height="40"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#home">Contact US</Nav.Link>
            <Nav.Link href="#booknow">Book Now</Nav.Link>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nav7
