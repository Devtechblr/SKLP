import React from 'react';
import { Truck, Award, Headphones, Facebook, Twitter, Instagram, Linkedin, Phone, Mail } from 'lucide-react';
import Navbar from '../../components/Navbar.jsx';

const Services = ({ companyName = "SKLP" }) => {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative mt-16 md:mt-0 w-full min-h-[400px] md:min-h-0">
        <img
          src="/assests/services_hero.jpg"
          alt="Ready Mixed Concrete services hero"
          className="w-full h-full md:h-auto object-cover md:object-contain block min-h-[400px] md:min-h-0"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <p className="text-xs md:text-sm mb-2 md:mb-4 tracking-wider">SERVICES</p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">READY MIXED CONCRETE</h1>
          <p className="max-w-3xl mb-2 md:mb-4 text-sm md:text-lg px-2">SKLP specializes in supplying Ready-Mix Concrete (RMC) across Karnataka, tailored to meet the structural and performance requirements of diverse projects.</p>
          <p className="max-w-3xl mb-4 md:mb-8 text-sm md:text-lg px-2">Our advanced batching plant produces a wide range of concrete grades from M7.5 to M60, suitable for everything from small foundations to high-strength infrastructure.</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded transition text-sm md:text-base">
            CONTACT US
          </button>
        </div>
      </div>

      {/* Icon Features */}
      <div className="max-w-7xl mx-auto py-8 md:py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
          <div className="flex flex-col items-center">
            <Truck className="w-16 h-16 text-orange-500 mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-bold text-orange-500">ON-SITE DELIVERY</h3>
          </div>
          <div className="flex flex-col items-center">
            <Award className="w-16 h-16 text-orange-500 mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-bold text-orange-500">QUALITY</h3>
          </div>
          <div className="flex flex-col items-center">
            <Headphones className="w-16 h-16 text-orange-500 mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-bold text-orange-500">LOGISTIC & SUPPORT</h3>
          </div>
        </div>
      </div>

      {/* Services Section (cards with background image) */}
      <div className="bg-white py-8 md:py-16 px-0">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0">
          <div className="relative h-[28.8rem] overflow-hidden">
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: "url('/assests/Card.png')" }}
            />
            <div className="relative z-10 text-white p-6 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4 text-orange-400">Ready Mix Supply</h3>
              <ul className="space-y-2 text-base text-left">
                <li>• We manufacture and supply Ready Mix Concrete (RMC) in grades ranging from M7.5 to M60, tailored to meet diverse project requirements – from residential works to heavy infrastructure</li>
                <li>• Minimum volume is 1.5 M3/S and 18 M3/S maximum</li>
                <li>• In-house testing for slump, compressive strength, and cube results</li>
                <li>• Concrete mixes designed to meet Ultratech, JSW, SIKA, and Fosroc</li>
                <li>• Suitable for foundations, columns, slabs, bridges, and government structures</li>
              </ul>
            </div>
          </div>

          <div className="relative h-[28.8rem] overflow-hidden">
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: "url('/assests/Card.png')" }}
            />
            <div className="relative z-10 text-white p-6 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4 text-orange-400">Custom Concrete</h3>
              <ul className="space-y-2 text-base text-left">
                <li>• We provide specialized concrete mixes tailored to match the structural and environmental needs of each project.</li>
                <li>• Self-Compacting Concrete</li>
                <li>• High-Strength Design Mixes (up to M60)</li>
                <li>• Workable Mixes with GGBS and eco-friendly materials</li>
                <li>• Rapid-Setting and Waterproof Concrete for critical timelines</li>
                <li>• Mix Design prepared by qualified engineers ensuring strength and durability</li>
              </ul>
            </div>
          </div>

          <div className="relative h-[28.8rem] overflow-hidden">
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: "url('/assests/Card.png')" }}
            />
            <div className="relative z-10 text-white p-6 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4 text-orange-400">Logistics & On-Time Delivery</h3>
              <ul className="space-y-2 text-base text-left">
                <li>• Our in-house fleet of 10+ vehicles and dedicated logistics team ensure timely delivery to construction and infrastructure sites across Karnataka</li>
                <li>• 2-hour dispatch guarantee for scheduled orders</li>
                <li>• 24/7 operations for urgent and night-shift requirements</li>
                <li>• GPS-monitored trucks for real-time tracking</li>
                <li>• Experienced drivers and supervisors ensuring safe transit</li>
              </ul>
            </div>
          </div>

          <div className="relative h-[28.8rem] overflow-hidden">
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: "url('/assests/Card.png')" }}
            />
            <div className="relative z-10 text-white p-6 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4 text-orange-400">Quick Service & Quality Assurance</h3>
              <ul className="space-y-2 text-base text-left">
                <li>• Speed and reliability without compromising on quality are our operational standard</li>
                <li>• With a 2-4 hour mixing plant and ISO-certified quality systems, we assure projects are completed faster without compromising standards</li>
                <li>• 24/7 batching and dispatch for uninterrupted supply</li>
                <li>• Cube Testing (50%) (7-day & 28-day) for every mix</li>
                <li>• ISO 9001:2015 & 14001 certified for quality, safety, and sustainability</li>
                <li>• Rapid response to customer inquiries </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Plant & Machinery Section */}
      <div className="pt-4 md:pt-8 pb-0 px-0 bg-white">
        <div className="w-full">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">Plant & Machinery</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center overflow-visible px-4 md:px-0">
            <div className="space-y-6 order-1 lg:order-2">
              <p className="text-gray-700 leading-relaxed">
                Our plant, equipment, and logistics are the backbone of our Quick Service Promise — ensuring that every cubic meter of concrete meets exacting standards and reaches the site on time.
              </p>
              <div>
                <h4 className="font-bold text-orange-500 mb-2">Areas:</h4>
                <p className="text-gray-700">2 Acres – Strategically located for seamless connectivity across Bengaluru and Karnataka's major construction zones.</p>
              </div>
              <div>
                <h4 className="font-bold text-orange-500 mb-2">Plant Type:</h4>
                <p className="text-gray-700">Fully automated Conmix Batching Plant with advanced control systems.</p>
              </div>
              <div>
                <h4 className="font-bold text-orange-500 mb-2">Production Capacity:</h4>
                <p className="text-gray-700">70 m³/hour – enabling large-scale, continuous concrete production for major government and infrastructure projects.</p>
              </div>
              <div>
                <h4 className="font-bold text-orange-500 mb-2">Operational Capability:</h4>
                <p className="text-gray-700">The plant runs 24x7, ensuring uninterrupted concrete supply for urgent and high-volume projects such as foundations, bridges, and defense infrastructure.</p>
              </div>
            </div>
            <div className="overflow-visible order-2 lg:order-1">
              <img src="/assests/plant_machinery.png" alt="Concrete Mixer Truck" className="block w-full transform scale-[1.0252] -translate-y-3 origin-top-right" />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Services;