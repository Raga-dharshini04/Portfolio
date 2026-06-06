import "./skills.css";
import { skills } from "../../data/portfolioData";

import {
  FaLaptopCode,
  FaServer,
  FaTools
} from "react-icons/fa";

import { SiMongodb } from "react-icons/si";

const categories = [
  {
    key: "frontend",
    label: "Frontend",
    icon: <FaLaptopCode />
  },
  {
    key: "backend",
    label: "Backend",
    icon: <FaServer />
  },
  {
    key: "database",
    label: "Database",
    icon: <SiMongodb />
  },
  {
    key: "tools",
    label: "Tools & Others",
    icon: <FaTools />
  }
];

export default function Skills() {
  console.log(skills.frontend);
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          {categories.map((cat) => (
            <div className="skill-category" key={cat.key}>
              <div className="skill-cat-header">
                <span className="skill-cat-icon">
                  {cat.icon}
                </span>

                <h5>{cat.label}</h5>
              </div>

              <div className="skill-items">
                {skills[cat.key].map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      className="skill-badge"
                      key={skill.name}
                    >
                      <Icon
  className="skill-badge-icon"
  style={{ color: skill.color }}
/>
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}