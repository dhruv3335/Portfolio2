import React, { useState } from "react";
import "./style/new.css";
import profileImg from "./assets/1.jpeg";

const sections = [
  "Profile",
  "Skills",
  "Languages",
  "Hobbies",
  "Achievements",
  "About Me",
  "Projects",
  "Academic",
  "Certifications",
];

const Resume = () => {
  const [active, setActive] = useState("Profile");

  const renderSection = () => {
    switch (active) {
      case "Profile":
        return (
          <div className="profile">
            <img src={profileImg} alt="Profile" />
            <h2>Dhruv Chauhan</h2>
            <p>Email: <a href="mailto:dkchavan2003@gmail.com">dkchavan2003@gmail.com</a></p>
            <p>Phone: <a href="tel:9978200198">9978200198</a></p>
            <p>Address: "Gajanan", plot no: 3/23, nr. Sitaram Dairy, Gavaridad, Rajkot.</p>
            <a href="https://www.linkedin.com/in/dhruv-chauhan3335" className="linkedin">LinkedIn Profile</a>
          </div>
        );
      case "Skills":
        return (
          <div>
            <h3>Professional Skills</h3>
            {["HTML/CSS", "Java", "Python", "MS Word/Excel"].map((skill, i) => (
              <div className="skill" key={i}>
                <p>{skill}</p>
                <div className="progress-bar">
                  <div className={`progress ${skill.toLowerCase().replace(/[^a-z]/g, "-")}`}></div>
                </div>
              </div>
            ))}
          </div>
        );
      case "Languages":
        return (
          <div>
            <h3>Languages</h3>
            {["Hindi", "English", "Gujarati", "Marathi"].map((lang, i) => (
              <div className="skill" key={i}>
                <p>{lang}</p>
                <div className="progress-bar">
                  <div className={`progress ${lang.toLowerCase()}`}></div>
                </div>
              </div>
            ))}
          </div>
        );
      case "Hobbies":
        return (
          <div>
            <h3>Hobbies</h3>
            <ul className="hobbies-list">
              <li>GYM</li>
              <li>Solving technical problems</li>
              <li>Explore new things</li>
              <li>Travel</li>
            </ul>
          </div>
        );
      case "Achievements":
        return (
          <div>
            <h3>Achievements</h3>
            <ul className="achievements-list">
              <li>IBM course participant</li>
              <li>AMCET training</li>
            </ul>
          </div>
        );
      case "About Me":
        return (
          <div>
            <h3>About Me</h3>
            <p>My name is Dhruv Chauahan. I am an ambitious IT student at [Marwadi University], with a passion for solving complex problems and building innovative solutions. I am very good at group discussion.</p>
          </div>
        );
      case "Projects":
        return (
          <div>
            <h3>Personal Projects</h3>
            <p><strong>Truth and Dare Game</strong>: A Java-based application designed to create an engaging cross-platform experience.</p>
            <p><strong>Cricket Score prediction</strong>: This project will predict the cricketer's run according to their past performance. this project is based on Machine learning.</p>
            <p><strong>Resume</strong>: This project is based on personal resume website and it is also a dynamic site with admin panel, this project include bakend and frontend.</p>
            <p><strong>Bank account Managemnet</strong>: This is a Advanced Java Project. This project is about the bank account section management and we can saw the balance also we can deposite and withdraw amount in the account and display the current balnce also.</p>

          </div>
        );
      case "Academic":
        return (
          <div>
            <h3>Academic Details</h3>
            <p>B.Tech (Information Technology), Present<br />Marwadi University</p>
            <p>Secondary School Certificate (SSC), Dholakiya School</p>
            <ul>
              <li>Year of Completion: 2018</li>
              <li>Grades: 79%</li>
            </ul>
          </div>
        );
      case "Certifications":
        return (
          <div className="course-certifications">
            <h3>Course Certifications</h3>
            <ul>
              <li>NDG Linux course</li>
              <li>Oracle course</li>
              <li>Python course</li>
              <li>Network Essentials course</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="interactive-container">
      <div className="sidebar">
        {sections.map((sec) => (
          <button
            key={sec}
            className={`nav-btn ${active === sec ? "active" : ""}`}
            onClick={() => setActive(sec)}
          >
            {sec}
          </button>
        ))}
      </div>
      <div className="section-display">{renderSection()}</div>
    </div>
  );
};

export default Resume;
