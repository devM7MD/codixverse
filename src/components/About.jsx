import React from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

function About() {
  const [sectionRef, isIntersecting] = useIntersectionObserver()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const statVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    })
  }

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years of Experience' },
    { number: '100%', label: 'Client Satisfaction' }
  ]

  return (
    <section id="about" className="about">
      <div className="container" ref={sectionRef}>
        <motion.div 
          className="section-header"
          variants={headerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">CodixVerse Team - Experience and Innovation in the World of Programming</p>
        </motion.div>
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <motion.div 
            className="about-text"
            variants={textVariants}
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Our Vision
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              We strive to be the leaders in software and application development,
              providing innovative technical solutions that meet our clients' needs and help them achieve their goals.
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Our Mission
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              Developing high-quality software using the latest technologies,
              with a focus on ease of use and excellent performance.
            </motion.p>
          </motion.div>
          <motion.div 
            className="about-stats"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-item"
                variants={statVariants}
                custom={index}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }
                }}
              >
                <motion.div 
                  className="stat-number"
                  initial={{ scale: 0 }}
                  animate={isIntersecting ? { scale: 1 } : {}}
                  transition={{ 
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 200,
                    damping: 10
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

