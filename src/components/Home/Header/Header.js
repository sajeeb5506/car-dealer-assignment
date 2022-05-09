import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar,  } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../src/image/logo-light.png'
import auth from '../../../Firebase/Firebase.init';
import'./Header.css'
const Header = () => {

        const [user] = useAuthState(auth);

        const handelSignout=()=>{
          signOut(auth);
        }

    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  >
  <Container>
  <Navbar.Brand to="/"><img  className='logo' src={logo} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto nav-container">
    <NavLink className={({ isActive }) =>
              isActive ? 'active-link' : 'link'} to='/'>Home</NavLink>
      
      <NavLink className={({ isActive }) =>
              isActive ? 'active-link' : 'link'} to="/blog">Blog</NavLink>
  
   

           {
             user?
             <NavLink className={({ isActive }) =>
              isActive ? 'active-link' : 'link'}to="/manageitems">Manage Items</NavLink>
          
              :
              <NavLink className={({ isActive }) =>
              isActive ? '' : 'link'}to=""></NavLink>
           }
           {
             user?
             <NavLink className={({ isActive }) =>
             isActive ? 'active-link' : 'link'}to="/additems">Add Items</NavLink>
          
              :
              <NavLink className={({ isActive }) =>
              isActive ? '' : 'link'}to=""></NavLink>
           }
           {
             user?
             <NavLink className={({ isActive }) =>
              isActive ? 'active-link' : 'link'}to="/myitems">My Items</NavLink>
              :
              <NavLink className={({ isActive }) =>
              isActive ? '' : 'link'}to=""></NavLink>
           }

   
          
        
   
    </Nav>
    <Nav>
    {
        user?
          //  <Nav.Link  as={Link} to="/login">Sign Out</Nav.Link>
     

          <button className='signout' onClick={handelSignout}>Sign Out</button>
        :
        // <Nav.Link  as={Link} to="/regester">
        // Sign Up
        // </Nav.Link>
        <NavLink className={({ isActive }) =>
        isActive ? 'active-link' : 'link'}to="/login">Login</NavLink>
      }
    </Nav>
  
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};


export default Header;