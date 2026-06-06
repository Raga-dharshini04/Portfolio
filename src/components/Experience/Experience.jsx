import "./experience.css";
import { experience, certifications } from "../../data/Portfoliodata";
import {
  FaBriefcase,
  FaAward,
  FaCheckCircle
} from "react-icons/fa";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="exp-card">
              <div className="d-flex align-items-center gap-2 mb-3">
                <FaBriefcase
  style={{
    fontSize: "1.3rem",
    color: "#6366f1"
  }}
/>
                <h3 style={{fontSize:'1.3rem', fontWeight:700, margin:0}}>Internship</h3>
              </div>
              {experience.map((exp) => (
                <div key={exp.role}>
                  <div className="exp-header">
                    <div className="exp-title">
                      <h5>{exp.role}</h5>
                      <p>{exp.company}</p>
                    </div>
                    <span className="exp-year">{exp.year}</span>
                  </div>
                  <ul className="exp-points">
                    {exp.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6" id="certifications">
            <CertificationsInline />
          </div>
        </div>
      </div>
    </section>
  );
}

function CertificationsInline() {
  return (
    <div className="exp-card h-100">
      <div className="d-flex align-items-center gap-2 mb-3">
        <FaAward
  style={{
    fontSize: "1.3rem",
    color: "#f59e0b"
  }}
/>
        <h3 style={{fontSize:'1.3rem', fontWeight:700, margin:0}}>Certifications</h3>
      </div>
      <ul style={{listStyle:'none', padding:0, margin:0}}>
        {certifications.map((cert, i) => (
          <li key={i} style={{display:'flex', alignItems:'center', gap:'0.8rem', padding:'0.8rem 0', borderBottom: i < certifications.length-1 ? '1px solid var(--border)' : 'none'}}>
            <FaCheckCircle
  style={{
    color: "#10b981",
    fontSize: "0.95rem",
    flexShrink: 0
  }}
/>
            <span style={{fontSize:'0.9rem', color:'var(--text-dark)', fontWeight:500}}>{cert}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}