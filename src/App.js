import React from "react";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import pages
import Home from './pages/home'
import About from './pages/about'

// importing data for my projects
import projects from './data/projects'
import bio from './data/bio.js'

function App() {
  return (
    // <div>
    //   <Header />
    //   <Intro />
    //   <Projects projects={projects} />
    //   <AboutMe bio={bio} />
    //   <Contact />
    //   <Footer />

    // </div>

    <Router>
      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About bio={bio} />} />

      </Routes>

      <Footer />

    </Router>

  );
}

export default App;
