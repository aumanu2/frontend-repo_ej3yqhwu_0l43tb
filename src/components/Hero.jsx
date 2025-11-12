import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black pointer-events-none" />
      <div className="relative z-10 text-center px-6">
        <motion.h1 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.8}} className="text-5xl md:text-7xl font-semibold tracking-tight">
          Modern Luxury
        </motion.h1>
        <motion.p initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.2, duration:0.8}} className="mt-4 text-white/70 max-w-2xl mx-auto">
          A curated collection inspired by the world’s most coveted maisons. Minimal, black, and bold.
        </motion.p>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.4}} className="mt-10 flex items-center justify-center gap-4">
          <a href="/collections/women" className="px-6 py-3 bg-white text-black uppercase tracking-widest text-sm hover:bg-yellow-400 transition">Shop Women</a>
          <a href="/collections/men" className="px-6 py-3 border border-white/20 text-white uppercase tracking-widest text-sm hover:border-yellow-400 hover:text-yellow-400 transition">Shop Men</a>
        </motion.div>
      </div>
    </section>
  )
}
