import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

const Header = () => {
  const handleLogoClick = () => {
    return null
  }
  return (
    <Navbar
      bg='light'
      expand='sm'
      className='fixed-top'
      style={{ height: '3.5rem', margin: '0', paddingBottom: '10px' }}
    >
      <Container>
        <Nav>
          <h2 onClick={handleLogoClick}>Tiny Blog</h2>
          <Nav.Link href='#History'>History</Nav.Link>
          <Nav.Link href='#Magical'>Magical</Nav.Link>
          <Nav.Link href='#American'>French</Nav.Link>
          <Nav.Link href='#French'>American</Nav.Link>
          <Nav.Link href='#Crime'>Crime</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
