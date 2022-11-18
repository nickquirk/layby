/* eslint-disable no-unused-vars */
import VanSpot from '../models/vanSpot.js'

export const findLocation = async (req, _res) => {
  try {
    console.log('In Helper function ->', req.params)
    const location = await VanSpot.findById(req.params)
    if (!location) {
      console.log('NOT FOUND')
    }
    return location
  } catch (err) {
    console.log(err)
  }
}