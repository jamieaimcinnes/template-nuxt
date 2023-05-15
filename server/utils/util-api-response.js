export default async (r = {}, event) => {
  const response = {
    status: r.status || 'success',
    statusCode: r.statusCode || 200,
    message: r.message || '',
    data: r.data || [],
    token: r.token || '',
    errors: r.errors || [],
    request: {}
  }

  if (event) {
    response.request = await utilApiRequest(event)
  }

  return response
}
