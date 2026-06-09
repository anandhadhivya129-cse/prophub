import React from 'react'
import Navbar from '../components/Navbar.jsx'
import HeroSection from '../components/HeroSection.jsx'
import FeaturedProperties from '../components/FeaturedProperties.jsx'
import PopularCities from '../components/PopularCities.jsx'
import Footer from '../components/Footer.jsx'
import {
  Shield, Clock, Award, Headphones,
  Home as HomeIcon, Building2, TrendingUp, Calculator,
  FileText, Users, Star, CheckCircle, ArrowRight,
  MapPin, IndianRupee, BarChart3, Lightbulb
} from 'lucide-react'

const WHY_US = [
  { icon: Shield, title: 'Verified Listings', desc: 'Every property personally verified by certified agents before going live.' },
  { icon: Clock, title: 'Quick Closures', desc: 'Connect with owners directly — no middlemen, faster decisions.' },
  { icon: Award, title: 'Award Winning', desc: 'Rated #1 real estate platform in India for 3 consecutive years.' },
  { icon: Headphones, title: '24/7 Support', desc: 'Expert property consultants available round the clock for you.' },
]

const SERVICES = [
  { icon: HomeIcon, title: 'Home Loans', desc: 'Compare 30+ banks. Get pre-approved in 24 hours. Best interest rates.', cta: 'Check Eligibility', color: '#F5C000' },
  { icon: Calculator, title: 'EMI Calculator', desc: 'Plan your budget with our smart EMI calculator. Know your affordability.', cta: 'Calculate Now', color: '#60a5fa' },
  { icon: FileText, title: 'Legal Assistance', desc: 'Expert lawyers for property registration, agreement drafting & verification.', cta: 'Get Help', color: '#4ade80' },
  { icon: TrendingUp, title: 'Investment Advisor', desc: 'Data-driven insights to find the best ROI properties across India.', cta: 'Explore', color: '#fb923c' },
  { icon: BarChart3, title: 'Market Trends', desc: 'Real-time price trends, demand analytics, and neighbourhood reports.', cta: 'View Reports', color: '#c084fc' },
  { icon: Lightbulb, title: 'Vastu Consultant', desc: 'Certified Vastu experts to evaluate and guide your property purchase.', cta: 'Consult Free', color: '#f472b6' },
]

const PROPERTY_TYPES = [
  { label: 'Apartments', icon: Building2, count: '24,000+ listings' },
  { label: 'Villas', icon: HomeIcon, count: '6,800+ listings' },
  { label: 'Plots', icon: MapPin, count: '9,200+ listings' },
  { label: 'Commercial', icon: BarChart3, count: '4,100+ listings' },
  { label: 'New Projects', icon: TrendingUp, count: '1,500+ projects' },
  { label: 'PG / Rental', icon: Users, count: '18,000+ options' },
]

const TESTIMONIALS = [
  { name: 'Priya Sharma', city: 'Mumbai', text: 'Found my dream 3BHK in just 2 weeks! The verified listings saved so much time. Highly recommend ALAYAA to everyone.', rating: 5, type: 'Buyer' },
  { name: 'Rahul Mehta', city: 'Bengaluru', text: 'As a broker, the platform gives me unmatched reach. My listings get 5x more enquiries than any other portal.', rating: 5, type: 'Broker' },
  { name: 'Sneha Nair', city: 'Hyderabad', text: 'Got a great deal on my investment property. The market trend reports were incredibly useful for decision making.', rating: 5, type: 'Investor' },
]

export default function Home() {
  return (
    <div className="min-h-screen" style={{background:'#003d3d'}}>
      <Navbar />
      <HeroSection />
      <FeaturedProperties />
      <PopularCities />

      {/* ── Browse by Property Type ── */}
      <section className="py-20" style={{background:'#002a2a'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{color:'#F5C000'}}>What Are You Looking For?</p>
            <h2 className="section-title text-4xl md:text-5xl text-white">Browse by <span style={{color:'#F5C000'}}>Property Type</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PROPERTY_TYPES.map(({ label, icon: Icon, count }) => (
              <button key={label}
                className="glass rounded-2xl p-5 flex flex-col items-center gap-3 group hover:border-[#F5C000] transition-all duration-300 card-hover"
                style={{border:'1px solid rgba(0,110,110,.3)'}}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                  style={{background:'rgba(245,192,0,.12)'}}>
                  <Icon size={22} style={{color:'#F5C000'}} />
                </div>
                <div className="text-center">
                  <div className="text-white text-sm font-semibold">{label}</div>
                  <div className="text-white/40 text-xs mt-0.5">{count}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why ALAYAA ── */}
      <section className="py-20" style={{background:'#003d3d'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{color:'#F5C000'}}>Why Choose Us</p>
            <h2 className="section-title text-4xl md:text-5xl text-white">The ALAYAA <span style={{color:'#F5C000'}}>Advantage</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="glass rounded-2xl p-6 text-center card-hover"
                style={{ animationDelay: `${i * .1}s` }}>
                <div className="w-14 h-14 gold-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon size={24} style={{ color: '#002a2a' }} />
                </div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services (99acres-style) ── */}
      <section id="services" className="py-20" style={{background:'#002a2a'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{color:'#F5C000'}}>All-in-One Platform</p>
            <h2 className="section-title text-4xl md:text-5xl text-white">Beyond Property <span style={{color:'#F5C000'}}>Search</span></h2>
            <p className="text-white/50 mt-3 max-w-xl mx-auto">Everything you need before, during, and after buying or renting — all on ALAYAA.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(({ icon: Icon, title, desc, cta, color }) => (
              <div key={title} className="glass rounded-2xl p-6 card-hover group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{background:`${color}18`}}>
                  <Icon size={22} style={{color}} />
                </div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{desc}</p>
                <button className="flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all"
                  style={{color}}>
                  {cta} <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20" style={{background:'#003d3d'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{color:'#F5C000'}}>Real Stories</p>
            <h2 className="section-title text-4xl md:text-5xl text-white">What Our <span style={{color:'#F5C000'}}>Users Say</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="glass rounded-2xl p-6 flex flex-col gap-4">
                <div className="flex">
                  {[...Array(t.rating)].map((_, s) => <Star key={s} size={14} fill="#F5C000" style={{color:'#F5C000'}} />)}
                </div>
                <p className="text-white/70 text-sm leading-relaxed italic">"{t.text}"</p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-teal-600/20">
                  <div className="w-9 h-9 rounded-full gold-gradient flex items-center justify-center font-bold text-sm text-teal-950">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{t.name}</div>
                    <div className="text-white/40 text-xs">{t.type} · {t.city}</div>
                  </div>
                  <CheckCircle size={16} className="ml-auto" style={{color:'#F5C000'}} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── For Brokers/Agents CTA ── */}
      <section className="py-16" style={{background:'linear-gradient(135deg, #001a1a 0%, #003d3d 100%)'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{color:'#F5C000'}}>For Brokers & Agents</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                Grow Your Business<br /><span style={{color:'#F5C000'}}>with ALAYAA</span>
              </h2>
              <p className="text-white/50 mb-6 text-lg">
                Join 8,000+ verified agents. Get premium leads, manage listings, track enquiries, and close deals faster.
              </p>
              <ul className="space-y-2 mb-8">
                {['Free property listing', '5x more leads vs other portals', 'Dedicated broker dashboard', 'Priority listing visibility', 'Direct buyer-seller connect'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-white/70 text-sm">
                    <CheckCircle size={15} style={{color:'#F5C000'}} /> {f}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <a href="/broker/login" className="btn-gold px-6 py-3 rounded-xl font-semibold">Register as Broker/Agent</a>
                <a href="#" className="btn-outline px-6 py-3 rounded-xl font-semibold">Learn More</a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Avg. Monthly Leads', value: '120+', icon: Users },
                { label: 'Active Brokers', value: '8,000+', icon: Award },
                { label: 'Properties Listed', value: '45K+', icon: Building2 },
                { label: 'Deals Closed', value: '2.4L+', icon: IndianRupee },
              ].map(({ label, value, icon: Icon }) => (
                <div key={label} className="glass rounded-2xl p-5 text-center">
                  <Icon size={22} className="mx-auto mb-2" style={{color:'#F5C000'}} />
                  <div className="text-2xl font-bold text-white font-heading">{value}</div>
                  <div className="text-white/40 text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section className="py-16 gold-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-teal-950 mb-4">
            Ready to find your dream home?
          </h2>
          <p className="text-teal-900/70 mb-8 text-lg">
            Join over 1.2 million happy customers who found their perfect property on ALAYAA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-900 text-[#F5C000] px-8 py-4 rounded-xl text-base font-semibold hover:bg-teal-800 transition-all">
              Browse Properties
            </button>
            <button className="border-2 border-teal-900 text-teal-900 hover:bg-teal-900 hover:text-[#F5C000] transition-all px-8 py-4 rounded-xl text-base font-semibold">
              Post Property FREE
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
