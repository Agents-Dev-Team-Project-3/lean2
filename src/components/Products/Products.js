import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'

const cardImg = {
  margin: 'auto',
  padding: '25px',
  width: 'auto',
  height: '200px'
}

const cardCol = {
  margin: 'auto',
  marginTop: '10px'
}

const cardTitle = {
  height: '50px'
}

const cardBody = {
  backgroundColor: 'grey',
  borderRadius: '0px 0px 8px 8px',
  color: 'white'
}

const card = {
  border: 'none',
  borderRadius: '10px'
}

const Products = (props) => {
  // coming in from props, from clicking on the dropdown menu
  const { category, products } = props
  console.log(category)

  const filteredProducts = products.filter((item) =>
    item.category === category)
  console.log(filteredProducts)

  // console.log(products)

  const productList = filteredProducts.map((item) => (
    <Col xs={12} md={6} lg={4} xl={4} key={item._id} style={cardCol}>
      <Card style={card} className='m-auto'>
        <Link style={{ margin: 'auto' }} to={`/products/${item._id}`}>
          <Card.Img variant='top' src={`${item.image}`} style={cardImg} />
        </Link>
        <Card.Body style={cardBody}>
          <Card.Title style={cardTitle}>{item.name}</Card.Title>
          <Card.Text>Price: ${item.price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    // <div key={item._id} className='col-3 mt-5'>

    // </div>
  ))

  return (
    <Row>
      <h3 className='text-light'>{category}</h3>
      <Col xs={12} style={{ marginTop: '10px' }}>
        <Row>{productList}</Row>
      </Col>

      <div className='col-12 mt-5'></div>
    </Row>
  )
}

export default withRouter(Products)
