import express from 'express'
import mongoose from 'mongoose'
import { } from 'dotenv/config'
import router from './config/router.js'

// ! Variables 
const app = express()

// ! Connect to database
const startServer = async () => {
  try {
    await mongoose.connect(process.env.DB_URI
    )
    console.log('💃 Database up and running 💃')

    // ! Middleware
    // Parse JSON body to req.body 
    app.use(express.json())

    // Logger
    app.use((req, res, next) => {
      console.log(`👽 REQUEST RECIEVED: ${req.method} - ${req.url}`)
      next()
    })
    // Router
    app.use(router)

    // * Catch-All
    app.use((_req, res) => res.status(404).json({ message: 'Route not found' }))

    // ! Start node server / Listen for requests
    app.listen(process.env.PORT
      , () => console.log(`👟 server running on port ${process.env.PORT} 👟`))
  } catch (err) {
    console.log('🚨 Something went wrong when starting the server')
    console.log(err)
  }
}
startServer()
