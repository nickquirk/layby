import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const NavBar = () => {
  return (
    <Navbar expand='sm' className='navbar'>
      <Container>
        <Navbar.Brand as={Link} to='/' className='intro-navbar'>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end' if='basic-navbar-nav'>
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {/* More Links to site pages here */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar