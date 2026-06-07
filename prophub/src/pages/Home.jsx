import React from 'react'
import Navbar from '../components/Navbar.jsx'
import HeroSection from '../components/HeroSection.jsx'
import FeaturedProperties from '../components/FeaturedProperties.jsx'
import PopularCities from '../components/PopularCities.jsx'
import Footer from '../components/Footer.jsx'
import { Shield, Clock, Award, Headphones } from 'lucide-react'

const WHY_US = [
  { icon: Shield, title: 'Verified Listings', desc: 'Every property is personally verified by our agents before listing.' },
  { icon: Clock, title: 'Quick Closures', desc: 'Connect with owners directly — no middlemen, faster decisions.' },
  { icon: Award, title: 'Award Winning', desc: 'Rated #1 real estate platform in India for 3 consecutive years.' },
  { icon: Headphones, title: '24/7 Support', desc: 'Expert property consultants available round the clock for you.' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      <Navbar />
      <HeroSection />
      <FeaturedProperties />
      <PopularCities />

      {/* Why PropHub Section */}
      <section className="py-20 bg-[#FFFFF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-medium tracking-widest uppercase mb-3">Why Choose Us</p>
            <h2 className="section-title text-4xl md:text-5xl text-[#3E2C20]">
              The PropHub <span className="text-gold">Advantage</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="glass rounded-2xl p-6 text-center card-hover"
                style={{ animationDelay: `${i * .1}s` }}>
                <div className="w-14 h-14 gold-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon size={24} style={{ color: '#FFFFF0' }} />
                </div>
                <h3 className="text-[#3E2C20] font-semibold mb-2">{title}</h3>
                <p className="text-[#7A6A58] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #6F4E37 0%, #5a3d2b 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFF0] mb-4">
            Ready to find your <span className="text-[#D2B48C]">dream home?</span>
          </h2>
          <p className="text-[#F5E6D3] mb-8 text-lg">
            Join over 1.2 million happy customers who found their perfect property on PropHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-gold px-8 py-4 rounded-xl text-base font-semibold">
              Browse Properties
            </button>
            <button className="border-2 border-[#D2B48C] text-[#D2B48C] hover:bg-[#D2B48C] hover:text-[#3E2C20] transition-all px-8 py-4 rounded-xl text-base font-semibold">
              List Your Property
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
