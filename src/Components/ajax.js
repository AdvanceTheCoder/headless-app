import axios from 'axios'
import api_config from './api_config'

let singleton = null // a singleton instance of axios that the default init function returns

// note the 'async' keyword, it allows us to call 'await' later
export default async () => {
  if(!singleton) {
    const tokenURL = api_config.drupal_url + '/rest/session/token';
    try {
      const response = await axios.get(tokenURL, {
        withCredentials: true // required to send auth cookie
      })
      const csrf_token = response.data
      singleton = axios.create({
        baseURL: api_config.drupal_url, // every request is relative to this URL
        withCredentials: true, // include auth cookie in every request
        headers: { 'X-CSRF-Token': csrf_token }, // include this header in every request
        params: { _format: 'json' }, // add these query params to every request
      })
      console.log('Created new axios instance', singleton)
    } catch(error) {
      console.error(error)
    }
  }
  return singleton
}
