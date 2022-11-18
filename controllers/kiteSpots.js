/* eslint-disable no-unused-vars */
import VanSpot from '../models/vanSpot.js'
import { findLocation } from '../config/helpers.js'

// ? Region index route

// ? Location index route
// Type: get request
// Endpoint: '/regions/:id/locations'
export const getAllLocations = async (req, res) => {
  console.log('GET ALL LOCATIONS ENDPOINT HIT') //.populate('owner')
  try {
    const locations = await VanSpot.find()
    return res.json(locations)
  } catch (err) {
    console.log(err)
  }
}

// ? Show single location route
// Type: get
// Endpoint: '/regions/:id/locations/:locationId'
export const getSingleLocation = async (req, res) => {
  try {
    console.log('GET SINGLE LOCATION ENDPOINT HIT')
    const location = await findLocation(res, req)
    return res.json(location)
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
