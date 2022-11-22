import { NotFound } from '../config/errors.js'
import User from '../models/user.js'

export const getUser = async (req, res) => {
  try {
    const loggedInUser = await User.findById(req.currentUser._id).populate('createdReview')
    if (!loggedInUser) throw new NotFound('User not found')
    return res.json(loggedInUser)
  } catch (err) {
    console.log(err)
  }
}
