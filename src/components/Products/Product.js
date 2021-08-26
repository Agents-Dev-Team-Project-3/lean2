import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { showProduct } from '../../api/products'
import { updateOrder } from '../../api/orders'

const Products = (props) => {
  const [product, setProduct] = useState(null)
  const { order, user } = props

  useEffect(() => {
    showProduct(props.match.params.id)
      .then((res) => setProduct(res.data.product))
      .catch(console.error)
  }, [])

  const handleAddToCart = () => {
    const newOrder = [...order, product]
    updateOrder(newOrder, user)
      .then((res) => console.log(res))
    // updateOrder(product)
    //   .then(res => )
  }

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
        <Button onClick={handleAddToCart} variant='success'>Add to Cart</Button>{' '}
      </div>
    </div>
  )
}

export default withRouter(Products)
