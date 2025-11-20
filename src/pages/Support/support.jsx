import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import { Phone, Mail, Clock } from 'lucide-react'
import './support.css'

export default function Support() {
  return (
    <div className="support-page">
      <Navbar />
      <div className="pt-24">
        <div className="container">
          <h1 className="page-title">Support</h1>
          
          <div className="content-section">
            <h2>24/7 Customer Support</h2>
            <p>
              At SKLP Concrete Products, we are committed to providing exceptional customer support around the clock. 
              Our dedicated support team is available 24/7 to assist you with any inquiries, technical questions, or 
              urgent requirements related to Ready Mix Concrete delivery and services.
            </p>
          </div>

          <div className="content-section">
            <h2>Contact Information</h2>
            <div className="contact-cards">
              <div className="contact-card">
                <Phone size={32} className="icon" />
                <h3>Phone Support</h3>
                <p><strong>+91 9900078808</strong></p>
                <p>Available 24/7 for urgent orders and inquiries</p>
              </div>
              <div className="contact-card">
                <Mail size={32} className="icon" />
                <h3>Email Contact</h3>
                <p>
                  <a href="mailto:nataraj@sklpconcrete.com" className="text-orange-500 hover:underline font-semibold">
                    nataraj@sklpconcrete.com
                  </a>
                </p>
                <p>For detailed inquiries and documentation</p>
              </div>
              <div className="contact-card">
                <Clock size={32} className="icon" />
                <h3>Business Hours</h3>
                <p><strong>24/7 Operations</strong></p>
                <p>Our plant operates round the clock for your convenience</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Technical Support Services</h2>
            <p>Our technical support team provides assistance with:</p>
            <ul>
              <li><strong>Mix Design Consultation:</strong> Expert guidance on selecting the right concrete grade (M7.5 to M60) 
              for your project requirements</li>
              <li><strong>Quality Assurance:</strong> Access to test results, quality certificates, and compliance documentation 
              (IS 10262, IS 456 standards)</li>
              <li><strong>On-Site Technical Guidance:</strong> Technical support during concrete placement and quality checks</li>
              <li><strong>Delivery Coordination:</strong> Real-time tracking and coordination for timely concrete delivery</li>
              <li><strong>Problem Resolution:</strong> Quick response to any issues or concerns regarding concrete quality or delivery</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>Order Assistance</h2>
            <p>Our support team can help you with:</p>
            <ul>
              <li>Placing new orders for Ready Mix Concrete</li>
              <li>Modifying existing orders (quantities, grades, delivery schedules)</li>
              <li>Order status inquiries and delivery updates</li>
              <li>Payment and billing questions</li>
              <li>Special requirements and custom mix designs</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>Quality Inquiries</h2>
            <p>
              For quality-related inquiries, our team can provide:
            </p>
            <ul>
              <li>Compressive strength test results (7-day and 28-day cube tests)</li>
              <li>Slump test reports and quality certificates</li>
              <li>Material source information (Ultratech, JSW, SIKA, Fosroc)</li>
              <li>ISO certification documentation (9001:2015, 14001:2015, 45001:2018)</li>
              <li>Compliance with IS standards and specifications</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>Urgent Requirements</h2>
            <p>
              For urgent or emergency concrete requirements:
            </p>
            <ul>
              <li>Call our 24/7 hotline: <strong>+91 9900078808</strong></li>
              <li>Our plant operates 24 hours a day, 7 days a week</li>
              <li>Short dispatch guarantee for standard mixes</li>
              <li>Rapid response team for critical project timelines</li>
              <li>Night-time and weekend delivery available</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>Plant Location & Visit</h2>
            <p>
              You are welcome to visit our plant for technical discussions or quality inspections:
            </p>
            <p>
              <strong>SKLP Concrete Products</strong><br />
              Sy No. 100, Sompura,<br />
              Kasaba and Taluk Malur,<br />
              Kolar, Karnataka - 563130
            </p>
            <p>
              <strong>Plant Capacity:</strong> 75 m³/hour<br />
              <strong>Area:</strong> 2 Acres<br />
              <strong>Plant Type:</strong> Fully automated Commat Batching Plant
            </p>
          </div>

          <div className="content-section">
            <h2>Frequently Asked Questions (FAQ)</h2>
            <div className="faq-item">
              <h3>What concrete grades do you offer?</h3>
              <p>We supply Ready Mix Concrete in grades ranging from M7.5 to M60, suitable for various construction applications.</p>
            </div>
            <div className="faq-item">
              <h3>What are your delivery terms?</h3>
              <p>We provide on-site delivery across Karnataka with GPS-monitored trucks. Delivery schedules are coordinated based on your project requirements.</p>
            </div>
            <div className="faq-item">
              <h3>Do you provide quality certificates?</h3>
              <p>Yes, we provide quality test results, ISO certifications, and compliance documentation for all our concrete mixes.</p>
            </div>
            <div className="faq-item">
              <h3>Can you handle urgent orders?</h3>
              <p>Yes, our 24/7 operations and quick service guarantee ensure rapid response to urgent requirements.</p>
            </div>
          </div>

          <div className="content-section">
            <h2>Feedback & Complaints</h2>
            <p>
              We value your feedback and are committed to continuous improvement. If you have any concerns, suggestions, or 
              complaints, please contact us immediately. We take all feedback seriously and will work to resolve any issues 
              promptly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


