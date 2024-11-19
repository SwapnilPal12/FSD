// Skills.jsx
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.scss";

const skills = [
  { name: "HTML", icon: "/path/to/html-icon.svg" },
  { name: "CSS", icon: "/path/to/css-icon.svg" },
  { name: "JavaScript", icon: "/path/to/javascript-icon.svg" },
  { name: "React", icon: "/path/to/react-icon.svg" },
  { name: "Git", icon: "/path/to/git-icon.svg" },
  { name: "Figma", icon: "/path/to/figma-icon.svg" },
  { name: "blue", icon: "/path/to/react-icon.svg" },
  { name: "Green", icon: "/path/to/git-icon.svg" },
  { name: "Feiro", icon: "/path/to/figma-icon.svg" },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="skills-section">
      <h2 className="skills-heading" data-aos="fade-up">
        Skills
      </h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="skill-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="skill-icon-wrapper">
              <img 
                src={skill.icon} 
                alt={`${skill.name} icon`} 
                className="skill-icon" 
              />
            </div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;