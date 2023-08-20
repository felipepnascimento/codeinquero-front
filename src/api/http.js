import axios from 'axios'

class Http {
  constructor () {
    this._axios = axios.create({
      baseURL: 'https://qro-ia.onrender.com/api/'
    })
  }

  get (url, params, options = {}) {
    return this._axios.get(url, { params, ...options })
  }

  post (url, params, options = {}) {
    return this._axios.post(url, params, { ...options })
  }

  put (url, params, options = {}) {
    return this._axios.put(url, params, { ...options })
  }
}

export default new Http()
