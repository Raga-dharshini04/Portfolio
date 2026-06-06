import { useState, useEffect } from "react";
import "./navbar.css";
import { navLinks, resumeLink } from "../../Data/Portfoliodata";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <a className="navbar-brand" href="#home">
          Ragadharshini
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center gap-lg-1 me-lg-3">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.label}>
                <a className="nav-link-item" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume-btn"
            >
                Resume <span>↓</span>
            </a>
        </div>
      </div>
    </nav>
  );
}