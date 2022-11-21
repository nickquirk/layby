/* eslint-disable no-unused-vars */
import { findAllLocations, findLocation, findReview } from '../config/helpers.js'
import { NotFound, Unauthorised } from '../config/errors.js'
import { errorHandler } from '../config/helpers.js'

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
    errorHandler(res, err)
  }
}

// ? Show single location route
// Type: get
// Endpoint: '/api/locations/:locationId'
export const getSingleLocation = async (req, res) => {
  try {
    const location = await findLocation(req, res)
    return res.json(location)
  } catch (err) {
    console.log(err)
    errorHandler(res, err)
  }
}
// ? Add review
// Method: post
// Endpoint: '/api/locations/:locationId/review'
export const addReview = async (req, res) => {
  try {
    const location = await findLocation(req, res)
    if (location) {
      const reviewWithOwner = { ...req.body, owner: req.currentUser.id }
      location.reviews.push(reviewWithOwner)
      const parent = await location.parent()
      await parent.save()
      return res.status(201).json(location)
    }
  } catch (err) {
    console.log(err)
    errorHandler(res, err)
  }
}

// ? Delete review
// Method: delete
// Endpoint: '/api/locations/:locationId/review/:reviewId'
export const deleteReview = async (req, res) => {
  try {
    const location = await findLocation(req, res)
    const review = await findReview(req, res, location)
    await review.remove()
    const parent = await location.parent()
    await parent.save()
    return res.sendStatus(204)
  } catch (err) {
    console.log(err)
    errorHandler(res, err)
  }
}

// ? Update review
// Method: put
//Endpoint: '/api/locations/:locationId/review/:reviewId'
export const editReview = async (req, res) => {
  try {
    const location = await findLocation(req, res)
    const review = await findReview(req, res, location)
    if (review && req.currentUser._id.equals(review.owner)) {
      Object.assign(review, req.body)
      const parent = await location.parent()
      await parent.save()
      return res.status(202).json(review)
    } else {
      throw new Error('Update failed')
    }
  } catch (err) {
    console.log(err)
    errorHandler(res, err)
  }
}
