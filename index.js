import express from 'express'
import mongoose from 'mongoose'
import {} from 'dotenv/config'

const app = express()

const serverStart = async () => {
  try {
    await mongoose.connect(process.env.DB_URI)
    app.listen(process.env.PORT, () => console.log(`Server started on port => ${process.env.PORT}`))
  } catch (err) {
    console.log('Server launch failed')
  }
}

serverStart()