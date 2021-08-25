import apiUrl from '../apiConfig'
import axios from 'axios'

export const index = () => {
  console.log('...index')
  return axios({
    method: 'GET',
    url: apiUrl + '/products'
  })
}
