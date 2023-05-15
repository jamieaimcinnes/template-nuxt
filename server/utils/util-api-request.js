import qs from 'qs'

export default async event => {
  const request = {
    query: {},
    body: {},
    method: event.req.method,
    params: event.context.params,
    token: event.context.token
  }

  const query = getQuery(event)
  request.query = qs.parse(query)

  try {
    request.body = await readBody(event)
  } catch (e) {
    /* catching that you can't use body in GET request */
  }

  return request
}
