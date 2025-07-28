import PropTypes from "prop-types"
import React from "react"
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = ({ siteTitle }) => (
  <Container fluid style={{ backgroundColor: "#FAFAFA" }}>
    <Container>
      <Navbar>
        <Navbar.Brand>Ryoa.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Porto</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
