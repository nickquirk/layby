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
    //connecting to db
    await mongoose.connect(process.env.DB_URI)
    console.log('✅ Connected to Database')

    // dropping data
    await mongoose.connection.db.dropDatabase()
    console.log('✅ Database Dropped')

    // adding users
    const users = await User.create(userData)
    console.log('Users -- >', users)
    console.log(`users collection seeded with ${users.length} users`)
    console.log('Region Seed data ->', regionSeedData)
    const regionOwner = regionSeedData.map((region) => {
      return { ...region, owner: users[0]._id }
    })
    await VanSpot.create(regionOwner)
    // console.log(regionOwner)
    console.log('Countries seeded ✅ -> ', regionOwner)

    // once data dropped seed new data in datbase
    const locationArea = locationSeedData.map((location) => {
      return { ...location, owner: users[0]._id }
    })
    console.log(regionOwner.countryCode)
    await VanSpot.create(locationArea)
    console.log('✅ Locations Seeded ->', locationArea)
    console.log(`✅ Database seeded with ${locationArea.length} locations !`)

    // disconnected from db
    await mongoose.connection.close()
    console.log('✅ Connection dropped')
  } catch (error) {
    console.log('🚨 Something has gone wrong', error)
    await mongoose.connection.close()
  }
}
seedDataBase()
