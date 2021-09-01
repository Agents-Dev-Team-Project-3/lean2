let apiUrl
const apiUrls = {
  production: 'https://afternoon-springs-15413.herokuapp.com',
  development: 'http://localhost:4741'
  // development: 'https://afternoon-springs-15413.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
