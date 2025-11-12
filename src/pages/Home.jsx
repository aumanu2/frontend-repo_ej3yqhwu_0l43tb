import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import ParallaxShowcase from '../components/ParallaxShowcase'
import api from '../lib/api'
import { motion } from 'framer-motion'

export default function Home() {
  const [featured, setFeatured] = useState([])
  const [arrivals, setArrivals] = useState([])

  useEffect(() => {
    api.featured().then(setFeatured).catch(()=>{})
    api.newArrivals().then(setArrivals).catch(()=>{})
  }, [])

  return (
    <div>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-2xl tracking-widest uppercase mb-6">Featured</motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <ParallaxShowcase />

      <section className="relative py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-2xl tracking-widest uppercase mb-6">New Arrivals</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {arrivals.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-lg border border-white/10 p-10 text-center bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]">
          <h3 className="text-xl tracking-widest uppercase">Join Our Circle</h3>
          <p className="text-white/60 mt-2">Exclusive drops and private events, sent occasionally.</p>
          <form className="mt-6 flex max-w-md mx-auto">
            <input type="email" required placeholder="Email address" className="flex-1 bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-yellow-400" />
            <button className="px-6 bg-white text-black uppercase tracking-widest text-sm">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  )
}
