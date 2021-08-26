import React from 'react'
import { withRouter } from 'react-router-dom'

// import { index } from '../../api/products'

const Cart = (props) => {
  // const { order, user, setOrder } = this.props
  const { order } = props

  // useEffect(() => {
  //   index()
  //     .then((res) => setProducts(res.data.products))
  //     .catch(console.error)
  // }, [])

  const cartContent = order.contents.map((product) => (
    <ul key={product._id}>
      <li>{product.name}</li>
      <li>
        <img src={`${product.image}`} width='200px'></img>
      </li>
      <li>{product.description}</li>
      <li>${product.price}</li>
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
