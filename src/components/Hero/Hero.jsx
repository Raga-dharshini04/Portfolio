import "./hero.css";
import { resumeLink } from "../../data/Portfoliodata";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";
import { projects } from "../../data/Portfoliodata";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="hero-greeting">
              Hi, I'm 👋
            </div>

            <h1 className="hero-name">Ragadharshini</h1>

            <h2 className="hero-role">
              <span>FULL STACK</span> Developer <span className="cursor">|</span>
            </h2>

            <p className="hero-desc">
              I build modern, responsive and scalable web applications using Java,
              MongoDB, Express, React and Node.js.
            </p>

            <div className="hero-btns">
              <a href="#projects" className="btn-primary">
                View Projects →
              </a>
              <a href={resumeLink} className="btn-outline">
                Download Resume ↓
              </a>
            </div>

            <div className="hero-socials">
              <p>Connect with me</p>
              <a href="https://github.com/Raga-dharshini04" className="social-icon" target="_blank" rel="noreferrer" title="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/ragadharshini040706" className="social-icon" target="_blank" rel="noreferrer" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#0077b5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:sragadharshini0@gmail.com" className="social-icon" title="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="col-lg-6 d-none d-lg-flex justify-content-center">
            <div className="hero-visual">
              {/* Floating icons */}
              <div className="floating-icon icon-react">
  <FaReact />
</div>

              <div className="floating-icon icon-node">
  <FaNodeJs />
</div>

              <div className="floating-icon icon-mongo">
  <SiMongodb />
</div>

<div className="floating-icon icon-java">
  <FaJava />
</div>

<div className="floating-icon icon-mysql">
  <SiMysql />
</div>
              {/* Code card */}
              <div className="hero-code-card">
                <div className="code-dots">
                  <div className="code-dot red"></div>
                  <div className="code-dot yellow"></div>
                  <div className="code-dot green"></div>
                </div>
                <div className="code-content">
                  <span className="code-line">
                    <span className="code-keyword">const </span>
                    <span className="code-variable">developer </span>
                    <span className="code-bracket">= &#123;</span>
                  </span>
                  <span className="code-line">
                    &nbsp;&nbsp;<span className="code-property">name</span>
                    <span className="code-bracket">: </span>
                    <span className="code-string">"Ragadharshini"</span>,
                  </span>
                  <span className="code-line">
                    &nbsp;&nbsp;<span className="code-property">role</span>
                    <span className="code-bracket">: </span>
                    <span className="code-string">"Full Stack Developer"</span>,
                  </span>
                  <span className="code-line">
                    &nbsp;&nbsp;<span className="code-property">passion</span>
                    <span className="code-bracket">: </span>
                    <span className="code-string">"Building solutions</span>
                  </span>
                  <span className="code-line">
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">that make an impact"</span>,
                  </span>
                  <span className="code-line">
                    &nbsp;&nbsp;<span className="code-property">tech</span>
                    <span className="code-bracket">: [</span>
                    <span className="code-string">"MongoDB"</span>,
                    <span className="code-string">"MySQL"</span>,
                    <span className="code-string">"Java"</span>,
                    <span className="code-string"> "Express.js"</span>,
                  </span>
                  <span className="code-line">
                    <span className="code-string">"React"</span>,
                    <span className="code-string"> "Node.js"</span>
                    <span className="code-bracket">]</span>
                  </span>
                  <span className="code-line">
                    <span className="code-bracket">&#125;;</span>
                  </span>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="dot-decoration dot-blue" style={{width:10,height:10,top:'15%',left:'25%'}}></div>
              <div className="dot-decoration dot-purple" style={{width:8,height:8,bottom:'20%',left:'15%'}}></div>
              <div className="dot-decoration dot-cyan" style={{width:12,height:12,top:'40%',right:'5%'}}></div>
              <div className="dot-decoration dot-blue" style={{width:6,height:6,bottom:'35%',right:'20%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}