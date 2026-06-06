import React from 'react'
import { MapPin, ArrowRight } from 'lucide-react'

const CITIES = [
  { name: 'Mumbai', listings: '18,400+', tagline: 'City of Dreams', gradient: 'from-blue-900 to-navy-800' },
  { name: 'Bengaluru', listings: '22,100+', tagline: 'Silicon Valley of India', gradient: 'from-navy-800 to-teal-900' },
  { name: 'Delhi NCR', listings: '31,500+', tagline: 'Power Capital', gradient: 'from-navy-900 to-indigo-900' },
  { name: 'Hyderabad', listings: '14,800+', tagline: 'City of Pearls', gradient: 'from-navy-800 to-violet-900' },
  { name: 'Chennai', listings: '11,200+', tagline: 'Gateway to South', gradient: 'from-teal-900 to-navy-900' },
  { name: 'Pune', listings: '9,700+', tagline: 'Oxford of the East', gradient: 'from-navy-800 to-blue-900' },
  { name: 'Kolkata', listings: '7,300+', tagline: 'City of Joy', gradient: 'from-amber-900 to-navy-800' },
  { name: 'Ahmedabad', listings: '8,100+', tagline: 'Manchester of India', gradient: 'from-navy-900 to-cyan-900' },
]

export default function PopularCities() {
  return (
    <section id="cities" className="py-20" style={{ background: 'linear-gradient(180deg, #030e2e 0%, #061a47 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-3">Across India</p>
          <h2 className="section-title text-4xl md:text-5xl text-white mb-4">
            Popular <span className="text-gold">Cities</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Explore properties in India's most sought-after cities, from metro hubs to emerging tier-2 destinations.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CITIES.map((city, i) => (
            <div key={city.name}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group card-hover bg-gradient-to-br ${city.gradient} border border-navy-700`}
              style={{ minHeight: i < 2 ? '200px' : '160px', animationDelay: `${i * .08}s` }}>
              
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10"
                style={{ background: 'radial-gradient(circle, #f5c842 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
              <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full opacity-5"
                style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative p-5 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-gold text-xs mb-1">
                    <MapPin size={11} />
                    <span className="font-medium">{city.listings} listings</span>
                  </div>
                  <h3 className="text-white font-heading font-bold text-xl leading-tight">{city.name}</h3>
                  <p className="text-slate-400 text-xs mt-1">{city.tagline}</p>
                </div>
                <div className="flex items-center gap-1 text-gold text-xs font-medium mt-4 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-300">
                  Explore <ArrowRight size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 glass rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl font-bold text-white mb-1">Don't see your city?</h3>
            <p className="text-slate-400 text-sm">We cover 500+ cities across India. Search for any locality.</p>
          </div>
          <button className="btn-gold px-8 py-3 rounded-xl font-medium whitespace-nowrap">
            Search All Cities
          </button>
        </div>
      </div>
    </section>
  )
}
