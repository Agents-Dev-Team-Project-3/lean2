import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../images/tent-fire.png'

const authenticatedOptions = (
  <Fragment>
    <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
    <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
    <NavLink to='/cart' className='nav-link'>Cart</NavLink>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <NavLink exact to='/' className='nav-link'>Home</NavLink>
    <NavLink to='/products' className='nav-link'>Products</NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg='dark' variant='dark' expand='md'>
    <Navbar.Brand>
      <Link to='/' style={{ color: '#FFF', textDecoration: 'none', float: 'left !important', marginTop: '-15px !important' }}><img src={logo} style={{ width: '35px', marginTop: '-7' }}/>Lean2</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        {user && (
          <span className='navbar-text mr-2'>Welcome, {user.email}</span>
        )}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
