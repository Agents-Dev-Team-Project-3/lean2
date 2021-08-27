import { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signOut } from '../../api/auth'
import { signOutSuccess } from '../AutoDismissAlert/messages'

class SignOut extends Component {
  componentDidMount () {
    const { msgAlert, history, clearUser, clearOrder, user } = this.props

    signOut(user)
      .finally(() =>
        msgAlert({
          heading: 'Signed Out Successfully',
          message: signOutSuccess,
          variant: 'success'
        })
      )
      .finally(() => history.push('/'))
      .finally(() => clearUser())
      .finally(() => clearOrder())
  }

  render () {
    return ''
  }
}

export default withRouter(SignOut)
