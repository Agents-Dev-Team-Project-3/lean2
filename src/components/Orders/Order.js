import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { updateOrder, showOrder } from '../../api/orders'

// import { index } from '../../api/products'

const Cart = (props) => {
  const { order, user, setOrder } = props

  const handleRemove = (event) => {
    // event.preventDefault()
    const targetId = event.target.value
    console.log(targetId)
    // grad the order contents from state bind to oldOrder
    let oldOrder = order.contents
    // iterate over all order items, when we match our targetId (argument from function call),
    // decrement by one, only if the quantity is 2 or more.  If not, do nothing, deal with
    // this case in the next statement.
    oldOrder.forEach(item => {
      console.log(item.id)
      if (item.id === targetId && item.quantity > 0) {
        item.quantity--
      }
    })
    // this uses a negative
    oldOrder = oldOrder.filter(item => (item.quantity !== 0))
    const id = order._id
    updateOrder(id, oldOrder, user)
      .then(() => {
        return showOrder(id, user)
      })
      .then((res) => setOrder(res.data.order))
      .catch((err) => console.error(err))
  }

  const handleAddOne = (event) => {
    const targetId = event.target.value
    const oldOrder = order.contents
    oldOrder.forEach((item) => {
      if (item.id === targetId) {
        item.quantity++
      }
    })
    const id = order._id
    updateOrder(id, oldOrder, user)
      .then(() => {
        return showOrder(id, user)
      })
      .then((res) => setOrder(res.data.order))
      .catch((err) => console.error(err))
  }

  const handleRemoveAll = (event) => {
    // event.preventDefault()
    const targetId = event.target.value
    const oldOrder = order.contents
    oldOrder.forEach((item) => {
      if (item.id === targetId) {
        item.quantity = 0
      }
    })
    handleRemove(event)
  }

  let total = 0
  const sumTotal = (num) => {
    total += num
  }

  const cartContent = order.contents.map((item) => (
    <ul key={item.product._id}>
      <li>{item.product.name}</li>
      <li>
        <img src={`${item.product.image}`} width='200px'></img>
      </li>
      <li>Description: {item.product.description}</li>
      <li>Quantity: {item.quantity}</li>
      <li>Price: ${item.product.price}</li>
      <li>Subtotal: ${item.quantity * item.product.price}</li>
      {sumTotal((item.quantity * item.product.price))}
      <Button value={item.product._id} onClick={handleRemove} variant='success'>-</Button>{' '}
      <Button value={item.product._id} onClick={handleAddOne} variant='success'>+</Button>{' '}
      <Button value={item.product._id} onClick={handleRemoveAll} variant='success'>Remove All</Button>{' '}
    </ul>
  ))

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Order Total: ${total}</h3>
        <Button variant="warning"> <Link to='/cart/checkout'>Checkout
        </Link></Button>
        <ul>{cartContent}</ul>
      </div>
    </div>
  )
}

export default withRouter(Cart)
