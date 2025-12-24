import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="row w-100 align-items-center">
        <div className="col-md-7">
          <h4 className="text-highlight">Hello!</h4>
          <h1 className="display-3 fw-bold text-white">
            It's Madhav Agrawal <span style={{ color: '#64ffda' }}></span>
          </h1>
          <h3 className="mb-4">Software Engineer / Frontend Developer</h3>
          <p className="mb-3 w-75">
            Turning ideas into clean, functional web experiences. <br />
            Focused on learning, growth, and writing better code every day.
          </p>
          <p className="text-white">
            <img src="src/Images/location.png" width="25px" height="25px" alt="" /> Bengaluru, Karnataka
          </p>
          
          <div className="d-flex gap-1">
            <a 
              href="https://drive.google.com/file/d/1GK99VcRYMr8ShHrAFA0v0sd3h4O-BWWE/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="btn btn-custom">
                Resume <img src="src/Images/resize.png" width="20px" height="20px" alt="" />
              </button>
            </a>

            <Link to="/contact">
              <button className="btn btn-custom ">
                Contact Me <img src="src/Images/contact.png" width="20px" height="20px" alt="" />
              </button>
            </Link>
          </div>
        </div>
        
        <div className="col-md-5 text-center">
          <img src="src\Images\hero.png" alt="Hero" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Hero;