import User from '../models/user.js'

export const getProfile = async (req, res) => {
  try {
    const loggedInUser = await User.findById(req.currentUser._id) //.populate()
    return res.json(loggedInUser)
  } catch (err) {
    console.log(err)
  }
}
