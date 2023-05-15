import joi from 'joi'

export default defineEventHandler(async event => {
  const schema = joi.object({
    username: joi.string().alphanum().min(3).max(30).required()
  })

  try {
    const value = await schema.validateAsync({ username: 'abc' })
  } catch (err) {}

  return {
    status: 'success',
    data: []
  }
})
