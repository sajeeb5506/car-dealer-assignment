import React from 'react';
import { Container, Nav, Navbar,  } from 'react-bootstrap';

import { Link, NavLink } from 'react-router-dom';
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
    <NavLink className={({ isActive }) =>
              isActive ? 'active-link' : 'link'} to='/'>Home</NavLink>
      
      <NavLink className={({ isActive }) =>
              isActive ? 'active-link' : 'link'} to="/blog">Blog</NavLink>
      <NavLink className={({ isActive }) =>
              isActive ? 'active-link' : 'link'}to="/inventory">Inventory</NavLink>
      <NavLink className={({ isActive }) =>
              isActive ? 'active-link' : 'link'}to="/login">Login</NavLink>
   
    </Nav>
  
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};


export default Header;