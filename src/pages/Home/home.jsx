import React from 'react'
import './home.css'
import HomeNavbar from '../../components/HomeNavbar.jsx'

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
                  <img src="" alt="Customer 1" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 2" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 3" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 4" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 5" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 6" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 7" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 8" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  {/* Duplicate for seamless loop */}
                  <img src="" alt="Customer 1" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 2" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 3" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 4" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 5" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 6" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 7" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 8" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                </div>
              </div>
            </div>
            {/* Mobile: 3 static logos centered */}
            <div className="md:hidden flex justify-center items-center gap-6 flex-wrap">
              <img src="" alt="Customer 1" className="h-12 grayscale object-contain" />
              <img src="" alt="Customer 2" className="h-12 grayscale object-contain" />
              <img src="" alt="Customer 3" className="h-12 grayscale object-contain" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}


