import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, Home, Building2, MapPin, Phone, ChevronDown, User, LogOut } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Buy', href: '#featured' },
    { label: 'Rent', href: '#featured' },
    { label: 'New Projects', href: '#featured' },
    { label: 'Cities', href: '#cities' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass shadow-2xl py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 gold-gradient rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Building2 size={20} className="text-[#FFFFF0]" style={{color:'#FFFFF0'}} />
            </div>
            <span className="font-heading text-2xl font-bold text-[#3E2C20]">
              <span className="text-white text-sm">real estate </span><span className="text-gold">ALAYAA</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(l => (
              <a key={l.label} href={l.href}
                className="text-[#7A6A58] hover:text-gold text-sm font-medium transition-colors duration-200 relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login"
              className="btn-outline text-sm px-4 py-2 rounded-lg font-medium">
              Sign In
            </Link>
            <Link to="/admin/login"
              className="btn-gold text-sm px-4 py-2 rounded-lg">
              List Property
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setOpen(!open)}
            className="md:hidden text-[#3E2C20] p-2 rounded-lg hover:bg-[#EDE0D0] transition-colors">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden glass border-t border-[#E6D7C3] px-4 py-4 space-y-3 animate-fade-in">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="block text-[#7A6A58] hover:text-gold py-2 text-sm font-medium border-b border-[#EDE0D0] transition-colors">
              {l.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <Link to="/login" onClick={() => setOpen(false)}
              className="flex-1 btn-outline text-sm px-4 py-2 rounded-lg text-center font-medium">
              Sign In
            </Link>
            <Link to="/admin/login" onClick={() => setOpen(false)}
              className="flex-1 btn-gold text-sm px-4 py-2 rounded-lg text-center">
              List Property
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
