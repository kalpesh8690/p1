
import React from "react";
import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Resume.css";
import resumeData from "../resume_data.json";

function Resume() {
  const { basics, sections } = resumeData;

  return (
    <div className="resume">
      <header className="animate__animated animate__fadeIn">
        <h1 className="animate__animated animate__bounce">{basics.name}</h1>
        <p>{basics.headline}</p>
      </header>
      <section className="animate__animated animate__fadeInUp">
        <h2>Skills</h2>
        <ul className="list-group">
          {sections.skills.items.map((item) => (
            <li className="list-group-item" key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      </section>
      <section className="animate__animated animate__fadeInUp">
        <h2>Experience</h2>
        {sections.work.items.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-body">
              <h3 className="card-title">{item.position}</h3>
              <p className="card-text">{item.company}</p>
              <p className="card-text">
                {item.startDate} - {item.endDate}
              </p>
              <ul>
                {item.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
      <section className="animate__animated animate__fadeInUp">
        <h2>Education</h2>
        {sections.education.items.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-body">
              <h3 className="card-title">{item.degree}</h3>
              <p className="card-text">{item.institution}</p>
              <p className="card-text">
                {item.startDate} - {item.endDate}
              </p>
            </div>
          </div>
        ))}
      </section>
      <section className="animate__animated animate__fadeInUp">
        <h2>Projects</h2>
        {sections.projects.items.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-body">
              <h3 className="card-title">{item.name}</h3>
              <p className="card-text">{item.summary}</p>
              <p className="card-text">
                {item.date.start} - {item.date.end}
              </p>
              <p className="card-text">{item.description}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="animate__animated animate__fadeInUp">
        <h2>Skills</h2>
        <ul className="list-group">
          {sections.skills.items.map((item) => (
            <li className="list-group-item" key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      </section>
      <section className="animate__animated animate__fadeInUp">
        <h2>Interests</h2>
        {sections.interests.items.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-body">
              <p className="card-text">{item.name}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="animate__animated animate__fadeInUp">
        <h2>Languages</h2>
        {sections.languages.items.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-body">
              <h3 className="card-title">{item.name}</h3>
              <p className="card-text">Level: {item.level}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="animate__animated animate__fadeInUp">
        <h2>Certifications</h2>
        {sections.certifications.items.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-body">
              <h3 className="card-title">{item.name}</h3>
              <p className="card-text">Issuer: {item.issuer}</p>
              <p className="card-text">Date: {item.date}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Resume;