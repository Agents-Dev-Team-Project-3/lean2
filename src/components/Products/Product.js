import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { showProduct } from '../../api/products'

const Products = (props) => {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    showProduct(props.match.params.id)
      .then((res) => setProduct(res.data.product))
      .then((res) => console.log(res, product))
      .catch(console.error)
  }, [])

  if (!product) {
    return <p>Loading...</p>
  }

  const { name, image, description, price } = product
  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Product</h3>
        <ul>
          <li>{name}</li>
          <li>
            <img src={`${image}`} width='200px'></img>
          </li>
          <li>{description}</li>
          <li>${price}</li>
        </ul>
      </div>
    </div>
  )
}

export default withRouter(Products)
