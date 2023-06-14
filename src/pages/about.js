import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../styles/AboutMe.css'

const styles = {
    avatar: {
        height: '300px',
        width: 'auto'
    },

    testBG: {
        backgroundColor: 'yellow'
    }
}

export default function AboutMe({ bio }) {
    return (
        <section id="aboutMe">
            <div className="sectionHeader">
                <h1>About Me Section</h1>
                <h5>Who I am and my purpose</h5>
            </div>

            <Row>
                {bio.map((data) => (

                    <div>
                        <Row>
                            <Col style={styles.testBG}>
                                <img style={styles.avatar} className="about-me-avatar" src={data.avatar} />

                                <div className="pillars">
                                    {data.pillars.map((pillar) => (
                                        <h5>{pillar}</h5>
                                    ))}

                                </div>
                            </Col>
                        </Row>

                        <div className="bio">
                            <p>{data.aboutMe}</p>
                        </div>

                        {/* accessing the innder loop of transferrable skills */}
                        {/* total overkill and I could just populate directily into the component but this is good practice */}
                        {data.transferrableSkills.map((skillSet) => (
                            <div>
                                <h3>{skillSet.title}</h3>
                                <div>
                                    {skillSet.skills.map((skill) => (
                                        <p>{skill}</p>
                                    ))}
                                </div>
                            </div>
                        ))}

                    </div>
                ))}

            </Row>


        </section>
    )
}