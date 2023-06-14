import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import pages
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Resume from './pages/resume'

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
        <Route path="/projects" element={<Projects projects={projects} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />

      </Routes>

      <Footer />

    </Router>

  );
}

export default App;
