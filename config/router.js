/* eslint-disable no-undef */
import express from 'express'
import { registerUser } from './controllers/auth.js'

const router = express.Router()

// router.route('/regions').get(getAllRegions)

// router.route('/regions/:id').get(getSingleRegion)

// router.route('/regions/:id/locations').get(getAllLocations)

<<<<<<< HEAD
router.route('/register')
  .post(registerUser)

=======
// router.route('/regions/:id/locations/:locationId').get(getSingleLocation)

// router.route('/register').post(registerUser)
>>>>>>> 1f5f82d8041967a106d86d039afcf38c5825e1d4

// router.route('/login').post(loginUser)

// router.route('/locations/:locationId/review').post(secureRoute, addReview)

// router
//   .route('/locations/:locationId/review/:reviewId')
//   .delete(secureRoute, deleteReview)
//   .put(secureRoute, editReview)

// router.route('/profile').get(secureRoute, getProfile)

export default router
