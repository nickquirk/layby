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
import InfographicSingle from '../common/InfographicSingle'
import CarouselImageController from '../common/CarouselImage'
import MapBox from '../common/MapBox'
import { getToken } from '../common/Auth'
import SpinnerItem from '../common/SpinnerItem'


const LocationSinglePage = () => {
  // ! State
  const [location, setLocation] = useState(null)

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
          {location ?
            <>
              <div className='single-page-header'>
                <div className='single-page-name'>
                  <h1 className='single-page-title'>{location.name}</h1>
                  <p className='card-code'>{location.countryCode}</p>
                </div>
                <div className='single-page-rating'>
                  <p className='card-avg'><span className='rating'>{location.avgRating} &#9733;</span></p>
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
                  <Col sm="12" >
                    <InfographicSingle location={location} />
                    <hr className='single-page-hr'></hr>
                    <h3 className='mt-3 mb-3'>Description:</h3>
                    <p className='location-description'>{location.description}</p>
                    <h6 className='mt-3 mb-3 nearby-activities-title'>Nearby Activities:</h6>
                    <p className='location-description'>{location.nearbyActivities}</p>
                    <hr className='single-page-hr'></hr>
                    <MapBox location={location} />
                  </Col>
                  <div className='edit-delete-buttons d-flex justify-content-evenly'>
                    <button onClick={deleteLocation} className='btn btn-danger btn-lg mt-3 mb-3 ' id='del-btn'>Delete Location</button>
                    <Link to={`/locations/${locationId}/edit`}>
                      <button className='btn  btn-warning btn-lg mt-3 mb-3' id='edit-btn'>Edit Location</button>
                    </Link>
                  </div>
                </Tab>
                <Tab eventKey="reviews" title="Reviews">
                  <ReviewInput location={location} setLocation={setLocation} />
                </Tab>
              </Tabs>
            </>
            :
            <SpinnerItem />
          }
        </Row>
      </Container>
    </main >
  )
}

export default LocationSinglePage
