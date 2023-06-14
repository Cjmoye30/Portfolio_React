import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import { NavLink } from "react-router-dom";

// import logo
import logo from '../assets/images/cm logo 2.svg'

import '../styles/Header.css'

const styles = {
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    headerLogo: {
        height: '100px',
        width: 'auto'
    },
    navGroup: {
        display: 'flex'
    },
    navItem: {
        padding: '10px'
    }


}

export default function Header() {


    // implement state so that the active header link is highlighed toa



    return (
        <section style={styles.header} id='header' className='header'>
            <div>
                <img style={styles.headerLogo} src={logo} />
                <h1>Portfolio</h1>
            </div>
            <div className='navGroup' style={styles.navGroup}>
                <NavLink
                    to='/'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                    style={({ isActive, isPending },) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                        };
                    }}
                >Home
                </NavLink>

                <NavLink
                    to='/about'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }

                    style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                        };
                    }}
                >About
                </NavLink>

                <NavLink
                    to='/projects'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }

                    style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                        };
                    }}
                >My Work
                </NavLink>

                <NavLink
                    to='/contact'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }

                    style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                        };
                    }}
                >Contact
                </NavLink>

                <NavLink
                    to='/resume'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }

                    style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                        };
                    }}
                >Resume
                </NavLink>
            </div>
        </section>

    )
}