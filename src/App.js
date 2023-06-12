import React from "react";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// importing data for my projects
import projects from './data/projects'
import bio from './data/bio.js'


function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Projects projects={projects} />
      <AboutMe bio={bio} />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
