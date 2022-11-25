/* eslint-disable no-unused-vars */
import express from 'express'
import mongoose from 'mongoose'
import { } from 'dotenv/config'
import router from './config/router.js'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// ! Variables 
const app = express()
const port = process.env.PORT
const dbURI = process.env.DB_URI

// ! Connect to database
const startServer = async () => {
  try {
    await mongoose.connect(dbURI)
    console.log('💃 Database up and running 💃')

    // Router
    app.use('/api', router)

    // ** New lines **
    app.use(express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })

    // ! Middleware
    // Parse JSON body to req.body 
    app.use(express.json())

    // Logger
    app.use((req, res, next) => {
      console.log(`👽 REQUEST RECIEVED: ${req.method} - ${req.url}`)
      next()
    })
    // Router
    app.use('/api', router)

    // ** New lines **
    app.use(express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })


    // * Catch-All
    app.use((_req, res) => res.status(404).json({ message: 'Route not found' }))

    // ! Start node server / Listen for requests
    app.listen(port, () => console.log(`👟 server running on port ${port} 👟`))
  } catch (err) {
    console.log('🚨 Something went wrong when starting the server')
    console.log(err)
  }
}
startServer()
