import React, { useEffect } from 'react'
import './gallery.css'
import Navbar from '../../components/Navbar.jsx'
import SEO from '../../components/SEO.jsx'

export default function Gallery({ companyName = 'SKLP' }) {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
      <section className="hero" style={{ backgroundImage: `url('/assests/cement.png')` }} data-reveal="up">
        <div className="hero-overlay" data-reveal="down">
          <h1>GALLERY</h1>
        </div>
      </section>

      {/* Photo Collage */}
      <section className="photo-collage scroll-animate">
        <div className="collage-container">
          <div className="collage-grid">
            <div className="frame frame-1 scroll-animate">
              <img src="/assests/1.jpg" alt="Construction site 1" />
            </div>
            <div className="frame frame-2 scroll-animate">
              <img src="/assests/2.jpg" alt="Industrial equipment 2" />
            </div>
            <div className="frame frame-3 scroll-animate">
              <img src="/assests/3.jpg" alt="Construction work 3" />
            </div>
            <div className="frame frame-4 scroll-animate">
              <img src="/assests/4.jpg" alt="Industrial facility 4" />
            </div>
            <div className="frame frame-5 scroll-animate">
              <img src="/assests/5.jpg" alt="Construction machinery 5" />
            </div>
            <div className="frame frame-6 scroll-animate">
              <img src="/assests/6.jpg" alt="Industrial process 6" />
            </div>
            <div className="frame frame-7 scroll-animate">
              <img src="/assests/7.jpg" alt="Wide industrial view 7" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


