import React from "react";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Intro />
      <Projects />
    </div>
  );
}

export default App;
