import React from 'react'
import './home.css'
import HomeNavbar from '../../components/HomeNavbar.jsx'

const CUSTOMER_LOGOS = [
  { src: '/assests/Customers/Bangalore Nirmithi Kendra(Urban).png', alt: 'Bangalore Nirmithi Kendra (Urban)' },
  { src: '/assests/Customers/bluespring.png', alt: 'Bluespring' },
  { src: '/assests/Customers/Bruhat_Bengaluru_Mahanagara_Palike.png', alt: 'Bruhat Bengaluru Mahanagara Palike' },
  { src: '/assests/Customers/core4_engineers_pvt_ltd.png', alt: 'Core4 Engineers Pvt Ltd' },
  { src: '/assests/Customers/Godrej.png', alt: 'Godrej', size: 'h-20 md:h-24' },
  { src: '/assests/Customers/GR.png', alt: 'GR' },
  { src: '/assests/Customers/images.png', alt: 'Images' },
  { src: '/assests/Customers/Indian_Air_Force.png', alt: 'Indian Air Force' },
  { src: '/assests/Customers/Karnataka_ind.png', alt: 'Karnataka Industrial' },
  { src: '/assests/Customers/KEC_International_logo.svg.png', alt: 'KEC International' },
  { src: '/assests/Customers/kites.png', alt: 'Kites', size: 'h-20 md:h-24' },
  { src: '/assests/Customers/NCC.png', alt: 'NCC', size: 'h-20 md:h-24' },
  { src: '/assests/Customers/Pillars.png', alt: 'Pillars', size: 'h-20 md:h-24' },
  { src: '/assests/Customers/Prestige_Group.svg.png', alt: 'Prestige Group', size: 'h-20 md:h-24' },
  { src: '/assests/Customers/RK-Builders.png', alt: 'RK Builders' },
]

const SCROLLING_LOGOS = [...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS]

export default function Home({ companyName = 'SKLP' }) {
  return (
    <div className="min-h-screen bg-white">
      <HomeNavbar />
      <div className="pt-[120px] md:pt-0">
        {/* Hero Section with Overlay Text */}
        <div className="relative w-full">
          <img 
            src="/assests/homehero.jpg" 
            alt="Construction site" 
            className="w-full h-auto object-contain block"
          />
          {/* Overlay Text - Lower Left Position */}
          <div className="absolute inset-0 flex flex-col items-start justify-end pb-6 md:pb-12 lg:pb-16 pl-4 md:pl-8 lg:pl-12 bg-black/30 md:bg-black/10">
            <div className="text-left text-white max-w-2xl md:max-w-3xl">
              <p className="text-xs md:text-base lg:text-lg mb-1 md:mb-3 font-medium">Welcome to SKLP</p>
              <h1 className="text-base md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                Supplying fresh, high-quality wet concrete across Bengaluru
              </h1>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <section className="max-w-7xl mx-auto px-4 py-8 md:py-16 bg-gray-50">
          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                SKLP (Shri Kodilingeshwara Prasanna) is a fast-growing construction solutions company based in Bengaluru, Karnataka.
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded In May 2024, With 30+ dedicated members, a 2-acre state-of-the-art plant, and a fleet of 8+ vehicles, SKLP delivers high-quality, time-bound infrastructure solutions across Karnataka.
              </p>
              <button className="bg-orange-500 text-white px-8 py-3 rounded font-semibold hover:bg-orange-600">
                More About Us
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {/* Statistics Row - Above Image */}
              <div className="flex items-center justify-between">
                <div className="flex-1 text-center border-r border-gray-300 px-4">
                  <div className="text-4xl font-bold text-gray-800 mb-2">10+</div>
                  <div className="text-sm text-gray-500">vehicles</div>
                </div>
                <div className="flex-1 text-center border-r border-gray-300 px-4">
                  <div className="text-4xl font-bold text-gray-800 mb-2">5,000+</div>
                  <div className="text-sm text-gray-500">Projects</div>
                </div>
                <div className="flex-1 text-center px-4">
                  <div className="text-4xl font-bold text-gray-800 mb-2">2,500+</div>
                  <div className="text-sm text-gray-500">customers</div>
                </div>
              </div>
              {/* Image */}
              <img 
                src="/assests/aboutus.png" 
                alt="Construction work" 
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          {/* Mobile Layout - Statistics first, then image, then text, then button */}
          <div className="md:hidden flex flex-col gap-6">
            {/* Statistics Row */}
            <div className="flex items-center justify-between">
              <div className="flex-1 text-center border-r border-gray-300 px-3">
                <div className="text-2xl font-bold text-gray-800 mb-1">10+</div>
                <div className="text-xs text-gray-500">vehicles</div>
              </div>
              <div className="flex-1 text-center border-r border-gray-300 px-3">
                <div className="text-2xl font-bold text-gray-800 mb-1">5,000+</div>
                <div className="text-xs text-gray-500">Projects</div>
              </div>
              <div className="flex-1 text-center px-3">
                <div className="text-2xl font-bold text-gray-800 mb-1">2,500+</div>
                <div className="text-xs text-gray-500">customers</div>
              </div>
            </div>
            {/* Image */}
            <div>
              <img 
                src="/assests/aboutus.png" 
                alt="Construction work" 
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* Text Content */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                SKLP (Shri Kodilingeshwara Prasanna) is a fast-growing construction solutions company based in Bengaluru, Karnataka.
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                Founded In May 2024, With 30+ dedicated members, a 2-acre state-of-the-art plant, and a fleet of 8+ vehicles, SKLP delivers high-quality, time-bound infrastructure solutions across Karnataka.
              </p>
              <div className="flex justify-center">
                <button className="bg-orange-500 text-white px-8 py-3 rounded font-semibold hover:bg-orange-600">
                  More About Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Happy Customers Section */}
        <section className="py-8 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">Our Happy Customers</h2>
            {/* Desktop: Scrolling logos */}
            <div className="hidden md:block overflow-hidden">
              <div className="customer-scroll">
                <div className="customer-scroll-inner">
                  {SCROLLING_LOGOS.map((logo, index) => (
                    <img
                      key={`${logo.alt}-${index}`}
                      src={logo.src}
                      alt={logo.alt}
                      className={`grayscale hover:grayscale-0 transition flex-shrink-0 ${logo.size ?? 'h-16 md:h-20'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Mobile: Scrolling logos */}
            <div className="md:hidden overflow-hidden">
              <div className="customer-scroll">
                <div className="customer-scroll-inner">
                  {SCROLLING_LOGOS.map((logo, index) => (
                    <img
                      key={`mobile-${logo.alt}-${index}`}
                      src={logo.src}
                      alt={logo.alt}
                      className={`grayscale hover:grayscale-0 transition flex-shrink-0 ${logo.size ?? 'h-14'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}