import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Building2, Mail, Lock, Eye, EyeOff, ArrowLeft, ShieldCheck } from 'lucide-react'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (email === 'admin@prophub.in' && password === 'admin123') {
      navigate('/admin/dashboard')
    } else {
      setError('Invalid credentials. Try admin@prophub.in / admin123')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'linear-gradient(135deg, #030e2e 0%, #061a47 60%, #0f2d62 100%)' }}>
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-gold mb-8 text-sm transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <div className="glass rounded-2xl p-8 border border-navy-700">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
              style={{ background: 'linear-gradient(135deg, #2c5699, #1a3f7d)' }}>
              <ShieldCheck size={26} className="text-gold" />
            </div>
            <h1 className="font-heading text-3xl font-bold text-white">Admin Portal</h1>
            <p className="text-slate-400 text-sm mt-1">Restricted access — PropHub staff only</p>
          </div>
          {error && <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl px-4 py-3 mb-5">{error}</div>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-slate-400 text-xs font-medium mb-1.5 block">Admin Email</label>
              <div className="relative">
                <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                  placeholder="admin@prophub.in"
                  className="w-full bg-navy-900 border border-navy-700 rounded-xl pl-9 pr-4 py-3 text-sm text-white placeholder-slate-600 transition-all" />
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
            <button type="submit" className="w-full py-3 rounded-xl font-semibold mt-2 transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #2c5699, #1a3f7d)', color: '#f5c842' }}>
              Admin Sign In
            </button>
          </form>
          <p className="text-center text-slate-500 text-sm mt-6">
            Customer? <Link to="/login" className="text-gold hover:underline">Customer Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
