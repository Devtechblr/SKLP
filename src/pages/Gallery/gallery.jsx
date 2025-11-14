import React from 'react'
import './gallery.css'
import Navbar from '../../components/Navbar.jsx'
import SEO from '../../components/SEO.jsx'

export default function Gallery({ companyName = 'SKLP' }) {
  return (
    <div className="gallery-page">
      <SEO 
        title="SKLP Gallery - Construction Projects & Facilities | Bengaluru"
        description="View SKLP's gallery showcasing our concrete production facilities, construction projects, and industrial equipment. See our state-of-the-art plant and successful project deliveries."
        keywords="SKLP gallery, concrete plant photos, construction projects Bengaluru, industrial facilities, concrete production, project showcase"
        url="https://sklpconcrete.com/gallery"
      />
      <Navbar />
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url('/assests/cement.png')` }}>
        <div className="hero-overlay">
          <h1>GALLERY</h1>
        </div>
      </section>

      {/* Photo Collage */}
      <section className="photo-collage">
        <div className="collage-container">
          <div className="collage-grid">
            <div className="frame frame-1">
              <img src="/assests/1.jpg" alt="Construction site 1" />
            </div>
            <div className="frame frame-2">
              <img src="/assests/2.jpg" alt="Industrial equipment 2" />
            </div>
            <div className="frame frame-3">
              <img src="/assests/3.jpg" alt="Construction work 3" />
            </div>
            <div className="frame frame-4">
              <img src="/assests/4.jpg" alt="Industrial facility 4" />
            </div>
            <div className="frame frame-5">
              <img src="/assests/5.jpg" alt="Construction machinery 5" />
            </div>
            <div className="frame frame-6">
              <img src="/assests/6.jpg" alt="Industrial process 6" />
            </div>
            <div className="frame frame-7">
              <img src="/assests/7.jpg" alt="Wide industrial view 7" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


