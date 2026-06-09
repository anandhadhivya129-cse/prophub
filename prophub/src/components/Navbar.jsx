import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

/* ── ALAYAA SVG Logo ── */
const AlayaaLogo = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="60" rx="10" fill="#F5C000"/>
    {/* Roof outline */}
    <polyline points="10,30 30,12 50,30" stroke="#002a2a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    {/* House walls */}
    <rect x="18" y="30" width="24" height="16" rx="2" fill="#002a2a"/>
    {/* Door */}
    <rect x="26" y="36" width="8" height="10" rx="1" fill="#F5C000"/>
  </svg>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [loginDropdown, setLoginDropdown] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const close = () => setLoginDropdown(false)
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  const navLinks = [
    { label: 'Buy', href: '#featured' },
    { label: 'Rent', href: '#featured' },
    { label: 'New Projects', href: '#featured' },
    { label: 'Commercial', href: '#featured' },
    { label: 'Cities', href: '#cities' },
    { label: 'Services', href: '#services' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-dark shadow-2xl py-2' : 'bg-teal-950/80 backdrop-blur-sm py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <AlayaaLogo size={40} />
            <div className="leading-none">
              <div className="text-white text-[11px] font-light tracking-widest uppercase">real estate</div>
              <div className="text-gold-400 font-heading text-xl font-bold tracking-wide" style={{color:'#F5C000'}}>ALAYAA</div>
            </div>
          </Link>

          {/* ── Desktop Links ── */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map(l => (
              <a key={l.label} href={l.href}
                className="text-white/80 hover:text-[#F5C000] text-sm font-medium transition-colors duration-200 relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F5C000] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* ── CTA Buttons ── */}
          <div className="hidden md:flex items-center gap-3">
            {/* Login dropdown */}
            <div className="relative" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setLoginDropdown(!loginDropdown)}
                className="btn-outline text-sm px-4 py-2 rounded-lg flex items-center gap-1.5">
                Sign In <ChevronDown size={14} className={`transition-transform ${loginDropdown ? 'rotate-180' : ''}`} />
              </button>
              {loginDropdown && (
                <div className="absolute right-0 mt-2 w-52 glass-dark rounded-xl shadow-2xl border border-teal-700/40 overflow-hidden animate-fade-in">
                  <div className="px-3 py-2 text-xs text-white/40 font-medium uppercase tracking-wider border-b border-teal-700/30">Login As</div>
                  <Link to="/login" onClick={() => setLoginDropdown(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-teal-700/40 transition-colors">
                    <span className="w-7 h-7 rounded-lg bg-[#F5C000]/20 flex items-center justify-center text-[#F5C000] text-xs font-bold">U</span>
                    <div><div className="font-medium">Customer</div><div className="text-xs text-white/50">Search & buy/rent</div></div>
                  </Link>
                  <Link to="/broker/login" onClick={() => setLoginDropdown(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-teal-700/40 transition-colors">
                    <span className="w-7 h-7 rounded-lg bg-blue-400/20 flex items-center justify-center text-blue-300 text-xs font-bold">B</span>
                    <div><div className="font-medium">Broker / Agent</div><div className="text-xs text-white/50">Manage listings</div></div>
                  </Link>
                  <Link to="/admin/login" onClick={() => setLoginDropdown(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-teal-700/40 transition-colors border-t border-teal-700/30">
                    <span className="w-7 h-7 rounded-lg bg-red-400/20 flex items-center justify-center text-red-300 text-xs font-bold">A</span>
                    <div><div className="font-medium">Admin</div><div className="text-xs text-white/50">Platform control</div></div>
                  </Link>
                </div>
              )}
            </div>
            <Link to="/broker/login" className="btn-gold text-sm px-4 py-2 rounded-lg">
              Post Property FREE
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-teal-700/40 transition-colors">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-dark border-t border-teal-700/30 px-4 py-4 space-y-2 animate-fade-in">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="block text-white/80 hover:text-[#F5C000] py-2.5 text-sm font-medium border-b border-teal-700/20 transition-colors">
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-3">
            <Link to="/login" onClick={() => setOpen(false)} className="btn-outline text-sm px-4 py-2.5 rounded-lg text-center">Customer Login</Link>
            <Link to="/broker/login" onClick={() => setOpen(false)} className="btn-outline text-sm px-4 py-2.5 rounded-lg text-center" style={{borderColor:'#93c5fd',color:'#93c5fd'}}>Broker / Agent Login</Link>
            <Link to="/broker/login" onClick={() => setOpen(false)} className="btn-gold text-sm px-4 py-2.5 rounded-lg text-center">Post Property FREE</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
