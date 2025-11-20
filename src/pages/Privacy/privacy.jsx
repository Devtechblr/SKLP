import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import './privacy.css'

export default function Privacy() {
  return (
    <div className="privacy-page">
      <Navbar />
      <div className="pt-24">
        <div className="container">
          <h1 className="page-title">Privacy Policy</h1>
          
          <div className="content-section">
            <h2>1. Introduction</h2>
            <p>
              SKLP Concrete Products ("we," "our," or "us") respects your privacy and is committed to protecting your personal 
              information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              visit our website or use our services.
            </p>
          </div>

          <div className="content-section">
            <h2>2. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li><strong>Contact Information:</strong> Name, phone number, email address, and postal address</li>
              <li><strong>Business Information:</strong> Company name, project details, and delivery requirements</li>
              <li><strong>Order Information:</strong> Concrete specifications, quantities, delivery schedules, and payment details</li>
              <li><strong>Communication Records:</strong> Correspondence, inquiries, and feedback</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>Processing and fulfilling your orders for Ready Mix Concrete</li>
              <li>Communicating with you about your orders, deliveries, and service inquiries</li>
              <li>Providing customer support and technical assistance</li>
              <li>Maintaining quality records and compliance with industry standards</li>
              <li>Sending important updates about our services (with your consent)</li>
              <li>Improving our services and customer experience</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>4. Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in 
              the following circumstances:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> With trusted partners who assist in operations (logistics, payment processing) 
              under strict confidentiality agreements</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulations</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of assets (with prior notice)</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
              is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="content-section">
            <h2>6. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
              comply with legal obligations, resolve disputes, and enforce our agreements. Order and transaction records are typically 
              retained for a minimum of 7 years as per regulatory requirements.
            </p>
          </div>

          <div className="content-section">
            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access and review your personal information</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal information (subject to legal retention requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing (where applicable)</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section.
            </p>
          </div>

          <div className="content-section">
            <h2>8. Cookies and Tracking Technologies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze website 
              traffic, and understand user preferences. You can control cookie preferences through your browser settings.
            </p>
          </div>

          <div className="content-section">
            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content 
              of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </div>

          <div className="content-section">
            <h2>10. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information 
              from children. If you believe we have inadvertently collected such information, please contact us immediately.
            </p>
          </div>

          <div className="content-section">
            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
              We will notify you of any material changes by posting the updated policy on our website with a revised "Last Updated" 
              date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </div>

          <div className="content-section">
            <h2>12. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <p>
              <strong>SKLP Concrete Products</strong><br />
              <strong>Phone:</strong> +91 9900078808<br />
              <strong>Email:</strong> <a href="mailto:nataraj@sklpconcrete.com" className="text-orange-500 hover:underline">nataraj@sklpconcrete.com</a><br />
              <strong>Address:</strong> Sy No. 100, Sompura, Kasaba and Taluk Malur, Kolar, Karnataka - 563130
            </p>
          </div>

          <div className="content-section">
            <p className="last-updated">
              <strong>Last Updated:</strong> January 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


