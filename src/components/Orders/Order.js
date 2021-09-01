import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import { updateOrder, showOrder } from '../../api/orders'

// import { index } from '../../api/products'

const button = {
  width: 'inherit'
}

const card = {
  display: 'inline-block',
  margin: 'auto',
  width: '75%',
  padding: '25px'
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

  const cartContent = order.contents.map((item) => (
    <div key={item.product._id} className='col-3 mt-5'>
      <Card style={{ width: '25rem' }} className='m-auto'>
        <Card.Img variant='top' src={`${item.product.image}`} style={card} />
        <Card.Body>
          <Card.Title>{item.product.name}</Card.Title>
          <Card.Text>Price: ${item.product.price}</Card.Text>
          <Card.Text>Quantity: {item.quantity}</Card.Text>
          <Card.Text>
            Subtotal: {formatter.format((item.quantity * item.product.price))}
          </Card.Text>
          {sumTotal(item.quantity * item.product.price)}
          <Button
            style={button}
            value={item.product._id}
            onClick={handleRemoveOne}
            variant='secondary'>
            -
          </Button>{' '}
          <Button
            style={button}
            value={item.product._id}
            onClick={handleAddOne}
            variant='secondary'>
            +
          </Button>{' '}
          <Button
            style={button}
            value={item.product._id}
            onClick={handleRemoveAll}
            variant='secondary'>
            Remove All
          </Button>{' '}
        </Card.Body>
      </Card>
    </div>

    // <ul key={item.product._id}>
    //   <li>{item.product.name}</li>
    //   <li>
    //     <img src={`${item.product.image}`} width='200px'></img>
    //   </li>
    //   <li>Description: {item.product.description}</li>
    //   <li>Quantity: {item.quantity}</li>
    //   <li>Price: ${item.product.price}</li>
    //   <li>Subtotal: ${item.quantity * item.product.price}</li>
    //   {sumTotal((item.quantity * item.product.price))}
    //   <Button style={button} value={item.product._id} onClick={handleRemove} variant='success'>-</Button>{' '}
    //   <Button style={button} value={item.product._id} onClick={handleAddOne} variant='success'>+</Button>{' '}
    //   <Button style={button} value={item.product._id} onClick={handleRemoveAll} variant='success'>Remove All</Button>{' '}
    // </ul>
  ))

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3 style={{ color: 'white' }}>Order Total: {formatter.format(total)}</h3>
        <Link to='/cart/checkout'>
          <Button style={{ width: '100px', textDecoration: 'none' }} variant="warning">Checkout</Button>
        </Link>
        <row>
          {cartContent}
        </row>
      </div>
    </div>
  )
}

export default withRouter(Cart)
