/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

//React Icon Components

// Bootstrap components
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

// Imports
import ReviewField from '../common/ReviewField'
import Infographic from '../common/Infographic'
import CarouselController from '../common/Carousel'

const LocationSinglePage = () => {
  // ! State
  const [location, setLocation] = useState([])

  // ! Location
  const { locationId } = useParams()

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

  return (
    <main className="single-page">
      <Container className="fluid mt-4 single-page-container">
        <Row>
          {location ? (
            <>
              <div className='single-page-header'>
                <h1 className='single-page-title'>{location.name}</h1>
                <p className='single-page-code'>{location.countryCode}</p>
              </div>
              <CarouselController location={location} />
              <Infographic location={location} />
              <hr className='hr'></hr>
              <Tabs
                defaultActiveKey="details"
                id="fill-tab-example"
                className="mb-3"
                fill
              >
                <Tab eventKey="details" title="Details">
                  <Col md="6">
                    <h2>Description</h2>
                    <p>{location.description}</p>
                  </Col>
                </Tab>
                <Tab eventKey="reviews" title="Reviews">
                  <ReviewField />
                </Tab>
              </Tabs>
            </>
          ) : (
            <h2>Something went wrong...</h2>
          )}
        </Row>
      </Container>
    </main>
  )
}

export default LocationSinglePage
