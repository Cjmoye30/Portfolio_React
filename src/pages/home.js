import React from 'react';
import Container from 'react-bootstrap/Container';
// import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { NavLink, Link } from "react-router-dom";

// Css
import '../styles/Home.css'

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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },

  introImageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  logoMain: {
    height: '10rem'
  },

  avatar: {
    maxHeight: '600px',
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
    wordWrap: 'wrap',
  },

  bioIcon: {
    position: 'absolute',
    maxHeight: '100px',
    width: 'auto',
    opacity: '.2'
  }

}

const locationIcon = <FontAwesomeIcon icon={faLocationDot} />
const arrowDown = <FontAwesomeIcon icon={faArrowRight} beat size="lg" />

function Intro() {

  return (

    <Container fluid className='homeContainer'>
      <Row style={styles.introContainer} >
        <Col lg={6}>
          <div className='homeAvatar' style={styles.introImageWrapper}>
            <img style={styles.avatar} src={avatar} alt=' ' />
          </div>

          <div className="logo-subtitle">
            <h1 >Cambric Moye</h1>
            <h3>Full-Stack Web Developer</h3>
            <h5> {locationIcon} Charlotte, NC</h5>

          </div>
        </Col>

        <Col lg={4}>
          <div className='cardRow'>
            <Col className='outerCard' sm={3} xs={12}>
              <Link className='homeCardLink' to='https://github.com/Cjmoye30' target='_blank'>
                <Col className='card' style={styles.miniCard} >
                  <h5 className='cardText'>Full Stack Web Developer</h5>
                  <img style={styles.bioIcon} src={codingIcon} alt=' ' />
                </Col>
              </Link>
            </Col>

            <Col className='outerCard' sm={3} xs={12}>
              <Link className='homeCardLink' to='https://www.linkedin.com/in/cambric-moye-30/' target='_blank'>
                <Col className='card' style={styles.miniCard}>
                  <h5 className='cardText'>Supply Chain Professional</h5>
                  <img style={styles.bioIcon} src={supplyChainIcon} alt=' ' />
                </Col>
              </Link>
            </Col>

            <Col className='outerCard' sm={3} xs={12}>
              <Link className='homeCardLink' to='https://www.baseball-reference.com/register/player.fcgi?id=moye--000cam' target='_blank'>
                <Col className='card' style={styles.miniCard}>
                  <h5 className='cardText'>Former Professional Baseball Player</h5>
                  <img style={styles.bioIcon} src={baseballIcon} alt=' ' />
                </Col>
              </Link>
            </Col>

            <Col className='outerCard' sm={3} xs={12}>
              <Link className='homeCardLink' to='https://sleepy-beach-12267-a5c989dbbda6.herokuapp.com/' target='_blank'>
                <Col className='card' style={styles.miniCard}>
                  <h5 className='cardText'>Self-Proclaimed Chef</h5>
                  <img style={styles.bioIcon} src={chefIcon} alt=' ' />
                </Col>
              </Link>
            </Col>
          </div>
        </Col>

        <Col xs={12}>
          <Button
            className='aboutMeButton'
            style={styles.button}
          >
            <NavLink
              className='aboutMeText'
              to='/about'
            >
              <div className='buttonText'>
                <h5>More About Me</h5> {arrowDown}
              </div>
            </NavLink>
          </Button>
        </Col>
      </Row>



    </Container>

  );
}

export default Intro;
