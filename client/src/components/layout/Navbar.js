import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import LogoET from './LogoET';



const NavBar = () => {
    return (
        <Fragment>
  <Navbar className='navbar' expand="lg">
  <Navbar.Brand href="#home">
  <LogoET />
  </Navbar.Brand>
  <h4 className='font-weight-bold'>Ethereal Touch NYC</h4>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <ul className='navbar-nav ml-auto'>
      <li className='nav-item'><Nav.Link className='nav-link' href="#home">Home</Nav.Link></li>
      <li className='nav-item'><Nav.Link className='nav-link' href="#link">About</Nav.Link></li>
      <li className='nav-item'><Nav.Link className='nav-link' href="#link">Services</Nav.Link></li>
      <li className='nav-item'><Nav.Link className='nav-link' href="#link">Contact Us</Nav.Link></li>

      </ul>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </Fragment>
    )
}

export default NavBar;