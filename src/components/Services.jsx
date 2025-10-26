import React from 'react'

function Services() {
  const services = [
    {
      icon: 'fab fa-discord',
      title: 'Discord Bots',
      description: 'Custom Discord bots with advanced features, moderation tools, and engaging interactions'
    },
    {
      icon: 'fas fa-globe',
      title: 'Websites',
      description: 'Modern, responsive websites built with the latest technologies and best practices'
    },
    {
      icon: 'fas fa-desktop',
      title: 'Electron Programs',
      description: 'Cross-platform desktop applications using Electron for Windows, Mac, and Linux'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">We provide a comprehensive range of development services</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

