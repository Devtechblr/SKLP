import React from 'react'
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#1e2a5e] text-white py-10 w-full">
      <div className="w-full px-6">
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-12 items-start">
          {/* Left: Plant Location */}
          <div className="col-span-4 mb-8 md:mb-0">
            <h3 className="font-semibold text-[24px] leading-tight mb-3">Plant Location</h3>
            <p className="text-[14px] leading-6 text-gray-300 max-w-sm">
              Sy No. 105, Bagalur Post,<br />
              Byappanahalli North Taluk,<br />
              Bengaluru, Karnataka - 562149
            </p>
          </div>

          {/* Center: Links and Socials */}
          <div className="col-span-4 flex flex-col items-center gap-12">
            <nav className="flex items-center gap-16 text-[14px]">
              <NavLink to="/about" className="hover:text-orange-400" onClick={() => window.scrollTo(0, 0)}>About</NavLink>
              <NavLink to="/gallery" className="hover:text-orange-400" onClick={() => window.scrollTo(0, 0)}>Gallery</NavLink>
              <NavLink to="/contact" className="hover:text-orange-400" onClick={() => window.scrollTo(0, 0)}>Contact Us</NavLink>
            </nav>
            <div className="flex items-center gap-24 text-orange-400">
              <a href="https://www.facebook.com/profile.php?id=61583022466033" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={22} />
              </a>
              <a href="https://x.com/sklpconcrete" target="_blank" rel="noopener noreferrer" aria-label="X">
                <Twitter size={22} />
              </a>
              <a href="https://www.instagram.com/sklpconcreteproducts/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={22} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          {/* Right: Contact */}
          <div className="col-span-4 flex flex-col items-start gap-6 ml-[40%]">
            <a href="tel:+919900075805" className="flex items-center gap-3 text-[14px] hover:text-orange-300 transition-colors" style={{ textDecoration: 'none' }}>
              <span className="text-orange-400 w-[18px] flex justify-center"><Phone size={18} /></span>
              <span className="text-white">+91 9900075805</span>
            </a>
            <div className="flex items-center gap-3 text-[14px]">
              <span className="text-orange-400 w-[18px] flex justify-center"><Mail size={18} /></span>
              <span className="text-white">nataraj@sklpconcrete.com</span>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden relative">
          {/* Contact Information (Top) */}
          <div className="flex flex-col gap-4 mb-6">
            <a href="tel:+919900075805" className="flex items-center gap-3 text-[14px] hover:text-orange-300 transition-colors" style={{ textDecoration: 'none' }}>
              <div className="bg-orange-400 rounded-full p-2 flex-shrink-0 w-8 h-8 flex items-center justify-center">
                <Phone size={16} className="text-white" />
              </div>
              <span className="text-white">+91 9900075805</span>
            </a>
            <div className="flex items-center gap-3 text-[14px]">
              <div className="bg-orange-400 rounded-full p-2 flex-shrink-0 w-8 h-8 flex items-center justify-center">
                <Mail size={16} className="text-white" />
              </div>
              <span className="text-white">Mr. Nataraj D.K. Gowda</span>
            </div>
          </div>

          {/* Main Content with Social Icons on Right */}
          <div className="flex justify-between items-start gap-4 mb-6">
            {/* Left Side Content */}
            <div className="flex-1 min-w-0 pr-4">
              {/* Plant Location */}
              <div className="mb-6">
                <h3 className="font-bold text-[20px] leading-tight mb-3 text-white">Plant Location</h3>
                <p className="text-[14px] leading-6 text-white">
                  Sy No. 105, Bagalur Post,<br />
                  Byappanahalli North Taluk,<br />
                  Bengaluru, Karnataka - 562149
                </p>
              </div>

              {/* COMPANY Section */}
              <div>
                <h3 className="font-bold text-[20px] leading-tight mb-3 text-white">COMPANY</h3>
                <nav className="flex flex-col gap-2.5 text-[14px]">
                  <NavLink to="/about" className="text-white hover:text-orange-400 transition-colors" onClick={() => window.scrollTo(0, 0)}>About</NavLink>
                  <NavLink to="/gallery" className="text-white hover:text-orange-400 transition-colors" onClick={() => window.scrollTo(0, 0)}>Gallery</NavLink>
                  <NavLink to="/contact" className="text-white hover:text-orange-400 transition-colors" onClick={() => window.scrollTo(0, 0)}>Contact Us</NavLink>
                </nav>
              </div>
            </div>

            {/* Right Side - Social Media Icons */}
            <div className="flex flex-col gap-16 flex-shrink-0 items-end pt-0.5">
              <a href="https://www.facebook.com/profile.php?id=61583022466033" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-orange-400 hover:text-orange-500 transition-colors">
                <Facebook size={22} />
              </a>
              <a href="https://x.com/sklpconcrete" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-orange-400 hover:text-orange-500 transition-colors">
                <Twitter size={22} />
              </a>
              <a href="https://www.instagram.com/sklpconcreteproducts/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-orange-400 hover:text-orange-500 transition-colors">
                <Instagram size={22} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-orange-400 hover:text-orange-500 transition-colors">
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 border-t border-white/20" />

        {/* Bottom copyright */}
        <div className="pt-4 text-center">
          <p className="text-[14px] text-white">
            © SKLP — All rights reserved.<br/>
            Powered by <a
              href="https://devcreationsblr.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300"
            >
              Dev Creations and Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}






