import React from 'react';
import '../styles/Header.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import logo image for header
import logo from '../assets/images/logo.svg'

// Importing icons for use:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'

const styles = {

  introContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  logoMain: {
    height: '10rem'
  },

}

const locationIcon = <FontAwesomeIcon icon={faLocation} pulse />


function Intro() {
  // TODO: Add a style attribute to header and the h1 element

  return (

    <Container fluid>
      <Row>
        <Col style={styles.introContainer} lg={12}>
          <img style={styles.logoMain} src={logo} alt='logo' />
          <h1 className="logo-subtitle">Cambric Moye</h1>
          <h3>Full-Stack Web Developer</h3>
          <h5> {locationIcon} Charlotte, NC</h5>

        </Col>
      </Row>

    </Container>

  );
}

export default Intro;
