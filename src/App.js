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
            <div className="pill status-pill">
              <span className="status-dot"></span>
              Open to Full-Stack roles
            </div>
            <h1>Creating thoughtful software with impact</h1>
            <p className="muted">
              I like working across the stack, bringing together intuitive user
              experiences and reliable backend systems.
            </p>
            <div className="pills">
              <span className="pill">React</span>
              <span className="pill">TypeScript</span>
              <span className="pill">GraphQL</span>
              <span className="pill">Ruby on Rails</span>
            </div>
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

      <footer>© {new Date().getFullYear()} Nathen Bowes</footer>
    </div>
  );
}

export default App;
