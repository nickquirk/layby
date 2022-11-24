/* eslint-disable comma-dangle */

// React
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

// Imports
import axios from 'axios'
import { getToken } from '../common/Auth.js'

// Custom Components
import LocationForm from '../common/LocationForm.js'

const AddLocation = () => {
  

  // ! Location Variables
  const navigate = useNavigate()
  const { locationId } = useParams()

  // ! State
  // Track state of following variables
  const [formFields, setFormFields] = useState({
    name: '',
    latitude: undefined,
    longitude: undefined,
    countryCode: '',
    currency: '',
    description: '',
    parking: true,
    freeparking: false,
    toilets: false,
    water: false,
    nearestFuel: undefined,
    nearbyActivities: '',
    image: ''
  })

  const [errors, setErrors] = useState(null)
  const [location, setLocation] = useState(null)

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
      console.log('SUCCESS -->', locationId)
      navigate('/locations')
      console.log('this is location id --> ', locationId)
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