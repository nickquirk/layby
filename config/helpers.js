/* eslint-disable no-unused-vars */
import VanSpot from '../models/vanSpot.js'
import { NotFound, Unauthorised } from './errors.js'
import { CastError } from 'mongoose'

export const findLocation = async (req, res) => {
  try {
    const { locationId } = req.params
    const location = await findAllLocations(req, res)
    const targetLocation = location.filter(loc => {
      return locationId === loc.id
    })
    const [newTargetLocation] = targetLocation
    return newTargetLocation
  } catch (err) {
    console.log(err)
  }
}

export const findReview = async (req, _res, location) => {
  try {
    const { reviewId } = req.params
    const review = location.reviews.id(reviewId)
    if (!review) {
      throw new NotFound('Review not found')
    }
    if (!req.currentUser._id.equals(review.owner)) {
      throw new Unauthorised('Not permitted to delete this review')
    }
    return review
  } catch (error) {
    console.log(error)
  }
}

//This helper finds the location objects nested inside each region
export const findAllLocations = async (req, _res) => {
  try {
    const locations = await VanSpot.find()
    const filteredLocations = locations.map(loc => {
      return loc.locations
    })
    const concatFilteredLocations = filteredLocations.flat()
    return concatFilteredLocations
  } catch (err) {
    console.log(err)
  }
}

export const errorHandler = (res, err) => {
  if (err instanceof Unauthorised || err instanceof NotFound) {
    return res.status(err.status).json({ message: err.message })
  } else if (err instanceof CastError) {
    return res.status(400).json({ message: err.message })
  } else if (err.name === 'ValidationError') {
    return res.status(422).json({ message: err.message ? err.message : err.errors })
  } else {
    return res.status(500).json({ message: err.message })
  }
}
