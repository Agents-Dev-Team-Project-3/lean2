import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'

import { index } from '../../api/products'

const card = {
  margin: 'auto',
  padding: '25px'
}

const cardCol = {
  margin: 'auto',
  marginTop: '10px'
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
    <Col xs={4} key={item._id} style={cardCol}>
      <Card
      >
        <Link to={`/products/${item._id}`}>
          <Card.Img variant='top' src={`${item.image}`} style={card}/>

        </Link>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>Price: ${item.price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    // <div key={item._id} className='col-3 mt-5'>

    // </div>
  ))

  return (
    <Row>
      <h3 className='text-light'>Products</h3>
      <Col xs={12} style={{ marginTop: '10px' }}>
        <Row>{productList}</Row>
      </Col>

      <div className='col-12 mt-5'></div>
    </Row>
  )
}

export default withRouter(Products)
