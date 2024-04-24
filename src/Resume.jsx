import React from "react";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";

const Resume = () => {
    const resume = {
        name: "Rohini Patil",
        role: "Software Engineer",
        summary:
          "I am a full-stack software engineer with expertise in building web applications using React, Node.js, and MongoDB.",
        skills: ["React", "Node.js", "MongoDB", "JavaScript", "HTML", "CSS"],
        education: [
          {
            institution: "University of Pune",
            degree: "Bachelor of Science in Computer Science",
            startYear: 2012,
            endYear: 2016,
          },
        ],
        experience: [
          {
            company: "ABC Company",
            position: "Software Engineer",
            startYear: 2018,
            endYear: 2024,
            responsibilities: [
              "Developed and maintained web applications using React, Node.js, and MongoDB.",
              "Collaborated with cross-functional teams to define, design, and ship new features.",
              "Worked on bug fixing and improving application performance.",
            ],
          },
        ],
      };

  return (
    <div className="resume">
      <h1>{resume.name}</h1>
      <h2>{resume.role}</h2>
      <p>{resume.summary}</p>
      <Skills skills={resume.skills} />
      <Education education={resume.education} />
      <Experience experience={resume.experience} />
    </div>
  );
};

export default Resume;