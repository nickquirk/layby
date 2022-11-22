/* eslint-disable comma-dangle */

// React
import { useState } from 'react'
import { useNavigate, useParams  } from 'react-router-dom'

// Imports
import axios from 'axios'
import { getToken } from '../common/Auth'

// Custom Components
import LocationForm from '../common/LocationForm'

const AddLocation = () => {
  // ! Location Variables
  const navigate = useNavigate()

  // ! State
  // Track state of following variables
  const [formFields, setFormFields] = useState({
    name: '',
    latitude: null,
    longitude: null,
    countryCode: '',
    country: '',
    currency: '',
    description: '',
    parking: true,
    freeparking: false,
    toilets: false,
    water: false,
    nearestFuel: null,
    nearbyActivities: '',
    image: ''
  })

  const [ errors, setErrors ] = useState(null)

  // Location 
  const { locationId } = useParams()

  // ! Executions
  // send off form data to our API
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log('GET TOKEN ->', getToken())
      const { data } = await axios.post('/api/locations', formFields, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      console.log('SUCCESS -->', data)
      navigate(`/locations/${locationId}`)
    } catch (err) {
      console.log('hello ->', err.response.data)
      setErrors(err.response.data)
    }
    console.log('form submitted')
  }

  
  return (
    <div className="hero-page text-center form-main">
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