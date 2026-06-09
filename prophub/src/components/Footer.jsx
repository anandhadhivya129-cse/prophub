import React from 'react'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'

const AlayaaLogo = () => (
  <svg width="36" height="36" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="60" rx="10" fill="#F5C000"/>
    <polyline points="10,30 30,12 50,30" stroke="#002a2a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <rect x="18" y="30" width="24" height="16" rx="2" fill="#002a2a"/>
    <rect x="26" y="36" width="8" height="10" rx="1" fill="#F5C000"/>
  </svg>
)

const FOOTER_LINKS = {
  'Buy Property': ['Apartments for Sale','Villas for Sale','Plots for Sale','New Projects','Builder Floors','Commercial'],
  'Rent Property': ['Flats for Rent','Houses for Rent','PG / Hostel','Office Space','Retail Space','Warehouse'],
  'Company': ['About Us','Careers','Media Coverage','Blog','Partner with Us','Advertise'],
  'Support': ['Help Center','Contact Us','Report Fraud','Privacy Policy','Terms & Conditions','Sitemap'],
}

const SOCIALS = [
  { icon: Facebook, href: '#' },{ icon: Twitter, href: '#' },{ icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' },{ icon: Youtube, href: '#' },
]

export default function Footer() {
  return (
    <footer id="contact" style={{background:'#002a2a', borderTop:'1px solid rgba(0,96,96,.3)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <AlayaaLogo />
              <div className="leading-none">
                <div className="text-white text-[11px] font-light tracking-widest uppercase opacity-60">real estate</div>
                <div className="font-heading text-xl font-bold" style={{color:'#F5C000'}}>ALAYAA</div>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              India's most trusted real estate platform. Find your perfect home, office or investment with confidence.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-white/50"><Phone size={13} style={{color:'#F5C000'}} className="shrink-0"/><span>1800-123-4567 (Toll Free)</span></div>
              <div className="flex items-center gap-3 text-white/50"><Mail size={13} style={{color:'#F5C000'}} className="shrink-0"/><span>support@alayaa.in</span></div>
              <div className="flex items-start gap-3 text-white/50"><MapPin size={13} style={{color:'#F5C000'}} className="shrink-0 mt-0.5"/><span>ALAYAA HQ, Level 12, Trade Centre,<br/>Bandra Kurla Complex, Mumbai 400051</span></div>
            </div>
            <div className="flex gap-2.5 mt-6">
              {SOCIALS.map(({icon: Icon, href}, i) => (
                <a key={i} href={href}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white/40 hover:text-[#F5C000] transition-all duration-200 hover:scale-110"
                  style={{background:'rgba(0,80,80,.5)', border:'1px solid rgba(0,100,100,.3)'}}>
                  <Icon size={14}/>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white text-sm font-semibold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-white/40 text-sm hover:text-[#F5C000] transition-colors duration-200">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{borderTop:'1px solid rgba(0,96,96,.25)'}}>
          <p className="text-white/30 text-sm">© 2025 Real Estate ALAYAA. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="text-white/20 text-xs">We accept:</span>
            {['UPI','NEFT','IMPS','Cards'].map(m => (
              <span key={m} className="text-white/30 text-xs px-2.5 py-1 rounded-md"
                style={{background:'rgba(0,80,80,.5)',border:'1px solid rgba(0,100,100,.3)'}}>
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
