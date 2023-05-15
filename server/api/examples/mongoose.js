import mongoose from 'mongoose'
import model from '~/server/db/models/example'

export default defineEventHandler(async event => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)

    const data = await model.create({ name: 'test' })

    return {
      status: 'success',
      data
    }
  } catch (e) {
    return {
      status: 'error',
      message: e.message,
      data: []
    }
  }
})
