import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

const Header = () => {
  const handleLogoClick = () => {
    window.location.reload()
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
          <h2 onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            Tiny Blog
          </h2>
          <Nav.Link href='#history'>History</Nav.Link>
          <Nav.Link href='#magical'>Magical</Nav.Link>
          <Nav.Link href='#american'>French</Nav.Link>
          <Nav.Link href='#french'>American</Nav.Link>
          <Nav.Link href='#crime'>Crime</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
