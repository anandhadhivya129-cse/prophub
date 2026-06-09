import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Building2, LayoutDashboard, List, Users, Settings, LogOut, TrendingUp, Eye, CheckCircle, Clock, Plus, Trash2, Edit, Search } from 'lucide-react'

const STATS = [
  { label: 'Total Listings', value: '1,284', change: '+12%', icon: List, color: 'bg-blue-500' },
  { label: 'Active Users', value: '38,492', change: '+8%', icon: Users, color: 'bg-green-500' },
  { label: 'Pending Approvals', value: '47', change: '-3', icon: Clock, color: 'bg-yellow-500' },
  { label: 'Revenue (₹)', value: '24.6L', change: '+19%', icon: TrendingUp, color: 'bg-purple-500' },
]

const LISTINGS = [
  { id: 1, title: '3BHK Sea View, Bandra', owner: 'Ravi Sharma', city: 'Mumbai', price: '₹3.2 Cr', status: 'Active' },
  { id: 2, title: '2BHK Apartment, Koramangala', owner: 'Anita Mehta', city: 'Bengaluru', price: '₹92 L', status: 'Pending' },
  { id: 3, title: 'Villa, Jubilee Hills', owner: 'Suresh Reddy', city: 'Hyderabad', price: '₹4.5 Cr', status: 'Active' },
  { id: 4, title: 'Studio, Whitefield', owner: 'Priya Singh', city: 'Bengaluru', price: '₹45 L', status: 'Inactive' },
  { id: 5, title: '4BHK Floor, South Extension', owner: 'Amit Khanna', city: 'Delhi', price: '₹2.8 Cr', status: 'Pending' },
]

export default function AdminDashboard() {
  const [tab, setTab] = useState('dashboard')
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const filtered = LISTINGS.filter(l =>
    l.title.toLowerCase().includes(search.toLowerCase()) ||
    l.owner.toLowerCase().includes(search.toLowerCase())
  )

  const statusColor = { Active: 'text-[#5a7a5a] bg-[#5a7a5a]/10', Pending: 'text-[#8B7355] bg-[#8B7355]/10', Inactive: 'text-[#8B5A2B] bg-[#8B5A2B]/10' }

  return (
    <div className="min-h-screen flex bg-teal-900/20">
      {/* Sidebar */}
      <aside className="w-60 glass border-r border-teal-700/30 flex flex-col py-6 px-4 fixed h-full z-30">
        <Link to="/" className="flex items-center gap-2 mb-10 px-2">
          <div className="w-8 h-8 gold-gradient rounded-lg flex items-center justify-center">
            <Building2 size={16} style={{ color: '#FFFFF0' }} />
          </div>
          <span className="font-heading text-xl font-bold text-white"><span className="text-white text-xs opacity-60">real estate </span>
              <span style={{color:"#F5C000"}} className="font-heading text-lg font-bold">ALAYAA</span></span>
        </Link>
        <nav className="flex-1 space-y-1">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
            { id: 'listings', label: 'Listings', icon: List },
            { id: 'users', label: 'Users', icon: Users },
            { id: 'settings', label: 'Settings', icon: Settings },
          ].map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => setTab(id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all
                ${tab === id ? 'bg-gold text-[#FFFFF0] font-semibold' : 'text-white/50 hover:bg-teal-700/30 hover:text-white'}`}>
              <Icon size={16} />{label}
            </button>
          ))}
        </nav>
        <button onClick={() => navigate('/')}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/40 hover:text-[#8B5A2B] hover:bg-[#8B5A2B]/10 transition-all mt-4">
          <LogOut size={16} /> Logout
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 ml-60 p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-heading text-3xl font-bold text-white mb-1">
            {tab === 'dashboard' ? 'Admin Dashboard' : tab === 'listings' ? 'Manage Listings' : tab === 'users' ? 'Users' : 'Settings'}
          </h1>
          <p className="text-white/40 text-sm mb-8">Welcome back, Admin</p>

          {tab === 'dashboard' && (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {STATS.map(({ label, value, change, icon: Icon, color }) => (
                  <div key={label} className="glass rounded-2xl p-5 border border-teal-700/30">
                    <div className={`w-10 h-10 ${color} bg-opacity-20 rounded-xl flex items-center justify-center mb-3`}>
                      <Icon size={18} className={color.replace('bg-', 'text-')} />
                    </div>
                    <div className="text-2xl font-bold text-white font-heading">{value}</div>
                    <div className="text-white/50 text-xs mt-0.5">{label}</div>
                    <div className="text-green-400 text-xs mt-1 font-medium">{change} this month</div>
                  </div>
                ))}
              </div>
              <div className="glass rounded-2xl border border-teal-700/30 p-6">
                <h2 className="text-white font-semibold mb-4">Recent Listings</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-white/40 border-b border-teal-700/30">
                        <th className="text-left pb-3 font-medium">Property</th>
                        <th className="text-left pb-3 font-medium">Owner</th>
                        <th className="text-left pb-3 font-medium">Price</th>
                        <th className="text-left pb-3 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-teal-700/20">
                      {LISTINGS.slice(0,4).map(l => (
                        <tr key={l.id}>
                          <td className="py-3 text-white">{l.title}</td>
                          <td className="py-3 text-white/50">{l.owner}</td>
                          <td className="py-3 text-gold font-semibold">{l.price}</td>
                          <td className="py-3">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColor[l.status]}`}>{l.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {tab === 'listings' && (
            <div className="glass rounded-2xl border border-teal-700/30 p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" />
                  <input value={search} onChange={e => setSearch(e.target.value)}
                    placeholder="Search listings..."
                    className="bg-teal-900/50 border border-teal-700/30 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-white/25 w-64 transition-all" />
                </div>
                <button className="btn-gold px-4 py-2.5 rounded-xl text-sm flex items-center gap-2">
                  <Plus size={14} /> Add Listing
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-white/40 border-b border-teal-700/30">
                      <th className="text-left pb-3 font-medium">Property</th>
                      <th className="text-left pb-3 font-medium">Owner</th>
                      <th className="text-left pb-3 font-medium">City</th>
                      <th className="text-left pb-3 font-medium">Price</th>
                      <th className="text-left pb-3 font-medium">Status</th>
                      <th className="text-left pb-3 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-teal-700/20">
                    {filtered.map(l => (
                      <tr key={l.id}>
                        <td className="py-3 text-white">{l.title}</td>
                        <td className="py-3 text-white/50">{l.owner}</td>
                        <td className="py-3 text-white/50">{l.city}</td>
                        <td className="py-3 text-gold font-semibold">{l.price}</td>
                        <td className="py-3">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColor[l.status]}`}>{l.status}</span>
                        </td>
                        <td className="py-3">
                          <div className="flex gap-2">
                            <button className="text-[#6F4E37] hover:text-[#5a3d2b] transition-colors"><Edit size={14} /></button>
                            <button className="text-[#8B5A2B] hover:text-[#6B3A1B] transition-colors"><Trash2 size={14} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {tab === 'users' && (
            <div className="glass rounded-2xl border border-teal-700/30 p-6 text-center py-16">
              <Users size={48} className="text-[#D2B48C] mx-auto mb-4" />
              <p className="text-white/50">User management panel coming soon.</p>
            </div>
          )}

          {tab === 'settings' && (
            <div className="glass rounded-2xl border border-teal-700/30 p-6 text-center py-16">
              <Settings size={48} className="text-[#D2B48C] mx-auto mb-4" />
              <p className="text-white/50">Settings panel coming soon.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
