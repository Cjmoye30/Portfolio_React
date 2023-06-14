import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Image imports
import avatar from '../assets/images/avatar.png'
import codingIcon from '../assets/images/coding.svg'
import baseballIcon from '../assets/images/baseball-field.svg'
import chefIcon from '../assets/images/chef-hat.svg'
import supplyChainIcon from '../assets/images/supply-chain.svg'

// Importing icons for use:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const styles = {

  introContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },

  introImageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    border: 'solid 1px'
  },

  logoMain: {
    height: '10rem'
  },

  avatar: {
    maxHeight: '375px',
    width: 'auto'
  },

  miniCardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },

  miniCard: {
    display: 'flex',
    minHeight: '150px',
    alignItems: 'center',
    justifyContent: 'center',
    wordWrap: 'wrap'
  },

  button: {
    maxWidth: '250px',
    padding: '20px',
    margin: '20px auto',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'no-wrap'

  },

  bioIcon: {
    position: 'absolute',
    maxHeight: '100px',
    width: 'auto',
    opacity: '.2'
  }

}

const locationIcon = <FontAwesomeIcon icon={faLocationDot}  />
const arrowDown = <FontAwesomeIcon icon={faArrowRight} beat size="xl" />

function Intro() {

  return (

    <Container fluid>
      <Row style={styles.introContainer} >
        <Col lg={6}>
          <div style={styles.introImageWrapper}>
            {/* <img style={styles.logoMain} src={logo} alt='logo' /> */}
            <img style={styles.avatar} src={avatar} />

          </div>
          <h1 className="logo-subtitle">Cambric Moye</h1>
          <h3>Full-Stack Web Developer</h3>
          <h5> {locationIcon} Charlotte, NC</h5>

        </Col>

        <Row>

          <Col className='card-fsDev' style={styles.miniCard} sm={3} xs={12}>
            <h5>Full Stack Web Developer</h5>
            <img style={styles.bioIcon} src={codingIcon} />
          </Col>

          <Col className='card-fsDev' style={styles.miniCard} sm={3} xs={12}>
            <h5>Supply Chain Professional</h5>
            <img style={styles.bioIcon} src={supplyChainIcon} />
          </Col>

          <Col className='card-fsDev' style={styles.miniCard} sm={3} xs={12}>
            <h5>Former Professional Baseball Player</h5>
            <img style={styles.bioIcon} src={baseballIcon} />
          </Col>

          <Col className='card-fsDev' style={styles.miniCard} sm={3} xs={12}>
            <h5>Self-Proclaimed Chef</h5>
            <img style={styles.bioIcon} src={chefIcon} />
          </Col>

        </Row>
        <Button style={styles.button} variant="outline-dark"> <h5>More About Me</h5> {arrowDown} </Button>

      </Row>

    </Container>

  );
}

export default Intro;
