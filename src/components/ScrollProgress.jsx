import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const progress = (scrolled / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress() // Initial call

    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <motion.div 
      className="scroll-progress-bar"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div 
        className="scroll-progress-fill"
        style={{ width: `${scrollProgress}%` }}
        transition={{
          width: {
            type: "spring",
            stiffness: 100,
            damping: 30,
            mass: 0.5
          }
        }}
      />
    </motion.div>
  )
}

export default ScrollProgress
