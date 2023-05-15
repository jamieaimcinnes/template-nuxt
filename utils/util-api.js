export default class UtilApi {
  constructor(obj = {}) {
    Object.assign(this, {
      ...{
        baseUrl: '',
        time: 0,
        progress: 0,
        pending: false,
        error: undefined,
        request: {
          headers: {},
          query: {},
          body: {}
        },
        response: {
          status: '',
          message: '',
          data: []
        }
      },
      ...obj
    })
  }

  async call(path, method, settings) {
    try {
      this.pending = true
      this.time = Date.now()

      const { data, error } = await useFetch(path, {
        method,
        query: this.request.query,
        headers: this.request.headers,
        body: method !== 'GET' ? { ...this.request.body } : undefined,
        baseURL: this.baseUrl,
        watch: false
      })

      if (error.value) {
        throw error.value
      }

      this.response = data.value
    } catch (e) {
      this.response.status = 'error'
      this.response.statusCode = e.statusCode
      this.response.message = e.message
    }
  }

  async post(path, settings = {}) {
    await this.call(path, 'POST', settings)
    return this
  }

  async patch(path, settings = {}) {
    await this.call(path, 'PATCH', settings)
    return this
  }

  async get(path, settings = {}) {
    await this.call(path, 'GET', settings)
    return this
  }

  async delete(path, settings = {}) {
    await this.call(path, 'DELETE', settings)
    return this
  }

  setBody(body, settings = {}) {
    if (settings.merge) {
      this.request.body = { ...this.request.body, ...body }
    } else {
      this.request.body = { ...body }
    }

    return this
  }

  setHeaders(headers, settings = {}) {
    if (settings.merge) {
      this.request.headers = { ...this.request.headers, ...headers }
    } else {
      this.request.headers = { ...headers }
    }

    return this
  }

  setQuery(query, settings = {}) {
    if (settings.merge) {
      this.request.query = { ...this.request.query, ...query }
    } else {
      this.request.query = { ...query }
    }

    return this
  }
}
