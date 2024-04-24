import React from "react";

const Education = ({ education }) => {
  return (
    <div className="education">
      <h3>Education</h3>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            {edu.institution}, {edu.degree}
            <br />
            {edu.startYear} - {edu.endYear}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;