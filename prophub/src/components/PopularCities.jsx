import React from 'react'
import { MapPin, TrendingUp } from 'lucide-react'

const CITIES = [
  { name: 'Mumbai', listings: '12,400+', img: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400', trend: '+8%' },
  { name: 'Bengaluru', listings: '9,800+', img: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400', trend: '+14%' },
  { name: 'Delhi NCR', listings: '11,200+', img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400', trend: '+6%' },
  { name: 'Hyderabad', listings: '7,600+', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400', trend: '+18%' },
  { name: 'Pune', listings: '6,900+', img: 'https://images.unsplash.com/photo-1625505826533-5c80aca7d157?w=400', trend: '+10%' },
  { name: 'Chennai', listings: '5,400+', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400', trend: '+9%' },
]

export default function PopularCities() {
  return (
    <section id="cities" className="py-20" style={{background:'linear-gradient(180deg, #003d3d 0%, #002a2a 100%)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{color:'#F5C000'}}>Explore by Location</p>
          <h2 className="section-title text-4xl md:text-5xl text-white">
            Popular <span style={{color:'#F5C000'}}>Cities</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CITIES.map((c, i) => (
            <div key={c.name} className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${i * .08}s`, opacity: 0, animationFillMode: 'forwards' }}>
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] card-hover">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-teal-800/80 backdrop-blur-sm px-2 py-0.5 rounded-full">
                  <TrendingUp size={10} style={{color:'#F5C000'}}/>
                  <span className="text-xs font-bold" style={{color:'#F5C000'}}>{c.trend}</span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <div className="text-white font-bold text-sm">{c.name}</div>
                  <div className="flex items-center gap-1 text-white/60 text-xs">
                    <MapPin size={10}/>{c.listings}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
