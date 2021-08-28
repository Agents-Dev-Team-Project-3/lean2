import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

import { index } from '../../api/products'

const card = {
  display: 'inline-block',
  margin: 'auto',
  width: '75%',
  padding: '25px'
}

const Products = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    index()
      .then((res) => setProducts(res.data.products))
      .catch(console.error)
  }, [])

  // const productList = products.map((product) => (
  //   <li key={product._id}>
  //     <Link to={`/products/${product._id}`}>{product.name}</Link>
  //   </li>
  // ))

  const productList = products.map((item) => (
    <div key={item._id} className='col-3 mt-5'>
      <Card
        style={{ width: '25rem' }}
        className="m-auto"
      >
        <Link to={`/products/${item._id}`}>
          <Card.Img variant='top' src={`${item.image}`} style={card}/>

        </Link>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>Description: {item.description}</Card.Text>
          <Card.Text>Price: ${item.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  ))

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3 className='text-light'>Products</h3>
        <row>
          {productList}
        </row>
      </div>
    </div>
  )
}

export default withRouter(Products)
