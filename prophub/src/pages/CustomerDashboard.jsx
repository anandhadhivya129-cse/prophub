import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Heart, Search, Bell, User, LogOut, MapPin, BedDouble, Bath, Maximize2, Home, Star, Phone } from 'lucide-react'

const AlayaaLogo = () => (
  <svg width="32" height="32" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="60" rx="10" fill="#F5C000"/>
    <polyline points="10,30 30,12 50,30" stroke="#002a2a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <rect x="18" y="30" width="24" height="16" rx="2" fill="#002a2a"/>
    <rect x="26" y="36" width="8" height="10" rx="1" fill="#F5C000"/>
  </svg>
)

const SAVED = [
  { id:1, title:'3BHK Sea View, Bandra', location:'Mumbai', price:'₹3.2 Cr', beds:3, baths:2, area:'1,850 sq.ft', tag:'Featured' },
  { id:2, title:'2BHK Koramangala', location:'Bengaluru', price:'₹92 L', beds:2, baths:2, area:'1,100 sq.ft', tag:'Hot Deal' },
  { id:3, title:'Villa, Jubilee Hills', location:'Hyderabad', price:'₹4.5 Cr', beds:5, baths:4, area:'5,200 sq.ft', tag:'Premium' },
]

const RECENT = [
  { label:'Searched', text:'3BHK in Mumbai under ₹3Cr', time:'2 hours ago' },
  { label:'Viewed', text:'Spacious Villa, Jubilee Hills', time:'Yesterday' },
  { label:'Contacted', text:'Agent for Studio, Whitefield', time:'3 days ago' },
]

export default function CustomerDashboard() {
  const [tab, setTab] = useState('home')
  const navigate = useNavigate()

  const tagStyle = {
    Featured: { background:'#F5C000', color:'#002a2a' },
    'Hot Deal': { background:'#e53935', color:'#fff' },
    Premium: { background:'#7c3aed', color:'#fff' }
  }

  return (
    <div className="min-h-screen flex" style={{background:'#003d3d'}}>
      {/* Sidebar */}
      <aside className="w-56 glass-dark border-r flex flex-col py-6 px-4 fixed h-full z-30"
        style={{borderColor:'rgba(0,110,110,.3)'}}>
        <Link to="/" className="flex items-center gap-2.5 mb-10 px-2">
          <AlayaaLogo />
          <div className="leading-none">
            <div className="text-white text-[10px] font-light tracking-widest uppercase opacity-50">real estate</div>
            <div className="font-heading text-base font-bold" style={{color:'#F5C000'}}>ALAYAA</div>
          </div>
        </Link>
        <nav className="flex-1 space-y-1">
          {[
            { id:'home', label:'Overview', icon:Home },
            { id:'saved', label:'Saved', icon:Heart },
            { id:'activity', label:'Activity', icon:Bell },
            { id:'profile', label:'Profile', icon:User },
          ].map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => setTab(id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all
                ${tab === id ? 'btn-gold font-semibold' : 'text-white/50 hover:bg-teal-700/30 hover:text-white'}`}>
              <Icon size={16} />{label}
            </button>
          ))}
        </nav>
        <button onClick={() => navigate('/')}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/30 hover:text-red-400 hover:bg-red-400/10 transition-all">
          <LogOut size={16} /> Logout
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 ml-56 p-8">
        <div className="max-w-4xl mx-auto">

          {tab === 'home' && (
            <>
              <div className="mb-8">
                <h1 className="font-heading text-3xl font-bold text-white mb-1">Hello, Rahul 👋</h1>
                <p className="text-white/40 text-sm">Here's what's happening with your property search.</p>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[{ label:'Saved', val:'3', icon:Heart },{ label:'Viewed', val:'12', icon:Search },{ label:'Contacted', val:'2', icon:Phone }].map(({ label, val, icon:Icon }) => (
                  <div key={label} className="glass rounded-2xl p-5 text-center">
                    <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon size={18} style={{ color:'#002a2a' }} />
                    </div>
                    <div className="text-2xl font-bold text-white font-heading">{val}</div>
                    <div className="text-white/40 text-xs mt-0.5">{label} Properties</div>
                  </div>
                ))}
              </div>
              <div className="glass rounded-2xl p-6">
                <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Star size={15} style={{color:'#F5C000'}} /> Recommended For You
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {SAVED.slice(0,2).map(p => (
                    <div key={p.id} className="card-teal p-4 card-hover cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={tagStyle[p.tag]}>{p.tag}</span>
                        <Heart size={14} className="text-white/30" />
                      </div>
                      <div className="font-heading font-bold text-lg" style={{color:'#F5C000'}}>{p.price}</div>
                      <div className="text-white text-sm font-medium mt-0.5">{p.title}</div>
                      <div className="flex items-center gap-1 text-white/40 text-xs mt-1">
                        <MapPin size={11} style={{color:'#F5C000'}} />{p.location}
                      </div>
                      <div className="flex gap-3 mt-3 text-xs text-white/40">
                        <span className="flex items-center gap-1"><BedDouble size={11} style={{color:'#F5C000'}} />{p.beds}</span>
                        <span className="flex items-center gap-1"><Bath size={11} style={{color:'#F5C000'}} />{p.baths}</span>
                        <span className="flex items-center gap-1"><Maximize2 size={11} style={{color:'#F5C000'}} />{p.area}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {tab === 'saved' && (
            <>
              <h1 className="font-heading text-3xl font-bold text-white mb-6">Saved Properties</h1>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {SAVED.map(p => (
                  <div key={p.id} className="card-teal p-5 card-hover cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={tagStyle[p.tag]}>{p.tag}</span>
                      <button className="text-red-400 hover:scale-110 transition-transform"><Heart size={16} fill="currentColor" /></button>
                    </div>
                    <div className="font-heading font-bold text-xl" style={{color:'#F5C000'}}>{p.price}</div>
                    <div className="text-white font-medium mt-1">{p.title}</div>
                    <div className="flex items-center gap-1 text-white/40 text-xs mt-1 mb-3">
                      <MapPin size={11} style={{color:'#F5C000'}} />{p.location}
                    </div>
                    <div className="border-t pt-3 flex gap-4 text-xs text-white/40" style={{borderColor:'rgba(0,110,110,.3)'}}>
                      <span className="flex items-center gap-1"><BedDouble size={11} style={{color:'#F5C000'}} />{p.beds} Beds</span>
                      <span className="flex items-center gap-1"><Bath size={11} style={{color:'#F5C000'}} />{p.baths} Baths</span>
                      <span className="flex items-center gap-1"><Maximize2 size={11} style={{color:'#F5C000'}} />{p.area}</span>
                    </div>
                    <button className="mt-4 w-full btn-gold py-2 rounded-xl text-sm">Contact Agent</button>
                  </div>
                ))}
              </div>
            </>
          )}

          {tab === 'activity' && (
            <>
              <h1 className="font-heading text-3xl font-bold text-white mb-6">Recent Activity</h1>
              <div className="glass rounded-2xl divide-y" style={{borderColor:'rgba(0,110,110,.3)'}}>
                {RECENT.map((r, i) => (
                  <div key={i} className="flex items-center justify-between p-5">
                    <div>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full mr-2"
                        style={{background:'rgba(245,192,0,.15)', color:'#F5C000'}}>{r.label}</span>
                      <span className="text-white text-sm">{r.text}</span>
                    </div>
                    <span className="text-white/30 text-xs whitespace-nowrap ml-4">{r.time}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {tab === 'profile' && (
            <>
              <h1 className="font-heading text-3xl font-bold text-white mb-6">My Profile</h1>
              <div className="glass rounded-2xl p-8 text-center">
                <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <User size={36} style={{ color:'#002a2a' }} />
                </div>
                <h2 className="font-heading text-2xl text-white font-bold">Rahul Kumar</h2>
                <p className="text-white/50 text-sm mt-1">user@alayaa.in</p>
                <p className="text-white/30 text-xs mt-0.5">Member since January 2024</p>
                <button className="btn-gold px-8 py-2.5 rounded-xl mt-6 text-sm font-semibold">Edit Profile</button>
              </div>
            </>
          )}

        </div>
      </main>
    </div>
  )
}
