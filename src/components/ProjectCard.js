import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <article className="card project">
      <div className="head">
        <div className="swatch" style={{ background: project.swatch }}></div>
        <div>
          <h3 style={{ margin: "0 0 2px 0" }}>{project.title}</h3>
          <div className="muted" style={{ fontSize: "14px" }}>
            {project.summary}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginTop: "8px",
        }}
      >
        {project.stack.map((tech, index) => (
          <span key={index} className="pill">
            {tech}
          </span>
        ))}
      </div>
      {project.image && (
        <div className="project-image">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px",
              marginTop: "12px",
            }}
          />
        </div>
      )}
      <div className="cta">
        <a
          className="btn primary"
          href={project.links.demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
        <a
          className="btn"
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
