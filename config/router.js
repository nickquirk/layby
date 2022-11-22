/* eslint-disable no-undef */
import express from 'express'
import { registerUser, loginUser } from '../controllers/auth.js'
import { getUser, getAllUsers } from '../controllers/users.js'
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

//TODO


const router = express.Router()

router.route('/locations/:locationId').get(getSingleLocation)

router.route('/locations').get(getAllLocations)

router.route('/register').post(registerUser)

router.route('/login').post(loginUser)

router.route('/addLocation').post(secureRoute, addLocation)

router.route('/:locationId/editLocation').put(secureRoute, updateLocation)

router.route('/:locationId/deleteLocation').delete(secureRoute, deleteLocation)

router.route('/locations/:locationId/review').post(secureRoute, addReview)

router.route('/locations/:locationId/review/:reviewId')
  .delete(secureRoute, deleteReview)
  .put(secureRoute, editReview)

router.route('/profile/:userId')
  .get(secureRoute, getUser)

router.route('/users')
  .get(getAllUsers)

export default router
