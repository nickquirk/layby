/* eslint-disable no-unused-vars */
import KiteSpot from '../models/kiteSpot.js'

export const findLocation = async (req, _res) => {
  try {
    const { id } = req.params
    const location = await KiteSpot.findById(id)
    if (!location){
      console.log('NOT FOUND')
    }
    return location
  } catch (err) {
    console.log(err)
  }
}