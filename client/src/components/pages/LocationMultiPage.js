import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const LocationMultiPage = () => {

  const [locations, setLocations] = useState([])
  const [errors, setErrors] = useState(false)

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
        {locations.length ?
          <Row>
            {locations.map(loc => {
              const { name, countryCode, freeparking, image, toilets, water, _id } = loc
              return (
                <Col key={_id} sm='6' md='3' className='char-card mb-4'>
                  <Link className='text-decoration-none' to={`/character/${_id}`}>
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
          errors ? <h2>Something is wrong, please try again later...</h2> : <h2>Loading...</h2>
        }
      </Container>
    </main>
  )
}

export default LocationMultiPage