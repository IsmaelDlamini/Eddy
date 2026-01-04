import React from 'react'

export default function Home() {
  const year = new Date().getFullYear()

  return (
    <div className="portfolio">
      <header className="portfolio-header">
        <div className="logo">Ismael Dlamini</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="about">
        <div className="hero-inner">
          <div className="hero-image-wrap">
            <img
              className="profile-image"
              src="https://images.pexels.com/photos/1405963/pexels-photo-1405963.jpeg"
              alt="Ismael Dlamini"
            />
          </div>

          <div className="hero-content">
            <div className="eyebrow">Hello — I'm</div>
            <h1 className="name">Ismael Dlamini</h1>
            <p className="tagline">
              A modern web developer focused on beautiful, accessible user
              interfaces and fast, maintainable code.
            </p>

            <p className="description">
              I design and build responsive web applications using React,
              sensible patterns, and a keen eye for detail. This portfolio is
              a minimal single-page example — contact me to collaborate on
              interesting projects.
            </p>

            <div className="actions">
              <a className="btn primary" href="#contact">
                Contact
              </a>
              <a className="btn ghost" href="#about">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="portfolio-footer">
        <div className="footer-inner">
          <div>© {year} Ismael Dlamini</div>
          <div className="small">Built with React</div>
        </div>
      </footer>
    </div>
  )
}
