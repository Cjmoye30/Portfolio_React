import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../styles/AboutMe.css'

// Import Icons:
import reactIcon from '../assets/icons/react.svg'
import bootstrapIcon from '../assets/icons/bootstrap.svg'
import nodeIcon from '../assets/icons/node-js.svg'
import htmlIcon from '../assets/icons/html5.svg'
import cssIcon from '../assets/icons/css.svg'
import jsIcon from '../assets/icons/js.svg'


const styles = {
    avatar: {
        height: '300px',
        width: 'auto'
    },
    testBG: {
        display: 'flex',
        justifyContent: 'center',
    },
    pillars: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    pillarItem: {
        padding: '20px'
    },
    transSkill: {
        textAlign: 'center'
    },
    languages: {
        backgroundColor: 'yellow'
    },

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

export default function AboutMe({ bio }) {
    return (
        <Container fluid>
            <div className="sectionHeader">
                <h1>About Me Section</h1>
                <h5>Who I am and my purpose</h5>
            </div>

            <figure>
                <blockquote class="blockquote">
                    <p>"Twenty years from now you will be more disappointed by the things you didn't do than by the ones you
                        did..."</p>
                </blockquote>
                <figcaption class="blockquote-footer">
                    Mark Twain <cite title="Source Title">American Writer</cite>
                </figcaption>
            </figure>

            <Row>
                {bio.map((data) => (
                    <div>
                        <Row>
                            <Col style={styles.testBG}>
                                <img style={styles.avatar} className="about-me-avatar" src={data.avatar} />
                            </Col>
                            <Col xl={8} md={12}>
                                <div style={styles.pillars} className="pillars">
                                    {data.pillars.map((pillar) => (
                                        <h5 style={styles.pillarItem} >{pillar}</h5>
                                    ))}
                                </div>
                                <div className="bio">
                                    <p>{data.aboutMe}</p>
                                </div>
                            </Col>
                        </Row>

                        {/* accessing the innder loop of transferrable skills */}
                        {/* total overkill and I could just populate directily into the component but this is good practice */}
                        <Row>
                            <h6 style={styles.transSkill}>Transferrable Skills</h6>
                            {data.transferrableSkills.map((skillSet) => (
                                <Col>
                                    <div>
                                        <h3>{skillSet.title}</h3>
                                        <div>
                                            {skillSet.skills.map((skill) => (
                                                <p>{skill}</p>
                                            ))}
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                ))}
            </Row>

            {/* Skills Section */}
            <Row>
                <div style={styles.languages} className="sectionHeader">
                    <h1>My Skills</h1>
                    <h5>Proficient Languages and Libraries</h5>
                </div>

                <Col style={styles.iconCol} sm={2}> <img style={styles.languageIcon} src={reactIcon} />
                </Col>
                <Col style={styles.iconCol} sm={2}> <img style={styles.languageIcon} src={bootstrapIcon} />
                </Col>
                <Col style={styles.iconCol} sm={2}> <img style={styles.languageIcon} src={nodeIcon} />
                </Col>
                <Col style={styles.iconCol} sm={2}> <img style={styles.languageIcon} src={htmlIcon} />
                </Col>
                <Col style={styles.iconCol} sm={2}> <img style={styles.languageIcon} src={cssIcon} />
                </Col>
                <Col style={styles.iconCol} sm={2}> <img style={styles.languageIcon} src={jsIcon} />
                </Col>
            </Row>
        </Container>
    )
}