import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Building2, Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react'

export default function CustomerLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (email === 'user@alayaa.in' && password === 'user123') {
      navigate('/dashboard')
    } else {
      setError('Invalid credentials. Try user@alayaa.in / user123')
    }
  }

  return (
    <div className="min-h-screen bg-[#FFFFF0] flex items-center justify-center px-4"
      style={{ background: 'linear-gradient(135deg, #031e1a 0%, #07302b 60%, #0e4840 100%)' }}>
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-gold mb-8 text-sm transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <div className="glass rounded-2xl p-8 border border-navy-700">
          <div className="text-center mb-8">
            <div className="w-14 h-14 gold-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Building2 size={26} style={{ color: '#031e1a' }} />
            </div>
            <h1 className="font-heading text-3xl font-bold text-white">Welcome Back</h1>
            <p className="text-slate-400 text-sm mt-1">Sign in to your ALAYAA account</p>
          </div>
          {error && <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl px-4 py-3 mb-5">{error}</div>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-slate-400 text-xs font-medium mb-1.5 block">Email Address</label>
              <div className="relative">
                <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                  placeholder="you@example.com"
                  className="w-full bg-[#F8F4EC] border border-[#E6D7C3] rounded-xl pl-9 pr-4 py-3 text-sm text-[#3E2C20] placeholder-[#C4A882] transition-all" />
              </div>
            </div>
            <div>
              <label className="text-slate-400 text-xs font-medium mb-1.5 block">Password</label>
              <div className="relative">
                <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" />
                <input type={showPass ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} required
                  placeholder="••••••••"
                  className="w-full bg-navy-900 border border-navy-700 rounded-xl pl-9 pr-10 py-3 text-sm text-white placeholder-slate-600 transition-all" />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-gold transition-colors">
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>
            <button type="submit" className="w-full btn-gold py-3 rounded-xl font-semibold mt-2">Sign In</button>
          </form>
          <p className="text-center text-slate-500 text-sm mt-6">
            Are you an admin? <Link to="/admin/login" className="text-gold hover:underline">Admin Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
