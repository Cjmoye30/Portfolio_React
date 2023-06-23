import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../styles/AboutMe.css'



const styles = {
    avatar: {
        maxHeight: '400px',
        width: 'auto'
    },

    transSkill: {
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: 'bold'
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
            <Row>
                <div className="sectionHeader">
                    <h1>Who I am and my purpose</h1>
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

            </Row>

            <Row>
                {bio.map((data) => (
                    <div>
                        <Row className='imgBioRow'>
                            <Col className='imgCol'>
                                <img style={styles.avatar} className="about-me-avatar" src={data.avatar} alt=' ' />
                            </Col>
                            <Col className='bioCol' xl={8} md={12}>
                                <div className="pillars">
                                    {data.pillars.map((pillar) => (
                                        <p >{pillar}</p>
                                    ))}
                                </div>
                                <div className="bio">
                                    <p>{data.aboutMe}</p>
                                </div>
                            </Col>
                        </Row>

                        <hr />

                        <Row className='skillsRow'>
                            <p style={styles.transSkill}>Transferrable Skills</p>
                            <hr />
                            {data.transferrableSkills.map((skillSet) => (
                                <Col sm={6} xs={12}>
                                    <Col className='skillGroup'>
                                        <div>
                                            <h3 className='skillTitle'>{skillSet.title}</h3>
                                            <hr/>
                                            <div>
                                                {skillSet.skills.map((skill) => (
                                                    <p className='skillName'>{skill}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </Col>
                                </Col>
                            ))}
                        </Row>
                    </div>
                ))}
            </Row>


        </Container>
    )
}