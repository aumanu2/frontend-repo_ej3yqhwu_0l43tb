import { useState } from 'react'
import api from '../lib/api'

export default function Checkout() {
  const [form, setForm] = useState({ email: '', address: '' })
  const items = [
    { id: 'st-laurent-coat', name: 'Wool Cashmere Overcoat', price: 2490, quantity: 1 },
    { id: 'ysl-boots-chelsea', name: 'Leather Chelsea Boots', price: 1290, quantity: 1 },
  ]
  const total = items.reduce((s,i)=> s + i.price * i.quantity, 0)

  const pay = async (e) => {
    e.preventDefault()
    await api.checkout({ items, email: form.email, shipping_address: form.address })
    alert('Checkout initialized')
  }

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-2 gap-12">
      <div>
        <h1 className="text-3xl md:text-4xl font-semibold">Checkout</h1>
        <form onSubmit={pay} className="mt-8 space-y-4">
          <input className="w-full bg-black border border-white/10 px-4 py-3" placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
          <textarea className="w-full bg-black border border-white/10 px-4 py-3 h-40" placeholder="Shipping Address" value={form.address} onChange={e=>setForm({...form, address:e.target.value})} required />
          <button className="px-6 py-3 bg-white text-black uppercase tracking-widest text-sm">Pay ${total.toFixed(2)}</button>
        </form>
      </div>
      <div>
        <div className="rounded-lg border border-white/10 p-6">
          <div className="uppercase tracking-widest text-xs text-white/60 mb-3">Order Summary</div>
          <div className="space-y-3">
            {items.map(i=> (
              <div key={i.id} className="flex items-center justify-between">
                <div className="text-white/80">{i.name}</div>
                <div className="text-yellow-400">${i.price.toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 mt-4 pt-4 flex items-center justify-between">
            <div className="text-white/60">Total</div>
            <div className="text-yellow-400">${total.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
