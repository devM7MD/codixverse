import React from 'react'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">CodixVerse Team - Experience and Innovation in the World of Programming</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Our Vision</h3>
            <p>
              We strive to be the leaders in software and application development,
              providing innovative technical solutions that meet our clients' needs and help them achieve their goals.
            </p>
            <h3>Our Mission</h3>
            <p>
              Developing high-quality software using the latest technologies,
              with a focus on ease of use and excellent performance.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

