import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward, FaFolderOpen, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>12+ Worldwide</small>
            </article>

            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>17+ Completed</small>
            </article>
          </div>
          <p>
            Hi there, I'm Alex. I'm a member of the TWOCATS Design Studio. I design and build websites, also UX/UI and such content as logos, brand materials, and others corporate. I have a diverse set of skills, ranging from design to HTML + CSS + JavaScript and React JS, marketing and SEO. Together we'll make your project real and awesome.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
