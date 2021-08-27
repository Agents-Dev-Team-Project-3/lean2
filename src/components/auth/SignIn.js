import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../../api/auth'
import { signInSuccess, signInFailure } from '../AutoDismissAlert/messages'
// import { initiateOrder } from '../../api/orders'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SignIn extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      order: {}
    }
  }

  handleChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value
    })

  // onSignInSuccess = (user) => {
  //   const { setOrder } = this.props
  //   initiateOrder(user).then((res) => {
  //     setOrder(res.data.order)
  //     console.log(this.props.order)
  //   })
  // }

  // console.log('in Sign in success', user)
  // let openOrder
  // createOrder(user)
  //   .then(res => {
  //     console.log(res)
  //     return (res)
  //   })
  //   .then(res => {
  //     openOrder = res.data.orders.completed === undefined ? res.data.orders : null
  //     return openOrder
  //   })
  //   .then((openOrder) => {
  //     console.log(openOrder)
  //     return openOrder
  //   })
  //   .then((openOrder) => {
  // if (!openOrder) {
  //   return createOrder(user)
  // } else {
  // add the one found to state
  //         setOrder(openOrder)
  //         return null
  //       }
  //     })
  //     .then((res) => {
  //       if (res !== null) {
  //         console.log(res.data.order)
  //         setOrder(res.data.order)
  //       }
  //     })
  //     .catch((err) => console.error(err))
  // }

  onSignIn = (event) => {
    event.preventDefault()

    const { msgAlert, history, setUser, onSignInSuccess } = this.props

    signIn(this.state)
      .then((res) => {
        setUser(res.data.user)
        return (res)
      })
      .then((res) => onSignInSuccess(res.data.user))
      .then(() =>
        msgAlert({
          heading: 'Sign In Success',
          message: signInSuccess,
          variant: 'success'
        })
      )
      .then(() => history.push('/'))
      .catch((error) => {
        this.setState({ email: '', password: '' })
        msgAlert({
          heading: 'Sign In Failed with error: ' + error.message,
          message: signInFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, password } = this.state

    return (
      <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <h3>Sign In</h3>
          <Form onSubmit={this.onSignIn}>
            <Form.Group controlId='email'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type='email'
                name='email'
                value={email}
                placeholder='Enter email'
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                name='password'
                value={password}
                type='password'
                placeholder='Password'
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(SignIn)
