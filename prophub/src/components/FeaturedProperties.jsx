import React, { useState } from 'react'
import PropertyCard from './PropertyCard.jsx'
import { ArrowRight } from 'lucide-react'

const ALL_PROPERTIES = [
  { id:1, title:'Luxury 3BHK Sea View Apartment', location:'Bandra West, Mumbai', price:'₹3.2 Cr', beds:3, baths:2, area:'1,850 sq.ft', tag:'Featured', rating:4.9, reviews:38, type:'Apartment', verified:true },
  { id:2, title:'Modern 2BHK in Prime Locality', location:'Koramangala, Bengaluru', price:'₹92 L', beds:2, baths:2, area:'1,100 sq.ft', tag:'Hot Deal', rating:4.7, reviews:21, type:'Apartment', verified:true },
  { id:3, title:'Spacious Villa with Private Pool', location:'Jubilee Hills, Hyderabad', price:'₹4.5 Cr', beds:5, baths:4, area:'5,200 sq.ft', tag:'Premium', rating:5.0, reviews:12, type:'Villa', verified:true },
  { id:4, title:'Ready-to-Move 1BHK Studio', location:'Whitefield, Bengaluru', price:'₹45 L', beds:1, baths:1, area:'650 sq.ft', tag:'New Launch', rating:4.5, reviews:17, type:'Studio', verified:false },
  { id:5, title:'4BHK Independent Builder Floor', location:'South Extension, Delhi', price:'₹2.8 Cr', beds:4, baths:3, area:'3,200 sq.ft', tag:'Featured', rating:4.8, reviews:29, type:'Independent House', verified:true },
  { id:6, title:'Gated Community 3BHK Apartment', location:'OMR Road, Chennai', price:'₹78 L', beds:3, baths:2, area:'1,350 sq.ft', tag:'New Launch', rating:4.6, reviews:14, type:'Apartment', verified:true },
  { id:7, title:'Penthouse with Terrace Garden', location:'Powai, Mumbai', price:'₹5.8 Cr', beds:4, baths:4, area:'4,100 sq.ft', tag:'Premium', rating:4.9, reviews:8, type:'Penthouse', verified:true },
  { id:8, title:'Affordable 2BHK Near Metro', location:'Dwarka Sec 12, Delhi', price:'₹68 L', beds:2, baths:2, area:'980 sq.ft', tag:'Hot Deal', rating:4.4, reviews:32, type:'Apartment', verified:false },
]

const FILTERS = ['All', 'Buy', 'Rent', 'New Projects', 'Villa', 'Apartment']

export default function FeaturedProperties() {
  const [filter, setFilter] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const displayed = showAll ? ALL_PROPERTIES : ALL_PROPERTIES.slice(0, 6)

  return (
    <section id="featured" className="py-20 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <p className="text-gold text-sm font-medium tracking-widest uppercase mb-2">Handpicked for You</p>
            <h2 className="section-title text-4xl md:text-5xl text-white">
              Featured <span className="text-gold">Properties</span>
            </h2>
          </div>
          <a href="#" className="flex items-center gap-2 text-gold text-sm font-medium hover:gap-3 transition-all group">
            View all listings
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 flex-wrap mb-8">
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === f
                  ? 'btn-gold shadow-lg'
                  : 'bg-navy-800 text-slate-400 hover:bg-navy-700 hover:text-white border border-navy-700'
              }`}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((p, i) => (
            <div key={p.id} className="animate-fade-in-up"
              style={{ animationDelay: `${i * .07}s`, opacity: 0, animationFillMode: 'forwards' }}>
              <PropertyCard property={p} />
            </div>
          ))}
        </div>

        {/* Show More */}
        {!showAll && (
          <div className="text-center mt-10">
            <button onClick={() => setShowAll(true)}
              className="btn-outline px-8 py-3 rounded-xl font-medium text-sm">
              Load More Properties
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
