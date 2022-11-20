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
    const { locationId } = req.params
    const location = await findAllLocations(req, res)
    if (!location) {
      throw new NotFound('Location not found!')
    }
    const targetLocation = location.filter((loc) => {
      return locationId === loc.id
    })
    const [newTargetLocation] = targetLocation
    if (newTargetLocation) {
      const reviewWithOwner = { ...req.body, owner: req.currentUser.id }
      newTargetLocation.reviews.push(reviewWithOwner)
      const parent = await newTargetLocation.parent()
      await parent.save()
      return res.status(201).json(newTargetLocation)
    }
  } catch (err) {
    console.log('This the error ->', err)
  }
}
// returning the review but not saving it

// ? Delete review
// Method: delete
// Endpoint: '/api/locations/:locationId/review/:reviewId'
export const deleteReview = async (req, res) => {
  try {
    //// const { locationId } = req.params
    const location = await findAllLocations(req, res)
    if (location) {
      const { reviewId } = req.params
      console.log('REVIEW ID -->', reviewId)
      console.log('location.reviews-->', location)
      const foundReview = location.reviews._id(reviewId)
      if (!foundReview) throw new NotFound('Review not found')
      if (!req.currentUser._id.equals(foundReview.owner))
        throw new Unauthorised()
      await foundReview.remove()
      await location.save()
      return res.sendStatus(204)
    }
  } catch (err) {
    console.log(err)
  }
}

// ? Update review
// Method: put
//Endpoint: '/api/locations/:locationId/review/:reviewId'
export const editReview = async (req, res) => { }
