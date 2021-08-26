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
