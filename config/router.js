/* eslint-disable no-undef */
import express from 'express'

const router = express.Router()

// router.route('/regions').get(getAllRegions)

// router.route('/regions/:id').get(getSingleRegion)

// router.route('/regions/:id/location/:locationId').get(getLocation)

router.route('/register').post(registerUser)

// router.route('/login').post(loginUser)

// router.route('/location/:locationId/review').post(secureRoute, addReview)

// router
//   .route('/location/:locationId/review/:reviewId')
//   .delete(secureRoute, deleteReview)
//   .put(secureRoute, editReview)

// router.route('/profile').get(secureRoute, getProfile)

export default router
