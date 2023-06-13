import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Projects.css';

// inline styling
const styles = {

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

      {/* get the first item in the array and using that as my main project */}
      <div className='row project-row main-project-row'>
        <div className='project-card col col-lg-8'>

          <div className={projects[0].class}>
            <img style={styles.projectImage} src={projects[0].imageURL} />

            <div className='project-overlay'>
              <h1>{projects[0].title}</h1>
            </div>
          </div>

        </div>
      </div>

      {/* starting from the second item in the array for the rest of the projects */}
      <div className='row project-row projects-row-secondary'>
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
      </div>

    </section>
  );
}

export default Projects;
