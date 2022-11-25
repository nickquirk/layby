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
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search location name"
          name="search"
          id="filter"
          value={input.search}
        />

        <select
          onChange={handleChange}
          name="countryCode"
          id="filter"
          className="dropdown"
          value={input.countryCode}
        >
          <option value="All">Select country</option>
          <option value="DE">Germany 🇩🇪</option>
          <option value="MA">Morocco 🇲🇦</option>
          <option value="PT">Portugal 🇵🇹</option>
          <option value="ESP">Spain 🇪🇸</option>
          <option value="UK">United Kingdom 🇬🇧</option>
          <option value="IRE">Ireland 🇮🇪</option>
        </select>
      </div>
    </>
  )
}

export default FilterSearch
