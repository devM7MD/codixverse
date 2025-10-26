import React from 'react'

function Services() {
  const services = [
    {
      icon: 'fas fa-mobile',
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications developed using Flutter for both iOS and Android'
    },
    {
      icon: 'fas fa-globe',
      title: 'Websites',
      description: 'Modern, responsive websites built with the latest technologies and best practices'
    },
    {
      icon: 'fas fa-desktop',
      title: 'Desktop Applications',
      description: 'Cross-platform desktop applications for Windows, Mac, and Linux'
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

