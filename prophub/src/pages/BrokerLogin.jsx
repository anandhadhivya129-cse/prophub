import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, ArrowLeft, Phone, User, Building2, CheckCircle } from 'lucide-react'

const AlayaaLogo = () => (
  <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="60" rx="10" fill="#F5C000"/>
    <polyline points="10,30 30,12 50,30" stroke="#002a2a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <rect x="18" y="30" width="24" height="16" rx="2" fill="#002a2a"/>
    <rect x="26" y="36" width="8" height="10" rx="1" fill="#F5C000"/>
  </svg>
)

const PERKS = [
  'Free property listing — unlimited',
  '5x more leads vs other portals',
  'Dedicated broker dashboard',
  'Direct buyer enquiry notifications',
  'Priority search visibility',
]

export default function BrokerLogin() {
  const [mode, setMode] = useState('login') // 'login' | 'register'
  const [form, setForm] = useState({ name: '', phone: '', email: '', password: '', rera: '' })
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (form.email === 'broker@alayaa.in' && form.password === 'broker123') {
      navigate('/dashboard')
    } else {
      setError('Demo: broker@alayaa.in / broker123')
    }
  }

  const handleRegister = (e) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex" style={{background:'linear-gradient(135deg, #002a2a 0%, #003d3d 100%)'}}>
      {/* Left Panel – Perks */}
      <div className="hidden lg:flex flex-col justify-center w-2/5 px-12 py-16"
        style={{background:'rgba(0,42,42,.6)', borderRight:'1px solid rgba(0,110,110,.2)'}}>
        <Link to="/" className="flex items-center gap-2.5 mb-12">
          <AlayaaLogo />
          <div className="leading-none">
            <div className="text-white text-[11px] font-light tracking-widest uppercase">real estate</div>
            <div className="font-heading text-xl font-bold" style={{color:'#F5C000'}}>ALAYAA</div>
          </div>
        </Link>
        <h2 className="font-heading text-3xl font-bold text-white mb-3">
          Grow Your Real<br />Estate Business
        </h2>
        <p className="text-white/50 mb-8 text-sm leading-relaxed">
          Join 8,000+ verified brokers and agents across India who trust ALAYAA to generate quality leads.
        </p>
        <ul className="space-y-3">
          {PERKS.map(p => (
            <li key={p} className="flex items-start gap-3 text-white/70 text-sm">
              <CheckCircle size={16} className="shrink-0 mt-0.5" style={{color:'#F5C000'}} />
              {p}
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-2 gap-3 mt-10">
          {[
            {label:'Avg. Monthly Leads', value:'120+'},
            {label:'Active Agents', value:'8,000+'},
          ].map(s => (
            <div key={s.label} className="glass rounded-xl p-4 text-center">
              <div className="text-2xl font-bold font-heading" style={{color:'#F5C000'}}>{s.value}</div>
              <div className="text-white/40 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel – Form */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-12">
        <div className="w-full max-w-md">
          <Link to="/" className="flex items-center gap-2 text-white/40 hover:text-[#F5C000] mb-8 text-sm transition-colors">
            <ArrowLeft size={15}/> Back to Home
          </Link>

          {/* Toggle */}
          <div className="flex glass rounded-xl p-1 mb-6">
            <button onClick={() => setMode('login')}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${mode === 'login' ? 'btn-gold' : 'text-white/50 hover:text-white'}`}>
              Broker Login
            </button>
            <button onClick={() => setMode('register')}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${mode === 'register' ? 'btn-gold' : 'text-white/50 hover:text-white'}`}>
              Register Free
            </button>
          </div>

          <div className="glass rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="lg:hidden mb-4 flex justify-center"><AlayaaLogo /></div>
              <h1 className="font-heading text-2xl font-bold text-white">
                {mode === 'login' ? 'Broker / Agent Login' : 'Create Broker Account'}
              </h1>
              <p className="text-white/40 text-sm mt-1">
                {mode === 'login' ? 'Access your dashboard and manage listings' : 'Start generating leads for free today'}
              </p>
            </div>

            {error && <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl px-4 py-3 mb-5">{error}</div>}

            {mode === 'login' ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="text-white/50 text-xs font-medium mb-1.5 block">Email / Phone</label>
                  <div className="relative">
                    <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{color:'#F5C000'}}/>
                    <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required
                      placeholder="broker@email.com"
                      className="w-full bg-teal-900/60 border border-teal-600/30 rounded-xl pl-9 pr-4 py-3 text-sm text-white placeholder-white/25 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="text-white/50 text-xs font-medium mb-1.5 block">Password</label>
                  <div className="relative">
                    <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{color:'#F5C000'}}/>
                    <input type={showPass ? 'text' : 'password'} value={form.password} onChange={e => setForm({...form, password: e.target.value})} required
                      placeholder="••••••••"
                      className="w-full bg-teal-900/60 border border-teal-600/30 rounded-xl pl-9 pr-10 py-3 text-sm text-white placeholder-white/25 transition-all" />
                    <button type="button" onClick={() => setShowPass(!showPass)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-[#F5C000] transition-colors">
                      {showPass ? <EyeOff size={14}/> : <Eye size={14}/>}
                    </button>
                  </div>
                </div>
                <div className="flex justify-end">
                  <a href="#" className="text-xs" style={{color:'#F5C000'}}>Forgot Password?</a>
                </div>
                <button type="submit" className="w-full btn-gold py-3 rounded-xl font-semibold">Sign In to Dashboard</button>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-3">
                {[
                  { field:'name', label:'Full Name', icon: User, type:'text', ph:'Your full name' },
                  { field:'phone', label:'Mobile Number', icon: Phone, type:'tel', ph:'+91 98765 43210' },
                  { field:'email', label:'Email Address', icon: Mail, type:'email', ph:'your@email.com' },
                  { field:'rera', label:'RERA Number (optional)', icon: Building2, type:'text', ph:'MAHA12345678' },
                ].map(({ field, label, icon: Icon, type, ph }) => (
                  <div key={field}>
                    <label className="text-white/50 text-xs font-medium mb-1.5 block">{label}</label>
                    <div className="relative">
                      <Icon size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{color:'#F5C000'}}/>
                      <input type={type} value={form[field]} onChange={e => setForm({...form, [field]: e.target.value})}
                        required={field !== 'rera'} placeholder={ph}
                        className="w-full bg-teal-900/60 border border-teal-600/30 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-white/25 transition-all" />
                    </div>
                  </div>
                ))}
                <div>
                  <label className="text-white/50 text-xs font-medium mb-1.5 block">Password</label>
                  <div className="relative">
                    <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{color:'#F5C000'}}/>
                    <input type={showPass ? 'text' : 'password'} value={form.password} onChange={e => setForm({...form, password: e.target.value})} required
                      placeholder="Create a strong password"
                      className="w-full bg-teal-900/60 border border-teal-600/30 rounded-xl pl-9 pr-10 py-2.5 text-sm text-white placeholder-white/25 transition-all" />
                    <button type="button" onClick={() => setShowPass(!showPass)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-[#F5C000] transition-colors">
                      {showPass ? <EyeOff size={14}/> : <Eye size={14}/>}
                    </button>
                  </div>
                </div>
                <p className="text-white/30 text-xs">By registering, you agree to ALAYAA's Terms & Privacy Policy.</p>
                <button type="submit" className="w-full btn-gold py-3 rounded-xl font-semibold">Create Free Account</button>
              </form>
            )}

            <p className="text-center text-white/30 text-sm mt-5">
              Not a broker? <Link to="/login" className="hover:underline" style={{color:'#F5C000'}}>Customer Login</Link>
              {' · '}
              <Link to="/admin/login" className="hover:underline" style={{color:'#F5C000'}}>Admin</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
