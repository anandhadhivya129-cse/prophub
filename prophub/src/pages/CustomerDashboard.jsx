import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Building2, Heart, Search, Bell, User, LogOut, MapPin, BedDouble, Bath, Maximize2, Home, Star, Phone } from 'lucide-react'

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

  const tagColor = { Featured:'bg-gold text-[#FFFFF0]', 'Hot Deal':'bg-red-500 text-[#3E2C20]', Premium:'bg-purple-500 text-[#3E2C20]' }

  return (
    <div className="min-h-screen flex bg-[#FFFFF0]">
      {/* Sidebar */}
      <aside className="w-56 glass border-r border-[#E6D7C3] flex flex-col py-6 px-4 fixed h-full z-30">
        <Link to="/" className="flex items-center gap-2 mb-10 px-2">
          <div className="w-8 h-8 gold-gradient rounded-lg flex items-center justify-center">
            <Building2 size={16} style={{ color: '#FFFFF0' }} />
          </div>
          <span className="font-heading text-xl font-bold text-[#3E2C20]"><span className="text-white text-sm">real estate </span><span className="text-gold">ALAYAA</span></span>
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
                ${tab === id ? 'bg-gold text-[#FFFFF0] font-semibold' : 'text-[#7A6A58] hover:bg-[#EDE0D0] hover:text-[#3E2C20]'}`}>
              <Icon size={16} />{label}
            </button>
          ))}
        </nav>
        <button onClick={() => navigate('/')}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[#9A8A78] hover:text-[#8B5A2B] hover:bg-[#8B5A2B]/10 transition-all">
          <LogOut size={16} /> Logout
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 ml-56 p-8">
        <div className="max-w-4xl mx-auto">
          {tab === 'home' && (
            <>
              <div className="mb-8">
                <h1 className="font-heading text-3xl font-bold text-[#3E2C20] mb-1">Hello, Rahul 👋</h1>
                <p className="text-[#9A8A78] text-sm">Here's what's happening with your property search.</p>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[{ label:'Saved', val:'3', icon:Heart },{ label:'Viewed', val:'12', icon:Search },{ label:'Contacted', val:'2', icon:Phone }].map(({ label, val, icon:Icon }) => (
                  <div key={label} className="glass rounded-2xl p-5 border border-[#E6D7C3] text-center">
                    <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon size={18} style={{ color:'#FFFFF0' }} />
                    </div>
                    <div className="text-2xl font-bold text-[#3E2C20] font-heading">{val}</div>
                    <div className="text-[#7A6A58] text-xs mt-0.5">{label} Properties</div>
                  </div>
                ))}
              </div>
              <div className="glass rounded-2xl border border-[#E6D7C3] p-6">
                <h2 className="text-[#3E2C20] font-semibold mb-4 flex items-center gap-2"><Star size={15} className="text-gold" /> Recommended For You</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {SAVED.slice(0,2).map(p => (
                    <div key={p.id} className="bg-[#F8F4EC] rounded-xl border border-[#E6D7C3] p-4 card-hover cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColor[p.tag]}`}>{p.tag}</span>
                        <Heart size={14} className="text-[#9A8A78]" />
                      </div>
                      <div className="text-gold font-heading font-bold text-lg">{p.price}</div>
                      <div className="text-[#3E2C20] text-sm font-medium mt-0.5">{p.title}</div>
                      <div className="flex items-center gap-1 text-[#9A8A78] text-xs mt-1"><MapPin size={11} className="text-gold" />{p.location}</div>
                      <div className="flex gap-3 mt-3 text-xs text-[#7A6A58]">
                        <span className="flex items-center gap-1"><BedDouble size={11} className="text-gold" />{p.beds}</span>
                        <span className="flex items-center gap-1"><Bath size={11} className="text-gold" />{p.baths}</span>
                        <span className="flex items-center gap-1"><Maximize2 size={11} className="text-gold" />{p.area}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {tab === 'saved' && (
            <>
              <h1 className="font-heading text-3xl font-bold text-[#3E2C20] mb-6">Saved Properties</h1>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {SAVED.map(p => (
                  <div key={p.id} className="bg-[#F8F4EC] rounded-2xl border border-[#E6D7C3] p-5 card-hover cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColor[p.tag]}`}>{p.tag}</span>
                      <button className="text-red-400 hover:scale-110 transition-transform"><Heart size={16} fill="currentColor" /></button>
                    </div>
                    <div className="text-gold font-heading font-bold text-xl">{p.price}</div>
                    <div className="text-[#3E2C20] font-medium mt-1">{p.title}</div>
                    <div className="flex items-center gap-1 text-[#9A8A78] text-xs mt-1 mb-3"><MapPin size={11} className="text-gold" />{p.location}</div>
                    <div className="border-t border-[#E6D7C3] pt-3 flex gap-4 text-xs text-[#7A6A58]">
                      <span className="flex items-center gap-1"><BedDouble size={11} className="text-gold" />{p.beds} Beds</span>
                      <span className="flex items-center gap-1"><Bath size={11} className="text-gold" />{p.baths} Baths</span>
                      <span className="flex items-center gap-1"><Maximize2 size={11} className="text-gold" />{p.area}</span>
                    </div>
                    <button className="mt-4 w-full btn-gold py-2 rounded-xl text-sm">Contact Agent</button>
                  </div>
                ))}
              </div>
            </>
          )}

          {tab === 'activity' && (
            <>
              <h1 className="font-heading text-3xl font-bold text-[#3E2C20] mb-6">Recent Activity</h1>
              <div className="glass rounded-2xl border border-[#E6D7C3] divide-y divide-[#EDE0D0]">
                {RECENT.map((r, i) => (
                  <div key={i} className="flex items-center justify-between p-5">
                    <div>
                      <span className="text-xs text-gold font-medium bg-gold/10 px-2 py-0.5 rounded-full mr-2">{r.label}</span>
                      <span className="text-[#3E2C20] text-sm">{r.text}</span>
                    </div>
                    <span className="text-[#9A8A78] text-xs whitespace-nowrap ml-4">{r.time}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {tab === 'profile' && (
            <>
              <h1 className="font-heading text-3xl font-bold text-[#3E2C20] mb-6">My Profile</h1>
              <div className="glass rounded-2xl border border-[#E6D7C3] p-8 text-center">
                <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <User size={36} style={{ color:'#FFFFF0' }} />
                </div>
                <h2 className="font-heading text-2xl text-[#3E2C20] font-bold">Rahul Kumar</h2>
                <p className="text-[#7A6A58] text-sm mt-1">user@prophub.in</p>
                <p className="text-[#9A8A78] text-xs mt-0.5">Member since January 2024</p>
                <button className="btn-gold px-8 py-2.5 rounded-xl mt-6 text-sm font-semibold">Edit Profile</button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
