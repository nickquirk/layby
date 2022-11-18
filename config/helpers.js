/* eslint-disable no-unused-vars */
import VanSpot from '../models/vanSpot.js'

export const findLocation = async (req, _res) => {
  try {
    const { id } = req.params
    const location = await VanSpot.findById(id)
    if (!location) {
      console.log('NOT FOUND')
    }
    return location
  } catch (err) {
    console.log(err)
  }
}