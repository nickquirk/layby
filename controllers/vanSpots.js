/* eslint-disable no-unused-vars */
import VanSpot from '../models/vanSpot.js'
import { findLocation } from '../config/helpers.js'
import { Unauthorised } from '../config/errors.js'

// ? Region index route

// ? Location index route
// Type: get request
// Endpoint: '/regions/:id/locations'
export const getAllLocations = async (req, res) => {
  console.log('GET ALL LOCATIONS ENDPOINT HIT')
  try {
    const locations = await VanSpot.find().populate('owner')
    const filteredLocations = locations.map(loc => {
      return loc.locations
    })
    const perfect = filteredLocations[0].concat(filteredLocations[1], filteredLocations[2], filteredLocations[3], filteredLocations[4])
    console.log('double trouble ->', perfect)
    return res.json(perfect)
  } catch (err) {
    console.log(err)
  }
}

// ? Show single location route
// Type: get
// Endpoint: '/regions/:id/locations/:locationId'
export const getSingleLocation = async (req, res) => {
  try {
    const { id } = req.params
    const country = await VanSpot.findById(id).populate('owner')
    if (!country) {
      throw new Error('country not found!')
    }
    console.log(country.locations)
    return res.json(country)
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
