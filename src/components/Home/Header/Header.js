import React from 'react';
import { Container, Nav, Navbar, NavLink, } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import logo from '../../../../src/image/logo-light.png'
import'./Header.css'
const Header = () => {
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand to="/"><img  className='logo' src={logo} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto nav-container">
      <Link className='link' to="/">Home</Link>
      <Link className='link'to="/blog">Blog</Link>
      <Link className='link'to="/inventory">Inventory</Link>
      <Link className='link'to="/login">Login</Link>
   
    </Nav>
  
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};


export default Header;