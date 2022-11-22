/* eslint-disable comma-dangle */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// imports
import axios from 'axios'
import { setToken } from '../common/Auth'

const AddLocation = () => {

  const navigate = useNavigate()

  // ! State
  // Track state of following variables
  const [formFields, setFormFields] = useState({
    name: '',
    latitude: undefined,
    longitude: undefined,
    countryCode: '',
    country: '',
    currency: '',
    description: '',
    parking: true,
    freeparking: false,
    toilets: false,
    water: false,
    nearestFuel: undefined,
    otherInfo: '',
    nearbyActivities: '',
    image: []
  })

  // ! Executions
  // send off form data to our API
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/login', formFields)
      setToken(data.token)
      // navigate to home after successful login
      navigate('/')
    } catch (err) {
      console.log(err)
    }
    console.log('form submitted')
  }

  const handleChange = (e) => {
    // This happens on any change to the form
    // create shallow copy of form fields by spreading in to a new object
    const updatedFormFields = { ...formFields }
    // set key name to value entered into form field
    updatedFormFields[e.target.name] = e.target.value
    // set formFields = updatedFormFields
    setFormFields(updatedFormFields)
    // ! if there's an error, set to an empty string
  }
  return (
    <div className="hero-page text-center form-main">
      <h1>Login</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            required
            className="form-control"
            type="text"
            name="locationName"
            onChange={handleChange}
            placeholder="Location Name"
            value={formFields.name}
          />
          <input
            required
            className="form-control"
            type="number"
            name="number"
            onChange={handleChange}
            placeholder="Latitude"
            value={formFields.latitude}
          />
          <input
            required
            className="form-control"
            type="number"
            name="number"
            onChange={handleChange}
            placeholder="Longitude"
            value={formFields.longitude}
          />
          <select
            onChange={handleChange}
            name="countryCode"
            id="create-filter"
            className="dropdown-addLoc"
            value={formFields.countryCode}
          >
            <option value="All">Select country</option>
            <option value="DE">Germany 🇩🇪</option>
            <option value="MA">Morocco 🇲🇦</option>
            <option value="PT">Portugal 🇵🇹</option>
            <option value="ESP">Spain 🇪🇸</option>
            <option value="UK">United Kingdom 🇬🇧</option>
          </select>
          <textarea
            required
            className="form-control"
            type="text"
            name="description"
            rows='10'
            cols='30'
            onChange={handleChange}
            placeholder="Add your desciption here..."
            value={formFields.description}
          />
          <fieldset>
            <legend>Select all that apply:</legend>
            <div>
              <label htmlFor="freeparking">Free Parking</label>
              <input type="radio" id="freeparking" name="freeparking" value={formFields.freeparking} />
            </div>
            <div>
              <label htmlFor="toilets">Toilet Facilities</label>
              <input type="radio" id="toilets" name="toilets" value={formFields.toilets} />
            </div>
            <div>
              <label htmlFor="water">Water Available</label>
              <input type="radio" id="water" name="water" value={formFields.water} />
            </div>
          </fieldset>
          <label htmlFor="fuel">Nearest Fuel Station(km):</label>
          <input type="number" id="fuel" name="fuel"
            min="1" max="100"></input>
          <input
            required
            className="form-control"
            type="number"
            name="number"
            onChange={handleChange}
            placeholder="Longitude"
            value={formFields.lon}
          />
          <input
            required
            className="form-control"
            type="number"
            name="number"
            onChange={handleChange}
            placeholder="Longitude"
            value={formFields.lon}
          />
          <input
            required
            className="form-control"
            type="number"
            name="number"
            onChange={handleChange}
            placeholder="Longitude"
            value={formFields.lon}
          />
          <button to={'/'} className="btn btn-main">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddLocation