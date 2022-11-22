import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import { isAuthenticated, handleLogout } from './Auth'
import Logo from '../images/van-logo.png'
import { useEffect } from 'react'

const NavBar = () => {
  const navigate = useNavigate()
  const { id } = useParams()


  return (
    <div className='navbar-container'>
      <Navbar expand="sm" className="navbar sticky-top">
        <Container>
          <Navbar.Brand as={Link} to='/' className='intro-navbar'><img
            src={Logo}
            width="60"
            height="60"
            className="d-inline-block align-center img-nav"
            alt="Logo"
          /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" if="basic-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/locations">
                Locations
              </Nav.Link>
              {isAuthenticated() ?
                <>
                  <Nav.Link as={Link} to={`/profile/${id}`}>
                    Profile
                  </Nav.Link>
                  <span className='nav-link' onClick={() => handleLogout(navigate)}>Logout</span>
                </>
                :
                <>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register">
                    Register
                  </Nav.Link>
                  <Nav.Link as={Link} to="/addLocation">Add your favourite Spots</Nav.Link>
                </>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
