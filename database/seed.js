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

    // seeding users
    const users = await User.create(userData)
    console.log('Users -- >', users)
    console.log(`users collection seeded with ${users.length} users`)

    // populating users on Location & Region
    const locationArea = locationSeedData.map((location) => {
      return { ...location, owner: users[0]._id }
    })
    const regionOwner = regionSeedData.map((region) => {
      return { ...region, owner: users[0]._id }
    })

    // seeding countries
    const countries = await VanSpot.create(regionOwner)
    console.log('Countries seeded ✅ -> ', regionOwner)


    // populating locations on countrySchema
    for (const location of locationArea) {
      for (const country of countries) {
        if (location.countryCode === country.countryCode) {
          country.locations.push(location)
          await country.save()
        }
      }
    }

    // disconnected from db
    await mongoose.connection.close()
    console.log('✅ Connection dropped')
  } catch (error) {
    console.log('🚨 Something has gone wrong', error)
    await mongoose.connection.close()
  }
}
seedDataBase()
