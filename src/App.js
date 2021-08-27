/* eslint-disable no-tabs */
import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './components/Orders/CheckoutForm'

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
import { initiateOrder } from './api/orders'

const promise = loadStripe(
  'pk_test_51JS9CaHSvQN3qMqE4F7Y9hKaSrmXTpNlwJH3z1fOItXYo4bkSKWYKTqqNYC2diaE6dgGDlbX12mDtLnzstNDHCAK00HL8Q8w2r'
)

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: [],
      order: {
        contents: [],
        owner: this.user,
        coupon: '',
        completed: false
      }
    }
  }

  setOrder = (order) => this.setState({ order })

  setUser = (user) => this.setState({ user })

  clearOrder = () => this.setState({ order: {} })

  clearUser = () => this.setState({ user: null })

  onSignInSuccess = (user) => {
    console.log(user)
    initiateOrder(user).then((res) => {
      console.log(res)
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
            exact path='/cart'
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
              <div className="App">
                <Elements stripe={promise}>
                  <CheckoutForm />
                </Elements>
              </div>
            )}
          />
        </main>
      </Fragment>
    )
  }
}

export default App
