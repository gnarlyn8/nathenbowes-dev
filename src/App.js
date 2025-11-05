import React, { useState, useEffect } from "react";
import "./App.css";
import ProjectCard from "./components/ProjectCard";
import ComingSoon from "./components/ComingSoon";
import About from "./components/About";
import projectsData from "./data/projects.json";

function App() {
  const [projects, setProjects] = useState([]);
  const maintenanceMode = process.env.REACT_APP_MAINTENANCE === "true";

  useEffect(() => {
    setProjects(projectsData.projects);
  }, []);

  if (maintenanceMode) {
    return <ComingSoon />;
  }

  return (
    <div className="App">
      <header>
        <div className="container bar">
          <div className="brand">Nathen Bowes</div>
          <p>nate@nathenbowes.dev</p>
          <nav>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div>
            <h1>Creating software that feels good to use.</h1>
          </div>
          <div className="profile-pic-container">
            <img
              src="/profile-pic.png"
              alt="Nathen Bowes"
              className="profile-pic"
            />
          </div>
        </section>

        <section id="projects" className="section container">
          <h2>Featured Projects</h2>
          <div className="grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <About />
      </main>

      <footer>© 2025 Nathen Bowes</footer>
    </div>
  );
}

export default App;
