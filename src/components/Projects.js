import React from 'react';
// Here we import the Section.css file to grant access to some additional classNames

// Import CSS to use pseudo elements
import '../styles/Projects.css';

// inline styling
const styles = {

  projectImage: {
    width: '100%',
    height: 'auto'
  }
}

function Projects({ projects }) {
  return (
    <section id='projects' className="section">

      <div className='sectionHeader'>
        <h2>My Projects</h2>
        <h5>Some of my most recent work</h5>
      </div>

      {/* get the first item in the array and using that as my main project */}
      <div className='row main-project-row'>
        <div className={projects[0].class}>
          <h1>{projects[0].title}</h1>
          <img style={styles.projectImage} src={projects[0].imageURL} />
        </div>
      </div>

      {/* starting from the second item in the array for the rest of the projects */}
      <div className='row projects-row'>
        {projects.slice(1).map((project) => (
          <div className={project.class}>
            <h1>{project.title}</h1>
            <img style={styles.projectImage} src={project.imageURL} />
            <p>{project.description}</p>
            <div className='projectLinks'>
              <a target='_blank' href={project.repo}>Repo</a>
              <a target='_blank' href={project.site}>Site</a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Projects;
