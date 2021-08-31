import React, { Fragment } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../images/lean-2-logo-alt3.png'

const authenticatedOptions = (
  <Fragment>
    <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
    <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
    <NavLink to='/cart' className='nav-link'>Cart</NavLink>
    <NavLink to='/orders/order-history' className='nav-link'>My Orders</NavLink>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </Fragment>
)

// create dynamic menu that maps each link in the dropdown according to the category from parent props.
// mapping this:

// const alwaysOptions = (
//   <Fragment>
//     <NavLink exact to='/' className='nav-link'>
//       Home
//     </NavLink>
//     <NavDropdown
//       id='nav-dropdown-dark-example'
//       title='Products'
//       menuVariant='dark'
//       setCategory={setCategory}
//     >
//       {categories}
//       {/* <NavDropdown.Item>
//         {' '}
//         <NavLink to='/products' className='nav-link text-dark'>
//           All Products
//         </NavLink>
//       </NavDropdown.Item>
//       <NavDropdown.Item>
//         {' '}
//         <NavLink to='/products/tents' className='nav-link text-dark'>
//           Tents
//         </NavLink>
//       </NavDropdown.Item>
//       <NavDropdown.Item>
//         {' '}
//         <NavLink to='/products/backpacks' className='nav-link text-dark'>
//           Backpacks
//         </NavLink>
//       </NavDropdown.Item>
//       <NavDropdown.Item>
//         {' '}
//         <NavLink to='/products/footwear' className='nav-link text-dark'>
//           Footwear
//         </NavLink>
//       </NavDropdown.Item>
//       <NavDropdown.Item>
//         <NavLink
//           to='/products/camping-accessories'
//           className='nav-link text-dark'>
//           Camping Accessories
//         </NavLink>{' '}
//       </NavDropdown.Item> */}
//     </NavDropdown>
//   </Fragment>
// )

const Header = ({ user, products, setCategory }) => {
  const categories = products.map((product) =>
    <NavDropdown.Item key={product.category}>
      {' '}
      <NavLink
        to={'/products/' + product.category}
        className='nav-link text-dark'
        onClick={() => setCategory(product.category)}
      >
        {product.category}
      </NavLink>
    </NavDropdown.Item>)
  return (
    <Navbar bg='dark' variant='dark' expand='md'>
      <Navbar.Brand>
        <Link
          to='/'
          style={{
            color: '#FFF',
            textDecoration: 'none',
            float: 'left !important',
            marginTop: '-15px !important'
          }}>
          <img
            src={logo}
            style={{ width: '250px', marginLeft: '25px', marginTop: '-7' }}
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          {user && (
            <span className='navbar-text mr-2'>Welcome, {user.email}</span>
          )}

          <Fragment>
            <NavLink exact to='/' className='nav-link'>
              Home
            </NavLink>
            <NavDropdown
              id='nav-dropdown-dark-example'
              title='Products'
              menuVariant='dark'
            >
              {categories}
              {/* <NavDropdown.Item>
                {' '}
                <NavLink to='/products' className='nav-link text-dark'>
                  All Products
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {' '}
                <NavLink to='/products/tents' className='nav-link text-dark'>
                  Tents
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {' '}
                <NavLink to='/products/backpacks' className='nav-link text-dark'>
                  Backpacks
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {' '}
                <NavLink to='/products/footwear' className='nav-link text-dark'>
                  Footwear
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  to='/products/camping-accessories'
                  className='nav-link text-dark'>
                  Camping Accessories
                </NavLink>{' '}
              </NavDropdown.Item> */}
            </NavDropdown>
          </Fragment>

          {/* {alwaysOptions} */}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
