import React from 'react'
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'

const FOOTER_LINKS = {
  'Buy Property': ['Apartments for Sale', 'Villas for Sale', 'Plots for Sale', 'New Projects', 'Builder Floors', 'Commercial'],
  'Rent Property': ['Flats for Rent', 'Houses for Rent', 'PG / Hostel', 'Office Space', 'Retail Space', 'Warehouse'],
  'Company': ['About Us', 'Careers', 'Media Coverage', 'Blog', 'Partner with Us', 'Advertise'],
  'Support': ['Help Center', 'Contact Us', 'Report Fraud', 'Privacy Policy', 'Terms & Conditions', 'Sitemap'],
}

const SOCIALS = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Youtube, href: '#' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#FFFFF0] border-t border-[#EDE0D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center shadow-lg">
                <Building2 size={22} style={{ color: '#FFFFF0' }} />
              </div>
              <span className="font-heading text-2xl font-bold text-[#3E2C20]">
                Prop<span className="text-gold">Hub</span>
              </span>
            </Link>
            <p className="text-[#9A8A78] text-sm leading-relaxed mb-6">
              India's most trusted real estate platform. Find your perfect home, office or investment with confidence.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-[#7A6A58]">
                <Phone size={14} className="text-gold shrink-0" />
                <span>1800-123-4567 (Toll Free)</span>
              </div>
              <div className="flex items-center gap-3 text-[#7A6A58]">
                <Mail size={14} className="text-gold shrink-0" />
                <span>support@prophub.in</span>
              </div>
              <div className="flex items-start gap-3 text-[#7A6A58]">
                <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                <span>PropHub HQ, Level 12, Trade Centre,<br />Bandra Kurla Complex, Mumbai 400051</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {SOCIALS.map(({ icon: Icon, href }, i) => (
                <a key={i} href={href}
                  className="w-9 h-9 rounded-xl bg-[#EDE0D0] border border-[#E6D7C3] flex items-center justify-center text-[#7A6A58] hover:text-gold hover:border-gold transition-all duration-200 hover:scale-110">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[#3E2C20] font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-[#9A8A78] text-sm hover:text-gold transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#EDE0D0] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#7A6A58] text-sm">
            © 2025 PropHub Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[#7A6A58] text-xs">We accept:</span>
            {['UPI', 'NEFT', 'IMPS', 'Cards'].map(m => (
              <span key={m} className="bg-[#EDE0D0] border border-[#E6D7C3] text-[#7A6A58] text-xs px-2.5 py-1 rounded-md">
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
