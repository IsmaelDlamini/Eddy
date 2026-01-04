import React from 'react'
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import eddy from '../assets/eddy.jpeg';

export default function Home() {
  const year = new Date().getFullYear()

  return (
    <div className="portfolio">
      <header className="portfolio-header">
        <div className="logo"> Eddy Dominguez Junior</div>
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
              src={eddy}
              alt="Ismael Dlamini"
            />
          </div>

          <div className="hero-content">
            <div className="eyebrow">Hello — I'm</div>
            <h1 className="name"> Eddy Dominguez Junior</h1>
            <p className="tagline">
             <FaPhoneFlip /> Phone number: +27 738057060
            </p>

            <p className="description">
             <MdEmail /> Email: hotelorangecity5060@gmail.com
            </p>

            
            <p className="description">
             <IoLocationSharp /> address: Malelane, Mpumalanga, South Africa
            </p>


            <div className="actions">
              
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="portfolio-footer">
        <div className="footer-inner">
          <div>© {year} Eddy Dominguez Junior</div>
          <div className="small">Built with React</div>
        </div>
      </footer>
    </div>
  )
}
