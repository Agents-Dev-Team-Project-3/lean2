import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'

import { index } from '../../api/products'

const Products = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    index()
      .then((res) => setProducts(res.data.products))
      .catch(console.error)
  }, [])

  const productList = products.map((product) => (
    <li key={product._id}>
      <Link to={`/products/${product._id}`}>{product.name}</Link>
    </li>
  ))

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Products</h3>
        <ul>{productList}</ul>
      </div>
    </div>
  )
}

export default withRouter(Products)
