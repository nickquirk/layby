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
    const findLocation = locationSeedData.map(location => {
      console.log('In my function ->', regionSeedData)
      let targetCountry
      regionSeedData.forEach(region => {
        if (region.countryCode === location.countryCode) {
          const locatedCountry = { ...region, locations: location }
          targetCountry = locatedCountry
        }
      })
      return (targetCountry)
      // for (i = 0; i < regionSeedData.length; i++) {

      // }
      // if (regionSeedData.countryCode === location.countryCode) {
      //   // Make regionSeedData.countryCode an array which we must loop through and compare with location.countryCode ++ must still seed with owner
      //   const locatedCountry = location
      //   regionSeedData.locations.push(locatedCountry)
      // }
    })
    console.log('The data I want ->', findLocation)
    console.log('Region Seed data ->', regionSeedData)
    const regionOwner = regionSeedData.map(region => {
      return { ...region, owner: users[0]._id }
    })
    await VanSpot.create(regionOwner)
    // console.log(regionOwner)
    console.log('Countries seeded ✅ -> ', regionOwner)
    // const locationArea = locationSeedData.map(location => {
    //   return { ...location, owner: users[0]._id }
    // })
    // console.log(regionOwner.countryCode)
    // await VanSpot.create(locationArea)
    // console.log('✅ Location Seeded ->', locationArea)
    console.log('✅ Database seeded')
    await mongoose.connection.close()
    console.log('✅ Connection dropped')
  } catch (error) {
    console.log('🚨 Something has gone wrong', error)
    await mongoose.connection.close()
  }
}
seedDataBase()