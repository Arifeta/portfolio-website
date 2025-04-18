import React from "react";
import "./About.css";
import ME from "../../assets/me-IMG-2-preview.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { IoFolderSharp } from "react-icons/io5";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ years working</small>
            </article>

            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>2+ worldwide</small>
            </article> */}

            <article className="about__card">
              <IoFolderSharp className="about__icon" />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>

          <p>
          Fullstack developer with experience in creating dynamic web applications, RESTful APIs, and database management. Passionate about backend development, problem-solving, and creating scalable solutions. Strong communicator, team player, and adaptable to new technologies.
          </p>
          <a href="#contact" className="btn btn-primary ">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
