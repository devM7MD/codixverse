import React from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

function Contact() {
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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container" ref={sectionRef}>
        <motion.div 
          className="section-header"
          variants={headerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">We're here to help you with your next project</p>
        </motion.div>
        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <div className="contact-info">
            <motion.div 
              className="contact-item"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                x: 10,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
            >
              <motion.div 
                className="contact-icon"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: {
                    duration: 0.6,
                    ease: "easeInOut"
                  }
                }}
              >
                <i className="fas fa-envelope"></i>
              </motion.div>
              <div className="contact-details">
                <motion.h4
                  initial={{ opacity: 0, y: 10 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  Email
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <motion.a 
                    href="mailto:contact@codixverse.xyz" 
                    style={{ color: 'white', textDecoration: 'none' }}
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    contact@codixverse.xyz
                  </motion.a>
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

