
import Button from 'react-bootstrap/Button'
import { BiPound, BiEuro } from 'react-icons/bi'
import { TbCurrencyDirham } from 'react-icons/tb'

const LocationForm = ({ handleSubmit, formFields, setFormFields, errors, setErrors }) => {


  const handleChange = (e) => {
    console.log(`${e.target.name}: ${e.target.value}`)
    setFormFields({ ...formFields, [e.target.name]: e.target.value })
    // Removing unneeded errors
    setErrors({ ...errors, [e.target.name]: '', message: '' })
  }



  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            required
            className="form-control"
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            placeholder="Location name*"
            value={formFields.name}
          />
          {errors && errors.name && <small className='text-danger'>{errors.name}</small>}
          <input
            required
            className="form-control"
            type="number"
            name="latitude"
            id="latitude"
            onChange={handleChange}
            placeholder="Latitude* e.g. 51.510357 "
            value={formFields.latitude}
          />
          {errors && errors.latitude && <small className='text-danger'>{errors.latitude}</small>}
          <input
            required
            className="form-control"
            type="number"
            id="longitude"
            name="longitude"
            onChange={handleChange}
            placeholder="Longitude* e.g. -0.116773"
            value={formFields.longitude}
          />
          {errors && errors.longitude && <small className='text-danger'>{errors.longitude}</small>}
          <select
            onChange={handleChange}
            name="countryCode"
            id="create-filter"
            type="text"
            className="dropdown-addLoc"
            value={formFields.countryCode}
          >
            <option value="All">Select country:</option>
            <option value="DE">Germany 🇩🇪</option>
            <option value="MA">Morocco 🇲🇦</option>
            <option value="PT">Portugal 🇵🇹</option>
            <option value="ESP">Spain 🇪🇸</option>
            <option value="UK">United Kingdom 🇬🇧</option>
          </select>
          {errors && errors.countryCode && <small className='text-danger'>{errors.countryCode}</small>}
          <select
            onChange={handleChange}
            name="currency"
            id="create-filter"
            type="text"
            className="dropdown-addLoc"
            value={formFields.currency}
          >
            <option value="All">Select currency<span> *</span></option>
            <option value="Euro">€ Euro</option>
            <option value="GBP">£ GBP</option>
            <option value="PT">Dirham</option>
          </select>
          {errors && errors.currency && <small className='text-danger'>{errors.currency}</small>}
          <textarea
            required
            className="form-control"
            type="text"
            id="description"
            name="description"
            rows='10'
            cols='30'
            onChange={handleChange}
            placeholder="Add your desciption here..."
            value={formFields.description}
          />
          {errors && errors.description && <small className='text-danger'>{errors.description}</small>}
          <fieldset>
            <legend>Select all that apply:</legend>
            <div>
              <label htmlFor="parking">Parking<span> *</span></label>
              <input type="radio" id="parking" name="parking" value={formFields.parking} />
            </div>
            {errors && errors.parking && <small className='text-danger'>{errors.parking}</small>}
            <div>
              <label htmlFor="freeParking">Free Parking</label>
              <input type="radio" id="freeParking" name="freeParking" value={formFields.freeParking} />
            </div>
            {errors && errors.freeParking && <small className='text-danger'>{errors.freeParking}</small>}
            <div>
              <label htmlFor="toilets">Toilet Facilities<span> *</span></label>
              <input type="radio" id="toilets" name="toilets" value={formFields.toilets} />
            </div>
            {errors && errors.toilets && <small className='text-danger'>{errors.toilets}</small>}
            <div>
              <label htmlFor="water">Water Available<span> *</span></label>
              <input type="radio" id="water" name="water" value={formFields.water} />
            </div>
            {errors && errors.water && <small className='text-danger'>{errors.water}</small>}
          </fieldset>
          <label htmlFor="fuel">Nearest Fuel Station(km):<span> *</span></label>
          <input type="number" id="fuel" name="fuel" min="1" max="100" value={formFields.fuel} ></input>
          {errors && errors.fuel && <small className='text-danger'>{errors.fuel}</small>}
          <input
            className="form-control"
            type="text"
            name="nearbyActivities"
            id="nearbyActivities"
            onChange={handleChange}
            placeholder="Nearby activities"
            value={formFields.nearbyActivities}
          />
          {errors && errors.nearbyActivities && <small className='text-danger'>{errors.nearbyActivities}</small>}
          <input
            required
            className="form-control"
            type="text"
            name="image"
            id="image"
            onChange={handleChange}
            placeholder="Image URL*  e.g https://..."
            value={formFields.image}
          />
          {errors && errors.image && <small className='text-danger'>{errors.image}</small>}
          {/* Generic Message Error */}
          {errors && errors.message && <small className='text-danger'>{errors.message}</small>}
          {/* <Button type="button" className="btn  btn-lg mt-5 mb-4" onClick={() => handleSubmit()}>Submit</Button> */}
          <button to={'/'} className="btn btn-main">Submit</button>
        </form>
      </div>
    </>
  )
}

export default LocationForm