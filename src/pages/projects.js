import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
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
    justifyContent: 'center',
    padding: '10px'
  },

  projectImage: {
    width: '100%',
    height: 'auto'
  },

  projectCard: {
    padding: '0'
  }
}

function Projects({ projects }) {
  return (

    <Container fluid>
      <Row >
        <div className='sectionHeader'>
          <h2>My Projects</h2>
          <h5>Some of my most recent work</h5>
        </div>
      </Row>

      {/* ------------- Main Project ------------- */}
      <Row className='mainProjectRow' style={styles.row}>
        <Col style={styles.testBG} xl={8} className='project-card'>
          <img style={styles.projectImage} src={projects[0].imageURL} alt={projects[0].altText} />
          <div className='project-overlay'>
            <h1 className='projectTitle'>{projects[0].title}</h1>
            <p className='projectDesc'>{projects[0].description}</p>
            <p className='projectLanguages'>{projects[0].languages}</p>
            <div className='projectLinks'>
              <a target='_blank' href={projects[0].repo}>Repo</a>
              <a target='_blank' href={projects[0].site}>Site</a>
            </div>
          </div>
        </Col>
      </Row>

      <hr />

      {/* ------------- Secondary Projects ------------- */}
      <Row className='secondaryProjectRow'style={styles.row}>
        <Stack style={styles.testAlign} direction='horizontal' gap={3}>
          {projects.slice(1).map((project) => (
            // add in outer col to add natural spacing to each of the projects
            <Col xl={5} md={11} className='project-card'>
              <div>
                <img style={styles.projectImage} src={project.imageURL} alt={projects.altText} />
                <div className='project-overlay'>
                  <h1>{project.title}</h1>
                  <p>{project.description}</p>
                  <p>{project.languages}</p>
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
  );
}

export default Projects;
