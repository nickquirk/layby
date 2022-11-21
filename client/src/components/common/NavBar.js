//REACT components
import { Link, useNavigate } from 'react-router-dom'

// imports
import { handleLogout, isAuthenticated } from '../../helpers/auth'
import { useEffect } from 'react'

//bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const NavBar = () => {
  // location variable
  const navigate = useNavigate()

  useEffect(() => {
    !isAuthenticated() && navigate('/login')
  }, [])

  return (
    <Navbar expand="sm" className="navbar sticky-top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="intro-navbar"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" if="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/locations">
              Locations
            </Nav.Link>
            {/* Register and login show when logged out */}
            {isAuthenticated() ? (
              <>
                <span
                  className="nav-link"
                  onClick={() => handleLogout(navigate)}
                >
                  Logout
                </span>
                <a href="/profile">
                  <span>Profile</span>
                </a>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
