jsx
import React from "react";
import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume">
      <header className="animate__animated animate__fadeIn">
        <h1 className="animate__animated animate__bounce">John Doe</h1>
        <p>Web Developer</p>
      </header>
      <section className="animate__animated animate__fadeInUp">
        <h2>Skills</h2>
        <ul className="list-group">
          <li className="list-group-item">HTML</li>
          <li className="list-group-item">CSS</li>
          <li className="list-group-item">JavaScript</li>
          <li className="list-group-item">React</li>
        </ul>
      </section>
      <section className="animate__animated animate__fadeInUp">
        <h2>Experience</h2>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Web Developer</h3>
            <p className="card-text">ABC Company</p>
            <p className="card-text">June 2018 - Present</p>
            <ul>
              <li>Developed and maintained company websites</li>
              <li>Collaborated with design team to implement website layouts</li>
              <li>Optimized websites for performance and SEO</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Front-end Developer</h3>
            <p className="card-text">XYZ Agency</p>
            <p className="card-text">January 2016 - May 2018</p>
            <ul>
              <li>Worked on various client projects</li>
              <li>Implemented responsive designs using HTML and CSS</li>
              <li>Integrated third-party APIs</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="animate__animated animate__fadeInUp">
        <h2>Education</h2>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Bachelor of Science in Computer Science</h3>
            <p className="card-text">University of ABC</p>
            <p className="card-text">2012 - 2016</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;