/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import mongoose from 'mongoose'
import VanSpot from '../models/vanSpot.js'
import User from '../models/user.js'
import userData from './data/user.js'
import locationSeedData from './data/locationSeedData.js'
import regionSeedData from './data/regionSeedData.js'
import { } from 'dotenv/config'

const seedDataBase = async () => {
  try {
    await mongoose.connect(process.env.DB_URI)
    console.log('✅ Connected to Database')
    await mongoose.connection.db.dropDatabase()
    console.log('✅ Database Dropped')
    const users = await User.create(userData)
    console.log('Region Seed data ->', regionSeedData)
    const regionOwner = regionSeedData.map(region => {
      return { ...region, owner: users[0]._id }
    })
    await VanSpot.create(regionOwner)
    console.log(regionOwner.countryCode)
    console.log('Countries seeded ✅ -> ', regionOwner)
    const locationArea = locationSeedData.map(location => {
      return { ...location, owner: users[0]._id }
    })
    console.log(regionOwner.countryCode)
    await VanSpot.create(locationArea)
    console.log('✅ Location Seeded ->', locationArea)
    console.log('✅ Database seeded')
    await mongoose.connection.close()
    console.log('✅ Connection dropped')
  } catch (error) {
    console.log('🚨 Something has gone wrong', error)
    await mongoose.connection.close()
  }
}
seedDataBase()