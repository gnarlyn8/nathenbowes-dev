import React, { useState, useEffect } from "react";
import "./App.css";
import ProjectCard from "./components/ProjectCard";
import ComingSoon from "./components/ComingSoon";
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
          <nav>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a className="btn" href="#resume">
              Resume
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div>
            <div className="pill status-pill">
              <span className="status-dot"></span>
              Open to Front-End roles
            </div>
            <h1>Building clean, reliable web & mobile experiences</h1>
            <p className="muted">
              React • TypeScript • GraphQL • Rails • Node. I like data-heavy
              UIs, fast feedback loops, and thoughtful UX.
            </p>
            <div style={{ marginTop: "14px", display: "flex", gap: "10px" }}>
              <a className="btn primary" href="#projects">
                See Projects
              </a>
              <a className="btn" href="#contact">
                Get in Touch
              </a>
            </div>
            <div className="pills">
              <span className="pill">React</span>
              <span className="pill">TypeScript</span>
              <span className="pill">Rails</span>
              <span className="pill">GraphQL</span>
              <span className="pill">Node</span>
              <span className="pill">React Native</span>
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
      </main>

      <footer>© {new Date().getFullYear()} Nathen Bowes</footer>
    </div>
  );
}

export default App;
