import React from 'react'

function LoadingScreen({ logoUrl }) {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <img src={logoUrl} alt="CodixVerse Logo" className="loading-logo" />
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  )
}

export default LoadingScreen

