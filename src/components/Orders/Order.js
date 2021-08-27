import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { updateOrder, showOrder } from '../../api/orders'

// import { index } from '../../api/products'

const Cart = (props) => {
  const { order, user, setOrder } = props

  const handleRemove = (event) => {
    event.preventDefault()
    const targetId = event.target.dataset.id
    // grad the order contents from state bind to oldOrder
    const oldOrder = order.contents
    // iterate over all order items, when we match our targetId (argument from function call),
    // decrement by one, only if the quantity is 2 or more.  If not, do nothing, deal with
    // this case in the next statement.
    oldOrder.forEach(item => {
      if (item._id === targetId && item.quantity > 1) {
        item.quantity--
      }
    })
    // this uses a negative
    // oldOrder = oldOrder.filter(item => (item.quantity > 1 && item._id !== targetId))
    const id = order._id
    updateOrder(id, oldOrder, user)
      .then(() => {
        console.log('updated! time to show...')
        return showOrder(id, user)
      })
      .then((res) => setOrder(res.data.order))
      .catch((err) => console.error(err))
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
      <li>{item.product.description}</li>
      <li>{item.quantity}</li>
      <li>${item.product.price}</li>
      <li>Subtotal: ${item.quantity * item.product.price}</li>
      {sumTotal((item.quantity * item.product.price))}
      <Button data-key={item.product._id} onClick={handleRemove} variant='success'>Remove Item</Button>{' '}
    </ul>
  ))

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Order Total: ${total}</h3>
        <ul>{cartContent}</ul>
      </div>
    </div>
  )
}

export default withRouter(Cart)
