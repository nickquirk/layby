/* eslint-disable no-undef */
import express from 'express'
import { registerUser, loginUser } from '../controllers/auth.js'
import {
  getUser,
  getAllUsers,
  setProfilePic,
  getUserReviews
} from '../controllers/users.js'
import {
  getAllLocations,
  getSingleLocation,
  addReview,
  deleteReview,
  editReview,
  addLocation,
  updateLocation,
  deleteLocation
} from '../controllers/vanSpots.js'
import secureRoute from './secureRoute.js'


const router = express.Router()

router.route('/locations')
  .get(getAllLocations)
  .post(secureRoute, addLocation)

router.route('/locations/:locationId')
  .get(getSingleLocation)
  .put(secureRoute, updateLocation)
  .delete(secureRoute, deleteLocation)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/locations/:locationId/review')
  .post(secureRoute, addReview)
  .get(secureRoute, getUserReviews)

router.route('/locations/:locationId/review/:reviewId')
  .delete(secureRoute, deleteReview)
  .put(secureRoute, editReview)

router.route('/users/:userId')
  .get(secureRoute, getUser)
  .put(secureRoute, setProfilePic)

router.route('/users')
  .get(getAllUsers)

export default router



