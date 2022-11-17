import express from 'express'
import mongoose from 'mongoose'
import {} from 'dotenv/config'
import router from './config/router.js'

const app = express()

const serverStart = async () => {
  try {
    await mongoose.connect(process.env.DB_URI)
    app.listen(process.env.PORT, () =>
      console.log(`Server started on port => ${process.env.PORT}`)
    )
    // * Router
    app.use(router)
  } catch (err) {
    console.log('Server launch failed')
  }
}

serverStart()
