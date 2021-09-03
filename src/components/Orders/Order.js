import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { updateOrder, showOrder } from '../../api/orders'

// import { index } from '../../api/products'

const increment = {
  borderRadius: '25%',
  width: '28px',
  padding: 'unset',
  paddingRight: '8px',
  paddingLeft: '8px',
  // height: '20px',
  lineHeight: 'unset',
  fontFamily: 'monospace',
  backgroundColor: '#cfd0d3',
  position: 'relative',
  bottom: '2px'
  // verticalAlign: 'middle'
}

const quantity = {
  display: 'inline-block',
  textAlign: 'center',
  border: 'solid #cfd0d3 0.5px',
  borderRadius: '15%',
  width: '30px'
}

const remove = {
  width: '125px',
  marginLeft: '10px',
  background: 'none',
  color: 'red',
  border: 'solid red 1px'
}

const image = {
  display: 'inline-block',
  margin: 'auto',
  width: '20%',
  padding: '25px'
}

const cartInfo = {
  display: 'inline',
  paddingBottom: '10px',
  borderBottom: 'solid 1px grey',
  borderRadius: '0'
}

const header = {
  backgroundColor: '#cfd0d3'
}

const Cart = (props) => {
  const { order, user, setOrder } = props

  const handleRemoveOne = (event) => {
    // event.preventDefault()
    const targetId = event.target.value
    // grad the order contents from state bind to oldOrder
    let oldOrder = order.contents
    // iterate over all order items, when we match our targetId (argument from function call),
    // decrement by one, only if the quantity is 1 or more.  If not, do nothing, deal with
    // this case in the next statement.
    oldOrder.forEach(item => {
      if (item.id === targetId && item.quantity > 0) {
        item.quantity--
      }
    })
    // this uses a negative condition for the boolean to delete a zero amount
    oldOrder = oldOrder.filter(item => (item.quantity !== 0))
    // now updates the order array at the API level.
    const id = order._id
    updateOrder(id, oldOrder, user)
      .then(() => {
        return showOrder(id, user)
      })
      .then((res) => setOrder(res.data.order))
      .catch((err) => console.error(err))
  }

  const handleAddOne = (event) => {
    // getting id from the value stored on the card in the DOM
    const targetId = event.target.value
    // variable to hold our state order object
    const oldOrder = order.contents
    // iterate through all our order and increment where the id's match
    oldOrder.forEach((item) => {
      if (item.id === targetId) {
        item.quantity++
      }
    })
    // API call to update the order
    const id = order._id
    updateOrder(id, oldOrder, user)
      .then(() => {
        return showOrder(id, user)
      })
      .then((res) => setOrder(res.data.order))
      .catch((err) => console.error(err))
  }

  const handleRemoveAll = (event) => {
    // pull ID from DOM element we clicked
    const targetId = event.target.value
    // hold our state object in a local variable
    const oldOrder = order.contents
    // iterate through and find the matching ID and set quantity to 0
    oldOrder.forEach((item) => {
      if (item.id === targetId) {
        item.quantity = 0
      }
    })
    // call handle removeOne to delete out of the cart.
    handleRemoveOne(event)
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

  let total = 0
  const sumTotal = (num) => {
    total += num
  }

  const cardHeader =
    <Card.Header style={header}>
      <div
        style={{
          display: 'inline-block',
          width: '50%',
          paddingLeft: '45px'
        }}>Item
      </div>
      <div
        style={{
          display: 'inline-block',
          width: '20%',
          paddingLeft: '15px'

        }}>
        Quantity
      </div>
      <div
        style={{
          display: 'inline-block',
          width: '15%'
        }}>
        Unit Price
      </div>
      <div
        style={{
          display: 'inline-block',
          width: '15%'
        }}>
        SubTotal
      </div>
    </Card.Header>

  const cartContent = order.contents.map((item) => (
    <ListGroup key={item.product._id} style={cartInfo}>
      <ListGroup.Item style={{ border: 'none' }}>
        <div style={{ display: 'block' }}>
          <Card.Img src={`${item.product.image}`} style={image} />
          {item.product.name}
        </div>
        <span style={{ display: 'inline-block', width: '50%' }}>
          <Button
            style={remove}
            value={item.product._id}
            onClick={handleRemoveAll}
            variant='secondary'>
            Delete
          </Button>{' '}
        </span>
        <span style={{ display: 'inline-block', width: '20%' }}>
          {' '}
          <Button
            style={increment}
            value={item.product._id}
            onClick={handleRemoveOne}
            variant='light'>
            -
          </Button>{' '}
          <div style={quantity}>{item.quantity}</div>{' '}
          <Button
            style={increment}
            value={item.product._id}
            onClick={handleAddOne}
            variant='light'>
            +
          </Button>{' '}
        </span>
        <span style={{ display: 'inline-block', width: '15%' }}>
          {' '}
          ${item.product.price}
        </span>
        <span style={{ display: 'inline-block', width: '15%' }}>
          {formatter.format((item.quantity * item.product.price * 100) / 100)}
        </span>{' '}
        {sumTotal(item.quantity * item.product.price)}
      </ListGroup.Item>
    </ListGroup>
  ))

  return (
    <div className='row'>
      <div className='col-sm-12 col-md-10 col-lg-8 mx-auto mt-5'>
        <h3 style={{ color: 'white' }}>
          Order Total: {formatter.format(total)}
        </h3>
        <Link to='/cart/checkout'>
          <Button
            style={{ width: '100px', textDecoration: 'none' }}
            variant='warning'>
            Checkout
          </Button>
        </Link>
        <row>
          <div className='col-12 mt-5'>
            <Card style={{ border: 'none' }} className='m-auto'>
              {cardHeader}
              <ListGroup>{cartContent}</ListGroup>
            </Card>
          </div>
        </row>
      </div>
    </div>
  )
}

export default withRouter(Cart)
