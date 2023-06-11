import React from "react";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Sidebar />
      <Intro />
      <Projects />
    </div>
  );
}

export default App;
