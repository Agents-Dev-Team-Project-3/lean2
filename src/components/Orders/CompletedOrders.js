import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { indexOrders } from '../../api/orders'

const CompletedOrders = (props) => {
  const [completedOrders, setCompletedOrders] = useState([])
  const { user } = props

  useEffect(() => {
    indexOrders(user)
      .then((res) => {
        console.log(res)
        const orders = res.data.orders.filter((order) => order.completed)
        return orders
      })
      .then((orders) => setCompletedOrders(orders))
      .catch((err) => console.error(err))
  }, [])

  const displayOrders = completedOrders.map((order) => (
    <>
      <br></br>
      <li key={order._id}>
        <span>Purchase Date: {order.updatedAt}</span>
        <br></br>
        <span>Order #: {order._id}</span>
      </li>
    </>
  ))

  const list = {
    color: 'white'
  }
  return (
    <div className='row'>
      <div style={list} className='col-sm-8 m-auto mt-5'>
        <h4>Recent Purchases</h4>
        <ul>{displayOrders}</ul>
      </div>
    </div>
  )
}

export default withRouter(CompletedOrders)
