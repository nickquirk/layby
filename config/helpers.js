/* eslint-disable no-unused-vars */
import VanSpot from '../models/vanSpot.js'

// export const findLocation = async (req, _res) => {
//   try {
//     console.log('In Helper function ->', req.params)
//     const location = await VanSpot.findById(req.params)
//     if (!location) {
//       console.log('NOT FOUND')
//     }
//     return location
//   } catch (err) {
//     console.log(err)
//   }
// }

//This helper finds the location objects nested inside each region
export const findAllLocations = async (req, _res) => {
  try {
    const locations = await VanSpot.find()
    const filteredLocations = locations.map((loc) => {
      return loc.locations
    })
    const concatFilteredLocations = filteredLocations.flat()
    return concatFilteredLocations
  } catch (err) {
    console.log(err)
  }
}
