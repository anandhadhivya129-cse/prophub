import React, { useState } from 'react'
import { Search, MapPin, Home, Building2, TrendingUp } from 'lucide-react'

const stats = [
  { label: 'Active Listings', value: '45,000+' },
  { label: 'Happy Customers', value: '1.2M+' },
  { label: 'Cities Covered', value: '500+' },
  { label: 'Expert Agents', value: '8,000+' },
]

export default function HeroSection() {
  const [tab, setTab] = useState('Buy')
  const [city, setCity] = useState('')
  const [type, setType] = useState('')
  const [budget, setBudget] = useState('')

  const tabs = ['Buy', 'Rent', 'New Projects', 'Commercial']

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #F8F4EC 0%, #F5E6D3 40%, #EDE0D0 70%, #E6D7C3 100%)',
          }}
        />
        {/* Decorative blobs */}
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #f5c842 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-20 w-72 h-72 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #1e7a6e 0%, transparent 70%)' }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-5 animate-fade-in-up" style={{ animationDelay: '.1s', opacity: 0, animationFillMode: 'forwards' }}>
          <span className="w-8 h-px bg-gold"></span>
          <span className="text-gold text-sm font-medium tracking-widest uppercase">India's #1 Real Estate Platform</span>
          <span className="w-8 h-px bg-gold"></span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
          style={{ animationDelay: '.2s' }}>
          Find Your<br />
          <span className="text-gold">Dream Home</span><br />
          <span className="text-slate-400 text-4xl md:text-5xl font-normal italic">in India</span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-10"
          style={{ animationDelay: '.3s' }}>
          Explore thousands of verified properties across 500+ cities. Buy, rent, or invest with complete confidence.
        </p>

        {/* Search Card */}
        <div className="glass rounded-2xl p-1 max-w-3xl shadow-2xl mb-12">
          {/* Tabs */}
          <div className="flex gap-1 p-1 mb-0">
            {tabs.map(t => (
              <button key={t} onClick={() => setTab(t)}
                className={`flex-1 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 ${
                  tab === t
                    ? 'btn-gold shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-navy-700'
                }`}>
                {t}
              </button>
            ))}
          </div>

          <div className="p-4">
            <div className="flex flex-col md:flex-row gap-3">
              {/* City */}
              <div className="flex-1 relative">
                <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" />
                <input
                  type="text"
                  placeholder="City, locality or landmark"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  className="w-full bg-navy-900 border border-navy-700 rounded-xl pl-9 pr-4 py-3 text-sm text-white placeholder-slate-500 transition-all"
                />
              </div>

              {/* Type */}
              <select value={type} onChange={e => setType(e.target.value)}
                className="flex-1 bg-navy-900 border border-navy-700 rounded-xl px-4 py-3 text-sm text-slate-400 transition-all appearance-none cursor-pointer">
                <option value="">Property Type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Independent House</option>
                <option>Plot</option>
                <option>Commercial</option>
                <option>Studio</option>
              </select>

              {/* Budget */}
              <select value={budget} onChange={e => setBudget(e.target.value)}
                className="flex-1 bg-navy-900 border border-navy-700 rounded-xl px-4 py-3 text-sm text-slate-400 transition-all appearance-none cursor-pointer">
                <option value="">Budget</option>
                <option>Under ₹25 Lakh</option>
                <option>₹25L – ₹50L</option>
                <option>₹50L – ₹1 Cr</option>
                <option>₹1 Cr – ₹2 Cr</option>
                <option>Above ₹2 Cr</option>
              </select>

              {/* Search */}
              <button className="btn-gold px-6 py-3 rounded-xl flex items-center gap-2 whitespace-nowrap shadow-lg">
                <Search size={16} />
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center animate-fade-in-up"
              style={{ animationDelay: `${.4 + i * .1}s`, opacity: 0, animationFillMode: 'forwards' }}>
              <div className="text-2xl md:text-3xl font-bold text-gold font-heading">{s.value}</div>
              <div className="text-slate-500 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0 60V30C360 0 720 0 1080 30C1260 45 1380 55 1440 60H0Z" fill="#031e1a"/>
        </svg>
      </div>
    </section>
  )
}
