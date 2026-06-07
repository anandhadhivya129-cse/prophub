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
    Featured: 'bg-gold text-[#FFFFF0]',
    'New Launch': 'bg-[#8B7355] text-[#FFFFF0]',
    'Hot Deal': 'bg-[#8B5A2B] text-[#FFFFF0]',
    Premium: 'bg-[#6F4E37] text-[#FFFFF0]',
  }[tag] || 'bg-[#D2B48C] text-[#3E2C20]'

  return (
    <div className="card-hover bg-[#F8F4EC] rounded-2xl overflow-hidden border border-[#E6D7C3] group cursor-pointer">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        {img ? (
          <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full navy-gradient flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
            <Building2 size={48} className="text-[#D2B48C]" />
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#3E2C20]/60 via-transparent to-transparent" />

        {/* Tag */}
        <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${tagColor}`}>
          {tag}
        </span>

        {/* Like */}
        <button onClick={e => { e.stopPropagation(); setLiked(!liked) }}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all
            ${liked ? 'bg-[#8B5A2B] text-[#FFFFF0]' : 'bg-[#F8F4EC]/70 text-[#7A6A58] hover:bg-[#E6D7C3]'}`}>
          <Heart size={14} fill={liked ? 'currentColor' : 'none'} />
        </button>

        {/* Verified */}
        {verified && (
          <span className="absolute bottom-3 left-3 flex items-center gap-1 bg-[#6F4E37]/15 border border-[#6F4E37]/30 text-[#6F4E37] text-xs px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6F4E37] inline-block"></span>
            Verified
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Price */}
        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-gold font-heading text-xl font-bold">{price}</span>
          <span className="text-[#9A8A78] text-xs">{priceLabel}</span>
        </div>

        {/* Title */}
        <h3 className="text-[#3E2C20] font-semibold text-sm mb-1 truncate group-hover:text-gold transition-colors">{title}</h3>

        {/* Location */}
        <div className="flex items-center gap-1 text-[#9A8A78] text-xs mb-3">
          <MapPin size={12} className="text-gold shrink-0" />
          <span className="truncate">{location}</span>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E6D7C3] mb-3" />

        {/* Specs */}
        <div className="flex items-center justify-between text-[#7A6A58] text-xs">
          <div className="flex items-center gap-1">
            <BedDouble size={13} className="text-gold" />
            <span>{beds} Beds</span>
          </div>
          <div className="w-px h-3 bg-[#E6D7C3]" />
          <div className="flex items-center gap-1">
            <Bath size={13} className="text-gold" />
            <span>{baths} Baths</span>
          </div>
          <div className="w-px h-3 bg-[#E6D7C3]" />
          <div className="flex items-center gap-1">
            <Maximize2 size={13} className="text-gold" />
            <span>{area}</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1">
            <Star size={12} className="text-gold fill-gold" />
            <span className="text-[#3E2C20] text-xs font-medium">{rating}</span>
            <span className="text-[#9A8A78] text-xs">({reviews})</span>
          </div>
          <button className="btn-gold text-xs px-3 py-1.5 rounded-lg">
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}
