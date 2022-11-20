import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'


const LocationSinglePage = () => {
  // ! State
  const [location, setLocation] = useState(null)

  // ! Location
  const { id } = useParams()

  // ! Execution
  useEffect(() => {
    const getLocation = async () => {
      try {
        console.log(id)
        const { data } = await axios.get(`/api/locations/${id}`)
        setLocation(data)
      } catch (err) {
        console.log(err)
      }
    }
    getLocation()
  }, [id])  


  return (
    <>
      <h1>Location Single Page</h1>
    </>
  )
}

export default LocationSinglePage