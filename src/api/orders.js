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

export const showOrder = (id) => {
  return axios({
    method: 'GET',
    url: apiUrl + `/orders/${id}`
  })
}

export const createOrder = (user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/orders/open',
    headers: {
      Authorization: `Bearer ${user.token}`,
    }
  })
}

export const updateOrder = (data, user) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + `/orders/${data._id}`,
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
