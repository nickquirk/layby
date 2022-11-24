/* eslint-disable comma-dangle */
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// Imports
import axios from 'axios'
import { getPayload, getToken } from '../common/Auth.js'

// Custom Components
import LocationForm from '../common/LocationForm.js'

const EditLocation = () => {

  // ! Location Variables
  //extract locationId
  const { locationId } = useParams()
  const navigate = useNavigate()

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
    freeParking: false,
    toilets: false,
    water: false,
    nearestFuel: undefined,
    nearbyActivities: '',
    image: ''
  })

  const [errors, setErrors] = useState(null)

  // ! Execution
  useEffect(() => {
    const getSingleLocation = async () => {
      try {
        const { data } = await axios.get(`/api/locations/${locationId}`)
        //populate for fields with single location info
        // console.log('Location owner => ', data.addedBy.id)
        console.log('Payload --> ', getPayload())
        console.log(data)
        setFormFields(data)
      } catch (err) {
        console.log(err)
      }
    }
    getSingleLocation()
  }, [locationId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.put(`/api/locations/${locationId}`, formFields,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        })
      console.log('Location edited ->', data)
      navigate(`/locations/${locationId}`)
    } catch (err) {
      console.log('Edit failed ->', err)
      setErrors(err.response.data)
    }
  }

  // ! JSX
  return (
    <div className="site-wrapper">
      <div className="hero-page text-center form-main">
        <h1 className="mt-5">Edit a Location</h1>
        <LocationForm
          handleSubmit={handleSubmit}
          formFields={formFields}
          setFormFields={setFormFields}
          errors={errors}
          setErrors={setErrors}
          formName="Edit Location"
        />
      </div>
    </div>
    
  )
}

export default EditLocation