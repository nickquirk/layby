/* eslint-disable no-undef */
import express from 'express'
<<<<<<< HEAD
import { registerUser } from '../controllers/auth.js'
=======
import { registerUser, getAllLocations } from '../controllers/auth.js'

>>>>>>> development

const router = express.Router()

// router.route('/regions').get(getAllRegions)

// router.route('/regions/:id').get(getSingleRegion)

router.route('/regions/:id/locations').get(getAllLocations)

<<<<<<< HEAD
router.route('/register')
  .post(registerUser)

=======
router.route('/register').post(registerUser)
>>>>>>> development

// router.route('/login').post(loginUser)

// router.route('/locations/:locationId/review').post(secureRoute, addReview)

// router
//   .route('/locations/:locationId/review/:reviewId')
//   .delete(secureRoute, deleteReview)
//   .put(secureRoute, editReview)

// router.route('/profile').get(secureRoute, getProfile)

export default router
