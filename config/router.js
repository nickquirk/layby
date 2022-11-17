/* eslint-disable no-undef */
import express from 'express'
import { registerUser, loginUser } from '../controllers/auth.js'
import { getAllLocations } from '../controllers/kiteSpots.js'

//TODO 
// Add secureRoute


const router = express.Router()

// router.route('/regions').get(getAllRegions)

// router.route('/regions/:id').get(getSingleRegion)

router.route('/regions/:id/locations')
  .get(getAllLocations)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

// router.route('/locations/:locationId/review').post(secureRoute, addReview)

// router
//   .route('/locations/:locationId/review/:reviewId')
//   .delete(secureRoute, deleteReview)
//   .put(secureRoute, editReview)

// router.route('/profile').get(secureRoute, getProfile)

export default router
