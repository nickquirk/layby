/* eslint-disable comma-dangle */

// React
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Imports
import axios from 'axios'
import { getToken } from '../common/Auth.js'

// Custom Components
import LocationForm from '../common/LocationForm.js'

const AddLocation = () => {

  // ! Location Variables
  const navigate = useNavigate()

  // ! State
  // Track state of following variables
  const [formFields, setFormFields] = useState({
    name: '',
    latitude: 0,
    longitude: 0,
    countryCode: '',
    currency: '',
    description: '',
    parking: true,
    freeparking: false,
    toilets: false,
    water: false,
    nearestFuel: 0,
    nearbyActivities: '',
    image: ''
  })

  const [errors, setErrors] = useState(null)

  // ! Execution
  // send off form data to API
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log('FORM FIELDS', formFields)
      console.log('GET TOKEN ->', getToken())
      await axios.post('/api/locations/', formFields, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      // console.log('SUCCESS -->', locationId)
      // navigate(`/locations/${locationId}`)
    } catch (err) {
      console.log('hello ->', err.response.data)
      setErrors(err.response.data)
      console.log(err)
    }

  }

  return (
    <div className="hero-page text-center form-main">
      <h1 className="mt-5">Add a Location</h1>
      <LocationForm
        handleSubmit={handleSubmit}
        formFields={formFields}
        setFormFields={setFormFields}
        errors={errors}
        setErrors={setErrors}
        formName="Add Location"
      />
    </div>
  )
}

export default AddLocation