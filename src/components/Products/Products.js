import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { index } from '../../api/products'

const Products = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    index()
      .then((res) => setProducts(res.data.products))
      .then((res) => console.log(res, products))
      .catch(console.error)
  }, [])

  // onSignIn = (event) => {
  //   event.preventDefault()

  //   const { msgAlert, history, setUser } = this.props

  //   signIn(this.state)
  //     .then((res) => setUser(res.data.user))
  //     .then(() =>
  //       msgAlert({
  //         heading: 'Sign In Success',
  //         message: signInSuccess,
  //         variant: 'success',
  //       })
  //     )
  //     .then(() => history.push('/'))
  //     .catch((error) => {
  //       this.setState({ email: '', password: '' })
  //       msgAlert({
  //         heading: 'Sign In Failed with error: ' + error.message,
  //         message: signInFailure,
  //         variant: 'danger',
  //       })
  //     })
  // }

  // const { email, password } = this.props
  const productList = products.map((product) => (
    <li key={product._id}>
      {product.name}
      {/* <Link to={`/products/${book._id}`}>{book.title}</Link> */}
    </li>
  ))

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Products</h3>
        {productList}
      </div>
    </div>
  )
}

export default withRouter(Products)
