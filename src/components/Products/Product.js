import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Button, Card, Row, Col, Breadcrumb } from 'react-bootstrap'
import { showProduct } from '../../api/products'
import { updateOrder, showOrder } from '../../api/orders'
import {
  addedToCartFailure,
  addedToCartSuccess
} from '../AutoDismissAlert/messages'

const card = {
  border: 'none',
  borderRadius: '0px'
}

const cardImg = {
  margin: 'auto',
  padding: '25px',
  width: 'auto',
  height: '200px'
}

const cardTitle = {
  height: '50px'
}

const cardCol = {
  margin: 'auto',
  marginTop: '60px'
}

const cardBody = {
  backgroundColor: 'grey',
  borderRadius: '0px',
  color: 'white'
}

const button = {
  width: 'inherit'
}

const breadcrumbs = {
  fontSize: '12px',
  textDecoration: 'none'
}

const Products = (props) => {
  const [product, setProduct] = useState(null)
  const { order, user, setOrder, msgAlert, setCategory } = props

  useEffect(() => {
    showProduct(props.match.params.id)
      .then((res) => setProduct(res.data.product))
      .catch(console.error)
  }, [])

  const handleAddToCart = () => {
    const oldOrder = order.contents
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

  const { name, image, description, price, category } = product
  // const secondary = 'Secondary'
  return (
    <Row>
      <Breadcrumb className='mt-3' style={breadcrumbs}>
        <Breadcrumb.Item>
          <Link to={'/'}>home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={'/products'} onClick={() => setCategory('All Products')}>
            products
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={'/products/' + category} onClick={() => setCategory(category)}>
            {category}
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          {name}
        </Breadcrumb.Item>
      </Breadcrumb>
      <Col xs={10} md={8} style={cardCol}>
        <Card style={card} className='m-auto'>
          <Card.Img variant='top' src={`${image}`} style={cardImg} />
          <Card.Body style={cardBody}>
            <Card.Title style={cardTitle}>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>${price}</Card.Text>
            <Button style={button} onClick={handleAddToCart} variant='primary'>
              Add to Cart
            </Button>{' '}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default withRouter(Products)
