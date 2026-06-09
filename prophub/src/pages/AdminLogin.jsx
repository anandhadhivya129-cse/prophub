import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, ArrowLeft, ShieldCheck } from 'lucide-react'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (email === 'admin@alayaa.in' && password === 'admin123') {
      navigate('/admin/dashboard')
    } else {
      setError('Demo: admin@alayaa.in / admin123')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4"
      style={{background:'linear-gradient(135deg, #002a2a 0%, #001a1a 100%)'}}>
      <div className="w-full max-w-sm">
        <Link to="/" className="flex items-center gap-2 text-white/40 hover:text-[#F5C000] mb-8 text-sm transition-colors">
          <ArrowLeft size={15}/> Back to Home
        </Link>
        <div className="glass rounded-2xl p-8">
          <div className="text-center mb-7">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
              style={{background:'linear-gradient(135deg, #F5C000, #d4a200)'}}>
              <ShieldCheck size={26} style={{color:'#002a2a'}}/>
            </div>
            <h1 className="font-heading text-2xl font-bold text-white">Admin Login</h1>
            <p className="text-white/40 text-sm mt-1">Platform administration access</p>
          </div>
          {error && <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl px-4 py-3 mb-5">{error}</div>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-white/50 text-xs font-medium mb-1.5 block">Admin Email</label>
              <div className="relative">
                <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{color:'#F5C000'}}/>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                  placeholder="admin@alayaa.in"
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
            <button type="submit" className="w-full btn-gold py-3 rounded-xl font-semibold mt-2">Admin Sign In</button>
          </form>
          <p className="text-center text-white/30 text-sm mt-5">
            Not admin? <Link to="/login" className="hover:underline" style={{color:'#F5C000'}}>Customer Login</Link>
            {' · '}
            <Link to="/broker/login" className="hover:underline" style={{color:'#F5C000'}}>Broker</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
