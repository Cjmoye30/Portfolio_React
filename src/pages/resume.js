import Button from 'react-bootstrap/Button';
import resume from '../assets/docs/WebDevResume.docx'
import '../styles/Resume.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import Icons:
import reactIcon from '../assets/icons/react.svg'
import bootstrapIcon from '../assets/icons/bootstrap.svg'
import nodeIcon from '../assets/icons/node-js.svg'
import htmlIcon from '../assets/icons/html5.svg'
import cssIcon from '../assets/icons/css.svg'
import jsIcon from '../assets/icons/js.svg'

const styles = {
    iconCol: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    iconCol: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '125px',
        objectFit: 'contain'
    },
    languageIcon: {
        height: '75%',
        width: 'auto'
    }
}


export default function Resume() {
    return (

        <Container fluid className='resumeSection'>
            <Row>
                <div className='sectionHeader'>
                    <h2>Resume</h2>
                </div>
            </Row>

            <Row className='resumeRow'>
                <Col md={10} className='resumeCol'>
                    <div>
                        <iframe src='https://docs.google.com/document/d/e/2PACX-1vQVBG6SpQCDQJAhgPiD9J1DIq682_ylQhgw79mhZBc0-mTOp5mH_YHrr0YQHFC8pm-K44kJsPjNMd7e/pub' frameborder="0"> </iframe>
                    </div>
                    <Button className='download'>
                        <a href={resume} download>Download Resume</a>
                    </Button>
                </Col>
            </Row>

            {/* Skills Section */}
            <Row className='languagesRow'>
                <div style={styles.languages} className="sectionHeader">
                    <h1>My Skills</h1>
                    <h5>Proficient Languages and Libraries</h5>
                </div>

                <Col className='iconCol' style={styles.iconCol} sm={2}> <img style={styles.languageIcon} src={reactIcon} />
                </Col>

                <hr className='skillBreak' />

                <Col className='iconCol' style={styles.iconCol} sm={2}> <img style={styles.languageIcon} src={bootstrapIcon} />
                </Col>

                <hr className='skillBreak' />

                <Col className='iconCol' style={styles.iconCol} sm={2}> <img style={styles.languageIcon} src={nodeIcon} />
                </Col>

                <hr className='skillBreak' />

                <Col className='iconCol' style={styles.iconCol} sm={2}> <img style={styles.languageIcon} src={htmlIcon} />
                </Col>

                <hr className='skillBreak' />

                <Col className='iconCol' style={styles.iconCol} sm={2}> <img style={styles.languageIcon} src={cssIcon} />
                </Col>

                <hr className='skillBreak' />

                <Col className='iconCol' style={styles.iconCol} sm={2}> <img style={styles.languageIcon} src={jsIcon} />
                </Col>
            </Row>


        </Container>
    )
}