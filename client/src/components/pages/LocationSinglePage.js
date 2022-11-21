import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

// Bootstrap components
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


const LocationSinglePage = () => {
  // ! State
  const [location, setLocation] = useState([])

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
    <main className='single-page'>
      <Container className='mt-4'>
        <Row>
          { location ?
            <>
              <h1>{location[0].name}</h1>
              <Col md="6">
                <img src={location[0].image} alt={location[0].name} />
              </Col>
              <Col md="6">
                <h2>Description</h2>
                <p>{location[0].description}</p>
              </Col>
            </>
            : 
            <h2>Something went wrong...</h2>
          }
        </Row>
      </Container>
      
    </main>

  )
}

export default LocationSinglePage