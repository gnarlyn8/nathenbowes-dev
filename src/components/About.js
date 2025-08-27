import React from "react";

function About() {
  return (
    <section id="about" className="section container">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I’m a software developer with 4+ years of experience building
            user-focused features with React, TypeScript, and GraphQL. I have
            contributed to large-scale projects that improved global admin
            checkout, optimized Plus upgrade flows, and supported internal tools
            for product teams. I enjoy collaborating with cross-functional
            partners and take pride in writing clean, thoughtful code that
            solves real problems.
          </p>
          <p>
            Outside of work, I try to balance screen time with fresh air. I live
            on an island, where hiking, biking, and staying active are part of
            my daily rhythm. A few years ago, I spent seven months traveling
            across North America in a van, and I still look for every
            opportunity to explore new places. Whether it’s farming, being in
            nature, or discovering a new trail, I bring the same curiosity and
            persistence to life that I do to building software.
          </p>
        </div>
        <div className="hobby-images">
          <div className="hobby-grid">
            <img src="/hiking.jpg" alt="Hiking" className="hobby-image" />
            <img src="/biking.jpg" alt="Biking" className="hobby-image" />
            <img src="/farming.jpg" alt="Farming" className="hobby-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
