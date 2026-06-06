import "./about.css";
import { FaGraduationCap, FaStar, FaLightbulb } from "react-icons/fa";

export default function About() {
  const stats = [
    { icon: <FaGraduationCap />, title: "Recent Graduate", desc: "B.Sc. Computer Science" },
    { icon: <FaStar />, title: "CGPA", desc: "8.00 / 10.00" },
    { icon: <FaLightbulb />, title: "Passionate Developer", desc: "Building solutions that solve real-world problems." },  
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-card">
          <div className="row g-4 align-items-start">
            <div className="col-lg-7">
              <div className="about-text">
                <p>
  I'm a Computer Science graduate and Full Stack Developer passionate
  about building modern, scalable, and user-friendly web applications.
</p>

<p>
  I've developed projects including tourism platforms and E-Learning
  systems, focusing on responsive UI, authentication, and REST APIs.
</p>

<p>
  Currently enhancing my skills in Java Full Stack Development,
  backend architecture, and modern web technologies.
</p>
                <div className="about-quote">
  <p>
    ❝ I enjoy turning ideas into practical applications and believe
    that every project is an opportunity to learn, innovate, and
    create meaningful solutions. ❞
  </p>
</div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-stats">
                {stats.map((s) => (
                  <div className="stat-item" key={s.title}>
                    <div className="stat-icon">{s.icon}</div>
                    <div className="stat-info">
                      <h6>{s.title}</h6>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}