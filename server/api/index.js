export default defineEventHandler(async event => {
  const { query } = await utilApiRequest(event)

  return await utilApiResponse(
    {
      status: 'success',
      message: '',
      data: []
    },
    event
  )
})
