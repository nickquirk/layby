/* eslint-disable comma-dangle */
import { useEffect, useState } from 'react'

const FilterSearch = ({ locations, setFilteredLocations }) => {
  const [input, setInput] = useState({
    search: '',
    countryCode: 'All'
  })
  useEffect(() => {
    const regex = new RegExp(input.search, 'i')
    const filteredArr = locations.filter((loc) => {
      return (
        regex.test(loc.name) &&
        (loc.countryCode === input.countryCode || input.countryCode === 'All')
      )
    })
    setFilteredLocations(filteredArr)
  }, [input, locations, setFilteredLocations])

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="search-filter-input">
        <select
          onChange={handleChange}
          name="countryCode"
          id="filter"
          className="dropdown"
          value={input.countryCode}
        >
          <option value="" disabled>
            -- Choose country --
          </option>
          <option value="All">Select region</option>
          <option value="DE">Germany 🇩🇪</option>
          <option value="MA">Morocco 🇲🇦</option>
          <option value="PT">Portugal 🇵🇹</option>
          <option value="ESP">Spain 🇪🇸</option>
          <option value="UK">United Kingdom 🇬🇧</option>
        </select>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Find a spot"
          name="search"
          id="filter"
          value={input.search}
        />
      </div>
    </>
  )
}

export default FilterSearch
