import React from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

function Services() {
  const [sectionRef, isIntersecting] = useIntersectionObserver()
  
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.8,
      rotateY: -15,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        mass: 0.8,
        duration: 0.8
      }
    }
  }

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
      opacity: 0
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.3
      }
    },
    hover: {
      scale: 1.3,
      rotate: [0, -15, 15, -15, 0],
      y: -5,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  }

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }


  return (
    <section id="services" className="services">
      <div className="container" ref={sectionRef}>
        <motion.div 
          className={`section-header ${isIntersecting ? 'fade-in' : ''}`}
          initial={{ opacity: 0, y: -20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">We provide a comprehensive range of development services</p>
        </motion.div>
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card"
              variants={cardVariants}
              whileHover={{
                y: -20,
                scale: 1.05,
                rotateY: 5,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                  mass: 0.5
                }
              }}
              whileTap={{
                scale: 0.98,
                transition: {
                  duration: 0.2
                }
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              <motion.div 
                className="service-icon"
                variants={iconVariants}
                initial="hidden"
                animate={isIntersecting ? "visible" : "hidden"}
                whileHover="hover"
              >
                <i className={service.icon}></i>
              </motion.div>
              <motion.h3
                variants={textVariants}
                initial="hidden"
                animate={isIntersecting ? "visible" : "hidden"}
                transition={{ delay: index * 0.15 + 0.5 }}
              >
                {service.title}
              </motion.h3>
              <motion.p
                variants={textVariants}
                initial="hidden"
                animate={isIntersecting ? "visible" : "hidden"}
                transition={{ delay: index * 0.15 + 0.6 }}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services

