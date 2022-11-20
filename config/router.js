/* eslint-disable no-undef */
import express from 'express'
import { registerUser, loginUser } from '../controllers/auth.js'
import {
  getAllLocations,
  getSingleLocation,
  addReview,
  deleteReview,
  editReview
} from '../controllers/vanSpots.js'
import secureRoute from './secureRoute.js'

//TODO
// Add secureRoute

const router = express.Router()

// router.route('/regions').get(getAllRegions)
// This needs to be changed back
router.route('/locations/:locationId').get(getSingleLocation)

router.route('/locations').get(getAllLocations)

router.route('/register').post(registerUser)

router.route('/login').post(loginUser)

router.route('/locations/:locationId/review').post(secureRoute, addReview)

router
  .route('/locations/:locationId/review/:reviewId')
  .delete(secureRoute, deleteReview)
  .put(secureRoute, editReview)

// router.route('/profile').get(secureRoute, getProfile)

export default router
