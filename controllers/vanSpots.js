/* eslint-disable no-unused-vars */
import VanSpot from '../models/vanSpot.js'
import { findAllLocations } from '../config/helpers.js'
import { Unauthorised } from '../config/errors.js'

// ? Region index route

// ? Location index route
// Type: get request
// Endpoint: '/regions/:id/locations'
export const getAllLocations = async (req, res) => {
  console.log('GET ALL LOCATIONS ENDPOINT HIT')
  try {
    const location = await findAllLocations(req, res)
    return res.json(location)
  } catch (err) {
    console.log(err)
  }
}

// ? Show single location route
// Type: get
// Endpoint: '/regions/:id/locations/:locationId'
export const getSingleLocation = async (req, res) => {
  try {
    const { locationId } = req.params
    console.log('REQ --->', req.params)
    const location = await findAllLocations(req, res)
    if (!location) {
      throw new Error('country not found!')
    }
    const targetLocation = location.filter((loc) => {
      return locationId === loc.id
    })
    console.log(targetLocation)
    return res.json(targetLocation)
  } catch (err) {
    console.log(err)
  }
}

// ? Add review
// Method: post
// Endpoint: '/locations/:locationId/review'
export const addReview = async (req, res) => {
  console.log('Add review endpoint hit')
}

// ? Update review
// Method: put
//Endpoint: '/locations/:locationId/review/:reviewId'

// ? Delete review
// Method: delete
// Endpoint: '/locations/:locationId/review/:reviewId'

// export const getAllLocations = async (req, res) => {
//   console.log('GET ALL LOCATIONS ENDPOINT HIT')
//   try {
//     const locations = await VanSpot.find().populate('owner')
//     let filteredLocations = locations.map((loc) => {
//       const space = loc.locations.map((s) => {
//         return s
//       })
//       filteredLocations = space
//     })
//     // Promise.all(filteredLocations)
//     return res.json(filteredLocations)
//   } catch (err) {
//     console.log(err)
//   }
// }
