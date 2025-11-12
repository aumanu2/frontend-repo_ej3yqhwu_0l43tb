import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="relative min-h-[70vh]">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop" alt="atelier" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative max-w-4xl mx-auto px-6 py-24">
        <motion.h1 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-4xl font-semibold">Our Story</motion.h1>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.2}} className="mt-6 text-white/70 leading-relaxed">
          Born from a devotion to modern minimalism, LUXE celebrates precision and restraint. Our collections are crafted with architectural lines, premium textiles, and uncompromising attention to detail. We design for those who appreciate silence over noise, quality over quantity, and black over everything.
        </motion.p>
      </div>
    </section>
  )
}
