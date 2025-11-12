import { useState } from 'react'
import api from '../lib/api'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    try {
      await api.contact(form)
      setSent(true)
    } catch (e) {}
  }

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-2 gap-12">
      <div>
        <motion.h1 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-3xl md:text-4xl font-semibold">Contact</motion.h1>
        <p className="text-white/60 mt-2">We’d love to hear from you.</p>
        <form onSubmit={submit} className="mt-8 space-y-4">
          <input className="w-full bg-black border border-white/10 px-4 py-3" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
          <input className="w-full bg-black border border-white/10 px-4 py-3" placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
          <textarea className="w-full bg-black border border-white/10 px-4 py-3 h-40" placeholder="Message" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required />
          <button className="px-6 py-3 bg-white text-black uppercase tracking-widest text-sm">Send</button>
          {sent && <div className="text-green-400">Message sent! We will be in touch.</div>}
        </form>
      </div>
      <div className="space-y-6">
        <div className="rounded-lg border border-white/10 p-6">
          <div className="uppercase tracking-widest text-xs text-white/60">Flagship</div>
          <div className="mt-2 text-white/80">10 Rue de Luxe, Paris</div>
          <div className="text-white/60">+33 1 23 45 67 89</div>
        </div>
        <div className="rounded-lg overflow-hidden border border-white/10">
          <iframe title="map" src="https://www.openstreetmap.org/export/embed.html?bbox=2.332%2C48.861%2C2.342%2C48.866&layer=mapnik" className="w-full h-64" />
        </div>
      </div>
    </section>
  )
}
