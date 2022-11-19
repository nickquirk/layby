/* eslint-disable no-unused-vars */
import VanSpot from '../models/vanSpot.js'
import { findAllLocations } from '../config/helpers.js'
import { NotFound, Unauthorised } from '../config/errors.js'
import router from '../config/router.js'

// ? Region index route

// ? Location index route
// Type: get request
// Endpoint: '/api/locations'
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
// Endpoint: '/api/locations/:locationId'
export const getSingleLocation = async (req, res) => {
  try {
    const { locationId } = req.params
    console.log('REQ --->', req.params)
    const location = await findAllLocations(req, res)
    if (!location) {
      throw new NotFound('Location not found!')
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
// Endpoint: '/api/locations/:locationId/review'
export const addReview = async (req, res) => {
  try {
    // const { locationId } = req.params
    const locationToReview = await getSingleLocation(req, res)
    if (locationToReview) {
      const reviewWithOwner = { ...req.body, owner: req.currentUser._id }
      locationToReview.reviews.push(reviewWithOwner)
      await locationToReview.save()
      return res.json(locationToReview)
    }
  } catch (err) {
    console.log(err)
  }
}

// ? Update review
// Method: put
//Endpoint: '/locations/:locationId/review/:reviewId'

// ? Delete review
// Method: delete
// Endpoint: '/locations/:locationId/review/:reviewId'
