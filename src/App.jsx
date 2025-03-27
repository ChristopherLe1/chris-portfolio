import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="about-section">
          <div className="profile">
            <div className="profile-pic">
              <img src="src/assets/profile-pic.JPG" alt="Profile picture" />
            </div>
            <div className="name">Chris Le</div>
            <div className="job-title">Frontend Developer</div>
          </div>
          <div className="info">Information</div>
          <div className="skills">Tech Stack</div>
          <div className="education">Education</div>
        </div>
        <div className="projects-section">
          <div className="projects">Projects</div>
          <div className="experience">Experience History</div>
        </div>
      </div>
    </>
  );
}

export default App;
