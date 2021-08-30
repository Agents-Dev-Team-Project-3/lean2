/* eslint-disable no-tabs */
import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './components/Orders/CheckoutForm'
import { Container, Row, Col } from 'react-bootstrap'
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import Products from './components/Products/Products'
import Product from './components/Products/Product'
import Cart from './components/Orders/Order'
import { initiateOrder, completeOrder } from './api/orders'
import CompletedOrders from './components/Orders/CompletedOrders'
import { checkoutSuccess, checkoutFailure } from './components/AutoDismissAlert/messages'

const promise = loadStripe(
  'pk_test_51JS9CaHSvQN3qMqE4F7Y9hKaSrmXTpNlwJH3z1fOItXYo4bkSKWYKTqqNYC2diaE6dgGDlbX12mDtLnzstNDHCAK00HL8Q8w2r'
)

const appContainer = {
  padding: '0px'
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      msgAlerts: [],
      order: {
        contents: [],
        owner: this.user,
        coupon: '',
        completed: false
      },
      // state object to hold all products in array
      products: []
    }
  }

  setOrder = (order) => this.setState({ order })

  setUser = (user) => this.setState({ user })

  clearOrder = () => this.setState({
    order: {
      contents: [],
      owner: this.user,
      coupon: '',
      completed: false
    }
  })

  refreshCart = (order, user) => {
    const id = order._id
    completeOrder(id, user)
      .then(() => initiateOrder(user))
      .then((res) => {
        this.setOrder(res.data.order)
      })
      .then((res) => {
        this.msgAlert({
          heading: 'Checkout successful.',
          message: checkoutSuccess,
          variant: 'success'
        })
      })
      .catch((err) => {
        this.msgAlert({
          heading: 'Checkout failure.' + err,
          message: checkoutFailure,
          variant: 'danger'
        })
      })
  }

  clearUser = () => this.setState({ user: '' })

  onSignInSuccess = (user) => {
    initiateOrder(user).then((res) => {
      this.setOrder(res.data.order)
    })
  }

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter((msg) => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return {
        msgAlerts: [...state.msgAlerts, { heading, message, variant, id }]
      }
    })
  }

  render () {
    const { msgAlerts, user, order } = this.state

    return (
      <Fragment>
        <Container fluid style={appContainer}>
          <Row className='justify-content-center'>
            <Col xs={12} className='m-auto'>
              <Header user={user} />
              {msgAlerts.map((msgAlert) => (
                <AutoDismissAlert
                  key={msgAlert.id}
                  heading={msgAlert.heading}
                  variant={msgAlert.variant}
                  message={msgAlert.message}
                  id={msgAlert.id}
                  deleteAlert={this.deleteAlert}
                />
              ))}
            </Col>
          </Row>
          <main className='container'>
            <Route
              path='/sign-up'
              render={() => (
                <SignUp
                  msgAlert={this.msgAlert}
                  setUser={this.setUser}
                  onSignInSuccess={this.onSignInSuccess}
                />
              )}
            />
            <Route
              path='/sign-in'
              render={() => (
                <SignIn
                  msgAlert={this.msgAlert}
                  setUser={this.setUser}
                  setOrder={this.setOrder}
                  onSignInSuccess={this.onSignInSuccess}
                  order={order}
                />
              )}
            />
            <Route
              exact
              path='/products'
              // new prop to show only the clicked-on category
              category={products.data.category}
              render={() => <Products msgAlert={this.msgAlert} />}
            />
            <Route
              path='/products/:id'
              render={() => (
                <Product
                  msgAlert={this.msgAlert}
                  setOrder={this.setOrder}
                  order={order}
                  user={user}
                />
              )}
            />
            <AuthenticatedRoute
              user={user}
              path='/sign-out'
              render={() => (
                <SignOut
                  msgAlert={this.msgAlert}
                  clearUser={this.clearUser}
                  clearOrder={this.clearOrder}
                  user={user}
                />
              )}
            />
            <AuthenticatedRoute
              user={user}
              path='/change-password'
              render={() => (
                <ChangePassword msgAlert={this.msgAlert} user={user} />
              )}
            />
            <AuthenticatedRoute
              user={user}
              exact
              path='/cart'
              render={() => (
                <Cart
                  msgAlert={this.msgAlert}
                  user={user}
                  order={order}
                  setOrder={this.setOrder}
                />
              )}
            />
            <AuthenticatedRoute
              user={user}
              path='/cart/checkout'
              render={() => (
                <div className='App'>
                  <Elements stripe={promise}>
                    <CheckoutForm
                      refreshCart={this.refreshCart}
                      user={user}
                      order={order}
                    />
                  </Elements>
                </div>
              )}
            />
            <AuthenticatedRoute
              user={user}
              path='/orders/order-history'
              render={() => (
                <CompletedOrders
                  msgAlert={this.msgAlert}
                  user={user}
                />
              )}
            />
          </main>
        </Container>
      </Fragment>
    )
  }
}

export default App
