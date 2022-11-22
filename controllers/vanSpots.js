/* eslint-disable no-unused-vars */
import { findAllLocations, findLocation, findReview } from '../config/helpers.js'
import { NotFound, Unauthorised } from '../config/errors.js'
import { errorHandler } from '../config/helpers.js'
import VanSpot from '../models/vanSpot.js'
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

// ? User create location
// Method: post
// Endpoint: 'api/createLocation'
export const addLocation = async (req, res) => {
  try {
    const { countryCode } = req.body
    const country = await VanSpot.find()
    const targetCountry = country.filter(country => {
      return country.countryCode === countryCode
    })
    if (!targetCountry) {
      throw new Error('This location does not have a valid country')
    }
    const [newTargetCountry] = targetCountry
    if (newTargetCountry) {
      const newLocation = { ...req.body, owner: req.currentUser.id }
      newTargetCountry.locations.push(newLocation)
      await newTargetCountry.save()
      return res.status(201).json(targetCountry)
    }
  } catch (err) {
    console.log(err)
    errorHandler(res, err)
  }
}

// ? User edit location
// Method: put
// Endpoint: 'api/:locationId/editLocation'
export const updateLocation = async (req, res) => {
  try {
    const targetLocation = await findLocation(req, res)
    if (targetLocation && req.currentUser._id.equals(targetLocation.owner)) {
      Object.assign(targetLocation, req.body)
      const parent = await targetLocation.parent()
      await parent.save()
      return res.status(202).json(targetLocation)
    } else {
      throw new Unauthorised()
    }
  } catch (err) {
    console.log(err)
    errorHandler(err)
  }
}


// ? User delete location
// Method: delete
// Endpoint: 'api/:locationId/deleteLocation'
export const deleteLocation = async (req, res) => {
  try {
    const targetLocation = await findLocation(req, res)
    if (targetLocation && req.currentUser._id.equals(targetLocation.owner)) {
      targetLocation.remove()
      const parent = await targetLocation.parent()
      await parent.save()
      return res.sendStatus(204)
    } else {
      throw new Unauthorised()
    }
  } catch (err) {
    console.log(err)
    errorHandler(err)
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
