import { NavLink } from "react-router-dom";

// import logo
import logo from '../assets/images/logoMain.svg'

import '../styles/Header.css'

const styles = {
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    logo: {
        maxHeight: '100px',
        width: 'auto'
    }
}

export default function Header() {

    return (

        <header>
            <div>
                <img style={styles.logo} src={logo} />
                <h2></h2>
            </div>

            <div className='navGroup' style={styles.navGroup}>
                <NavLink
                    to='/'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >Home
                </NavLink>

                <NavLink
                    to='/about'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >About
                </NavLink>

                <NavLink
                    to='/projects'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >My Work
                </NavLink>

                <NavLink
                    to='/contact'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >Contact
                </NavLink>

                <NavLink
                    to='/resume'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >Resume
                </NavLink>
            </div>

        </header>




    )
}