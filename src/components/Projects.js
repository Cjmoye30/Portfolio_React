import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Projects.css';

// inline styling
const styles = {

  testBG: {
    backgroundColor: 'yellow'
  },

  testAlign: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  row: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  projectImage: {
    width: '100%',
    height: 'auto'
  },
}

function Projects({ projects }) {
  return (
    <section id='projects' className="section">

      <div className='sectionHeader'>
        <h2>My Projects</h2>
        <h5>Some of my most recent work</h5>
      </div>

      {/* ------------- Main Project ------------- */}
      {/* finding the first item in the projects array */}
      <Container fluid>
        <Row style={styles.row}>
          <Col style={styles.testBG} lg={8} className='project-card'>
            <img style={styles.projectImage} src={projects[0].imageURL} />

            <div className='project-overlay'>
              <h1>{projects[0].title}</h1>
            </div>
          </Col>
        </Row>
      </Container>

      <hr />

      {/* ------------- Secondary Projects ------------- */}
      {/* starting from the second item in the array for the rest of the projects */}
      <Container fluid>
        <Row style={styles.row}>
          <Stack style={styles.testAlign} direction='horizontal' gap={3}>
            {projects.slice(1).map((project) => (
              // add in outer col to add natural spacing to each of the projects
              <Col lg={5} md={12} className='project-card'>
                <div>
                  <img style={styles.projectImage} src={project.imageURL} />

                  <div className='project-overlay'>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <div className='projectLinks'>
                      <a target='_blank' href={project.repo}>Repo</a>
                      <a target='_blank' href={project.site}>Site</a>
                    </div>

                  </div>

                </div>
              </Col>

            ))}

          </Stack>
        </Row>
      </Container>


      {/* <div className='row project-row projects-row-secondary'>
        {projects.slice(1).map((project) => (
          // add in outer col to add natural spacing to each of the projects
          <div className='project-card col col-lg-5 m-3'>
            <div className={project.class}>
              <img style={styles.projectImage} src={project.imageURL} />

              <div className='project-overlay'>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <div className='projectLinks'>
                  <a target='_blank' href={project.repo}>Repo</a>
                  <a target='_blank' href={project.site}>Site</a>
                </div>

              </div>

            </div>
          </div>
        ))}
      </div> */}

    </section>
  );
}

export default Projects;
