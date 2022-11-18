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

export const findAllLocations = async (req, _res) => {
  try {
    const locations = await VanSpot.find()
    const filteredLocations = locations.map((loc) => {
      return loc.locations
    })
    const perfect = filteredLocations[0].concat(
      filteredLocations[1],
      filteredLocations[2],
      filteredLocations[3],
      filteredLocations[4]
    )
    console.log('double trouble ->', perfect)
    return perfect
  } catch (err) {
    console.log(err)
  }
}
