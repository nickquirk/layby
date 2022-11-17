/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import mongoose from 'mongoose'
import KiteSpot from '../models/kiteSpot.js'
import User from '../models/user.js'
import userData from './data/users.js'
import locationSeedData from './data/locationSeedData.js'
import { } from 'dotenv/config'

const seedDataBase = async () => {
  try {
    await mongoose.connect(process.env.DB_URI)
    console.log('✅ Connected to Database')
    await mongoose.connection.db.dropDatabase()
    // User data seed i.e const users = await User.create(userData)
    // Giving an owner to each location e.g. const locationOwner = locationData.map(location=> {
    //   return { ...location, owner: users[0]._id }
    // })
    await KiteSpot.create(locationOwner)
    console.log('✅ Database seeded')
    await mongoose.connection.close()
    console.log('✅ Connection dropped')
  } catch (error) {
    console.log('🚨 Something has gone wrong', error)
    await mongoose.connection.close()
  }
}
seedDataBase()