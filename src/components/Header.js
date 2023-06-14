import Nav from 'react-bootstrap/Nav';

// import logo
import logo from '../assets/images/cm logo 2.svg'

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
    }

}

export default function Header() {
    return (
        <section style={styles.header}  id='header' className='header'>
            <div>
                <img style={styles.headerLogo} src={logo}/>
                <h1>Portfolio</h1>
            </div>
            <div>
                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href='#projects' eventKey="link-1">My Work</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href='#contactMe' eventKey="link-2">Contact Me</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="link-3">Resume</Nav.Link>
                    </Nav.Item>

                </Nav>
            </div>
        </section>



    )

}