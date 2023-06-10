import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Projects />
    </div>
  );
}

export default App;
