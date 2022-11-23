/* eslint-disable comma-dangle */
/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

import axios from 'axios'

// Bootstrap components
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Button from 'react-bootstrap/Button'

// Imports
import ReviewInput from '../common/ReviewInput'
import Infographic from '../common/Infographic'
import CarouselImageController from '../common/CarouselImage'
import MapBox from '../common/MapBox'
import { getToken } from '../common/Auth'


const LocationSinglePage = () => {
  // ! State
  const [location, setLocation] = useState([])

  // ! Location
  const { locationId } = useParams()
  const navigate = useNavigate()

  // ! Execution
  useEffect(() => {
    const getLocation = async () => {
      try {
        const { data } = await axios.get(`/api/locations/${locationId}`)
        setLocation(data)
      } catch (err) {
        console.log(err)
      }
    }
    getLocation()
  }, [locationId])


  const deleteLocation = async (e) => {
    try {
      const response = await axios.delete(`/api/locations/${locationId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      navigate('/')
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <main className="single-page">
      <Container className="fluid mt-4 single-page-container">
        <Row>
          {location ? (
            <>
              <div className='single-page-header'>
                <div className='single-page-name'>
                  <h1 className='single-page-title'>{location.name}</h1>
                  <p className='card-code'>{location.countryCode}</p>
                </div>
                <div className='single-page-rating'>
                  <p className='card-code card-avg'>Rating: {location.avgRating}</p>
                </div>
              </div>
              <CarouselImageController location={location} />
              <Tabs
                defaultActiveKey="details"
                id="fill-tab-example"
                className="mb-3"
                fill
              >
                <Tab eventKey="details" title="Details">
                  <Col sm="12" md="6">
                    <Infographic location={location} />
                    <hr className='hr'></hr>
                    <h2>Description</h2>
                    <p>{location.description}</p>
                    <MapBox location={location} />
                    <button onClick={deleteLocation} className='btn  btn-danger'>Delete</button>
                  </Col>
                </Tab>
                <Tab eventKey="reviews" title="Reviews">
                  <ReviewInput location={location} />
                </Tab>
              </Tabs>
            </>
          ) : (
            <h2>Something went wrong...</h2>
          )}
        </Row>
      </Container>
    </main >
  )
}

export default LocationSinglePage
