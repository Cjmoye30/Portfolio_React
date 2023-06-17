import { NavLink } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import logo
import logo from '../assets/images/logoMain.svg'

import '../styles/Header.css'

const styles = {

    logo: {
        maxHeight: '100px',
        width: 'auto'
    },
}

export default function Header() {

    return (

        <Row className="header">
            <Col md={3} className="navLogo">
                <div>
                    <img style={styles.logo} src={logo} />
                </div>

            </Col>
            <Col md={6} className="navCol">
                    <NavLink
                        to='/'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active navigationLink" : "navigationLink"
                        }
                    >Home
                    </NavLink>

                    <NavLink
                        to='/about'
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active navigationLink" : "navigationLink"
                    }
                    >About
                    </NavLink>

                    <NavLink
                        to='/projects'
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active navigationLink" : "navigationLink"
                    }
                    >Projects
                    </NavLink>

                    <NavLink
                        to='/contact'
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active navigationLink" : "navigationLink"
                    }
                    >Contact
                    </NavLink>

                    <NavLink
                        to='/resume'
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active navigationLink" : "navigationLink"
                    }
                    >Resume
                    </NavLink>
            </Col>
        </Row>

    )
}