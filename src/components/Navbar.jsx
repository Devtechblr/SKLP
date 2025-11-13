import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// Use public asset path

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const closeMobile = () => setIsMobileOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main nav bar - Dark blue background */}
      <div className="bg-[#1e2a5e] shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-4 py-1 sm:py-2">
          {/* Logo (left) */}
          <NavLink to="/" className="flex items-center" onClick={closeMobile}>
            <div className="flex flex-col items-center justify-center">
              <img 
                src="/assests/logo.png" 
                alt="SKLP Logo" 
                className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain"
              />
              {/* SKLP text below logo */}
              <div className="mt-1">
                <span className="text-white text-xs font-semibold"></span>
              </div>
            </div>
          </NavLink>

          {/* Navigation links (right) */}
          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex gap-8 lg:gap-10 text-white text-sm font-medium uppercase">
              <li>
                <NavLink 
                  to="/" 
                  className={({isActive}) => 
                    isActive 
                      ? 'text-orange-400' 
                      : 'hover:opacity-80'
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services" 
                  className={({isActive}) => 
                    isActive 
                      ? 'text-orange-400' 
                      : 'hover:opacity-80'
                  }
                >
                  SERVICES
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({isActive}) => 
                    isActive 
                      ? 'text-orange-400' 
                      : 'hover:opacity-80'
                  }
                >
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/gallery" 
                  className={({isActive}) => 
                    isActive 
                      ? 'text-orange-400' 
                      : 'hover:opacity-80'
                  }
                >
                  GALLERY
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({isActive}) => 
                    isActive 
                      ? 'text-orange-400' 
                      : 'hover:opacity-80'
                  }
                >
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden inline-flex items-center justify-center p-2 rounded text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            onClick={() => setIsMobileOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-current transition-transform ${isMobileOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-opacity ${isMobileOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-transform ${isMobileOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden bg-[#1e2a5e] border-t border-white/10 transition-[max-height] overflow-hidden ${isMobileOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <nav className="px-4 py-1">
          <ul className="flex flex-col gap-1 text-white text-sm font-medium uppercase">
            <li>
              <NavLink 
                to="/" 
                onClick={closeMobile}
                className={({isActive}) => 
                  isActive 
                    ? 'block px-2 py-2 bg-white/10 rounded'
                    : 'block px-2 py-2 hover:bg-white/10 rounded'
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/services" 
                onClick={closeMobile}
                className={({isActive}) => 
                  isActive 
                    ? 'block px-2 py-2 bg-white/10 rounded'
                    : 'block px-2 py-2 hover:bg-white/10 rounded'
                }
              >
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                onClick={closeMobile}
                className={({isActive}) => 
                  isActive 
                    ? 'block px-2 py-2 bg-white/10 rounded'
                    : 'block px-2 py-2 hover:bg-white/10 rounded'
                }
              >
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/gallery" 
                onClick={closeMobile}
                className={({isActive}) => 
                  isActive 
                    ? 'block px-2 py-2 bg-white/10 rounded'
                    : 'block px-2 py-2 hover:bg-white/10 rounded'
                }
              >
                GALLERY
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                onClick={closeMobile}
                className={({isActive}) => 
                  isActive 
                    ? 'block px-2 py-2 bg-white/10 rounded'
                    : 'block px-2 py-2 hover:bg-white/10 rounded'
                }
              >
                CONTACT US
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
