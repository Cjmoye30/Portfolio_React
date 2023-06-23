import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import pages
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Resume from './pages/resume'

// Import Data
import projects from './data/projects'
import bio from './data/bio.js'

import './styles/styles.css'

const styles = {
  height: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }
}

function App() {
  return (

    // I need to configure the router somehow
    <Router basename='/Portfolio_React'>
      <Header />
      <div style={styles.height}>
        <Routes>
          <Route path="*" element={<About bio={bio} />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About bio={bio} />} />
          <Route path="/projects" element={<Projects projects={projects} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

      </div>
      <Footer />
    </Router>
  );
}

export default App;
