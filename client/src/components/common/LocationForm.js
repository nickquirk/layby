
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { BiPound, BiEuro } from 'react-icons/bi'
import { TbCurrencyDirham } from 'react-icons/tb'

const LocationForm = ({ handleSubmit, formFields ,setFormFields, setErrors }) => {


  const handleChange = (e) => {
    // This happens on any change to the form
    // create shallow copy of form fields by spreading in to a new object
    const updatedFormFields = { ...formFields }
    // set key name to value entered into form field
    updatedFormFields[e.target.name] = e.target.value
    // set formFields = updatedFormFields
    setFormFields(updatedFormFields)
    // setErrors({ ...errors, [e.target.name]: '', message: '' })
  }

  return (
    <>
      <h1>Add a New Location</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            required
            className="form-control"
            type="text"
            name="locationName"
            onChange={handleChange}
            placeholder="Location name*"
            value={formFields.name}
          />
          <input
            required
            className="form-control"
            type="number"
            name="latitude"
            onChange={handleChange}
            placeholder="Latitude* e.g. 51.510357 "
            value={formFields.latitude}
          />
          <input
            required
            className="form-control"
            type="number"
            name="longitude"
            onChange={handleChange}
            placeholder="Longitude* e.g. -0.116773"
            value={formFields.longitude}
          />
          <select
            onChange={handleChange}
            name="countryCode"
            id="create-filter"
            className="dropdown-addLoc"
            value={formFields.countryCode}
          >
            <option value="All">Select country<small> *</small></option>
            <option value="DE">Germany 🇩🇪</option>
            <option value="MA">Morocco 🇲🇦</option>
            <option value="PT">Portugal 🇵🇹</option>
            <option value="ESP">Spain 🇪🇸</option>
            <option value="UK">United Kingdom 🇬🇧</option>
          </select>
          <select
            onChange={handleChange}
            name="currency"
            id="create-filter"
            className="dropdown-addLoc"
            value={formFields.currency}
          >
            <option value="All">Select currency<small> *</small></option>
            <option value="Euro">€ Euro <BiEuro /></option>
            <option value="GBP">£ GBP <BiPound /></option>
            <option value="PT">Dirham <TbCurrencyDirham /></option>
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
              <label htmlFor="freeparking">Free Parking<small> *</small></label>
              <input type="radio" id="freeparking" name="freeparking" value={formFields.freeparking} />
            </div>
            <div>
              <label htmlFor="toilets">Toilet Facilities<small> *</small></label>
              <input type="radio" id="toilets" name="toilets" value={formFields.toilets} />
            </div>
            <div>
              <label htmlFor="water">Water Available<small> *</small></label>
              <input type="radio" id="water" name="water" value={formFields.water} />
            </div>
          </fieldset>
          <label htmlFor="fuel">Nearest Fuel Station(km):<small> *</small></label>
          <input type="number" id="fuel" name="fuel"
            min="1" max="100"></input>
          <input
            // required
            className="form-control"
            type="string"
            name="nearbyActivities"
            onChange={handleChange}
            placeholder="Nearby activities"
            value={formFields.nearbyActivities}
          />
          <input
            required
            className="form-control"
            type="string"
            name="image"
            onChange={handleChange}
            placeholder="Image URL*  e.g https://..."
            value={formFields.image}
          />
          <Button type="button" className="btn  btn-lg mt-5 mb-4" onClick={() => handleSubmit()}>Submit</Button>
          {/* <button to={'/'} className="btn btn-main">Submit</button> */}
        </form>
      </div>
    </>
  )
}

export default LocationForm