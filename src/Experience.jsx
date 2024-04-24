import React from "react";

const Experience = ({ experience }) => {
  return (
    <div className="experience">
      <h3>Experience</h3>
      <ul>
        {experience.map((exp, index) => (
          <li key={index}>
            {exp.company}, {exp.position}
            <br />
            {exp.startYear} - {exp.endYear}
            <ul>
              {exp.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience