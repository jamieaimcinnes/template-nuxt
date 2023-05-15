import mongoose from 'mongoose'

export default mongoose.model(
  'Example',
  new mongoose.Schema({
    name: String
  })
)
