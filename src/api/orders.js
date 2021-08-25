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
    url: apiUrl + '/orders',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: {
      order: {
        contents: [],
        owner: `${user._id}`
      }
    }
  })
}
