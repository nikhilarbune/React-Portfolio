import React from 'react';
import P4 from "../img/p1.png"
import P1 from "../img/p1.jpg"
import P2 from "../img/p2.png"
import Arrow from '../img/arrow.png';

const Card = ({ title, imageSrc, altText, projectType, link }) => {
  return (
    <div className="card">
      <div className="title">
        <img className="project-img " src={imageSrc} alt={altText} />
      </div>
      <div className="icon"></div>
      <div className="features">
        <ul>
          <li>
            <h2>{title}</h2>
          </li>
          <li>
            {projectType} <img src={Arrow} alt="." />
          </li>
        </ul>
        <a href={link} className="btn">
          Check it out
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Weather Application',
      imageSrc: P4,
      altText: 'Weather Application',
      projectType: 'Web Development',
      link: 'https://niks-weather-application.vercel.app/',
    },
    {
      title: 'StudyNotion',
      imageSrc: P1,
      altText: 'StudyNotion',
      projectType: 'Web Development',
      link: 'https://study-notion-frontend-five-kappa.vercel.app/',
    },
    {
      title: 'Hackathon Submission',
      imageSrc: P2,
      altText: 'Hackathon Submission',
      projectType: 'Web Development',
      link: 'https://niks-hackathonsubmission.vercel.app/',
    }
  ];

  return (
    <div id="project">
      <h1 className="heading">My Projects</h1>
      <div className="p-container">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
