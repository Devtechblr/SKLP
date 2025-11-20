import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home/home.jsx'
import Services from './pages/Services/services.jsx'
import About from './pages/About/about.jsx'
import Gallery from './pages/Gallery/gallery.jsx'
import Contact from './pages/Contact/contact.jsx'
import Terms from './pages/Terms/terms.jsx'
import Privacy from './pages/Privacy/privacy.jsx'
import Support from './pages/Support/support.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import useScrollReveal from './hooks/useScrollReveal.js'

export default function App() {
  const location = useLocation()
  useScrollReveal([location.pathname])

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </div>
  )
}


