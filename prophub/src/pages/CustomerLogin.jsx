import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, ArrowLeft, Phone } from 'lucide-react'

const AlayaaLogo = () => (
  <svg width="44" height="44" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="60" rx="10" fill="#F5C000"/>
    <polyline points="10,30 30,12 50,30" stroke="#002a2a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <rect x="18" y="30" width="24" height="16" rx="2" fill="#002a2a"/>
    <rect x="26" y="36" width="8" height="10" rx="1" fill="#F5C000"/>
  </svg>
)

export default function CustomerLogin() {
  const [tab, setTab] = useState('email')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (email === 'user@alayaa.in' && password === 'user123') {
      navigate('/dashboard')
    } else {
      setError('Demo: user@alayaa.in / user123')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4"
      style={{background:'linear-gradient(135deg, #002a2a 0%, #003d3d 60%, #005050 100%)'}}>
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center gap-2 text-white/40 hover:text-[#F5C000] mb-8 text-sm transition-colors">
          <ArrowLeft size={15}/> Back to Home
        </Link>
        <div className="glass rounded-2xl p-8">
          <div className="text-center mb-7">
            <div className="flex justify-center mb-4"><AlayaaLogo /></div>
            <div className="text-white text-xs tracking-widest uppercase mb-1 opacity-60">real estate</div>
            <div className="font-heading text-2xl font-bold" style={{color:'#F5C000'}}>ALAYAA</div>
            <p className="text-white/40 text-sm mt-2">Sign in to your account</p>
          </div>

          {/* Tab toggle */}
          <div className="flex glass rounded-xl p-1 mb-5">
            <button onClick={() => setTab('email')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${tab==='email'?'btn-gold':'text-white/50 hover:text-white'}`}>
              Email
            </button>
            <button onClick={() => setTab('phone')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${tab==='phone'?'btn-gold':'text-white/50 hover:text-white'}`}>
              Phone OTP
            </button>
          </div>

          {error && <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl px-4 py-3 mb-5">{error}</div>}

          {tab === 'email' ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-white/50 text-xs font-medium mb-1.5 block">Email Address</label>
                <div className="relative">
                  <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{color:'#F5C000'}}/>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                    placeholder="you@example.com"
                    className="w-full bg-teal-900/60 border border-teal-600/30 rounded-xl pl-9 pr-4 py-3 text-sm text-white placeholder-white/25 transition-all" />
                </div>
              </div>
              <div>
                <label className="text-white/50 text-xs font-medium mb-1.5 block">Password</label>
                <div className="relative">
                  <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{color:'#F5C000'}}/>
                  <input type={showPass ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} required
                    placeholder="••••••••"
                    className="w-full bg-teal-900/60 border border-teal-600/30 rounded-xl pl-9 pr-10 py-3 text-sm text-white placeholder-white/25 transition-all" />
                  <button type="button" onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-[#F5C000] transition-colors">
                    {showPass ? <EyeOff size={14}/> : <Eye size={14}/>}
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2 text-xs text-white/40 cursor-pointer">
                  <input type="checkbox" className="rounded" /> Remember me
                </label>
                <a href="#" className="text-xs" style={{color:'#F5C000'}}>Forgot Password?</a>
              </div>
              <button type="submit" className="w-full btn-gold py-3 rounded-xl font-semibold">Sign In</button>
            </form>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="text-white/50 text-xs font-medium mb-1.5 block">Mobile Number</label>
                <div className="relative">
                  <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{color:'#F5C000'}}/>
                  <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-teal-900/60 border border-teal-600/30 rounded-xl pl-9 pr-4 py-3 text-sm text-white placeholder-white/25 transition-all" />
                </div>
              </div>
              <button className="w-full btn-gold py-3 rounded-xl font-semibold">Send OTP</button>
              <p className="text-center text-white/30 text-xs">OTP will be sent to your registered mobile number</p>
            </div>
          )}

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px" style={{background:'rgba(0,110,110,.3)'}}/>
            <span className="text-white/30 text-xs">or continue with</span>
            <div className="flex-1 h-px" style={{background:'rgba(0,110,110,.3)'}}/>
          </div>

          <button className="w-full flex items-center justify-center gap-3 py-2.5 rounded-xl border border-teal-600/30 text-white/70 hover:border-[#F5C000] hover:text-white transition-all text-sm font-medium">
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#EA4335" d="M5.26 9.77A7.02 7.02 0 0 1 12 5c1.73 0 3.29.63 4.5 1.66L19.9 3.3A11.94 11.94 0 0 0 12 1C7.46 1 3.53 3.61 1.57 7.39l3.69 2.38z"/><path fill="#34A853" d="M16.04 18.01A6.98 6.98 0 0 1 12 19c-3.04 0-5.63-1.93-6.62-4.63L1.6 16.77C3.53 20.45 7.46 23 12 23c2.97 0 5.67-1.05 7.74-2.77l-3.7-2.22z"/><path fill="#4A90E2" d="M19.74 20.23A11.95 11.95 0 0 0 24 12c0-.7-.07-1.38-.18-2.04H12v4.55h6.74c-.3 1.6-1.19 2.96-2.44 3.72l3.44 2z"/><path fill="#FBBC05" d="M5.38 14.37A7 7 0 0 1 5 12c0-.83.14-1.63.38-2.38L1.57 7.4A11.94 11.94 0 0 0 0 12c0 1.89.44 3.68 1.22 5.27l4.16-2.9z"/></svg>
            Continue with Google
          </button>

          <p className="text-center text-white/30 text-sm mt-5">
            Are you a broker? <Link to="/broker/login" className="hover:underline" style={{color:'#F5C000'}}>Broker Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
