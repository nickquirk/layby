import {} from 'dotenv/config'
import User from '../models/user.js'
import jwt from 'jsonwebtoken'

export default async (req, res, next) => {
  try {
    const auth = req.headers.authorization
    if (!auth) {
      console.log('MISSING HEADERS')
      throw new Error('Missing headers')
    }
    // remove Bearer and space from start of token
    const token = auth.replace('Bearer ', '')
    // Bring in Secret
    const secret = process.env.SECRET
    // Verify that secret is same as locally stored secret
    const payload = jwt.verify(token, secret)
    // If token is valid, use the payload sub to identify user
    const userToVerify = await User.findById(payload.sub)
    if (!userToVerify) {
      console.log('TOKEN VALID BUT USER DOES NOT EXIST')
      throw new Error('User not found...')
    }
    // Add a key to the req.object that can be access by future middleware
    req.currentUser = userToVerify
    next() // If all good, pass to next middelware
  } catch (err) {
    return res.status(401).json({ message: err.message })
  }
}
