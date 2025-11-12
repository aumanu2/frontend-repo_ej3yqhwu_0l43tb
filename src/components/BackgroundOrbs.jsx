import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function BackgroundOrbs() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  const ySlow = useTransform(scrollYProgress, [0, 1], [0, 120])
  const yMed = useTransform(scrollYProgress, [0, 1], [0, -180])
  const yFast = useTransform(scrollYProgress, [0, 1], [0, 240])

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 -z-10 [perspective:1200px] overflow-hidden">
      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.06),transparent_60%)]" />

      {/* Orb 1 */}
      <motion.div style={{ y: ySlow }}
        className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl"
        aria-hidden>
        <div className="w-full h-full rounded-full opacity-30" style={{
          background: 'conic-gradient(from 0deg, rgba(234,179,8,0.25), rgba(255,255,255,0.05))',
          transform: 'translateZ(-200px)'
        }} />
      </motion.div>

      {/* Orb 2 */}
      <motion.div style={{ y: yMed }}
        className="absolute top-1/3 -right-20 w-96 h-96 rounded-full blur-3xl"
        aria-hidden>
        <div className="w-full h-full rounded-full opacity-30" style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08), rgba(234,179,8,0.18), rgba(0,0,0,0))',
          transform: 'translateZ(-400px)'
        }} />
      </motion.div>

      {/* Orb 3 */}
      <motion.div style={{ y: yFast }}
        className="absolute bottom-[-6rem] left-1/3 w-[28rem] h-[28rem] rounded-full blur-[90px]"
        aria-hidden>
        <div className="w-full h-full rounded-full opacity-25" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(234,179,8,0.24), rgba(234,179,8,0.05), rgba(0,0,0,0))',
          transform: 'translateZ(-600px)'
        }} />
      </motion.div>
    </div>
  )
}
