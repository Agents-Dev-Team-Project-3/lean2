import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { showProduct } from '../../api/products'
import { updateOrder, showOrder } from '../../api/orders'

const Products = (props) => {
  const [product, setProduct] = useState(null)
  const { order, user, setOrder } = props

  useEffect(() => {
    showProduct(props.match.params.id)
      .then((res) => setProduct(res.data.product))
      .catch(console.error)
  }, [])

  const handleAddToCart = () => {
    const oldOrder = order.contents
    console.log(oldOrder)
    let matched = false
    const orderObj = {
      id: product._id,
      quantity: 1,
      product: product
    }
    // if array is not empty,
    // iterate and look for a matching id.  If found, increment quantity.
    if (oldOrder.length === 0) {
      oldOrder.push(orderObj)
    } else {
      // iterate each item, if id's match, increment quantity
      oldOrder.forEach(item => {
        if (item.id === product._id) {
          // this will track if we've matched for below boolean
          matched = true
          item.quantity++
        }
      })
      // after the forEach if there's no match go ahead and push the object,
      // we need this tracker boolean, because we don't want to have the case of pushing
      // multiple time inside the forEach loop.  This gives us a way to remember that there
      // was no match.  It will false-out if it was turned true.
      if (matched === false) {
        oldOrder.push(orderObj)
      }
    }

    const id = order._id
    updateOrder(id, oldOrder, user)
      .then(() => {
        console.log('updated! time to show...')
        return showOrder(id, user)
      })
      .then(res => setOrder(res.data.order))
      .catch(err => console.error(err))
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
