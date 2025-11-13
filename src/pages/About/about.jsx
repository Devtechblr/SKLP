import React from 'react';
import Navbar from '../../components/Navbar.jsx';
// Use files from the public folder via absolute paths

const About = (props) => {
  const { companyName = "SKLP" } = props;

  return (
    <div className="landing-page">
      <Navbar />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{companyName} is a fast-growing construction solutions company based in Bengaluru, Karnataka.</h1>
            <p>Founded in May 2020 with 301 dedicated members, a 4-acre state-of-the-art plant, and a fleet of vehicles on SKLP has become a quality-driven, top-tier infrastructure solutions across Karnataka.</p>
            <button className="cta-button">REQUEST QUOTE</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/assests/aboutus.png" alt="Construction worker" />
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="vision-mission-section">
        <div className="vision-box">
          <h2>OUR VISION</h2>
          <p>To be the leading and most trusted partner in infrastructure development across Karnataka — delivering excellence in complex projects with speed and quality.</p>
        </div>
        <div className="mission-box">
          <h2>OUR MISSION</h2>
          <p>To provide reliable, high-quality construction services using modern technology, robust infrastructure, and expert teams — ensuring on-time delivery and complete customer satisfaction.</p>
        </div>
      </section>

      {/* Company Description */}
      <section className="description-section">
        <p>Founded in May 2024, SKLP Concrete Products is one of Karnataka's fastest-growing construction material companies, built on a foundation of quality, reliability, and rapid execution. Headquartered in Bengaluru, SKLP operates with a vision to be the most trusted name in infrastructure solutions across the state.</p>
        <p>Within less than a year, SKLP has achieved a remarkable growth trajectory — completing 5,000+ projects, serving over 2,500 satisfied customers, and earning the trust of high-profile clients such as the Indian Air Force, BBMP, KIADB, and Railway Projects.</p>
        <p>Our operations are supported by a 4-acre state-of-the-art batching plant with a production capacity of 75 m³ per hour, powered by German machinery, and a dedicated logistics fleet of 94 vehicles. With a team workforce of 30+ skilled professionals, SKLP ensures precision, speed, and consistency in every project we undertake.</p>
      </section>

      {/* Certifications */}
      <section className="certifications-section">
        <h3>Our Certification</h3>
        <div className="cert-grid">
          <div className="cert-item">
            <div className="cert-badge">
              <div className="iso-circle">ISO</div>
            </div>
            <div className="cert-text">
              <h4>9001</h4>
              <p>Quality Management System</p>
              <span>Certificate No: 12345</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="value-item">
          <div className="value-icon">
            <img src="/assests/handshake.jpg" alt="Reliability Icon" />
          </div>
          <h4>RELIABILITY</h4>
        </div>
        <div className="value-item">
          <div className="value-icon">
            <img src="/assests/quality.jpg" alt="Quality Assurance Icon" />
          </div>
          <h4>QUALITY ASSURANCE</h4>
        </div>
        <div className="value-item">
          <div className="value-icon">
            <img src="/assests/partnership.jpg" alt="Partnership Icon" />
          </div>
          <h4>PARTNERSHIP</h4>
        </div>
        <div className="value-item">
          <div className="value-icon">
            <img src="/assests/scalablity.png" alt="Scalability Icon" />
          </div>
          <h4>SCALABILITY</h4>
        </div>
      </section>

      {/* CTA Button */}
      <section className="cta-section">
        <button className="cta-button">REQUEST QUOTE</button>
      </section>

      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          .landing-page {
            font-family: 'Inter', 'Poppins', 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            color: #333;
          }
          .hero-section {
            background: #fff;
            padding: 0;
            min-height: 80vh;
            position: relative;
            display: flex;
            align-items: stretch;
            margin-top: 80px;
            padding-bottom: 0;
          }
          .hero-content {
            display: flex;
            align-items: flex-start;
            max-width: 1400px;
            margin: 0;
            width: 100%;
            padding: 120px 80px 120px 80px;
            margin-right: 45%;
            z-index: 1;
            position: relative;
          }
          .hero-text {
            flex: 1;
            max-width: 700px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            text-align: left;
            align-items: flex-start;
          }
          .hero-text h1 {
            font-size: 3rem;
            font-weight: 700;
            line-height: 1.2;
            color: #222;
            margin-bottom: 24px;
            letter-spacing: -0.02em;
            text-align: left;
            width: 100%;
          }
          .hero-text p {
            font-size: 1.1rem;
            font-weight: 400;
            line-height: 1.6;
            color: #444;
            margin-bottom: 32px;
            max-width: 100%;
            text-align: left;
            width: 100%;
          }
          .hero-image {
            position: absolute;
            top: -80px;
            right: 0;
            width: 45%;
            bottom: 0;
            overflow: hidden;
            z-index: 0;
          }
          .hero-image::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(255, 122, 0, 0.05) 0%, rgba(255, 149, 0, 0.08) 100%);
            pointer-events: none;
          }
          .hero-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0;
            display: block;
          }
          .cta-button {
            background: linear-gradient(90deg, #ff7a00, #ff9500);
            color: white;
            border: none;
            padding: 14px 28px;
            font-size: 15px;
            font-weight: 700;
            cursor: pointer;
            border-radius: 6px;
            letter-spacing: 0.3px;
            box-shadow: 0 4px 15px rgba(255, 138, 0, 0.3);
            transition: all 0.3s ease;
            align-self: flex-start;
          }
          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 0 20px rgba(255, 138, 0, 0.5), 0 6px 20px rgba(255, 138, 0, 0.3);
          }
          .cta-button:active {
            transform: translateY(0);
          }
          .vision-mission-section {
            display: flex;
            background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assests/mission,vision.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            color: white;
            min-height: 500px;
          }
          .vision-box, .mission-box {
            flex: 1;
            padding: 120px 60px;
            position: relative;
          }
          .vision-box h2, .mission-box h2 {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 20px;
            letter-spacing: 1px;
          }
          .vision-box p, .mission-box p {
            font-size: 18px;
            line-height: 1.8;
            max-width: 500px;
          }
          .description-section {
            background: transparent;
            padding: 60px 80px;
            text-align: center;
            max-width: 1200px;
            margin: 0 auto;
          }
          .description-section p {
            font-size: 18px;
            line-height: 1.8;
            color: #444;
            margin-bottom: 20px;
            font-weight: 700;
          }
          .certifications-section {
            background: white;
            padding: 60px 80px;
            text-align: center;
          }
          .certifications-section h3 {
            color: #ff8c00;
            font-size: 18px;
            margin-bottom: 40px;
            font-weight: bold;
          }
          .cert-grid {
            display: flex;
            justify-content: center;
            gap: 80px;
            flex-wrap: wrap;
          }
          .cert-item {
            display: flex;
            align-items: center;
            gap: 20px;
          }
          .cert-badge {
            width: 80px;
            height: 80px;
          }
          .iso-circle {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 3px solid #1e3a8a;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: #1e3a8a;
            font-size: 18px;
          }
          .cert-text {
            text-align: left;
          }
          .cert-text h4 {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 5px;
          }
          .cert-text p {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 3px;
          }
          .cert-text span {
            font-size: 12px;
            color: #666;
          }
          .values-section {
            background: white;
            padding: 60px 80px;
            display: flex;
            justify-content: center;
            gap: 100px;
            flex-wrap: wrap;
          }
          .value-item {
            text-align: center;
          }
          .value-icon {
            width: 48px;
            height: 48px;
            margin: 0 auto 15px auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .value-icon img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .value-item h4 {
            font-size: 14px;
            font-weight: bold;
            color: #ff8c00;
            letter-spacing: 0.5px;
          }
          .cta-section {
            background: white;
            padding: 40px;
            text-align: center;
          }
          @media (max-width: 768px) {
            .hero-section {
              padding: 0;
              min-height: auto;
              margin-top: 72px;
              flex-direction: column;
            }
            .hero-content {
              flex-direction: column;
              gap: 0;
              margin-right: 0;
              padding: 30px 20px 20px 20px;
              order: 1;
            }
            .hero-text {
              max-width: 100%;
              text-align: center;
              align-items: center;
            }
            .hero-text h1 {
              font-size: 1.75rem;
              line-height: 1.3;
              text-align: center;
            }
            .hero-text p {
              font-size: 0.95rem;
              text-align: center;
              margin-bottom: 20px;
            }
            .hero-text .cta-button {
              align-self: center;
              margin-bottom: 30px;
            }
            .hero-image {
              position: relative;
              top: 0;
              width: 100%;
              height: 250px;
              margin-top: 0;
              order: 2;
            }
            .vision-mission-section {
              flex-direction: column;
            }
            .vision-box, .mission-box {
              padding: 40px 20px;
            }
            .vision-box h2, .mission-box h2 {
              font-size: 20px;
              text-align: center;
            }
            .vision-box p, .mission-box p {
              font-size: 15px;
            }
            .description-section {
              padding: 40px 20px;
            }
            .description-section p {
              font-size: 16px;
            }
            .certifications-section {
              padding: 40px 20px;
            }
            .values-section {
              gap: 30px;
              padding: 40px 20px;
              flex-direction: column;
              align-items: center;
            }
            .value-item {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 120px;
            }
            .value-icon {
              width: 40px;
              height: 40px;
              margin-bottom: 10px;
            }
            .value-item h4 {
              font-size: 12px;
              text-align: center;
            }
            .cert-grid {
              flex-direction: column;
              align-items: center;
              gap: 20px;
            }
            .cert-item {
              flex-direction: column;
              text-align: center;
              gap: 15px;
            }
            .cert-text {
              text-align: center;
            }
          }
        `}
      </style>
    </div>
  );
};

export default About;

