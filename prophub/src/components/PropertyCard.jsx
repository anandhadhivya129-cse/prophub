import React, { useState } from 'react'
import { Heart, MapPin, BedDouble, Bath, Maximize2, Star, Building2 } from 'lucide-react'

export default function PropertyCard({ property }) {
  const [liked, setLiked] = useState(false)

  const {
    title = 'Luxury 3BHK Apartment',
    location = 'Bandra West, Mumbai',
    price = '₹1.85 Cr',
    priceLabel = 'onwards',
    type = 'Apartment',
    beds = 3,
    baths = 2,
    area = '1,450 sq.ft',
    tag = 'Featured',
    rating = 4.8,
    reviews = 24,
    img,
    verified = true,
  } = property || {}

  const tagColor = {
    Featured: 'bg-gold text-navy-950',
    'New Launch': 'bg-green-500 text-white',
    'Hot Deal': 'bg-red-500 text-white',
    Premium: 'bg-purple-500 text-white',
  }[tag] || 'bg-navy-600 text-white'

  return (
    <div className="card-hover bg-navy-900 rounded-2xl overflow-hidden border border-navy-700 group cursor-pointer">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        {img ? (
          <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full navy-gradient flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
            <Building2 size={48} className="text-navy-600" />
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

        {/* Tag */}
        <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${tagColor}`}>
          {tag}
        </span>

        {/* Like */}
        <button onClick={e => { e.stopPropagation(); setLiked(!liked) }}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all
            ${liked ? 'bg-red-500 text-white' : 'bg-navy-900/70 text-slate-400 hover:bg-navy-700'}`}>
          <Heart size={14} fill={liked ? 'currentColor' : 'none'} />
        </button>

        {/* Verified */}
        {verified && (
          <span className="absolute bottom-3 left-3 flex items-center gap-1 bg-green-500/20 border border-green-500/30 text-green-400 text-xs px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
            Verified
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Price */}
        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-gold font-heading text-xl font-bold">{price}</span>
          <span className="text-slate-500 text-xs">{priceLabel}</span>
        </div>

        {/* Title */}
        <h3 className="text-white font-semibold text-sm mb-1 truncate group-hover:text-gold transition-colors">{title}</h3>

        {/* Location */}
        <div className="flex items-center gap-1 text-slate-500 text-xs mb-3">
          <MapPin size={12} className="text-gold shrink-0" />
          <span className="truncate">{location}</span>
        </div>

        {/* Divider */}
        <div className="border-t border-navy-700 mb-3" />

        {/* Specs */}
        <div className="flex items-center justify-between text-slate-400 text-xs">
          <div className="flex items-center gap-1">
            <BedDouble size={13} className="text-gold" />
            <span>{beds} Beds</span>
          </div>
          <div className="w-px h-3 bg-navy-700" />
          <div className="flex items-center gap-1">
            <Bath size={13} className="text-gold" />
            <span>{baths} Baths</span>
          </div>
          <div className="w-px h-3 bg-navy-700" />
          <div className="flex items-center gap-1">
            <Maximize2 size={13} className="text-gold" />
            <span>{area}</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1">
            <Star size={12} className="text-gold fill-gold" />
            <span className="text-white text-xs font-medium">{rating}</span>
            <span className="text-slate-500 text-xs">({reviews})</span>
          </div>
          <button className="btn-gold text-xs px-3 py-1.5 rounded-lg">
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}
