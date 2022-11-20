import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import FilterSearch from '../common/FilterSearch'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const LocationMultiPage = () => {

  const [locations, setLocations] = useState([])
  const [errors, setErrors] = useState(false)
  const [filteredLocations, setFilteredLocations] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/locations')
        console.log('data->', data)
        setLocations(data)
      } catch (err) {
        console.log(err.message)
        setErrors(true)
      }
    }
    getData()
  }, [])



  return (
    <main className='location-index'>
      <Container className='char-container mt-4'>
        <FilterSearch locations={locations} filteredLocations={filteredLocations} setFilteredLocations={setFilteredLocations} />
        {filteredLocations.length ?
          <Row>
            {filteredLocations.map(loc => {
              console.log('Hello')
              const { name, countryCode, freeparking, image, toilets, water, id } = loc
              console.log(image)
              return (
                <Col key={id} sm='6' md='3' className='char-card mb-4'>
                  <Link className='text-decoration-none' to={`/location/${id}`}>
                    <Card>
                      <div className='card-image' style={{ backgroundImage: `url(${image})` }}></div>
                      <Card.Body>
                        <h4>{name}</h4>
                        <span>{countryCode}</span>
                        <p>{toilets}</p><p>{freeparking}</p><p>{water}</p>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              )
            })}
          </Row>
          :
          errors ? <h2>Something has gone wrong, my sincere apologies...</h2> : <h2>Loading...</h2>
        }
      </Container>
    </main>
  )
}

export default LocationMultiPage