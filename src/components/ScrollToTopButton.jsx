import React from 'react'
import { useScrollToTop } from '../hooks/useScrollToTop'

function ScrollToTopButton() {
  const { showButton, scrollToTop } = useScrollToTop()

  if (!showButton) return null

  return (
    <button 
      className="scroll-to-top" 
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '50px',
        height: '50px',
        background: 'rgba(255, 255, 255, 0.9)',
        color: 'black',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '1.2rem',
        transition: 'all 0.3s ease',
        zIndex: 1000,
        boxShadow: '0 4px 12px rgba(255, 255, 255, 0.2)'
      }}
    >
      <i className="fas fa-arrow-up" style={{ color: 'black' }}></i>
    </button>
  )
}

export default ScrollToTopButton

