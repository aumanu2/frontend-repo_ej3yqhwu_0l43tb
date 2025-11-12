import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxShowcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8])
  const zMove = useTransform(scrollYProgress, [0, 1], [-120, 120])
  const yMove = useTransform(scrollYProgress, [0, 1], [40, -40])

  const card = (src, delay=0) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5"
    >
      <img src={src} alt="look" className="w-full h-72 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </motion.div>
  )

  return (
    <section ref={ref} className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl tracking-widest uppercase">Immersive Looks</h2>
          <p className="text-white/60 mt-2">A subtle 3D parallax as you scroll.</p>
        </div>

        <div className="relative [perspective:1200px]">
          <motion.div style={{ rotateY: rotate, translateZ: zMove, y: yMove }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 will-change-transform">
            {card('https://images.unsplash.com/photo-1519764622345-23439dd774f6?q=80&w=1600&auto=format&fit=crop', 0)}
            {card('https://images.unsplash.com/photo-1520975922215-cf74a85bd843?q=80&w=1600&auto=format&fit=crop', 0.05)}
            {card('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop', 0.1)}
            {card('https://images.unsplash.com/photo-1544133789-88bf4b0fd2f6?q=80&w=1600&auto=format&fit=crop', 0.15)}
            {card('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop', 0.2)}
            {card('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop', 0.25)}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
