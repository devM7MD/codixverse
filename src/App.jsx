import React, { useState, useEffect } from 'react'
import { 
  Navbar, 
  Hero, 
  WaveDivider, 
  About, 
  Services, 
  Contact, 
  Footer,
  LoadingScreen,
  ScrollToTopButton
} from './components'
import logoUrl from './assets/images/LOGO.png'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <LoadingScreen logoUrl={logoUrl} />}
      <Navbar logoUrl={logoUrl} />
      <Hero logoUrl={logoUrl} />
      <WaveDivider />
      <About />
      <WaveDivider />
      <Services />
      <WaveDivider />
      <Contact />
      <WaveDivider />
      <Footer logoUrl={logoUrl} />
      <ScrollToTopButton />
    </>
  )
}

export default App

