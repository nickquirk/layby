/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

//React Icon Components
import { MdOutlineLocalGasStation, MdOutlineWaterDrop } from 'react-icons/md'
import { BiPound, BiEuro } from 'react-icons/bi'
import { IoMdWater } from 'react-icons/io'
import { GrRestroom } from 'react-icons/gr'
// Bootstrap components
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

//
import ReviewField from '../common/ReviewField'

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
    <main className='single-page'>
      <Container className='fluid mt-4 single-page-container'>
        <Row>
          {location ?
            <>
              <div className='header-image col-xs-1' id='hero'>
                <picture className='single-page-hero'>
                  <source media="(min-width: 0px)" srcSet={location.image} />
                  <img className='single-page-hero' src={location.image} alt={location.name} />
                </picture>
                <h1 className='single-page-header'>{location.name}</h1>
              </div>
              <div className='widget-container'>
                {location.currency === '£' ?
                  <div className='ifg' id='pound-ifg'><BiPound /></div>
                  :
                  <></>}
                {location.currency === '€' ?
                  <div className='ifg' id='euro-ifg'><BiEuro /></div>
                  :
                  <></>}
                {location.water === true ?
                  <div className='ifg' id='water-ifg'><MdOutlineWaterDrop /></div>
                  :
                  <></>}
                {location.toilets === true ?
                  <div className='ifg' id='restroom-ifg'><GrRestroom /></div>
                  :
                  <></>}
                <div className='ifg' id='gas-ifg'><MdOutlineLocalGasStation /></div>
              </div>
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
            :
            <h2>Something went wrong...</h2>
          }
        </Row>
      </Container>
    </main>
  )
}

export default LocationSinglePage
