import React from 'react';
// Here we import the Section.css file to grant access to some additional classNames

// Import CSS to use pseudo elements
import '../styles/Projects.css';

function Projects({ projects }) {
  // TODO: Add a style attribute to `section`
  return (
    <section id='projects' className="section">

      <div className='sectionHeader'>
        <h2>My Projects</h2>
        <h5>Some of my most recent work</h5>
      </div>

      {projects.map((project) => (
        <div className={project.main}>
          <h1>{project.title}</h1>
          <img src={project.imageURL} alt={project.altText} />
          <p>{project.description}</p>
          <div className='projectLinks'>
            <a target='_blank' href={project.repo}>Repo</a>
            <a target='_blank' href={project.site}>Site</a>
          </div>
        </div>
      ))}
      
    </section>
  );
}

export default Projects;
