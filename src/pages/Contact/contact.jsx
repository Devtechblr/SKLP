import React, { useState } from 'react'
import { Phone, Home } from 'lucide-react'
import './contact.css'
import Navbar from '../../components/Navbar.jsx'
import SEO from '../../components/SEO.jsx'

export default function Contact({ 
  companyName = 'SKLP',
  phone = '+91 9900075805',
  address = 'Sy No. 105, Bagalur Post, Byappanahaili North Taluk, Bengaluru, Karnataka - 562149',
  email = 'nataraj@sklpconcrete.com'
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    reason: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://formspree.io/f/xdkogkvo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          address: formData.address,
          reason: formData.reason,
          _replyto: formData.email,
          _subject: `Contact Form Submission from ${formData.fullName}`
        })
      })
      
      if (response.ok) {
        alert('Message sent successfully!')
        setFormData({ fullName: '', email: '', address: '', reason: '' })
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      alert('Error sending message. Please try again.')
    }
  }

  return (
    <div className="contact-page">
      <SEO 
        title="Contact SKLP - Get Quote for Concrete Products | Bengaluru"
        description="Contact SKLP for quality concrete products and construction solutions in Bengaluru. Call +91 9900075805 or visit our plant at Bagalur Post for quotes and inquiries."
        keywords="contact SKLP, concrete quote Bengaluru, ready-mix concrete inquiry, construction materials contact, SKLP phone number"
        url="https://sklpconcrete.com/contact"
      />
      <Navbar />
      <div className="pt-[120px] md:pt-0">

      {/* Map Section */}
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4234567890123!2d77.6433115!3d13.1137706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1975343a571d%3A0xd7e23c39acf41555!2sSai%20Concrete!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
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
              <a href={`tel:${phone}`} className="icon" style={{ color: '#ff8c00', textDecoration: 'none' }}>
                <Phone className="icon" />
              </a>
              <div>
                <p className="label">CALL US</p>
                <a href={`tel:${phone}`} className="value" style={{ color: '#333', textDecoration: 'none' }}>{phone}</a>
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
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required 
                placeholder="" 
              />
            </div>
            
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required 
                placeholder="" 
              />
            </div>
            
            <div className="form-group">
              <label>Address</label>
              <textarea 
                rows={4} 
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required 
                placeholder=""
              ></textarea>
            </div>
            
            <div className="form-group">
              <label>Reason</label>
              <textarea 
                rows={3} 
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                required 
                placeholder=""
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">GET IN TOUCH</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  )
}


