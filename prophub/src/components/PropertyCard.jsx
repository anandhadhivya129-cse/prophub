import React, { useState } from 'react'
import { Heart, MapPin, Bed, Bath, Maximize2, Star, BadgeCheck, Phone, MessageCircle } from 'lucide-react'

const BADGE_STYLE = {
  'Featured': 'badge-featured',
  'Hot Deal': 'badge-hot',
  'New Launch': 'badge-new',
  'Premium': 'badge-premium',
}

export default function PropertyCard({ property: p }) {
  const [saved, setSaved] = useState(false)
  return (
    <div className="card-teal card-hover overflow-hidden group">
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Badge */}
        {p.tag && (
          <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${BADGE_STYLE[p.tag] || 'badge-featured'}`}>
            {p.tag}
          </span>
        )}

        {/* Save */}
        <button onClick={() => setSaved(!saved)}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            saved ? 'bg-red-500 text-white' : 'bg-black/40 text-white/70 hover:bg-red-500 hover:text-white'
          }`}>
          <Heart size={14} fill={saved ? 'currentColor' : 'none'} />
        </button>

        {/* Price overlay */}
        <div className="absolute bottom-3 left-3 font-heading text-xl font-bold" style={{color:'#F5C000'}}>
          {p.price}
          <span className="text-white/60 text-xs font-normal ml-1">
            {p.tag === 'Hot Deal' ? '/ negotiable' : ''}
          </span>
        </div>

        {/* Verified */}
        {p.verified && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-teal-800/80 backdrop-blur-sm px-2 py-1 rounded-full">
            <BadgeCheck size={11} style={{color:'#F5C000'}} />
            <span className="text-xs text-white/90">Verified</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="text-white font-semibold text-sm leading-snug mb-1 line-clamp-2 group-hover:text-[#F5C000] transition-colors">{p.title}</h3>
        <div className="flex items-center gap-1 text-white/50 text-xs mb-3">
          <MapPin size={11} style={{color:'#F5C000'}} />
          <span>{p.location}</span>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 text-white/60 text-xs mb-4 border-t border-teal-600/20 pt-3">
          {p.beds && <span className="flex items-center gap-1"><Bed size={12}/> {p.beds} Bed</span>}
          {p.baths && <span className="flex items-center gap-1"><Bath size={12}/> {p.baths} Bath</span>}
          <span className="flex items-center gap-1"><Maximize2 size={12}/> {p.area}</span>
        </div>

        {/* Rating + Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star size={12} fill="#F5C000" style={{color:'#F5C000'}} />
            <span className="text-white/70 text-xs font-medium">{p.rating}</span>
            <span className="text-white/30 text-xs">({p.reviews})</span>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-teal-950 transition-all hover:shadow-md" style={{background:'#F5C000'}}>
              <Phone size={11}/> Contact
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold border border-teal-500/40 text-white/70 hover:border-[#F5C000] hover:text-[#F5C000] transition-all">
              <MessageCircle size={11}/> Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
