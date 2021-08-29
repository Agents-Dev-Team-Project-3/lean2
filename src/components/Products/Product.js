import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import { showProduct } from '../../api/products'
import { updateOrder, showOrder } from '../../api/orders'
import {
  addedToCartFailure,
  addedToCartSuccess
} from '../AutoDismissAlert/messages'

const card = {
  display: 'inline-block',
  margin: 'auto',
  width: '75%',
  padding: '25px'
}

const button = {
  width: 'inherit'
}

const Products = (props) => {
  const [product, setProduct] = useState(null)
  const { order, user, setOrder, msgAlert } = props

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
      .then((res) => setOrder(res.data.order))
      .then(() =>
        msgAlert({
          heading: 'Added to Cart...',
          message: addedToCartSuccess,
          variant: 'success'
        })
      )
      .catch(() => {
        msgAlert({
          heading: 'Could not add to Cart.',
          message: addedToCartFailure,
          variant: 'danger'
        })
      })
  }

  if (!product) {
    return <p>Loading...</p>
  }

  const { name, image, description, price } = product
  // const secondary = 'Secondary'
  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 m-auto mt-5'>
        <Card
          style={{ width: '25rem' }}
          className="m-auto"
        >
          <Card.Img variant='top' src={`${image}`} style={card}/>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>${price}</Card.Text>
            <Button style={button} onClick={handleAddToCart} variant='primary'>
              Add to Cart
            </Button>{' '}
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default withRouter(Products)
