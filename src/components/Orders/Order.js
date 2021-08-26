import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'

// import { index } from '../../api/products'

const Cart = (props) => {
  // const { order, user, setOrder } = this.props
  const { order } = props

  // useEffect(() => {
  //   index()
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

  const cartContent = order.contents.map((product) => (
    <ul key={product._id}>
      <li>{product.name}</li>
      <li>
        <img src={`${product.image}`} width='200px'></img>
      </li>
      <li>{product.description}</li>
      <li>${product.price}</li>
      <Button onClick={handleRemove(product._id)} variant='success'>Remove Item</Button>{' '}

    </ul>
  ))

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Your Order</h3>
        <ul>{cartContent}</ul>
      </div>
    </div>
  )
}

export default withRouter(Cart)
