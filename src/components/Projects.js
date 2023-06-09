import React from 'react';
// Here we import the Section.css file to grant access to some additional classNames
import dreamerGPT from '../assets/images/dreamerGPT.png';
import recipeHub from '../assets/images/recipeHub.png';
import techBlog from '../assets/images/techBlog.png';

// Import CSS to use pseudo elements
import '../styles/Projects.css';

// any pseudo elements need to go in regular CSS file
const styles = {
  projectRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  projectImage: {
    height: 'auto',
    width: '100%',
  },

  projectCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
    borderRadius: '10px',
    overflow: 'hidden',
    margin: '0 auto',
    boxShadow: '3px 3px 8px black',
    position: 'relative',
    padding: '0'
  },

  projectInfoOverlay: {
    position: 'absolute',
    backgroundColor: 'whitesmoke',
    color: 'black',
    bottom: 0,
    width: '100%'
  },


}

function Projects() {
  // TODO: Add a style attribute to `section`
  return (
    <section className="section">

      <div className='sectionHeader'>
        <h2>My Projects</h2>
        <h5>Some of my most recent work</h5>
      </div>

      {/* Main Project Row */}
      <div style={styles.projectRow} className='row project-row'>
        <div style={styles.projectCard} className='col col-lg-8 col-sm-12 m-1 projectCard'>
          <img style={styles.projectImage} src={dreamerGPT} alt='logo' />
          <div style={styles.projectInfoOverlay} className="projectInfoOverlay">

            <h5 className="project-overlay-text project-title">DreamerGPT</h5>
            <p className="project-overlay-text">Interpret and log dreams with ChaptGPT OpenAI</p>


            <p className="project-overlay-text">Languages: ExpressJS,
              Sequelize, JQuery, HandlebarsJS</p>

            <div className="project-links">
              <a className="project-link-item" target="_blank"
                href="https://github.com/Cjmoye30/Dream_Catcher">Repo <i
                  className="fa-solid fa-arrow-up-right-from-square"></i></a>
              <a className="project-link-item" target="_blank"
                href="https://protected-hamlet-16560.herokuapp.com/">Site <i
                  className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>

          </div>
        </div>

      </div>

      {/* Second Project Row */}
      <div style={styles.projectRow} className='row project-row'>
        
        <div style={styles.projectCard} className='col col-lg-6 col-md-12 projectCard'>
          <img style={styles.projectImage} src={recipeHub} alt='logo' />
          <div style={styles.projectInfoOverlay} className="projectInfoOverlay">

            <h5 className="project-overlay-text project-title">Recipe Hub</h5>
            <p className="project-overlay-text">Interpret and log dreams with ChaptGPT OpenAI</p>


            <p className="project-overlay-text">Languages: ExpressJS,
              Sequelize, JQuery, HandlebarsJS</p>

            <div className="project-links">
              <a className="project-link-item" target="_blank"
                href="https://github.com/Cjmoye30/Dream_Catcher">Repo <i
                  className="fa-solid fa-arrow-up-right-from-square"></i></a>
              <a className="project-link-item" target="_blank"
                href="https://protected-hamlet-16560.herokuapp.com/">Site <i
                  className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>

          </div>


        </div>
        
        <div style={styles.projectCard} className='col col-lg-6 col-md-12 projectCard'>
          <img style={styles.projectImage} src={techBlog} alt='logo' />
          <div style={styles.projectInfoOverlay} className="projectInfoOverlay">

            <h5 className="project-overlay-text project-title">Recipe Hub</h5>
            <p className="project-overlay-text">Interpret and log dreams with ChaptGPT OpenAI</p>


            <p className="project-overlay-text">Languages: ExpressJS,
              Sequelize, JQuery, HandlebarsJS</p>

            <div className="project-links">
              <a className="project-link-item" target="_blank"
                href="https://github.com/Cjmoye30/Dream_Catcher">Repo <i
                  className="fa-solid fa-arrow-up-right-from-square"></i></a>
              <a className="project-link-item" target="_blank"
                href="https://protected-hamlet-16560.herokuapp.com/">Site <i
                  className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>

          </div>


        </div>
      </div>





      {/* Third Project Row */}

    </section>
  );
}

export default Projects;
