import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import './terms.css'

export default function Terms() {
  return (
    <div className="terms-page">
      <Navbar />
      <div className="pt-24">
        <div className="container">
          <h1 className="page-title">Terms & Conditions</h1>
          
          <div className="content-section">
            <h2>1. Order Acceptance and Confirmation</h2>
            <p>
              All orders for Ready Mix Concrete (RMC) are subject to availability and confirmation by SKLP Concrete Products. 
              We reserve the right to accept or decline any order at our discretion. Order confirmation will be provided via 
              phone, email, or written communication.
            </p>
          </div>

          <div className="content-section">
            <h2>2. Delivery Terms</h2>
            <p>
              Delivery schedules are estimates and may vary based on site conditions, weather, traffic, and other factors beyond 
              our control. SKLP will make reasonable efforts to meet agreed delivery times but shall not be liable for delays 
              caused by circumstances beyond our reasonable control. Customers must ensure proper site access and readiness for 
              concrete delivery.
            </p>
          </div>

          <div className="content-section">
            <h2>3. Payment Terms</h2>
            <p>
              Payment terms must be agreed upon before delivery. Standard payment terms are as follows:
            </p>
            <ul>
              <li>Advance payment may be required for new customers or large orders</li>
              <li>Payment is due as per the agreed terms (typically within 7-15 days of delivery)</li>
              <li>Late payments may incur interest charges as per agreed terms</li>
              <li>All prices are subject to change without prior notice unless confirmed in writing</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>4. Quality Standards</h2>
            <p>
              All concrete mixes conform to IS 10262 (Concrete Mix Proportioning Guidelines) and IS 456 (Plain and Reinforced 
              Concrete Code of Practice) standards. Quality test results (slump, compressive strength) are available upon request. 
              SKLP maintains ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications for quality, environmental, and 
              safety management.
            </p>
          </div>

          <div className="content-section">
            <h2>5. Customer Responsibilities</h2>
            <p>
              Customers are responsible for:
            </p>
            <ul>
              <li>Providing accurate delivery addresses and site access</li>
              <li>Ensuring proper site preparation and readiness</li>
              <li>Accepting delivery within the agreed time window</li>
              <li>Proper handling and placement of concrete after delivery</li>
              <li>Compliance with all applicable building codes and regulations</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>6. Cancellation and Refunds</h2>
            <p>
              Cancellations must be communicated at least 24 hours before scheduled delivery. Cancellations made less than 24 
              hours before delivery may incur charges. Refunds, if applicable, will be processed as per the agreed terms and 
              conditions.
            </p>
          </div>

          <div className="content-section">
            <h2>7. Limitation of Liability</h2>
            <p>
              SKLP's liability is limited to the value of the concrete supplied. We are not responsible for any indirect, 
              consequential, or incidental damages arising from the use of our products. Customers must ensure proper concrete 
              placement, curing, and construction practices as per industry standards.
            </p>
          </div>

          <div className="content-section">
            <h2>8. Force Majeure</h2>
            <p>
              SKLP shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, 
              including but not limited to natural disasters, government actions, labor disputes, or material shortages.
            </p>
          </div>

          <div className="content-section">
            <h2>9. Governing Law</h2>
            <p>
              These terms and conditions are governed by the laws of India and the state of Karnataka. Any disputes shall be 
              subject to the exclusive jurisdiction of courts in Bengaluru, Karnataka.
            </p>
          </div>

          <div className="content-section">
            <h2>10. Contact Information</h2>
            <p>
              For questions regarding these terms and conditions, please contact us at:
            </p>
            <p>
              <strong>Phone:</strong> +91 9900078808<br />
              <strong>Email:</strong> <a href="mailto:nataraj@sklpconcrete.com" className="text-orange-500 hover:underline">nataraj@sklpconcrete.com</a><br />
              <strong>Address:</strong> Sy No. 100, Sompura, Kasaba and Taluk Malur, Kolar, Karnataka - 563130
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


