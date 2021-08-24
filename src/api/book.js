import apiUrl from '../apiConfig'
import axios from 'axios'

export const index = () => {
  return axios({
    method: 'GET',
    url: apiUrl + '/books'

  })
}
