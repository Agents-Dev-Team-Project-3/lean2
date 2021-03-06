import apiUrl from '../apiConfig'
import axios from 'axios'
// will only ever get users orders
export const indexOrders = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/orders',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const showOrder = (id, user) => {
  return axios({
    method: 'GET',
    url: apiUrl + `/orders/${id}`,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
// checks to see if user has an open order before making one and will return that order(with contents) if found, (else it will return the new open order)
export const initiateOrder = (user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/orders/open',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
// Does not check to see if use has an existing open order before making one, leading to the potential for multiple open orders in the database
export const createOrder = (user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/orders',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: {
      order: {
        contents: [],
        owner: user,
        coupon: '',
        completed: false
      }
    }
  })
}

export const updateOrder = (id, data, user) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + `/orders/${id}`,
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: {
      order: {
        contents: data
      }
    }
  })
}

export const completeOrder = (id, user) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + `/orders/${id}`,
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: {
      order: {
        completed: true
      }
    }
  })
}
