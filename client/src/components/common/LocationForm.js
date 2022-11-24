
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
      <div id="location-form" className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            required
            className="form-control mt-1 mb-3 "
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            placeholder="Location name *"
            value={formFields.name}
          />
          {errors && errors.name && <small className='text-danger'>{errors.name}</small>}
          {/* <label className="text-left justify-content-start" htmlFor="latitude">Latitude (e.g. 51.510357):<span> *</span></label> */}
          <input
            required
            className="form-control mt-1 mb-3 "
            type="number"
            name="latitude"
            id="latitude"
            max='90'
            min='-90'
            step='0.000001'
            onChange={handleChange}
            placeholder="Latitude * e.g. 51.510357 "
            value={formFields.latitude}
          />
          {errors && errors.latitude && <small className='text-danger'>{errors.latitude}</small>}
          {/* <label className="text-left justify-content-start" htmlFor="longitude">Longitude (e.g. -0.116773):<span> *</span></label> */}
          <input
            required
            className="form-control mt-1 mb-3 "
            type="number"
            id="longitude"
            name="longitude"
            max='180'
            min='-180'
            step='0.000001'
            onChange={handleChange}
            placeholder="Longitude * e.g. -0.116773"
            value={formFields.longitude}
          />
          {errors && errors.longitude && <small className='text-danger'>{errors.longitude}</small>}
          <select
            onChange={handleChange}
            name="countryCode"
            id="create-filter"
            type="text"
            className="dropdown-addLoc "
            value={formFields.countryCode}
          >
            <option value="All">Select country *</option>
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
            className="dropdown-addLoc mt-3 mb-3 text-center"
            value={formFields.currency}
          >
            <option value="All">Select currency *</option>
            <option value="Euro">€ Euro</option>
            <option value="GBP">£ Pound</option>
            <option value="PT">Dirham</option>
          </select>
          {errors && errors.currency && <small className='text-danger'>{errors.currency}</small>}
          <textarea
            required
            className="form-control mt-1 mb-3"
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
          <div className="radio-buttons d-flex flex-column">
            <label className='radio-buttons-legend mb-2 text-left justify-content-start"'>Select all that apply:</label>
            <div className="all-radion-buttons d-flex flex-row justify-content-around">
              <div className="top-radio-buttons ">
                <fieldset >
                  <div className="radio-buttons-large">
                    <div className="button-large">
                      <label htmlFor="parking">Paid Parking</label>
                      <input type="checkbox" id="parking" name="parking" value={formFields.parking} />
                    </div>
                    {errors && errors.parking && <small className='text-danger'>{errors.parking}</small>}
                    <div className="button-large">
                      <label htmlFor="toilets">Toilets</label>
                      <input type="checkbox" id="toilets" name="toilets" value={formFields.toilets} />
                    </div>
                    {errors && errors.freeParking && <small className='text-danger'>{errors.freeParking}</small>}
                  </div>
                </fieldset>
              </div>
              <div className="bottom-radio-buttons">
                <fieldset>
                  <div className="radio-buttons-large">
                    <div className="button-large">
                      <label htmlFor="freeParking">Free Parking</label>
                      <input type="checkbox" id="freeParking" name="freeParking" value={formFields.freeParking} />
                    </div>
                    {errors && errors.toilets && <small className='text-danger'>{errors.toilets}</small>}
                    <div className="button-large">
                      <label htmlFor="water">Water</label>
                      <input type="checkbox" id="water" name="water" value={formFields.water} />
                    </div>
                    {errors && errors.water && <small className='text-danger'>{errors.water}</small>}
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
          <input
            required
            className="form-control mt-3 mb-3 "
            type="number"
            name="nearestFuel"
            id="fuel"
            onChange={handleChange}
            placeholder="Nearest fuel* (km) "
            value={formFields.nearestFuel}
          />
          {errors && errors.nearestFuel && <small className='text-danger'>{errors.nearestFuel}</small>}
          <input
            className="form-control mt-3 mb-3"
            type="text"
            name="nearbyActivities"
            id="nearbyActivities"
            onChange={handleChange}
            placeholder="Nearby activities e.g. Hiking, swimming..."
            value={formFields.nearbyActivities}
          />
          {errors && errors.nearbyActivities && <small className='text-danger'>{errors.nearbyActivities}</small>}
          <input
            required
            className="form-control mb-2"
            type="text"
            name="image"
            id="image"
            onChange={handleChange}
            placeholder="Image URL*  e.g. https://..."
            value={formFields.image}
          />
          {errors && errors.image && <small className='text-danger'>{errors.image}</small>}
          {/* Generic Message Error */}
          {errors && errors.message && <small className='text-danger'>{errors.message}</small>}
          {/* <Button type="button" className="btn  btn-lg mt-5 mb-4" onClick={() => handleSubmit()}>Submit</Button> */}
          <button to={'/'} className="btn btn-danger btn-lg mt-3 mb-3">Submit</button>
        </form>
      </div>
    </>
  )
}

export default LocationForm