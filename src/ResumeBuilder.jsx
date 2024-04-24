import React, { useContext } from "react";
import "./ResumeBuilder.css";
import Button from "./Button";
import { ThemeContext } from "./ThemeContext";

const ResumeBuilder = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`ResumeBuilder-div ${isDarkMode ? "dark" : ""}`}>
      <div>I AM THE ResumeBuilder </div>
      <Button onClick={toggleTheme} text={`Switch to ${isDarkMode ? "Light" : "Dark"} Mode`} />
    </div>
  );
};

export default ResumeBuilder;