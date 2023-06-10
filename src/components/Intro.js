import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// import logo image for header
import logo from '../assets/images/logo.svg'

// TODO: Create a styles object called "styles"
const styles = {

  headerSection: {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  logoMain: {
    height: '300px'
  },

  logo: {
    height: '100px',
  },

  navGroup: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  introCenter: {
    textAlign: 'center'
  }

}

function Intro() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header className="header" >
      <div className="header-content row" style={styles.headerSection}>

        <div style={styles.introCenter}>
          <img style={styles.logoMain} src={logo} alt='logo' />
          <h1 className="logo-subtitle">Cambric Moye</h1>
          <h3>Full-Stack Web Developer</h3>
        </div>

      </div>

    </header>
  );
}

export default Intro;
