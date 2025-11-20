import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Clock, ClipboardCheck, CheckCircle } from 'lucide-react'

export default function HomeNavbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const closeMobile = () => setIsMobileOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      {/* Top info bar */}
      <div className="bg-[#1e2a5e] text-white py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex justify-end items-center">
          <span className="whitespace-nowrap">Contact: Mr. Nataraj D.K. Gowda - 9900075805</span>
        </div>
      </div>
      {/* Middle white brand + badges bar - Hidden on mobile */}
      <div className="hidden md:block bg-white border-b">
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center px-4 py-3">
          {/* Logo (left) */}
          <div className="flex items-center">
            <NavLink to="/" onClick={closeMobile} className="flex items-center">
              <img src="/assests/logo.png" alt="SKLP Logo" className="w-28 h-28 object-contain"/>
            </NavLink>
          </div>
          {/* Badges (center) */}
          <div className="flex items-center justify-center gap-20 text-gray-700">
            <div className="flex items-center gap-5">
              <span className="text-orange-500">
                <Clock size={28} strokeWidth={2.5} />
              </span>
              <div className="leading-tight">
                <div className="font-semibold text-[16px]">24-hour</div>
                <div className="text-[13px] text-gray-500">Production</div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-orange-500">
                <ClipboardCheck size={28} strokeWidth={2.5} />
              </span>
              <div className="leading-tight">
                <div className="font-semibold text-[16px]">ISO</div>
                <div className="text-[13px] text-gray-500">Certification</div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-orange-500">
                <CheckCircle size={28} strokeWidth={2.5} />
              </span>
              <div className="leading-tight">
                <div className="font-semibold text-[16px]">Quality</div>
                <div className="text-[13px] text-gray-500">Assured</div>
              </div>
            </div>
          </div>
          {/* Request quote button (right) */}
          <div className="flex justify-end">
            <NavLink
              to="/contact"
              className="bg-orange-500 text-white px-6 py-3 font-semibold text-xs uppercase tracking-wide transition hover:bg-orange-600 shadow-[0_0_15px_rgba(249,115,22,0.5)]"
            >
              REQUEST QUOTE
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile white navbar - Logo, REQUEST QUOTE, Hamburger */}
      <div className="md:hidden bg-white border-b shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo (left) */}
          <NavLink to="/" onClick={closeMobile} className="flex items-center">
            <img src="/assests/logo.png" alt="SKLP Logo" className="w-16 h-16 object-contain"/>
          </NavLink>
          {/* Right side - REQUEST QUOTE button and hamburger */}
          <div className="flex items-center gap-3">
            <NavLink to="/contact" className="bg-orange-500 text-white px-3 py-2 text-xs font-semibold transition hover:bg-orange-600 shadow-[0_0_15px_rgba(249,115,22,0.5)]">
              REQUEST QUOTE
            </NavLink>
            <button
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex items-center justify-center p-2 rounded text-gray-700 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMobileOpen((v) => !v)}
            >
              <span className="sr-only">Toggle navigation</span>
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-5 bg-gray-700 transition-transform ${isMobileOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
                <span className={`block h-0.5 w-5 bg-gray-700 transition-opacity ${isMobileOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-0.5 w-5 bg-gray-700 transition-transform ${isMobileOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Floating main nav bar - Desktop only */}
      <div className={`hidden md:block ${isScrolled ? 'fixed top-0 left-0 right-0' : 'relative'} bg-transparent z-40`}>
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className={`relative ${!isScrolled ? '-mt-6' : ''}`}>
            <nav className="flex items-center gap-12 lg:gap-16 xl:gap-20 bg-[#1e2a5e] text-white text-base font-medium uppercase tracking-wide px-16 lg:px-20 py-10 shadow-[0_18px_35px_rgba(30,42,94,0.25)]">
              <NavLink onClick={closeMobile} className={({isActive}) => isActive ? 'text-orange-400' : 'hover:text-orange-300'} to="/">HOME</NavLink>
              <NavLink onClick={closeMobile} className={({isActive}) => isActive ? 'text-orange-400' : 'hover:text-orange-300'} to="/services">SERVICES</NavLink>
              <NavLink onClick={closeMobile} className={({isActive}) => isActive ? 'text-orange-400' : 'hover:text-orange-300'} to="/about">ABOUT US</NavLink>
              <NavLink onClick={closeMobile} className={({isActive}) => isActive ? 'text-orange-400' : 'hover:text-orange-300'} to="/gallery">GALLERY</NavLink>
              <NavLink onClick={closeMobile} className={({isActive}) => isActive ? 'text-orange-400' : 'hover:text-orange-300'} to="/contact">CONTACT US</NavLink>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden bg-[#1e2a5e] border-t border-white/10 transition-[max-height] overflow-hidden ${isMobileOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="px-4 py-2">
          <ul className="flex flex-col gap-1 text-white text-sm font-normal uppercase">
            <li><NavLink onClick={closeMobile} className={({isActive}) => isActive ? 'block px-2 py-3 bg-white/10 rounded' : 'block px-2 py-3 hover:bg-white/10 rounded'} to="/">HOME</NavLink></li>
            <li><NavLink onClick={closeMobile} className={({isActive}) => isActive ? 'block px-2 py-3 bg-white/10 rounded' : 'block px-2 py-3 hover:bg-white/10 rounded'} to="/services">SERVICES</NavLink></li>
            <li><NavLink onClick={closeMobile} className={({isActive}) => isActive ? 'block px-2 py-3 bg-white/10 rounded' : 'block px-2 py-3 hover:bg-white/10 rounded'} to="/about">ABOUT US</NavLink></li>
            <li><NavLink onClick={closeMobile} className={({isActive}) => isActive ? 'block px-2 py-3 bg-white/10 rounded' : 'block px-2 py-3 hover:bg-white/10 rounded'} to="/gallery">GALLERY</NavLink></li>
            <li><NavLink onClick={closeMobile} className={({isActive}) => isActive ? 'block px-2 py-3 bg-white/10 rounded' : 'block px-2 py-3 hover:bg-white/10 rounded'} to="/contact">CONTACT US</NavLink></li>
            <li className="pt-1">
              <NavLink
                to="/contact"
                onClick={closeMobile}
                className="block text-center bg-orange-500 text-white px-4 py-3 font-semibold text-sm transition hover:bg-orange-600 shadow-[0_0_15px_rgba(249,115,22,0.5)]"
              >
                REQUEST QUOTE
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}







