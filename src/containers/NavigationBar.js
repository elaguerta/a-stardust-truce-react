import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className='mr-auto'>
          <Navbar.Brand href='/'>A Stardust Truce</Navbar.Brand>
          <NavLink to='/' className="nav-link">Home</NavLink>
          <NavLink to='/structures' className="nav-link">Structures</NavLink>
          <NavLink to='/login' className="nav-link">Login</NavLink>
          <NavLink to='/signup' className="nav-link">Signup</NavLink>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavigationBar;
