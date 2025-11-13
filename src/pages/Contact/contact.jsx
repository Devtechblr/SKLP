import React from 'react'
import { Phone, Home } from 'lucide-react'
import './contact.css'
import Navbar from '../../components/Navbar.jsx'

export default function Contact({ 
  companyName = 'SKLP',
  phone = '+91 9900075805',
  address = 'Sy No. 105, Bagalur Post, Byappanahaili North Taluk, Bengaluru, Karnataka - 562149',
  email = 'nataraj@sklpconcrete.com'
}) {
  return (
    <div className="contact-page">
      <Navbar />
      <div className="pt-[120px] md:pt-0">

      {/* Map Section */}
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977203340456!2d-122.41941548468146!3d37.77492977975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Location Map"
        ></iframe>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="contact-left">
          <h1 className="desktop-title">Contact us</h1>
          
          <div className="contact-info">
            <div className="info-item">
              <Phone className="icon" />
              <div>
                <p className="label">CALL US</p>
                <p className="value">{phone}</p>
              </div>
            </div>

            <div className="info-item">
              <Home className="icon" />
              <div>
                <p className="label">VISIT US</p>
                <p className="value">{address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <h1 className="mobile-title">Contact us</h1>
          <p className="form-subtitle">Get in touch with us for any enquiries and questions</p>
          
          <form className="contact-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="" />
            </div>
            
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="" />
            </div>
            
            <div className="form-group">
              <label>Address</label>
              <textarea rows={4} placeholder=""></textarea>
            </div>
            
            <button type="submit" className="submit-btn">GET IN TOUCH</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  )
}


