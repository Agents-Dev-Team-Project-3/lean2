import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'

// import { index } from '../../api/products'

const Cart = (props) => {
  // const { order, user, setOrder } = this.props
  const { order } = props

  // useEffect(() => {
  //   let cartDetails = []
  //   order.map(item => {
  //     showProduct(item._id)
  //       .then((res) => cartDetails.push(res))
  //     })
  //       .then()
  //     .then((res) => setProducts(res.data.products))
  //     .catch(console.error)
  // }, [])

  const handleRemove = (id) => {
    console.log('...clicked...' + id)
    // const oldOrder = order.contents
    // oldOrder.indexOf(product => product._id === id)
    // console.log(oldOrder)
    // const id = order._id
    // updateOrder(id, oldOrder, user)
    //   .then(() => {
    //     console.log('updated! time to show...')
    //     return showOrder(id, user)
    //   })
    //   .then((res) => setOrder(res.data.order))
    //   .catch((err) => console.error(err))
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
      <Button onClick={handleRemove(item.product._id)} variant='success'>Remove Item</Button>{' '}
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
