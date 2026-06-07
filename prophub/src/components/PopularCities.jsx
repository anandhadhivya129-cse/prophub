import React from 'react'
import { MapPin, ArrowRight } from 'lucide-react'

const CITIES = [
  { name: 'Mumbai', listings: '18,400+', tagline: 'City of Dreams', gradient: 'from-[#8B7355] to-[#6F4E37]' },
  { name: 'Bengaluru', listings: '22,100+', tagline: 'Silicon Valley of India', gradient: 'from-[#7A6A58] to-[#5a4a38]' },
  { name: 'Delhi NCR', listings: '31,500+', tagline: 'Power Capital', gradient: 'from-[#6F4E37] to-[#5a3d2b]' },
  { name: 'Hyderabad', listings: '14,800+', tagline: 'City of Pearls', gradient: 'from-[#8B5A2B] to-[#6F4E37]' },
  { name: 'Chennai', listings: '11,200+', tagline: 'Gateway to South', gradient: 'from-[#5a7a5a] to-[#4a5a3a]' },
  { name: 'Pune', listings: '9,700+', tagline: 'Oxford of the East', gradient: 'from-[#7A6A58] to-[#6F4E37]' },
  { name: 'Kolkata', listings: '7,300+', tagline: 'City of Joy', gradient: 'from-[#8B7355] to-[#7A6A58]' },
  { name: 'Ahmedabad', listings: '8,100+', tagline: 'Manchester of India', gradient: 'from-[#6F4E37] to-[#7A6A58]' },
]

export default function PopularCities() {
  return (
    <section id="cities" className="py-20" style={{ background: 'linear-gradient(180deg, #F8F4EC 0%, #F5E6D3 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-3">Across India</p>
          <h2 className="section-title text-4xl md:text-5xl text-[#3E2C20] mb-4">
            Popular <span className="text-gold">Cities</span>
          </h2>
          <p className="text-[#7A6A58] max-w-xl mx-auto">
            Explore properties in India's most sought-after cities, from metro hubs to emerging tier-2 destinations.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CITIES.map((city, i) => (
            <div key={city.name}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group card-hover bg-gradient-to-br ${city.gradient} border border-[#E6D7C3]`}
              style={{ minHeight: i < 2 ? '200px' : '160px', animationDelay: `${i * .08}s` }}>
              
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10"
                style={{ background: 'radial-gradient(circle, #6F4E37 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
              <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full opacity-5"
                style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2C20]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative p-5 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-gold text-xs mb-1">
                    <MapPin size={11} />
                    <span className="font-medium">{city.listings} listings</span>
                  </div>
                  <h3 className="text-[#FFFFF0] font-heading font-bold text-xl leading-tight">{city.name}</h3>
                  <p className="text-[#F5E6D3] text-xs mt-1">{city.tagline}</p>
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
            <h3 className="font-heading text-2xl font-bold text-[#3E2C20] mb-1">Don't see your city?</h3>
            <p className="text-[#7A6A58] text-sm">We cover 500+ cities across India. Search for any locality.</p>
          </div>
          <button className="btn-gold px-8 py-3 rounded-xl font-medium whitespace-nowrap">
            Search All Cities
          </button>
        </div>
      </div>
    </section>
  )
}
