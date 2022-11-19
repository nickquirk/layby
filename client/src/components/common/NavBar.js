import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const NavBar = () => {
  return (
    <Navbar expand="sm" className="navbar sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="intro-navbar"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" if="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {/* More Links to site pages here */}
            <Nav.Link as={Link} to="/locations">
              Locations
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Register
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
