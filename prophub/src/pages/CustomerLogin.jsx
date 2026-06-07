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
    if (email === 'user@prophub.in' && password === 'user123') {
      navigate('/dashboard')
    } else {
      setError('Invalid credentials. Try user@prophub.in / user123')
    }
  }

  return (
    <div className="min-h-screen bg-[#FFFFF0] flex items-center justify-center px-4"
      style={{ background: 'linear-gradient(135deg, #F8F4EC 0%, #F5E6D3 60%, #EDE0D0 100%)' }}>
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center gap-2 text-[#7A6A58] hover:text-gold mb-8 text-sm transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <div className="glass rounded-2xl p-8 border border-[#E6D7C3]">
          <div className="text-center mb-8">
            <div className="w-14 h-14 gold-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Building2 size={26} style={{ color: '#FFFFF0' }} />
            </div>
            <h1 className="font-heading text-3xl font-bold text-[#3E2C20]">Welcome Back</h1>
            <p className="text-[#7A6A58] text-sm mt-1">Sign in to your PropHub account</p>
          </div>
          {error && <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl px-4 py-3 mb-5">{error}</div>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-[#7A6A58] text-xs font-medium mb-1.5 block">Email Address</label>
              <div className="relative">
                <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                  placeholder="you@example.com"
                  className="w-full bg-[#F8F4EC] border border-[#E6D7C3] rounded-xl pl-9 pr-4 py-3 text-sm text-[#3E2C20] placeholder-[#C4A882] transition-all" />
              </div>
            </div>
            <div>
              <label className="text-[#7A6A58] text-xs font-medium mb-1.5 block">Password</label>
              <div className="relative">
                <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" />
                <input type={showPass ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} required
                  placeholder="••••••••"
                  className="w-full bg-[#F8F4EC] border border-[#E6D7C3] rounded-xl pl-9 pr-10 py-3 text-sm text-[#3E2C20] placeholder-[#C4A882] transition-all" />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9A8A78] hover:text-gold transition-colors">
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>
            <button type="submit" className="w-full btn-gold py-3 rounded-xl font-semibold mt-2">Sign In</button>
          </form>
          <p className="text-center text-[#9A8A78] text-sm mt-6">
            Are you an admin? <Link to="/admin/login" className="text-gold hover:underline">Admin Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
